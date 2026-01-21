import type { Meta, StoryObj } from '@storybook/react'
import { Meter, CircularMeter } from '../components/Display/Meter'
import { Text } from '../components/Display/Text'
import { Card } from '../components/Display/Card'
import { Grid } from '../components/Layout/Grid'
import { VStack } from '../components/Layout/Stack'

const meta = {
  title: 'Display/Meter',
  component: Meter,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Visual indicators for progress, levels, and measurements with linear and circular displays. Supports various color variants, gradient styles, custom formatting, and both linear and circular layouts.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current value',
    },
    max: {
      control: { type: 'number', min: 1 },
      description: 'Maximum value',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the meter',
    },
    variant: {
      control: 'select',
      options: [
        'default',
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
        'gradient-primary',
        'gradient-purple',
      ],
      description: 'Color variant',
    },
    label: {
      control: 'text',
      description: 'Label text for the meter',
    },
    showValue: {
      control: 'boolean',
      description: 'Whether to show the value',
    },
  },
  args: {
    value: 75,
    max: 100,
    size: 'md',
    variant: 'default',
    label: 'Progress',
    showValue: true,
  },
} satisfies Meta<typeof Meter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div style={{ width: '300px' }}>
      <Meter {...args} />
    </div>
  ),
}

export const BasicMeters: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '500px' }}>
      <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
        Basic Meters
      </Text>
      <Card>
        <VStack gap="md">
          <Meter value={75} label="Default" showValue />
          <Meter value={60} label="In Progress" showValue />
          <Meter value={100} label="Complete" showValue />
          <Meter value={30} label="Started" showValue />
        </VStack>
      </Card>
    </div>
  ),
}

export const ColorVariants: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '500px' }}>
      <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
        Color Variants
      </Text>
      <Card>
        <VStack gap="md">
          <Meter value={75} variant="primary" label="Primary" showValue />
          <Meter value={65} variant="secondary" label="Secondary" showValue />
          <Meter value={90} variant="success" label="Success" showValue />
          <Meter value={50} variant="warning" label="Warning" showValue />
          <Meter value={25} variant="error" label="Error" showValue />
        </VStack>
      </Card>
    </div>
  ),
}

export const GradientMeters: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '500px' }}>
      <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
        Gradient Meters
      </Text>
      <Card>
        <VStack gap="md">
          <Meter
            value={80}
            variant="gradient-primary"
            label="Primary Gradient"
            showValue
          />
          <Meter
            value={70}
            variant="gradient-purple"
            label="Purple Gradient"
            showValue
          />
        </VStack>
      </Card>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '500px' }}>
      <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
        Sizes
      </Text>
      <Card>
        <VStack gap="md">
          <Meter value={75} size="sm" label="Small" showValue />
          <Meter value={75} size="md" label="Medium" showValue />
          <Meter value={75} size="lg" label="Large" showValue />
        </VStack>
      </Card>
    </div>
  ),
}

export const CustomFormatting: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '800px' }}>
      <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
        Custom Formatting
      </Text>
      <Grid columns={2} gap="md">
        <Card>
          <VStack gap="md">
            <Meter
              value={85}
              label="Storage Used"
              showValue
              valueFormatter={(val) => `${val} GB`}
            />
            <Meter
              value={12}
              max={24}
              label="Hours Worked"
              showValue
              valueFormatter={(val) => `${val}h`}
            />
            <Meter
              value={450}
              max={1000}
              label="Points Earned"
              showValue
              valueFormatter={(val) => `${val} pts`}
            />
          </VStack>
        </Card>

        <Card>
          <VStack gap="md">
            <Meter
              value={67.5}
              label="Battery Level"
              variant="success"
              showValue
              valueFormatter={(val) => `${val}%`}
            />
            <Meter
              value={8.5}
              max={10}
              label="Rating"
              variant="warning"
              showValue
              valueFormatter={(val) => `${val.toFixed(1)}/10`}
            />
            <Meter
              value={3.2}
              max={5}
              label="Performance"
              variant="gradient-primary"
              showValue
              valueFormatter={(val) => `${val.toFixed(1)}★`}
            />
          </VStack>
        </Card>
      </Grid>
    </div>
  ),
}

export const CircularMeters: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '600px' }}>
      <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
        Circular Meters
      </Text>
      <Card>
        <div
          style={{
            display: 'flex',
            gap: '32px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <CircularMeter value={75} label="Progress" />
          <CircularMeter value={60} label="Complete" variant="primary" />
          <CircularMeter value={90} label="Success" variant="success" />
          <CircularMeter value={45} label="Warning" variant="warning" />
          <CircularMeter value={25} label="Error" variant="error" />
        </div>
      </Card>
    </div>
  ),
}

export const CircularSizes: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '700px' }}>
      <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
        Circular Sizes
      </Text>
      <Card>
        <div
          style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <CircularMeter value={75} label="Small" size={80} strokeWidth={6} />
          <CircularMeter value={75} label="Medium" size={120} strokeWidth={8} />
          <CircularMeter value={75} label="Large" size={160} strokeWidth={10} />
        </div>
      </Card>
    </div>
  ),
}

export const CircularGradients: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '500px' }}>
      <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
        Circular Gradients
      </Text>
      <Card>
        <div
          style={{
            display: 'flex',
            gap: '32px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <CircularMeter
            value={85}
            variant="gradient-primary"
            label="Downloads"
            valueFormatter={(val) => `${Math.round(val)}%`}
          />
          <CircularMeter
            value={70}
            variant="gradient-purple"
            label="Completion"
            valueFormatter={(val) => `${Math.round(val)}%`}
          />
        </div>
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <defs>
            <linearGradient
              id="gradient-primary"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#1d75bc" />
              <stop offset="100%" stopColor="#155a94" />
            </linearGradient>
            <linearGradient
              id="gradient-purple"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#a94f9e" />
              <stop offset="100%" stopColor="#8b3f85" />
            </linearGradient>
          </defs>
        </svg>
      </Card>
    </div>
  ),
}

export const RealWorldExamples: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '800px' }}>
      <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
        Real-world Examples
      </Text>
      <Grid columns={2} gap="md">
        {/* Dashboard Stats */}
        <Card title="Dashboard Metrics">
          <VStack gap="md">
            <Meter
              value={1250}
              max={2000}
              label="Daily Goal"
              variant="gradient-primary"
              showValue
              valueFormatter={(val) => `${val} steps`}
            />
            <Meter
              value={85}
              label="Task Completion"
              variant="success"
              showValue
              valueFormatter={(val) => `${val}%`}
            />
            <Meter
              value={32}
              max={50}
              label="API Calls"
              variant="warning"
              showValue
            />
          </VStack>
        </Card>

        {/* Circular Dashboard */}
        <Card title="Performance Overview">
          <div
            style={{
              display: 'flex',
              gap: '24px',
              justifyContent: 'space-around',
            }}
          >
            <CircularMeter
              value={88}
              variant="success"
              label="Uptime"
              size={100}
            />
            <CircularMeter
              value={67}
              variant="warning"
              label="Speed"
              size={100}
            />
            <CircularMeter
              value={92}
              variant="primary"
              label="Quality"
              size={100}
            />
          </div>
        </Card>
      </Grid>
    </div>
  ),
}

export const SkillsProficiency: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '500px' }}>
      <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
        Skills & Proficiency
      </Text>
      <Card title="Technical Skills">
        <VStack gap="md">
          <Meter
            value={95}
            label="React"
            variant="gradient-primary"
            showValue
          />
          <Meter
            value={88}
            label="TypeScript"
            variant="gradient-primary"
            showValue
          />
          <Meter value={92} label="CSS" variant="gradient-purple" showValue />
          <Meter
            value={78}
            label="Node.js"
            variant="gradient-purple"
            showValue
          />
          <Meter
            value={85}
            label="Design Systems"
            variant="gradient-primary"
            showValue
          />
        </VStack>
      </Card>
    </div>
  ),
}

export const AllVariations: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '1000px' }}>
      <VStack gap="xl">
        <div>
          <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
            Basic Meters
          </Text>
          <Card>
            <VStack gap="md">
              <Meter value={75} label="Default" showValue />
              <Meter value={60} label="In Progress" showValue />
              <Meter value={100} label="Complete" showValue />
              <Meter value={30} label="Started" showValue />
            </VStack>
          </Card>
        </div>

        <div>
          <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
            Color Variants
          </Text>
          <Card>
            <VStack gap="md">
              <Meter value={75} variant="primary" label="Primary" showValue />
              <Meter value={90} variant="success" label="Success" showValue />
              <Meter value={50} variant="warning" label="Warning" showValue />
              <Meter value={25} variant="error" label="Error" showValue />
            </VStack>
          </Card>
        </div>

        <div>
          <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
            Gradient Meters
          </Text>
          <Card>
            <VStack gap="md">
              <Meter
                value={80}
                variant="gradient-primary"
                label="Primary Gradient"
                showValue
              />
              <Meter
                value={70}
                variant="gradient-purple"
                label="Purple Gradient"
                showValue
              />
            </VStack>
          </Card>
        </div>

        <div>
          <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
            Custom Formatting & Circular Meters
          </Text>
          <Grid columns={2} gap="md">
            <Card title="Custom Units">
              <VStack gap="md">
                <Meter
                  value={85}
                  label="Storage Used"
                  showValue
                  valueFormatter={(val) => `${val} GB`}
                />
                <Meter
                  value={12}
                  max={24}
                  label="Hours Worked"
                  showValue
                  valueFormatter={(val) => `${val}h`}
                />
                <Meter
                  value={3.2}
                  max={5}
                  label="Performance"
                  variant="gradient-primary"
                  showValue
                  valueFormatter={(val) => `${val.toFixed(1)}★`}
                />
              </VStack>
            </Card>

            <Card title="Circular Display">
              <div
                style={{
                  display: 'flex',
                  gap: '24px',
                  justifyContent: 'space-around',
                }}
              >
                <CircularMeter
                  value={88}
                  variant="success"
                  label="Uptime"
                  size={100}
                />
                <CircularMeter
                  value={67}
                  variant="warning"
                  label="Speed"
                  size={100}
                />
                <CircularMeter
                  value={92}
                  variant="primary"
                  label="Quality"
                  size={100}
                />
              </div>
            </Card>
          </Grid>
        </div>
      </VStack>
    </div>
  ),
}
