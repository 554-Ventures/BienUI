import type { Meta, StoryObj } from '@storybook/react'
import { Grid } from '../components/Layout/Grid'
import { Card } from '../components/Display/Card'
import { Text } from '../components/Display/Text'
import { Button } from '../components/Interactive/Button'
import { Badge } from '../components/Display/Badge'

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible CSS Grid component with responsive capabilities, customizable gaps, and alignment options. Perfect for creating complex layouts with precise control over grid behavior.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'select',
      options: [1, 2, 3, 4, 6, 12, 'auto'],
      description: 'Number of columns or auto-fit behavior',
    },
    gap: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Gap between all grid items',
    },
    rowGap: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Gap between rows only',
    },
    columnGap: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Gap between columns only',
    },
    responsive: {
      control: 'boolean',
      description: 'Enable responsive behavior (for auto columns)',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
      description: 'Vertical alignment of grid items',
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'space-between', 'space-around'],
      description: 'Horizontal alignment/distribution of grid items',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const GridItem = ({ children, ...props }: { children: React.ReactNode }) => (
  <Card padding="md" {...props}>
    <Text as="p" style={{ margin: 0, textAlign: 'center' }}>
      {children}
    </Text>
  </Card>
)

export const Default: Story = {
  args: {
    columns: 'auto',
    gap: 'md',
    responsive: true,
  },
  render: (args) => (
    <div style={{ width: '100%', maxWidth: '800px' }}>
      <Text as="h3" style={{ margin: '0 0 1rem 0' }}>
        Grid Layout Demo
      </Text>
      <Grid {...args}>
        <GridItem>Item 1</GridItem>
        <GridItem>Item 2</GridItem>
        <GridItem>Item 3</GridItem>
        <GridItem>Item 4</GridItem>
        <GridItem>Item 5</GridItem>
        <GridItem>Item 6</GridItem>
      </Grid>
    </div>
  ),
}

export const FixedColumns: Story = {
  render: () => {
    const columnCounts = [1, 2, 3, 4] as const

    return (
      <div style={{ width: '100%', maxWidth: '800px' }}>
        <Text as="h3" style={{ margin: '0 0 2rem 0' }}>
          Fixed Columns
        </Text>

        {columnCounts.map((cols) => (
          <div key={cols} style={{ marginBottom: '2rem' }}>
            <Text as="h4" style={{ margin: '0 0 1rem 0' }}>
              {cols} Column{cols > 1 ? 's' : ''}
            </Text>
            <Grid columns={cols} gap="md">
              {Array.from({ length: cols * 2 }, (_, i) => (
                <GridItem key={i}>Item {i + 1}</GridItem>
              ))}
            </Grid>
          </div>
        ))}
      </div>
    )
  },
}

export const GapVariations: Story = {
  render: () => {
    const gaps = ['xs', 'sm', 'md', 'lg', 'xl'] as const

    return (
      <div style={{ width: '100%', maxWidth: '800px' }}>
        <Text as="h3" style={{ margin: '0 0 2rem 0' }}>
          Gap Variations
        </Text>

        {gaps.map((gap) => (
          <div key={gap} style={{ marginBottom: '2rem' }}>
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
            <Grid columns={3} gap={gap}>
              <GridItem>A</GridItem>
              <GridItem>B</GridItem>
              <GridItem>C</GridItem>
            </Grid>
          </div>
        ))}
      </div>
    )
  },
}

export const AlignmentDemo: Story = {
  render: () => {
    const alignments = ['start', 'center', 'end', 'stretch'] as const
    const justifications = ['start', 'center', 'end', 'space-between'] as const

    return (
      <div style={{ width: '100%', maxWidth: '800px' }}>
        <Text as="h3" style={{ margin: '0 0 2rem 0' }}>
          Alignment & Justification
        </Text>

        <div style={{ marginBottom: '2rem' }}>
          <Text as="h4" style={{ margin: '0 0 1rem 0' }}>
            Vertical Alignment (align)
          </Text>
          {alignments.map((align) => (
            <div key={align} style={{ marginBottom: '1rem' }}>
              <Text as="p" style={{ margin: '0 0 0.5rem 0', fontWeight: 500 }}>
                align=&quot;{align}&quot;
              </Text>
              <div
                style={{
                  border: '1px dashed var(--color-border-base)',
                  minHeight: '120px',
                }}
              >
                <Grid columns={3} gap="sm" align={align}>
                  <Card padding="sm" style={{ height: '40px' }}>
                    <Text as="p" style={{ margin: 0 }}>
                      Short
                    </Text>
                  </Card>
                  <Card padding="sm" style={{ height: '80px' }}>
                    <Text as="p" style={{ margin: 0 }}>
                      Medium
                    </Text>
                  </Card>
                  <Card padding="sm" style={{ height: '60px' }}>
                    <Text as="p" style={{ margin: 0 }}>
                      Tall
                    </Text>
                  </Card>
                </Grid>
              </div>
            </div>
          ))}
        </div>

        <div>
          <Text as="h4" style={{ margin: '0 0 1rem 0' }}>
            Horizontal Justification (justify)
          </Text>
          {justifications.map((justify) => (
            <div key={justify} style={{ marginBottom: '1rem' }}>
              <Text as="p" style={{ margin: '0 0 0.5rem 0', fontWeight: 500 }}>
                justify=&quot;{justify}&quot;
              </Text>
              <div style={{ border: '1px dashed var(--color-border-base)' }}>
                <Grid columns={3} gap="sm" justify={justify}>
                  <GridItem>A</GridItem>
                  <GridItem>B</GridItem>
                  <GridItem>C</GridItem>
                </Grid>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
}

export const ResponsiveAuto: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '1200px' }}>
      <Text as="h3" style={{ margin: '0 0 1rem 0' }}>
        Responsive Auto Grid
      </Text>
      <Text
        as="p"
        style={{ margin: '0 0 2rem 0', color: 'var(--color-text-secondary)' }}
      >
        This grid automatically adjusts the number of columns based on available
        space. Try resizing your browser window to see it in action.
      </Text>

      <Grid columns="auto" gap="lg" responsive>
        {Array.from({ length: 12 }, (_, i) => (
          <Card key={i} padding="lg">
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📦</div>
              <Text as="h4" style={{ margin: '0 0 0.5rem 0' }}>
                Card {i + 1}
              </Text>
              <Text
                as="p"
                style={{
                  color: 'var(--color-text-secondary)',
                  margin: '0 0 1rem 0',
                }}
              >
                Responsive grid item
              </Text>
              <Button size="sm" variant="ghost">
                Action
              </Button>
            </div>
          </Card>
        ))}
      </Grid>
    </div>
  ),
}

export const ComplexLayout: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '1000px' }}>
      <Text as="h3" style={{ margin: '0 0 2rem 0' }}>
        Complex Dashboard Layout
      </Text>

      <Grid columns={12} gap="lg">
        {/* Header spans full width */}
        <div style={{ gridColumn: 'span 12' }}>
          <Card padding="lg" variant="filled">
            <Text as="h4" style={{ margin: 0 }}>
              Dashboard Header
            </Text>
          </Card>
        </div>

        {/* Sidebar */}
        <div style={{ gridColumn: 'span 3' }}>
          <Card padding="lg" style={{ height: '300px' }}>
            <Text as="h5" style={{ margin: '0 0 1rem 0' }}>
              Navigation
            </Text>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>
                Dashboard
              </Button>
              <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>
                Analytics
              </Button>
              <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>
                Settings
              </Button>
            </div>
          </Card>
        </div>

        {/* Main content */}
        <div style={{ gridColumn: 'span 9' }}>
          <Grid columns={2} gap="md">
            <Card padding="lg">
              <Text as="h5" style={{ margin: '0 0 0.5rem 0' }}>
                Metric 1
              </Text>
              <Text
                as="h2"
                style={{
                  margin: '0 0 0.25rem 0',
                  color: 'var(--color-brand-base)',
                }}
              >
                1,234
              </Text>
              <Text
                as="p"
                style={{ color: 'var(--color-text-secondary)', margin: 0 }}
              >
                +12% from last week
              </Text>
            </Card>

            <Card padding="lg">
              <Text as="h5" style={{ margin: '0 0 0.5rem 0' }}>
                Metric 2
              </Text>
              <Text
                as="h2"
                style={{
                  margin: '0 0 0.25rem 0',
                  color: 'var(--color-accent-base)',
                }}
              >
                5,678
              </Text>
              <Text
                as="p"
                style={{ color: 'var(--color-text-secondary)', margin: 0 }}
              >
                -3% from last week
              </Text>
            </Card>
          </Grid>
        </div>
      </Grid>
    </div>
  ),
}
