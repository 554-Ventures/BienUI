/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { MarkdownTextarea } from '../components/Forms/MarkdownTextarea'
import { Card, Text, List, ListItem } from '../components/Display'
import { Input } from '../components/Forms/Input'
import { Button } from '../components/Interactive/Button'

const meta = {
  title: 'Forms/MarkdownTextarea',
  component: MarkdownTextarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'An advanced textarea component with Markdown editing capabilities, toolbar, and live preview functionality.',
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
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the textarea',
    },
    rows: {
      control: 'number',
      description: 'Number of visible text lines',
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
    defaultValue: {
      control: 'text',
      description: 'Default value for uncontrolled component',
    },
    onChange: {
      action: 'changed',
      description:
        'Callback fired when the textarea value changes (receives string value)',
    },
  },
} satisfies Meta<typeof MarkdownTextarea>

export default meta
type Story = StoryObj<typeof meta>

function MarkdownTextareaWithState(args: any) {
  const [value, setValue] = useState(args.value || args.defaultValue || '')

  return (
    <div style={{ minWidth: '600px' }}>
      <MarkdownTextarea
        {...args}
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
          args.onChange?.(newValue)
        }}
      />
    </div>
  )
}

const sampleMarkdown = `# Welcome to Markdown

This is a **bold** statement and this is *italic*.

## Features

- Live preview
- Toolbar for common formatting
- GitHub Flavored Markdown support
- Character counting

### Code Example

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

> This is a blockquote with some important information.

[Visit our website](https://example.com) for more details.`

export const Default: Story = {
  render: MarkdownTextareaWithState,
  args: {
    label: 'Content',
    placeholder: 'Start writing your markdown content...',
    rows: 8,
  },
}

export const WithSampleContent: Story = {
  render: MarkdownTextareaWithState,
  args: {
    label: 'Article Content',
    value: sampleMarkdown,
    hint: 'Use the toolbar above to format your content',
    rows: 12,
  },
}

export const WithHint: Story = {
  render: MarkdownTextareaWithState,
  args: {
    label: 'Post Description',
    placeholder: 'Describe your post using Markdown...',
    hint: 'Markdown is supported. Use **bold**, *italic*, and [links](url)',
    rows: 6,
  },
}

export const WithCharacterCount: Story = {
  render: MarkdownTextareaWithState,
  args: {
    label: 'Tweet Draft',
    placeholder: "What's happening?",
    hint: 'Keep it short and sweet',
    showCount: true,
    maxLength: 280,
    rows: 4,
  },
}

export const WithError: Story = {
  render: MarkdownTextareaWithState,
  args: {
    label: 'Blog Post',
    value: '# Too Short',
    error: 'Blog post must be at least 100 characters long',
    showCount: true,
    maxLength: 5000,
    rows: 8,
  },
}

export const Required: Story = {
  render: MarkdownTextareaWithState,
  args: {
    label: 'Description',
    placeholder: 'Required field - please provide a description...',
    required: true,
    rows: 6,
  },
}

export const Disabled: Story = {
  args: {
    label: 'System Content',
    value: sampleMarkdown,
    disabled: true,
    rows: 8,
  },
}

export const ReadOnly: Story = {
  args: {
    label: 'Documentation Preview',
    value: sampleMarkdown,
    readOnly: true,
    hint: 'This content is read-only',
    rows: 10,
  },
}

export const UncontrolledWithDefault: Story = {
  render: () => (
    <div style={{ minWidth: '600px' }}>
      <MarkdownTextarea
        label="Uncontrolled Component"
        defaultValue="# Default Content\n\nThis component manages its own state."
        hint="This is an uncontrolled component with default value"
        rows={6}
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const BlogPostEditor: Story = {
  render: () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [errors, setErrors] = useState<Record<string, string>>({})

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      const newErrors: Record<string, string> = {}

      if (!title.trim()) {
        newErrors.title = 'Title is required'
      }

      if (!content.trim()) {
        newErrors.content = 'Content is required'
      } else if (content.length < 100) {
        newErrors.content = 'Content must be at least 100 characters long'
      }

      setErrors(newErrors)

      if (Object.keys(newErrors).length === 0) {
        alert('Blog post saved successfully!')
      }
    }

    return (
      <Card>
        <Text size="lg" weight="semibold" style={{ margin: '0 0 24px 0' }}>
          Create Blog Post
        </Text>
        <form onSubmit={handleSubmit}>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div>
              <Input
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter blog post title..."
                error={errors.title}
                required
              />
            </div>

            <MarkdownTextarea
              label="Content"
              placeholder="Write your blog post content using Markdown..."
              value={content}
              onChange={setContent}
              error={errors.content}
              hint="Use Markdown syntax for formatting. Minimum 100 characters."
              showCount
              maxLength={10000}
              required
              rows={12}
            />

            <Button
              type="submit"
              variant="primary"
              style={{
                alignSelf: 'flex-start',
              }}
            >
              Save Blog Post
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

export const ToolbarDemo: Story = {
  render: () => (
    <div style={{ minWidth: '600px' }}>
      <MarkdownTextareaWithState
        label="Formatting Demo"
        defaultValue="Try using the toolbar buttons above to format this text. Select some text and click the formatting buttons to see how they work!"
        hint="Select text and use the toolbar buttons to apply formatting"
        rows={8}
      />
      <div
        style={{
          marginTop: '16px',
          padding: '12px',
          backgroundColor: '#f8f9fa',
          borderRadius: '6px',
          fontSize: '14px',
          color: '#6b7280',
        }}
      >
        <strong>Toolbar Features:</strong>
        <List>
          <ListItem>
            <strong>Bold</strong> - Wraps selection with **text**
          </ListItem>
          <ListItem>
            <strong>Italic</strong> - Wraps selection with *text*
          </ListItem>
          <ListItem>
            <strong>Heading 1</strong> - Adds # at start of line
          </ListItem>
          <ListItem>
            <strong>Heading 2</strong> - Adds ## at start of line
          </ListItem>
          <ListItem>
            <strong>List</strong> - Adds - at start of line
          </ListItem>
          <ListItem>
            <strong>Link</strong> - Creates [text](url) format
          </ListItem>
          <ListItem>
            <strong>Code</strong> - Wraps selection with `code`
          </ListItem>
          <ListItem>
            <strong>Edit/Preview</strong> - Switch between modes
          </ListItem>
        </List>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}
