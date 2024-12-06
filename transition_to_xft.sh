#!/bin/bash

# Navigate to project directory
cd /workspaces/docs-template || { echo "Directory not found"; exit 1; }

# Rename 'centrifuge' to 'xft' in directory names
find docs -depth -type d -name '*centrifuge*' | while read dir; do
    new_dir=$(echo "$dir" | sed 's/centrifuge/xft/g')
    mv "$dir" "$new_dir"
done

# Replace 'Centrifuge' with 'XFT' in Markdown files
find docs -type f -name '*.md' -exec sed -i 's/Centrifuge/XFT/g' {} +
find docs -type f -name '*.md' -exec sed -i 's/centrifuge/xft/g' {} +

# Commit changes
git add docs src/images
git commit -m "Automated transition from Centrifuge to XFT documentation structure and content"
git push origin xft-v1

echo "Documentation transition to XFT completed and pushed to xft-v1 branch."