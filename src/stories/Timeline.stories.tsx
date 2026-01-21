import type { Meta, StoryObj } from '@storybook/react'
import { Timeline, Badge, Text, Card, VStack, Grid, Banner, Callout } from '..'
import {
  CheckIcon,
  SendIcon,
  DownloadIcon,
  UsersIcon,
  CreditCardIcon,
  MessageIcon,
  FileIcon,
  SparklesIcon,
  SettingsIcon,
  SearchIcon,
  FolderIcon,
  BellIcon,
} from '../components/Icons'

const meta = {
  title: 'Display/Timeline',
  component: Timeline,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A comprehensive Timeline component for displaying chronological events with modern visual indicators, status colors, and rich content support.

## Features
- **Multiple variants** - Default, detailed, and compact styles
- **Orientation support** - Vertical and horizontal layouts
- **Status indicators** - Color-coded status with gradient effects
- **Rich content** - Support for badges, icons, and custom content
- **Responsive design** - Adapts to mobile devices automatically
- **Interactive elements** - Hover animations and visual feedback

## Usage
\`\`\`tsx
<Timeline
  variant="default"
  items={[
    {
      id: '1',
      title: 'Order Placed',
      description: 'Your order has been confirmed',
      time: '2 hours ago',
      status: 'success',
      icon: <CheckIcon />
    }
  ]}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'detailed', 'compact'],
      description: 'Visual style variant',
    },
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Timeline orientation',
    },
    showConnectors: {
      control: 'boolean',
      description: 'Show connecting lines between items',
    },
  },
  args: {
    variant: 'default',
    orientation: 'vertical',
    showConnectors: true,
  },
} satisfies Meta<typeof Timeline>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <Timeline
        variant="default"
        items={[
          {
            id: '1',
            title: 'Order Placed',
            description:
              'Your order has been successfully placed and confirmed.',
            time: '2 hours ago',
            status: 'success',
            icon: <CheckIcon />,
          },
          {
            id: '2',
            title: 'Payment Processed',
            description: 'Payment has been received and verified.',
            time: '1 hour ago',
            status: 'success',
            icon: <CheckIcon />,
          },
          {
            id: '3',
            title: 'Order Shipped',
            description:
              'Your package is on its way. Tracking number: TRK123456789',
            time: '30 minutes ago',
            status: 'primary',
            icon: <SendIcon />,
          },
          {
            id: '4',
            title: 'Out for Delivery',
            description: 'Expected delivery by end of day.',
            time: 'In progress',
            status: 'info',
            icon: <DownloadIcon />,
          },
        ]}
      />
    </div>
  ),
}

export const DetailedStyle: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="md">
        <Text size="lg" weight="semibold">
          Rich Content Timeline
        </Text>
        <Text size="sm" tone="secondary">
          Detailed style with badges and additional content
        </Text>
        <Card>
          <Timeline
            variant="detailed"
            items={[
              {
                id: '1',
                title: 'New User Registration',
                description: 'Sarah Johnson signed up for a premium account.',
                time: 'March 15, 2024 - 3:45 PM',
                status: 'primary',
                icon: <UsersIcon />,
                content: (
                  <div style={{ marginTop: '12px' }}>
                    <Badge variant="primary" size="sm">
                      Premium Plan
                    </Badge>{' '}
                    <Badge variant="info" size="sm">
                      Referred by John
                    </Badge>
                  </div>
                ),
              },
              {
                id: '2',
                title: 'Payment Received',
                description:
                  'Annual subscription payment of $99.00 processed successfully.',
                time: 'March 15, 2024 - 3:46 PM',
                status: 'success',
                icon: <CreditCardIcon />,
                content: (
                  <VStack gap="xs" style={{ marginTop: '12px' }}>
                    <Text size="sm">Transaction ID: TXN-2024-0315-7890</Text>
                    <Text size="sm" tone="secondary">
                      Visa ending in 4242
                    </Text>
                  </VStack>
                ),
              },
              {
                id: '3',
                title: 'Welcome Email Sent',
                description: 'Onboarding email delivered to user inbox.',
                time: 'March 15, 2024 - 3:47 PM',
                status: 'info',
                icon: <MessageIcon />,
              },
            ]}
          />
        </Card>
      </VStack>
    </div>
  ),
}

export const HorizontalOrientation: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="md">
        <Text size="lg" weight="semibold">
          Project Phases
        </Text>
        <Text size="sm" tone="secondary">
          Horizontal timeline for process visualization
        </Text>
        <Card>
          <Timeline
            variant="default"
            orientation="horizontal"
            items={[
              {
                id: '1',
                title: 'Planning',
                description: 'Project kickoff and requirements gathering',
                status: 'success',
                icon: <FileIcon />,
              },
              {
                id: '2',
                title: 'Design',
                description: 'UI/UX design and prototyping',
                status: 'success',
                icon: <SparklesIcon />,
              },
              {
                id: '3',
                title: 'Development',
                description: 'Building the application',
                status: 'primary',
                icon: <SettingsIcon />,
              },
              {
                id: '4',
                title: 'Testing',
                description: 'QA and bug fixes',
                status: 'info',
                icon: <SearchIcon />,
              },
              {
                id: '5',
                title: 'Launch',
                description: 'Deploy to production',
                status: 'neutral',
                icon: <SendIcon />,
              },
            ]}
          />
        </Card>
      </VStack>
    </div>
  ),
}

export const ActivityFeed: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="md">
        <Text size="lg" weight="semibold">
          Team Activity Feed
        </Text>
        <Text size="sm" tone="secondary">
          Recent project activities and updates
        </Text>
        <Card>
          <Timeline
            variant="default"
            items={[
              {
                id: '1',
                title: 'You created a new project',
                description:
                  'Website Redesign Project initiated with 5 team members',
                time: '5 minutes ago',
                status: 'primary',
                icon: <FolderIcon />,
              },
              {
                id: '2',
                title: 'John commented on your task',
                description:
                  '"Great work on the homepage design! Let\'s discuss the color scheme."',
                time: '1 hour ago',
                status: 'info',
                icon: <MessageIcon />,
                content: (
                  <div style={{ marginTop: '8px' }}>
                    <Badge variant="neutral" size="sm">
                      Task #42
                    </Badge>
                  </div>
                ),
              },
              {
                id: '3',
                title: 'Task completed',
                description: 'Homepage mockup approved by design team',
                time: '3 hours ago',
                status: 'success',
                icon: <CheckIcon />,
              },
              {
                id: '4',
                title: 'File uploaded',
                description:
                  'design-system-v2.fig uploaded to project resources',
                time: '5 hours ago',
                status: 'neutral',
                icon: <DownloadIcon />,
              },
              {
                id: '5',
                title: 'Meeting scheduled',
                description:
                  'Design review meeting set for tomorrow at 2:00 PM',
                time: 'Yesterday',
                status: 'warning',
                icon: <BellIcon />,
              },
            ]}
          />
        </Card>
      </VStack>
    </div>
  ),
}

export const OrderTracking: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="md">
        <Text size="lg" weight="semibold">
          Order Tracking
        </Text>
        <Text size="sm" tone="secondary">
          Follow your order progress in real-time
        </Text>
        <Card>
          <Timeline
            variant="default"
            items={[
              {
                id: '1',
                title: 'Order Placed',
                description: 'Your order #12345 has been successfully placed.',
                time: 'Dec 15, 2023 - 2:30 PM',
                status: 'success',
                icon: <CheckIcon />,
              },
              {
                id: '2',
                title: 'Payment Confirmed',
                description: 'Payment has been processed and confirmed.',
                time: 'Dec 15, 2023 - 2:45 PM',
                status: 'success',
                icon: <CreditCardIcon />,
              },
              {
                id: '3',
                title: 'Processing',
                description: 'Your order is being prepared for shipment.',
                time: 'Dec 16, 2023 - 9:00 AM',
                status: 'primary',
                icon: <SettingsIcon />,
              },
              {
                id: '4',
                title: 'Shipped',
                description: 'Order has been shipped and is on the way.',
                time: 'Expected: Dec 17, 2023',
                status: 'info',
                icon: <SendIcon />,
              },
              {
                id: '5',
                title: 'Delivered',
                description: 'Order will be delivered to your address.',
                time: 'Expected: Dec 18, 2023',
                status: 'neutral',
                icon: <DownloadIcon />,
              },
            ]}
          />
        </Card>
      </VStack>
    </div>
  ),
}

export const DevelopmentProgress: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="md">
        <Text size="lg" weight="semibold">
          Development Timeline
        </Text>
        <Text size="sm" tone="secondary">
          Feature development progress with status indicators
        </Text>
        <Card>
          <Timeline
            variant="detailed"
            items={[
              {
                id: '1',
                title: 'Feature Planning Complete',
                description:
                  'User authentication system requirements finalized',
                time: '1 week ago',
                status: 'success',
                icon: <CheckIcon />,
                content: (
                  <div style={{ marginTop: '8px' }}>
                    <Badge variant="success" size="sm">
                      Completed
                    </Badge>
                    <Badge
                      variant="neutral"
                      size="sm"
                      style={{ marginLeft: '8px' }}
                    >
                      Planning
                    </Badge>
                  </div>
                ),
              },
              {
                id: '2',
                title: 'Backend API Development',
                description: 'Authentication endpoints and JWT implementation',
                time: '3 days ago',
                status: 'success',
                icon: <CheckIcon />,
                content: (
                  <div style={{ marginTop: '8px' }}>
                    <Badge variant="success" size="sm">
                      Completed
                    </Badge>
                    <Badge
                      variant="neutral"
                      size="sm"
                      style={{ marginLeft: '8px' }}
                    >
                      Backend
                    </Badge>
                  </div>
                ),
              },
              {
                id: '3',
                title: 'Frontend Integration',
                description:
                  'Building login/register components and state management',
                time: 'In Progress',
                status: 'primary',
                icon: <SettingsIcon />,
                content: (
                  <div style={{ marginTop: '8px' }}>
                    <Badge variant="primary" size="sm">
                      In Progress
                    </Badge>
                    <Badge
                      variant="neutral"
                      size="sm"
                      style={{ marginLeft: '8px' }}
                    >
                      Frontend
                    </Badge>
                  </div>
                ),
              },
              {
                id: '4',
                title: 'Testing & QA',
                description:
                  'Unit tests, integration tests, and user acceptance testing',
                time: 'Pending',
                status: 'warning',
                icon: <SearchIcon />,
                content: (
                  <div style={{ marginTop: '8px' }}>
                    <Badge variant="warning" size="sm">
                      Pending
                    </Badge>
                    <Badge
                      variant="neutral"
                      size="sm"
                      style={{ marginLeft: '8px' }}
                    >
                      QA
                    </Badge>
                  </div>
                ),
              },
            ]}
          />
        </Card>
      </VStack>
    </div>
  ),
}

export const StatusVariations: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="xl">
        <VStack gap="sm">
          <Text size="lg" weight="semibold">
            Status Color Variations
          </Text>
          <Text size="sm" tone="secondary">
            Different status indicators with semantic colors
          </Text>
        </VStack>

        <Grid columns={2} gap="md">
          <Card title="Success & Error States">
            <Timeline
              variant="default"
              items={[
                {
                  id: '1',
                  title: 'Build Successful',
                  description: 'All tests passed successfully',
                  time: '2 min ago',
                  status: 'success',
                  icon: <CheckIcon />,
                },
                {
                  id: '2',
                  title: 'Build Failed',
                  description: 'Compilation error in main.ts',
                  time: '5 min ago',
                  status: 'error',
                  icon: <SparklesIcon />,
                },
                {
                  id: '3',
                  title: 'Deploy Warning',
                  description: 'Deployment completed with warnings',
                  time: '10 min ago',
                  status: 'warning',
                  icon: <BellIcon />,
                },
              ]}
            />
          </Card>

          <Card title="Info & Primary States">
            <Timeline
              variant="default"
              items={[
                {
                  id: '1',
                  title: 'New Feature',
                  description: 'Dashboard analytics released',
                  time: '1 hour ago',
                  status: 'primary',
                  icon: <SparklesIcon />,
                },
                {
                  id: '2',
                  title: 'System Update',
                  description: 'Maintenance completed',
                  time: '2 hours ago',
                  status: 'info',
                  icon: <SettingsIcon />,
                },
                {
                  id: '3',
                  title: 'Archive',
                  description: 'Old logs archived',
                  time: '1 day ago',
                  status: 'neutral',
                  icon: <FileIcon />,
                },
              ]}
            />
          </Card>
        </Grid>
      </VStack>
    </div>
  ),
}

export const AllVariationsShowcase: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="xxl">
        <VStack gap="sm">
          <Text size="xl" weight="bold">
            Complete Timeline System 📅
          </Text>
          <Text size="sm" tone="secondary">
            Comprehensive examples demonstrating all timeline features and
            capabilities
          </Text>
        </VStack>

        <Grid columns={1} gap="xl">
          {/* Default Timeline */}
          <VStack gap="md">
            <Text size="lg" weight="semibold">
              Default Timeline
            </Text>
            <Card>
              <Timeline
                variant="default"
                items={[
                  {
                    id: '1',
                    title: 'Project Started',
                    description: 'Initial setup and team onboarding',
                    time: '1 week ago',
                    status: 'success',
                    icon: <CheckIcon />,
                  },
                  {
                    id: '2',
                    title: 'Development Phase',
                    description: 'Core features implementation',
                    time: 'In Progress',
                    status: 'primary',
                    icon: <SettingsIcon />,
                  },
                ]}
              />
            </Card>
          </VStack>

          {/* Horizontal Timeline */}
          <VStack gap="md">
            <Text size="lg" weight="semibold">
              Horizontal Process Flow
            </Text>
            <Card>
              <Timeline
                orientation="horizontal"
                items={[
                  {
                    id: '1',
                    title: 'Plan',
                    status: 'success',
                    icon: <FileIcon />,
                  },
                  {
                    id: '2',
                    title: 'Build',
                    status: 'primary',
                    icon: <SettingsIcon />,
                  },
                  {
                    id: '3',
                    title: 'Test',
                    status: 'info',
                    icon: <SearchIcon />,
                  },
                  {
                    id: '4',
                    title: 'Deploy',
                    status: 'neutral',
                    icon: <SendIcon />,
                  },
                ]}
              />
            </Card>
          </VStack>
        </Grid>

        <Banner variant="info">
          <Text size="sm">
            💡 <strong>Responsive Design:</strong> Horizontal timelines
            automatically convert to vertical orientation on mobile devices for
            better readability.
          </Text>
        </Banner>

        <Callout
          trigger={
            <Text size="sm" weight="medium">
              Timeline Features
            </Text>
          }
        >
          <VStack gap="xs">
            <Text size="sm">
              • Use status colors (success, error, warning, info) for activity
              states
            </Text>
            <Text size="sm">
              • Primary variant includes blue → teal gradient for featured
              events
            </Text>
            <Text size="sm">
              • Detailed variant supports rich content with badges and custom
              elements
            </Text>
            <Text size="sm">
              • Hover over markers for subtle animations and visual feedback
            </Text>
          </VStack>
        </Callout>
      </VStack>
    </div>
  ),
}
