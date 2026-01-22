import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '../components/Display/Card'
import { Button } from '../components/Interactive/Button'
import { Text } from '../components/Display/Text'
import { VStack } from '../components/Layout/Stack'
import { Divider } from '../components/Layout/Divider'
import { CheckIcon } from '../components/Icons'

const meta = {
  title: 'Display/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Supercharged Card component with variants, gradients, interactive states, and flexible layouts.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'elevated',
        'outlined',
        'filled',
        'ghost',
        'glass-frost',
        'glass-tint',
        'ai',
      ],
      description: 'Visual style variant',
    },
    gradient: {
      control: 'select',
      options: [undefined, 'primary', 'blue', 'purple', 'accent', 'rainbow'],
      description: 'Gradient background',
    },
    topGradient: {
      control: 'select',
      options: [false, 'primary', 'blue', 'purple', 'accent', 'rainbow'],
      description: 'Gradient for top border (works with any variant)',
    },
    padding: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Card padding size',
    },
    shadow: {
      control: 'select',
      options: ['none', 'md', 'lg', 'xl'],
      description: 'Shadow size',
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'lg', 'xl'],
      description: 'Border radius size',
    },
    hoverable: {
      control: 'boolean',
      description: 'Whether the card has hover effects',
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the card is clickable',
    },
    collapsible: {
      control: 'boolean',
      description: 'Whether the card can be collapsed',
    },
    bordered: {
      control: 'boolean',
      description: 'Whether the card has a border',
    },
  },
  args: {
    variant: 'elevated',
    padding: 'md',
    hoverable: false,
    clickable: false,
    collapsible: false,
    bordered: false,
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'Card subtitle',
    children: (
      <Text size="sm" tone="secondary">
        This is a basic card with title, subtitle, and content.
      </Text>
    ),
  },
}

export const Variants: Story = {
  name: 'Card Variants',
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        width: '800px',
      }}
    >
      <Card
        variant="elevated"
        title="Elevated Card"
        subtitle="Default with shadow"
      >
        <Text tone="secondary" size="sm">
          The elevated variant provides depth with shadows and subtle borders.
        </Text>
      </Card>
      <Card variant="outlined" title="Outlined Card" subtitle="Strong border">
        <Text tone="secondary" size="sm">
          The outlined variant uses a bold border without shadow.
        </Text>
      </Card>
      <Card variant="filled" title="Filled Card" subtitle="Subtle background">
        <Text tone="secondary" size="sm">
          The filled variant has a subtle background color.
        </Text>
      </Card>
      <Card variant="ghost" title="Ghost Card" subtitle="No background">
        <Text tone="secondary" size="sm">
          The ghost variant is transparent with no borders.
        </Text>
      </Card>
      <Card
        variant="glass-frost"
        title="Glass Frost"
        subtitle="Frosted glass effect"
      >
        <Text tone="secondary" size="sm">
          Modern glassmorphism with frosted blur and transparency.
        </Text>
      </Card>
      <Card variant="glass-tint" title="Glass Tint" subtitle="Colorful glass">
        <Text tone="secondary" size="sm">
          Glassmorphism with subtle brand color gradient tint.
        </Text>
      </Card>
    </div>
  ),
}

export const GradientCards: Story = {
  name: 'Gradient Cards',
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        width: '800px',
      }}
    >
      <Card
        gradient="primary"
        title="Teal Gradient"
        subtitle="Primary brand color"
      >
        <Text size="sm">
          Beautiful gradient backgrounds that match your brand identity.
        </Text>
      </Card>
      <Card gradient="blue" title="Blue Gradient" subtitle="Professional blue">
        <Text size="sm">
          Perfect for trustworthy and professional content sections.
        </Text>
      </Card>
      <Card
        gradient="purple"
        title="Purple Gradient"
        subtitle="Creative purple"
      >
        <Text size="sm">Stand out with vibrant purple gradient effects.</Text>
      </Card>
      <Card gradient="accent" title="Gold Gradient" subtitle="Accent highlight">
        <Text size="sm">Highlight premium features with golden gradients.</Text>
      </Card>
    </div>
  ),
}

export const InteractiveCards: Story = {
  name: 'Interactive Cards',
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        width: '600px',
      }}
    >
      <Card
        hoverable
        title="Hoverable Card"
        subtitle="Lifts on hover"
        shadow="md"
      >
        <Text tone="secondary" size="sm">
          Hover over this card to see the elevation effect.
        </Text>
      </Card>
      <Card
        clickable
        title="Clickable Card"
        subtitle="Interactive action"
        onClick={() => alert('Card clicked!')}
      >
        <Text tone="secondary" size="sm">
          Click this card to trigger an action.
        </Text>
      </Card>
      <Card
        hoverable
        gradient="rainbow"
        title="Rainbow Hover"
        subtitle="Gradient + hover"
      >
        <Text size="sm">Combines gradient background with hover effects.</Text>
      </Card>
    </div>
  ),
}

export const HeadersAndFooters: Story = {
  name: 'Headers & Footers',
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        width: '600px',
      }}
    >
      <Card
        title="User Profile"
        subtitle="Last updated 2 hours ago"
        footer={
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button size="sm" variant="primary">
              Edit
            </Button>
            <Button size="sm" variant="ghost">
              Cancel
            </Button>
          </div>
        }
      >
        <Text size="sm">
          Cards can have headers with titles, subtitles, and footer action
          areas.
        </Text>
      </Card>

      <Card
        gradient="blue"
        title="Premium Feature"
        subtitle="Upgrade to unlock"
        footer={
          <Button variant="secondary" size="sm" fullWidth>
            Learn More
          </Button>
        }
      >
        <Text size="sm">
          Gradient cards work seamlessly with headers and footers.
        </Text>
      </Card>

      <Card
        header={
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text weight="semibold">Custom Header</Text>
            <div
              style={{
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CheckIcon />
            </div>
          </div>
        }
        footer={
          <Text size="xs" tone="tertiary">
            Footer content can be anything
          </Text>
        }
      >
        <Text size="sm" tone="secondary">
          Use custom header and footer React nodes for full flexibility.
        </Text>
      </Card>
    </div>
  ),
}

export const PaddingAndShadow: Story = {
  name: 'Padding & Shadow Options',
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '16px',
        width: '600px',
      }}
    >
      <Card padding="sm" shadow="none" bordered title="Compact">
        <Text size="sm" tone="secondary">
          Small padding, no shadow
        </Text>
      </Card>
      <Card padding="md" shadow="md" title="Medium">
        <Text size="sm" tone="secondary">
          Default medium padding
        </Text>
      </Card>
      <Card padding="lg" shadow="lg" title="Spacious">
        <Text size="sm" tone="secondary">
          Large padding, large shadow
        </Text>
      </Card>
      <Card padding="xl" shadow="xl" title="Extra Large">
        <Text size="sm" tone="secondary">
          Maximum padding and shadow
        </Text>
      </Card>
    </div>
  ),
}

export const BorderRadius: Story = {
  name: 'Border Radius Options',
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '16px',
        width: '600px',
      }}
    >
      <Card radius="none" title="No Radius">
        <Text size="sm" tone="secondary">
          Sharp corners
        </Text>
      </Card>
      <Card radius="sm" title="Small">
        <Text size="sm" tone="secondary">
          Subtle rounding
        </Text>
      </Card>
      <Card radius="lg" title="Large">
        <Text size="sm" tone="secondary">
          Default rounded
        </Text>
      </Card>
      <Card radius="xl" title="Extra Large">
        <Text size="sm" tone="secondary">
          Very rounded
        </Text>
      </Card>
    </div>
  ),
}

export const AICards: Story = {
  name: 'AI Card Variant',
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        width: '400px',
      }}
    >
      <Card
        variant="ai"
        title="AI-Powered Feature"
        subtitle="Colorful gradient border"
      >
        <Text size="sm">
          The AI variant features a static colorful gradient border with a
          subtle glow effect, perfect for highlighting AI-powered features.
        </Text>
      </Card>
      <Card
        variant="ai"
        hoverable
        title="Hoverable AI Card"
        subtitle="Combines AI border with hover"
      >
        <Text size="sm">
          Hover effects work seamlessly with the AI variant for extra visual
          appeal.
        </Text>
      </Card>
    </div>
  ),
}

export const TopGradientFeature: Story = {
  name: 'Top Gradient Feature',
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '16px',
        width: '900px',
      }}
    >
      <Card
        variant="elevated"
        topGradient="primary"
        title="Elevated + Primary"
        subtitle="Clean with gradient accent"
      >
        <Text size="sm" tone="secondary">
          The topGradient feature works with any variant for flexible design
          combinations.
        </Text>
      </Card>
      <Card
        variant="outlined"
        topGradient="purple"
        title="Outlined + Purple"
        subtitle="Strong border with gradient"
      >
        <Text size="sm" tone="secondary">
          Add gradient top borders to outlined cards for enhanced visual
          hierarchy.
        </Text>
      </Card>
      <Card
        variant="glass-frost"
        topGradient="rainbow"
        title="Glass Frost + Rainbow"
        subtitle="Modern glass with color"
      >
        <Text size="sm">
          Combine glassmorphism with vibrant gradient accents for stunning
          modern interfaces.
        </Text>
      </Card>
      <Card
        variant="glass-tint"
        topGradient="blue"
        title="Glass Tint + Blue"
        subtitle="Professional glass design"
      >
        <Text size="sm">
          Perfect for business applications with professional blue accents on
          glass surfaces.
        </Text>
      </Card>
      <Card
        variant="filled"
        topGradient="accent"
        title="Filled + Accent"
        subtitle="Subtle with golden accent"
      >
        <Text size="sm" tone="secondary">
          Highlight premium features with elegant golden gradients on any card
          variant.
        </Text>
      </Card>
      <Card
        variant="ghost"
        topGradient="primary"
        title="Ghost + Primary"
        subtitle="Minimal with brand accent"
      >
        <Text size="sm" tone="secondary">
          Even transparent cards can have gradient accents for subtle branding.
        </Text>
      </Card>
    </div>
  ),
}

export const CollapsibleCards: Story = {
  name: 'Collapsible Cards',
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '16px',
        width: '750px',
      }}
    >
      <Card
        collapsible
        title="Expandable Section"
        subtitle="Click to collapse/expand"
      >
        <VStack gap="sm">
          <Text size="sm">
            This card can be collapsed to save space. Click the header to toggle
            the content visibility.
          </Text>
          <Text size="sm" tone="secondary">
            Perfect for FAQ sections, settings panels, or any content that users
            might want to hide.
          </Text>
        </VStack>
      </Card>
      <Card
        collapsible
        defaultExpanded={false}
        title="Initially Collapsed"
        subtitle="Starts in collapsed state"
      >
        <Text size="sm">
          This card starts collapsed by default. The defaultExpanded prop
          controls the initial state.
        </Text>
      </Card>
      <Card
        collapsible
        variant="glass-frost"
        topGradient="rainbow"
        title="Glass + Gradient + Collapsible"
        subtitle="Triple combination"
      >
        <VStack gap="sm">
          <Text size="sm">
            Combine any variant with topGradient and collapsible functionality
            for maximum flexibility.
          </Text>
          <Divider spacing="sm" />
          <Text size="sm" tone="secondary">
            The gradient top border works seamlessly with all card features!
          </Text>
        </VStack>
      </Card>
    </div>
  ),
}
