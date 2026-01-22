import type { Meta, StoryObj } from '@storybook/react'
import { Stack, VStack, HStack } from '../components/Layout/Stack'
import { Card } from '../components/Display/Card'
import { Text } from '../components/Display/Text'
import { Button } from '../components/Interactive/Button'
import { Badge } from '../components/Display/Badge'
import { Avatar } from '../components/Display/Avatar'

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible layout component for arranging elements in vertical or horizontal stacks with consistent spacing and alignment. Includes VStack and HStack convenience components.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Stack direction',
    },
    gap: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Space between items',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
      description: 'Cross-axis alignment',
    },
    justify: {
      control: 'select',
      options: [
        'start',
        'center',
        'end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      description: 'Main-axis justification',
    },
    wrap: {
      control: 'boolean',
      description: 'Allow items to wrap to new lines',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const StackItem = ({ children, ...props }: { children: React.ReactNode }) => (
  <Card padding="md" {...props}>
    <Text style={{ margin: 0, textAlign: 'center' }}>{children}</Text>
  </Card>
)

export const Default: Story = {
  args: {
    direction: 'vertical',
    gap: 'md',
    align: 'stretch',
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <Stack {...args}>
        <StackItem>First Item</StackItem>
        <StackItem>Second Item</StackItem>
        <StackItem>Third Item</StackItem>
        <StackItem>Fourth Item</StackItem>
      </Stack>
    </div>
  ),
}

export const VStackDemo: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <Text as="h3" style={{ margin: '0 0 2rem 0' }}>
        VStack (Vertical Stack)
      </Text>

      <VStack gap="lg">
        <Card padding="lg">
          <Text as="h4" style={{ margin: '0 0 0.5rem 0' }}>
            Card Header
          </Text>
          <Text
            as="p"
            style={{ color: 'var(--color-text-secondary)', margin: 0 }}
          >
            This is the content of the first card in the vertical stack.
          </Text>
        </Card>

        <Card padding="lg">
          <Text as="h4" style={{ margin: '0 0 0.5rem 0' }}>
            Card Content
          </Text>
          <Text
            as="p"
            style={{
              color: 'var(--color-text-secondary)',
              margin: '0 0 1rem 0',
            }}
          >
            This card contains some content and actions.
          </Text>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button size="sm">Primary Action</Button>
            <Button size="sm" variant="ghost">
              Secondary
            </Button>
          </div>
        </Card>

        <Card padding="lg">
          <Text as="h4" style={{ margin: '0 0 0.5rem 0' }}>
            Card Footer
          </Text>
          <Text
            as="p"
            style={{ color: 'var(--color-text-secondary)', margin: 0 }}
          >
            This is the last card in the vertical stack.
          </Text>
        </Card>
      </VStack>
    </div>
  ),
}

export const HStackDemo: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '800px' }}>
      <Text as="h3" style={{ margin: '0 0 2rem 0' }}>
        HStack (Horizontal Stack)
      </Text>

      <HStack gap="lg" align="stretch">
        <Card padding="lg" style={{ flex: 1 }}>
          <Text as="h4" style={{ margin: '0 0 0.5rem 0' }}>
            Feature 1
          </Text>
          <Text
            as="p"
            style={{
              color: 'var(--color-text-secondary)',
              margin: '0 0 1rem 0',
            }}
          >
            Description of the first feature in this horizontal layout.
          </Text>
          <Button size="sm" style={{ width: '100%' }}>
            Learn More
          </Button>
        </Card>

        <Card padding="lg" style={{ flex: 1 }}>
          <Text as="h4" style={{ margin: '0 0 0.5rem 0' }}>
            Feature 2
          </Text>
          <Text
            as="p"
            style={{
              color: 'var(--color-text-secondary)',
              margin: '0 0 1rem 0',
            }}
          >
            Description of the second feature with equal width distribution.
          </Text>
          <Button size="sm" variant="ghost" style={{ width: '100%' }}>
            Learn More
          </Button>
        </Card>

        <Card padding="lg" style={{ flex: 1 }}>
          <Text as="h4" style={{ margin: '0 0 0.5rem 0' }}>
            Feature 3
          </Text>
          <Text
            as="p"
            style={{
              color: 'var(--color-text-secondary)',
              margin: '0 0 1rem 0',
            }}
          >
            Description of the third feature completing the trio.
          </Text>
          <Button size="sm" variant="accent" style={{ width: '100%' }}>
            Learn More
          </Button>
        </Card>
      </HStack>
    </div>
  ),
}

export const GapVariations: Story = {
  render: () => {
    const gaps = ['xs', 'sm', 'md', 'lg', 'xl'] as const

    return (
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <Text as="h3" style={{ margin: '0 0 2rem 0' }}>
          Gap Variations
        </Text>

        <VStack gap="xl">
          {gaps.map((gap) => (
            <div key={gap}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                }}
              >
                <Text as="h4" style={{ margin: 0 }}>
                  Gap: {gap}
                </Text>
                <Badge variant="primary">{gap}</Badge>
              </div>
              <HStack gap={gap}>
                <StackItem>A</StackItem>
                <StackItem>B</StackItem>
                <StackItem>C</StackItem>
                <StackItem>D</StackItem>
              </HStack>
            </div>
          ))}
        </VStack>
      </div>
    )
  },
}

export const AlignmentDemo: Story = {
  render: () => {
    const alignments = ['start', 'center', 'end', 'stretch'] as const

    return (
      <div style={{ width: '100%', maxWidth: '700px' }}>
        <Text as="h3" style={{ margin: '0 0 2rem 0' }}>
          Alignment Options
        </Text>

        <VStack gap="xl">
          {alignments.map((align) => (
            <div key={align}>
              <Text as="h4" style={{ margin: '0 0 1rem 0' }}>
                align=&quot;{align}&quot;
              </Text>
              <div
                style={{
                  border: '1px dashed var(--color-border-base)',
                  padding: '1rem',
                  minHeight: '120px',
                }}
              >
                <HStack gap="md" align={align}>
                  <Card padding="sm" style={{ height: '40px' }}>
                    <Text as="span" style={{ margin: 0 }}>
                      Short
                    </Text>
                  </Card>
                  <Card padding="sm" style={{ height: '80px' }}>
                    <Text as="span" style={{ margin: 0 }}>
                      Medium
                    </Text>
                  </Card>
                  <Card padding="sm" style={{ height: '60px' }}>
                    <Text as="span" style={{ margin: 0 }}>
                      Tall
                    </Text>
                  </Card>
                </HStack>
              </div>
            </div>
          ))}
        </VStack>
      </div>
    )
  },
}

export const JustificationDemo: Story = {
  render: () => {
    const justifications = [
      'start',
      'center',
      'end',
      'space-between',
      'space-around',
      'space-evenly',
    ] as const

    return (
      <div style={{ width: '100%', maxWidth: '700px' }}>
        <Text as="h3" style={{ margin: '0 0 2rem 0' }}>
          Justification Options
        </Text>

        <VStack gap="lg">
          {justifications.map((justify) => (
            <div key={justify}>
              <Text style={{ margin: '0 0 0.5rem 0', fontWeight: 500 }}>
                justify=&quot;{justify}&quot;
              </Text>
              <div
                style={{
                  border: '1px dashed var(--color-border-base)',
                  padding: '1rem',
                }}
              >
                <HStack gap="sm" justify={justify}>
                  <StackItem>A</StackItem>
                  <StackItem>B</StackItem>
                  <StackItem>C</StackItem>
                </HStack>
              </div>
            </div>
          ))}
        </VStack>
      </div>
    )
  },
}

export const WrappingDemo: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '500px' }}>
      <Text as="h3" style={{ margin: '0 0 2rem 0' }}>
        Wrapping Behavior
      </Text>

      <VStack gap="xl">
        <div>
          <Text as="h4" style={{ margin: '0 0 1rem 0' }}>
            No Wrapping (default)
          </Text>
          <div
            style={{
              border: '1px dashed var(--color-border-base)',
              padding: '1rem',
            }}
          >
            <HStack gap="md" wrap={false}>
              {Array.from({ length: 8 }, (_, i) => (
                <StackItem key={i}>Item {i + 1}</StackItem>
              ))}
            </HStack>
          </div>
        </div>

        <div>
          <Text as="h4" style={{ margin: '0 0 1rem 0' }}>
            With Wrapping
          </Text>
          <div
            style={{
              border: '1px dashed var(--color-border-base)',
              padding: '1rem',
            }}
          >
            <HStack gap="md" wrap>
              {Array.from({ length: 8 }, (_, i) => (
                <StackItem key={i}>Item {i + 1}</StackItem>
              ))}
            </HStack>
          </div>
        </div>
      </VStack>
    </div>
  ),
}

export const UserProfile: Story = {
  render: () => (
    <Card padding="xl" style={{ width: '400px' }}>
      <VStack gap="lg">
        {/* Header with avatar and basic info */}
        <HStack gap="md" align="center">
          <Avatar
            size="lg"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
          />
          <VStack gap="xs" style={{ flex: 1 }}>
            <Text as="h4" style={{ margin: 0 }}>
              John Doe
            </Text>
            <Text
              as="p"
              style={{ color: 'var(--color-text-secondary)', margin: 0 }}
            >
              Senior Developer
            </Text>
            <HStack gap="xs">
              <Badge variant="success" size="sm">
                Online
              </Badge>
              <Badge variant="primary" size="sm">
                Pro
              </Badge>
            </HStack>
          </VStack>
        </HStack>

        {/* Stats */}
        <HStack gap="md">
          <VStack gap="xs" align="center" style={{ flex: 1 }}>
            <Text
              as="h3"
              style={{ margin: 0, color: 'var(--color-brand-base)' }}
            >
              127
            </Text>
            <Text
              as="span"
              style={{ color: 'var(--color-text-secondary)', margin: 0 }}
            >
              Projects
            </Text>
          </VStack>
          <VStack gap="xs" align="center" style={{ flex: 1 }}>
            <Text
              as="h3"
              style={{ margin: 0, color: 'var(--color-accent-base)' }}
            >
              1.2k
            </Text>
            <Text
              as="span"
              style={{ color: 'var(--color-text-secondary)', margin: 0 }}
            >
              Followers
            </Text>
          </VStack>
          <VStack gap="xs" align="center" style={{ flex: 1 }}>
            <Text
              as="h3"
              style={{ margin: 0, color: 'var(--color-purple-base)' }}
            >
              89
            </Text>
            <Text
              as="span"
              style={{ color: 'var(--color-text-secondary)', margin: 0 }}
            >
              Following
            </Text>
          </VStack>
        </HStack>

        {/* Actions */}
        <HStack gap="sm">
          <Button style={{ flex: 1 }}>Follow</Button>
          <Button variant="ghost" style={{ flex: 1 }}>
            Message
          </Button>
        </HStack>
      </VStack>
    </Card>
  ),
}

export const NestedStacks: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '800px' }}>
      <Text as="h3" style={{ margin: '0 0 2rem 0' }}>
        Nested Stack Layout
      </Text>

      <Card padding="xl">
        <VStack gap="lg">
          {/* Header */}
          <HStack gap="md" justify="space-between" align="center">
            <VStack gap="xs">
              <Text as="h2" style={{ margin: 0 }}>
                Dashboard
              </Text>
              <Text
                as="p"
                style={{ color: 'var(--color-text-secondary)', margin: 0 }}
              >
                Welcome back! Here&apos;s your overview.
              </Text>
            </VStack>
            <HStack gap="sm">
              <Button size="sm" variant="ghost">
                Export
              </Button>
              <Button size="sm">New Project</Button>
            </HStack>
          </HStack>

          {/* Content area with nested layout */}
          <HStack gap="lg" align="start">
            {/* Sidebar */}
            <VStack gap="md" style={{ minWidth: '200px' }}>
              <Text as="h5" style={{ margin: 0 }}>
                Quick Actions
              </Text>
              <VStack gap="xs">
                <Button
                  variant="ghost"
                  style={{ width: '100%', justifyContent: 'flex-start' }}
                >
                  View Reports
                </Button>
                <Button
                  variant="ghost"
                  style={{ width: '100%', justifyContent: 'flex-start' }}
                >
                  Manage Users
                </Button>
                <Button
                  variant="ghost"
                  style={{ width: '100%', justifyContent: 'flex-start' }}
                >
                  Settings
                </Button>
              </VStack>
            </VStack>

            {/* Main content */}
            <VStack gap="lg" style={{ flex: 1 }}>
              {/* Stats row */}
              <HStack gap="md">
                <Card padding="md" style={{ flex: 1 }}>
                  <VStack gap="sm">
                    <Text
                      as="span"
                      style={{
                        color: 'var(--color-text-secondary)',
                        margin: 0,
                      }}
                    >
                      Total Users
                    </Text>
                    <Text as="h3" style={{ margin: 0 }}>
                      1,234
                    </Text>
                  </VStack>
                </Card>
                <Card padding="md" style={{ flex: 1 }}>
                  <VStack gap="sm">
                    <Text
                      as="span"
                      style={{
                        color: 'var(--color-text-secondary)',
                        margin: 0,
                      }}
                    >
                      Revenue
                    </Text>
                    <Text as="h3" style={{ margin: 0 }}>
                      $12,345
                    </Text>
                  </VStack>
                </Card>
                <Card padding="md" style={{ flex: 1 }}>
                  <VStack gap="sm">
                    <Text
                      as="span"
                      style={{
                        color: 'var(--color-text-secondary)',
                        margin: 0,
                      }}
                    >
                      Orders
                    </Text>
                    <Text as="h3" style={{ margin: 0 }}>
                      567
                    </Text>
                  </VStack>
                </Card>
              </HStack>

              {/* Chart area */}
              <Card padding="lg">
                <VStack gap="md">
                  <Text as="h4" style={{ margin: 0 }}>
                    Analytics
                  </Text>
                  <div
                    style={{
                      height: '200px',
                      backgroundColor: 'var(--color-bg-subtle)',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Text
                      style={{
                        color: 'var(--color-text-secondary)',
                        margin: 0,
                      }}
                    >
                      Chart visualization would go here
                    </Text>
                  </div>
                </VStack>
              </Card>
            </VStack>
          </HStack>
        </VStack>
      </Card>
    </div>
  ),
}
