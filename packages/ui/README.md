# @bien/ui

Production-ready React component library with Radix UI primitives and token-first theming.

## Installation

```bash
pnpm add @bien/ui @bien/tokens
```

## Quick Start

```tsx
import { BienProvider, TooltipProvider, ToastProvider, Button, Input } from '@bien/ui';
import '@bien/tokens/styles.css';

function App() {
  return (
    <BienProvider theme="light" density="comfortable">
      <TooltipProvider>
        <ToastProvider>
          <Button variant="primary">Click me</Button>
          <Input label="Email" placeholder="you@example.com" />
        </ToastProvider>
      </TooltipProvider>
    </BienProvider>
  );
}
```

## Components

- Button (primary, secondary, ghost, danger)
- Text (typography with sizes, weights, tones)
- Card (content containers)
- Input + FormField (with label, hint, error)
- Modal + Drawer (dialogs with focus management)
- Tooltip (accessible tooltips)
- Tabs (keyboard-navigable tabs)
- Toast (notification system with useToast hook)

## Documentation

For full documentation and examples, see the [main README](../../README.md) or run Storybook:

```bash
pnpm storybook
```

## License

MIT
