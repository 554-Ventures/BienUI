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
    startElement: {
      control: false,
      description:
        'Element to display at the start of the input (e.g., search icon)',
    },
    endElement: {
      control: false,
      description:
        'Element to display at the end of the input (e.g., clear button)',
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

export const WithStartElement: Story = {
  render: InputWithState,
  args: {
    label: 'Search',
    placeholder: 'Search products...',
    type: 'search',
    startElement: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
}

export const WithEndElement: Story = {
  render: () => {
    const [value, setValue] = useState('Some text to clear')

    return (
      <div style={{ minWidth: '300px' }}>
        <Input
          label="Message"
          placeholder="Enter your message..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          endElement={
            value && (
              <button
                type="button"
                onClick={() => setValue('')}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  color: 'var(--color-text-secondary)',
                }}
                aria-label="Clear input"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )
          }
        />
      </div>
    )
  },
}

export const WithBothElements: Story = {
  render: () => {
    const [value, setValue] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    return (
      <div style={{ minWidth: '300px' }}>
        <Input
          label="Password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter your password..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          startElement={
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <circle cx="12" cy="16" r="1" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          }
          endElement={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                color: 'var(--color-text-secondary)',
              }}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          }
        />
      </div>
    )
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

export const AdornmentExamples: Story = {
  render: () => {
    const [searchValue, setSearchValue] = useState('')
    const [currencyValue, setCurrencyValue] = useState('')
    const [percentValue, setPercentValue] = useState('')

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          minWidth: '300px',
        }}
      >
        {/* Search with icon */}
        <Input
          label="Search Products"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          startElement={
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          }
          endElement={
            searchValue && (
              <button
                type="button"
                onClick={() => setSearchValue('')}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  color: 'var(--color-text-secondary)',
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )
          }
        />

        {/* Currency input */}
        <Input
          label="Price"
          type="number"
          placeholder="0.00"
          value={currencyValue}
          onChange={(e) => setCurrencyValue(e.target.value)}
          startElement={
            <span
              style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}
            >
              $
            </span>
          }
        />

        {/* Percentage input */}
        <Input
          label="Discount"
          type="number"
          placeholder="10"
          value={percentValue}
          onChange={(e) => setPercentValue(e.target.value)}
          endElement={
            <span
              style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}
            >
              %
            </span>
          }
        />

        {/* Email with icon */}
        <Input
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          startElement={
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          }
        />
      </div>
    )
  },
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
