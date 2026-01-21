import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Checkbox } from '../components/Forms/Checkbox'

const meta = {
  title: 'Forms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the checkbox',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Whether the checkbox is in an indeterminate state',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    hint: {
      control: 'text',
      description: 'Hint text to display below the checkbox',
    },
    required: {
      control: 'boolean',
      description: 'Whether the checkbox is required',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    onChange: {
      action: 'changed',
      description: 'Callback fired when the checkbox state changes',
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CheckboxWithState(args: any) {
  const [checked, setChecked] = useState(args.checked || false)

  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={(e) => {
        setChecked(e.target.checked)
        args.onChange?.(e)
      }}
    />
  )
}

export const Default: Story = {
  render: CheckboxWithState,
  args: {
    label: 'I agree to the terms and conditions',
  },
}

export const WithHint: Story = {
  render: CheckboxWithState,
  args: {
    label: 'Enable notifications',
    hint: 'Receive updates about your account',
  },
}

export const Checked: Story = {
  render: CheckboxWithState,
  args: {
    label: 'Subscribe to newsletter',
    checked: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked checkbox',
    checked: true,
    disabled: true,
  },
}

export const WithError: Story = {
  render: CheckboxWithState,
  args: {
    label: 'Checkbox with error',
    error: 'This field is required',
  },
}

export const Indeterminate: Story = {
  render: CheckboxWithState,
  args: {
    label: 'Indeterminate checkbox',
    indeterminate: true,
  },
}

export const Required: Story = {
  render: CheckboxWithState,
  args: {
    label: 'Required checkbox',
    required: true,
  },
}

export const LongLabel: Story = {
  render: CheckboxWithState,
  args: {
    label:
      'This is a very long label that demonstrates how the checkbox component handles lengthy text content and wraps appropriately',
    hint: 'This checkbox also has a hint to show how it works with longer content',
  },
}

export const AllStates: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        minWidth: '300px',
      }}
    >
      <CheckboxWithState label="I agree to the terms and conditions" />
      <CheckboxWithState
        label="Enable notifications"
        hint="Receive updates about your account"
      />
      <CheckboxWithState label="Subscribe to newsletter" checked={true} />
      <Checkbox label="Disabled checkbox" disabled />
      <Checkbox label="Disabled checked" checked={true} disabled />
      <CheckboxWithState
        label="Checkbox with error"
        error="This field is required"
      />
      <CheckboxWithState label="Indeterminate state" indeterminate={true} />
      <CheckboxWithState label="Required checkbox" required />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}
