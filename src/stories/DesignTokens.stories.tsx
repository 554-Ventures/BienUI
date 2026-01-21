import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '../components/Display/Text'
import { Card } from '../components/Display/Card'
import { Grid } from '../components/Layout/Grid'
import { VStack } from '../components/Layout/Stack'

const meta = {
  title: 'Design System/Tokens & Classes',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Complete reference for CSS custom properties, component classes, and utility classes in the Bien UI design system.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const CodeBlock = ({
  children,
  title,
}: {
  children: string
  title?: string
}) => (
  <div style={{ marginBottom: '16px' }}>
    {title && (
      <Text
        size="sm"
        weight="medium"
        style={{ marginBottom: '4px', display: 'block' }}
      >
        {title}
      </Text>
    )}
    <code
      style={{
        display: 'block',
        backgroundColor: 'var(--color-bg-subtle)',
        padding: '12px',
        borderRadius: '6px',
        fontFamily: 'var(--font-family-mono, monospace)',
        fontSize: '14px',
        border: '1px solid var(--color-border-base)',
        whiteSpace: 'pre-wrap',
      }}
    >
      {children}
    </code>
  </div>
)

const TokenCard = ({
  title,
  token,
  value,
  usage,
  example,
}: {
  title: string
  token: string
  value: string
  usage: string
  example?: string
}) => (
  <Card padding="md">
    <VStack gap="sm">
      <Text weight="semibold">{title}</Text>
      <CodeBlock>{token}</CodeBlock>
      <div>
        <Text size="sm" tone="secondary">
          Value:
        </Text>
        <Text size="sm" style={{ fontFamily: 'monospace' }}>
          {value}
        </Text>
      </div>
      <div>
        <Text size="sm" tone="secondary">
          Usage:
        </Text>
        <Text size="sm">{usage}</Text>
      </div>
      {example && (
        <div>
          <Text size="sm" tone="secondary">
            Example:
          </Text>
          <CodeBlock>{example}</CodeBlock>
        </div>
      )}
    </VStack>
  </Card>
)

export const TokensAndClasses: Story = {
  name: 'CSS Tokens & Classes Reference',
  render: () => (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '32px' }}>
        <Text size="lg" weight="semibold" style={{ marginBottom: '8px' }}>
          🎨 Design Tokens & CSS Classes
        </Text>
        <Text size="sm" tone="secondary" style={{ marginBottom: '16px' }}>
          Complete reference for CSS custom properties, component classes, and
          utility classes
        </Text>
      </div>

      {/* CSS Custom Properties - Colors */}
      <div style={{ marginBottom: '32px' }}>
        <Text size="md" weight="semibold" style={{ marginBottom: '16px' }}>
          Color Tokens
        </Text>
        <Grid columns={2} gap="md">
          <TokenCard
            title="Primary Brand"
            token="--color-primary"
            value="#1d75bc"
            usage="Primary brand color for buttons, links, and key UI elements"
            example="background-color: var(--color-primary);"
          />
          <TokenCard
            title="Text Primary"
            token="--color-text-primary"
            value="#20282b"
            usage="Main text color for headings and body content"
            example="color: var(--color-text-primary);"
          />
          <TokenCard
            title="Background Base"
            token="--color-bg-base"
            value="#ffffff"
            usage="Primary background color for the application"
            example="background-color: var(--color-bg-base);"
          />
          <TokenCard
            title="Border Base"
            token="--color-border-base"
            value="rgba(32, 40, 43, 0.18)"
            usage="Default border color for inputs, cards, and dividers"
            example="border: 1px solid var(--color-border-base);"
          />
        </Grid>
      </div>

      {/* Spacing Tokens */}
      <div style={{ marginBottom: '32px' }}>
        <Text size="md" weight="semibold" style={{ marginBottom: '16px' }}>
          Spacing Tokens
        </Text>
        <Grid columns={3} gap="md">
          <TokenCard
            title="Extra Small"
            token="--space-xs"
            value="0.5rem (8px)"
            usage="Minimal spacing between related elements"
            example="margin: var(--space-xs);"
          />
          <TokenCard
            title="Medium"
            token="--space-md"
            value="1rem (16px)"
            usage="Default spacing for most UI elements"
            example="padding: var(--space-md);"
          />
          <TokenCard
            title="Extra Large"
            token="--space-xl"
            value="2rem (32px)"
            usage="Large spacing between sections"
            example="margin-bottom: var(--space-xl);"
          />
        </Grid>
      </div>

      {/* Typography Tokens */}
      <div style={{ marginBottom: '32px' }}>
        <Text size="md" weight="semibold" style={{ marginBottom: '16px' }}>
          Typography Tokens
        </Text>
        <Grid columns={2} gap="md">
          <TokenCard
            title="Font Family"
            token="--font-family-sans"
            value="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto..."
            usage="Default font stack for the design system"
            example="font-family: var(--font-family-sans);"
          />
          <TokenCard
            title="Font Size Medium"
            token="--font-size-md"
            value="1rem (16px)"
            usage="Base font size for body text"
            example="font-size: var(--font-size-md);"
          />
          <TokenCard
            title="Font Weight Semibold"
            token="--font-weight-semibold"
            value="600"
            usage="Semibold weight for emphasis and headings"
            example="font-weight: var(--font-weight-semibold);"
          />
          <TokenCard
            title="Line Height Normal"
            token="--line-height-normal"
            value="1.5"
            usage="Default line height for readability"
            example="line-height: var(--line-height-normal);"
          />
        </Grid>
      </div>

      {/* Border Radius Tokens */}
      <div style={{ marginBottom: '32px' }}>
        <Text size="md" weight="semibold" style={{ marginBottom: '16px' }}>
          Border Radius Tokens
        </Text>
        <Grid columns={4} gap="md">
          <TokenCard
            title="Small"
            token="--radius-sm"
            value="0.25rem (4px)"
            usage="Subtle rounding for small elements"
            example="border-radius: var(--radius-sm);"
          />
          <TokenCard
            title="Medium"
            token="--radius-md"
            value="0.375rem (6px)"
            usage="Default rounding for buttons and inputs"
            example="border-radius: var(--radius-md);"
          />
          <TokenCard
            title="Large"
            token="--radius-lg"
            value="0.5rem (8px)"
            usage="Prominent rounding for cards"
            example="border-radius: var(--radius-lg);"
          />
          <TokenCard
            title="Full"
            token="--radius-full"
            value="9999px"
            usage="Perfect circles and pills"
            example="border-radius: var(--radius-full);"
          />
        </Grid>
      </div>

      {/* Shadow Tokens */}
      <div style={{ marginBottom: '32px' }}>
        <Text size="md" weight="semibold" style={{ marginBottom: '16px' }}>
          Shadow Tokens
        </Text>
        <Grid columns={2} gap="md">
          <TokenCard
            title="Small Shadow"
            token="--shadow-sm"
            value="0 1px 2px 0 rgba(0, 0, 0, 0.05)"
            usage="Subtle shadow for slight elevation"
            example="box-shadow: var(--shadow-sm);"
          />
          <TokenCard
            title="Medium Shadow"
            token="--shadow-md"
            value="0 4px 6px -1px rgba(0, 0, 0, 0.1)..."
            usage="Default shadow for cards and elevated elements"
            example="box-shadow: var(--shadow-md);"
          />
          <TokenCard
            title="Large Shadow"
            token="--shadow-lg"
            value="0 10px 15px -3px rgba(0, 0, 0, 0.1)..."
            usage="Strong shadow for modals and prominent elements"
            example="box-shadow: var(--shadow-lg);"
          />
          <TokenCard
            title="Extra Large Shadow"
            token="--shadow-xl"
            value="0 20px 25px -5px rgba(0, 0, 0, 0.1)..."
            usage="Maximum shadow for overlays"
            example="box-shadow: var(--shadow-xl);"
          />
        </Grid>
      </div>

      {/* Component Classes */}
      <div style={{ marginBottom: '32px' }}>
        <Text size="md" weight="semibold" style={{ marginBottom: '16px' }}>
          Component Modifier Classes
        </Text>
        <Grid columns={2} gap="md">
          <TokenCard
            title="Button Full Width"
            token="bien-button--full-width"
            value="CSS Class"
            usage="Makes button take full width of container"
            example={`<button className="bien-button bien-button--primary bien-button--full-width">
  Full Width Button
</button>`}
          />
          <TokenCard
            title="Button Circle Shape"
            token="bien-button--circle"
            value="CSS Class"
            usage="Makes button perfectly circular"
            example={`<button className="bien-button bien-button--primary bien-button--circle">
  <Icon />
</button>`}
          />
          <TokenCard
            title="Button Icon Only"
            token="bien-button--icon-only"
            value="CSS Class"
            usage="Optimizes button for icon-only display"
            example={`<button className="bien-button bien-button--ghost bien-button--icon-only">
  <Icon />
</button>`}
          />
          <TokenCard
            title="Button Gradient"
            token="bien-button--gradient-primary"
            value="CSS Class"
            usage="Applies primary gradient background"
            example={`<button className="bien-button bien-button--gradient-primary">
  Gradient Button
</button>`}
          />
        </Grid>
      </div>

      {/* Animation Tokens */}
      <div style={{ marginBottom: '32px' }}>
        <Text size="md" weight="semibold" style={{ marginBottom: '16px' }}>
          Animation Tokens
        </Text>
        <Grid columns={3} gap="md">
          <TokenCard
            title="Fast Duration"
            token="--duration-fast"
            value="150ms"
            usage="Quick transitions for hover states"
            example="transition: all var(--duration-fast) var(--easing);"
          />
          <TokenCard
            title="Normal Duration"
            token="--duration-normal"
            value="250ms"
            usage="Standard transitions for UI changes"
            example="transition: all var(--duration-normal) var(--easing);"
          />
          <TokenCard
            title="Easing Function"
            token="--easing"
            value="cubic-bezier(0, 0, 0.2, 1)"
            usage="Smooth, natural motion curve"
            example="transition: all 250ms var(--easing);"
          />
        </Grid>
      </div>

      {/* Usage Examples */}
      <div>
        <Text size="md" weight="semibold" style={{ marginBottom: '16px' }}>
          Complete Usage Examples
        </Text>
        <Card padding="lg">
          <VStack gap="lg">
            <div>
              <Text weight="semibold" style={{ marginBottom: '8px' }}>
                Custom Component with Tokens
              </Text>
              <CodeBlock>
                {`.my-component {
  padding: var(--space-md);
  margin-bottom: var(--space-lg);
  background-color: var(--color-bg-base);
  border: 1px solid var(--color-border-base);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  font-family: var(--font-family-sans);
  font-size: var(--font-size-md);
  color: var(--color-text-primary);
  transition: all var(--duration-fast) var(--easing);
}

.my-component:hover {
  box-shadow: var(--shadow-md);
  background-color: var(--color-bg-subtle);
}`}
              </CodeBlock>
            </div>

            <div>
              <Text weight="semibold" style={{ marginBottom: '8px' }}>
                Component with Modifier Classes
              </Text>
              <CodeBlock>
                {`// React Component
<button className="bien-button bien-button--gradient-primary bien-button--lg bien-button--full-width">
  Get Started
</button>

// CSS Classes Applied:
// - bien-button: Base button styles
// - bien-button--gradient-primary: Gradient background
// - bien-button--lg: Large size variant
// - bien-button--full-width: Full width modifier`}
              </CodeBlock>
            </div>

            <div>
              <Text weight="semibold" style={{ marginBottom: '8px' }}>
                Dark Theme Support
              </Text>
              <CodeBlock>
                {`/* Tokens automatically adapt in dark theme */
[data-theme="dark"] {
  --color-bg-base: oklch(0.205 0 0);
  --color-text-primary: oklch(0.985 0 0);
  --color-border-base: rgba(255, 255, 255, 0.18);
  /* All other tokens update accordingly */
}

/* Your CSS automatically updates */
.my-component {
  background-color: var(--color-bg-base); /* Adapts to theme */
  color: var(--color-text-primary); /* Adapts to theme */
}`}
              </CodeBlock>
            </div>
          </VStack>
        </Card>
      </div>
    </div>
  ),
}
