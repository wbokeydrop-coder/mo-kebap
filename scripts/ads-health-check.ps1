param(
  [string]$Domain = "mo-kebap.de"
)

$timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
$logDir = Join-Path $PSScriptRoot "..\logs"
$null = New-Item -ItemType Directory -Force -Path $logDir
$logFile = Join-Path $logDir "ads-health-$($Domain)-$timestamp.txt"

function Write-Log($text) {
  $text | Tee-Object -FilePath $logFile -Append
}

Write-Log "=== ADSENSE HEALTH CHECK ($Domain) - $([DateTime]::Now.ToString('s')) ==="

$urls = @(
  "https://$Domain/ads.txt",
  "https://www.$Domain/ads.txt",
  "https://$Domain/robots.txt",
  "https://www.$Domain/robots.txt"
)

foreach ($u in $urls) {
  Write-Log "\n--- $u ---"
  try {
    $r = Invoke-WebRequest -Uri $u -UseBasicParsing -TimeoutSec 20
    Write-Log ("Status: {0}" -f $r.StatusCode)
    Write-Log ("Content-Type: {0}" -f $r.Headers.'Content-Type')
    Write-Log ("Cache-Control: {0}" -f $r.Headers.'Cache-Control')
    if ($u -match 'ads.txt') {
      $line = $r.Content.Trim()
      Write-Log ("Content: {0}" -f $line)
      if ($line -match 'google\.com,\s*pub-3490607792366389') { Write-Log "Check: Publisher ID OK" } else { Write-Log "Check: Publisher ID MISSING" }
      if ($r.StatusCode -eq 200 -and ($r.Headers.'Content-Type' -match 'text/plain')) { Write-Log "Check: MIME OK" } else { Write-Log "Check: MIME INVALID" }
    } else {
      $hasDelay = ($r.Content -match 'Crawl-delay')
      $delayText = if ($hasDelay) { 'YES' } else { 'NO' }
      Write-Log ("Contains Crawl-delay: {0}" -f $delayText)
    }
  } catch {
    Write-Log ("ERROR: $($_.Exception.Message)")
  }
}

Write-Log "\nSummary: If all checks are OK, AdSense should authorize within 24-48h."
Write-Log ("Log saved to: {0}" -f $logFile)
