/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'
import { useMemo, useState } from 'react'
import { Card, Typeahead, type TypeaheadOption } from '..'

const meta: Meta<typeof Typeahead> = {
  title: 'Forms/Typeahead',
  component: Typeahead,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A single-select typeahead input with keyboard navigation and suggestion dropdown.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the field',
    },
    hint: {
      control: 'text',
      description: 'Hint text displayed below the field',
    },
    error: {
      control: 'text',
      description: 'Error text displayed below the field',
    },
    placeholder: {
      control: 'text',
      description: 'Input placeholder text',
    },
    value: {
      control: 'text',
      description: 'Selected option value',
    },
    options: {
      control: 'object',
      description: 'Suggestion options',
    },
    noResultsText: {
      control: 'text',
      description: 'Text shown when no suggestions match',
    },
    loading: {
      control: 'boolean',
      description: 'Whether suggestions are loading',
    },
    loadingText: {
      control: 'text',
      description: 'Text shown while loading suggestions',
    },
    showSelectedCheckIcon: {
      control: 'boolean',
      description: 'Whether to show a check icon on the selected suggestion',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the field is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the field is required',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for wrapper',
    },
    onChange: {
      action: 'changed',
      description: 'Called when an option is selected or cleared',
    },
    onInputChange: {
      action: 'inputChanged',
      description: 'Called when input text changes',
    },
    filterOptions: {
      control: false,
      description: 'Custom filter function for suggestions',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const cityOptions: TypeaheadOption[] = [
  {
    value: 'sfo',
    label: 'San Francisco',
    description: 'California, United States',
    tags: ['US', 'West Coast'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3L20 8V16L12 21L4 16V8L12 3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    value: 'nyc',
    label: 'New York',
    description: 'New York, United States',
    tags: ['US', 'East Coast'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 20H19M7 20V11H17V20M9 11V6H15V11"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    value: 'ldn',
    label: 'London',
    description: 'England, United Kingdom',
    tags: ['UK', 'EMEA'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3V21M3 12H21M5 5L19 19M19 5L5 19"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    value: 'ber',
    label: 'Berlin',
    description: 'Berlin, Germany',
    tags: ['EU'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 20V6L12 3L17 6V20M7 10H17"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    value: 'tok',
    label: 'Tokyo',
    description: 'Tokyo, Japan',
    tags: ['APAC'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    value: 'sgp',
    label: 'Singapore',
    description: 'Singapore',
    tags: ['APAC', 'Hub'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 4L18 8V16L12 20L6 16V8L12 4Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    value: 'syd',
    label: 'Sydney',
    description: 'New South Wales, Australia',
    tags: ['APAC'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 16C6.5 12 9.5 10 12 10C14.5 10 17.5 12 20 16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="12" cy="8" r="2" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    value: 'restricted',
    label: 'Private Office',
    description: 'Not selectable in this demo',
    tags: ['Restricted'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="6"
          y="10"
          width="12"
          height="10"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M9 10V8C9 6.343 10.343 5 12 5C13.657 5 15 6.343 15 8V10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    disabled: true,
  },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TypeaheadWithState(args: any) {
  const [value, setValue] = useState<string | null>(args.value ?? null)

  return (
    <Card style={{ minWidth: '420px' }}>
      <Typeahead
        {...args}
        value={value}
        onChange={(nextValue, option) => {
          setValue(nextValue)
          args.onChange?.(nextValue, option)
        }}
      />
    </Card>
  )
}

export const Default: Story = {
  render: (args) => <TypeaheadWithState {...args} />,
  args: {
    label: 'City',
    hint: 'Type to filter cities',
    placeholder: 'Search a city...',
    options: cityOptions,
  },
}

export const WithPreselectedValue: Story = {
  render: (args) => <TypeaheadWithState {...args} />,
  args: {
    label: 'City',
    options: cityOptions,
    value: 'nyc',
  },
}

export const WithoutSelectedCheckIcon: Story = {
  render: (args) => <TypeaheadWithState {...args} />,
  args: {
    label: 'City',
    options: cityOptions,
    value: 'nyc',
    showSelectedCheckIcon: false,
  },
}

export const LoadingState: Story = {
  render: (args) => <TypeaheadWithState {...args} />,
  args: {
    label: 'Assignee',
    placeholder: 'Search people...',
    options: [],
    loading: true,
    loadingText: 'Searching directory...',
  },
}

export const AsyncSuggestions: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>(null)
    const [query, setQuery] = useState('')

    const suggestions = useMemo(() => {
      if (!query.trim()) {
        return cityOptions.slice(0, 4)
      }

      return cityOptions.filter((option) =>
        option.label.toLowerCase().includes(query.toLowerCase())
      )
    }, [query])

    return (
      <Card style={{ minWidth: '420px' }}>
        <Typeahead
          label="Destination"
          placeholder="Start typing a city..."
          hint="This demo mimics server-side filtering"
          value={value}
          options={suggestions}
          onInputChange={setQuery}
          onChange={(nextValue) => setValue(nextValue)}
        />
      </Card>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}
