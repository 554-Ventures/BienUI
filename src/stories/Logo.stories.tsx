import type { Meta, StoryObj } from '@storybook/react'
import { Logo } from '../components/Display/Logo'

const meta = {
  title: 'Display/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Logo component for displaying the Workarc brand identity in various formats and sizes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['icon', 'horizontal', 'stacked'],
      description:
        'Logo variant - icon for small UI usage, horizontal/stacked for main logo display',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the logo',
    },
    theme: {
      control: 'select',
      options: ['light', 'dark'],
      description:
        'Theme variant (light/dark) - only affects horizontal/stacked variants',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'horizontal',
    size: 'md',
    theme: 'light',
  },
}

export const IconOnly: Story = {
  args: {
    variant: 'icon',
    size: 'md',
    theme: 'light',
  },
}

export const Stacked: Story = {
  args: {
    variant: 'stacked',
    size: 'md',
    theme: 'light',
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-4">
        <Logo variant="horizontal" size="xs" />
        <Logo variant="horizontal" size="sm" />
        <Logo variant="horizontal" size="md" />
        <Logo variant="horizontal" size="lg" />
        <Logo variant="horizontal" size="xl" />
      </div>
      <div className="flex items-center gap-4">
        <Logo variant="icon" size="xs" />
        <Logo variant="icon" size="sm" />
        <Logo variant="icon" size="md" />
        <Logo variant="icon" size="lg" />
        <Logo variant="icon" size="xl" />
      </div>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex items-start gap-8">
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-sm font-medium">Icon</h3>
        <Logo variant="icon" size="lg" />
      </div>
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-sm font-medium">Horizontal</h3>
        <Logo variant="horizontal" size="lg" />
      </div>
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-sm font-medium">Stacked</h3>
        <Logo variant="stacked" size="lg" />
      </div>
    </div>
  ),
}

export const DarkTheme: Story = {
  render: () => (
    <div className="rounded-lg bg-gray-900 p-8">
      <div className="flex items-start gap-8">
        <Logo variant="icon" size="lg" theme="dark" />
        <Logo variant="horizontal" size="lg" theme="dark" />
        <Logo variant="stacked" size="lg" theme="dark" />
      </div>
    </div>
  ),
}
