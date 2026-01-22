import type { Meta, StoryObj } from '@storybook/react'
import { Container } from '../components/Layout/Container'
import { Card } from '../components/Display/Card'
import { Text } from '../components/Display/Text'
import { Button } from '../components/Interactive/Button'

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A responsive container component that provides consistent max-width and padding across different screen sizes. Perfect for creating centered layouts with proper content boundaries.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'Maximum width of the container',
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Internal padding',
    },
    centered: {
      control: 'boolean',
      description: 'Whether to center the container horizontally',
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
    size: 'lg',
    padding: 'md',
    centered: true,
  },
  render: (args) => (
    <div
      style={{ backgroundColor: 'var(--color-bg-subtle)', minHeight: '100vh' }}
    >
      <Container {...args}>
        <Text as="h2" style={{ margin: '0 0 1rem 0' }}>
          Container Demo
        </Text>
        <Text
          as="p"
          style={{ margin: '0 0 2rem 0', color: 'var(--color-text-secondary)' }}
        >
          This content is inside a {args.size} container with {args.padding}{' '}
          padding.
          {args.centered
            ? ' The container is centered.'
            : ' The container is not centered.'}
        </Text>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem',
          }}
        >
          <Card padding="lg">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <Button size="sm">Learn More</Button>
          </Card>

          <Card padding="lg">
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
              Sed do eiusmod tempor incididunt ut labore et dolore magna.
            </Text>
            <Button size="sm">Learn More</Button>
          </Card>

          <Card padding="lg">
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
              Ut enim ad minim veniam, quis nostrud exercitation.
            </Text>
            <Button size="sm">Learn More</Button>
          </Card>
        </div>
      </Container>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => {
    const sizes = ['sm', 'md', 'lg', 'xl', 'full'] as const

    return (
      <div
        style={{
          backgroundColor: 'var(--color-bg-subtle)',
          minHeight: '100vh',
          padding: '2rem 0',
        }}
      >
        {sizes.map((size) => (
          <div key={size} style={{ marginBottom: '2rem' }}>
            <Container size={size} padding="md">
              <Card
                padding="lg"
                style={{ border: '2px dashed var(--color-brand-base)' }}
              >
                <Text
                  as="h4"
                  style={{ margin: '0 0 0.5rem 0', textTransform: 'uppercase' }}
                >
                  Size: {size}
                </Text>
                <Text
                  as="p"
                  style={{ color: 'var(--color-text-secondary)', margin: 0 }}
                >
                  This container uses the &quot;{size}&quot; size constraint
                </Text>
              </Card>
            </Container>
          </div>
        ))}
      </div>
    )
  },
}

export const PaddingVariants: Story = {
  render: () => {
    const paddings = ['none', 'sm', 'md', 'lg'] as const

    return (
      <div
        style={{
          backgroundColor: 'var(--color-bg-subtle)',
          minHeight: '100vh',
          padding: '2rem 0',
        }}
      >
        <Container size="md" padding="md">
          <Text as="h2" style={{ margin: '0 0 2rem 0', textAlign: 'center' }}>
            Padding Variants
          </Text>
        </Container>

        {paddings.map((padding) => (
          <div key={padding} style={{ marginBottom: '2rem' }}>
            <Container size="md" padding={padding}>
              <Card
                padding="md"
                style={{
                  border: '2px dashed var(--color-accent-base)',
                  backgroundColor: 'var(--color-accent-subtle)',
                }}
              >
                <Text
                  as="h4"
                  style={{ margin: '0 0 0.5rem 0', textTransform: 'uppercase' }}
                >
                  Padding: {padding}
                </Text>
                <Text
                  as="p"
                  style={{ color: 'var(--color-text-secondary)', margin: 0 }}
                >
                  Container internal padding is set to &quot;{padding}&quot;
                </Text>
              </Card>
            </Container>
          </div>
        ))}
      </div>
    )
  },
}

export const NestedContainers: Story = {
  render: () => (
    <div
      style={{ backgroundColor: 'var(--color-bg-subtle)', minHeight: '100vh' }}
    >
      <Container size="xl" padding="lg">
        <Card padding="lg">
          <Text as="h2" style={{ margin: '0 0 1rem 0' }}>
            Outer Container (xl)
          </Text>

          <Container size="lg" padding="md">
            <Card padding="md" variant="outlined">
              <Text as="h3" style={{ margin: '0 0 1rem 0' }}>
                Inner Container (lg)
              </Text>

              <Container size="md" padding="sm">
                <Card padding="sm" variant="filled">
                  <Text as="h4" style={{ margin: '0 0 0.5rem 0' }}>
                    Nested Container (md)
                  </Text>
                  <Text
                    as="p"
                    style={{ color: 'var(--color-text-secondary)', margin: 0 }}
                  >
                    This demonstrates how containers can be nested to create
                    complex layouts with progressive size constraints.
                  </Text>
                </Card>
              </Container>
            </Card>
          </Container>
        </Card>
      </Container>
    </div>
  ),
}
