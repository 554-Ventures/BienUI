/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Switch } from '../components/Forms/Switch'
import { Card } from '../components/Display/Card'
import { Text } from '../components/Display/Text'
import { Button } from '../components/Interactive/Button'

const meta: Meta<typeof Switch> = {
  title: 'Forms/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A toggle switch component for binary choices. Features different visual variants and provides smooth animations for state changes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the switch',
    },
    hint: {
      control: 'text',
      description: 'Hint text displayed below the switch',
    },
    variant: {
      control: 'select',
      options: ['default', 'brand', 'accent', 'purple'],
      description: 'Visual variant of the switch',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the switch is checked (controlled)',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled',
    },
    onChange: {
      action: 'changed',
      description: 'Callback function when switch state changes',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SwitchWithState(args: any) {
  const [checked, setChecked] = useState(args.checked || false)

  return (
    <Card style={{ minWidth: '300px' }}>
      <Switch
        {...args}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked)
          args.onChange?.(e)
        }}
      />
    </Card>
  )
}

export const Default: Story = {
  render: (args) => <SwitchWithState {...args} />,
  args: {
    label: 'Enable notifications',
    variant: 'default',
  },
}

export const WithHint: Story = {
  render: (args) => <SwitchWithState {...args} />,
  args: {
    label: 'Dark mode',
    hint: 'Switch between light and dark themes',
    variant: 'default',
  },
}

export const Checked: Story = {
  render: (args) => <SwitchWithState {...args} />,
  args: {
    label: 'Auto-save',
    hint: 'Automatically save your work',
    checked: true,
    variant: 'brand',
  },
}

export const Disabled: Story = {
  render: (args) => <SwitchWithState {...args} />,
  args: {
    label: 'Premium feature',
    hint: 'Upgrade to access this feature',
    disabled: true,
    variant: 'default',
  },
}

export const DisabledChecked: Story = {
  render: (args) => <SwitchWithState {...args} />,
  args: {
    label: 'System setting',
    hint: 'Managed by administrator',
    checked: true,
    disabled: true,
    variant: 'brand',
  },
}

export const Variants: Story = {
  render: () => (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        minWidth: '400px',
      }}
    >
      <Text size="lg" weight="semibold">
        Switch Variants
      </Text>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <SwitchWithState
          label="Default variant"
          variant="default"
          defaultChecked={true}
        />
        <SwitchWithState
          label="Brand variant"
          variant="brand"
          defaultChecked={true}
        />
        <SwitchWithState
          label="Accent variant"
          variant="accent"
          defaultChecked={true}
        />
        <SwitchWithState
          label="Purple variant"
          variant="purple"
          defaultChecked={true}
        />
      </div>
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const SettingsPanel: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      notifications: true,
      emailUpdates: false,
      autoSave: true,
      darkMode: false,
      analytics: true,
    })

    const updateSetting = (key: keyof typeof settings) => {
      setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
    }

    const resetSettings = () => {
      setSettings({
        notifications: true,
        emailUpdates: false,
        autoSave: true,
        darkMode: false,
        analytics: true,
      })
    }

    return (
      <Card
        style={{
          width: '400px',
        }}
      >
        <Text size="lg" weight="semibold" style={{ margin: '0 0 20px 0' }}>
          Application Settings
        </Text>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Switch
            label="Push notifications"
            hint="Receive notifications on your device"
            checked={settings.notifications}
            onChange={() => updateSetting('notifications')}
            variant="brand"
          />

          <Switch
            label="Email updates"
            hint="Get notified about new features via email"
            checked={settings.emailUpdates}
            onChange={() => updateSetting('emailUpdates')}
            variant="default"
          />

          <Switch
            label="Auto-save documents"
            hint="Automatically save your work every 30 seconds"
            checked={settings.autoSave}
            onChange={() => updateSetting('autoSave')}
            variant="accent"
          />

          <Switch
            label="Dark mode"
            hint="Use dark theme for better nighttime viewing"
            checked={settings.darkMode}
            onChange={() => updateSetting('darkMode')}
            variant="purple"
          />

          <Switch
            label="Analytics"
            hint="Help us improve by sharing usage data"
            checked={settings.analytics}
            onChange={() => updateSetting('analytics')}
            variant="default"
          />
        </div>

        <div
          style={{
            marginTop: '24px',
            paddingTop: '16px',
            borderTop: '1px solid var(--color-border-base)',
          }}
        >
          <Button variant="ghost" size="sm" onClick={resetSettings}>
            Reset to defaults
          </Button>
        </div>
      </Card>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const FeatureToggles: Story = {
  render: () => {
    const [features, setFeatures] = useState({
      betaFeatures: false,
      advancedMode: false,
      debugMode: false,
    })

    const updateFeature = (key: keyof typeof features) => {
      setFeatures((prev) => ({ ...prev, [key]: !prev[key] }))
    }

    return (
      <Card
        style={{
          width: '400px',
        }}
      >
        <Text size="lg" weight="semibold" style={{ margin: '0 0 8px 0' }}>
          Developer Features
        </Text>
        <Text
          size="sm"
          style={{ margin: '0 0 20px 0', color: 'var(--color-text-secondary)' }}
        >
          Enable experimental features and debugging tools
        </Text>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Switch
            label="Beta features"
            hint="Access to experimental features (may be unstable)"
            checked={features.betaFeatures}
            onChange={() => updateFeature('betaFeatures')}
            variant="accent"
          />

          <Switch
            label="Advanced mode"
            hint="Show advanced configuration options"
            checked={features.advancedMode}
            onChange={() => updateFeature('advancedMode')}
            variant="purple"
          />

          <Switch
            label="Debug mode"
            hint="Enable detailed logging and debug information"
            checked={features.debugMode}
            onChange={() => updateFeature('debugMode')}
            variant="default"
          />
        </div>

        {(features.betaFeatures ||
          features.advancedMode ||
          features.debugMode) && (
          <Card
            style={{
              marginTop: '16px',
              padding: '12px',
              backgroundColor: 'var(--color-warning-100)',
            }}
          >
            <Text
              size="sm"
              weight="medium"
              style={{ color: 'var(--color-warning-700)' }}
            >
              ⚠️ Developer features enabled
            </Text>
            <Text
              size="xs"
              style={{ marginTop: '4px', color: 'var(--color-warning-600)' }}
            >
              Some features may affect application stability
            </Text>
          </Card>
        )}
      </Card>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}
