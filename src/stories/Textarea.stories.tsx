/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Textarea } from '../components/Forms/Textarea'
import { Card } from '../components/Display/Card'
import { Text } from '../components/Display/Text'
import { Button } from '../components/Interactive/Button'

const meta = {
  title: 'Forms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A multi-line text input component with character count, resize options, and form validation support.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the textarea',
    },
    hint: {
      control: 'text',
      description: 'Hint text displayed below the textarea',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    showCount: {
      control: 'boolean',
      description: 'Show character count below the textarea',
    },
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
      description: 'Controls how the textarea can be resized',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the textarea',
    },
    rows: {
      control: 'number',
      description: 'Number of visible text lines',
    },
    cols: {
      control: 'number',
      description: 'Visible width of the text control',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum number of characters allowed',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the textarea is required',
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether the textarea is read-only',
    },
    value: {
      control: 'text',
      description: 'The textarea value',
    },
    onChange: {
      action: 'changed',
      description: 'Callback fired when the textarea value changes',
    },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

function TextareaWithState(args: any) {
  const [value, setValue] = useState(args.value || '')

  return (
    <Card style={{ minWidth: '400px' }}>
      <Textarea
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
  render: TextareaWithState,
  args: {
    label: 'Description',
    placeholder: 'Enter your description...',
    rows: 4,
  },
}

export const WithHint: Story = {
  render: TextareaWithState,
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself...',
    hint: 'Write a short bio for your profile',
    rows: 4,
  },
}

export const WithCharacterCount: Story = {
  render: TextareaWithState,
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself...',
    hint: 'Write a short bio for your profile',
    showCount: true,
    maxLength: 200,
    rows: 4,
  },
}

export const WithError: Story = {
  render: TextareaWithState,
  args: {
    label: 'Feedback',
    value: 'Too short',
    error: 'Please provide more detailed feedback (minimum 20 characters)',
    showCount: true,
    maxLength: 500,
    rows: 4,
  },
}

export const Required: Story = {
  render: TextareaWithState,
  args: {
    label: 'Comments',
    placeholder: 'Required field...',
    required: true,
    rows: 3,
  },
}

export const Disabled: Story = {
  args: {
    label: 'System Message',
    value: 'This content cannot be modified by users.',
    disabled: true,
    rows: 3,
  },
}

export const ReadOnly: Story = {
  args: {
    label: 'Terms and Conditions',
    value:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    readOnly: true,
    hint: 'Please review the terms above',
    rows: 4,
  },
}

export const ResizeOptions: Story = {
  render: () => (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        minWidth: '500px',
      }}
    >
      <TextareaWithState
        label="Vertical Resize (Default)"
        placeholder="You can resize this vertically..."
        resize="vertical"
        rows={3}
      />
      <TextareaWithState
        label="Horizontal Resize"
        placeholder="You can resize this horizontally..."
        resize="horizontal"
        rows={3}
      />
      <TextareaWithState
        label="Both Directions"
        placeholder="You can resize this in both directions..."
        resize="both"
        rows={3}
      />
      <TextareaWithState
        label="No Resize"
        placeholder="This textarea cannot be resized..."
        resize="none"
        rows={3}
      />
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const DifferentSizes: Story = {
  render: () => (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        minWidth: '400px',
      }}
    >
      <Textarea
        label="Small (2 rows)"
        placeholder="Small textarea..."
        rows={2}
      />
      <Textarea
        label="Medium (4 rows)"
        placeholder="Medium textarea..."
        rows={4}
      />
      <Textarea
        label="Large (6 rows)"
        placeholder="Large textarea..."
        rows={6}
      />
      <Textarea
        label="Extra Large (8 rows)"
        placeholder="Extra large textarea..."
        rows={8}
      />
    </Card>
  ),
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
      <Textarea
        label="Valid Content"
        value="This is valid content that meets all requirements."
        hint="Great! This looks good."
        showCount
        maxLength={200}
        rows={3}
        readOnly
      />
      <Textarea
        label="Content with Error"
        value="Error"
        error="Content must be at least 20 characters long"
        showCount
        maxLength={200}
        rows={3}
        readOnly
      />
      <Textarea
        label="Required Field"
        placeholder="This field is required"
        required
        rows={3}
      />
      <Textarea
        label="Disabled Field"
        value="This field is disabled"
        disabled
        rows={3}
      />
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const FormIntegration: Story = {
  render: () => {
    const [feedback, setFeedback] = useState('')
    const [comments, setComments] = useState('')
    const [errors, setErrors] = useState<Record<string, string>>({})

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      const newErrors: Record<string, string> = {}

      if (!feedback.trim()) {
        newErrors.feedback = 'Feedback is required'
      } else if (feedback.length < 20) {
        newErrors.feedback =
          'Please provide more detailed feedback (minimum 20 characters)'
      }

      if (comments.length > 500) {
        newErrors.comments = 'Comments must be under 500 characters'
      }

      setErrors(newErrors)

      if (Object.keys(newErrors).length === 0) {
        alert('Form submitted successfully!')
      }
    }

    return (
      <Card
        style={{
          width: '500px',
        }}
      >
        <Text size="lg" weight="semibold" style={{ margin: '0 0 16px 0' }}>
          Feedback Form
        </Text>
        <form onSubmit={handleSubmit}>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <Textarea
              label="Your Feedback"
              placeholder="Please share your thoughts..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              error={errors.feedback}
              hint="Help us improve by sharing your experience"
              showCount
              required
              rows={4}
            />
            <Textarea
              label="Additional Comments"
              placeholder="Any other comments? (Optional)"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              error={errors.comments}
              hint="Optional additional feedback"
              showCount
              maxLength={500}
              rows={3}
            />
            <Button type="submit" style={{ marginTop: '8px' }}>
              Submit Feedback
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
