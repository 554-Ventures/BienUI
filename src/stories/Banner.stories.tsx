import type { Meta, StoryObj } from '@storybook/react'
import {
  Banner,
  VStack,
  Text,
  Button,
  Card,
  Grid,
  Banner as BannerComponent,
} from '..'
import {
  SparklesIcon,
  CheckIcon,
  BellIcon,
  CreditCardIcon,
} from '../components/Icons'

const meta: Meta<typeof Banner> = {
  title: 'Feedback/Banner',
  component: Banner,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The Banner component displays important messages and announcements prominently at the top of content areas. It's designed to communicate system status, user notifications, and actionable information.

**Key Features:**
- **Multiple variants**: Info, success, warning, error, and neutral styles
- **Flexible content**: Support for text, buttons, and custom elements
- **Dismissible options**: Optional close button for temporary messages
- **Responsive design**: Adapts to different screen sizes and containers
- **Accessible**: Proper ARIA attributes and semantic markup

**Common Use Cases:**
- System maintenance notifications
- Feature announcements and updates
- User onboarding messages
- Alert and warning communications
- Success confirmations and feedback
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description:
        'Optional title text displayed prominently at the top of the banner',
      table: {
        type: { summary: 'string' },
      },
    },
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error', 'neutral', 'ai'],
      description:
        'Visual style variant that determines the banner appearance and semantic meaning',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'neutral' },
      },
    },
    children: {
      control: false,
      description: 'Main content to display in the banner body',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    icon: {
      control: false,
      description:
        'Custom icon to display. If not provided, uses variant-appropriate default icon',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    actions: {
      control: false,
      description:
        'Array of action buttons to display in the banner with custom labels and handlers',
      table: {
        type: { summary: 'BannerAction[]' },
      },
    },
    dismissible: {
      control: 'boolean',
      description:
        'Whether to show a close/dismiss button that allows users to hide the banner',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onDismiss: {
      action: 'dismissed',
      description:
        'Callback function triggered when the banner is dismissed by the user',
      table: {
        type: { summary: '() => void' },
      },
    },
    defaultVisible: {
      control: 'boolean',
      description:
        'Initial visibility state when the banner is rendered (uncontrolled mode)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    visible: {
      control: 'boolean',
      description:
        'Controlled visibility state. When provided, overrides internal visibility state',
      table: {
        type: { summary: 'boolean' },
      },
    },
    sticky: {
      control: 'boolean',
      description:
        'Whether the banner should stick to its position when scrolling',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    className: {
      control: 'text',
      description:
        'Additional CSS class names to apply to the banner container',
      table: {
        type: { summary: 'string' },
      },
    },
    style: {
      control: false,
      description: 'Inline CSS styles to apply to the banner container',
      table: {
        type: { summary: 'CSSProperties' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'info',
    title: 'Important Notice',
    dismissible: false,
    sticky: false,
  },
  render: (args) => (
    <div style={{ padding: '20px' }}>
      <Banner {...args}>
        <Text size="sm">
          This is a customizable banner component. Use the controls panel to
          modify its appearance and behavior.
        </Text>
      </Banner>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="lg">
        <Text size="lg" weight="semibold">
          Banner Variants
        </Text>

        <Banner variant="info">
          <Text size="sm">
            <strong>New Feature:</strong> Dark mode is now available! You can
            toggle between light and dark themes in your account settings.
          </Text>
        </Banner>

        <Banner variant="success">
          <Text size="sm">
            <strong>Account Verified:</strong> Your email has been successfully
            verified. You now have access to all premium features.
          </Text>
        </Banner>

        <Banner variant="warning">
          <Text size="sm">
            <strong>Maintenance Notice:</strong> Scheduled maintenance will
            occur on Sunday, Jan 21st from 2-4 AM UTC. Some features may be
            temporarily unavailable.
          </Text>
        </Banner>

        <Banner variant="error">
          <Text size="sm">
            <strong>Payment Failed:</strong> We couldn't process your payment.
            Please update your billing information to continue using premium
            features.
          </Text>
        </Banner>

        <Banner variant="neutral">
          <Text size="sm">
            <strong>Pro Tip:</strong> Use keyboard shortcuts to navigate faster.
            Press '?' to view all available shortcuts.
          </Text>
        </Banner>
      </VStack>
    </div>
  ),
}

export const WithActions: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="lg">
        <Text size="lg" weight="semibold">
          Banners with Action Buttons
        </Text>

        <Banner variant="info">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <VStack gap="xs">
              <Text weight="semibold" size="sm">
                Welcome to Bien UI! 🎉
              </Text>
              <Text size="sm">
                Get started with our component library and build amazing
                interfaces faster than ever.
              </Text>
            </VStack>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button size="sm" variant="secondary">
                Learn More
              </Button>
              <Button size="sm" variant="primary">
                Get Started
              </Button>
            </div>
          </div>
        </Banner>

        <Banner variant="warning">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <VStack gap="xs">
              <Text weight="semibold" size="sm">
                Trial Ending Soon
              </Text>
              <Text size="sm">
                Your free trial expires in 3 days. Upgrade now to continue using
                premium features.
              </Text>
            </VStack>
            <Button size="sm" variant="accent">
              Upgrade Now
            </Button>
          </div>
        </Banner>

        <Banner variant="error">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <VStack gap="xs">
              <Text weight="semibold" size="sm">
                Action Required
              </Text>
              <Text size="sm">
                Your account will be suspended in 24 hours unless you verify
                your email address.
              </Text>
            </VStack>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button size="sm" variant="ghost">
                Remind Later
              </Button>
              <Button size="sm" variant="danger">
                Verify Email
              </Button>
            </div>
          </div>
        </Banner>

        <Banner variant="success">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <VStack gap="xs">
              <Text weight="semibold" size="sm">
                Backup Completed
              </Text>
              <Text size="sm">
                Your data has been successfully backed up to secure cloud
                storage.
              </Text>
            </VStack>
            <Button size="sm" variant="secondary" icon={<CheckIcon />}>
              View Details
            </Button>
          </div>
        </Banner>
      </VStack>
    </div>
  ),
}

export const CustomIcons: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="lg">
        <Text size="lg" weight="semibold">
          Custom Icons
        </Text>
        <Text size="sm" tone="secondary">
          Real-world examples of custom icons in banners
        </Text>

        <Banner variant="info" icon={<SparklesIcon />}>
          <VStack gap="xs">
            <Text weight="semibold" size="sm">
              New Features Available
            </Text>
            <Text size="sm">
              We've released advanced analytics, team collaboration tools, and
              improved performance. Check out what's new in your dashboard.
            </Text>
          </VStack>
        </Banner>

        <Banner variant="warning" icon={<BellIcon />}>
          <VStack gap="xs">
            <Text weight="semibold" size="sm">
              Scheduled Maintenance
            </Text>
            <Text size="sm">
              Our servers will undergo maintenance on January 25th, 2024 from
              12:00 AM to 4:00 AM PST. During this time, some features may be
              temporarily unavailable.
            </Text>
          </VStack>
        </Banner>

        <Banner variant="error" icon={<BellIcon />}>
          <VStack gap="xs">
            <Text weight="semibold" size="sm">
              Security Alert
            </Text>
            <Text size="sm">
              We detected unusual activity on your account. Please review your
              recent login activity and consider updating your password for
              security.
            </Text>
          </VStack>
        </Banner>

        <Banner variant="success" icon={<CheckIcon />}>
          <VStack gap="xs">
            <Text weight="semibold" size="sm">
              Migration Complete
            </Text>
            <Text size="sm">
              All your data has been successfully migrated to our new, faster
              infrastructure. You should experience improved performance across
              all features.
            </Text>
          </VStack>
        </Banner>
      </VStack>
    </div>
  ),
}

export const UserOnboarding: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="lg">
        <Text size="lg" weight="semibold">
          User Onboarding Flow
        </Text>
        <Text size="sm" tone="secondary">
          Step-by-step guidance for new users
        </Text>

        <Banner variant="info">
          <VStack gap="md">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                gap: '16px',
              }}
            >
              <VStack gap="xs">
                <Text weight="semibold" size="sm">
                  Step 1: Complete Your Profile
                </Text>
                <Text size="sm">
                  Add a profile photo and basic information to help your team
                  recognize you.
                </Text>
              </VStack>
              <Button size="sm" variant="primary">
                Complete Profile
              </Button>
            </div>
            <div
              style={{
                background: 'var(--color-border-base)',
                height: '1px',
                margin: '8px 0',
              }}
            />
            <Text size="xs" tone="secondary">
              Progress: 1 of 4 steps completed
            </Text>
          </VStack>
        </Banner>

        <Banner variant="neutral">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <VStack gap="xs">
              <Text weight="semibold" size="sm">
                Step 2: Invite Your Team
              </Text>
              <Text size="sm">
                Collaborate better by inviting team members to your workspace.
              </Text>
            </VStack>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button size="sm" variant="ghost">
                Skip
              </Button>
              <Button size="sm" variant="primary">
                Invite Team
              </Button>
            </div>
          </div>
        </Banner>

        <Banner variant="success" icon={<CheckIcon />}>
          <VStack gap="xs">
            <Text weight="semibold" size="sm">
              Step 3: Connect Integrations ✓
            </Text>
            <Text size="sm">
              Great! You've connected GitHub and Slack to streamline your
              workflow.
            </Text>
          </VStack>
        </Banner>
      </VStack>
    </div>
  ),
}

export const PaymentAndBilling: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="lg">
        <Text size="lg" weight="semibold">
          Payment & Billing Notifications
        </Text>
        <Text size="sm" tone="secondary">
          Financial and subscription-related messages
        </Text>

        <Banner variant="success" icon={<CreditCardIcon />}>
          <VStack gap="xs">
            <Text weight="semibold" size="sm">
              Payment Successful
            </Text>
            <Text size="sm">
              Your Pro subscription has been renewed for another month. Next
              billing date: February 20, 2024 ($29.99)
            </Text>
          </VStack>
        </Banner>

        <Banner variant="warning">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <VStack gap="xs">
              <Text weight="semibold" size="sm">
                Payment Method Expiring
              </Text>
              <Text size="sm">
                Your credit card ending in 4242 expires next month. Please
                update your payment method.
              </Text>
            </VStack>
            <Button size="sm" variant="accent">
              Update Payment
            </Button>
          </div>
        </Banner>

        <Banner variant="error">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <VStack gap="xs">
              <Text weight="semibold" size="sm">
                Payment Failed
              </Text>
              <Text size="sm">
                We couldn't charge your card. Your subscription will be
                suspended in 3 days if not resolved.
              </Text>
            </VStack>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button size="sm" variant="ghost">
                Contact Support
              </Button>
              <Button size="sm" variant="danger">
                Update Payment
              </Button>
            </div>
          </div>
        </Banner>

        <Banner variant="info">
          <VStack gap="md">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                gap: '16px',
              }}
            >
              <VStack gap="xs">
                <Text weight="semibold" size="sm">
                  Upgrade to Pro
                </Text>
                <Text size="sm">
                  Unlock advanced features, unlimited projects, and priority
                  support for just $19/month.
                </Text>
              </VStack>
              <Button size="sm" variant="gradient-primary">
                Upgrade
              </Button>
            </div>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Text size="xs" tone="secondary">
                ✓ Unlimited projects
              </Text>
              <Text size="xs" tone="secondary">
                ✓ Priority support
              </Text>
              <Text size="xs" tone="secondary">
                ✓ Advanced analytics
              </Text>
            </div>
          </VStack>
        </Banner>
      </VStack>
    </div>
  ),
}

export const StackedBanners: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="lg">
        <Text size="lg" weight="semibold">
          Multiple Active Banners
        </Text>
        <Text size="sm" tone="secondary">
          How banners look when stacked together
        </Text>

        <VStack gap="xs">
          <Banner variant="error">
            <Text size="sm">
              🚨 <strong>Critical:</strong> Service disruption affecting login.
              Our team is working on a fix.
            </Text>
          </Banner>

          <Banner variant="warning">
            <Text size="sm">
              ⚠️ <strong>Notice:</strong> Some features may be slower than usual
              due to high traffic.
            </Text>
          </Banner>

          <Banner variant="info">
            <Text size="sm">
              📢 <strong>Update:</strong> New dashboard features are now
              available in beta.
            </Text>
          </Banner>
        </VStack>

        <Card style={{ padding: '16px' }}>
          <Text size="sm" tone="secondary" style={{ textAlign: 'center' }}>
            Main content area - banners typically appear above your main content
          </Text>
        </Card>
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
            Complete Banner System 📢
          </Text>
          <Text size="sm" tone="secondary">
            Comprehensive examples demonstrating all banner variants and
            real-world use cases
          </Text>
        </VStack>

        <Grid columns={1} gap="xl">
          {/* Basic Variants */}
          <VStack gap="md">
            <Text size="lg" weight="semibold">
              Core Banner Types
            </Text>
            <VStack gap="sm">
              <Banner variant="info">
                <Text size="sm">
                  <strong>Info:</strong> General information, updates, and
                  neutral announcements
                </Text>
              </Banner>
              <Banner variant="success">
                <Text size="sm">
                  <strong>Success:</strong> Confirmations, completions, and
                  positive feedback
                </Text>
              </Banner>
              <Banner variant="warning">
                <Text size="sm">
                  <strong>Warning:</strong> Important notices and cautionary
                  messages
                </Text>
              </Banner>
              <Banner variant="error">
                <Text size="sm">
                  <strong>Error:</strong> Critical issues, failures, and urgent
                  actions needed
                </Text>
              </Banner>
              <Banner variant="neutral">
                <Text size="sm">
                  <strong>Neutral:</strong> Tips, suggestions, and non-critical
                  information
                </Text>
              </Banner>
            </VStack>
          </VStack>

          {/* Interactive Banners */}
          <VStack gap="md">
            <Text size="lg" weight="semibold">
              Interactive Banners
            </Text>
            <Banner variant="info">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <Text size="sm">
                  🎉 <strong>New features available!</strong> Discover what's
                  new in this release.
                </Text>
                <Button size="sm" variant="primary">
                  Explore
                </Button>
              </div>
            </Banner>
          </VStack>
        </Grid>

        <BannerComponent variant="success">
          <Text size="sm">
            💡 <strong>Design Tip:</strong> Use banners sparingly to avoid
            overwhelming users. Stack similar-priority messages and dismiss less
            important ones over time.
          </Text>
        </BannerComponent>

        <VStack gap="md">
          <Text size="xl" weight="bold">
            Banner Best Practices
          </Text>
          <VStack gap="xs">
            <Text size="sm">
              • Use appropriate variants to match the message urgency and type
            </Text>
            <Text size="sm">
              • Keep text concise and actionable - users scan banners quickly
            </Text>
            <Text size="sm">
              • Place banners above the main content area they relate to
            </Text>
            <Text size="sm">
              • Provide clear actions when user response is needed
            </Text>
            <Text size="sm">
              • Consider auto-dismissing temporary notifications
            </Text>
          </VStack>
        </VStack>
      </VStack>
    </div>
  ),
}
