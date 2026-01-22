import type { Meta, StoryObj } from '@storybook/react'
import { Spacer } from '../components/Layout/Spacer'
import { Card } from '../components/Display/Card'
import { Text } from '../components/Display/Text'
import { Button } from '../components/Interactive/Button'
import { Badge } from '../components/Display/Badge'

const meta: Meta<typeof Spacer> = {
  title: 'Layout/Spacer',
  component: Spacer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A utility component for adding consistent spacing between elements. Supports different sizes and orientations for fine-tuned layout control.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      description: 'Amount of spacing',
    },
    axis: {
      control: 'select',
      options: ['vertical', 'horizontal', 'both'],
      description: 'Direction of spacing',
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
    size: 'md',
    axis: 'vertical',
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <Card padding="lg">
        <Text as="h4" style={{ margin: 0 }}>
          First Element
        </Text>
      </Card>

      <Spacer {...args} />

      <Card padding="lg">
        <Text as="h4" style={{ margin: 0 }}>
          Second Element
        </Text>
      </Card>
    </div>
  ),
}

export const VerticalSizes: Story = {
  render: () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'] as const

    return (
      <div style={{ width: '400px' }}>
        <Text as="h3" style={{ margin: '0 0 2rem 0' }}>
          Vertical Spacing Sizes
        </Text>

        {sizes.map((size, index) => (
          <div key={size}>
            <Card
              padding="md"
              style={{ border: '1px solid var(--color-border-base)' }}
            >
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Text style={{ margin: 0 }}>Element {index + 1}</Text>
                <Badge variant="primary">{size}</Badge>
              </div>
            </Card>

            {index < sizes.length - 1 && <Spacer size={size} axis="vertical" />}
          </div>
        ))}

        <Card
          padding="md"
          style={{ border: '1px solid var(--color-border-base)' }}
        >
          <Text style={{ margin: 0 }}>Final Element</Text>
        </Card>
      </div>
    )
  },
}

export const HorizontalSizes: Story = {
  render: () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const

    return (
      <div style={{ width: '100%', maxWidth: '800px' }}>
        <Text as="h3" style={{ margin: '0 0 2rem 0' }}>
          Horizontal Spacing Sizes
        </Text>

        <div
          style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}
        >
          {sizes.map((size, index) => (
            <div key={size} style={{ display: 'flex', alignItems: 'center' }}>
              <Card padding="md">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <Text style={{ margin: 0 }}>Item {index + 1}</Text>
                  <Badge variant="success" size="sm">
                    {size}
                  </Badge>
                </div>
              </Card>

              {index < sizes.length - 1 && (
                <Spacer size={size} axis="horizontal" />
              )}
            </div>
          ))}

          <Card padding="md">
            <Text style={{ margin: 0 }}>Final Item</Text>
          </Card>
        </div>
      </div>
    )
  },
}

export const BothAxes: Story = {
  render: () => {
    const sizes = ['sm', 'md', 'lg'] as const

    return (
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <Text as="h3" style={{ margin: '0 0 2rem 0' }}>
          Both Axes Spacing
        </Text>
        <Text
          style={{ margin: '0 0 2rem 0', color: 'var(--color-text-secondary)' }}
        >
          Spacers with axis="both" add spacing in all directions, useful for
          creating breathing room around elements.
        </Text>

        {sizes.map((size) => (
          <div key={size}>
            <Card
              padding="lg"
              style={{ backgroundColor: 'var(--color-bg-subtle)' }}
            >
              <Text as="h4" style={{ margin: '0 0 0.5rem 0' }}>
                Section with {size} spacing
              </Text>
              <Text style={{ color: 'var(--color-text-secondary)', margin: 0 }}>
                This card will have {size} spacing around it on both axes.
              </Text>
            </Card>

            <Spacer size={size} axis="both" />
          </div>
        ))}

        <Card
          padding="lg"
          style={{ backgroundColor: 'var(--color-bg-subtle)' }}
        >
          <Text as="h4" style={{ margin: '0 0 0.5rem 0' }}>
            Final Section
          </Text>
          <Text style={{ color: 'var(--color-text-secondary)', margin: 0 }}>
            This is the last section without spacing after it.
          </Text>
        </Card>
      </div>
    )
  },
}

export const FormLayout: Story = {
  render: () => (
    <Card padding="xl" style={{ width: '400px' }}>
      <Text as="h3" style={{ margin: 0 }}>
        Contact Form
      </Text>

      <Spacer size="lg" />

      <div>
        <Text style={{ margin: '0 0 0.5rem 0', fontWeight: 500 }}>Name</Text>
        <div
          style={{
            padding: '0.75rem',
            border: '1px solid var(--color-border-base)',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--color-bg-base)',
          }}
        >
          <Text style={{ color: 'var(--color-text-secondary)', margin: 0 }}>
            Input field placeholder
          </Text>
        </div>
      </div>

      <Spacer size="md" />

      <div>
        <Text style={{ margin: '0 0 0.5rem 0', fontWeight: 500 }}>Email</Text>
        <div
          style={{
            padding: '0.75rem',
            border: '1px solid var(--color-border-base)',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--color-bg-base)',
          }}
        >
          <Text style={{ color: 'var(--color-text-secondary)', margin: 0 }}>
            Input field placeholder
          </Text>
        </div>
      </div>

      <Spacer size="md" />

      <div>
        <Text as="p" style={{ margin: '0 0 0.5rem 0', fontWeight: 500 }}>
          Message
        </Text>
        <div
          style={{
            padding: '0.75rem',
            border: '1px solid var(--color-border-base)',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--color-bg-base)',
            minHeight: '80px',
          }}
        >
          <Text
            as="p"
            style={{ color: 'var(--color-text-secondary)', margin: 0 }}
          >
            Textarea placeholder
          </Text>
        </div>
      </div>

      <Spacer size="lg" />

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Button style={{ flex: 1 }}>Send Message</Button>
        <Button variant="ghost" style={{ flex: 1 }}>
          Cancel
        </Button>
      </div>
    </Card>
  ),
}

export const ResponsiveSpacing: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '800px' }}>
      <Text as="h3" style={{ margin: '0 0 1rem 0' }}>
        Responsive Article Layout
      </Text>
      <Text
        as="p"
        style={{ color: 'var(--color-text-secondary)', margin: '0 0 2rem 0' }}
      >
        This example shows how spacers can be used to create consistent spacing
        in article layouts.
      </Text>

      <Card padding="xl">
        <Text as="h2" style={{ margin: 0 }}>
          Article Title
        </Text>

        <Spacer size="sm" />

        <Text
          as="p"
          style={{ color: 'var(--color-text-secondary)', margin: 0 }}
        >
          Published on March 15, 2024 • 5 min read
        </Text>

        <Spacer size="lg" />

        <Text as="p" style={{ margin: 0 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>

        <Spacer size="md" />

        <Text as="p" style={{ margin: 0 }}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </Text>

        <Spacer size="lg" />

        <Text as="h3" style={{ margin: 0 }}>
          Subsection
        </Text>

        <Spacer size="sm" />

        <Text as="p" style={{ margin: 0 }}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis.
        </Text>

        <Spacer size="xl" />

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Button size="sm">Share Article</Button>
          <Button size="sm" variant="ghost">
            Save for Later
          </Button>
        </div>
      </Card>
    </div>
  ),
}
