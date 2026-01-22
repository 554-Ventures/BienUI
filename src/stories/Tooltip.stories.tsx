import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProvider } from '../components/Interactive/Tooltip'
import { Card } from '../components/Display/Card'
import { Text } from '../components/Display/Text'
import { Button } from '../components/Interactive/Button'
import { InfoIcon, HelpCircleIcon, StarIcon, SettingsIcon } from 'lucide-react'

const meta: Meta<typeof Tooltip> = {
  title: 'Interactive/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Tooltip component built with Radix UI for accessible hover and focus interactions. Provides contextual information without cluttering the interface.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
  argTypes: {
    children: {
      control: false,
      description: 'The trigger element that shows the tooltip on hover/focus',
    },
    content: {
      control: 'text',
      description: 'The content to display in the tooltip',
    },
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'The side where the tooltip appears relative to the trigger',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'The alignment of the tooltip relative to the trigger',
    },
    delayDuration: {
      control: { type: 'number', min: 0, max: 2000, step: 100 },
      description: 'The duration in ms before the tooltip shows',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    content: 'This is a helpful tooltip',
    side: 'top',
    align: 'center',
    delayDuration: 200,
    children: <Button variant="primary">Hover me</Button>,
  },
}

export const WithIcon: Story = {
  args: {
    content: 'Get help and support',
    side: 'top',
    align: 'center',
    delayDuration: 200,
    children: (
      <Button variant="ghost" iconOnly icon={<HelpCircleIcon />}>
        Help
      </Button>
    ),
  },
}

export const LongContent: Story = {
  args: {
    content:
      'This is a longer tooltip message that provides more detailed information about the feature or action.',
    side: 'top',
    align: 'center',
    delayDuration: 200,
    children: <Button variant="secondary">Detailed info</Button>,
  },
}

export const Sides: Story = {
  render: () => (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        minWidth: '400px',
        padding: '60px',
      }}
    >
      <Text size="lg" weight="semibold" style={{ textAlign: 'center' }}>
        Tooltip Positions
      </Text>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          alignItems: 'center',
          justifyItems: 'center',
        }}
      >
        {/* Top row */}
        <div />
        <Tooltip content="Top tooltip" side="top">
          <Button variant="primary" size="sm">
            Top
          </Button>
        </Tooltip>
        <div />

        {/* Middle row */}
        <Tooltip content="Left tooltip" side="left">
          <Button variant="primary" size="sm">
            Left
          </Button>
        </Tooltip>
        <div style={{ padding: '20px' }}>
          <Text size="sm" tone="tertiary" style={{ textAlign: 'center' }}>
            Hover buttons
          </Text>
        </div>
        <Tooltip content="Right tooltip" side="right">
          <Button variant="primary" size="sm">
            Right
          </Button>
        </Tooltip>

        {/* Bottom row */}
        <div />
        <Tooltip content="Bottom tooltip" side="bottom">
          <Button variant="primary" size="sm">
            Bottom
          </Button>
        </Tooltip>
        <div />
      </div>
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const Alignments: Story = {
  render: () => (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        minWidth: '500px',
        padding: '40px',
      }}
    >
      <Text size="lg" weight="semibold">
        Tooltip Alignments
      </Text>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <Text size="sm" weight="medium" style={{ marginBottom: '8px' }}>
            Start Aligned
          </Text>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Tooltip content="Start aligned tooltip" side="top" align="start">
              <Button variant="primary" size="sm">
                Start
              </Button>
            </Tooltip>
            <Tooltip
              content="Start aligned tooltip"
              side="bottom"
              align="start"
            >
              <Button variant="secondary" size="sm">
                Start
              </Button>
            </Tooltip>
          </div>
        </div>

        <div>
          <Text size="sm" weight="medium" style={{ marginBottom: '8px' }}>
            Center Aligned (Default)
          </Text>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Tooltip content="Center aligned tooltip" side="top" align="center">
              <Button variant="primary" size="sm">
                Center
              </Button>
            </Tooltip>
            <Tooltip
              content="Center aligned tooltip"
              side="bottom"
              align="center"
            >
              <Button variant="secondary" size="sm">
                Center
              </Button>
            </Tooltip>
          </div>
        </div>

        <div>
          <Text size="sm" weight="medium" style={{ marginBottom: '8px' }}>
            End Aligned
          </Text>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Tooltip content="End aligned tooltip" side="top" align="end">
              <Button variant="primary" size="sm">
                End
              </Button>
            </Tooltip>
            <Tooltip content="End aligned tooltip" side="bottom" align="end">
              <Button variant="secondary" size="sm">
                End
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const DelayVariations: Story = {
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
        Different Delay Durations
      </Text>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Tooltip content="Instant tooltip" delayDuration={0}>
          <Button variant="primary" size="sm">
            Instant
          </Button>
        </Tooltip>
        <Tooltip content="Quick tooltip" delayDuration={100}>
          <Button variant="secondary" size="sm">
            Quick (100ms)
          </Button>
        </Tooltip>
        <Tooltip content="Normal tooltip" delayDuration={500}>
          <Button variant="accent" size="sm">
            Normal (500ms)
          </Button>
        </Tooltip>
        <Tooltip content="Slow tooltip" delayDuration={1000}>
          <Button variant="purple" size="sm">
            Slow (1000ms)
          </Button>
        </Tooltip>
      </div>
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const InteractiveElements: Story = {
  render: () => (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        minWidth: '500px',
      }}
    >
      <Text size="lg" weight="semibold">
        Tooltips on Various Elements
      </Text>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <Text size="sm" weight="medium" style={{ marginBottom: '8px' }}>
            Icon Buttons
          </Text>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Tooltip content="Settings and preferences">
              <Button variant="ghost" iconOnly icon={<SettingsIcon />}>
                Settings
              </Button>
            </Tooltip>
            <Tooltip content="Add to favorites">
              <Button variant="ghost" iconOnly icon={<StarIcon />}>
                Favorite
              </Button>
            </Tooltip>
            <Tooltip content="More information">
              <Button variant="ghost" iconOnly icon={<InfoIcon />}>
                Info
              </Button>
            </Tooltip>
            <Tooltip content="Get help and support">
              <Button variant="ghost" iconOnly icon={<HelpCircleIcon />}>
                Help
              </Button>
            </Tooltip>
          </div>
        </div>

        <div>
          <Text size="sm" weight="medium" style={{ marginBottom: '8px' }}>
            Text Elements
          </Text>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Tooltip content="This feature is currently in beta">
              <Text
                size="sm"
                style={{
                  textDecoration: 'underline dotted',
                  cursor: 'help',
                  width: 'fit-content',
                }}
              >
                Beta Feature ℹ️
              </Text>
            </Tooltip>

            <Tooltip content="Last updated: January 21, 2026">
              <Text
                size="sm"
                tone="tertiary"
                style={{
                  borderBottom: '1px dotted currentColor',
                  cursor: 'help',
                  width: 'fit-content',
                }}
              >
                Updated recently
              </Text>
            </Tooltip>
          </div>
        </div>

        <div>
          <Text size="sm" weight="medium" style={{ marginBottom: '8px' }}>
            Action Buttons
          </Text>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Tooltip content="Save your current progress">
              <Button variant="primary">Save</Button>
            </Tooltip>
            <Tooltip content="Discard changes and exit">
              <Button variant="ghost">Cancel</Button>
            </Tooltip>
            <Tooltip content="This action cannot be undone">
              <Button variant="danger">Delete</Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const FormTooltips: Story = {
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
        Form Field Tooltips
      </Text>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '4px',
            }}
          >
            <Text size="sm" weight="medium">
              Email Address
            </Text>
            <Tooltip content="We'll never share your email with third parties">
              <InfoIcon
                size={14}
                style={{ color: 'var(--color-text-muted)', cursor: 'help' }}
              />
            </Tooltip>
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '14px',
            }}
          />
        </div>

        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '4px',
            }}
          >
            <Text size="sm" weight="medium">
              Password
            </Text>
            <Tooltip content="Must be at least 8 characters with uppercase, lowercase, and numbers">
              <InfoIcon
                size={14}
                style={{ color: 'var(--color-text-muted)', cursor: 'help' }}
              />
            </Tooltip>
          </div>
          <input
            type="password"
            placeholder="Create a strong password"
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '14px',
            }}
          />
        </div>

        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '4px',
            }}
          >
            <Text size="sm" weight="medium">
              API Key
            </Text>
            <Tooltip
              content="Found in your account settings under Developer > API Keys"
              side="top"
              align="start"
            >
              <HelpCircleIcon
                size={14}
                style={{ color: 'var(--color-text-muted)', cursor: 'help' }}
              />
            </Tooltip>
          </div>
          <input
            type="text"
            placeholder="sk-..."
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '14px',
              fontFamily: 'monospace',
            }}
          />
        </div>
      </div>
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}
