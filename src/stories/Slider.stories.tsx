/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Slider } from '../components/Forms/Slider'
import { Card } from '../components/Display/Card'
import { Text } from '../components/Display/Text'
import { Button } from '../components/Interactive/Button'

const meta: Meta<typeof Slider> = {
  title: 'Forms/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A range slider component for selecting numeric values within a specific range. Features multiple visual variants with gradient styling options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the slider',
    },
    hint: {
      control: 'text',
      description: 'Hint text displayed below the slider',
    },
    showValue: {
      control: 'boolean',
      description: 'Whether to display the current value',
    },
    variant: {
      control: 'select',
      options: [
        'default',
        'gradient-teal',
        'gradient-purple',
        'gradient-accent',
      ],
      description: 'Visual variant of the slider',
    },
    min: {
      control: 'number',
      description: 'Minimum value',
    },
    max: {
      control: 'number',
      description: 'Maximum value',
    },
    step: {
      control: 'number',
      description: 'Step increment',
    },
    value: {
      control: 'number',
      description: 'Current value',
    },
    defaultValue: {
      control: 'number',
      description: 'Default value',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the slider is disabled',
    },
    onChange: {
      action: 'changed',
      description: 'Callback function when value changes',
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
function SliderWithState(args: any) {
  const [value, setValue] = useState(
    args.value || args.defaultValue || args.min || 0
  )

  return (
    <Card style={{ minWidth: '400px' }}>
      <Slider
        {...args}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          args.onChange?.(e)
        }}
      />
    </Card>
  )
}

export const Default: Story = {
  render: (args) => <SliderWithState {...args} />,
  args: {
    label: 'Volume',
    min: 0,
    max: 100,
    defaultValue: 50,
    variant: 'default',
  },
}

export const WithHint: Story = {
  render: (args) => <SliderWithState {...args} />,
  args: {
    label: 'Brightness',
    hint: 'Adjust screen brightness level',
    min: 0,
    max: 100,
    defaultValue: 75,
    variant: 'gradient-teal',
  },
}

export const CustomRange: Story = {
  render: (args) => <SliderWithState {...args} />,
  args: {
    label: 'Temperature',
    hint: 'Set room temperature in Celsius',
    min: 16,
    max: 30,
    defaultValue: 22,
    step: 0.5,
    variant: 'gradient-accent',
  },
}

export const WithoutValue: Story = {
  render: (args) => <SliderWithState {...args} />,
  args: {
    label: 'Opacity',
    hint: 'Adjust element transparency',
    showValue: false,
    min: 0,
    max: 100,
    defaultValue: 80,
    variant: 'gradient-purple',
  },
}

export const Disabled: Story = {
  render: (args) => <SliderWithState {...args} />,
  args: {
    label: 'System volume',
    hint: 'Controlled by administrator',
    min: 0,
    max: 100,
    defaultValue: 30,
    disabled: true,
    variant: 'default',
  },
}

export const Variants: Story = {
  render: () => (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        minWidth: '500px',
      }}
    >
      <Text size="lg" weight="semibold">
        Slider Variants
      </Text>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <SliderWithState
          label="Default variant"
          variant="default"
          defaultValue={60}
        />
        <SliderWithState
          label="Gradient Teal variant"
          variant="gradient-teal"
          defaultValue={70}
        />
        <SliderWithState
          label="Gradient Purple variant"
          variant="gradient-purple"
          defaultValue={80}
        />
        <SliderWithState
          label="Gradient Accent variant"
          variant="gradient-accent"
          defaultValue={90}
        />
      </div>
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const MediaPlayer: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      volume: 75,
      bass: 50,
      treble: 45,
      balance: 50,
    })

    const updateSetting = (key: keyof typeof settings, value: string) => {
      setSettings((prev) => ({ ...prev, [key]: parseInt(value) }))
    }

    const resetSettings = () => {
      setSettings({ volume: 75, bass: 50, treble: 45, balance: 50 })
    }

    return (
      <Card
        style={{
          width: '450px',
        }}
      >
        <Text size="lg" weight="semibold" style={{ margin: '0 0 20px 0' }}>
          Audio Settings
        </Text>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Slider
            label="Volume"
            hint="Master volume control"
            min={0}
            max={100}
            value={settings.volume}
            onChange={(e) => updateSetting('volume', e.target.value)}
            variant="gradient-teal"
          />

          <Slider
            label="Bass"
            hint="Low frequency enhancement"
            min={0}
            max={100}
            value={settings.bass}
            onChange={(e) => updateSetting('bass', e.target.value)}
            variant="gradient-purple"
          />

          <Slider
            label="Treble"
            hint="High frequency adjustment"
            min={0}
            max={100}
            value={settings.treble}
            onChange={(e) => updateSetting('treble', e.target.value)}
            variant="gradient-accent"
          />

          <Slider
            label="Balance"
            hint="Left/right speaker balance"
            min={0}
            max={100}
            value={settings.balance}
            onChange={(e) => updateSetting('balance', e.target.value)}
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

export const GameSettings: Story = {
  render: () => {
    const [gameSettings, setGameSettings] = useState({
      difficulty: 3,
      graphics: 8,
      soundEffects: 80,
      music: 60,
      mouseSensitivity: 7,
    })

    const updateGameSetting = (
      key: keyof typeof gameSettings,
      value: string
    ) => {
      setGameSettings((prev) => ({ ...prev, [key]: parseInt(value) }))
    }

    const getDifficultyLabel = (value: number) => {
      const labels = ['Peaceful', 'Easy', 'Normal', 'Hard', 'Expert']
      return labels[value - 1] || 'Normal'
    }

    const getGraphicsLabel = (value: number) => {
      if (value <= 3) return 'Low'
      if (value <= 6) return 'Medium'
      if (value <= 8) return 'High'
      return 'Ultra'
    }

    return (
      <Card
        style={{
          width: '500px',
        }}
      >
        <Text size="lg" weight="semibold" style={{ margin: '0 0 8px 0' }}>
          Game Settings
        </Text>
        <Text
          size="sm"
          style={{ margin: '0 0 20px 0', color: 'var(--color-text-secondary)' }}
        >
          Customize your gaming experience
        </Text>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <Slider
              label={`Difficulty: ${getDifficultyLabel(gameSettings.difficulty)}`}
              hint="Game difficulty level"
              min={1}
              max={5}
              value={gameSettings.difficulty}
              onChange={(e) => updateGameSetting('difficulty', e.target.value)}
              variant="gradient-accent"
              showValue={false}
            />
          </div>

          <div>
            <Slider
              label={`Graphics Quality: ${getGraphicsLabel(gameSettings.graphics)}`}
              hint="Visual quality and performance"
              min={1}
              max={10}
              value={gameSettings.graphics}
              onChange={(e) => updateGameSetting('graphics', e.target.value)}
              variant="gradient-purple"
              showValue={false}
            />
          </div>

          <Slider
            label="Sound Effects Volume"
            hint="In-game sound effects"
            min={0}
            max={100}
            value={gameSettings.soundEffects}
            onChange={(e) => updateGameSetting('soundEffects', e.target.value)}
            variant="gradient-teal"
          />

          <Slider
            label="Music Volume"
            hint="Background music"
            min={0}
            max={100}
            value={gameSettings.music}
            onChange={(e) => updateGameSetting('music', e.target.value)}
            variant="default"
          />

          <Slider
            label="Mouse Sensitivity"
            hint="Camera movement sensitivity"
            min={1}
            max={10}
            value={gameSettings.mouseSensitivity}
            onChange={(e) =>
              updateGameSetting('mouseSensitivity', e.target.value)
            }
            variant="gradient-accent"
          />
        </div>
      </Card>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}
