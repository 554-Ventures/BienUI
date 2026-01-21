import type { Meta, StoryObj } from '@storybook/react'
import {
  Callout,
  VStack,
  HStack,
  Text,
  Button,
  Card,
  Grid,
  Banner,
  useToast,
} from '..'
import { ToastProvider } from '../components/Providers/ToastProvider'
import { SparklesIcon, SettingsIcon, BellIcon } from '../components/Icons'

const meta: Meta<typeof Callout> = {
  title: 'Feedback/Callout',
  component: Callout,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The Callout component creates expandable popover content that displays additional information, confirmations, or interactive elements. It's perfect for contextual help, confirmations, and progressive disclosure.

**Key Features:**
- **Multiple variants**: Default, glass-frost, and glass-tint styles
- **Flexible triggers**: Any React element can trigger the callout
- **Rich content**: Support for titles, descriptions, actions, and custom content
- **Auto positioning**: Intelligent positioning to stay within viewport
- **Interactive actions**: Built-in action buttons with customizable handlers

**Common Use Cases:**
- Confirmation dialogs and user confirmations
- Contextual help and tooltips with rich content
- Feature announcements and onboarding
- Settings and configuration popovers
- Interactive documentation elements
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    trigger: {
      control: false,
      description: 'Element that triggers the callout when clicked',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    title: {
      control: 'text',
      description: 'Optional title displayed at the top of the callout',
      table: {
        type: { summary: 'string' },
      },
    },
    description: {
      control: 'text',
      description: 'Optional subtitle or description text below the title',
      table: {
        type: { summary: 'string' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'glass-frost', 'glass-tint'],
      description: 'Visual style variant of the callout popover',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    position: {
      control: 'select',
      options: ['auto', 'top', 'bottom', 'left', 'right'],
      description: 'Preferred position of the callout relative to trigger',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'auto' },
      },
    },
    actions: {
      control: false,
      description:
        'Array of action buttons with labels, variants, and click handlers',
      table: {
        type: {
          summary:
            'Array<{label: string, variant?: string, onClick: () => void}>',
        },
      },
    },
    children: {
      control: false,
      description: 'Main content displayed in the callout body',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Quick Tip',
    description: 'Learn something new',
    variant: 'default',
    position: 'auto',
  },
  render: (args) => {
    const StoryContent = () => {
      const { toast } = useToast()
      return (
        <div
          style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}
        >
          <Callout
            {...args}
            trigger={<Button variant="primary">Show Callout</Button>}
            actions={[
              {
                label: 'Got it',
                variant: 'primary',
                onClick: () => toast({ title: 'Acknowledged!' }),
              },
            ]}
          >
            <Text size="sm">
              This is a customizable callout component. Use the controls panel
              to modify its appearance and behavior.
            </Text>
          </Callout>
        </div>
      )
    }
    return (
      <ToastProvider>
        <StoryContent />
      </ToastProvider>
    )
  },
}

export const AllVariants: Story = {
  render: () => {
    const StoryContent = () => {
      const { toast } = useToast()
      return (
        <div style={{ padding: '20px' }}>
          <VStack gap="lg">
            <Text size="lg" weight="semibold">
              Callout Variants
            </Text>

            <Grid columns={3} gap="lg">
              <div>
                <Text
                  size="md"
                  weight="semibold"
                  style={{ marginBottom: '12px' }}
                >
                  Default Callout
                </Text>
                <Card>
                  <VStack gap="md" align="center">
                    <Callout
                      trigger={<Button variant="primary">Show Info</Button>}
                      title="Quick Tip"
                      description="Learn something new"
                    >
                      <Text size="sm">
                        Press Ctrl+K to open the command palette and navigate
                        faster through the application.
                      </Text>
                    </Callout>

                    <Callout
                      trigger={
                        <Button variant="secondary">With Actions</Button>
                      }
                      title="Confirm Action"
                      actions={[
                        {
                          label: 'Confirm',
                          variant: 'primary',
                          onClick: () => toast({ title: 'Confirmed!' }),
                        },
                        {
                          label: 'Cancel',
                          variant: 'secondary',
                          onClick: () => toast({ title: 'Cancelled' }),
                        },
                      ]}
                    >
                      <Text size="sm">
                        Are you sure you want to proceed with this action? This
                        cannot be undone.
                      </Text>
                    </Callout>
                  </VStack>
                </Card>
              </div>

              <div>
                <Text
                  size="md"
                  weight="semibold"
                  style={{ marginBottom: '12px' }}
                >
                  Glass Frost
                </Text>
                <Card>
                  <VStack gap="md" align="center">
                    <Callout
                      variant="glass-frost"
                      trigger={
                        <Button variant="gradient-primary">
                          Frosted Glass
                        </Button>
                      }
                      title="Premium Feature"
                      description="Upgrade to unlock"
                    >
                      <Text size="sm">
                        Get access to advanced analytics, custom reports, and
                        priority support with our Pro plan.
                      </Text>
                    </Callout>

                    <Callout
                      variant="glass-frost"
                      trigger={<Button variant="accent">With Actions</Button>}
                      title="Special Offer"
                      actions={[
                        {
                          label: 'Claim Now',
                          variant: 'primary',
                          onClick: () => toast({ title: 'Claimed!' }),
                        },
                      ]}
                    >
                      <Text size="sm">
                        Limited time: Get 50% off your first month. Don&apos;t
                        miss out on this exclusive deal!
                      </Text>
                    </Callout>
                  </VStack>
                </Card>
              </div>

              <div>
                <Text
                  size="md"
                  weight="semibold"
                  style={{ marginBottom: '12px' }}
                >
                  Glass Tint
                </Text>
                <Card>
                  <VStack gap="md" align="center">
                    <Callout
                      variant="glass-tint"
                      trigger={
                        <Button variant="gradient-purple">Tinted Glass</Button>
                      }
                      title="AI Assistant"
                      description="Powered by GPT-4"
                    >
                      <Text size="sm">
                        Our AI assistant can help you write better, faster, and
                        smarter. Try it now!
                      </Text>
                    </Callout>

                    <Callout
                      variant="glass-tint"
                      trigger={<Button variant="purple">Colorful</Button>}
                      title="New Feature"
                      actions={[
                        {
                          label: 'Learn More',
                          variant: 'primary',
                          onClick: () => toast({ title: 'Opening tutorial' }),
                        },
                        {
                          label: 'Skip',
                          variant: 'secondary',
                          onClick: () => toast({ title: 'Skipped' }),
                        },
                      ]}
                    >
                      <Text size="sm">
                        Introducing our new collaboration features. Work
                        together in real-time!
                      </Text>
                    </Callout>
                  </VStack>
                </Card>
              </div>
            </Grid>
          </VStack>
        </div>
      )
    }
    return (
      <ToastProvider>
        <StoryContent />
      </ToastProvider>
    )
  },
}

export const WithIcons: Story = {
  render: () => {
    const StoryContent = () => {
      const { toast } = useToast()
      return (
        <div style={{ padding: '20px' }}>
          <VStack gap="lg">
            <Text size="lg" weight="semibold">
              Callouts with Icons
            </Text>
            <Text size="sm" tone="secondary">
              Icons help provide visual context and improve recognition
            </Text>

            <HStack gap="lg" justify="center" wrap>
              <Callout
                trigger={
                  <Button variant="primary" icon={<SparklesIcon />}>
                    Features
                  </Button>
                }
                title="New Features"
                description="What's new this week"
              >
                <VStack gap="sm">
                  <Text size="sm">✨ Dark mode support</Text>
                  <Text size="sm">🚀 Performance improvements</Text>
                  <Text size="sm">🎨 Updated design system</Text>
                  <Text size="sm">📱 Mobile optimizations</Text>
                </VStack>
              </Callout>

              <Callout
                variant="glass-frost"
                trigger={
                  <Button variant="gradient-primary" icon={<SettingsIcon />}>
                    Settings
                  </Button>
                }
                title="Configuration"
                description="Customize your experience"
                actions={[
                  {
                    label: 'Open Settings',
                    variant: 'primary',
                    onClick: () => toast({ title: 'Opening settings...' }),
                  },
                ]}
              >
                <Text size="sm">
                  Personalize your workspace with custom themes, shortcuts, and
                  preferences.
                </Text>
              </Callout>

              <Callout
                variant="glass-tint"
                trigger={
                  <Button variant="gradient-purple" icon={<BellIcon />}>
                    Notifications
                  </Button>
                }
                title="Stay Updated"
                description="Configure alerts"
              >
                <VStack gap="sm">
                  <Text size="sm">📧 Email notifications</Text>
                  <Text size="sm">📱 Push notifications</Text>
                  <Text size="sm">🔔 In-app alerts</Text>
                  <Text size="sm">📊 Weekly summaries</Text>
                </VStack>
              </Callout>
            </HStack>
          </VStack>
        </div>
      )
    }
    return (
      <ToastProvider>
        <StoryContent />
      </ToastProvider>
    )
  },
}

export const Positioning: Story = {
  render: () => {
    const StoryContent = () => {
      return (
        <div style={{ padding: '20px' }}>
          <VStack gap="lg">
            <Text size="lg" weight="semibold">
              Auto Positioning
            </Text>
            <Text size="sm" tone="secondary">
              Callouts automatically position themselves to stay within the
              viewport
            </Text>

            <Card>
              <HStack
                gap="md"
                justify="space-between"
                style={{ padding: '24px' }}
              >
                <Callout
                  trigger={<Button size="sm">Top Left</Button>}
                  position="auto"
                  title="Smart Positioning"
                >
                  <Text size="sm">
                    Automatically adjusts based on available space.
                  </Text>
                </Callout>

                <Callout
                  variant="glass-frost"
                  trigger={
                    <Button size="sm" variant="gradient-primary">
                      Center
                    </Button>
                  }
                  position="bottom"
                  title="Frosted Glass"
                >
                  <Text size="sm">Beautiful translucent effect.</Text>
                </Callout>

                <Callout
                  variant="glass-tint"
                  trigger={
                    <Button size="sm" variant="gradient-purple">
                      Top Right
                    </Button>
                  }
                  position="auto"
                  title="Tinted Glass"
                >
                  <Text size="sm">Colorful gradient overlay.</Text>
                </Callout>
              </HStack>
            </Card>

            <Card>
              <VStack gap="md" style={{ padding: '24px' }}>
                <Text size="sm" weight="medium">
                  Position Options
                </Text>
                <HStack gap="sm" justify="center" wrap>
                  <Callout
                    trigger={
                      <Button size="sm" variant="secondary">
                        Auto
                      </Button>
                    }
                    position="auto"
                    title="Auto Position"
                  >
                    <Text size="sm">
                      Chooses the best position automatically
                    </Text>
                  </Callout>

                  <Callout
                    trigger={
                      <Button size="sm" variant="secondary">
                        Top
                      </Button>
                    }
                    position="top"
                    title="Top Position"
                  >
                    <Text size="sm">Always appears above the trigger</Text>
                  </Callout>

                  <Callout
                    trigger={
                      <Button size="sm" variant="secondary">
                        Bottom
                      </Button>
                    }
                    position="bottom"
                    title="Bottom Position"
                  >
                    <Text size="sm">Always appears below the trigger</Text>
                  </Callout>

                  <Callout
                    trigger={
                      <Button size="sm" variant="secondary">
                        Left
                      </Button>
                    }
                    position="left"
                    title="Left Position"
                  >
                    <Text size="sm">Appears to the left of trigger</Text>
                  </Callout>

                  <Callout
                    trigger={
                      <Button size="sm" variant="secondary">
                        Right
                      </Button>
                    }
                    position="right"
                    title="Right Position"
                  >
                    <Text size="sm">Appears to the right of trigger</Text>
                  </Callout>
                </HStack>
              </VStack>
            </Card>
          </VStack>
        </div>
      )
    }
    return (
      <ToastProvider>
        <StoryContent />
      </ToastProvider>
    )
  },
}

export const InteractiveActions: Story = {
  render: () => {
    const StoryContent = () => {
      const { toast } = useToast()
      return (
        <div style={{ padding: '20px' }}>
          <VStack gap="lg">
            <Text size="lg" weight="semibold">
              Interactive Actions
            </Text>
            <Text size="sm" tone="secondary">
              Callouts with action buttons for user interactions
            </Text>

            <Grid columns={2} gap="lg">
              <Card>
                <VStack gap="md" align="center">
                  <Text size="md" weight="semibold">
                    Confirmations
                  </Text>

                  <Callout
                    trigger={<Button variant="danger">Delete Item</Button>}
                    title="Confirm Deletion"
                    description="This action cannot be undone"
                    actions={[
                      {
                        label: 'Delete',
                        variant: 'primary',
                        onClick: () =>
                          toast({ title: 'Item deleted', variant: 'success' }),
                      },
                      {
                        label: 'Cancel',
                        variant: 'secondary',
                        onClick: () => toast({ title: 'Cancelled' }),
                      },
                    ]}
                  >
                    <Text size="sm">
                      Are you sure you want to delete this item? This action
                      cannot be reversed.
                    </Text>
                  </Callout>

                  <Callout
                    variant="glass-frost"
                    trigger={
                      <Button variant="gradient-primary">Save Changes</Button>
                    }
                    title="Save Changes"
                    description="You have unsaved changes"
                    actions={[
                      {
                        label: 'Save',
                        variant: 'primary',
                        onClick: () =>
                          toast({
                            title: 'Changes saved!',
                            variant: 'success',
                          }),
                      },
                      {
                        label: 'Discard',
                        variant: 'secondary',
                        onClick: () => toast({ title: 'Changes discarded' }),
                      },
                    ]}
                  >
                    <Text size="sm">
                      Would you like to save your changes before continuing?
                    </Text>
                  </Callout>
                </VStack>
              </Card>

              <Card>
                <VStack gap="md" align="center">
                  <Text size="md" weight="semibold">
                    Feature Promotions
                  </Text>

                  <Callout
                    variant="glass-tint"
                    trigger={<Button variant="gradient-purple">Upgrade</Button>}
                    title="Unlock Pro Features"
                    description="Get the most out of your experience"
                    actions={[
                      {
                        label: 'Upgrade Now',
                        variant: 'primary',
                        onClick: () =>
                          toast({
                            title: 'Redirecting to upgrade...',
                            variant: 'info',
                          }),
                      },
                      {
                        label: 'Learn More',
                        variant: 'secondary',
                        onClick: () =>
                          toast({ title: 'Opening feature guide...' }),
                      },
                    ]}
                  >
                    <VStack gap="xs">
                      <Text size="sm">✨ Advanced analytics</Text>
                      <Text size="sm">🚀 Priority support</Text>
                      <Text size="sm">🎨 Custom themes</Text>
                      <Text size="sm">📊 Detailed reports</Text>
                    </VStack>
                  </Callout>

                  <Callout
                    trigger={<Button variant="accent">Share Feedback</Button>}
                    title="Help Us Improve"
                    description="Your opinion matters"
                    actions={[
                      {
                        label: 'Share Feedback',
                        variant: 'primary',
                        onClick: () =>
                          toast({
                            title: 'Opening feedback form...',
                            variant: 'info',
                          }),
                      },
                      {
                        label: 'Maybe Later',
                        variant: 'secondary',
                        onClick: () =>
                          toast({ title: 'Reminder set for later' }),
                      },
                    ]}
                  >
                    <Text size="sm">
                      Help us make the product better by sharing your thoughts
                      and suggestions.
                    </Text>
                  </Callout>
                </VStack>
              </Card>
            </Grid>
          </VStack>
        </div>
      )
    }
    return (
      <ToastProvider>
        <StoryContent />
      </ToastProvider>
    )
  },
}

export const AllVariationsShowcase: Story = {
  render: () => {
    const StoryContent = () => {
      const { toast } = useToast()
      return (
        <div style={{ padding: '20px' }}>
          <VStack gap="xl">
            <VStack gap="sm">
              <Text size="xl" weight="bold">
                Complete Callout System 💬
              </Text>
              <Text size="sm" tone="secondary">
                Comprehensive examples demonstrating all callout variants and
                interactive patterns
              </Text>
            </VStack>

            <VStack gap="xl">
              {/* Core Variants */}
              <VStack gap="md">
                <Text size="lg" weight="semibold">
                  Core Callout Types
                </Text>
                <HStack gap="lg" justify="center" wrap>
                  <Callout
                    variant="default"
                    trigger={<Button variant="primary">Default</Button>}
                    title="Default Variant"
                  >
                    <Text size="sm">
                      Clean and simple design for general use
                    </Text>
                  </Callout>

                  <Callout
                    variant="glass-frost"
                    trigger={
                      <Button variant="gradient-primary">Glass Frost</Button>
                    }
                    title="Frosted Glass"
                  >
                    <Text size="sm">Elegant translucent effect with blur</Text>
                  </Callout>

                  <Callout
                    variant="glass-tint"
                    trigger={
                      <Button variant="gradient-purple">Glass Tint</Button>
                    }
                    title="Tinted Glass"
                  >
                    <Text size="sm">
                      Colorful overlay with gradient effects
                    </Text>
                  </Callout>
                </HStack>
              </VStack>

              {/* Interactive Example */}
              <VStack gap="md">
                <Text size="lg" weight="semibold">
                  Rich Interactive Content
                </Text>
                <Card style={{ padding: '24px' }}>
                  <HStack gap="lg" justify="center">
                    <Callout
                      variant="glass-tint"
                      trigger={
                        <Button variant="gradient-primary">
                          Interactive Demo
                        </Button>
                      }
                      title="Feature Showcase"
                      description="Explore all capabilities"
                      actions={[
                        {
                          label: 'Try It Now',
                          variant: 'primary',
                          onClick: () =>
                            toast({
                              title: 'Demo started!',
                              variant: 'success',
                            }),
                        },
                        {
                          label: 'Learn More',
                          variant: 'secondary',
                          onClick: () =>
                            toast({ title: 'Opening documentation...' }),
                        },
                      ]}
                    >
                      <VStack gap="sm">
                        <Text size="sm" weight="medium">
                          This callout demonstrates:
                        </Text>
                        <Text size="sm">• Custom icons and titles</Text>
                        <Text size="sm">• Multiple action buttons</Text>
                        <Text size="sm">• Rich content layouts</Text>
                        <Text size="sm">• Glass tint visual effects</Text>
                      </VStack>
                    </Callout>
                  </HStack>
                </Card>
              </VStack>
            </VStack>

            <Banner variant="info">
              <Text size="sm">
                💡 <strong>Design Tip:</strong> Use callouts to provide
                additional context without cluttering the main content flow.
                They&apos;re perfect for confirmations, help content, and
                feature promotions.
              </Text>
            </Banner>

            <VStack gap="md">
              <Text size="sm" weight="medium">
                Callout Best Practices
              </Text>
              <VStack gap="xs">
                <Text size="sm">
                  • Use descriptive trigger elements that clearly indicate what
                  the callout contains
                </Text>
                <Text size="sm">
                  • Choose variants that match content importance (glass effects
                  for premium features)
                </Text>
                <Text size="sm">
                  • Keep callout content concise and actionable
                </Text>
                <Text size="sm">
                  • Use icons to provide visual context and improve recognition
                </Text>
                <Text size="sm">
                  • Position callouts to avoid overlapping important interface
                  elements
                </Text>
                <Text size="sm">
                  • Include clear action buttons when user response is required
                </Text>
              </VStack>
            </VStack>
          </VStack>
        </div>
      )
    }
    return (
      <ToastProvider>
        <StoryContent />
      </ToastProvider>
    )
  },
}
