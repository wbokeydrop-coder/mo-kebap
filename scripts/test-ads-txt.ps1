# Test ads.txt accessibility for Google AdSense
# Run this after fixing Vercel domain configuration

Write-Host "`n=== TESTING ADS.TXT FOR ADSENSE COMPLIANCE ===`n" -ForegroundColor Cyan

$domains = @(
    "https://mo-kebap.de/ads.txt",
    "https://www.mo-kebap.de/ads.txt"
)

foreach ($url in $domains) {
    Write-Host "Testing: $url" -ForegroundColor Yellow
    
    try {
        # Test without following redirects
        $response = Invoke-WebRequest -Uri $url -MaximumRedirection 0 -ErrorAction Stop -UseBasicParsing
        
        if ($response.StatusCode -eq 200) {
            Write-Host "  ✅ Status: 200 OK (GOOD!)" -ForegroundColor Green
            Write-Host "  ✅ No redirects" -ForegroundColor Green
            
            $content = $response.Content
            if ($content -match "google\.com.*pub-3490607792366389") {
                Write-Host "  ✅ Publisher ID found" -ForegroundColor Green
            } else {
                Write-Host "  ❌ Publisher ID NOT found" -ForegroundColor Red
            }
            
            Write-Host "  📄 Content length: $($content.Length) bytes" -ForegroundColor Gray
            
        } else {
            Write-Host "  ❌ Status: $($response.StatusCode) (BAD!)" -ForegroundColor Red
        }
        
    } catch {
        $statusCode = $_.Exception.Response.StatusCode.value__
        
        if ($statusCode -in @(301, 302, 307, 308)) {
            Write-Host "  ❌ Status: $statusCode REDIRECT (BAD FOR ADSENSE!)" -ForegroundColor Red
            
            $location = $_.Exception.Response.Headers.Location
            if ($location) {
                Write-Host "  📍 Redirects to: $location" -ForegroundColor Yellow
            }
            
            Write-Host "  ⚠️  Google AdSense WILL NOT follow redirects!" -ForegroundColor Red
            Write-Host "  ⚠️  FIX: Remove redirect in Vercel domain settings" -ForegroundColor Red
            
        } else {
            Write-Host "  ❌ Error: $statusCode - $($_.Exception.Message)" -ForegroundColor Red
        }
    }
    
    Write-Host ""
}

Write-Host "`n=== RECOMMENDATIONS ===`n" -ForegroundColor Cyan

Write-Host "✅ BOTH domains should return Status 200 (not 307!)" -ForegroundColor Green
Write-Host "✅ NO redirects allowed for ads.txt" -ForegroundColor Green
Write-Host "✅ Content must contain: google.com, pub-3490607792366389, DIRECT, f08c47fec0942fa0" -ForegroundColor Green

Write-Host "`n=== VERCEL FIX NEEDED ===`n" -ForegroundColor Yellow
Write-Host "1. Go to: https://vercel.com/djedm87-2370s-projects/pizzeria-munsingen/settings/domains"
Write-Host "2. Click on 'mo-kebap.de' domain"
Write-Host "3. Change from 'Redirect to Another Domain' to 'Connect to an environment' -> Production"
Write-Host "4. Save changes"
Write-Host "5. Wait 2-3 minutes for DNS propagation"
Write-Host "6. Run this script again to verify"

Write-Host "`n=== EXTERNAL VALIDATION ===`n" -ForegroundColor Cyan
Write-Host "After fixing, verify with external tools:"
Write-Host "  • https://adstxt.guru/mo-kebap.de"
Write-Host "  • https://adstxt.com/verify/mo-kebap.de"
Write-Host ""
