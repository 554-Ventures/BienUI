import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from '../components/Layout/Divider'
import { Card } from '../components/Display/Card'
import { Text } from '../components/Display/Text'
import { Button } from '../components/Interactive/Button'
import { VStack, HStack } from '../components/Layout/Stack'

const meta: Meta<typeof Divider> = {
  title: 'Layout/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A versatile divider component for creating visual separation between content. Supports horizontal and vertical orientations, labels, gradients, and multiple visual styles.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Direction of the divider',
    },
    spacing: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Space around the divider',
    },
    variant: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted'],
      description: 'Visual style of the divider line',
    },
    thickness: {
      control: 'select',
      options: ['thin', 'medium', 'thick'],
      description: 'Thickness of the divider line',
    },
    gradient: {
      control: 'boolean',
      description: 'Enable gradient styling',
    },
    label: {
      control: 'text',
      description: 'Text label in the middle of horizontal dividers',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    orientation: 'horizontal',
    spacing: 'md',
    variant: 'solid',
    thickness: 'thin',
    gradient: false,
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <Card padding="lg">
        <Text as="h4" style={{ margin: '0 0 1rem 0' }}>
          Section 1
        </Text>
        <Text as="p" style={{ margin: 0 }}>
          This is the first section of content that appears before the divider.
        </Text>
      </Card>

      <Divider {...args} />

      <Card padding="lg">
        <Text as="h4" style={{ margin: '0 0 1rem 0' }}>
          Section 2
        </Text>
        <Text as="p" style={{ margin: 0 }}>
          This is the second section of content that appears after the divider.
        </Text>
      </Card>
    </div>
  ),
}

export const WithLabels: Story = {
  render: () => (
    <div style={{ width: '500px' }}>
      <Card padding="lg">
        <Text as="h3" style={{ margin: '0 0 1rem 0' }}>
          Document Sections
        </Text>

        <Text as="p" style={{ margin: '0 0 1rem 0' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>

        <Divider label="Chapter 1" spacing="lg" />

        <Text as="p" style={{ margin: '1rem 0' }}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </Text>

        <Divider label="Chapter 2" spacing="lg" variant="dashed" />

        <Text as="p" style={{ margin: '1rem 0' }}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </Text>

        <Divider label="Conclusion" spacing="lg" gradient />

        <Text as="p" style={{ margin: '1rem 0 0 0' }}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </Text>
      </Card>
    </div>
  ),
}

export const VerticalDividers: Story = {
  render: () => (
    <Card padding="lg" style={{ width: '600px' }}>
      <Text as="h3" style={{ margin: '0 0 2rem 0', textAlign: 'center' }}>
        Vertical Dividers
      </Text>

      <HStack gap="md" align="stretch" style={{ minHeight: '200px' }}>
        <div style={{ flex: 1, padding: '1rem' }}>
          <Text as="h4" style={{ margin: '0 0 1rem 0' }}>
            Left Panel
          </Text>
          <Text
            as="p"
            style={{
              color: 'var(--color-text-secondary)',
              margin: '0 0 1rem 0',
            }}
          >
            This content is on the left side of the vertical divider.
          </Text>
          <Button size="sm">Action</Button>
        </div>

        <Divider orientation="vertical" spacing="md" />

        <div style={{ flex: 1, padding: '1rem' }}>
          <Text as="h4" style={{ margin: '0 0 1rem 0' }}>
            Center Panel
          </Text>
          <Text
            as="p"
            style={{
              color: 'var(--color-text-secondary)',
              margin: '0 0 1rem 0',
            }}
          >
            This content is in the center, between two vertical dividers.
          </Text>
          <Button size="sm" variant="ghost">
            Action
          </Button>
        </div>

        <Divider orientation="vertical" spacing="md" variant="dashed" />

        <div style={{ flex: 1, padding: '1rem' }}>
          <Text as="h4" style={{ margin: '0 0 1rem 0' }}>
            Right Panel
          </Text>
          <Text
            as="p"
            style={{
              color: 'var(--color-text-secondary)',
              margin: '0 0 1rem 0',
            }}
          >
            This content is on the right side of the vertical divider.
          </Text>
          <Button size="sm" variant="accent">
            Action
          </Button>
        </div>
      </HStack>
    </Card>
  ),
}

export const VariantsShowcase: Story = {
  render: () => {
    const variants = ['solid', 'dashed', 'dotted'] as const
    const thicknesses = ['thin', 'medium', 'thick'] as const

    return (
      <div style={{ width: '600px' }}>
        <Text as="h3" style={{ margin: '0 0 2rem 0' }}>
          Divider Variants & Thickness
        </Text>

        <VStack gap="xl">
          {variants.map((variant) => (
            <Card key={variant} padding="lg">
              <Text
                as="h4"
                style={{ margin: '0 0 1rem 0', textTransform: 'capitalize' }}
              >
                {variant} Variant
              </Text>

              {thicknesses.map((thickness) => (
                <div key={thickness}>
                  <Text
                    as="p"
                    style={{ margin: '1rem 0 0.5rem 0', fontWeight: 500 }}
                  >
                    {thickness} thickness:
                  </Text>
                  <Divider
                    variant={variant}
                    thickness={thickness}
                    spacing="sm"
                  />
                </div>
              ))}
            </Card>
          ))}

          <Card padding="lg">
            <Text as="h4" style={{ margin: '0 0 1rem 0' }}>
              Gradient Dividers
            </Text>

            <Text as="p" style={{ margin: '1rem 0 0.5rem 0', fontWeight: 500 }}>
              Solid with gradient:
            </Text>
            <Divider gradient spacing="sm" />

            <Text as="p" style={{ margin: '1rem 0 0.5rem 0', fontWeight: 500 }}>
              Medium thickness with gradient:
            </Text>
            <Divider gradient thickness="medium" spacing="sm" />

            <Text as="p" style={{ margin: '1rem 0 0.5rem 0', fontWeight: 500 }}>
              With label and gradient:
            </Text>
            <Divider label="Gradient Section" gradient spacing="sm" />
          </Card>
        </VStack>
      </div>
    )
  },
}

export const SpacingVariations: Story = {
  render: () => {
    const spacings = ['none', 'xs', 'sm', 'md', 'lg', 'xl'] as const

    return (
      <div style={{ width: '500px' }}>
        <Text as="h3" style={{ margin: '0 0 2rem 0' }}>
          Spacing Variations
        </Text>

        {spacings.map((spacing) => (
          <div key={spacing}>
            <Card
              padding="md"
              style={{ backgroundColor: 'var(--color-bg-subtle)' }}
            >
              <Text as="p" style={{ margin: 0, textAlign: 'center' }}>
                Content block (spacing: {spacing})
              </Text>
            </Card>
            <Divider spacing={spacing} variant="dashed" />
          </div>
        ))}

        <Card
          padding="md"
          style={{ backgroundColor: 'var(--color-bg-subtle)' }}
        >
          <Text as="p" style={{ margin: 0, textAlign: 'center' }}>
            Final content block
          </Text>
        </Card>
      </div>
    )
  },
}
