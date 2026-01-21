import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarGroup } from '../components/Display/Avatar'
import {
  UsersIcon,
  FolderIcon,
  SettingsIcon,
  SparklesIcon,
} from '../components/Icons'

const meta = {
  title: 'Display/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Avatar component for displaying user profile images, initials with auto-generated colors, or fallback icons.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Name for generating initials with unique colors',
    },
    src: {
      control: 'text',
      description: 'Image source URL',
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the image',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Size of the avatar',
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
      description: 'Shape of the avatar',
    },
    showStatus: {
      control: 'boolean',
      description: 'Whether to show status indicator',
    },
    status: {
      control: 'select',
      options: ['online', 'offline', 'away', 'busy'],
      description: 'Status indicator type',
    },
  },
  args: {
    size: 'md',
    shape: 'circle',
  },
} satisfies Meta<typeof Avatar>

const avatarGroupMeta = {
  title: 'Display/Avatar',
  component: AvatarGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'AvatarGroup component for displaying a collection of avatars with overflow handling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    max: {
      control: 'number',
      description: 'Maximum number of avatars to show before overflow',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Size of the avatars in the group',
    },
  },
  args: {
    max: 3,
    size: 'md',
  },
} satisfies Meta<typeof AvatarGroup>

export default meta
type Story = StoryObj<typeof meta>
type AvatarGroupStory = StoryObj<typeof avatarGroupMeta>

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    alt: 'John Doe',
    size: 'md',
  },
}

export const Sizes: Story = {
  name: 'Avatar Sizes',
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Avatar name="Alice Johnson" size="xs" />
      <Avatar name="Bob Smith" size="sm" />
      <Avatar name="Charlie Davis" size="md" />
      <Avatar name="Diana Prince" size="lg" />
      <Avatar name="Ethan Hunt" size="xl" />
      <Avatar name="Fiona Green" size="2xl" />
    </div>
  ),
}

export const WithProfileImages: Story = {
  name: 'With Profile Images',
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Avatar
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
        alt="John Doe"
        size="md"
      />
      <Avatar
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
        alt="Jane Smith"
        size="md"
      />
      <Avatar
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
        alt="Mike Wilson"
        size="md"
      />
      <Avatar
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
        alt="Sarah Johnson"
        size="md"
      />
    </div>
  ),
}

export const InitialsFallback: Story = {
  name: 'Initials Fallback',
  render: () => (
    <div>
      <div
        style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Avatar name="Alice Johnson" size="md" />
        <Avatar name="Bob Smith" size="md" />
        <Avatar name="Charlie Davis" size="md" />
        <Avatar name="Diana Prince" size="md" />
        <Avatar name="Ethan Hunt" size="md" />
        <Avatar name="Fiona Green" size="md" />
      </div>
      <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '12px' }}>
        Each avatar gets a unique color based on the name
      </p>
    </div>
  ),
}

export const StatusIndicators: Story = {
  name: 'Status Indicators',
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Avatar name="Alice Johnson" size="lg" showStatus status="online" />
      <Avatar name="Bob Smith" size="lg" showStatus status="offline" />
      <Avatar name="Charlie Davis" size="lg" showStatus status="away" />
      <Avatar name="Diana Prince" size="lg" showStatus status="busy" />
    </div>
  ),
}

export const Shapes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div>
        <p
          style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px' }}
        >
          Circle (Default)
        </p>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Avatar name="Alice Johnson" size="lg" shape="circle" />
          <Avatar
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
            alt="John"
            size="lg"
            shape="circle"
          />
        </div>
      </div>
      <div>
        <p
          style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px' }}
        >
          Square
        </p>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Avatar name="Bob Smith" size="lg" shape="square" />
          <Avatar
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
            alt="Jane"
            size="lg"
            shape="square"
          />
        </div>
      </div>
    </div>
  ),
}

export const IconAvatars: Story = {
  name: 'Icon Avatars (Groups/Teams)',
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Avatar icon={<UsersIcon />} size="md" />
      <Avatar icon={<FolderIcon />} size="md" />
      <Avatar icon={<SettingsIcon />} size="md" />
      <Avatar icon={<SparklesIcon />} size="md" />
    </div>
  ),
}

export const AvatarGroups: AvatarGroupStory = {
  name: 'Avatar Groups',
  parameters: {
    ...avatarGroupMeta.parameters,
  },
  argTypes: {
    ...avatarGroupMeta.argTypes,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Interactive Example */}
      <AvatarGroup max={args.max} size={args.size}>
        <Avatar name="Alice Johnson" size={args.size} />
        <Avatar name="Bob Smith" size={args.size} />
        <Avatar name="Charlie Davis" size={args.size} />
        <Avatar name="Diana Prince" size={args.size} />
        <Avatar name="Ethan Hunt" size={args.size} />
        <Avatar name="Fiona Green" size={args.size} />
      </AvatarGroup>
      <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>
        6 team members total (adjust max and size with controls)
      </p>
    </div>
  ),
}

export const RealWorldExamples: Story = {
  name: 'Real-World Examples',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* User Profile Card */}
      <div
        style={{
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          padding: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <Avatar
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
          alt="John Doe"
          size="lg"
          showStatus
          status="online"
        />
        <div style={{ flex: 1 }}>
          <h3
            style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: '600' }}
          >
            John Doe
          </h3>
          <p style={{ margin: '0', fontSize: '14px', color: '#6b7280' }}>
            Senior Developer
          </p>
        </div>
        <button
          style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            padding: '6px 12px',
            fontSize: '14px',
          }}
        >
          Message
        </button>
      </div>

      {/* Project Card */}
      <div
        style={{
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          padding: '16px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '16px',
          }}
        >
          <Avatar icon={<FolderIcon />} size="lg" shape="square" />
          <div>
            <h3
              style={{
                margin: '0 0 4px 0',
                fontSize: '16px',
                fontWeight: '600',
              }}
            >
              Design System
            </h3>
            <p style={{ margin: '0', fontSize: '14px', color: '#6b7280' }}>
              React component library
            </p>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '12px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', color: '#6b7280' }}>Team:</span>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <AvatarGroup max={5} size="sm">
                <Avatar
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                  alt="John"
                  size="sm"
                />
                <Avatar
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                  alt="Jane"
                  size="sm"
                />
                <Avatar name="Mike Wilson" size="sm" />
                <Avatar name="Sarah Johnson" size="sm" />
                <Avatar name="Tom Anderson" size="sm" />
                <Avatar name="Emma Davis" size="sm" />
                <Avatar name="Chris Martin" size="lg" />
              </AvatarGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
}
