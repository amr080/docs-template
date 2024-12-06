# Scripts

### Global Naming Logic

Get-ChildItem -Path "C:\Users\alexa\Desktop\Startup\documentation\src\images" -Recurse -File | Where-Object {
     $_.Name -match "centrifuge|tinlake"
 } | ForEach-Object {
     $newName = $_.Name -replace "centrifuge", "xft" -replace "tinlake", "xft"
     Rename-Item -Path $_.FullName -NewName $newName
     Write-Host "Renamed: $($_.Name) -> $newName"
 }

Renamed: centrifuge-documentation-wordmark.svg -> xft-documentation-wordmark.svg
Renamed: centrifuge-logo.png -> xft-logo.png
Renamed: centrifuge_chain.svg -> xft_chain.svg
Renamed: logo-centrifuge-full.svg -> logo-xft-full.svg
Renamed: tinlake_logo_dev.svg -> xft_logo_dev.svg

### Img reference

Target folders
1. src
2. docs
3. plugins

$targetDirectories = @("src", "docs", "plugins")

### Define the mapping of old file names to new file names
$fileRenames = @{
    "centrifuge-documentation-wordmark.svg" = "xft-documentation-wordmark.svg"
    "centrifuge-logo.png" = "xft-logo.png"
    "centrifuge_chain.svg" = "xft_chain.svg"
    "logo-centrifuge-full.svg" = "logo-xft-full.svg"
    "tinlake_logo_dev.svg" = "xft_logo_dev.svg"
}

$targetDirectories = @("src", "docs", "plugins")

### Define the mapping of old file names to new file names
$fileRenames = @{
    "centrifuge-documentation-wordmark.svg" = "xft-documentation-wordmark.svg"
    "centrifuge-logo.png" = "xft-logo.png"
    "centrifuge_chain.svg" = "xft_chain.svg"
    "logo-centrifuge-full.svg" = "logo-xft-full.svg"
    "tinlake_logo_dev.svg" = "xft_logo_dev.svg"
}

foreach ($dir in $targetDirectories) {
    $fullPath = Join-Path -Path "C:\Users\alexa\Desktop\Startup\documentation" -ChildPath $dir

    # Get all relevant code files to update references
    Get-ChildItem -Path $fullPath -Recurse -Include *.html, *.css, *.js, *.md | ForEach-Object {
        $filePath = $_.FullName
        $content = Get-Content -Path $filePath -Raw
        $updatedContent = $content

        # Replace old file names with new file names
        foreach ($oldName in $fileRenames.Keys) {
            $newName = $fileRenames[$oldName]
            $updatedContent = $updatedContent -replace [regex]::Escape($oldName), $newName
        }

        # If changes were made, update the file
        if ($content -ne $updatedContent) {
            Set-Content -Path $filePath -Value $updatedContent
            Write-Host "Updated references in $filePath"
        }
    }
}

Updated references in C:\Users\alexa\Desktop\Startup\documentation\src\components\Home\products.js
Updated references in C:\Users\alexa\Desktop\Startup\documentation\src\components\Layout\index.js
Updated references in C:\Users\alexa\Desktop\Startup\documentation\src\components\Nav\index.js
Updated references in C:\Users\alexa\Desktop\Startup\documentation\src\components\SideNav\index.js




## Clear

$folders = @(".\.cache", ".\public", ".\node_modules")

foreach ($folder in $folders) {
    if (Test-Path $folder) {
        Write-Host "Deleting $folder..."
        Remove-Item -Recurse -Force $folder
        Write-Host "$folder deleted successfully."
    } else {
        Write-Host "$folder does not exist."
    }
}


## Replace 'centrifuge' with 'xft' in files

Get-ChildItem -Path ".." -Recurse -File | ForEach-Object {
    (Get-Content $_.FullName) | ForEach-Object {
        $_ -replace 'centrifuge', 'xft' `
           -replace 'logo-centrifuge', 'logo-xft' `
           -replace 'tinlake', 'xft'
    } | Set-Content $_.FullName
}

## Search for 'icons/' in specific directories

$dirs = "C:\Users\alexa\Desktop\Startup\documentation\src", "C:\Users\alexa\Desktop\Startup\documentation\static"; $pattern = "*.mjs", "*.json"; $searchTerm = "icons/"; $files = Get-ChildItem -Path $dirs -Recurse -Include $pattern -File | Where-Object { $_.FullName -notmatch "\\node_modules\\" }; $total = $files.Count; $count = 0; foreach ($file in $files) { $count++; Write-Progress -Activity "Searching files" -Status "$count out of $total" -PercentComplete (($count / $total) * 100); Select-String -Path $file.FullName -Pattern $searchTerm } 

Get-ChildItem -Path "C:\Users\alexa\Desktop\Startup\documentation" -Recurse -Include "*.mjs", "*.json" | Select-String -Pattern "icons/"