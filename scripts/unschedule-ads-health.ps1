$taskName = "MoKebap-AdsHealthDaily"
if (Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue) {
  Unregister-ScheduledTask -TaskName $taskName -Confirm:$false
  Write-Host "Unregistered scheduled task '$taskName'." -ForegroundColor Yellow
} else {
  Write-Host "Task '$taskName' not found." -ForegroundColor Gray
}
