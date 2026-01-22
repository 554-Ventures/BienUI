#!/bin/bash

# GitHub Pages Setup Helper
echo "🚀 Setting up GitHub Pages for Storybook deployment..."
echo ""

# Get repository information
REPO_URL=$(git config --get remote.origin.url)
if [[ $REPO_URL =~ github\.com[:/]([^/]+)/([^/]+)(\.git)?$ ]]; then
    USERNAME="${BASH_REMATCH[1]}"
    REPO_NAME="${BASH_REMATCH[2]}"
    REPO_NAME="${REPO_NAME%.git}"  # Remove .git if present
else
    echo "❌ Could not determine GitHub repository information"
    echo "Make sure you're in a Git repository with a GitHub remote"
    exit 1
fi

echo "📊 Repository detected:"
echo "  Username: $USERNAME"
echo "  Repository: $REPO_NAME"
echo ""

# Show GitHub Pages URL
PAGES_URL="https://$USERNAME.github.io/$REPO_NAME/"
echo "📚 Your Storybook will be available at:"
echo "  $PAGES_URL"
echo ""

# Show setup instructions
echo "🛠️  Setup Instructions:"
echo "1. Go to: https://github.com/$USERNAME/$REPO_NAME/settings/pages"
echo "2. Under 'Source', select 'GitHub Actions'"
echo "3. Push this commit to main/master branch"
echo "4. Wait for the GitHub Action to complete (~2-3 minutes)"
echo "5. Visit your Storybook at: $PAGES_URL"
echo ""

echo "🔧 Available commands:"
echo "  yarn version:patch       # Bump patch version (0.1.0 -> 0.1.1)"
echo "  yarn version:minor       # Bump minor version (0.1.0 -> 0.2.0)"  
echo "  yarn version:major       # Bump major version (0.1.0 -> 1.0.0)"
echo "  yarn build-storybook     # Build Storybook locally"
echo ""

echo "✅ Setup complete! Commit and push to deploy your Storybook."