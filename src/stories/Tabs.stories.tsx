/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
  Tabs,
  VStack,
  Text,
  Card,
  Grid,
  Button,
  Banner,
  Badge,
  Avatar,
} from '..'
import {
  HomeIcon,
  UserIcon,
  SettingsIcon,
  ChartIcon,
  BellIcon,
} from '../components/Icons'

const meta: Meta<typeof Tabs> = {
  title: 'Feedback/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The Tabs component organizes content into separate panels that can be navigated between using tab headers. It helps users explore related information without losing context, providing an efficient way to present multiple views within the same interface area.

**Key Features:**
- **Flexible content**: Support for any content type within tab panels
- **Visual indicators**: Active states, badges, and icons for enhanced navigation
- **Keyboard navigation**: Arrow keys and Tab key support for accessibility
- **Custom styling**: Various visual styles and orientations
- **Dynamic tabs**: Add, remove, or modify tabs programmatically
- **Overflow handling**: Scrollable tab headers for many tabs

**Common Use Cases:**
- Content organization and categorization
- Settings and configuration panels
- Dashboard sections and views
- Form sections and multi-step inputs
- Data visualization and analysis views
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      control: 'object',
      description:
        'Array of tab objects with id, label, icon, content, disabled, and badge properties',
      table: {
        type: { summary: 'Tab[]' },
      },
    },
    defaultTab: {
      control: 'text',
      description: 'ID of the initially active tab',
      table: {
        type: { summary: 'string' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'underline', 'pills', 'filled'],
      description: 'Visual style of the tabs',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the tabs',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether tabs should take full width',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    vertical: {
      control: 'boolean',
      description: 'Whether to use vertical layout',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onChange: {
      action: 'tab-changed',
      description: 'Callback when active tab changes',
      table: {
        type: { summary: '(tabId: string) => void' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names',
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
    tabs: [
      {
        id: 'tab1',
        label: 'Tab 1',
        content: (
          <div style={{ padding: '20px' }}>
            <Text>
              Content for Tab 1. You can customize the tabs using the controls
              panel.
            </Text>
          </div>
        ),
      },
      {
        id: 'tab2',
        label: 'Tab 2',
        content: (
          <div style={{ padding: '20px' }}>
            <Text>
              Content for Tab 2. Try changing the variant, size, and other
              properties.
            </Text>
          </div>
        ),
      },
      {
        id: 'tab3',
        label: 'Tab 3',
        content: (
          <div style={{ padding: '20px' }}>
            <Text>
              Content for Tab 3. This tab demonstrates the interactive controls.
            </Text>
          </div>
        ),
      },
    ],
    defaultTab: 'tab1',
    variant: 'default',
    size: 'md',
    fullWidth: false,
    vertical: false,
  },
  render: (args) => (
    <div style={{ padding: '20px' }}>
      <Tabs {...args} />
    </div>
  ),
}

export const BasicTabs: Story = {
  render: () => {
    const basicTabs = [
      {
        id: 'overview',
        label: 'Overview',
        content: (
          <VStack gap="md">
            <Text size="lg" weight="semibold">
              Project Overview
            </Text>
            <Text>
              Welcome to your project dashboard. Here you can see a high-level
              overview of your project&apos;s status, recent activity, and key
              metrics.
            </Text>
            <Card>
              <VStack gap="sm">
                <Text weight="medium">Quick Stats</Text>
                <Grid columns={3} gap="sm">
                  <Text size="sm">Tasks: 24</Text>
                  <Text size="sm">Completed: 18</Text>
                  <Text size="sm">Progress: 75%</Text>
                </Grid>
              </VStack>
            </Card>
          </VStack>
        ),
      },
      {
        id: 'tasks',
        label: 'Tasks',
        content: (
          <VStack gap="md">
            <Text size="lg" weight="semibold">
              Project Tasks
            </Text>
            <Text>Manage and track all tasks in your project.</Text>
            <VStack gap="sm">
              {[
                'Design system components',
                'Write documentation',
                'Set up testing framework',
                'Deploy to production',
              ].map((task, index) => (
                <Card key={index}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Text>{task}</Text>
                    <Badge variant={index < 2 ? 'success' : 'error'}>
                      {index < 2 ? 'Complete' : 'In Progress'}
                    </Badge>
                  </div>
                </Card>
              ))}
            </VStack>
          </VStack>
        ),
      },
      {
        id: 'team',
        label: 'Team',
        content: (
          <VStack gap="md">
            <Text size="lg" weight="semibold">
              Team Members
            </Text>
            <Text>View and manage your project team.</Text>
            <VStack gap="sm">
              {[
                {
                  name: 'John Doe',
                  role: 'Lead Developer',
                  avatar: '/api/placeholder/32/32',
                },
                {
                  name: 'Jane Smith',
                  role: 'Designer',
                  avatar: '/api/placeholder/32/32',
                },
                {
                  name: 'Mike Johnson',
                  role: 'Product Manager',
                  avatar: '/api/placeholder/32/32',
                },
              ].map((member, index) => (
                <Card key={index}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <Avatar src={member.avatar} alt={member.name} size="sm" />
                    <VStack gap="xs">
                      <Text weight="medium">{member.name}</Text>
                      <Text size="sm" tone="secondary">
                        {member.role}
                      </Text>
                    </VStack>
                  </div>
                </Card>
              ))}
            </VStack>
          </VStack>
        ),
      },
      {
        id: 'settings',
        label: 'Settings',
        content: (
          <VStack gap="md">
            <Text size="lg" weight="semibold">
              Project Settings
            </Text>
            <Text>Configure your project preferences and options.</Text>
            <VStack gap="sm">
              <Card>
                <VStack gap="sm">
                  <Text weight="medium">Project Name</Text>
                  <Text size="sm" tone="secondary">
                    BienUI Component Library
                  </Text>
                </VStack>
              </Card>
              <Card>
                <VStack gap="sm">
                  <Text weight="medium">Visibility</Text>
                  <Text size="sm" tone="secondary">
                    Private
                  </Text>
                </VStack>
              </Card>
              <Card>
                <VStack gap="sm">
                  <Text weight="medium">Notifications</Text>
                  <Text size="sm" tone="secondary">
                    Email and in-app notifications enabled
                  </Text>
                </VStack>
              </Card>
            </VStack>
          </VStack>
        ),
      },
    ]

    return (
      <div style={{ padding: '20px' }}>
        <VStack gap="lg">
          <Text size="lg" weight="semibold">
            Basic Tabs
          </Text>
          <Text size="sm" tone="secondary">
            Standard tabs for organizing content into sections
          </Text>

          <Tabs tabs={basicTabs} defaultTab="overview" />
        </VStack>
      </div>
    )
  },
}

export const TabsWithIcons: Story = {
  render: () => {
    const iconTabs = [
      {
        id: 'home',
        label: 'Dashboard',
        icon: <HomeIcon style={{ width: '16px', height: '16px' }} />,
        content: (
          <VStack gap="md">
            <Text size="lg" weight="semibold">
              Dashboard
            </Text>
            <Text>
              Your main dashboard with key metrics and recent activity.
            </Text>
            <Grid columns={2} gap="md">
              <Card>
                <VStack gap="sm">
                  <Text weight="medium">Total Users</Text>
                  <Text size="xl" weight="bold">
                    1,234
                  </Text>
                  <Text size="sm" tone="success">
                    +12% this week
                  </Text>
                </VStack>
              </Card>
              <Card>
                <VStack gap="sm">
                  <Text weight="medium">Revenue</Text>
                  <Text size="xl" weight="bold">
                    $12,345
                  </Text>
                  <Text size="sm" tone="success">
                    +8% this month
                  </Text>
                </VStack>
              </Card>
            </Grid>
          </VStack>
        ),
      },
      {
        id: 'profile',
        label: 'Profile',
        icon: <UserIcon style={{ width: '16px', height: '16px' }} />,
        content: (
          <VStack gap="md">
            <Text size="lg" weight="semibold">
              User Profile
            </Text>
            <Text>Manage your personal information and preferences.</Text>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <Avatar src="/api/placeholder/64/64" alt="Profile" size="lg" />
              <VStack gap="xs">
                <Text size="lg" weight="semibold">
                  John Doe
                </Text>
                <Text tone="secondary">john.doe@company.com</Text>
                <Badge variant="success">Verified</Badge>
              </VStack>
            </div>
          </VStack>
        ),
      },
      {
        id: 'analytics',
        label: 'Analytics',
        icon: <ChartIcon style={{ width: '16px', height: '16px' }} />,
        content: (
          <VStack gap="md">
            <Text size="lg" weight="semibold">
              Analytics
            </Text>
            <Text>View detailed analytics and performance metrics.</Text>
            <Banner variant="info">
              <Text size="sm">
                📊 Analytics data is updated every 15 minutes
              </Text>
            </Banner>
            <Grid columns={3} gap="md">
              <Card>
                <VStack gap="sm">
                  <Text weight="medium">Page Views</Text>
                  <Text size="lg" weight="bold">
                    45,678
                  </Text>
                </VStack>
              </Card>
              <Card>
                <VStack gap="sm">
                  <Text weight="medium">Bounce Rate</Text>
                  <Text size="lg" weight="bold">
                    34.5%
                  </Text>
                </VStack>
              </Card>
              <Card>
                <VStack gap="sm">
                  <Text weight="medium">Avg. Session</Text>
                  <Text size="lg" weight="bold">
                    2m 34s
                  </Text>
                </VStack>
              </Card>
            </Grid>
          </VStack>
        ),
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: <SettingsIcon style={{ width: '16px', height: '16px' }} />,
        content: (
          <VStack gap="md">
            <Text size="lg" weight="semibold">
              Account Settings
            </Text>
            <Text>Manage your account settings and preferences.</Text>
            <VStack gap="sm">
              <Card>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <VStack gap="xs">
                    <Text weight="medium">Email Notifications</Text>
                    <Text size="sm" tone="secondary">
                      Receive updates via email
                    </Text>
                  </VStack>
                  <Button size="sm" variant="ghost">
                    Configure
                  </Button>
                </div>
              </Card>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <VStack gap="xs">
                    <Text weight="medium">Two-Factor Authentication</Text>
                    <Text size="sm" tone="secondary">
                      Add an extra layer of security
                    </Text>
                  </VStack>
                  <Button size="sm" variant="ghost">
                    Enable
                  </Button>
                </div>
              </Card>
            </VStack>
          </VStack>
        ),
      },
    ]

    return (
      <div style={{ padding: '20px' }}>
        <VStack gap="lg">
          <Text size="lg" weight="semibold">
            Tabs with Icons
          </Text>
          <Text size="sm" tone="secondary">
            Enhanced tabs with icons for better visual identification
          </Text>

          <Tabs tabs={iconTabs} defaultTab="home" />
        </VStack>
      </div>
    )
  },
}

export const TabsWithBadges: Story = {
  render: () => {
    const badgeTabs = [
      {
        id: 'inbox',
        label: 'Inbox',
        badge: '5',
        content: (
          <VStack gap="md">
            <Text size="lg" weight="semibold">
              Inbox Messages
            </Text>
            <Text>You have 5 unread messages.</Text>
            <VStack gap="sm">
              {[
                {
                  subject: 'Project Update Required',
                  from: 'Sarah Chen',
                  time: '2m ago',
                  unread: true,
                },
                {
                  subject: 'Meeting Reminder: Team Sync',
                  from: 'Calendar',
                  time: '15m ago',
                  unread: true,
                },
                {
                  subject: 'Code Review Request',
                  from: 'Mike Johnson',
                  time: '1h ago',
                  unread: true,
                },
                {
                  subject: 'Weekly Report Available',
                  from: 'System',
                  time: '2h ago',
                  unread: false,
                },
                {
                  subject: 'Welcome to the Team!',
                  from: 'HR Department',
                  time: '1d ago',
                  unread: false,
                },
              ].map((message, index) => (
                <Card
                  key={index}
                  variant={message.unread ? undefined : 'outlined'}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                    }}
                  >
                    <VStack gap="xs">
                      <Text weight={message.unread ? 'semibold' : 'normal'}>
                        {message.subject}
                      </Text>
                      <Text size="sm" tone="secondary">
                        From: {message.from}
                      </Text>
                    </VStack>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <Text size="sm" tone="secondary">
                        {message.time}
                      </Text>
                      {message.unread && (
                        <div
                          style={{
                            width: '8px',
                            height: '8px',
                            backgroundColor: '#3b82f6',
                            borderRadius: '50%',
                          }}
                        />
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </VStack>
          </VStack>
        ),
      },
      {
        id: 'notifications',
        label: 'Notifications',
        badge: '12',
        badgeVariant: 'warning',
        content: (
          <VStack gap="md">
            <Text size="lg" weight="semibold">
              Notifications
            </Text>
            <Text>You have 12 new notifications.</Text>
            <VStack gap="sm">
              {[
                'Your deployment was successful',
                'New team member joined the project',
                'Weekly backup completed',
                'System maintenance scheduled for tonight',
                'Security update available',
              ].map((notification, index) => (
                <Card key={index}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <BellIcon
                      style={{
                        width: '16px',
                        height: '16px',
                        color: '#6b7280',
                      }}
                    />
                    <Text>{notification}</Text>
                  </div>
                </Card>
              ))}
              <Button variant="ghost" size="sm">
                View all notifications
              </Button>
            </VStack>
          </VStack>
        ),
      },
      {
        id: 'activity',
        label: 'Activity',
        content: (
          <VStack gap="md">
            <Text size="lg" weight="semibold">
              Recent Activity
            </Text>
            <Text>Track recent actions and changes in your workspace.</Text>
            <VStack gap="sm">
              {[
                {
                  action: 'Created new component "Button"',
                  time: '5 minutes ago',
                  user: 'You',
                },
                {
                  action: 'Updated design tokens',
                  time: '2 hours ago',
                  user: 'Sarah Chen',
                },
                {
                  action: 'Merged pull request #123',
                  time: '1 day ago',
                  user: 'Mike Johnson',
                },
                {
                  action: 'Added new team member',
                  time: '2 days ago',
                  user: 'Admin',
                },
              ].map((activity, index) => (
                <Card key={index}>
                  <VStack gap="xs">
                    <Text>{activity.action}</Text>
                    <Text size="sm" tone="secondary">
                      {activity.user} • {activity.time}
                    </Text>
                  </VStack>
                </Card>
              ))}
            </VStack>
          </VStack>
        ),
      },
    ]

    return (
      <div style={{ padding: '20px' }}>
        <VStack gap="lg">
          <Text size="lg" weight="semibold">
            Tabs with Badges
          </Text>
          <Text size="sm" tone="secondary">
            Tabs with notification badges and counters
          </Text>

          <Tabs tabs={badgeTabs} defaultTab="inbox" />
        </VStack>
      </div>
    )
  },
}

export const VerticalTabs: Story = {
  render: () => {
    const verticalTabs = [
      {
        id: 'general',
        label: 'General',
        content: (
          <VStack gap="md">
            <Text size="lg" weight="semibold">
              General Settings
            </Text>
            <Text>Configure basic application settings and preferences.</Text>
            <VStack gap="sm">
              <Card>
                <VStack gap="sm">
                  <Text weight="medium">Application Name</Text>
                  <Text size="sm" tone="secondary">
                    BienUI Design System
                  </Text>
                </VStack>
              </Card>
              <Card>
                <VStack gap="sm">
                  <Text weight="medium">Language</Text>
                  <Text size="sm" tone="secondary">
                    English (US)
                  </Text>
                </VStack>
              </Card>
              <Card>
                <VStack gap="sm">
                  <Text weight="medium">Timezone</Text>
                  <Text size="sm" tone="secondary">
                    Pacific Standard Time (PST)
                  </Text>
                </VStack>
              </Card>
            </VStack>
          </VStack>
        ),
      },
      {
        id: 'appearance',
        label: 'Appearance',
        content: (
          <VStack gap="md">
            <Text size="lg" weight="semibold">
              Appearance
            </Text>
            <Text>Customize the visual appearance of your application.</Text>
            <VStack gap="sm">
              <Card>
                <VStack gap="sm">
                  <Text weight="medium">Theme</Text>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <Button size="sm" variant="primary">
                      Light
                    </Button>
                    <Button size="sm" variant="ghost">
                      Dark
                    </Button>
                    <Button size="sm" variant="ghost">
                      Auto
                    </Button>
                  </div>
                </VStack>
              </Card>
              <Card>
                <VStack gap="sm">
                  <Text weight="medium">Density</Text>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <Button size="sm" variant="ghost">
                      Compact
                    </Button>
                    <Button size="sm" variant="primary">
                      Normal
                    </Button>
                    <Button size="sm" variant="ghost">
                      Comfortable
                    </Button>
                  </div>
                </VStack>
              </Card>
            </VStack>
          </VStack>
        ),
      },
      {
        id: 'notifications',
        label: 'Notifications',
        content: (
          <VStack gap="md">
            <Text size="lg" weight="semibold">
              Notification Preferences
            </Text>
            <Text>Choose how and when you want to receive notifications.</Text>
            <VStack gap="sm">
              <Card>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <VStack gap="xs">
                    <Text weight="medium">Email Notifications</Text>
                    <Text size="sm" tone="secondary">
                      Receive notifications via email
                    </Text>
                  </VStack>
                  <Badge variant="success">Enabled</Badge>
                </div>
              </Card>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <VStack gap="xs">
                    <Text weight="medium">Push Notifications</Text>
                    <Text size="sm" tone="secondary">
                      Browser push notifications
                    </Text>
                  </VStack>
                  <Badge variant="neutral">Disabled</Badge>
                </div>
              </Card>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <VStack gap="xs">
                    <Text weight="medium">Digest Email</Text>
                    <Text size="sm" tone="secondary">
                      Weekly summary email
                    </Text>
                  </VStack>
                  <Badge variant="success">Enabled</Badge>
                </div>
              </Card>
            </VStack>
          </VStack>
        ),
      },
      {
        id: 'security',
        label: 'Security',
        content: (
          <VStack gap="md">
            <Text size="lg" weight="semibold">
              Security Settings
            </Text>
            <Text>Manage your account security and privacy settings.</Text>
            <VStack gap="sm">
              <Card>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <VStack gap="xs">
                    <Text weight="medium">Two-Factor Authentication</Text>
                    <Text size="sm" tone="secondary">
                      Add an extra layer of security
                    </Text>
                  </VStack>
                  <Button size="sm" variant="ghost">
                    Enable
                  </Button>
                </div>
              </Card>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <VStack gap="xs">
                    <Text weight="medium">Session Management</Text>
                    <Text size="sm" tone="secondary">
                      View active sessions
                    </Text>
                  </VStack>
                  <Button size="sm" variant="ghost">
                    Manage
                  </Button>
                </div>
              </Card>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <VStack gap="xs">
                    <Text weight="medium">Login Alerts</Text>
                    <Text size="sm" tone="secondary">
                      Get notified of new logins
                    </Text>
                  </VStack>
                  <Badge variant="success">Enabled</Badge>
                </div>
              </Card>
            </VStack>
          </VStack>
        ),
      },
      {
        id: 'billing',
        label: 'Billing',
        content: (
          <VStack gap="md">
            <Text size="lg" weight="semibold">
              Billing & Subscription
            </Text>
            <Text>Manage your subscription and billing information.</Text>
            <Banner variant="info">
              <VStack gap="xs">
                <Text size="sm" weight="medium">
                  Current Plan: Pro
                </Text>
                <Text size="sm">
                  Your subscription renews on March 15, 2024
                </Text>
              </VStack>
            </Banner>
            <VStack gap="sm">
              <Card>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <VStack gap="xs">
                    <Text weight="medium">Payment Method</Text>
                    <Text size="sm" tone="secondary">
                      **** **** **** 4242
                    </Text>
                  </VStack>
                  <Button size="sm" variant="ghost">
                    Update
                  </Button>
                </div>
              </Card>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <VStack gap="xs">
                    <Text weight="medium">Billing History</Text>
                    <Text size="sm" tone="secondary">
                      View past invoices
                    </Text>
                  </VStack>
                  <Button size="sm" variant="ghost">
                    View
                  </Button>
                </div>
              </Card>
            </VStack>
          </VStack>
        ),
      },
    ]

    return (
      <div style={{ padding: '20px' }}>
        <VStack gap="lg">
          <Text size="lg" weight="semibold">
            Vertical Tabs
          </Text>
          <Text size="sm" tone="secondary">
            Vertical tab layout ideal for settings and configuration
          </Text>

          <Tabs tabs={verticalTabs} defaultTab="general" vertical={true} />
        </VStack>
      </div>
    )
  },
}

export const AllVariationsShowcase: Story = {
  render: () => {
    const [demoTab, setDemoTab] = useState('features')

    const showcaseTabs = [
      {
        id: 'features',
        label: 'Features',
        icon: <HomeIcon style={{ width: '16px', height: '16px' }} />,
        content: (
          <VStack gap="md">
            <Text size="lg" weight="semibold">
              Component Features
            </Text>
            <Grid columns={2} gap="md">
              <Card>
                <VStack gap="sm">
                  <Text weight="medium">Icon Support</Text>
                  <Text size="sm" tone="secondary">
                    Add icons to tab labels
                  </Text>
                </VStack>
              </Card>
              <Card>
                <VStack gap="sm">
                  <Text weight="medium">Badge Indicators</Text>
                  <Text size="sm" tone="secondary">
                    Show notifications and counts
                  </Text>
                </VStack>
              </Card>
              <Card>
                <VStack gap="sm">
                  <Text weight="medium">Vertical Layout</Text>
                  <Text size="sm" tone="secondary">
                    Alternative orientation
                  </Text>
                </VStack>
              </Card>
              <Card>
                <VStack gap="sm">
                  <Text weight="medium">Custom Content</Text>
                  <Text size="sm" tone="secondary">
                    Any content in panels
                  </Text>
                </VStack>
              </Card>
            </Grid>
          </VStack>
        ),
      },
      {
        id: 'examples',
        label: 'Examples',
        icon: <ChartIcon style={{ width: '16px', height: '16px' }} />,
        badge: '4',
        content: (
          <VStack gap="md">
            <Text size="lg" weight="semibold">
              Usage Examples
            </Text>
            <VStack gap="sm">
              <Text>• Dashboard sections</Text>
              <Text>• Settings panels</Text>
              <Text>• Content categorization</Text>
              <Text>• Form organization</Text>
              <Text>• Data visualization views</Text>
            </VStack>
          </VStack>
        ),
      },
      {
        id: 'variants',
        label: 'Variants',
        icon: <SettingsIcon style={{ width: '16px', height: '16px' }} />,
        content: (
          <VStack gap="md">
            <Text size="lg" weight="semibold">
              Tab Variants
            </Text>
            <Grid columns={2} gap="md">
              <Card>
                <VStack gap="xs">
                  <Text weight="semibold" size="sm">
                    Default
                  </Text>
                  <Text size="sm" tone="secondary">
                    Standard tab appearance
                  </Text>
                </VStack>
              </Card>
              <Card>
                <VStack gap="xs">
                  <Text weight="semibold" size="sm">
                    Pills
                  </Text>
                  <Text size="sm" tone="secondary">
                    Rounded pill-style tabs
                  </Text>
                </VStack>
              </Card>
              <Card>
                <VStack gap="xs">
                  <Text weight="semibold" size="sm">
                    Underline
                  </Text>
                  <Text size="sm" tone="secondary">
                    Minimal underline indicator
                  </Text>
                </VStack>
              </Card>
              <Card>
                <VStack gap="xs">
                  <Text weight="semibold" size="sm">
                    Enclosed
                  </Text>
                  <Text size="sm" tone="secondary">
                    Full border around tabs
                  </Text>
                </VStack>
              </Card>
            </Grid>
          </VStack>
        ),
      },
    ]

    return (
      <div style={{ padding: '20px' }}>
        <VStack gap="xl">
          <VStack gap="sm">
            <Text size="xl" weight="bold">
              Complete Tabs System 📑
            </Text>
            <Text size="sm" tone="secondary">
              Comprehensive examples demonstrating all tab types, orientations,
              and use cases
            </Text>
          </VStack>

          <Grid columns={1} gap="xl">
            {/* Tab Categories */}
            <VStack gap="md">
              <Text size="lg" weight="semibold">
                Tab Categories
              </Text>
              <Grid columns={4} gap="md">
                <Card style={{ textAlign: 'center', padding: '16px' }}>
                  <VStack gap="sm">
                    <HomeIcon
                      style={{
                        color: '#3b82f6',
                        width: '24px',
                        height: '24px',
                        margin: '0 auto',
                      }}
                    />
                    <Text size="sm" weight="medium">
                      Navigation
                    </Text>
                    <Text size="xs" tone="secondary">
                      Content organization
                    </Text>
                  </VStack>
                </Card>

                <Card style={{ textAlign: 'center', padding: '16px' }}>
                  <VStack gap="sm">
                    <SettingsIcon
                      style={{
                        color: '#8b5cf6',
                        width: '24px',
                        height: '24px',
                        margin: '0 auto',
                      }}
                    />
                    <Text size="sm" weight="medium">
                      Settings
                    </Text>
                    <Text size="xs" tone="secondary">
                      Configuration panels
                    </Text>
                  </VStack>
                </Card>

                <Card style={{ textAlign: 'center', padding: '16px' }}>
                  <VStack gap="sm">
                    <ChartIcon
                      style={{
                        color: '#10b981',
                        width: '24px',
                        height: '24px',
                        margin: '0 auto',
                      }}
                    />
                    <Text size="sm" weight="medium">
                      Analytics
                    </Text>
                    <Text size="xs" tone="secondary">
                      Data visualization
                    </Text>
                  </VStack>
                </Card>

                <Card style={{ textAlign: 'center', padding: '16px' }}>
                  <VStack gap="sm">
                    <BellIcon
                      style={{
                        color: '#f59e0b',
                        width: '24px',
                        height: '24px',
                        margin: '0 auto',
                      }}
                    />
                    <Text size="sm" weight="medium">
                      Notifications
                    </Text>
                    <Text size="xs" tone="secondary">
                      Activity feeds
                    </Text>
                  </VStack>
                </Card>
              </Grid>
            </VStack>

            {/* Interactive Demo */}
            <VStack gap="md">
              <Text size="lg" weight="semibold">
                Interactive Demo
              </Text>
              <Card>
                <Tabs
                  tabs={showcaseTabs}
                  defaultTab={demoTab}
                  onChange={setDemoTab}
                />
              </Card>
            </VStack>

            {/* Layout Comparison */}
            <VStack gap="md">
              <Text size="lg" weight="semibold">
                Layout Orientations
              </Text>
              <Grid columns={2} gap="md">
                <Card>
                  <VStack gap="sm">
                    <Text weight="semibold" size="sm">
                      Horizontal (Default)
                    </Text>
                    <Text size="sm" tone="secondary">
                      Best for navigation and content organization
                    </Text>
                  </VStack>
                </Card>

                <Card>
                  <VStack gap="sm">
                    <Text weight="semibold" size="sm">
                      Vertical
                    </Text>
                    <Text size="sm" tone="secondary">
                      Ideal for settings and configuration interfaces
                    </Text>
                  </VStack>
                </Card>
              </Grid>
            </VStack>
          </Grid>

          <Banner variant="info">
            <Text size="sm">
              🎯 <strong>UX Tip:</strong> Use 3-7 tabs for optimal usability.
              Consider grouping related content and use clear, descriptive
              labels.
            </Text>
          </Banner>

          <Text size="lg" weight="semibold">
            Tab Design Best Practices
          </Text>
          <VStack gap="xs">
            <Text size="sm">
              • Clear labeling: Use concise, descriptive labels that clearly
              indicate content
            </Text>
            <Text size="sm">
              • Logical grouping: Organize related content together in the same
              tab
            </Text>
            <Text size="sm">
              • Visual hierarchy: Use icons and badges to enhance navigation and
              show status
            </Text>
            <Text size="sm">
              • Keyboard navigation: Support Tab key and arrow key navigation
              for accessibility
            </Text>
            <Text size="sm">
              • State preservation: Remember active tab when users navigate away
              and return
            </Text>
          </VStack>
        </VStack>
      </div>
    )
  },
}
