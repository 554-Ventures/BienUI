/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Button } from '../components/Interactive/Button'
import { Card } from '../components/Display/Card'
import { Text } from '../components/Display/Text'
import {
  PlayIcon,
  DownloadIcon,
  HeartIcon,
  SettingsIcon,
  PlusIcon,
} from 'lucide-react'

const meta: Meta<typeof Button> = {
  title: 'Interactive/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A versatile button component with multiple variants, sizes, loading states, and icon support. Features both solid and gradient styling options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Button content/label',
    },
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'ghost',
        'danger',
        'accent',
        'purple',
        'blue',
        'teal',
        'gradient-primary',
        'gradient-teal',
        'gradient-purple',
        'gradient-accent',
        'gradient-blue',
        'gradient-rainbow',
      ],
      description: 'Visual variant of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in loading state',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button takes full width',
    },
    icon: {
      control: false,
      description: 'Icon to display in the button',
    },
    iconPosition: {
      control: 'select',
      options: ['start', 'end'],
      description: 'Position of the icon relative to text',
    },
    iconOnly: {
      control: 'boolean',
      description: 'Whether to show only the icon',
    },
    shape: {
      control: 'select',
      options: ['default', 'circle'],
      description: 'Shape of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler function',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
  },
}

export const WithIcon: Story = {
  args: {
    children: 'Download',
    variant: 'primary',
    size: 'md',
    icon: <DownloadIcon />,
    iconPosition: 'start',
  },
}

export const IconOnly: Story = {
  args: {
    children: 'Settings',
    variant: 'secondary',
    size: 'md',
    icon: <SettingsIcon />,
    iconOnly: true,
  },
}

export const Loading: Story = {
  args: {
    children: 'Processing...',
    variant: 'primary',
    size: 'md',
    loading: true,
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    size: 'md',
    disabled: true,
  },
}

export const FullWidth: Story = {
  render: (args) => (
    <Card style={{ width: '400px' }}>
      <Button {...args} />
    </Card>
  ),
  args: {
    children: 'Full Width Button',
    variant: 'primary',
    size: 'md',
    fullWidth: true,
  },
}

export const SolidVariants: Story = {
  render: () => (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        minWidth: '400px',
      }}
    >
      <Text size="lg" weight="semibold">
        Solid Button Variants
      </Text>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="accent">Accent</Button>
        <Button variant="purple">Purple</Button>
        <Button variant="blue">Blue</Button>
        <Button variant="teal">Teal</Button>
      </div>
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const GradientVariants: Story = {
  render: () => (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        minWidth: '400px',
      }}
    >
      <Text size="lg" weight="semibold">
        Gradient Button Variants
      </Text>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
        <Button variant="gradient-primary">Primary</Button>
        <Button variant="gradient-teal">Teal</Button>
        <Button variant="gradient-purple">Purple</Button>
        <Button variant="gradient-accent">Accent</Button>
        <Button variant="gradient-blue">Blue</Button>
        <Button variant="gradient-rainbow">Rainbow</Button>
      </div>
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const Sizes: Story = {
  render: () => (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        minWidth: '400px',
      }}
    >
      <Text size="lg" weight="semibold">
        Button Sizes
      </Text>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Button variant="primary" size="sm">
          Small
        </Button>
        <Button variant="primary" size="md">
          Medium
        </Button>
        <Button variant="primary" size="lg">
          Large
        </Button>
      </div>
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const IconButtons: Story = {
  render: () => (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        minWidth: '400px',
      }}
    >
      <Text size="lg" weight="semibold">
        Icon Button Variations
      </Text>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <Text size="sm" weight="medium" style={{ marginBottom: '8px' }}>
            With Text
          </Text>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Button variant="primary" icon={<PlayIcon />}>
              Play
            </Button>
            <Button
              variant="secondary"
              icon={<DownloadIcon />}
              iconPosition="end"
            >
              Download
            </Button>
            <Button variant="accent" icon={<HeartIcon />}>
              Like
            </Button>
          </div>
        </div>

        <div>
          <Text size="sm" weight="medium" style={{ marginBottom: '8px' }}>
            Icon Only
          </Text>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Button variant="primary" icon={<PlayIcon />} iconOnly>
              Play
            </Button>
            <Button variant="secondary" icon={<SettingsIcon />} iconOnly>
              Settings
            </Button>
            <Button variant="accent" icon={<PlusIcon />} iconOnly>
              Add
            </Button>
          </div>
        </div>

        <div>
          <Text size="sm" weight="medium" style={{ marginBottom: '8px' }}>
            Circle Shape
          </Text>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Button
              variant="primary"
              icon={<PlayIcon />}
              iconOnly
              shape="circle"
            >
              Play
            </Button>
            <Button
              variant="purple"
              icon={<HeartIcon />}
              iconOnly
              shape="circle"
            >
              Like
            </Button>
            <Button
              variant="gradient-rainbow"
              icon={<PlusIcon />}
              iconOnly
              shape="circle"
            >
              Add
            </Button>
          </div>
        </div>
      </div>
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const LoadingStates: Story = {
  render: () => {
    const [loadingStates, setLoadingStates] = useState({
      primary: false,
      secondary: false,
      icon: false,
    })

    const toggleLoading = (key: keyof typeof loadingStates) => {
      setLoadingStates((prev) => ({ ...prev, [key]: !prev[key] }))
    }

    return (
      <Card
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          minWidth: '400px',
        }}
      >
        <Text size="lg" weight="semibold">
          Loading States Demo
        </Text>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Button
            variant="primary"
            loading={loadingStates.primary}
            onClick={() => toggleLoading('primary')}
          >
            {loadingStates.primary ? 'Processing...' : 'Click to Load'}
          </Button>

          <Button
            variant="secondary"
            loading={loadingStates.secondary}
            onClick={() => toggleLoading('secondary')}
          >
            {loadingStates.secondary ? 'Saving...' : 'Save Document'}
          </Button>

          <Button
            variant="accent"
            icon={<DownloadIcon />}
            loading={loadingStates.icon}
            onClick={() => toggleLoading('icon')}
          >
            {loadingStates.icon ? 'Downloading...' : 'Download File'}
          </Button>
        </div>
      </Card>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const ActionBar: Story = {
  render: () => {
    const [liked, setLiked] = useState(false)
    const [downloaded, setDownloaded] = useState(false)

    return (
      <Card
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          minWidth: '500px',
        }}
      >
        <Text size="lg" weight="semibold">
          Media Player Actions
        </Text>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px',
            backgroundColor: 'var(--color-bg-subtle)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button
              variant="primary"
              icon={<PlayIcon />}
              iconOnly
              shape="circle"
            >
              Play
            </Button>
            <Button variant="secondary" icon={<SettingsIcon />} iconOnly>
              Settings
            </Button>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <Button
              variant={liked ? 'danger' : 'ghost'}
              icon={<HeartIcon />}
              onClick={() => setLiked(!liked)}
            >
              {liked ? 'Liked' : 'Like'}
            </Button>
            <Button
              variant={downloaded ? 'accent' : 'secondary'}
              icon={<DownloadIcon />}
              onClick={() => setDownloaded(!downloaded)}
            >
              {downloaded ? 'Downloaded' : 'Download'}
            </Button>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <Button variant="gradient-primary" fullWidth>
            Subscribe
          </Button>
          <Button variant="gradient-rainbow" fullWidth>
            Share
          </Button>
        </div>
      </Card>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}
