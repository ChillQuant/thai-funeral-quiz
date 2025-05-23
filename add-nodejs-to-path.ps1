$nodePath = "C:\Program Files\nodejs"
$currentPath = [Environment]::GetEnvironmentVariable("Path", "User")
if (-not $currentPath.Contains($nodePath)) {
    $newPath = $currentPath + ";" + $nodePath
    [Environment]::SetEnvironmentVariable("Path", $newPath, "User")
    Write-Host "Node.js has been added to your PATH"
} else {
    Write-Host "Node.js is already in your PATH"
} 