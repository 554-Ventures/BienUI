# @bien/ui

A comprehensive React component library with design tokens for building consistent and beautiful user interfaces.

## Installation

```bash
npm install @bien/ui
```

## Usage

### Import Components

```tsx
import { Button, Card, Text, Input, BienProvider } from '@bien/ui'
import '@bien/ui/styles' // Import styles

function App() {
  return (
    <BienProvider>
      <Card>
        <Text variant="heading-md">Welcome to Bien UI</Text>
        <Input placeholder="Enter your name" />
        <Button>Get Started</Button>
      </Card>
    </BienProvider>
  )
}
```

### Available Components

#### Providers
- `BienProvider` - Main theme provider
- `ToastProvider` - Toast notifications provider
- `TooltipProvider` - Tooltip provider

#### Layout
- `Container` - Layout container with max-width
- `Grid` - CSS Grid layout component  
- `VStack` / `HStack` - Flex stack layouts
- `Section` - Content sections
- `Spacer` - Flexible spacing
- `Divider` - Visual separators

#### Forms
- `Input` - Text input field
- `Textarea` - Multi-line text input
- `MarkdownTextarea` - Markdown editor
- `Select` - Dropdown selection
- `MultiSelect` - Multiple selection
- `Checkbox` - Checkbox input
- `Radio` / `RadioGroup` - Radio buttons
- `Switch` - Toggle switch
- `Slider` - Range slider
- `DatePicker` - Date selection

#### Navigation  
- `Link` - Navigation links
- `Breadcrumb` - Breadcrumb navigation
- `Header` - Page headers
- `Sidenav` - Side navigation

#### Display
- `Text` - Typography component
- `Card` - Content cards
- `Badge` - Status badges
- `Avatar` / `AvatarGroup` / `ProfileAvatar` - User avatars
- `Timeline` - Timeline visualization
- `Meter` - Progress meters
- `Table` - Data tables
- `List` - Lists and collections
- `ColorSwatch` - Color display

#### Feedback
- `Loading` - Loading states
- `EmptyState` - Empty state illustrations
- `Banner` - Notification banners
- `Callout` - Highlighted content
- `Modal` - Modal dialogs
- `Accordion` - Collapsible content
- `Tabs` - Tab navigation
- `Stepper` - Step indicators

#### Interactive
- `Button` - Action buttons
- `Tooltip` - Hover tooltips
- `Menu` - Context menus
- `Hotspot` - Interactive hotspots
- `DraggableList` - Drag and drop lists
- `FileDrop` - File upload areas
- `Panel` - Sliding panels

#### Utils
- `useToast` - Toast hook
- `ThinkingText` - Animated thinking text

#### Icons
- Various SVG icons for common UI needs

## Design Tokens

The library includes a comprehensive design token system with:

- **Themes**: Light and dark mode support
- **Density**: Compact and comfortable spacing
- **Typography**: Consistent text scales and weights
- **Colors**: Semantic color palette
- **Spacing**: Harmonious spacing scale
- **Border Radius**: Consistent corner styles

## TypeScript Support

Fully typed with TypeScript. All components include proper type definitions and IntelliSense support.

## CSS Architecture

Uses CSS custom properties for theming with zero runtime overhead. All styles are pre-built and optimized.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)  
- Edge (latest)

## License

MIT