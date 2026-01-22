/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Tags } from '../components/Display/Tags'
import { Card } from '../components/Display/Card'
import { Text } from '../components/Display/Text'
import { Button } from '../components/Interactive/Button'

const meta: Meta<typeof Tags> = {
  title: 'Display/Tags',
  component: Tags,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A tag component that displays labels in a pill-shaped container. Features optional remove functionality, multiple variants, and size options for organizing and categorizing content.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Content to display inside the tag',
    },
    variant: {
      control: 'select',
      options: [
        'success',
        'error',
        'warning',
        'info',
        'neutral',
        'primary',
        'accent',
        'purple',
        'gradient-primary',
        'gradient-purple',
        'gradient-accent',
        'gradient-rainbow',
        'gradient-blue',
        'gradient-teal',
      ],
      description: 'Visual variant of the tag',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the tag',
    },
    onRemove: {
      action: 'removed',
      description: 'Callback function when remove button is clicked',
    },
    removable: {
      control: 'boolean',
      description:
        'Whether to show remove button (when onRemove is not provided)',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the tag is disabled',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Design System',
    variant: 'neutral',
    size: 'md',
  },
}

export const WithRemove: Story = {
  args: {
    children: 'Removable Tag',
    variant: 'primary',
    size: 'md',
    onRemove: () => alert('Tag removed!'),
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled Tag',
    variant: 'neutral',
    size: 'md',
    onRemove: () => {},
    disabled: true,
  },
}

export const Variants: Story = {
  render: () => (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        minWidth: '400px',
      }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        <Tags variant="neutral">Neutral</Tags>
        <Tags variant="primary">Primary</Tags>
        <Tags variant="accent">Accent</Tags>
        <Tags variant="purple">Purple</Tags>
        <Tags variant="success">Success</Tags>
        <Tags variant="error">Error</Tags>
        <Tags variant="warning">Warning</Tags>
        <Tags variant="info">Info</Tags>
      </div>
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const GradientVariants: Story = {
  render: () => (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        minWidth: '400px',
      }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        <Tags variant="gradient-primary">Primary</Tags>
        <Tags variant="gradient-purple">Purple</Tags>
        <Tags variant="gradient-accent">Accent</Tags>
        <Tags variant="gradient-rainbow">Rainbow</Tags>
        <Tags variant="gradient-blue">Blue</Tags>
        <Tags variant="gradient-teal">Teal</Tags>
      </div>
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const Sizes: Story = {
  render: () => (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        minWidth: '400px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Tags variant="primary" size="sm">
          Small
        </Tags>
        <Tags variant="primary" size="md">
          Medium
        </Tags>
        <Tags variant="primary" size="lg">
          Large
        </Tags>
      </div>
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const RemovableTags: Story = {
  render: () => {
    const [tags, setTags] = useState([
      { id: 1, label: 'React', variant: 'primary' as const },
      { id: 2, label: 'TypeScript', variant: 'accent' as const },
      { id: 3, label: 'Storybook', variant: 'purple' as const },
      { id: 4, label: 'CSS', variant: 'success' as const },
    ])

    const removeTag = (id: number) => {
      setTags(tags.filter((tag) => tag.id !== id))
    }

    return (
      <Card
        style={{
          minWidth: '400px',
        }}
      >
        <Text size="lg" weight="semibold" style={{ margin: '0 0 16px 0' }}>
          Skills & Technologies
        </Text>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {tags.map((tag) => (
            <Tags
              key={tag.id}
              variant={tag.variant}
              onRemove={() => removeTag(tag.id)}
            >
              {tag.label}
            </Tags>
          ))}
          {tags.length === 0 && (
            <Text size="sm" style={{ color: 'var(--color-text-tertiary)' }}>
              No tags remaining
            </Text>
          )}
        </div>
        {tags.length === 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() =>
              setTags([
                { id: 1, label: 'React', variant: 'primary' },
                { id: 2, label: 'TypeScript', variant: 'accent' },
                { id: 3, label: 'Storybook', variant: 'purple' },
                { id: 4, label: 'CSS', variant: 'success' },
              ])
            }
            style={{ marginTop: '12px' }}
          >
            Reset Tags
          </Button>
        )}
      </Card>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const FilterExample: Story = {
  render: () => {
    const [activeFilters, setActiveFilters] = useState([
      'Frontend',
      'React',
      'Senior Level',
    ])

    const availableFilters = [
      'Frontend',
      'Backend',
      'Full Stack',
      'React',
      'Vue.js',
      'Angular',
      'Junior Level',
      'Senior Level',
      'Remote',
      'On-site',
    ]

    const toggleFilter = (filter: string) => {
      if (activeFilters.includes(filter)) {
        setActiveFilters(activeFilters.filter((f) => f !== filter))
      } else {
        setActiveFilters([...activeFilters, filter])
      }
    }

    const clearAllFilters = () => {
      setActiveFilters([])
    }

    return (
      <Card
        style={{
          minWidth: '500px',
        }}
      >
        <Text size="lg" weight="semibold" style={{ margin: '0 0 16px 0' }}>
          Job Search Filters
        </Text>

        <div style={{ marginBottom: '16px' }}>
          <Text size="sm" weight="medium" style={{ margin: '0 0 8px 0' }}>
            Active Filters ({activeFilters.length})
          </Text>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {activeFilters.map((filter) => (
              <Tags
                key={filter}
                variant="primary"
                size="sm"
                onRemove={() => toggleFilter(filter)}
              >
                {filter}
              </Tags>
            ))}
            {activeFilters.length === 0 && (
              <Text
                size="sm"
                style={{
                  color: 'var(--color-text-tertiary)',
                  fontStyle: 'italic',
                }}
              >
                No filters applied
              </Text>
            )}
          </div>
          {activeFilters.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              style={{ marginTop: '8px' }}
            >
              Clear All Filters
            </Button>
          )}
        </div>

        <div>
          <Text size="sm" weight="medium" style={{ margin: '0 0 8px 0' }}>
            Available Filters
          </Text>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {availableFilters
              .filter((filter) => !activeFilters.includes(filter))
              .map((filter) => (
                <Button
                  key={filter}
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleFilter(filter)}
                  style={{
                    fontSize: 'var(--font-size-xs)',
                    padding: '4px 8px',
                    height: 'auto',
                    borderRadius: 'var(--radius-full)',
                  }}
                >
                  + {filter}
                </Button>
              ))}
          </div>
        </div>
      </Card>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const CategoryTags: Story = {
  render: () => (
    <Card
      style={{
        minWidth: '500px',
      }}
    >
      <Text size="lg" weight="semibold" style={{ margin: '0 0 16px 0' }}>
        Article Categories
      </Text>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <Text size="sm" weight="medium" style={{ margin: '0 0 6px 0' }}>
            Technology
          </Text>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            <Tags variant="primary" size="sm">
              React
            </Tags>
            <Tags variant="primary" size="sm">
              JavaScript
            </Tags>
            <Tags variant="primary" size="sm">
              TypeScript
            </Tags>
            <Tags variant="primary" size="sm">
              Web Development
            </Tags>
          </div>
        </div>

        <div>
          <Text size="sm" weight="medium" style={{ margin: '0 0 6px 0' }}>
            Design
          </Text>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            <Tags variant="purple" size="sm">
              UI/UX
            </Tags>
            <Tags variant="purple" size="sm">
              Design Systems
            </Tags>
            <Tags variant="purple" size="sm">
              Figma
            </Tags>
          </div>
        </div>

        <div>
          <Text size="sm" weight="medium" style={{ margin: '0 0 6px 0' }}>
            Business
          </Text>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            <Tags variant="accent" size="sm">
              Product Management
            </Tags>
            <Tags variant="accent" size="sm">
              Strategy
            </Tags>
            <Tags variant="accent" size="sm">
              Analytics
            </Tags>
          </div>
        </div>
      </div>
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const StatusTags: Story = {
  render: () => (
    <Card
      style={{
        minWidth: '400px',
      }}
    >
      <Text size="lg" weight="semibold" style={{ margin: '0 0 16px 0' }}>
        Project Status
      </Text>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text size="sm">Design System Update</Text>
          <Tags variant="success" size="sm">
            Completed
          </Tags>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text size="sm">API Integration</Text>
          <Tags variant="info" size="sm">
            In Progress
          </Tags>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text size="sm">Performance Optimization</Text>
          <Tags variant="warning" size="sm">
            Pending Review
          </Tags>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text size="sm">Security Audit</Text>
          <Tags variant="error" size="sm">
            Overdue
          </Tags>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text size="sm">Documentation</Text>
          <Tags variant="neutral" size="sm">
            Not Started
          </Tags>
        </div>
      </div>
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}
