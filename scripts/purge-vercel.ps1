<#
Usage:
  - Option A (with Vercel CLI installed): run this script in project root to trigger a production redeploy
    ./scripts/purge-vercel.ps1

  - Option B (without CLI): set environment variable VERCEL_TOKEN and run `npx vercel --prod --confirm`

This script attempts to use the `vercel` CLI if present, otherwise falls back to `npx vercel` (you will be prompted to login if required).
#>

Write-Host "Starting Vercel redeploy (will force new production deployment)"

# Try to run vercel CLI first
$vercelPath = (Get-Command vercel -ErrorAction SilentlyContinue).Source
if ($vercelPath) {
    Write-Host "Found vercel CLI at: $vercelPath"
  # Usunięto problematyczną linię informacyjną
    vercel --prod --yes
    exit $LASTEXITCODE
}

# Fallback to npx
Write-Host "vercel CLI not found locally - falling back to npx vercel. You may be prompted to login."
  # Usunięto problematyczną linię informacyjną
npx vercel --prod --yes
exit $LASTEXITCODE
