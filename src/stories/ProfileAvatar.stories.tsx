import type { Meta, StoryObj } from '@storybook/react'
import { ProfileAvatar, Badge, Text, Card, VStack, HStack, Button } from '../'
import {
  SparklesIcon,
  CheckIcon,
  MessageIcon,
  UsersIcon,
} from '@/components/Icons'

const meta = {
  title: 'Display/ProfileAvatar',
  component: ProfileAvatar,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Enhanced profile avatar component with advanced features like decorative rings, edit buttons, status indicators, and badge support for verified/premium users. Larger sizes and more visual emphasis than standard avatars.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['md', 'lg', 'xl', '2xl'],
      description: 'Size of the profile avatar',
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
      description: 'Shape of the avatar',
    },
    ring: {
      control: 'boolean',
      description: 'Whether to show decorative ring',
    },
    ringColor: {
      control: 'select',
      options: ['brand', 'success', 'warning', 'error'],
      description: 'Color of the decorative ring',
    },
    editable: {
      control: 'boolean',
      description: 'Whether to show edit button',
    },
    showStatus: {
      control: 'boolean',
      description: 'Whether to show status indicator',
    },
    status: {
      control: 'select',
      options: ['online', 'offline', 'away', 'busy'],
      description: 'User status',
    },
  },
  args: {
    size: 'lg',
    shape: 'circle',
    ring: false,
    ringColor: 'brand',
    editable: false,
    showStatus: false,
    status: 'online',
  },
} satisfies Meta<typeof ProfileAvatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <ProfileAvatar
      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
      alt="Profile"
      {...args}
    />
  ),
}

export const ProfileSizes: Story = {
  render: () => {
    return (
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
          Profile Sizes
        </Text>
        <Card>
          <div
            style={{
              display: 'flex',
              gap: '24px',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <ProfileAvatar
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
              alt="Profile"
              size="md"
            />
            <ProfileAvatar
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop"
              alt="Profile"
              size="lg"
            />
            <ProfileAvatar
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
              alt="Profile"
              size="xl"
            />
            <ProfileAvatar
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
              alt="Profile"
              size="2xl"
            />
          </div>
        </Card>
      </div>
    )
  },
}

export const WithEditButton: Story = {
  render: () => {
    return (
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
          With Edit Button
        </Text>
        <Card>
          <div
            style={{
              display: 'flex',
              gap: '24px',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <ProfileAvatar
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
              alt="Profile"
              size="lg"
              editable
              onEdit={() => alert('Edit profile picture clicked')}
            />
            <ProfileAvatar
              name="Sarah Johnson"
              size="lg"
              editable
              onEdit={() => alert('Upload new photo clicked')}
            />
          </div>
        </Card>
      </div>
    )
  },
}

export const WithStatusRing: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '700px' }}>
      <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
        With Status Ring
      </Text>
      <Card>
        <div
          style={{
            display: 'flex',
            gap: '24px',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <ProfileAvatar
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
            alt="Online User"
            size="xl"
            ring
            ringColor="brand"
            showStatus
            status="online"
          />
          <ProfileAvatar
            name="Alice Johnson"
            size="xl"
            ring
            ringColor="success"
            showStatus
            status="online"
          />
          <ProfileAvatar
            name="Bob Smith"
            size="xl"
            ring
            ringColor="warning"
            showStatus
            status="away"
          />
        </div>
      </Card>
    </div>
  ),
}

export const WithBadge: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '600px' }}>
      <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
        With Badge
      </Text>
      <Card>
        <div
          style={{
            display: 'flex',
            gap: '24px',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <ProfileAvatar
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
            alt="Premium User"
            size="xl"
            badge={
              <Badge variant="ai" size="sm" icon={<SparklesIcon />}>
                Pro
              </Badge>
            }
          />
          <ProfileAvatar
            name="John Smith"
            size="xl"
            badge={
              <Badge variant="success" size="sm" icon={<CheckIcon />}>
                Verified
              </Badge>
            }
          />
        </div>
      </Card>
    </div>
  ),
}

export const SquareShape: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '500px' }}>
      <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
        Square Shape
      </Text>
      <Card>
        <div
          style={{
            display: 'flex',
            gap: '24px',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <ProfileAvatar
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
            alt="Profile"
            size="lg"
            shape="square"
          />
          <ProfileAvatar
            name="Brand Logo"
            size="lg"
            shape="square"
            ring
            ringColor="brand"
          />
        </div>
      </Card>
    </div>
  ),
}

export const ProfileHeaderExample: Story = {
  render: () => {
    return (
      <div style={{ width: '100%', maxWidth: '500px' }}>
        <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
          Profile Header Example
        </Text>
        <Card>
          <VStack
            gap="lg"
            style={{ alignItems: 'center', textAlign: 'center' }}
          >
            <ProfileAvatar
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
              alt="John Doe"
              size="2xl"
              ring
              ringColor="brand"
              editable
              onEdit={() => alert('Change profile picture clicked')}
              badge={
                <Badge variant="ai" icon={<SparklesIcon />}>
                  Pro
                </Badge>
              }
            />
            <VStack gap="xs" style={{ alignItems: 'center' }}>
              <Text size="lg" weight="semibold">
                John Doe
              </Text>
              <Text tone="secondary">Senior Product Designer</Text>
              <HStack gap="xs" style={{ marginTop: '8px' }}>
                <Badge variant="primary" size="sm">
                  Premium
                </Badge>
                <Badge variant="success" size="sm" dot>
                  Online
                </Badge>
              </HStack>
            </VStack>
            <HStack gap="sm">
              <Button variant="primary" icon={<MessageIcon />}>
                Message
              </Button>
              <Button variant="secondary" icon={<UsersIcon />}>
                Follow
              </Button>
            </HStack>
          </VStack>
        </Card>
      </div>
    )
  },
}

export const AllVariations: Story = {
  render: () => {
    return (
      <div style={{ width: '100%', maxWidth: '1000px' }}>
        <VStack gap="xl">
          <div>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Profile Sizes
            </Text>
            <Card>
              <div
                style={{
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <ProfileAvatar
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
                  alt="Profile"
                  size="md"
                />
                <ProfileAvatar
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop"
                  alt="Profile"
                  size="lg"
                />
                <ProfileAvatar
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
                  alt="Profile"
                  size="xl"
                />
                <ProfileAvatar
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
                  alt="Profile"
                  size="2xl"
                />
              </div>
            </Card>
          </div>

          <div>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              With Edit Button
            </Text>
            <Card>
              <div
                style={{
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <ProfileAvatar
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
                  alt="Profile"
                  size="lg"
                  editable
                  onEdit={() => alert('Edit profile picture clicked')}
                />
                <ProfileAvatar
                  name="Sarah Johnson"
                  size="lg"
                  editable
                  onEdit={() => alert('Upload new photo clicked')}
                />
              </div>
            </Card>
          </div>

          <div>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              With Status Ring & Badge
            </Text>
            <Card>
              <div
                style={{
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}
              >
                <ProfileAvatar
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
                  alt="Online User"
                  size="xl"
                  ring
                  ringColor="brand"
                  showStatus
                  status="online"
                />
                <ProfileAvatar
                  name="Alice Johnson"
                  size="xl"
                  ring
                  ringColor="success"
                  badge={
                    <Badge variant="success" size="sm" icon={<CheckIcon />}>
                      Verified
                    </Badge>
                  }
                />
                <ProfileAvatar
                  name="Bob Smith"
                  size="xl"
                  ring
                  ringColor="warning"
                  badge={
                    <Badge variant="ai" size="sm" icon={<SparklesIcon />}>
                      Pro
                    </Badge>
                  }
                />
              </div>
            </Card>
          </div>

          <div>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Complete Profile Header
            </Text>
            <Card>
              <VStack
                gap="lg"
                style={{ alignItems: 'center', textAlign: 'center' }}
              >
                <ProfileAvatar
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
                  alt="John Doe"
                  size="2xl"
                  ring
                  ringColor="brand"
                  editable
                  onEdit={() => alert('Change profile picture clicked')}
                  badge={
                    <Badge variant="ai" icon={<SparklesIcon />}>
                      Pro
                    </Badge>
                  }
                />
                <VStack gap="xs" style={{ alignItems: 'center' }}>
                  <Text size="lg" weight="semibold">
                    John Doe
                  </Text>
                  <Text tone="secondary">Senior Product Designer</Text>
                  <HStack gap="xs" style={{ marginTop: '8px' }}>
                    <Badge variant="primary" size="sm">
                      Premium
                    </Badge>
                    <Badge variant="success" size="sm" dot>
                      Online
                    </Badge>
                  </HStack>
                </VStack>
                <HStack gap="sm">
                  <Button variant="primary" icon={<MessageIcon />}>
                    Message
                  </Button>
                  <Button variant="secondary" icon={<UsersIcon />}>
                    Follow
                  </Button>
                </HStack>
              </VStack>
            </Card>
          </div>
        </VStack>
      </div>
    )
  },
}
