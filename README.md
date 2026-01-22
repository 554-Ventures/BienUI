# BienUI Core

A production-ready, accessibility-first React component library built with:

- **TypeScript** for type safety and excellent DX
- **Radix UI** primitives for robust accessibility
- **Comprehensive Storybook** documentation with a11y testing
- **Token-first theming** with light/dark modes + comfortable/compact density
- **Modern build system** with ESM/CJS dual output
- **CI/CD automation** for seamless publishing

## 📦 Installation

```bash
npm install @bienui/core
# or
yarn add @bienui/core
# or
pnpm add @bienui/core
```

## 🚀 Development

### Quick Start

```bash
# Install dependencies
yarn install

# Start Storybook (development)
yarn storybook

# Build library
yarn build:lib
```

### Build Commands

```bash
# Build the component library
yarn build:lib

# Build Storybook for production
yarn build-storybook

# Preview Vite build
yarn preview
```

### Development Commands

```bash
# Run Storybook (development mode)
yarn storybook

# Lint code
yarn lint

# Fix linting issues
yarn lint:fix

# Format code
yarn format

# Format check (CI)
yarn format:check

# Dry run publish
yarn publish:dry
```

### Code Formatting (Auto-setup) 

**✨ Prettier runs automatically on commit and save!**

- **On Commit**: Husky + lint-staged auto-formats staged files
- **On Save**: VS Code auto-formats when you save (if you have Prettier extension)
- **Manual**: Run `yarn format` to format all files

**Setup for new developers:**
1. Install recommended VS Code extensions (prompted automatically)
2. Prettier will format on save automatically  
3. Git commits will auto-format staged files

**Configuration files:**
- `.prettierrc` - Prettier formatting rules
- `.husky/pre-commit` - Git hook for auto-formatting  
- `.vscode/extensions.json` - Recommended extensions
- `package.json` - lint-staged configuration

### Versioning & Publishing

```bash
# Manual version bumping
yarn version:patch  # 1.0.0 -> 1.0.1
yarn version:minor  # 1.0.0 -> 1.1.0  
yarn version:major  # 1.0.0 -> 2.0.0

# Build library
yarn build:lib

# Test publish (dry run)
yarn publish:dry

# Publish to npm (via GitHub Actions)
# Go to Actions -> Publish to NPM -> Run workflow
```

## 🚀 Deployment & GitHub Pages

### Automatic Deployment
- **🔄 Auto-deploy**: Every push to `main`/`master` triggers automatic deployment
- **📈 Auto-versioning**: Version number automatically bumps on each deploy
- **🏷️ Auto-releases**: GitHub releases created automatically with changelog
- **📚 Live Storybook**: Available at your GitHub Pages URL

### Deployment Process
1. **Push to main/master branch**
2. **GitHub Actions automatically**:
   - Bumps patch version (0.1.0 → 0.1.1)
   - Commits version change
   - Builds Storybook with accessibility testing
   - Deploys to GitHub Pages
   - Creates GitHub release with changelog

### Manual Deployment

```bash
# Test build locally
npm run build-storybook

# Test deploy command (builds only)
npm run deploy:storybook
```

### Setup GitHub Pages (One-time)
1. Go to repository **Settings** → **Pages**
2. Set **Source** to "GitHub Actions"
3. The workflow will handle the rest automatically

**Live Storybook URL**: `https://554-ventures.github.io/BienUI/`

## 📚 Using BienUI Core in Your App

### 1. Install package

```bash
npm install @bienui/core
# or
yarn add @bienui/core
# or 
pnpm add @bienui/core
```

### 2. Setup providers and styles

In your app entry point (`main.tsx` or `App.tsx`):

```tsx
import { BienProvider, TooltipProvider, ToastProvider } from '@bienui/core';
import '@bienui/core/styles';

function App() {
  return (
    <BienProvider theme="light" density="comfortable">
      <TooltipProvider>
        <ToastProvider>
          {/* Your app content */}
        </ToastProvider>
      </TooltipProvider>
    </BienProvider>
  );
}
```

### 3. Use components

```tsx
import { Button, Input, Card, Modal, Text } from '@bienui/core';

function MyComponent() {
  return (
    <Card>
      <Text weight="semibold" size="lg">Welcome</Text>
      <Input label="Email" placeholder="you@example.com" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

## 🎨 Theming

### Switch theme dynamically

```tsx
import { useState } from 'react';
import { BienProvider } from '@bienui/core';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [density, setDensity] = useState<'comfortable' | 'compact'>('comfortable');

  return (
    <BienProvider theme={theme} density={density}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
      <button onClick={() => setDensity(density === 'comfortable' ? 'compact' : 'comfortable')}>
        Toggle Density
      </button>
      {/* Your app */}
    </BienProvider>
  );
}
```

### Using design tokens in custom components

```tsx
import { tokens } from '@bienui/core';
import { style } from '@vanilla-extract/css';

export const myCustomStyle = style({
  backgroundColor: tokens.color.surface.base,
  padding: tokens.space.md,
  borderRadius: tokens.radius.lg,
  border: `1px solid ${tokens.color.border.base}`,
});
```

## 🧩 Available Components

### Core Components

- **Button** - Multiple variants (primary, secondary, ghost, danger), sizes, loading states
- **Text** - Typography with size, weight, tone options
- **Card** - Content containers with elevation
- **Input** + **FormField** - Text inputs with label, hint, error, proper ARIA
- **Modal** - Dialog with focus trap, keyboard support (Escape to close)
- **Drawer** - Side-positioned modal (left/right)
- **Tooltip** - Accessible tooltips with positioning
- **Tabs** - Tab navigation with keyboard support
- **Toast** - Notification system with variants (success, error, warning, info)

### Component Features

- ✅ **Full keyboard support** (Tab, Escape, Arrow keys where appropriate)
- ✅ **Proper ARIA attributes** via Radix UI
- ✅ **Focus management** (focus trapping in modals, focus return)
- ✅ **Reduced motion support** (respects `prefers-reduced-motion`)
- ✅ **Type-safe** with TypeScript
- ✅ **forwardRef** where appropriate for ref forwarding

## 🎯 Token System

### Token Categories

#### Colors
- `bg` - Background layers
- `surface` - Cards, panels, overlays
- `text` - Text hierarchy (primary, secondary, tertiary, inverse, disabled)
- `border` - Border colors
- `brand` - Brand/accent colors
- `status` - Success, warning, error, info
- `interactive` - Hover, active, disabled states

#### Spacing
- `space.xs` through `space.xl`
- `component.*` - Component-specific spacing (buttons, inputs, cards)

#### Typography
- `font.size` - xs, sm, md, lg, xl
- `font.weight` - normal, medium, semibold, bold
- `font.lineHeight` - tight, normal, relaxed

#### Other
- `radius` - Border radius scale
- `shadow` - Elevation shadows
- `zIndex` - Stacking order
- `duration` - Animation timing
- `easing` - Animation curves

### Themes

- **Light theme** - Default light color scheme
- **Dark theme** - Dark color scheme optimized for low-light

### Density

- **Comfortable** - Default spacing (44px touch targets, 16px padding)
- **Compact** - Tighter spacing for information-dense UIs

## 📂 Project Structure

```
bienui-core/
├── .github/
│   └── workflows/          # GitHub Actions
│       ├── deploy-storybook.yml
│       └── publish-npm.yml
├── .storybook/            # Storybook configuration
├── src/
│   ├── components/        # React components
│   │   ├── Display/       # Avatar, Badge, Card, Text, etc.
│   │   ├── Forms/         # Input, Checkbox, Select, etc.
│   │   ├── Interactive/   # Button, Menu, Panel, etc.
│   │   ├── Layout/        # Container, Grid, Stack, etc.
│   │   ├── Navigation/    # Breadcrumb, Header, Link, etc.
│   │   └── Feedback/      # Banner, Modal, Toast, etc.
│   ├── tokens/            # Design tokens
│   │   ├── primitives.ts  # Raw token values
│   │   ├── themes.css.ts  # Light/dark themes
│   │   └── index.ts
│   ├── provider.tsx       # Main provider
│   └── index.ts
├── stories/               # Storybook stories
├── dist/                  # Built output
├── package.json
├── vite.config.lib.ts     # Library build config
└── README.md
```

## 🔧 Configuration

### Package Exports

The package is configured with proper exports for ESM, CJS, and TypeScript:

```json
{
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/bien-ui.esm.js",
      "require": "./dist/bien-ui.cjs.js"
    },
    "./styles": "./dist/bien-ui.css"
  }
}
```

### Peer Dependencies

`@bienui/core` marks React as a peer dependency:

```json
{
  "peerDependencies": {
    "react": "^17.0.0 || ^18.0.0",
    "react-dom": "^17.0.0 || ^18.0.0"
  }
}
```

## 🧪 Testing in Consuming Apps

Before publishing, you can test the package locally using npm/yarn link:

```bash
# In BienUI Core project
yarn build:lib
yarn link

# In your test project
yarn link @bienui/core
```

Or install directly from file:

```json
{
  "dependencies": {
    "@bienui/core": "file:../path/to/BienUI"
  }
}
```

## 📖 Documentation

Run Storybook to explore all components, variants, and usage examples:

```bash
yarn storybook
```

Storybook includes:
- Interactive component playground
- Auto-generated prop documentation
- Accessibility testing with @storybook/addon-a11y
- Theme switcher (light/dark)
- Density switcher (comfortable/compact)
- Live code examples

## 🚢 Publishing Workflow

1. Make changes to components
2. Update version in package.json:
   ```bash
   yarn version:patch  # or minor/major
   ```
3. Commit and push changes
4. Use GitHub Actions to publish:
   - Go to **Actions** → **Publish to NPM**
   - Click **Run workflow**
   - Select version type and npm tag
   - The workflow will build and publish automatically

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript 5** - Type safety
- **Radix UI** - Accessible component primitives  
- **Lucide React** - Icon library
- **Vite** - Fast build tool and dev server
- **Storybook 8** - Component documentation with a11y testing
- **GitHub Actions** - CI/CD automation
- **yarn** - Package manager

## 📝 License

MIT

---

Built with ❤️ by your design systems team
