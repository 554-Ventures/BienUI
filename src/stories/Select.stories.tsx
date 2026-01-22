/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Select, Button, Card, Text } from '..'

const meta: Meta<typeof Select> = {
  title: 'Forms/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A dropdown select component that allows users to choose a single option from a predefined list. Features styled dropdown indicator and support for placeholder text.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the select field',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    hint: {
      control: 'text',
      description: 'Hint text to display below the field',
    },
    options: {
      control: 'object',
      description: 'Array of options to select from',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no option is selected',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the field is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the field is required',
    },
    value: {
      control: 'text',
      description: 'Current selected value',
    },
    defaultValue: {
      control: 'text',
      description: 'Default selected value',
    },
    onChange: {
      action: 'changed',
      description: 'Callback function when selection changes',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
  { value: 'au', label: 'Australia' },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SelectWithState(args: any) {
  const [value, setValue] = useState(args.value || args.defaultValue || '')

  return (
    <Card style={{ minWidth: '300px' }}>
      <Select
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
  render: (args) => <SelectWithState {...args} />,
  args: {
    label: 'Country',
    placeholder: 'Select a country...',
    options: countryOptions,
  },
}

export const WithPreselected: Story = {
  render: (args) => <SelectWithState {...args} />,
  args: {
    label: 'Country',
    options: countryOptions,
    defaultValue: 'us',
    hint: 'Choose your country of residence',
  },
}

export const Required: Story = {
  render: (args) => <SelectWithState {...args} />,
  args: {
    label: 'Country',
    placeholder: 'Please select a country...',
    options: countryOptions,
    required: true,
  },
}

export const WithError: Story = {
  render: (args) => <SelectWithState {...args} />,
  args: {
    label: 'Country',
    placeholder: 'Select a country...',
    options: countryOptions,
    error: 'Please select a valid country',
  },
}

export const Disabled: Story = {
  render: (args) => <SelectWithState {...args} />,
  args: {
    label: 'Country',
    options: countryOptions,
    defaultValue: 'us',
    disabled: true,
  },
}

export const WithDisabledOptions: Story = {
  render: (args) => <SelectWithState {...args} />,
  args: {
    label: 'Shipping Country',
    placeholder: 'Select shipping destination...',
    options: [
      { value: 'us', label: 'United States' },
      { value: 'ca', label: 'Canada' },
      { value: 'uk', label: 'United Kingdom', disabled: true },
      { value: 'de', label: 'Germany', disabled: true },
      { value: 'fr', label: 'France' },
      { value: 'jp', label: 'Japan', disabled: true },
      { value: 'au', label: 'Australia' },
    ],
    hint: 'Some countries are currently unavailable for shipping',
  },
}

export const DifferentOptionSets: Story = {
  render: () => (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        minWidth: '400px',
      }}
    >
      <SelectWithState
        label="Priority Level"
        placeholder="Select priority..."
        options={[
          { value: 'low', label: 'Low' },
          { value: 'medium', label: 'Medium' },
          { value: 'high', label: 'High' },
          { value: 'critical', label: 'Critical' },
        ]}
      />
      <SelectWithState
        label="Department"
        placeholder="Choose department..."
        options={[
          { value: 'engineering', label: 'Engineering' },
          { value: 'design', label: 'Design' },
          { value: 'product', label: 'Product Management' },
          { value: 'marketing', label: 'Marketing' },
          { value: 'sales', label: 'Sales' },
        ]}
      />
      <SelectWithState
        label="Experience Level"
        placeholder="Select experience..."
        options={[
          { value: 'junior', label: 'Junior (0-2 years)' },
          { value: 'mid', label: 'Mid-level (2-5 years)' },
          { value: 'senior', label: 'Senior (5+ years)' },
          { value: 'lead', label: 'Lead/Principal (8+ years)' },
        ]}
      />
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const FormIntegration: Story = {
  render: () => {
    const [country, setCountry] = useState('')
    const [state, setState] = useState('')
    const [priority, setPriority] = useState('')
    const [errors, setErrors] = useState<Record<string, string>>({})

    const stateOptions = [
      { value: 'ca', label: 'California' },
      { value: 'ny', label: 'New York' },
      { value: 'tx', label: 'Texas' },
      { value: 'fl', label: 'Florida' },
      { value: 'wa', label: 'Washington' },
    ]

    const priorityOptions = [
      { value: 'low', label: 'Low Priority' },
      { value: 'medium', label: 'Medium Priority' },
      { value: 'high', label: 'High Priority' },
      { value: 'urgent', label: 'Urgent' },
    ]

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      const newErrors: Record<string, string> = {}

      if (!country) {
        newErrors.country = 'Please select a country'
      }

      if (country === 'us' && !state) {
        newErrors.state = 'Please select a state for US addresses'
      }

      if (!priority) {
        newErrors.priority = 'Please select a priority level'
      }

      setErrors(newErrors)

      if (Object.keys(newErrors).length === 0) {
        alert(
          `Form submitted!\nCountry: ${country}\nState: ${state}\nPriority: ${priority}`
        )
      }
    }

    return (
      <Card
        style={{
          width: '400px',
        }}
      >
        <Text size="lg" weight="semibold" style={{ margin: '0 0 16px 0' }}>
          Shipping Information
        </Text>
        <form onSubmit={handleSubmit}>
          <Card
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <Select
              label="Country"
              placeholder="Select your country..."
              options={countryOptions}
              value={country}
              onChange={(e) => {
                setCountry(e.target.value)
                if (e.target.value !== 'us') {
                  setState('')
                }
              }}
              error={errors.country}
              hint="Choose your country of residence"
              required
            />

            {country === 'us' && (
              <Select
                label="State"
                placeholder="Select your state..."
                options={stateOptions}
                value={state}
                onChange={(e) => setState(e.target.value)}
                error={errors.state}
                hint="Required for US addresses"
                required
              />
            )}

            <Select
              label="Shipping Priority"
              placeholder="Select priority..."
              options={priorityOptions}
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              error={errors.priority}
              hint="Choose delivery speed preference"
              required
            />

            <Button
              type="submit"
              variant="primary"
              style={{ marginTop: '8px' }}
            >
              Submit Order
            </Button>
          </Card>
        </form>
      </Card>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const ValidationStates: Story = {
  render: () => (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        minWidth: '400px',
      }}
    >
      <Select
        label="Valid Selection"
        options={countryOptions}
        defaultValue="us"
        hint="This is a valid selection"
      />
      <Select
        label="Required Field"
        placeholder="This field is required..."
        options={countryOptions}
        required
      />
      <Select
        label="Field with Error"
        placeholder="Select an option..."
        options={countryOptions}
        error="Please make a selection to continue"
      />
      <Select
        label="Disabled Field"
        options={countryOptions}
        defaultValue="ca"
        disabled
      />
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}
