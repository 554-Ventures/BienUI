import type { Meta, StoryObj } from '@storybook/react'
import { Card, MarkdownText } from '..'

const meta: Meta<typeof MarkdownText> = {
  title: 'Display/MarkdownText',
  component: MarkdownText,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Read-only markdown renderer for rich text content (headings, lists, links, code, and tables).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'Markdown string content to render',
    },
    className: {
      control: 'text',
      description: 'Optional custom wrapper class name',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const sampleMarkdown = `# Release Notes

This renderer supports **GitHub Flavored Markdown**.

## Highlights

- Faster build pipeline
- New \`Typeahead\` component
- Improved accessibility states

### Checklist

- [x] Add typeahead
- [x] Add suggestion tags and icons
- [ ] Add keyboard navigation docs

> This is a callout-style quote block.

Inline code: \`pnpm exec tsc -p tsconfig.json --noEmit\`

\`\`\`ts
const status = 'success'
console.log(status)
\`\`\`

| Area | Status |
| --- | --- |
| Display | Done |
| Forms | In progress |
`

export const Default: Story = {
  render: (args) => (
    <Card style={{ width: 'min(720px, 90vw)' }}>
      <MarkdownText {...args} />
    </Card>
  ),
  args: {
    content: sampleMarkdown,
  },
}

export const Compact: Story = {
  render: (args) => (
    <Card style={{ width: 'min(520px, 90vw)' }}>
      <MarkdownText {...args} />
    </Card>
  ),
  args: {
    content: `### Compact mode\n\nUse this for short explanations with a [link](https://github.com).`,
  },
}
