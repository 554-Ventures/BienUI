/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { DatePicker } from '../components/Forms/DatePicker'
import { DateRange as DateRangeType } from '../components/Forms/DatePicker'

const meta = {
  title: 'Forms/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A modern date picker component with calendar interface, range selection, and date restrictions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: false,
      description: 'The selected date value',
    },
    onChange: {
      action: 'date-changed',
      description: 'Callback fired when a date is selected',
    },
    range: {
      control: 'boolean',
      description: 'Enable date range selection',
    },
    rangeValue: {
      control: false,
      description: 'The selected date range value',
    },
    onRangeChange: {
      action: 'range-changed',
      description: 'Callback fired when a date range is selected',
    },
    minDate: {
      control: 'date',
      description: 'Minimum selectable date',
    },
    maxDate: {
      control: 'date',
      description: 'Maximum selectable date',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no date is selected',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the date picker is disabled',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

function DatePickerWithState(args: any) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(args.value)

  return (
    <div style={{ width: '300px' }}>
      <DatePicker
        {...args}
        value={selectedDate}
        onChange={(date) => {
          setSelectedDate(date)
          args.onChange?.(date)
        }}
      />
      {selectedDate && (
        <p style={{ marginTop: '8px', fontSize: '14px', color: '#6b7280' }}>
          Selected:{' '}
          {selectedDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      )}
    </div>
  )
}

function DateRangePickerWithState(args: any) {
  const [rangeValue, setRangeValue] = useState<DateRangeType>({
    start: undefined,
    end: undefined,
  })

  return (
    <div style={{ width: '300px' }}>
      <DatePicker
        {...args}
        range
        rangeValue={rangeValue}
        onRangeChange={(range) => {
          setRangeValue(range)
          args.onRangeChange?.(range)
        }}
      />
      {rangeValue.start && rangeValue.end && (
        <p style={{ marginTop: '8px', fontSize: '14px', color: '#6b7280' }}>
          {Math.ceil(
            (rangeValue.end.getTime() - rangeValue.start.getTime()) /
              (1000 * 60 * 60 * 24)
          ) + 1}{' '}
          days selected
        </p>
      )}
    </div>
  )
}

export const Default: Story = {
  render: DatePickerWithState,
  args: {
    placeholder: 'Select a date',
  },
}

export const WithValue: Story = {
  render: DatePickerWithState,
  args: {
    value: new Date(),
    placeholder: 'Select a date',
  },
}

export const WithPlaceholder: Story = {
  render: DatePickerWithState,
  args: {
    placeholder: 'Choose your birthday',
  },
}

export const Disabled: Story = {
  args: {
    value: new Date(),
    disabled: true,
    placeholder: 'Select a date',
  },
}

export const PastDatesOnly: Story = {
  render: DatePickerWithState,
  args: {
    maxDate: new Date(),
    placeholder: 'Select birth date',
  },
}

export const FutureDatesOnly: Story = {
  render: DatePickerWithState,
  args: {
    minDate: new Date(),
    placeholder: 'Select event date',
  },
}

export const DateRange: Story = {
  render: DateRangePickerWithState,
  args: {
    placeholder: 'Select date range',
  },
}

export const DateRangeWithRestrictions: Story = {
  render: DateRangePickerWithState,
  args: {
    minDate: new Date(),
    placeholder: 'Select vacation dates',
  },
}

export const FormIntegration: Story = {
  render: () => {
    const [meetingDate, setMeetingDate] = useState<Date | undefined>()
    const [title, setTitle] = useState('')

    return (
      <div
        style={{
          width: '400px',
          padding: '24px',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          backgroundColor: 'white',
        }}
      >
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>
          Schedule Meeting
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              Meeting Date
            </label>
            <DatePicker
              value={meetingDate}
              onChange={setMeetingDate}
              minDate={new Date()}
              placeholder="Select date"
            />
          </div>
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              Meeting Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Team Sync"
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '14px',
                boxSizing: 'border-box',
              }}
            />
          </div>
          <div
            style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}
          >
            <button
              style={{
                padding: '8px 16px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                background: 'white',
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>
            <button
              style={{
                padding: '8px 16px',
                border: 'none',
                borderRadius: '6px',
                background: '#016d77',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              Schedule Meeting
            </button>
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const AllVariations: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        width: '500px',
      }}
    >
      <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Basic Date Picker</h4>
        <DatePickerWithState placeholder="Select a date" />
      </div>

      <div>
        <h4 style={{ margin: '0 0 12px 0' }}>With Date Restrictions</h4>
        <div style={{ display: 'flex', gap: '16px' }}>
          <div style={{ flex: 1 }}>
            <p
              style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 500 }}
            >
              Past Dates Only
            </p>
            <DatePickerWithState
              maxDate={new Date()}
              placeholder="Select birth date"
            />
          </div>
          <div style={{ flex: 1 }}>
            <p
              style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 500 }}
            >
              Future Dates Only
            </p>
            <DatePickerWithState
              minDate={new Date()}
              placeholder="Select event date"
            />
          </div>
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Date Range Selection</h4>
        <div style={{ display: 'flex', gap: '16px' }}>
          <div style={{ flex: 1 }}>
            <p
              style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 500 }}
            >
              Vacation Dates
            </p>
            <DateRangePickerWithState
              minDate={new Date()}
              placeholder="Select date range"
            />
          </div>
          <div style={{ flex: 1 }}>
            <p
              style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 500 }}
            >
              Report Period
            </p>
            <DateRangePickerWithState placeholder="Select period" />
          </div>
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 12px 0' }}>States</h4>
        <div style={{ display: 'flex', gap: '16px' }}>
          <div style={{ flex: 1 }}>
            <p
              style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 500 }}
            >
              Default
            </p>
            <DatePicker placeholder="Select a date" />
          </div>
          <div style={{ flex: 1 }}>
            <p
              style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 500 }}
            >
              Disabled
            </p>
            <DatePicker value={new Date()} disabled />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}
