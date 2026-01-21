import type { Meta, StoryObj } from '@storybook/react'
import { ColorSwatch } from '../components/Display/ColorSwatch'
import { Text } from '../components/Display/Text'
import { Grid } from '../components/Layout/Grid'

const meta = {
  title: 'Design System/ColorSwatch',
  component: ColorSwatch,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Complete color palette and design tokens for the Bien UI design system. Each color includes hex values, RGB values, and usage guidelines.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ColorSwatch>

export default meta
type Story = StoryObj<typeof meta>

export const ColorPalette: Story = {
  name: 'Complete Color Palette',
  render: () => (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '32px' }}>
        <Text size="lg" weight="semibold" style={{ marginBottom: '8px' }}>
          🎨 Bien UI Color Palette
        </Text>
        <Text size="sm" tone="secondary">
          Our complete color system with hex values, RGB, and usage guidelines
        </Text>
      </div>

      {/* Primary Colors */}
      <div style={{ marginBottom: '32px' }}>
        <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
          Primary Colors
        </Text>
        <Grid columns={3} gap="md">
          <ColorSwatch
            name="Blue"
            hex="#1d75bc"
            rgb="rgb(29, 117, 188)"
            usage="Primary brand color. Used for buttons, links, and key UI elements."
          />
          <ColorSwatch
            name="Blue Dark"
            hex="#155a94"
            rgb="rgb(21, 90, 148)"
            usage="Hover states and darker accents for the primary blue color."
          />
          <ColorSwatch
            name="Teal"
            hex="#016d77"
            rgb="rgb(1, 109, 119)"
            usage="Secondary brand color. Used for alternate buttons and accents."
          />
        </Grid>
      </div>

      {/* Accent Colors */}
      <div style={{ marginBottom: '32px' }}>
        <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
          Accent Colors
        </Text>
        <Grid columns={3} gap="md">
          <ColorSwatch
            name="Gold"
            hex="#e7c067"
            rgb="rgb(231, 192, 103)"
            usage="Accent color for highlights, badges, and special emphasis."
          />
          <ColorSwatch
            name="Purple"
            hex="#a94f9e"
            rgb="rgb(169, 79, 158)"
            usage="Creative accent. Used for special features and visual variety."
          />
          <ColorSwatch
            name="Purple Dark"
            hex="#8b3f85"
            rgb="rgb(139, 63, 133)"
            usage="Darker purple for hover states and depth in purple elements."
          />
        </Grid>
      </div>

      {/* Gradients */}
      <div style={{ marginBottom: '32px' }}>
        <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
          Gradients
        </Text>
        <Grid columns={2} gap="md">
          <ColorSwatch
            name="Primary Gradient"
            hex="Blue → Blue Dark"
            gradient="linear-gradient(135deg, #1d75bc 0%, #155a94 100%)"
            usage="Primary gradient for buttons, cards, and modern UI elements."
          />
          <ColorSwatch
            name="Teal Gradient"
            hex="Teal → Teal Light"
            gradient="linear-gradient(135deg, #016d77 0%, #028c86 100%)"
            usage="Alternative gradient with teal brand colors for variety."
          />
          <ColorSwatch
            name="Purple Gradient"
            hex="Purple → Purple Dark"
            gradient="linear-gradient(135deg, #a94f9e 0%, #8b3f85 100%)"
            usage="Creative gradient for special sections and premium features."
          />
          <ColorSwatch
            name="Accent Gradient"
            hex="Gold → Gold Dark"
            gradient="linear-gradient(135deg, #e7c067 0%, #d4a574 100%)"
            usage="Warm gradient for highlights, promotions, and CTAs."
          />
        </Grid>
      </div>

      {/* Status Colors */}
      <div style={{ marginBottom: '32px' }}>
        <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
          Status Colors
        </Text>
        <Grid columns={4} gap="md">
          <ColorSwatch
            name="Success"
            hex="#14b8a6"
            rgb="rgb(20, 184, 166)"
            usage="Success states, confirmations, and positive actions."
          />
          <ColorSwatch
            name="Warning"
            hex="#fbbf24"
            rgb="rgb(251, 191, 36)"
            usage="Warnings, caution messages, and important notices."
          />
          <ColorSwatch
            name="Error"
            hex="#d4183d"
            rgb="rgb(212, 24, 61)"
            usage="Errors, destructive actions, and validation failures."
          />
          <ColorSwatch
            name="Info"
            hex="#3b82f6"
            rgb="rgb(59, 130, 246)"
            usage="Informational messages and helpful tips."
          />
        </Grid>
      </div>

      {/* Text Colors */}
      <div style={{ marginBottom: '32px' }}>
        <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
          Text Colors
        </Text>
        <Grid columns={4} gap="md">
          <ColorSwatch
            name="Text Primary"
            hex="#20282b"
            rgb="rgb(32, 40, 43)"
            usage="Main text color for headings, body text, and content."
          />
          <ColorSwatch
            name="Text Secondary"
            hex="#6b7280"
            rgb="rgb(107, 114, 128)"
            usage="Secondary text for descriptions and less important content."
          />
          <ColorSwatch
            name="Text Tertiary"
            hex="#9ca3af"
            rgb="rgb(156, 163, 175)"
            usage="Tertiary text for metadata, timestamps, and subtle text."
          />
          <ColorSwatch
            name="Text Inverse"
            hex="#ffffff"
            rgb="rgb(255, 255, 255)"
            usage="White text on dark backgrounds, buttons, and overlays."
          />
        </Grid>
      </div>

      {/* Background Colors */}
      <div style={{ marginBottom: '32px' }}>
        <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
          Background Colors
        </Text>
        <Grid columns={3} gap="md">
          <ColorSwatch
            name="Background Base"
            hex="#ffffff"
            rgb="rgb(255, 255, 255)"
            usage="Primary background color for the application."
          />
          <ColorSwatch
            name="Background Subtle"
            hex="#faf8f5"
            rgb="rgb(250, 248, 245)"
            usage="Subtle background for alternating sections and cards."
          />
          <ColorSwatch
            name="Background Muted"
            hex="#e5e5e3"
            rgb="rgb(229, 229, 227)"
            usage="Muted background for disabled states and dividers."
          />
        </Grid>
      </div>

      {/* Border Colors */}
      <div>
        <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
          Border Colors
        </Text>
        <Grid columns={3} gap="md">
          <ColorSwatch
            name="Border Base"
            hex="rgba(32, 40, 43, 0.18)"
            rgb="rgba(32, 40, 43, 0.18)"
            usage="Default border color for inputs, cards, and dividers."
          />
          <ColorSwatch
            name="Border Strong"
            hex="rgba(32, 40, 43, 0.3)"
            rgb="rgba(32, 40, 43, 0.3)"
            usage="Stronger borders for emphasis and active states."
          />
          <ColorSwatch
            name="Border Subtle"
            hex="rgba(32, 40, 43, 0.1)"
            rgb="rgba(32, 40, 43, 0.1)"
            usage="Subtle borders for minimal separation between elements."
          />
        </Grid>
      </div>
    </div>
  ),
}
