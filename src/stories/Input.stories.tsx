/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Input } from '../components/Forms/Input'
import { Card } from '../components/Display'
import { Button } from '../components/Interactive/Button'

const meta = {
  title: 'Forms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A form input component with label, hint, and error message support.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the input field',
    },
    hint: {
      control: 'text',
      description: 'Hint text displayed below the input',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
    },
    type: {
      control: 'select',
      options: [
        'text',
        'email',
        'password',
        'number',
        'tel',
        'url',
        'search',
        'date',
        'time',
        'datetime-local',
      ],
      description: 'Input type',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether the input is read-only',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    value: {
      control: 'text',
      description: 'The input value',
    },
    onChange: {
      action: 'changed',
      description: 'Callback fired when the input value changes',
    },
    onFocus: {
      action: 'focused',
      description: 'Callback fired when the input receives focus',
    },
    onBlur: {
      action: 'blurred',
      description: 'Callback fired when the input loses focus',
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

function InputWithState(args: any) {
  const [value, setValue] = useState(args.value || '')

  return (
    <div style={{ minWidth: '300px' }}>
      <Input
        {...args}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          args.onChange?.(e)
        }}
      />
    </div>
  )
}

export const Default: Story = {
  render: InputWithState,
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
  },
}

export const WithHint: Story = {
  render: InputWithState,
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    hint: 'Must be at least 8 characters',
  },
}

export const WithError: Story = {
  render: InputWithState,
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'you@example.com',
    error: 'Please enter a valid email address',
    value: 'invalid-email',
  },
}

export const Required: Story = {
  render: InputWithState,
  args: {
    label: 'Full Name',
    placeholder: 'John Doe',
    required: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Username',
    value: 'johndoe',
    disabled: true,
  },
}

export const ReadOnly: Story = {
  args: {
    label: 'User ID',
    value: '12345',
    readOnly: true,
    hint: 'This field cannot be modified',
  },
}

export const NoLabel: Story = {
  render: InputWithState,
  args: {
    placeholder: 'Search...',
    type: 'search',
  },
}

export const DifferentTypes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        minWidth: '300px',
      }}
    >
      <InputWithState label="Text Input" type="text" placeholder="Enter text" />
      <InputWithState
        label="Email Input"
        type="email"
        placeholder="you@example.com"
      />
      <InputWithState
        label="Password Input"
        type="password"
        placeholder="Enter password"
      />
      <InputWithState
        label="Number Input"
        type="number"
        placeholder="Enter number"
        min="0"
        max="100"
      />
      <InputWithState
        label="Phone Input"
        type="tel"
        placeholder="+1 (555) 000-0000"
      />
      <InputWithState
        label="URL Input"
        type="url"
        placeholder="https://example.com"
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const ValidationStates: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        minWidth: '300px',
      }}
    >
      <Input
        label="Valid Input"
        value="john@example.com"
        hint="This looks good!"
        readOnly
      />
      <Input
        label="Input with Error"
        value="invalid-email"
        error="Please enter a valid email address"
        readOnly
      />
      <Input
        label="Required Field"
        placeholder="This field is required"
        required
      />
      <Input label="Disabled Input" value="Cannot edit this" disabled />
      <Input
        label="Read-only Input"
        value="View only"
        readOnly
        hint="This field is read-only"
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
      confirmPassword: '',
      fullName: '',
    })
    const [errors, setErrors] = useState<Record<string, string>>({})

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      const newErrors: Record<string, string> = {}

      if (!formData.email) {
        newErrors.email = 'Email is required'
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address'
      }

      if (!formData.password) {
        newErrors.password = 'Password is required'
      } else if (formData.password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters'
      }

      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match'
      }

      if (!formData.fullName) {
        newErrors.fullName = 'Full name is required'
      }

      setErrors(newErrors)
    }

    const updateField = (field: string, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }))
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: '' }))
      }
    }

    return (
      <Card variant="elevated" style={{ width: '400px' }}>
        <form onSubmit={handleSubmit}>
          <h3
            style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 600 }}
          >
            Create Account
          </h3>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <Input
              label="Full Name"
              placeholder="John Doe"
              required
              value={formData.fullName}
              onChange={(e) => updateField('fullName', e.target.value)}
              error={errors.fullName}
            />
            <Input
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              required
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              error={errors.email}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              required
              hint="Must be at least 8 characters"
              value={formData.password}
              onChange={(e) => updateField('password', e.target.value)}
              error={errors.password}
            />
            <Input
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              required
              value={formData.confirmPassword}
              onChange={(e) => updateField('confirmPassword', e.target.value)}
              error={errors.confirmPassword}
            />
            <Button
              type="submit"
              variant="primary"
              fullWidth
              style={{ marginTop: '8px' }}
            >
              Create Account
            </Button>
          </div>
        </form>
      </Card>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}
