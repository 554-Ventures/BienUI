# Publishing @bien/ui to NPM

This guide covers how to publish your component library to NPM registry.

## 🛠️ Prerequisites

### 1. NPM Account Setup
- Create an account on [npmjs.com](https://www.npmjs.com/)
- Verify your email address
- Enable 2FA (required for publishing scoped packages)

### 2. NPM Token Creation
1. Log in to npmjs.com
2. Go to **Access Tokens** → **Generate New Token**
3. Choose **Automation** token type
4. Copy the token (starts with `npm_`)

### 3. GitHub Secrets Setup
1. Go to your GitHub repository → **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Name: `NPM_TOKEN`
4. Value: Your npm token from step 2
5. Click **Add secret**

## 📦 Publishing Methods

### Method 1: Automated Publishing (Recommended)

#### Manual Trigger
1. Go to **Actions** tab in your GitHub repository
2. Select **Publish to NPM** workflow
3. Click **Run workflow**
4. Choose:
   - **Version type**: `patch`, `minor`, or `major`
   - **NPM tag**: `latest`, `beta`, or `alpha`
5. Click **Run workflow**

#### Tag-based Publishing
```bash
# Create and push a version tag
git tag v1.0.0
git push origin v1.0.0
```

### Method 2: Manual Publishing

#### Local Setup
```bash
# Login to NPM
npm login

# Build the library
yarn build:lib

# Test the package
npm publish --dry-run

# Publish to NPM
npm publish
```

#### Version Management
```bash
# Bump version and publish
yarn version:patch  # 0.1.0 → 0.1.1
yarn version:minor  # 0.1.0 → 0.2.0  
yarn version:major  # 0.1.0 → 1.0.0

# Then publish
npm publish
```

## 🏷️ NPM Tags

- **`latest`**: Stable release (default)
- **`beta`**: Beta releases for testing
- **`alpha`**: Alpha releases for early access

```bash
# Publish with specific tag
npm publish --tag beta
npm publish --tag alpha
```

## 📋 Publishing Checklist

Before publishing, ensure:

- [ ] All tests pass (`yarn lint`)
- [ ] Code is formatted (`yarn format:check`)
- [ ] Library builds successfully (`yarn build:lib`)
- [ ] Version number is appropriate
- [ ] CHANGELOG.md is updated
- [ ] README.md includes installation instructions
- [ ] No sensitive data in package files

## 🎯 Post-Publishing

After successful publishing:

1. **✅ Package appears on NPM**: https://www.npmjs.com/package/@bien/ui
2. **📚 Storybook updates**: Automatic deployment with new version
3. **🏷️ GitHub Release**: Auto-created with changelog
4. **🔄 Documentation**: Update any docs with new version

## 📄 Package Installation

Users can install your package with:

```bash
# NPM
npm install @bien/ui

# Yarn
yarn add @bien/ui

# PNPM
pnpm add @bien/ui
```

## 🔍 Verify Publication

```bash
# Check package info
npm info @bien/ui

# Check all versions
npm view @bien/ui versions --json

# Check specific version
npm info @bien/ui@1.0.0
```

## 🚨 Troubleshooting

### Common Issues

1. **403 Forbidden**: Check NPM token permissions
2. **Package name taken**: Use a different scoped name
3. **Version already exists**: Bump version number
4. **2FA required**: Enable 2FA on NPM account

### Emergency Unpublish

```bash
# Unpublish specific version (within 72 hours)
npm unpublish @bien/ui@1.0.0

# Unpublish entire package (use with caution)
npm unpublish @bien/ui --force
```

## 🔗 Useful Links

- [NPM Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [Semantic Versioning](https://semver.org/)
- [NPM Scoped Packages](https://docs.npmjs.com/about-scoped-packages)