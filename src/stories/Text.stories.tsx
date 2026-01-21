import type { Meta, StoryObj } from '@storybook/react'
import { Text, VStack, Grid, Banner, Callout } from '..'

const meta = {
  title: 'Display/Text',
  component: Text,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A comprehensive Text component for displaying content with consistent typography, semantic meaning, and advanced styling options.

## Features
- **Size scale** - From xs to 4xl for all typography needs
- **Font weights** - Light to extrabold for proper hierarchy
- **Color tones** - Semantic color system with brand colors
- **Gradient text** - Beautiful gradient effects for modern design
- **Text highlights** - Background highlights in brand colors
- **Transforms** - Uppercase, capitalize, and text decorations
- **Truncation** - Single line and multi-line text clamping
- **Semantic HTML** - Proper heading tags and accessibility

## Usage
\`\`\`tsx
<Text size="xl" weight="semibold" tone="brand">
  Welcome to Bien UI
</Text>

<Text gradient="primary" size="2xl">
  Gradient Text Effect
</Text>

<Text maxLines={3}>
  Long content that will be clamped to 3 lines...
</Text>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['span', 'p', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'HTML element to render',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
      description: 'Text size from the design system',
    },
    weight: {
      control: 'select',
      options: ['light', 'normal', 'medium', 'semibold', 'bold', 'extrabold'],
      description: 'Font weight',
    },
    tone: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'brand',
        'accent',
        'purple',
        'success',
        'warning',
        'error',
      ],
      description: 'Semantic color tone',
    },
    gradient: {
      control: 'select',
      options: ['primary', 'blue', 'purple', 'accent', 'rainbow'],
      description: 'Gradient text effect',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Text alignment',
    },
    transform: {
      control: 'select',
      options: ['uppercase', 'lowercase', 'capitalize'],
      description: 'Text transform',
    },
    decoration: {
      control: 'select',
      options: ['underline', 'line-through'],
      description: 'Text decoration',
    },
    truncate: {
      control: 'boolean',
      description: 'Truncate with ellipsis',
    },
    maxLines: {
      control: 'number',
      description: 'Maximum lines before clamping',
    },
    highlight: {
      control: 'boolean',
      description: 'Add background highlight',
    },
    highlightColor: {
      control: 'select',
      options: ['blue', 'purple', 'accent', 'success', 'warning', 'error'],
      description: 'Highlight background color',
    },
  },
  args: {
    children: 'Sample text',
    size: 'md',
    weight: 'normal',
    tone: 'primary',
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children:
      'This is the default text component with medium size and normal weight.',
    size: 'md',
    weight: 'normal',
    tone: 'primary',
  },
}

export const Playground: Story = {
  args: {
    children:
      'Experiment with different text properties using the controls below',
    size: 'lg',
    weight: 'semibold',
    tone: 'brand',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use the controls panel to experiment with different text properties and see how they affect the appearance.',
      },
    },
  },
}

export const SizeScale: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="xl">
        <VStack gap="sm">
          <Text size="lg" weight="semibold">
            Typography Size Scale
          </Text>
          <Text size="sm" tone="secondary">
            Complete range from extra small to 4xl headlines
          </Text>
        </VStack>

        <VStack gap="md">
          <Text size="4xl" weight="bold">
            4xl Headline
          </Text>
          <Text size="3xl" weight="bold">
            3xl Large Title
          </Text>
          <Text size="2xl" weight="semibold">
            2xl Medium Title
          </Text>
          <Text size="xl" weight="semibold">
            XL Heading
          </Text>
          <Text size="lg">Large Body Text</Text>
          <Text size="md">Medium Body Text (Default)</Text>
          <Text size="sm">Small Text</Text>
          <Text size="xs">Extra Small Text</Text>
        </VStack>
      </VStack>
    </div>
  ),
}

export const FontWeights: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="xl">
        <VStack gap="sm">
          <Text size="lg" weight="semibold">
            Font Weight Variations
          </Text>
          <Text size="sm" tone="secondary">
            Full weight range for proper typography hierarchy
          </Text>
        </VStack>

        <VStack gap="sm">
          <Text weight="light" size="lg">
            Light (300)
          </Text>
          <Text weight="normal" size="lg">
            Normal (400)
          </Text>
          <Text weight="medium" size="lg">
            Medium (500)
          </Text>
          <Text weight="semibold" size="lg">
            Semibold (600)
          </Text>
          <Text weight="bold" size="lg">
            Bold (700)
          </Text>
          <Text weight="extrabold" size="lg">
            Extrabold (800)
          </Text>
        </VStack>
      </VStack>
    </div>
  ),
}

export const ColorTones: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="xl">
        <VStack gap="sm">
          <Text size="lg" weight="semibold">
            Semantic Color Tones
          </Text>
          <Text size="sm" tone="secondary">
            Consistent color system with semantic meaning
          </Text>
        </VStack>

        <VStack gap="sm">
          <Text tone="primary" size="lg">
            Primary text color
          </Text>
          <Text tone="secondary" size="lg">
            Secondary text color
          </Text>
          <Text tone="tertiary" size="lg">
            Tertiary text color
          </Text>
          <Text tone="brand" size="lg">
            Brand teal color
          </Text>
          <Text tone="accent" size="lg">
            Accent gold color
          </Text>
          <Text tone="purple" size="lg">
            Purple color
          </Text>
          <Text tone="success" size="lg">
            Success color
          </Text>
          <Text tone="warning" size="lg">
            Warning color
          </Text>
          <Text tone="error" size="lg">
            Error color
          </Text>
        </VStack>
      </VStack>
    </div>
  ),
}

export const GradientText: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="xl">
        <VStack gap="sm">
          <Text size="lg" weight="semibold">
            Gradient Text Effects ✨
          </Text>
          <Text size="sm" tone="secondary">
            Beautiful gradient typography for modern interfaces
          </Text>
        </VStack>

        <VStack gap="md">
          <Text size="3xl" gradient="primary">
            Teal Gradient Text
          </Text>
          <Text size="3xl" gradient="blue">
            Blue Gradient Text
          </Text>
          <Text size="3xl" gradient="purple">
            Purple Gradient Text
          </Text>
          <Text size="3xl" gradient="accent">
            Gold Gradient Text
          </Text>
          <Text size="3xl" gradient="rainbow">
            Rainbow Gradient Text
          </Text>
        </VStack>
      </VStack>
    </div>
  ),
}

export const TextHighlights: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="xl">
        <VStack gap="sm">
          <Text size="lg" weight="semibold">
            Text Highlights
          </Text>
          <Text size="sm" tone="secondary">
            Background highlights to emphasize important content
          </Text>
        </VStack>

        <VStack gap="lg">
          <Text size="2xl">
            Your achievements deserve more than a{' '}
            <Text as="span" highlight highlightColor="blue">
              bullet point
            </Text>
          </Text>

          <Text size="lg">
            Build amazing things with{' '}
            <Text as="span" highlight highlightColor="purple">
              powerful tools
            </Text>{' '}
            and{' '}
            <Text as="span" highlight highlightColor="accent">
              modern design
            </Text>
          </Text>
        </VStack>
      </VStack>
    </div>
  ),
}

export const TextTransforms: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="xl">
        <VStack gap="sm">
          <Text size="lg" weight="semibold">
            Transforms & Decorations
          </Text>
          <Text size="sm" tone="secondary">
            Text styling options for different use cases
          </Text>
        </VStack>

        <VStack gap="md">
          <Text transform="uppercase" letterSpacing="wide" size="lg">
            uppercase with wide spacing
          </Text>
          <Text transform="capitalize" size="lg">
            capitalize each word
          </Text>
          <Text decoration="underline" tone="brand" size="lg">
            Underlined brand text
          </Text>
          <Text decoration="line-through" tone="tertiary" size="lg">
            Strikethrough text
          </Text>
          <Text italic tone="secondary" size="lg">
            Italic text style
          </Text>
        </VStack>
      </VStack>
    </div>
  ),
}

export const TextTruncation: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="xl">
        <VStack gap="sm">
          <Text size="lg" weight="semibold">
            Text Truncation
          </Text>
          <Text size="sm" tone="secondary">
            Single line and multi-line text clamping
          </Text>
        </VStack>

        <VStack gap="lg">
          <div style={{ width: '400px' }}>
            <Text size="sm" tone="tertiary" style={{ marginBottom: '8px' }}>
              Single line truncate:
            </Text>
            <Text truncate>
              This is a very long text that will be truncated with an ellipsis
              when it exceeds the container width. You won't see the rest of
              this sentence.
            </Text>
          </div>

          <div style={{ width: '400px' }}>
            <Text size="sm" tone="tertiary" style={{ marginBottom: '8px' }}>
              Multi-line clamp (3 lines):
            </Text>
            <Text maxLines={3}>
              This is a longer paragraph that demonstrates the multi-line
              clamping feature. The text will be cut off after three lines and
              show an ellipsis. This is useful for previewing content in cards,
              lists, or anywhere you need to constrain text to a specific number
              of lines while maintaining readability.
            </Text>
          </div>
        </VStack>
      </VStack>
    </div>
  ),
}

export const SemanticHTML: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="xl">
        <VStack gap="sm">
          <Text size="lg" weight="semibold">
            Semantic HTML Elements
          </Text>
          <Text size="sm" tone="secondary">
            Proper heading hierarchy and semantic structure
          </Text>
        </VStack>

        <VStack gap="md">
          <Text as="h1" size="3xl" weight="bold">
            Page Title (H1)
          </Text>
          <Text as="h2" size="2xl" weight="semibold">
            Section Heading (H2)
          </Text>
          <Text as="h3" size="xl" weight="semibold">
            Subsection Heading (H3)
          </Text>
          <Text as="h4" size="lg" weight="medium">
            Component Title (H4)
          </Text>
          <Text as="p" size="md">
            Paragraph text with proper semantic meaning for accessibility and
            SEO.
          </Text>
          <Text as="span" size="sm" tone="secondary">
            Inline span element for emphasis and styling.
          </Text>
        </VStack>
      </VStack>
    </div>
  ),
}

export const TextAlignment: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="xl">
        <VStack gap="sm">
          <Text size="lg" weight="semibold">
            Text Alignment
          </Text>
          <Text size="sm" tone="secondary">
            Left, center, and right alignment options
          </Text>
        </VStack>

        <div
          style={{
            width: '100%',
            border: '1px dashed #e5e5e3',
            padding: '20px',
            borderRadius: '8px',
          }}
        >
          <VStack gap="md">
            <Text align="left" size="lg">
              Left aligned text (default)
            </Text>
            <Text align="center" size="lg">
              Center aligned text
            </Text>
            <Text align="right" size="lg">
              Right aligned text
            </Text>
          </VStack>
        </div>
      </VStack>
    </div>
  ),
}

export const TypographyShowcase: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="xl">
        <VStack gap="sm">
          <Text size="xl" weight="bold">
            Complete Typography System 🎨
          </Text>
          <Text size="sm" tone="secondary">
            Comprehensive examples demonstrating all text capabilities and
            styling options
          </Text>
        </VStack>

        <Grid columns={1} gap="xl">
          {/* Size & Weight Combinations */}
          <VStack gap="md">
            <Text size="lg" weight="semibold">
              Size & Weight Combinations
            </Text>
            <div
              style={{
                padding: '20px',
                border: '1px solid var(--color-border-base)',
                borderRadius: '8px',
                background: 'var(--color-background-subtle)',
              }}
            >
              <VStack gap="sm">
                <Text size="2xl" weight="bold" tone="brand">
                  Large Bold Brand Title
                </Text>
                <Text size="lg" weight="semibold">
                  Section Heading
                </Text>
                <Text size="md" weight="medium">
                  Body text with medium weight
                </Text>
                <Text size="sm" tone="secondary">
                  Secondary supporting text
                </Text>
              </VStack>
            </div>
          </VStack>

          {/* Interactive Examples */}
          <VStack gap="md">
            <Text size="lg" weight="semibold">
              Interactive Examples
            </Text>
            <div
              style={{
                padding: '20px',
                border: '1px solid var(--color-border-base)',
                borderRadius: '8px',
              }}
            >
              <VStack gap="md">
                <Text size="xl" gradient="purple">
                  ✨ Gradient Headlines
                </Text>

                <Text size="lg">
                  Regular text with{' '}
                  <Text as="span" tone="brand" weight="semibold">
                    brand emphasis
                  </Text>{' '}
                  and{' '}
                  <Text as="span" highlight highlightColor="accent">
                    highlighted content
                  </Text>
                </Text>

                <Text
                  size="sm"
                  transform="uppercase"
                  letterSpacing="wide"
                  tone="tertiary"
                >
                  Metadata • Labels • Categories
                </Text>
              </VStack>
            </div>
          </VStack>
        </Grid>

        <Banner variant="info">
          <Text size="sm">
            💡 Use semantic HTML elements (h1-h6, p, span) for proper
            accessibility and SEO structure.
          </Text>
        </Banner>

        <Callout
          trigger={
            <Text size="sm" weight="medium">
              Typography Tips
            </Text>
          }
        >
          <VStack gap="xs">
            <Text size="sm">
              • Use size="4xl" for hero headlines and major page titles
            </Text>
            <Text size="sm">
              • Gradient text works best on large sizes (xl and above)
            </Text>
            <Text size="sm">
              • Text highlights are perfect for emphasizing key concepts
            </Text>
            <Text size="sm">
              • Always maintain proper heading hierarchy (h1 → h2 → h3)
            </Text>
          </VStack>
        </Callout>
      </VStack>
    </div>
  ),
}
