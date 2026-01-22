/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Header, HeaderNavItem } from '../components/Navigation/Header'
import { Card } from '../components/Display/Card'
import { Text } from '../components/Display/Text'
import { Button } from '../components/Interactive/Button'
import { VStack, HStack } from '../components/Layout/Stack'
import { Input } from '../components/Forms/Input'
import { Avatar } from '../components/Display/Avatar'

const meta: Meta<typeof Header> = {
  title: 'Navigation/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A responsive header component with logo, navigation, actions, and mobile menu support. Features multiple visual variants including transparent, gradient, and glass effects.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    logo: {
      control: 'object',
      description: 'Custom logo element to display',
    },
    logoText: {
      control: 'text',
      description: 'Text to display as logo when no custom logo is provided',
    },
    logoHref: {
      control: 'text',
      description: 'URL for logo link',
    },
    navigation: {
      control: 'object',
      description: 'Array of navigation items',
      table: {
        type: { summary: 'HeaderNavItem[]' },
      },
    },
    actions: {
      control: 'object',
      description: 'Action elements to display on the right side',
    },
    variant: {
      control: 'select',
      options: [
        'default',
        'transparent',
        'gradient',
        'glass-frost',
        'glass-tint',
      ],
      description: 'Visual style variant of the header',
    },
    sticky: {
      control: 'boolean',
      description: 'Whether header should stick to top when scrolling',
    },
    bordered: {
      control: 'boolean',
      description: 'Whether to show bottom border',
    },
    children: {
      control: 'object',
      description: 'Custom content to display in header',
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
const sampleNavigation: HeaderNavItem[] = [
  { label: 'Home', href: '/', active: true },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const LogoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="currentColor" />
    <rect x="8" y="8" width="16" height="16" rx="4" fill="white" />
    <rect x="12" y="12" width="8" height="8" rx="2" fill="currentColor" />
  </svg>
)

const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
)

const NotificationIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
)

export const Default: Story = {
  args: {
    logoText: 'BienUI',
    navigation: sampleNavigation,
    actions: (
      <HStack gap="sm">
        <Button variant="secondary" size="sm">
          Sign In
        </Button>
        <Button variant="primary" size="sm">
          Sign Up
        </Button>
      </HStack>
    ),
  },
}

export const WithCustomLogo: Story = {
  args: {
    logo: (
      <HStack gap="sm" align="center">
        <LogoIcon />
        <Text as="span" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
          BienUI
        </Text>
      </HStack>
    ),
    navigation: sampleNavigation,
    actions: (
      <HStack gap="sm">
        <Button variant="secondary" size="sm">
          Login
        </Button>
      </HStack>
    ),
  },
}

export const VariantShowcase: Story = {
  render: () => {
    const navigation = [
      { label: 'Home', href: '/', active: true },
      { label: 'Docs', href: '/docs' },
      { label: 'Components', href: '/components' },
    ]

    const actions = (
      <HStack gap="sm">
        <Button variant="secondary" size="sm">
          Login
        </Button>
      </HStack>
    )

    return (
      <VStack gap="lg">
        <Text as="h3" style={{ margin: 0, padding: '0 1rem' }}>
          Header Variants
        </Text>

        <VStack gap="md">
          <VStack gap="xs">
            <Text as="h5" style={{ margin: 0, padding: '0 1rem' }}>
              Default
            </Text>
            <Header
              logoText="BienUI"
              navigation={navigation}
              actions={actions}
              variant="default"
            />
          </VStack>

          <VStack gap="xs">
            <Text as="h5" style={{ margin: 0, padding: '0 1rem' }}>
              Transparent
            </Text>
            <div style={{ backgroundColor: '#f0f0f0', padding: '1rem 0' }}>
              <Header
                logoText="BienUI"
                navigation={navigation}
                actions={actions}
                variant="transparent"
              />
            </div>
          </VStack>

          <VStack gap="xs">
            <Text as="h5" style={{ margin: 0, padding: '0 1rem' }}>
              Gradient
            </Text>
            <Header
              logoText="BienUI"
              navigation={navigation}
              actions={actions}
              variant="gradient"
            />
          </VStack>

          <VStack gap="xs">
            <Text as="h5" style={{ margin: 0, padding: '0 1rem' }}>
              Glass Frost
            </Text>
            <div
              style={{
                backgroundImage:
                  'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
                padding: '1rem 0',
              }}
            >
              <Header
                logoText="BienUI"
                navigation={navigation}
                actions={actions}
                variant="glass-frost"
              />
            </div>
          </VStack>

          <VStack gap="xs">
            <Text as="h5" style={{ margin: 0, padding: '0 1rem' }}>
              Glass Tint
            </Text>
            <div
              style={{
                backgroundImage:
                  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '1rem 0',
              }}
            >
              <Header
                logoText="BienUI"
                navigation={navigation}
                actions={actions}
                variant="glass-tint"
              />
            </div>
          </VStack>
        </VStack>
      </VStack>
    )
  },
}

export const WithSearchAndProfile: Story = {
  args: {
    logoText: 'Dashboard',
    navigation: [
      { label: 'Overview', href: '/overview', active: true },
      { label: 'Analytics', href: '/analytics' },
      { label: 'Reports', href: '/reports' },
      { label: 'Settings', href: '/settings' },
    ],
    actions: (
      <HStack gap="sm" align="center">
        <Input
          placeholder="Search..."
          startElement={<SearchIcon />}
          style={{ width: '200px' }}
        />
        <Button variant="ghost" size="sm">
          <NotificationIcon />
        </Button>
        <Avatar
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
          alt="User"
          size="sm"
        />
      </HStack>
    ),
  },
}

export const InteractiveDemo: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('home')
    const [notifications, setNotifications] = useState(3)

    const navigation: HeaderNavItem[] = [
      {
        label: 'Home',
        active: activeTab === 'home',
        onClick: () => setActiveTab('home'),
      },
      {
        label: 'Products',
        active: activeTab === 'products',
        onClick: () => setActiveTab('products'),
      },
      {
        label: 'Services',
        active: activeTab === 'services',
        onClick: () => setActiveTab('services'),
      },
      {
        label: 'About',
        active: activeTab === 'about',
        onClick: () => setActiveTab('about'),
      },
    ]

    const handleNotificationClick = () => {
      setNotifications(0)
    }

    return (
      <VStack gap="lg">
        <Header
          logo={
            <HStack gap="sm" align="center">
              <LogoIcon />
              <Text
                as="span"
                style={{ fontSize: '1.25rem', fontWeight: 'bold' }}
              >
                Interactive Demo
              </Text>
            </HStack>
          }
          navigation={navigation}
          actions={
            <HStack gap="sm" align="center">
              <div style={{ position: 'relative' }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleNotificationClick}
                >
                  <NotificationIcon />
                </Button>
                {notifications > 0 && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-2px',
                      right: '-2px',
                      backgroundColor: 'var(--color-error)',
                      color: 'white',
                      borderRadius: '50%',
                      width: '18px',
                      height: '18px',
                      fontSize: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {notifications}
                  </span>
                )}
              </div>
              <Button variant="primary" size="sm">
                Get Started
              </Button>
            </HStack>
          }
          variant="default"
          sticky
          bordered
        />

        <Card padding="xl" style={{ margin: '1rem', minHeight: '400px' }}>
          <VStack gap="md">
            <Text as="h2" style={{ margin: 0 }}>
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Page
            </Text>
            <Text
              as="p"
              style={{ margin: 0, color: 'var(--color-text-secondary)' }}
            >
              This is the content for the {activeTab} section. Click on
              different navigation items to see the active state change. Click
              the notification bell to clear the badge.
            </Text>

            <Card padding="md" variant="outlined">
              <VStack gap="sm">
                <Text as="h4" style={{ margin: 0 }}>
                  Interactive Elements
                </Text>
                <HStack gap="sm">
                  <Button
                    size="sm"
                    onClick={() =>
                      setNotifications(Math.floor(Math.random() * 9) + 1)
                    }
                  >
                    Add Notifications
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => setNotifications(0)}
                  >
                    Clear Notifications
                  </Button>
                </HStack>
                <Text as="p" style={{ margin: 0, fontSize: '0.875rem' }}>
                  Current notifications: {notifications}
                </Text>
              </VStack>
            </Card>
          </VStack>
        </Card>
      </VStack>
    )
  },
}

export const MobileResponsive: Story = {
  render: () => {
    return (
      <VStack gap="lg">
        <Text as="h3" style={{ margin: 0, padding: '0 1rem' }}>
          Mobile Responsive
        </Text>
        <Text
          as="p"
          style={{
            margin: 0,
            padding: '0 1rem',
            color: 'var(--color-text-secondary)',
          }}
        >
          Resize your browser window to see the mobile menu in action.
        </Text>

        <Header
          logoText="Mobile Demo"
          navigation={[
            { label: 'Home', href: '/', active: true },
            { label: 'Products', href: '/products' },
            { label: 'Services', href: '/services' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
            { label: 'Blog', href: '/blog' },
          ]}
          actions={
            <HStack gap="sm">
              <Input
                placeholder="Search..."
                startElement={<SearchIcon />}
                style={{ width: '160px' }}
              />
              <Button variant="primary" size="sm">
                Sign Up
              </Button>
            </HStack>
          }
          variant="default"
        />

        <Card padding="xl" style={{ margin: '1rem' }}>
          <VStack gap="md">
            <Text as="h4" style={{ margin: 0 }}>
              Mobile Menu Features
            </Text>
            <VStack gap="sm" align="start">
              <Text as="p" style={{ margin: 0 }}>
                • Hamburger menu icon on mobile devices
              </Text>
              <Text as="p" style={{ margin: 0 }}>
                • Slide-down navigation panel
              </Text>
              <Text as="p" style={{ margin: 0 }}>
                • Actions moved to mobile menu
              </Text>
              <Text as="p" style={{ margin: 0 }}>
                • Custom children supported in mobile view
              </Text>
              <Text as="p" style={{ margin: 0 }}>
                • Accessible keyboard navigation
              </Text>
            </VStack>
          </VStack>
        </Card>
      </VStack>
    )
  },
}

export const WithCustomChildren: Story = {
  args: {
    logoText: 'BienUI',
    navigation: [
      { label: 'Home', href: '/', active: true },
      { label: 'Docs', href: '/docs' },
      { label: 'Examples', href: '/examples' },
    ],
    children: (
      <HStack gap="md" align="center">
        <Text
          as="span"
          style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}
        >
          v2.1.0
        </Text>
        <Button variant="ghost" size="sm">
          ⭐ Star
        </Button>
      </HStack>
    ),
    actions: (
      <HStack gap="sm">
        <Button variant="secondary" size="sm">
          Login
        </Button>
        <Button variant="primary" size="sm">
          Sign Up
        </Button>
      </HStack>
    ),
  },
}

export const StickyHeader: Story = {
  render: () => {
    return (
      <div style={{ height: '150vh' }}>
        <Header
          logoText="Sticky Header"
          navigation={[
            { label: 'Home', href: '/', active: true },
            { label: 'About', href: '/about' },
            { label: 'Services', href: '/services' },
            { label: 'Contact', href: '/contact' },
          ]}
          actions={
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          }
          sticky
          variant="default"
        />

        <Card padding="xl" style={{ margin: '1rem', minHeight: '120vh' }}>
          <VStack gap="md">
            <Text as="h2" style={{ margin: 0 }}>
              Sticky Header Demo
            </Text>
            <Text as="p" style={{ margin: 0 }}>
              Scroll down to see the header stick to the top of the viewport.
            </Text>

            {Array.from({ length: 20 }, (_, i) => (
              <Card key={i} padding="md" variant="outlined">
                <Text as="h4" style={{ margin: 0 }}>
                  Section {i + 1}
                </Text>
                <Text as="p" style={{ margin: 0 }}>
                  This is some content to demonstrate scrolling. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </Card>
            ))}
          </VStack>
        </Card>
      </div>
    )
  },
}

export const MinimalHeader: Story = {
  args: {
    logoText: 'Minimal',
    variant: 'transparent',
    bordered: false,
  },
}
