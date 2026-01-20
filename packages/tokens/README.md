# @bien/tokens

Design tokens for Bien UI component library.

## Installation

```bash
pnpm add @bien/tokens
```

## Usage in Consuming Apps

### 1. Import the global styles and themes

In your app entry point (e.g., `main.tsx` or `App.tsx`):

```tsx
import '@bien/tokens/styles.css';
import { lightTheme, darkTheme, comfortableDensity, compactDensity } from '@bien/tokens';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [density, setDensity] = useState<'comfortable' | 'compact'>('comfortable');

  const themeClass = theme === 'light' ? lightTheme : darkTheme;
  const densityClass = density === 'comfortable' ? comfortableDensity : compactDensity;

  return (
    <div className={`${themeClass} ${densityClass}`}>
      {/* Your app content */}
    </div>
  );
}
```

### 2. Use tokens in custom styles

```tsx
import { tokens } from '@bien/tokens';
import { style } from '@vanilla-extract/css';

export const myCustomStyle = style({
  backgroundColor: tokens.color.surface.base,
  padding: tokens.space.md,
  borderRadius: tokens.radius.md,
  color: tokens.color.text.primary,
});
```

## Token Structure

### Color Tokens
- **bg**: Background layers (base, subtle, muted)
- **surface**: Card and panel surfaces
- **text**: Text hierarchy (primary, secondary, tertiary, inverse, disabled)
- **border**: Border colors (base, strong, subtle, focus)
- **brand**: Brand/accent colors
- **status**: Success, warning, error, info states
- **interactive**: Hover, active, disabled states

### Spacing Tokens
- **space**: xs, sm, md, lg, xl
- **component**: Component-specific spacing (buttons, inputs, cards)

### Typography
- **font.size**: xs, sm, md, lg, xl
- **font.weight**: normal, medium, semibold, bold
- **font.lineHeight**: tight, normal, relaxed

### Other Tokens
- **radius**: Border radius scale
- **shadow**: Shadow elevation
- **zIndex**: Stacking order
- **duration**: Animation timing
- **easing**: Animation curves

## Themes

- `lightTheme`: Light color scheme
- `darkTheme`: Dark color scheme

## Density

- `comfortableDensity`: Default spacing (better for touch)
- `compactDensity`: Tighter spacing (information-dense UIs)

## License

MIT
