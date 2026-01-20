# Bien UI

A production-ready, token-first React component library built with:

- **pnpm workspaces** for monorepo management
- **TypeScript** for type safety
- **Radix UI** primitives for accessibility
- **vanilla-extract** for type-safe styling
- **Token-first theming** with light/dark modes + comfortable/compact density
- **Storybook** for documentation
- **tsup** for fast builds
- **changesets** for versioning and publishing

## 📦 Packages

- **`@bien/tokens`** - Design tokens (colors, spacing, typography, etc.)
- **`@bien/ui`** - React component library

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start Storybook (development)
pnpm storybook
```

### Build Commands

```bash
# Build all packages in the workspace
pnpm build

# Build and watch for changes
pnpm --filter @bien/tokens dev
pnpm --filter @bien/ui dev

# Build Storybook for production
pnpm build:storybook
```

### Development Commands

```bash
# Run Storybook (development mode)
pnpm dev
# or
pnpm storybook

# Lint code
pnpm lint

# Format code
pnpm format
```

### Versioning & Publishing

```bash
# Create a changeset (describe your changes)
pnpm changeset

# Version packages based on changesets
pnpm version-packages

# Build and publish packages to npm
pnpm release
```

## 📚 Using Bien UI in Your App

### 1. Install packages

```bash
pnpm add @bien/tokens @bien/ui
```

### 2. Setup providers and styles

In your app entry point (`main.tsx` or `App.tsx`):

```tsx
import { BienProvider, TooltipProvider, ToastProvider } from '@bien/ui';
import '@bien/tokens/styles.css';

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
import { Button, Input, Card, Modal, Text } from '@bien/ui';

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
import { BienProvider } from '@bien/ui';

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

### Using tokens in custom components

```tsx
import { tokens } from '@bien/tokens';
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
bien-ui-monorepo/
├── .changeset/             # Changesets configuration
├── packages/
│   ├── tokens/            # Design tokens package
│   │   ├── src/
│   │   │   ├── primitives.ts    # Raw token values
│   │   │   ├── contract.ts      # Token contract
│   │   │   ├── themes.ts        # Light/dark themes
│   │   │   ├── density.ts       # Density variants
│   │   │   ├── global.css.ts    # Global styles
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsup.config.ts
│   └── ui/                # Component library
│       ├── src/
│       │   ├── components/
│       │   │   ├── Button/
│       │   │   ├── Text/
│       │   │   ├── Card/
│       │   │   ├── Input/
│       │   │   ├── Modal/
│       │   │   ├── Tooltip/
│       │   │   ├── Tabs/
│       │   │   └── Toast/
│       │   ├── provider.tsx
│       │   └── index.ts
│       ├── package.json
│       └── tsup.config.ts
├── apps/
│   └── storybook/         # Storybook documentation
│       ├── .storybook/
│       ├── stories/
│       └── package.json
├── package.json           # Root package.json
├── pnpm-workspace.yaml    # Workspace configuration
├── tsconfig.json          # Shared TypeScript config
└── README.md
```

## 🔧 Configuration

### Package Exports

Both packages are configured with proper exports for ESM, CJS, and TypeScript:

```json
{
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./styles.css": "./dist/index.css"
  }
}
```

### Peer Dependencies

`@bien/ui` marks React as a peer dependency:

```json
{
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}
```

## 🧪 Testing in Consuming Apps

Before publishing, you can test the packages locally using pnpm link or by referencing the workspace:

```json
{
  "dependencies": {
    "@bien/tokens": "workspace:*",
    "@bien/ui": "workspace:*"
  }
}
```

## 📖 Documentation

Run Storybook to explore all components, variants, and usage examples:

```bash
pnpm storybook
```

Storybook includes:
- Interactive component playground
- Auto-generated prop documentation
- Theme switcher (light/dark)
- Density switcher (comfortable/compact)
- Live code examples

## 🚢 Publishing Workflow

1. Make changes to packages
2. Create a changeset:
   ```bash
   pnpm changeset
   ```
3. Commit the changeset
4. When ready to release:
   ```bash
   pnpm version-packages  # Updates versions
   pnpm release           # Builds and publishes
   ```

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript 5** - Type safety
- **vanilla-extract** - Zero-runtime CSS-in-JS
- **Radix UI** - Accessible component primitives
- **tsup** - Fast TypeScript bundler
- **Storybook 7** - Component documentation
- **changesets** - Version management
- **pnpm** - Fast, efficient package manager

## 📝 License

MIT

---

Built with ❤️ by your design systems team
