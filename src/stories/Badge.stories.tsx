import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '../components/Display/Badge'
import { Star, Check, AlertCircle, Zap } from 'lucide-react'

const meta = {
  title: 'Display/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Badge component for displaying status, categories, or notifications with various styles and options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'success',
        'error',
        'warning',
        'info',
        'neutral',
        'primary',
        'ai',
      ],
      description: 'Visual style variant of the badge',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the badge',
    },
    dot: {
      control: 'boolean',
      description: 'Show a dot indicator',
    },
    outline: {
      control: 'boolean',
      description: 'Use outline style instead of filled',
    },
    icon: {
      control: false,
      description: 'Optional icon to display',
    },
  },
  args: {
    children: 'Badge',
    variant: 'neutral',
    size: 'md',
    dot: false,
    outline: false,
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Default Badge',
  },
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="ai">AI</Badge>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge variant="success" icon={<Check size={12} />}>
        Completed
      </Badge>
      <Badge variant="warning" icon={<AlertCircle size={12} />}>
        Warning
      </Badge>
      <Badge variant="primary" icon={<Star size={12} />}>
        Featured
      </Badge>
      <Badge variant="ai" icon={<Zap size={12} />}>
        AI Generated
      </Badge>
    </div>
  ),
}

export const WithDot: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge variant="success" dot>
        Online
      </Badge>
      <Badge variant="error" dot>
        Offline
      </Badge>
      <Badge variant="warning" dot>
        Away
      </Badge>
      <Badge variant="info" dot>
        Busy
      </Badge>
    </div>
  ),
}

export const Outline: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge variant="primary" outline>
        Primary
      </Badge>
      <Badge variant="success" outline>
        Success
      </Badge>
      <Badge variant="error" outline>
        Error
      </Badge>
      <Badge variant="warning" outline>
        Warning
      </Badge>
    </div>
  ),
}

export const AI: Story = {
  args: {
    children: 'AI Generated',
    variant: 'ai',
  },
}

export const AllCombinations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h4>Filled Variants</h4>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {(
            [
              'success',
              'error',
              'warning',
              'info',
              'neutral',
              'primary',
              'ai',
            ] as const
          ).map((variant) => (
            <Badge key={variant} variant={variant}>
              {variant}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h4>Outline Variants</h4>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {(
            [
              'success',
              'error',
              'warning',
              'info',
              'neutral',
              'primary',
              'ai',
            ] as const
          ).map((variant) => (
            <Badge key={variant} variant={variant} outline>
              {variant}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h4>With Dots</h4>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {(['success', 'error', 'warning', 'info'] as const).map((variant) => (
            <Badge key={variant} variant={variant} dot>
              {variant}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h4>Sizes</h4>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Badge size="sm" variant="primary">
            Small
          </Badge>
          <Badge size="md" variant="primary">
            Medium
          </Badge>
          <Badge size="lg" variant="primary">
            Large
          </Badge>
        </div>
      </div>
    </div>
  ),
}
