/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { MultiSelect, Button, Card, Text } from '..'

const meta: Meta<typeof MultiSelect> = {
  title: 'Forms/MultiSelect',
  component: MultiSelect,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A multi-select dropdown component that allows users to select multiple options from a list. Features include search functionality, tag display, and customizable variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the multi-select field',
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
      description: 'Placeholder text when no options are selected',
    },
    value: {
      control: 'object',
      description: 'Array of selected values',
    },
    onChange: {
      action: 'changed',
      description: 'Callback function when selection changes',
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
    searchable: {
      control: 'boolean',
      description: 'Whether to show search functionality',
    },
    maxTags: {
      control: 'number',
      description: 'Maximum number of tags to display before showing "+X more"',
    },
    variant: {
      control: 'select',
      options: [
        'primary',
        'accent',
        'purple',
        'neutral',
        'error',
        'warning',
        'info',
        'gradient-primary',
        'gradient-purple',
      ],
      description: 'Visual variant of the tags',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const sampleOptions = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'nextjs', label: 'Next.js' },
  { value: 'nuxt', label: 'Nuxt.js' },
  { value: 'gatsby', label: 'Gatsby' },
  { value: 'remix', label: 'Remix' },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MultiSelectWithState(args: any) {
  const [value, setValue] = useState<string[]>(args.value || [])

  return (
    <Card style={{ minWidth: '400px' }}>
      <MultiSelect
        {...args}
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
          args.onChange?.(newValue)
        }}
      />
    </Card>
  )
}

export const Default: Story = {
  render: (args) => <MultiSelectWithState {...args} />,
  args: {
    label: 'Select Technologies',
    placeholder: 'Choose your favorite frameworks...',
    options: sampleOptions,
    searchable: true,
    variant: 'primary',
  },
}

export const WithPreselected: Story = {
  render: (args) => <MultiSelectWithState {...args} />,
  args: {
    label: 'Frontend Frameworks',
    placeholder: 'Choose frameworks...',
    options: sampleOptions,
    value: ['react', 'nextjs'],
    hint: 'Select the frameworks you have experience with',
    searchable: true,
    variant: 'primary',
  },
}

export const Required: Story = {
  render: (args) => <MultiSelectWithState {...args} />,
  args: {
    label: 'Skills',
    placeholder: 'Select at least one skill...',
    options: sampleOptions,
    required: true,
    searchable: true,
    variant: 'primary',
  },
}

export const WithError: Story = {
  render: (args) => <MultiSelectWithState {...args} />,
  args: {
    label: 'Technologies',
    placeholder: 'Select technologies...',
    options: sampleOptions,
    error: 'Please select at least 2 technologies',
    searchable: true,
    variant: 'primary',
  },
}

export const Disabled: Story = {
  render: (args) => <MultiSelectWithState {...args} />,
  args: {
    label: 'Selected Technologies',
    options: sampleOptions,
    value: ['react', 'vue'],
    disabled: true,
    searchable: true,
    variant: 'primary',
  },
}

export const NonSearchable: Story = {
  render: (args) => <MultiSelectWithState {...args} />,
  args: {
    label: 'Simple Selection',
    placeholder: 'Select from the list...',
    options: sampleOptions.slice(0, 4),
    searchable: false,
    variant: 'primary',
  },
}

export const WithMaxTags: Story = {
  render: (args) => <MultiSelectWithState {...args} />,
  args: {
    label: 'Technologies (Max 2 visible)',
    placeholder: 'Select technologies...',
    options: sampleOptions,
    value: ['react', 'vue', 'angular', 'svelte'],
    maxTags: 2,
    hint: 'Only 2 tags are shown, but all selections are preserved',
    searchable: true,
    variant: 'primary',
  },
}

export const Variants: Story = {
  render: () => (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        minWidth: '500px',
      }}
    >
      <MultiSelectWithState
        label="Primary Variant"
        placeholder="Select options..."
        options={sampleOptions.slice(0, 4)}
        value={['react', 'vue']}
        variant="primary"
      />
      <MultiSelectWithState
        label="Accent Variant"
        placeholder="Select options..."
        options={sampleOptions.slice(0, 4)}
        value={['angular', 'svelte']}
        variant="accent"
      />
      <MultiSelectWithState
        label="Purple Variant"
        placeholder="Select options..."
        options={sampleOptions.slice(0, 4)}
        value={['nextjs', 'nuxt']}
        variant="purple"
      />
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const WithDisabledOptions: Story = {
  render: (args) => <MultiSelectWithState {...args} />,
  args: {
    label: 'Framework Selection',
    placeholder: 'Choose frameworks...',
    options: [
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue.js', disabled: true },
      { value: 'angular', label: 'Angular' },
      { value: 'svelte', label: 'Svelte', disabled: true },
      { value: 'nextjs', label: 'Next.js' },
    ],
    hint: 'Some options are currently disabled',
    searchable: true,
    variant: 'primary',
  },
}

export const FormIntegration: Story = {
  render: () => {
    const [technologies, setTechnologies] = useState<string[]>([])
    const [skills, setSkills] = useState<string[]>([])
    const [errors, setErrors] = useState<Record<string, string>>({})

    const techOptions = [
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue.js' },
      { value: 'angular', label: 'Angular' },
      { value: 'svelte', label: 'Svelte' },
      { value: 'nextjs', label: 'Next.js' },
    ]

    const skillOptions = [
      { value: 'frontend', label: 'Frontend Development' },
      { value: 'backend', label: 'Backend Development' },
      { value: 'fullstack', label: 'Full Stack Development' },
      { value: 'mobile', label: 'Mobile Development' },
      { value: 'devops', label: 'DevOps' },
      { value: 'design', label: 'UI/UX Design' },
    ]

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      const newErrors: Record<string, string> = {}

      if (technologies.length === 0) {
        newErrors.technologies = 'Please select at least one technology'
      }

      if (skills.length === 0) {
        newErrors.skills = 'Please select at least one skill area'
      } else if (skills.length > 3) {
        newErrors.skills = 'Please select no more than 3 skill areas'
      }

      setErrors(newErrors)

      if (Object.keys(newErrors).length === 0) {
        alert(
          `Profile created!\nTechnologies: ${technologies.join(', ')}\nSkills: ${skills.join(', ')}`
        )
      }
    }

    return (
      <Card
        style={{
          width: '500px',
        }}
      >
        <Text size="lg" weight="semibold" style={{ margin: '0 0 16px 0' }}>
          Developer Profile
        </Text>
        <form onSubmit={handleSubmit}>
          <Card
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <MultiSelect
              label="Technologies"
              placeholder="Select your preferred technologies..."
              options={techOptions}
              value={technologies}
              onChange={setTechnologies}
              error={errors.technologies}
              hint="Choose the technologies you work with"
              searchable={true}
              required
              variant="primary"
            />
            <MultiSelect
              label="Skill Areas"
              placeholder="Select your skill areas..."
              options={skillOptions}
              value={skills}
              onChange={setSkills}
              error={errors.skills}
              hint="Select 1-3 areas of expertise"
              searchable={true}
              required
              maxTags={3}
              variant="accent"
            />
            <Button
              type="submit"
              variant="primary"
              style={{ marginTop: '8px' }}
            >
              Create Profile
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
