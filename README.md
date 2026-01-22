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

### 2. Setup providers

In your app entry point (`main.tsx` or `App.tsx`):

```tsx
import { BienProvider, TooltipProvider, ToastProvider } from '@bienui/core';
// Import styles if needed
import '@bienui/core/dist/bien-ui.css';

function App() {
  return (
    <BienProvider>
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
import { Button, Input, Card, Text, VStack } from '@bienui/core';

function MyComponent() {
  return (
    <Card>
      <VStack gap="md">
        <Text as="h2" size="lg" weight="semibold">
          Welcome
        </Text>
        <Input placeholder="Enter your email" />
        <Button variant="primary">Get Started</Button>
      </VStack>
    </Card>
  );
}
```

## 🎨 Theming

### Theme switching

```tsx
import { useState } from 'react';
import { BienProvider, Button } from '@bienui/core';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <BienProvider className={isDark ? 'dark' : 'light'}>
      <Button 
        onClick={() => setIsDark(!isDark)}
        variant="secondary"
      >
        Switch to {isDark ? 'Light' : 'Dark'} Mode
      </Button>
      {/* Your app */}
    </BienProvider>
  );
}
```

### Using design tokens in custom components

```tsx
// Access design tokens via CSS custom properties
export const CustomCard = () => (
  <div 
    style={{
      backgroundColor: 'var(--surface-base)',
      padding: 'var(--space-md)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-base)',
    }}
  >
    Custom styled component
  </div>
);

// Or use className with CSS
// .custom-card {
//   background-color: var(--surface-base);
//   padding: var(--space-md);
//   border-radius: var(--radius-lg);
// }
```

## 🧩 Available Components

### Layout
- **Container** - Max-width content wrapper
- **Grid** - CSS Grid layout component
- **VStack** / **HStack** - Vertical and horizontal stack layouts
- **Section** - Semantic content sections
- **Spacer** - Flexible spacing component
- **Divider** - Visual content separators

### Forms
- **Input** - Text input with validation states
- **Textarea** - Multi-line text input
- **MarkdownTextarea** - Markdown-enabled textarea
- **Select** / **MultiSelect** - Dropdown selections
- **Checkbox** / **Radio** / **RadioGroup** - Selection controls
- **Switch** - Toggle switch
- **Slider** - Range input slider
- **DatePicker** - Date selection input

### Display
- **Text** - Typography component with `as`, `size`, `weight` props
- **Card** - Content container
- **Badge** - Status indicators
- **Avatar** / **AvatarGroup** / **ProfileAvatar** - User avatars
- **Timeline** - Sequential event display
- **Meter** / **CircularMeter** - Progress indicators
- **Table** - Data tables
- **List** / **ListItem** - List components
- **DescriptionList** - Definition lists
- **ColorSwatch** - Color display component

### Interactive
- **Button** - Primary interaction element
- **Tooltip** - Contextual help
- **Menu** / **MenuItem** / **MenuGroup** - Dropdown menus
- **Hotspot** - Interactive markers
- **DraggableList** - Drag and drop lists
- **FileDrop** - File upload area
- **Panel** - Collapsible content panels

### Feedback
- **Loading** - Loading states
- **EmptyState** - No content messaging
- **Banner** - Important announcements
- **Callout** - Highlighted information
- **Modal** - Dialog overlays
- **Accordion** - Collapsible content
- **Tabs** - Tabbed navigation
- **Stepper** - Step-by-step processes

### Navigation
- **Link** - Navigation links
- **Breadcrumb** - Hierarchical navigation
- **Header** - Page headers
- **Sidenav** - Sidebar navigation

### Utilities
- **ThinkingText** - Animated typing effect
- **useToast** - Toast notification hook

### Example Usage

```tsx
import { 
  Button, 
  Text, 
  Card, 
  Input, 
  Avatar, 
  Badge,
  Tooltip,
  VStack,
  HStack,
  useToast
} from '@bienui/core';

function Dashboard() {
  const { toast } = useToast();

  const handleSend = () => {
    toast({
      title: "Message sent!",
      description: "Your message has been delivered.",
      variant: "success"
    });
  };

  return (
    <Card>
      <VStack gap="md">
        <HStack gap="sm" align="center">
          <Avatar src="/user.jpg" alt="User" fallback="U" />
          <VStack gap="xs">
            <Text as="h3" size="md" weight="semibold">
              John Doe
            </Text>
            <Badge variant="success">Active</Badge>
          </VStack>
        </HStack>
        
        <Input placeholder="Enter message..." />
        
        <HStack gap="sm">
          <Button variant="primary" onClick={handleSend}>
            Send
          </Button>
          <Tooltip content="Save as draft">
            <Button variant="secondary">Save</Button>
          </Tooltip>
        </HStack>
      </VStack>
    </Card>
  );
}
```

### Toast Notifications

```tsx
import { useToast, Button } from '@bienui/core';

function NotificationExample() {
  const { toast } = useToast();

  return (
    <Button 
      onClick={() => {
        toast({
          title: "Success!",
          description: "Operation completed successfully.",
          variant: "success"
        });
      }}
    >
      Show Toast
    </Button>
  );
}
```

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

Before publishing, you can test the package locally:

### Method 1: Build and Link
```bash
# In BienUI Core project
yarn build:lib
yarn link

# In your test project
yarn link @bienui/core
```

### Method 2: Pack and Install
```bash
# In BienUI Core project
yarn build:lib
npm pack

# This creates a .tgz file, then in your test project:
npm install /path/to/bienui-core-1.0.0.tgz
```

### Method 3: File Reference
```json
{
  "dependencies": {
    "@bienui/core": "file:../BienUI"
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
