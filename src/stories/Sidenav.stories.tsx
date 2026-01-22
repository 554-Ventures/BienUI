/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Sidenav, SidenavItem } from '../components/Navigation/Sidenav'
import { Card } from '../components/Display/Card'
import { Text } from '../components/Display/Text'
import { Button } from '../components/Interactive/Button'
import { VStack, HStack } from '../components/Layout/Stack'

const meta: Meta<typeof Sidenav> = {
  title: 'Navigation/Sidenav',
  component: Sidenav,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A collapsible side navigation component with hover expansion, category grouping, and multiple visual variants including glass effects. Perfect for dashboards and admin interfaces.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of navigation items to display',
      table: {
        type: { summary: 'SidenavItem[]' },
      },
    },
    variant: {
      control: 'select',
      options: ['solid', 'glass-frost', 'glass-tint'],
      description: 'Visual style variant of the sidenav',
    },
    density: {
      control: 'select',
      options: ['comfortable', 'compact'],
      description: 'Spacing density of navigation items',
    },
    onItemClick: {
      action: 'item-click',
      description: 'Callback fired when a navigation item is clicked',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Icons for navigation items
const HomeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)

const DashboardIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="9" y1="9" x2="15" y2="9" />
    <line x1="9" y1="15" x2="15" y2="15" />
  </svg>
)

const AnalyticsIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
)

const UsersIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="m22 21-3-3" />
    <circle cx="17" cy="17" r="3" />
  </svg>
)

const SettingsIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="m12 1 2.09 5.26L22 9l-5.26 2.09L14 22l-2.09-5.26L2 14l5.26-2.09L12 1z" />
  </svg>
)

const ProjectsIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
)

const TasksIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M9 12l2 2 4-4" />
    <path d="M21 12c0 5-4 9-9 9s-9-4-9-9 4-9 9-9c1.3 0 2.5.3 3.6.8" />
  </svg>
)

const ReportsIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
)

const HelpIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
)

// Sample navigation items
const sampleItems: SidenavItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <DashboardIcon />,
    active: true,
  },
  { id: 'analytics', label: 'Analytics', icon: <AnalyticsIcon /> },
  { id: 'users', label: 'Users', icon: <UsersIcon /> },
  {
    id: 'divider-1',
    label: '',
    icon: <></>,
    divider: true,
    category: 'Content',
  },
  { id: 'projects', label: 'Projects', icon: <ProjectsIcon /> },
  { id: 'tasks', label: 'Tasks', icon: <TasksIcon /> },
  { id: 'reports', label: 'Reports', icon: <ReportsIcon /> },
  {
    id: 'divider-2',
    label: '',
    icon: <></>,
    divider: true,
    category: 'System',
  },
  { id: 'settings', label: 'Settings', icon: <SettingsIcon /> },
  { id: 'help', label: 'Help', icon: <HelpIcon /> },
]

export const Default: Story = {
  args: {
    items: sampleItems,
    variant: 'solid',
    density: 'comfortable',
  },
  render: (args) => (
    <div
      style={{
        display: 'flex',
        minHeight: '600px',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Sidenav {...args} />
      <div style={{ flex: 1, padding: '2rem' }}>
        <Card padding="xl">
          <VStack gap="md">
            <Text as="h2" style={{ margin: 0 }}>
              Dashboard Content
            </Text>
            <Text
              as="p"
              style={{ margin: 0, color: 'var(--color-text-secondary)' }}
            >
              Hover over the sidebar to see it expand and show navigation
              labels. The sidebar automatically collapses when not hovered.
            </Text>
          </VStack>
        </Card>
      </div>
    </div>
  ),
}

export const VariantShowcase: Story = {
  render: () => {
    const simpleItems: SidenavItem[] = [
      { id: 'home', label: 'Home', icon: <HomeIcon />, active: true },
      { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
      { id: 'analytics', label: 'Analytics', icon: <AnalyticsIcon /> },
      { id: 'settings', label: 'Settings', icon: <SettingsIcon /> },
    ]

    return (
      <VStack gap="lg">
        <Text as="h3" style={{ margin: 0, padding: '0 2rem' }}>
          Sidenav Variants
        </Text>

        <VStack gap="md">
          {/* Solid Variant */}
          <VStack gap="sm">
            <Text as="h5" style={{ margin: 0, padding: '0 2rem' }}>
              Solid (Default)
            </Text>
            <div
              style={{
                display: 'flex',
                minHeight: '300px',
                backgroundColor: '#f5f5f5',
              }}
            >
              <Sidenav items={simpleItems} variant="solid" />
              <div style={{ flex: 1, padding: '1rem' }}>
                <Card padding="lg">
                  <Text as="p" style={{ margin: 0 }}>
                    Standard solid background with defined borders.
                  </Text>
                </Card>
              </div>
            </div>
          </VStack>

          {/* Glass Frost Variant */}
          <VStack gap="sm">
            <Text as="h5" style={{ margin: 0, padding: '0 2rem' }}>
              Glass Frost
            </Text>
            <div
              style={{
                display: 'flex',
                minHeight: '300px',
                backgroundImage:
                  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              }}
            >
              <Sidenav items={simpleItems} variant="glass-frost" />
              <div style={{ flex: 1, padding: '1rem' }}>
                <Card padding="lg">
                  <Text as="p" style={{ margin: 0 }}>
                    Frosted glass effect with backdrop blur.
                  </Text>
                </Card>
              </div>
            </div>
          </VStack>

          {/* Glass Tint Variant */}
          <VStack gap="sm">
            <Text as="h5" style={{ margin: 0, padding: '0 2rem' }}>
              Glass Tint
            </Text>
            <div
              style={{
                display: 'flex',
                minHeight: '300px',
                backgroundImage:
                  'linear-gradient(45deg, #f093fb 0%, #f5576c 100%)',
              }}
            >
              <Sidenav items={simpleItems} variant="glass-tint" />
              <div style={{ flex: 1, padding: '1rem' }}>
                <Card padding="lg">
                  <Text as="p" style={{ margin: 0 }}>
                    Tinted glass effect with color overlay.
                  </Text>
                </Card>
              </div>
            </div>
          </VStack>
        </VStack>
      </VStack>
    )
  },
}

export const DensityComparison: Story = {
  render: () => {
    const items: SidenavItem[] = [
      { id: 'home', label: 'Home', icon: <HomeIcon />, active: true },
      { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
      { id: 'analytics', label: 'Analytics', icon: <AnalyticsIcon /> },
      { id: 'projects', label: 'Projects', icon: <ProjectsIcon /> },
      { id: 'settings', label: 'Settings', icon: <SettingsIcon /> },
    ]

    return (
      <VStack gap="lg">
        <Text as="h3" style={{ margin: 0, padding: '0 2rem' }}>
          Density Comparison
        </Text>

        <HStack gap="lg" align="start">
          <VStack gap="sm">
            <Text as="h5" style={{ margin: 0 }}>
              Comfortable (Default)
            </Text>
            <div
              style={{
                display: 'flex',
                minHeight: '400px',
                backgroundColor: '#f5f5f5',
              }}
            >
              <Sidenav items={items} density="comfortable" />
              <div style={{ width: '200px', padding: '1rem' }}>
                <Card padding="md">
                  <Text as="p" style={{ margin: 0, fontSize: '0.875rem' }}>
                    More spacing between items for easier interaction.
                  </Text>
                </Card>
              </div>
            </div>
          </VStack>

          <VStack gap="sm">
            <Text as="h5" style={{ margin: 0 }}>
              Compact
            </Text>
            <div
              style={{
                display: 'flex',
                minHeight: '400px',
                backgroundColor: '#f5f5f5',
              }}
            >
              <Sidenav items={items} density="compact" />
              <div style={{ width: '200px', padding: '1rem' }}>
                <Card padding="md">
                  <Text as="p" style={{ margin: 0, fontSize: '0.875rem' }}>
                    Tighter spacing to fit more items in less vertical space.
                  </Text>
                </Card>
              </div>
            </div>
          </VStack>
        </HStack>
      </VStack>
    )
  },
}

export const InteractiveDemo: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState('dashboard')
    const [clickCount, setClickCount] = useState(0)

    const items: SidenavItem[] = [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: <DashboardIcon />,
        active: activeItem === 'dashboard',
      },
      {
        id: 'analytics',
        label: 'Analytics',
        icon: <AnalyticsIcon />,
        active: activeItem === 'analytics',
      },
      {
        id: 'users',
        label: 'Users',
        icon: <UsersIcon />,
        active: activeItem === 'users',
      },
      {
        id: 'divider-1',
        label: '',
        icon: <></>,
        divider: true,
        category: 'Content',
      },
      {
        id: 'projects',
        label: 'Projects',
        icon: <ProjectsIcon />,
        active: activeItem === 'projects',
      },
      {
        id: 'tasks',
        label: 'Tasks',
        icon: <TasksIcon />,
        active: activeItem === 'tasks',
      },
      {
        id: 'divider-2',
        label: '',
        icon: <></>,
        divider: true,
        category: 'System',
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: <SettingsIcon />,
        active: activeItem === 'settings',
      },
      {
        id: 'help',
        label: 'Help',
        icon: <HelpIcon />,
        active: activeItem === 'help',
      },
    ]

    const handleItemClick = (item: SidenavItem) => {
      if (!item.divider) {
        setActiveItem(item.id)
        setClickCount((prev) => prev + 1)
      }
    }

    const getPageContent = () => {
      const pageData = {
        dashboard: {
          title: 'Dashboard',
          description:
            'Overview of your application metrics and key performance indicators.',
          content: 'This would show charts, graphs, and summary statistics.',
        },
        analytics: {
          title: 'Analytics',
          description: 'Detailed analytics and reporting for your application.',
          content:
            'Here you would find traffic analytics, user behavior, and conversion metrics.',
        },
        users: {
          title: 'User Management',
          description:
            'Manage user accounts, permissions, and access controls.',
          content:
            'User tables, role assignments, and account settings would be displayed here.',
        },
        projects: {
          title: 'Projects',
          description: 'Manage your active projects and workflows.',
          content: 'Project listings, status tracking, and team assignments.',
        },
        tasks: {
          title: 'Task Management',
          description: 'Track and organize tasks and deadlines.',
          content: 'Task boards, progress tracking, and deadline management.',
        },
        settings: {
          title: 'Settings',
          description: 'Configure application settings and preferences.',
          content:
            'User preferences, system configuration, and feature toggles.',
        },
        help: {
          title: 'Help & Support',
          description: 'Documentation, tutorials, and support resources.',
          content: 'FAQ, user guides, and contact information for support.',
        },
      }

      return pageData[activeItem as keyof typeof pageData] || pageData.dashboard
    }

    const currentPage = getPageContent()

    return (
      <div
        style={{
          display: 'flex',
          minHeight: '600px',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Sidenav
          items={items}
          onItemClick={handleItemClick}
          variant="solid"
          density="comfortable"
        />
        <div style={{ flex: 1, padding: '2rem' }}>
          <VStack gap="lg">
            <Card padding="xl">
              <VStack gap="md">
                <HStack justify="space-between" align="center">
                  <Text as="h2" style={{ margin: 0 }}>
                    {currentPage.title}
                  </Text>
                  <Text
                    as="span"
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-text-secondary)',
                      padding: '4px 8px',
                      backgroundColor: 'var(--color-surface-secondary)',
                      borderRadius: '4px',
                    }}
                  >
                    Clicks: {clickCount}
                  </Text>
                </HStack>
                <Text
                  as="p"
                  style={{ margin: 0, color: 'var(--color-text-secondary)' }}
                >
                  {currentPage.description}
                </Text>
                <Text as="p" style={{ margin: 0 }}>
                  {currentPage.content}
                </Text>
              </VStack>
            </Card>

            <Card padding="lg" variant="outlined">
              <VStack gap="md">
                <Text as="h4" style={{ margin: 0 }}>
                  Interactive Features
                </Text>
                <VStack gap="sm" align="start">
                  <Text as="p" style={{ margin: 0, fontSize: '0.875rem' }}>
                    • Click navigation items to switch pages
                  </Text>
                  <Text as="p" style={{ margin: 0, fontSize: '0.875rem' }}>
                    • Hover to expand sidebar and see labels
                  </Text>
                  <Text as="p" style={{ margin: 0, fontSize: '0.875rem' }}>
                    • Categories organize related navigation items
                  </Text>
                  <Text as="p" style={{ margin: 0, fontSize: '0.875rem' }}>
                    • Active state follows current selection
                  </Text>
                </VStack>

                <HStack gap="sm">
                  <Button
                    size="sm"
                    onClick={() => {
                      setActiveItem('dashboard')
                      setClickCount(0)
                    }}
                  >
                    Reset Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => setActiveItem('analytics')}
                  >
                    Go to Analytics
                  </Button>
                </HStack>
              </VStack>
            </Card>
          </VStack>
        </div>
      </div>
    )
  },
}

export const WithoutCategories: Story = {
  render: () => {
    const simpleItems: SidenavItem[] = [
      { id: 'home', label: 'Home', icon: <HomeIcon />, active: true },
      { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
      { id: 'analytics', label: 'Analytics', icon: <AnalyticsIcon /> },
      { id: 'users', label: 'Users', icon: <UsersIcon /> },
      { id: 'projects', label: 'Projects', icon: <ProjectsIcon /> },
      { id: 'settings', label: 'Settings', icon: <SettingsIcon /> },
      { id: 'help', label: 'Help', icon: <HelpIcon /> },
    ]

    return (
      <div
        style={{
          display: 'flex',
          minHeight: '500px',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Sidenav items={simpleItems} variant="solid" density="comfortable" />
        <div style={{ flex: 1, padding: '2rem' }}>
          <Card padding="xl">
            <VStack gap="md">
              <Text as="h2" style={{ margin: 0 }}>
                Simple Navigation
              </Text>
              <Text
                as="p"
                style={{ margin: 0, color: 'var(--color-text-secondary)' }}
              >
                Navigation without categories or dividers for simpler use cases.
                All items are displayed in a flat list structure.
              </Text>
            </VStack>
          </Card>
        </div>
      </div>
    )
  },
}

export const AdminDashboard: Story = {
  render: () => {
    const [currentView, setCurrentView] = useState('overview')

    const adminItems: SidenavItem[] = [
      {
        id: 'overview',
        label: 'Overview',
        icon: <DashboardIcon />,
        active: currentView === 'overview',
      },
      {
        id: 'divider-1',
        label: '',
        icon: <></>,
        divider: true,
        category: 'Management',
      },
      {
        id: 'users',
        label: 'Users',
        icon: <UsersIcon />,
        active: currentView === 'users',
      },
      {
        id: 'projects',
        label: 'Projects',
        icon: <ProjectsIcon />,
        active: currentView === 'projects',
      },
      {
        id: 'tasks',
        label: 'Tasks',
        icon: <TasksIcon />,
        active: currentView === 'tasks',
      },
      {
        id: 'divider-2',
        label: '',
        icon: <></>,
        divider: true,
        category: 'Analytics',
      },
      {
        id: 'reports',
        label: 'Reports',
        icon: <ReportsIcon />,
        active: currentView === 'reports',
      },
      {
        id: 'analytics',
        label: 'Analytics',
        icon: <AnalyticsIcon />,
        active: currentView === 'analytics',
      },
      {
        id: 'divider-3',
        label: '',
        icon: <></>,
        divider: true,
        category: 'System',
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: <SettingsIcon />,
        active: currentView === 'settings',
      },
      {
        id: 'help',
        label: 'Help Center',
        icon: <HelpIcon />,
        active: currentView === 'help',
      },
    ]

    const handleNavigation = (item: SidenavItem) => {
      if (!item.divider) {
        setCurrentView(item.id)
      }
    }

    return (
      <div
        style={{
          display: 'flex',
          minHeight: '700px',
          backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}
      >
        <Sidenav
          items={adminItems}
          variant="glass-frost"
          density="comfortable"
          onItemClick={handleNavigation}
        />
        <div style={{ flex: 1, padding: '2rem' }}>
          <VStack gap="lg">
            <Card padding="xl" variant="glass-frost">
              <VStack gap="md">
                <Text as="h1" style={{ margin: 0, color: 'white' }}>
                  Admin Dashboard
                </Text>
                <Text
                  as="p"
                  style={{ margin: 0, color: 'rgba(255,255,255,0.8)' }}
                >
                  Comprehensive admin interface with glassmorphism design.
                </Text>
              </VStack>
            </Card>

            <Card padding="xl">
              <VStack gap="lg">
                <Text as="h2" style={{ margin: 0 }}>
                  {currentView.charAt(0).toUpperCase() + currentView.slice(1)}{' '}
                  Section
                </Text>

                <HStack gap="lg" align="start">
                  <Card padding="md" variant="outlined" style={{ flex: 1 }}>
                    <VStack gap="sm">
                      <Text as="h4" style={{ margin: 0 }}>
                        Quick Stats
                      </Text>
                      <Text
                        as="p"
                        style={{
                          margin: 0,
                          fontSize: '2rem',
                          fontWeight: 'bold',
                        }}
                      >
                        1,234
                      </Text>
                      <Text
                        as="p"
                        style={{
                          margin: 0,
                          color: 'var(--color-text-secondary)',
                        }}
                      >
                        Total Items
                      </Text>
                    </VStack>
                  </Card>

                  <Card padding="md" variant="outlined" style={{ flex: 1 }}>
                    <VStack gap="sm">
                      <Text as="h4" style={{ margin: 0 }}>
                        Active Users
                      </Text>
                      <Text
                        as="p"
                        style={{
                          margin: 0,
                          fontSize: '2rem',
                          fontWeight: 'bold',
                        }}
                      >
                        567
                      </Text>
                      <Text
                        as="p"
                        style={{
                          margin: 0,
                          color: 'var(--color-text-secondary)',
                        }}
                      >
                        Online Now
                      </Text>
                    </VStack>
                  </Card>

                  <Card padding="md" variant="outlined" style={{ flex: 1 }}>
                    <VStack gap="sm">
                      <Text as="h4" style={{ margin: 0 }}>
                        Performance
                      </Text>
                      <Text
                        as="p"
                        style={{
                          margin: 0,
                          fontSize: '2rem',
                          fontWeight: 'bold',
                        }}
                      >
                        98%
                      </Text>
                      <Text
                        as="p"
                        style={{
                          margin: 0,
                          color: 'var(--color-text-secondary)',
                        }}
                      >
                        Uptime
                      </Text>
                    </VStack>
                  </Card>
                </HStack>
              </VStack>
            </Card>
          </VStack>
        </div>
      </div>
    )
  },
}
