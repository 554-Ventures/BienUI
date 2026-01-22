/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Hotspot } from '../components/Interactive/Hotspot'
import { Card } from '../components/Display/Card'
import { Text } from '../components/Display/Text'
import { Button } from '../components/Interactive/Button'

const meta: Meta<typeof Hotspot> = {
  title: 'Interactive/Hotspot',
  component: Hotspot,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Interactive hotspot component with positioning, animations, and custom content. Perfect for highlighting features, creating guided tours, or adding interactive markers.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: [
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
        'center',
        'custom',
      ],
      description: 'Position of the hotspot relative to its container',
    },
    customPosition: {
      control: 'object',
      description: 'Custom position styles when position is "custom"',
    },
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
        'purple',
        'gold',
      ],
      description: 'Visual variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the hotspot',
    },
    label: {
      control: 'text',
      description: 'Optional label/tooltip text',
    },
    badge: {
      control: 'text',
      description: 'Optional number badge (for step indicators)',
    },
    tooltipPosition: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Tooltip position relative to hotspot',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler',
    },
    animation: {
      control: 'select',
      options: ['pulse', 'ping', 'ripple', 'none'],
      description: 'Animation style',
    },
    children: {
      control: 'text',
      description: 'Children to render inside (for custom content)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class',
    },
    style: {
      control: 'object',
      description: 'Additional styles',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    position: 'center',
    variant: 'primary',
    size: 'md',
    animation: 'pulse',
  },
}

export const WithLabel: Story = {
  args: {
    position: 'center',
    variant: 'primary',
    size: 'md',
    label: 'Click me!',
    tooltipPosition: 'top',
    animation: 'pulse',
  },
}

export const WithBadge: Story = {
  args: {
    position: 'center',
    variant: 'primary',
    size: 'md',
    badge: '1',
    label: 'Step 1: Get started',
    tooltipPosition: 'top',
    animation: 'pulse',
  },
}

export const Variants: Story = {
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
        Hotspot Variants
      </Text>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          padding: '20px',
        }}
      >
        <div style={{ position: 'relative' }}>
          <Text size="sm">Primary</Text>
          <Hotspot variant="primary" position="center" />
        </div>
        <div style={{ position: 'relative' }}>
          <Text size="sm">Secondary</Text>
          <Hotspot variant="secondary" position="center" />
        </div>
        <div style={{ position: 'relative' }}>
          <Text size="sm">Success</Text>
          <Hotspot variant="success" position="center" />
        </div>
        <div style={{ position: 'relative' }}>
          <Text size="sm">Warning</Text>
          <Hotspot variant="warning" position="center" />
        </div>
        <div style={{ position: 'relative' }}>
          <Text size="sm">Error</Text>
          <Hotspot variant="error" position="center" />
        </div>
        <div style={{ position: 'relative' }}>
          <Text size="sm">Purple</Text>
          <Hotspot variant="purple" position="center" />
        </div>
        <div style={{ position: 'relative' }}>
          <Text size="sm">Gold</Text>
          <Hotspot variant="gold" position="center" />
        </div>
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
        Hotspot Sizes
      </Text>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          gap: '40px',
          padding: '40px',
        }}
      >
        <div style={{ position: 'relative', textAlign: 'center' }}>
          <Text size="sm">Small</Text>
          <Hotspot variant="primary" size="sm" position="center" />
        </div>
        <div style={{ position: 'relative', textAlign: 'center' }}>
          <Text size="sm">Medium</Text>
          <Hotspot variant="primary" size="md" position="center" />
        </div>
        <div style={{ position: 'relative', textAlign: 'center' }}>
          <Text size="sm">Large</Text>
          <Hotspot variant="primary" size="lg" position="center" />
        </div>
      </div>
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const Animations: Story = {
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
        Animation Types
      </Text>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '40px',
          padding: '40px',
        }}
      >
        <div style={{ position: 'relative', textAlign: 'center' }}>
          <Text size="sm" style={{ marginBottom: '20px' }}>
            Pulse
          </Text>
          <Hotspot variant="primary" animation="pulse" position="center" />
        </div>
        <div style={{ position: 'relative', textAlign: 'center' }}>
          <Text size="sm" style={{ marginBottom: '20px' }}>
            Ping
          </Text>
          <Hotspot variant="success" animation="ping" position="center" />
        </div>
        <div style={{ position: 'relative', textAlign: 'center' }}>
          <Text size="sm" style={{ marginBottom: '20px' }}>
            Ripple
          </Text>
          <Hotspot variant="purple" animation="ripple" position="center" />
        </div>
        <div style={{ position: 'relative', textAlign: 'center' }}>
          <Text size="sm" style={{ marginBottom: '20px' }}>
            None
          </Text>
          <Hotspot variant="secondary" animation="none" position="center" />
        </div>
      </div>
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const Positioning: Story = {
  render: () => (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        minWidth: '500px',
      }}
    >
      <Text size="lg" weight="semibold">
        Hotspot Positioning
      </Text>
      <div
        style={{
          position: 'relative',
          width: '400px',
          height: '300px',
          backgroundColor: 'var(--color-bg-subtle)',
          borderRadius: 'var(--radius-md)',
          margin: '0 auto',
        }}
      >
        <Hotspot
          variant="primary"
          position="top-left"
          label="Top Left"
          tooltipPosition="bottom"
        />
        <Hotspot
          variant="success"
          position="top-right"
          label="Top Right"
          tooltipPosition="bottom"
        />
        <Hotspot
          variant="warning"
          position="center"
          label="Center"
          tooltipPosition="top"
        />
        <Hotspot
          variant="purple"
          position="bottom-left"
          label="Bottom Left"
          tooltipPosition="top"
        />
        <Hotspot
          variant="error"
          position="bottom-right"
          label="Bottom Right"
          tooltipPosition="top"
        />
      </div>
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const StepByStepTour: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(0)

    const steps = [
      {
        label: 'Welcome! Click to start the tour',
        position: 'center' as const,
      },
      { label: 'This is the header section', position: 'top-left' as const },
      { label: "Here's the main content area", position: 'center' as const },
      {
        label: 'And this is the action panel',
        position: 'bottom-right' as const,
      },
      { label: 'Tour complete! Click to restart', position: 'center' as const },
    ]

    const handleHotspotClick = () => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }

    return (
      <Card
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          minWidth: '600px',
        }}
      >
        <Text size="lg" weight="semibold">
          Interactive Product Tour
        </Text>

        <div
          style={{
            position: 'relative',
            width: '500px',
            height: '350px',
            backgroundColor: 'var(--color-bg-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '20px',
            margin: '0 auto',
          }}
        >
          {/* Mock UI Elements */}
          <div
            style={{
              height: '40px',
              backgroundColor: 'var(--color-bg-primary)',
              borderRadius: 'var(--radius-sm)',
              marginBottom: '16px',
            }}
          />

          <div
            style={{
              height: '200px',
              backgroundColor: 'var(--color-bg-primary)',
              borderRadius: 'var(--radius-sm)',
              marginBottom: '16px',
            }}
          />

          <div style={{ display: 'flex', gap: '8px' }}>
            <Button variant="primary" size="sm">
              Action
            </Button>
            <Button variant="secondary" size="sm">
              Cancel
            </Button>
          </div>

          {/* Hotspot */}
          <Hotspot
            variant="primary"
            position={steps[currentStep].position}
            badge={
              currentStep === steps.length - 1
                ? '✓'
                : (currentStep + 1).toString()
            }
            label={steps[currentStep].label}
            tooltipPosition="top"
            onClick={handleHotspotClick}
            animation="ripple"
          />
        </div>

        <div style={{ textAlign: 'center' }}>
          <Text size="sm" tone="tertiary">
            Step {currentStep + 1} of {steps.length}
          </Text>
        </div>
      </Card>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const FeatureHighlights: Story = {
  render: () => {
    const [clickedFeatures, setClickedFeatures] = useState<Set<string>>(
      new Set()
    )

    const handleFeatureClick = (feature: string) => {
      setClickedFeatures((prev) => {
        const newSet = new Set(prev)
        if (newSet.has(feature)) {
          newSet.delete(feature)
        } else {
          newSet.add(feature)
        }
        return newSet
      })
    }

    return (
      <Card
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          minWidth: '600px',
        }}
      >
        <Text size="lg" weight="semibold">
          Feature Discovery
        </Text>
        <Text size="sm" tone="tertiary">
          Click hotspots to discover new features
        </Text>

        <div
          style={{
            position: 'relative',
            width: '500px',
            height: '400px',
            backgroundImage:
              'linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-primary) 100%)',
            borderRadius: 'var(--radius-md)',
            padding: '20px',
            margin: '0 auto',
            overflow: 'hidden',
          }}
        >
          {/* AI Features */}
          <Hotspot
            variant={clickedFeatures.has('ai') ? 'success' : 'purple'}
            position="top-left"
            badge={clickedFeatures.has('ai') ? '✓' : 'AI'}
            label="Smart AI Assistant"
            tooltipPosition="right"
            onClick={() => handleFeatureClick('ai')}
            animation="pulse"
          />

          {/* Analytics */}
          <Hotspot
            variant={clickedFeatures.has('analytics') ? 'success' : 'gold'}
            position="top-right"
            badge={clickedFeatures.has('analytics') ? '✓' : '📊'}
            label="Advanced Analytics"
            tooltipPosition="left"
            onClick={() => handleFeatureClick('analytics')}
            animation="ping"
          />

          {/* Collaboration */}
          <Hotspot
            variant={clickedFeatures.has('collab') ? 'success' : 'primary'}
            position="center"
            badge={clickedFeatures.has('collab') ? '✓' : '👥'}
            label="Real-time Collaboration"
            tooltipPosition="top"
            onClick={() => handleFeatureClick('collab')}
            animation="ripple"
          />

          {/* Security */}
          <Hotspot
            variant={clickedFeatures.has('security') ? 'success' : 'warning'}
            position="bottom-left"
            badge={clickedFeatures.has('security') ? '✓' : '🔒'}
            label="Enterprise Security"
            tooltipPosition="top"
            onClick={() => handleFeatureClick('security')}
            animation="pulse"
          />

          {/* Integration */}
          <Hotspot
            variant={
              clickedFeatures.has('integration') ? 'success' : 'secondary'
            }
            position="bottom-right"
            badge={clickedFeatures.has('integration') ? '✓' : '🔗'}
            label="API Integrations"
            tooltipPosition="top"
            onClick={() => handleFeatureClick('integration')}
            animation="ping"
          />
        </div>

        <div style={{ textAlign: 'center' }}>
          <Text size="sm" tone="tertiary">
            Discovered {clickedFeatures.size} of 5 features
          </Text>
        </div>
      </Card>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}
