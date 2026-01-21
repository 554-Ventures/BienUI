import type { Meta, StoryObj } from '@storybook/react'
import { Loading, VStack, Text, Card, Grid, Button, Banner } from '..'

const meta: Meta<typeof Loading> = {
  title: 'Feedback/Loading',
  component: Loading,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The Loading component provides elegant loading indicators with smooth animations to communicate processing states to users. It helps maintain user engagement during wait times and provides visual feedback for ongoing operations.

**Key Features:**
- **Multiple variants**: Spinner, dots, pulse, and skeleton loading patterns
- **Size options**: Small, medium, and large sizes for different contexts
- **Customizable text**: Optional loading messages and descriptions
- **Smooth animations**: Hardware-accelerated CSS animations for performance
- **Accessible**: Proper ARIA attributes for screen readers

**Common Use Cases:**
- API request loading states
- Page and component loading
- Form submission feedback
- Data processing indicators
- Content skeleton loading
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description:
        'Size of the loading indicator. Defaults to "md" if not specified',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    variant: {
      control: 'select',
      options: ['spinner', 'dots', 'pulse', 'ring'],
      description:
        'Visual style variant of the loading indicator. Defaults to "spinner" if not specified',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'spinner' },
      },
    },
    message: {
      control: 'text',
      description:
        'Optional message to display alongside the loading indicator',
      table: {
        type: { summary: 'string' },
      },
    },
    className: {
      control: 'text',
      description:
        'Additional CSS class names to apply to the loading component',
      table: {
        type: { summary: 'string' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'md',
    variant: 'spinner',
    message: 'Loading...',
  },
  render: (args) => (
    <Card
      style={{
        textAlign: 'center',
        padding: '40px',
      }}
    >
      <Loading {...args} />
    </Card>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <Card style={{ padding: '20px' }}>
      <VStack gap="lg">
        <Text size="lg" weight="semibold">
          Loading Variants
        </Text>

        <Grid columns={2} gap="lg">
          <Card>
            <VStack gap="md">
              <Text weight="semibold" style={{ textAlign: 'center' }}>
                Spinner
              </Text>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '20px',
                }}
              >
                <Loading variant="spinner" size="md" />
              </div>
            </VStack>
          </Card>

          <Card>
            <VStack gap="md">
              <Text weight="semibold" style={{ textAlign: 'center' }}>
                Dots
              </Text>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '20px',
                }}
              >
                <Loading variant="dots" size="md" />
              </div>
            </VStack>
          </Card>

          <Card>
            <VStack gap="md">
              <Text weight="semibold" style={{ textAlign: 'center' }}>
                Pulse
              </Text>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '20px',
                }}
              >
                <Loading variant="pulse" size="md" />
              </div>
            </VStack>
          </Card>

          <Card>
            <VStack gap="md">
              <Text weight="semibold" style={{ textAlign: 'center' }}>
                Ring
              </Text>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '20px',
                }}
              >
                <Loading variant="ring" size="md" />
              </div>
            </VStack>
          </Card>
        </Grid>
      </VStack>
    </Card>
  ),
}

export const WithText: Story = {
  render: () => (
    <Card style={{ padding: '20px' }}>
      <VStack gap="lg">
        <Text size="lg" weight="semibold">
          Loading with Text
        </Text>
        <Text size="sm" tone="secondary">
          Loading indicators with descriptive text
        </Text>

        <VStack gap="md">
          <Card>
            <div style={{ padding: '32px', textAlign: 'center' }}>
              <Loading
                variant="spinner"
                size="md"
                message="Loading your dashboard..."
              />
            </div>
          </Card>

          <Card>
            <div style={{ padding: '32px', textAlign: 'center' }}>
              <Loading
                variant="dots"
                size="md"
                message="Processing your request..."
              />
            </div>
          </Card>

          <Card>
            <div style={{ padding: '32px', textAlign: 'center' }}>
              <Loading variant="pulse" size="md" message="Syncing data..." />
            </div>
          </Card>

          <Card>
            <div style={{ padding: '32px', textAlign: 'center' }}>
              <Loading
                variant="ring"
                size="md"
                message="Analyzing results..."
              />
            </div>
          </Card>
        </VStack>
      </VStack>
    </Card>
  ),
}

export const DifferentSizes: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="lg">
        <Text size="lg" weight="semibold">
          Loading Sizes
        </Text>
        <Text size="sm" tone="secondary">
          Small, medium, large, and extra large loading indicators
        </Text>

        <Grid columns={4} gap="lg">
          <Card>
            <VStack gap="md">
              <Text weight="semibold" style={{ textAlign: 'center' }}>
                Small
              </Text>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '20px',
                }}
              >
                <Loading variant="spinner" size="sm" />
              </div>
            </VStack>
          </Card>

          <Card>
            <VStack gap="md">
              <Text weight="semibold" style={{ textAlign: 'center' }}>
                Medium
              </Text>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '20px',
                }}
              >
                <Loading variant="spinner" size="md" />
              </div>
            </VStack>
          </Card>

          <Card>
            <VStack gap="md">
              <Text weight="semibold" style={{ textAlign: 'center' }}>
                Large
              </Text>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '20px',
                }}
              >
                <Loading variant="spinner" size="lg" />
              </div>
            </VStack>
          </Card>

          <Card>
            <VStack gap="md">
              <Text weight="semibold" style={{ textAlign: 'center' }}>
                Extra Large
              </Text>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '20px',
                }}
              >
                <Loading variant="spinner" size="xl" />
              </div>
            </VStack>
          </Card>
        </Grid>
      </VStack>
    </div>
  ),
}

export const InlineLoading: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="lg">
        <Text size="lg" weight="semibold">
          Inline Loading States
        </Text>
        <Text size="sm" tone="secondary">
          Loading indicators within buttons and form elements
        </Text>

        <VStack gap="md">
          <Card>
            <VStack gap="md">
              <Text weight="semibold">Button Loading States</Text>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Button loading size="sm">
                  Small Loading
                </Button>
                <Button loading size="md">
                  Medium Loading
                </Button>
                <Button loading size="lg">
                  Large Loading
                </Button>
              </div>
            </VStack>
          </Card>

          <Card>
            <VStack gap="md">
              <Text weight="semibold">Form Processing</Text>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
              >
                <Loading variant="spinner" size="sm" />
                <Text size="sm">Validating email address...</Text>
              </div>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
              >
                <Loading variant="dots" size="sm" />
                <Text size="sm">Saving changes...</Text>
              </div>
            </VStack>
          </Card>
        </VStack>
      </VStack>
    </div>
  ),
}

export const FullPageLoading: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="lg">
        <Text size="lg" weight="semibold">
          Full Page Loading
        </Text>
        <Text size="sm" tone="secondary">
          Loading states for entire pages or large content areas
        </Text>

        <Card
          style={{
            minHeight: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Loading
            variant="spinner"
            size="lg"
            message="Loading your workspace..."
          />
        </Card>
      </VStack>
    </div>
  ),
}

export const DataProcessing: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="lg">
        <Text size="lg" weight="semibold">
          Data Processing States
        </Text>
        <Text size="sm" tone="secondary">
          Loading indicators for different types of data operations
        </Text>

        <Grid columns={2} gap="lg">
          <Card>
            <VStack gap="md">
              <Text weight="semibold">File Upload</Text>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <Loading
                  variant="pulse"
                  size="md"
                  message="Uploading file..."
                />
              </div>
              <Text size="sm" tone="secondary" style={{ textAlign: 'center' }}>
                Processing: document.pdf (2.3 MB)
              </Text>
            </VStack>
          </Card>

          <Card>
            <VStack gap="md">
              <Text weight="semibold">Data Analysis</Text>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <Loading variant="ring" size="md" message="Analyzing data..." />
              </div>
              <Text size="sm" tone="secondary" style={{ textAlign: 'center' }}>
                Processing 10,247 records
              </Text>
            </VStack>
          </Card>

          <Card>
            <VStack gap="md">
              <Text weight="semibold">Report Generation</Text>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <Loading
                  variant="dots"
                  size="md"
                  message="Generating report..."
                />
              </div>
              <Text size="sm" tone="secondary" style={{ textAlign: 'center' }}>
                Compiling charts and statistics
              </Text>
            </VStack>
          </Card>

          <Card>
            <VStack gap="md">
              <Text weight="semibold">Data Sync</Text>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <Loading
                  variant="spinner"
                  size="md"
                  message="Syncing with cloud..."
                />
              </div>
              <Text size="sm" tone="secondary" style={{ textAlign: 'center' }}>
                Last sync: 2 minutes ago
              </Text>
            </VStack>
          </Card>
        </Grid>
      </VStack>
    </div>
  ),
}

export const ContextualLoading: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="lg">
        <Text size="lg" weight="semibold">
          Contextual Loading Messages
        </Text>
        <Text size="sm" tone="secondary">
          Loading states with context-specific messaging
        </Text>

        <VStack gap="md">
          <Card>
            <VStack gap="md">
              <Text weight="semibold">Authentication</Text>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <Loading
                  variant="spinner"
                  size="md"
                  message="Signing you in..."
                />
              </div>
            </VStack>
          </Card>

          <Card>
            <VStack gap="md">
              <Text weight="semibold">Search Results</Text>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <Loading
                  variant="dots"
                  size="md"
                  message="Searching database..."
                />
              </div>
            </VStack>
          </Card>

          <Card>
            <VStack gap="md">
              <Text weight="semibold">Payment Processing</Text>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <Loading
                  variant="pulse"
                  size="md"
                  message="Processing payment securely..."
                />
              </div>
            </VStack>
          </Card>

          <Card>
            <VStack gap="md">
              <Text weight="semibold">AI Generation</Text>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <Loading variant="ring" size="md" message="AI is thinking..." />
              </div>
            </VStack>
          </Card>

          <Card>
            <VStack gap="md">
              <Text weight="semibold">Backup Creation</Text>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <Loading
                  variant="spinner"
                  size="md"
                  message="Creating backup..."
                />
              </div>
            </VStack>
          </Card>
        </VStack>
      </VStack>
    </div>
  ),
}

export const AllVariationsShowcase: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="xl">
        <VStack gap="sm">
          <Text size="xl" weight="bold">
            Complete Loading System ⏳
          </Text>
          <Text size="sm" tone="secondary">
            Comprehensive examples demonstrating all loading variants and use
            cases for different contexts
          </Text>
        </VStack>

        <Grid columns={1} gap="xl">
          {/* Quick Reference */}
          <VStack gap="md">
            <Text size="lg" weight="semibold">
              Loading Variant Overview
            </Text>
            <Grid columns={4} gap="md">
              <Card style={{ textAlign: 'center', padding: '16px' }}>
                <VStack gap="sm">
                  <Loading variant="spinner" size="sm" />
                  <Text size="sm" weight="medium">
                    Spinner
                  </Text>
                  <Text size="xs" tone="secondary">
                    General loading
                  </Text>
                </VStack>
              </Card>

              <Card style={{ textAlign: 'center', padding: '16px' }}>
                <VStack gap="sm">
                  <Loading variant="dots" size="sm" />
                  <Text size="sm" weight="medium">
                    Dots
                  </Text>
                  <Text size="xs" tone="secondary">
                    Processing steps
                  </Text>
                </VStack>
              </Card>

              <Card style={{ textAlign: 'center', padding: '16px' }}>
                <VStack gap="sm">
                  <Loading variant="pulse" size="sm" />
                  <Text size="sm" weight="medium">
                    Pulse
                  </Text>
                  <Text size="xs" tone="secondary">
                    Data sync
                  </Text>
                </VStack>
              </Card>

              <Card style={{ textAlign: 'center', padding: '16px' }}>
                <VStack gap="sm">
                  <Loading variant="ring" size="sm" />
                  <Text size="sm" weight="medium">
                    Ring
                  </Text>
                  <Text size="xs" tone="secondary">
                    Audio/visual
                  </Text>
                </VStack>
              </Card>
            </Grid>
          </VStack>

          {/* Common Patterns */}
          <VStack gap="md">
            <Text size="lg" weight="semibold">
              Common Usage Patterns
            </Text>
            <Grid columns={2} gap="md">
              <Card>
                <VStack gap="sm">
                  <Text weight="semibold" size="sm">
                    Button Loading
                  </Text>
                  <Button loading size="md">
                    Save Changes
                  </Button>
                </VStack>
              </Card>

              <Card>
                <VStack gap="sm">
                  <Text weight="semibold" size="sm">
                    Page Loading
                  </Text>
                  <Loading
                    variant="spinner"
                    size="md"
                    message="Loading content..."
                  />
                </VStack>
              </Card>
            </Grid>
          </VStack>
        </Grid>

        <Banner variant="info">
          <Text size="sm">
            💡 <strong>Performance Tip:</strong> Loading indicators should
            appear within 100ms of user action and include descriptive text for
            operations longer than 2 seconds.
          </Text>
        </Banner>

        <Text size="lg" weight="semibold">
          Loading State Best Practices
        </Text>
        <VStack gap="xs">
          <Text size="sm">
            • Show loading states immediately for any operation taking longer
            than 200ms
          </Text>
          <Text size="sm">
            • Use descriptive text that explains what&apos;s happening
            (&quot;Saving changes...&quot; not &quot;Loading...&quot;)
          </Text>
          <Text size="sm">
            • Choose variants that match the operation type (spinner for
            general, dots for steps)
          </Text>
          <Text size="sm">
            • Provide progress indicators for operations with known duration
          </Text>
          <Text size="sm">
            • Consider skeleton loading for better perceived performance
          </Text>
        </VStack>
      </VStack>
    </div>
  ),
}
