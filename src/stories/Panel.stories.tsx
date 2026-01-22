/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Panel } from '../components/Interactive/Panel'
import { Card } from '../components/Display/Card'
import { Text } from '../components/Display/Text'
import { Button } from '../components/Interactive/Button'
import { Input } from '../components/Forms/Input'
import { Avatar } from '../components/Display/Avatar'
import { Badge } from '../components/Display/Badge'
import {
  HomeIcon,
  UsersIcon,
  SettingsIcon,
  FileTextIcon,
  SearchIcon,
  PlusIcon,
  MessageCircleIcon,
  CalendarIcon,
  BarChart3Icon,
  FolderIcon,
  StarIcon,
  HeartIcon,
  BookmarkIcon,
} from 'lucide-react'

const meta: Meta<typeof Panel> = {
  title: 'Interactive/Panel',
  component: Panel,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A flexible panel layout component with collapsible sidebar, mobile support, and multiple visual variants. Perfect for dashboards, admin interfaces, and navigation layouts.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Which side the sidebar appears on',
    },
    variant: {
      control: 'select',
      options: [
        'elevated',
        'outlined',
        'filled',
        'ghost',
        'glass-frost',
        'glass-tint',
      ],
      description: 'Visual variant of the sidebar',
    },
    defaultCollapsed: {
      control: 'boolean',
      description: 'Initial collapsed state (uncontrolled)',
    },
    collapsed: {
      control: 'boolean',
      description: 'Collapsed state (controlled)',
    },
    onCollapsedChange: {
      action: 'collapsed changed',
      description: 'Callback when collapsed state changes',
    },
    sidebarWidth: {
      control: 'number',
      description: 'Width of the sidebar when expanded (px)',
    },
    collapsedWidth: {
      control: 'number',
      description: 'Width of the sidebar when collapsed (px)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Sample navigation items
const NavItems = ({ collapsed }: { collapsed: boolean }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      padding: '1rem 0',
    }}
  >
    <Button
      variant="ghost"
      icon={<HomeIcon />}
      style={{
        justifyContent: collapsed ? 'center' : 'flex-start',
        width: '100%',
      }}
    >
      {!collapsed && 'Dashboard'}
    </Button>
    <Button
      variant="ghost"
      icon={<UsersIcon />}
      style={{
        justifyContent: collapsed ? 'center' : 'flex-start',
        width: '100%',
      }}
    >
      {!collapsed && 'Users'}
    </Button>
    <Button
      variant="ghost"
      icon={<FileTextIcon />}
      style={{
        justifyContent: collapsed ? 'center' : 'flex-start',
        width: '100%',
      }}
    >
      {!collapsed && 'Documents'}
    </Button>
    <Button
      variant="ghost"
      icon={<BarChart3Icon />}
      style={{
        justifyContent: collapsed ? 'center' : 'flex-start',
        width: '100%',
      }}
    >
      {!collapsed && 'Analytics'}
    </Button>
    <Button
      variant="ghost"
      icon={<SettingsIcon />}
      style={{
        justifyContent: collapsed ? 'center' : 'flex-start',
        width: '100%',
      }}
    >
      {!collapsed && 'Settings'}
    </Button>
  </div>
)

const ProfileSection = ({ collapsed }: { collapsed: boolean }) => (
  <div
    style={{ padding: '1rem', borderTop: '1px solid var(--color-border-base)' }}
  >
    {collapsed ? (
      <Avatar
        size="sm"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
      />
    ) : (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Avatar
          size="sm"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <Text as="span" size="sm" weight="semibold">
            John Doe
          </Text>
          <Text as="span" size="xs" tone="secondary">
            Developer
          </Text>
        </div>
      </div>
    )}
  </div>
)

export const Default: Story = {
  args: {
    side: 'left',
    variant: 'elevated',
    defaultCollapsed: false,
    sidebarWidth: 280,
    collapsedWidth: 60,
  },
  render: (args) => (
    <div style={{ height: '600px', width: '100%' }}>
      <Panel {...args}>
        <Panel.Sidebar>
          <div style={{ padding: '1rem' }}>
            <Text as="h4" style={{ margin: 0 }}>
              {args.defaultCollapsed ? '🚀' : '🚀 Dashboard'}
            </Text>
          </div>
          <NavItems collapsed={args.defaultCollapsed || false} />
          <ProfileSection collapsed={args.defaultCollapsed || false} />
        </Panel.Sidebar>

        <Panel.Content>
          <div style={{ padding: '2rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <Text as="h2" style={{ margin: '0 0 0.5rem 0' }}>
                Welcome Back!
              </Text>
              <Text as="p" tone="secondary">
                Here&apos;s what&apos;s happening with your projects today.
              </Text>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2rem',
              }}
            >
              <Card padding="lg">
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                >
                  <div
                    style={{
                      padding: '0.75rem',
                      backgroundColor: 'var(--color-brand-subtle)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--color-brand-base)',
                    }}
                  >
                    <UsersIcon size={24} />
                  </div>
                  <div>
                    <Text as="h3" style={{ margin: 0 }}>
                      1,234
                    </Text>
                    <Text
                      as="p"
                      size="sm"
                      tone="secondary"
                      style={{ margin: 0 }}
                    >
                      Total Users
                    </Text>
                  </div>
                </div>
              </Card>

              <Card padding="lg">
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                >
                  <div
                    style={{
                      padding: '0.75rem',
                      backgroundColor: 'var(--color-accent-subtle)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--color-accent-base)',
                    }}
                  >
                    <FileTextIcon size={24} />
                  </div>
                  <div>
                    <Text as="h3" style={{ margin: 0 }}>
                      89
                    </Text>
                    <Text
                      as="p"
                      size="sm"
                      tone="secondary"
                      style={{ margin: 0 }}
                    >
                      Documents
                    </Text>
                  </div>
                </div>
              </Card>
            </div>

            <Card padding="lg">
              <Text as="h4" style={{ margin: '0 0 1rem 0' }}>
                Recent Activity
              </Text>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                >
                  <Avatar
                    size="sm"
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=32&h=32&fit=crop&crop=face"
                  />
                  <div style={{ flex: 1 }}>
                    <Text as="p" size="sm" style={{ margin: 0 }}>
                      Sarah created a new document
                    </Text>
                    <Text
                      as="span"
                      size="xs"
                      tone="secondary"
                      style={{ margin: 0 }}
                    >
                      2 minutes ago
                    </Text>
                  </div>
                </div>
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                >
                  <Avatar
                    size="sm"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                  />
                  <div style={{ flex: 1 }}>
                    <Text as="p" size="sm" style={{ margin: 0 }}>
                      John updated the analytics dashboard
                    </Text>
                    <Text
                      as="span"
                      size="xs"
                      tone="secondary"
                      style={{ margin: 0 }}
                    >
                      15 minutes ago
                    </Text>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Panel.Content>
      </Panel>
    </div>
  ),
}

export const ControlledState: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false)

    return (
      <div style={{ height: '600px', width: '100%' }}>
        <Panel
          side="left"
          variant="filled"
          collapsed={collapsed}
          onCollapsedChange={setCollapsed}
          sidebarWidth={280}
          collapsedWidth={60}
        >
          <Panel.Sidebar>
            <div style={{ padding: '1rem' }}>
              <Text as="h4" style={{ margin: 0 }}>
                {collapsed ? '📁' : '📁 File Manager'}
              </Text>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                padding: '1rem 0',
              }}
            >
              <Button
                variant="ghost"
                icon={<FolderIcon />}
                style={{
                  justifyContent: collapsed ? 'center' : 'flex-start',
                  width: '100%',
                }}
              >
                {!collapsed && 'Documents'}
              </Button>
              <Button
                variant="ghost"
                icon={<StarIcon />}
                style={{
                  justifyContent: collapsed ? 'center' : 'flex-start',
                  width: '100%',
                }}
              >
                {!collapsed && 'Starred'}
              </Button>
              <Button
                variant="ghost"
                icon={<HeartIcon />}
                style={{
                  justifyContent: collapsed ? 'center' : 'flex-start',
                  width: '100%',
                }}
              >
                {!collapsed && 'Favorites'}
              </Button>
              <Button
                variant="ghost"
                icon={<BookmarkIcon />}
                style={{
                  justifyContent: collapsed ? 'center' : 'flex-start',
                  width: '100%',
                }}
              >
                {!collapsed && 'Bookmarks'}
              </Button>
            </div>
          </Panel.Sidebar>

          <Panel.Content>
            <div style={{ padding: '2rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '2rem',
                }}
              >
                <div>
                  <Text as="h2" style={{ margin: '0 0 0.5rem 0' }}>
                    File Manager
                  </Text>
                  <Text as="p" tone="secondary">
                    Sidebar is {collapsed ? 'collapsed' : 'expanded'}{' '}
                    (controlled state)
                  </Text>
                </div>
                <Button
                  onClick={() => setCollapsed(!collapsed)}
                  variant={collapsed ? 'primary' : 'secondary'}
                >
                  {collapsed ? 'Expand' : 'Collapse'} Sidebar
                </Button>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                  gap: '1rem',
                }}
              >
                {[
                  'Documents',
                  'Images',
                  'Videos',
                  'Music',
                  'Downloads',
                  'Projects',
                ].map((folder) => (
                  <Card key={folder} padding="lg" hoverable clickable>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '3rem', margin: '0 0 1rem 0' }}>
                        📁
                      </div>
                      <Text as="p" style={{ fontWeight: 500, margin: 0 }}>
                        {folder}
                      </Text>
                      <Text
                        as="p"
                        tone="secondary"
                        style={{ margin: '0.25rem 0 0 0' }}
                      >
                        {Math.floor(Math.random() * 50) + 1} items
                      </Text>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Panel.Content>
        </Panel>
      </div>
    )
  },
}

export const AllVariants: Story = {
  render: () => {
    const variants = [
      'elevated',
      'outlined',
      'filled',
      'ghost',
      'glass-frost',
      'glass-tint',
    ] as const

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '2rem',
          height: '100vh',
          overflow: 'auto',
          padding: '1rem',
        }}
      >
        {variants.map((variant) => (
          <div
            key={variant}
            style={{
              height: '350px',
              border: '1px solid var(--color-border-base)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
            }}
          >
            <Panel
              side="left"
              variant={variant}
              defaultCollapsed={false}
              sidebarWidth={180}
              collapsedWidth={50}
            >
              <Panel.Sidebar>
                <div style={{ padding: '0.75rem' }}>
                  <Text
                    as="p"
                    style={{
                      fontWeight: 600,
                      margin: 0,
                      textTransform: 'capitalize',
                    }}
                  >
                    {variant}
                  </Text>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                    padding: '0 0.5rem',
                  }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={<HomeIcon />}
                    style={{ justifyContent: 'flex-start' }}
                  >
                    Home
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={<UsersIcon />}
                    style={{ justifyContent: 'flex-start' }}
                  >
                    Users
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={<SettingsIcon />}
                    style={{ justifyContent: 'flex-start' }}
                  >
                    Settings
                  </Button>
                </div>
              </Panel.Sidebar>

              <Panel.Content>
                <div style={{ padding: '1rem' }}>
                  <Text
                    as="h4"
                    style={{
                      margin: '0 0 0.5rem 0',
                      textTransform: 'capitalize',
                    }}
                  >
                    {variant} Variant
                  </Text>
                  <Text
                    as="p"
                    tone="secondary"
                    style={{ margin: '0 0 1rem 0' }}
                  >
                    Demo of the {variant} sidebar variant
                  </Text>

                  <Card
                    variant={variant === 'ghost' ? 'outlined' : variant}
                    padding="md"
                  >
                    <Text as="p" style={{ margin: 0 }}>
                      Content area with matching design system
                    </Text>
                  </Card>
                </div>
              </Panel.Content>
            </Panel>
          </div>
        ))}
      </div>
    )
  },
}
