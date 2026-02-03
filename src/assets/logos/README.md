# Logo Assets

This directory contains the Workarc logo assets that are bundled with the `@bienui/core` package.

## Included Files

The following logo files are automatically included when you install `@bienui/core`:

1. **Workarc_icon.png** - The icon-only version for small UI usage (e.g., collapsed panels, app icons)
2. **WorkarcLogo.png** - The full logo for light theme backgrounds  
3. **WorkarcLogoInverse.png** - The full logo for dark theme backgrounds

## Usage

The Logo component automatically uses these bundled assets, so no additional setup is required:

```tsx
import { Logo } from '@bienui/core';

// Icon variant (uses Workarc_icon.png)
<Logo variant="icon" size="md" />

// Light theme (uses WorkarcLogo.png)  
<Logo variant="horizontal" size="lg" theme="light" />

// Dark theme (uses WorkarcLogoInverse.png)
<Logo variant="horizontal" size="lg" theme="dark" />
```

## File Requirements

- **Format**: PNG with transparent backgrounds
- **Quality**: High-resolution for crisp display at all sizes
- **Naming**: Exact filenames as listed above for automatic detection

## Package Distribution

These logo assets are bundled as part of the `@bienui/core` package, ensuring:
- ✅ **No missing images** - Assets are always available when the package is installed
- ✅ **Consistent branding** - Same logos across all implementations  
- ✅ **Zero configuration** - Works out of the box without additional setup
- ✅ **Optimized delivery** - Images are processed and optimized during build

## Build Integration

The build system automatically:
1. Optimizes PNG files for smaller bundle size
2. Generates proper TypeScript declarations for imports
3. Handles asset paths for different deployment scenarios
4. Ensures images are available in both development and production

## Custom Logo Override

If you need to use different logo assets in your implementation, you can override them by providing your own Logo component:

```tsx
import { forwardRef } from 'react';
import customIcon from './assets/custom-icon.png';
import customLogo from './assets/custom-logo.png';

const CustomLogo = forwardRef(({ variant, theme, ...props }, ref) => {
  const logoSrc = variant === 'icon' ? customIcon : customLogo;
  return <img ref={ref} src={logoSrc} {...props} />;
});
```