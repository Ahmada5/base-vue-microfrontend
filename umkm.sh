#!/bin/bash

# Array of project directories
PROJECTS=("umkm-main-base" "umkm-product" "umkm-profile")

# Loop through each project
for project in "${PROJECTS[@]}"
do
    echo "Processing project: $project"
    cd $project
    echo "Installing dependencies for $project..."
    pnpm install
    cd ..
    echo "$project install complete."
done

echo "ready to run"

