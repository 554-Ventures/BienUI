import type { Meta, StoryObj } from '@storybook/react'
import { Accordion, VStack, Card, Text, Badge, Banner } from '..'
import { AccordionRoot } from '../components/Feedback/Accordion'
import type { AccordionProps } from '../components/Feedback/Accordion'
import { UserIcon } from '../components/Icons'

const meta: Meta<AccordionProps> = {
  title: 'Feedback/Accordion',
  component: AccordionRoot, // Use the root component directly for docs
  parameters: {
    layout: 'padded',
    docs: {
      page: null, // Use auto-generated docs page
      description: {
        component: `
The Accordion component creates collapsible content sections that allow users to expand and collapse information panels. Perfect for FAQs, settings panels, and organizing content in a compact space.

**Key Features:**
- **Multiple expand modes**: Single or multiple panels can be open simultaneously
- **Smooth animations**: Fluid expand/collapse transitions with height animation
- **Accessible**: Full keyboard navigation and screen reader support
- **Flexible content**: Support for any content type within panels
- **Custom triggers**: Configurable trigger elements and styling

**Common Use Cases:**
- FAQ sections and help documentation
- Settings and configuration panels  
- Content organization in limited space
- Progressive disclosure of information
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
      description: 'The accordion items to render',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'filled', 'ai'],
      description: 'Visual style variant of the accordion',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    allowMultiple: {
      control: 'boolean',
      description: 'Allow multiple items to be expanded simultaneously',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    defaultValue: {
      control: 'text',
      description: 'Default expanded item(s)',
      table: {
        type: { summary: 'string | string[]' },
      },
    },
    value: {
      control: 'text',
      description: 'Controlled expanded item(s)',
      table: {
        type: { summary: 'string | string[]' },
      },
    },
    onValueChange: {
      action: 'value-changed',
      description: 'Callback when expanded items change',
      table: {
        type: { summary: '(value: string | string[]) => void' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    allowMultiple: false,
    defaultValue: undefined,
  },
  render: (args) => (
    <div style={{ padding: '20px' }}>
      <Accordion {...args}>
        <Accordion.Item value="item-1" title="What is Bien UI?">
          <Text size="sm">
            Bien UI is a comprehensive React component library designed for
            modern web applications. It provides a complete set of accessible,
            customizable components with built-in theming and responsive design
            patterns.
          </Text>
        </Accordion.Item>

        <Accordion.Item value="item-2" title="How do I get started?">
          <VStack gap="sm">
            <Text size="sm">Getting started with Bien UI is simple:</Text>
            <Text size="sm">1. Install the package: npm install @bien/ui</Text>
            <Text size="sm">
              2. Import components: import {'{ Button, Card }'} from
              &apos;@bien/ui&apos;
            </Text>
            <Text size="sm">3. Start building amazing interfaces!</Text>
          </VStack>
        </Accordion.Item>

        <Accordion.Item value="item-3" title="Is it accessible?">
          <Text size="sm">
            Yes! All components are built with accessibility in mind, following
            WCAG 2.1 guidelines and including proper ARIA attributes, keyboard
            navigation, and screen reader support.
          </Text>
        </Accordion.Item>
      </Accordion>
    </div>
  ),
}

export const MultipleExpand: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="md">
        <Text size="lg" weight="semibold">
          Multiple Items Open
        </Text>
        <Text size="sm" tone="secondary">
          Multiple accordion items can be expanded simultaneously
        </Text>
        <Card>
          <Accordion allowMultiple>
            <Accordion.Item value="general" title="General Settings">
              <VStack gap="md">
                <Text size="sm">
                  Configure basic application settings and preferences.
                </Text>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <Badge variant="neutral" size="sm">
                    Theme
                  </Badge>
                  <Badge variant="neutral" size="sm">
                    Language
                  </Badge>
                  <Badge variant="neutral" size="sm">
                    Timezone
                  </Badge>
                </div>
              </VStack>
            </Accordion.Item>

            <Accordion.Item value="account" title="Account & Privacy">
              <VStack gap="md">
                <Text size="sm">
                  Manage your account settings and privacy preferences.
                </Text>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <Badge variant="info" size="sm">
                    Two-Factor Auth
                  </Badge>
                  <Badge variant="success" size="sm">
                    Data Encryption
                  </Badge>
                  <Badge variant="warning" size="sm">
                    Privacy Settings
                  </Badge>
                </div>
              </VStack>
            </Accordion.Item>

            <Accordion.Item value="notifications" title="Notifications">
              <Text size="sm">
                Control how and when you receive notifications from the
                application.
              </Text>
            </Accordion.Item>
          </Accordion>
        </Card>
      </VStack>
    </div>
  ),
}

export const NestedContent: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="md">
        <Text size="lg" weight="semibold">
          Rich Content
        </Text>
        <Text size="sm" tone="secondary">
          Accordion items with complex nested content and components
        </Text>
        <Card>
          <Accordion>
            <Accordion.Item value="profile" title="User Profile Settings">
              <VStack gap="md">
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
                >
                  <UserIcon
                    size={32}
                    style={{ color: 'var(--color-text-secondary)' }}
                  />
                  <VStack gap="xs">
                    <Text weight="semibold">John Doe</Text>
                    <Text size="sm" tone="secondary">
                      john.doe@example.com
                    </Text>
                  </VStack>
                </div>

                <Banner variant="info">
                  <Text size="sm">
                    Your profile is <strong>verified</strong>. You have access
                    to all premium features.
                  </Text>
                </Banner>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <Badge variant="success" size="sm">
                    Email Verified
                  </Badge>
                  <Badge variant="info" size="sm">
                    2FA Enabled
                  </Badge>
                  <Badge variant="warning" size="sm">
                    Profile 85% Complete
                  </Badge>
                </div>
              </VStack>
            </Accordion.Item>

            <Accordion.Item value="integrations" title="Connected Integrations">
              <VStack gap="md">
                <Text size="sm">
                  Manage your connected third-party services and integrations.
                </Text>

                <div style={{ display: 'grid', gap: '12px' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Text size="sm" weight="medium">
                      GitHub Integration
                    </Text>
                    <Badge variant="success" size="sm">
                      Connected
                    </Badge>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Text size="sm" weight="medium">
                      Slack Notifications
                    </Text>
                    <Badge variant="success" size="sm">
                      Active
                    </Badge>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Text size="sm" weight="medium">
                      Google Calendar
                    </Text>
                    <Badge variant="neutral" size="sm">
                      Disconnected
                    </Badge>
                  </div>
                </div>

                <Text size="sm">
                  Connect more services to streamline your workflow and increase
                  productivity.
                </Text>
              </VStack>
            </Accordion.Item>

            <Accordion.Item value="analytics" title="Usage Analytics">
              <VStack gap="md">
                <Text size="sm">
                  View insights about your application usage and performance.
                </Text>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                    gap: '16px',
                  }}
                >
                  <VStack gap="xs" style={{ textAlign: 'center' }}>
                    <Text size="lg" weight="bold" tone="brand">
                      1,247
                    </Text>
                    <Text size="sm" tone="secondary">
                      API Calls
                    </Text>
                  </VStack>

                  <VStack gap="xs" style={{ textAlign: 'center' }}>
                    <Text size="lg" weight="bold" tone="success">
                      99.8%
                    </Text>
                    <Text size="sm" tone="secondary">
                      Uptime
                    </Text>
                  </VStack>

                  <VStack gap="xs" style={{ textAlign: 'center' }}>
                    <Text size="lg" weight="bold" tone="warning">
                      2.3s
                    </Text>
                    <Text size="sm" tone="secondary">
                      Avg Response
                    </Text>
                  </VStack>
                </div>
              </VStack>
            </Accordion.Item>
          </Accordion>
        </Card>
      </VStack>
    </div>
  ),
}

export const DefaultExpanded: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="md">
        <Text size="lg" weight="semibold">
          Default Expanded
        </Text>
        <Text size="sm" tone="secondary">
          Accordion with specific items expanded by default
        </Text>
        <Card>
          <Accordion defaultValue="getting-started">
            <Accordion.Item value="installation" title="Installation">
              <Text size="sm">
                Install Bien UI using your preferred package manager.
              </Text>
            </Accordion.Item>

            <Accordion.Item value="getting-started" title="Getting Started">
              <VStack gap="sm">
                <Text size="sm">Start building with Bien UI components:</Text>
                <Text size="sm">1. Import the provider component</Text>
                <Text size="sm">2. Wrap your app with BienProvider</Text>
                <Text size="sm">3. Import and use components</Text>
              </VStack>
            </Accordion.Item>

            <Accordion.Item value="customization" title="Customization">
              <Text size="sm">
                Learn how to customize themes, colors, and component styles.
              </Text>
            </Accordion.Item>
          </Accordion>
        </Card>
      </VStack>
    </div>
  ),
}

export const CompactLayout: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="md">
        <Text size="lg" weight="semibold">
          Compact Layout
        </Text>
        <Text size="sm" tone="secondary">
          Space-efficient accordion for tight layouts
        </Text>
        <div style={{ maxWidth: '400px' }}>
          <Card>
            <Accordion>
              <Accordion.Item value="quick-1" title="Quick Action 1">
                <Text size="sm">
                  Perform common task quickly with minimal setup.
                </Text>
              </Accordion.Item>

              <Accordion.Item value="quick-2" title="Quick Action 2">
                <Text size="sm">
                  Another frequently used feature with simple configuration.
                </Text>
              </Accordion.Item>

              <Accordion.Item value="quick-3" title="Quick Action 3">
                <Text size="sm">
                  Third option for users who need this specific functionality.
                </Text>
              </Accordion.Item>

              <Accordion.Item value="quick-4" title="Advanced Options">
                <Text size="sm">
                  More complex configurations for power users.
                </Text>
              </Accordion.Item>
            </Accordion>
          </Card>
        </div>
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
            Complete Accordion System 🗂️
          </Text>
          <Text size="sm" tone="secondary">
            Comprehensive examples demonstrating all accordion features and use
            cases
          </Text>
        </VStack>

        <VStack gap="xl">
          {/* Basic FAQ */}
          <VStack gap="md">
            <Text size="lg" weight="semibold">
              FAQ Section
            </Text>
            <Card>
              <Accordion>
                <Accordion.Item
                  value="faq-1"
                  title="What payment methods do you accept?"
                >
                  <Text size="sm">
                    We accept all major credit cards, PayPal, Apple Pay, and
                    bank transfers. All payments are processed securely through
                    our encrypted payment gateway.
                  </Text>
                </Accordion.Item>

                <Accordion.Item
                  value="faq-2"
                  title="How do I cancel my subscription?"
                >
                  <VStack gap="sm">
                    <Text size="sm">
                      You can cancel your subscription at any time:
                    </Text>
                    <Text size="sm">• Go to Account Settings → Billing</Text>
                    <Text size="sm">
                      • Click &apos;Cancel Subscription&apos;
                    </Text>
                    <Text size="sm">• Confirm cancellation</Text>
                    <Text size="sm">
                      Your access continues until the end of your billing
                      period.
                    </Text>
                  </VStack>
                </Accordion.Item>

                <Accordion.Item value="faq-3" title="Do you offer refunds?">
                  <Text size="sm">
                    Yes, we offer a 30-day money-back guarantee for all new
                    subscriptions. Contact our support team within 30 days of
                    your purchase for a full refund.
                  </Text>
                </Accordion.Item>
              </Accordion>
            </Card>
          </VStack>

          {/* Settings Panel */}
          <VStack gap="md">
            <Text size="lg" weight="semibold">
              Settings Panel (Multiple Expand)
            </Text>
            <Card>
              <Accordion allowMultiple defaultValue="notifications">
                <Accordion.Item value="account" title="Account Information">
                  <Text size="sm">
                    Manage your account details and personal information.
                  </Text>
                </Accordion.Item>

                <Accordion.Item
                  value="notifications"
                  title="Notification Preferences"
                >
                  <VStack gap="sm">
                    <Text size="sm">Choose how you want to be notified:</Text>
                    <div
                      style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}
                    >
                      <Badge variant="success" size="sm">
                        Email
                      </Badge>
                      <Badge variant="info" size="sm">
                        Push
                      </Badge>
                      <Badge variant="neutral" size="sm">
                        SMS
                      </Badge>
                    </div>
                  </VStack>
                </Accordion.Item>

                <Accordion.Item value="privacy" title="Privacy & Security">
                  <Text size="sm">
                    Control your privacy settings and security preferences.
                  </Text>
                </Accordion.Item>
              </Accordion>
            </Card>
          </VStack>
        </VStack>

        <Banner variant="info">
          <Text size="sm">
            💡 <strong>Responsive Design:</strong> Accordions automatically
            adapt to different screen sizes and provide excellent touch
            interaction on mobile devices.
          </Text>
        </Banner>

        <Text size="lg" weight="semibold">
          Accordion Best Practices
        </Text>
        <VStack gap="xs">
          <Text size="sm">
            • Use descriptive trigger text that clearly indicates content
          </Text>
          <Text size="sm">
            • Keep content concise and scannable within accordion items
          </Text>
          <Text size="sm">
            • Consider using allowMultiple for settings and configuration panels
          </Text>
          <Text size="sm">
            • Avoid nesting accordions more than two levels deep
          </Text>
        </VStack>
      </VStack>
    </div>
  ),
}
