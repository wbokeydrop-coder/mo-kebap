<#
Automatyczne przypięcie domeny do projektu Vercel i redeploy.
Uwaga: wymaga VERCEL_TOKEN (Personal Token) z uprawnieniami do zarządzania projektami i domenami.

Usage:
  # Sposób 1: podaj token jako zmienną środowiskową
  $env:VERCEL_TOKEN = 'your_token_here'
  ./scripts/vercel-attach-and-redeploy.ps1 -ProjectName 'pizzeria-munsingen' -Domain 'mo-kebap.de'

  # Sposób 2: przekaz token jako parametr (nie jest rekomendowane do historii powłoki)
  ./scripts/vercel-attach-and-redeploy.ps1 -ProjectName 'pizzeria-munsingen' -Domain 'mo-kapeb.de' -Token 'your_token_here'

Opis działania:
 1. Sprawdza czy Vercel CLI (npx vercel) jest dostępny.
 2. Dodaje domenę do wskazanego projektu (jeśli jeszcze nie istnieje).
 3. Wykonuje produkcyjny redeploy (npx vercel --prod --yes).
 4. Sprawdza nagłówki dla `https://mo-kebap.de` i `/ads.txt` oraz `/sitemap.xml`.

Uwaga bezpieczeństwa: lepiej ustawić VERCEL_TOKEN jako zmienną środowiskową (nie przekazywać tokenu w linii poleceń).
#>

param(
    [Parameter(Mandatory=$true)]
    [string]$ProjectName,

    [Parameter(Mandatory=$true)]
    [string]$Domain,

    [Parameter(Mandatory=$false)]
    [string]$Token
)

if (-not $Token) {
    $Token = $env:VERCEL_TOKEN
}

if (-not $Token) {
    Write-Error "VERCEL_TOKEN not provided. Set environment variable VERCEL_TOKEN or pass -Token.">
    exit 2
}

# ensure npx available
Write-Host "Using npx vercel with provided token (masked)."

# Prepare a temporary env for the command
$origToken = $env:VERCEL_TOKEN
$env:VERCEL_TOKEN = $Token

try {
    Write-Host "Adding domain $Domain to project $ProjectName (if not present)..."
    # Attempt to add domain to project
    npx --yes vercel domains add $Domain --project $ProjectName --yes

    Write-Host "Triggering prod deploy..."
    npx --yes vercel --prod --confirm --yes

    Start-Sleep -Seconds 3

    Write-Host "Checking production endpoints (may take a moment for DNS/propagation)..."

    $rootHeaders = (Invoke-WebRequest -Uri "https://$Domain" -UseBasicParsing -Method Head -ErrorAction SilentlyContinue).Headers
    if ($rootHeaders) {
        Write-Host "Root headers for https://$Domain:" -ForegroundColor Green
        $rootHeaders | Format-List
    } else {
        Write-Warning "Could not fetch HEAD for https://$Domain — it may require DNS propagation or manual verification in Vercel." 
    }

    $ads = (Invoke-WebRequest -Uri "https://$Domain/ads.txt" -UseBasicParsing -ErrorAction SilentlyContinue).Content
    if ($ads) {
        Write-Host "ads.txt content:" -ForegroundColor Green
        Write-Host $ads
    } else {
        Write-Warning "ads.txt not reachable at https://$Domain/ads.txt"
    }

    $sitemap = (Invoke-WebRequest -Uri "https://$Domain/sitemap.xml" -UseBasicParsing -ErrorAction SilentlyContinue).Content
    if ($sitemap) {
        Write-Host "sitemap.xml content (preview):" -ForegroundColor Green
        $sitemap.Substring(0, [Math]::Min(800, $sitemap.Length))
    } else {
        Write-Warning "sitemap.xml not reachable at https://$Domain/sitemap.xml"
    }

    Write-Host "Done. If domain required verification, check Vercel Dashboard -> Domains and add required DNS TXT record."
}
finally {
    # restore
    $env:VERCEL_TOKEN = $origToken
}
