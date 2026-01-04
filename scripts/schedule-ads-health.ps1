param(
  [string]$Domain = "mo-kebap.de",
  [string]$Time = "08:00"  # HH:mm (local time)
)

$taskName = "MoKebap-AdsHealthDaily"
$scriptPath = Join-Path $PSScriptRoot "ads-health-check.ps1"
$scriptFull = (Resolve-Path $scriptPath).Path

Write-Host "Registering scheduled task '$taskName' to run daily at $Time for domain $Domain" -ForegroundColor Cyan

# Build action
$arguments = "-NoProfile -ExecutionPolicy Bypass -File `"$scriptFull`" -Domain $Domain"
$action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument $arguments

# Build trigger
try {
  $atTime = [DateTime]::ParseExact($Time, 'HH:mm', $null)
} catch {
  Write-Error "Invalid time format. Use HH:mm, e.g. 08:00"
  exit 1
}
$trigger = New-ScheduledTaskTrigger -Daily -At $atTime

# Settings
$settings = New-ScheduledTaskSettingsSet -StartWhenAvailable -AllowStartIfOnBatteries

# Register (under current user context)
Register-ScheduledTask -TaskName $taskName -Action $action -Trigger $trigger -Settings $settings -Description "Daily AdSense health check for $Domain" -Force | Out-Null

Write-Host "Scheduled. You can view it in Task Scheduler > Task Scheduler Library." -ForegroundColor Green

# Kick off a first run now for confirmation
try {
  Start-ScheduledTask -TaskName $taskName
  Write-Host "Triggered first run. Check logs folder for output." -ForegroundColor Green
} catch {
  Write-Warning "Task registered but could not start immediately: $($_.Exception.Message)"
}
