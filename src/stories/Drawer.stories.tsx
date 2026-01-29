/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Input, Textarea } from '../components/Forms'
import { Drawer, Button } from '../components/Interactive'
import { VStack, HStack } from '../components/Layout'
import { Text } from '../components/Display'

// Create a story args type that makes render-handled props optional
type DrawerProps = React.ComponentProps<typeof Drawer>
type DrawerStoryArgs = Omit<DrawerProps, 'open' | 'onClose' | 'children'> & {
  open?: boolean
  onClose?: () => void
  children?: React.ReactNode
}

const meta = {
  title: 'Interactive/Drawer',
  component: Drawer as React.ComponentType<DrawerStoryArgs>,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: { table: { disable: true } },
    onClose: { table: { disable: true } },
    children: { table: { disable: true } },
    side: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'glass-frost', 'glass-tint'],
    },
    gradient: {
      control: 'select',
      options: ['primary', 'purple', 'accent', 'blue', 'rainbow'],
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
      description: 'Border radius size',
    },
  },
} satisfies Meta<DrawerStoryArgs>

export default meta
type Story = StoryObj<DrawerStoryArgs>

// Basic drawer stories
export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer {...args} open={open} onClose={() => setOpen(false)}>
          <VStack gap="md">
            <Text as="h2" size="lg" weight="semibold">
              Default Drawer
            </Text>
            <Text>This is a basic drawer with default settings.</Text>
            <Input placeholder="Enter some text..." />
            <Textarea placeholder="Enter a longer message..." />
          </VStack>
        </Drawer>
      </>
    )
  },
  args: {
    title: 'Default Drawer',
    side: 'right',
    size: 'md',
    variant: 'default',
  },
}

export const WithHeaderAndFooter: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>
          Open Drawer with Header & Footer
        </Button>
        <Drawer
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          footer={
            <HStack gap="sm" justify="end">
              <Button variant="secondary" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setOpen(false)}>
                Save Changes
              </Button>
            </HStack>
          }
        >
          <VStack gap="md">
            <Text>
              This drawer has a custom header with title and subtitle, plus a
              footer with action buttons.
            </Text>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Textarea placeholder="Message" />
          </VStack>
        </Drawer>
      </>
    )
  },
  args: {
    title: 'Edit Profile',
    subtitle: 'Update your profile information',
    side: 'right',
    size: 'md',
    variant: 'elevated',
  },
}

export const LeftSide: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Left Drawer</Button>
        <Drawer {...args} open={open} onClose={() => setOpen(false)}>
          <VStack gap="md">
            <Text as="h2" size="lg" weight="semibold">
              Navigation
            </Text>
            <VStack gap="sm">
              <Button variant="ghost">Dashboard</Button>
              <Button variant="ghost">Projects</Button>
              <Button variant="ghost">Settings</Button>
              <Button variant="ghost">Help</Button>
            </VStack>
          </VStack>
        </Drawer>
      </>
    )
  },
  args: {
    side: 'left',
    size: 'sm',
    variant: 'default',
  },
}

export const TopDrawer: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Top Drawer</Button>
        <Drawer {...args} open={open} onClose={() => setOpen(false)}>
          <HStack gap="md" align="center">
            <Text as="h3" size="md" weight="semibold">
              Notification Center
            </Text>
            <Text size="sm" tone="secondary">
              You have 3 new notifications
            </Text>
          </HStack>
        </Drawer>
      </>
    )
  },
  args: {
    side: 'top',
    size: 'sm',
    variant: 'elevated',
  },
}

export const BottomDrawer: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Bottom Drawer</Button>
        <Drawer {...args} open={open} onClose={() => setOpen(false)}>
          <VStack gap="md">
            <Text as="h3" size="md" weight="semibold">
              Quick Actions
            </Text>
            <HStack gap="sm">
              <Button variant="primary" size="sm">
                Create
              </Button>
              <Button variant="secondary" size="sm">
                Edit
              </Button>
              <Button variant="secondary" size="sm">
                Share
              </Button>
              <Button variant="danger" size="sm">
                Delete
              </Button>
            </HStack>
          </VStack>
        </Drawer>
      </>
    )
  },
  args: {
    side: 'bottom',
    size: 'md',
    variant: 'default',
  },
}

export const GlassFrost: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Glass Frost Drawer</Button>
        <Drawer {...args} open={open} onClose={() => setOpen(false)}>
          <VStack gap="md">
            <Text as="h2" size="lg" weight="semibold">
              Glass Frost Effect
            </Text>
            <Text>
              This drawer uses a glass frost effect with backdrop blur.
            </Text>
            <Input placeholder="Transparent input..." />
          </VStack>
        </Drawer>
      </>
    )
  },
  args: {
    title: 'Glass Effect',
    side: 'right',
    size: 'md',
    variant: 'glass-frost',
  },
}

export const GlassTint: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Glass Tint Drawer</Button>
        <Drawer {...args} open={open} onClose={() => setOpen(false)}>
          <VStack gap="md">
            <Text as="h2" size="lg" weight="semibold">
              Glass Tint Effect
            </Text>
            <Text>
              This drawer uses a glass tint effect with colored backdrop blur.
            </Text>
            <Input placeholder="Tinted input..." />
          </VStack>
        </Drawer>
      </>
    )
  },
  args: {
    title: 'Glass Tint',
    side: 'right',
    size: 'md',
    variant: 'glass-tint',
  },
}

export const GradientPrimary: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>
          Open Primary Gradient Drawer
        </Button>
        <Drawer {...args} open={open} onClose={() => setOpen(false)}>
          <VStack gap="md">
            <Text as="h2" size="lg" weight="semibold">
              Primary Gradient
            </Text>
            <Text>This drawer uses the primary gradient background.</Text>
          </VStack>
        </Drawer>
      </>
    )
  },
  args: {
    title: 'Primary Gradient',
    side: 'right',
    size: 'md',
    gradient: 'primary',
  },
}

export const GradientRainbow: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>
          Open Rainbow Gradient Drawer
        </Button>
        <Drawer {...args} open={open} onClose={() => setOpen(false)}>
          <VStack gap="md">
            <Text as="h2" size="lg" weight="semibold">
              Rainbow Gradient
            </Text>
            <Text>This drawer uses the rainbow gradient background.</Text>
          </VStack>
        </Drawer>
      </>
    )
  },
  args: {
    title: 'Rainbow Gradient',
    side: 'right',
    size: 'md',
    gradient: 'rainbow',
  },
}

export const LargeSize: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Large Drawer</Button>
        <Drawer {...args} open={open} onClose={() => setOpen(false)}>
          <VStack gap="lg">
            <Text as="h2" size="xl" weight="bold">
              Large Drawer
            </Text>
            <Text>This is a large drawer with more content space.</Text>
            <VStack gap="md">
              <Input placeholder="Field 1" />
              <Input placeholder="Field 2" />
              <Input placeholder="Field 3" />
              <Textarea placeholder="Description" />
            </VStack>
          </VStack>
        </Drawer>
      </>
    )
  },
  args: {
    side: 'right',
    size: 'lg',
    variant: 'elevated',
  },
}

export const FullSize: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Full Size Drawer</Button>
        <Drawer {...args} open={open} onClose={() => setOpen(false)}>
          <VStack gap="xl">
            <Text as="h1" size="2xl" weight="bold">
              Full Size Drawer
            </Text>
            <Text>This drawer takes up the full screen width.</Text>
            <VStack gap="lg">
              <HStack gap="md">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </HStack>
              <Input placeholder="Email Address" />
              <Textarea placeholder="Bio" />
            </VStack>
          </VStack>
        </Drawer>
      </>
    )
  },
  args: {
    side: 'right',
    size: 'full',
    variant: 'elevated',
  },
}

export const Persistent: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Persistent Drawer</Button>
        <Drawer {...args} open={open} onClose={() => setOpen(false)}>
          <VStack gap="md">
            <Text as="h2" size="lg" weight="semibold">
              Persistent Drawer
            </Text>
            <Text>
              This drawer cannot be closed by clicking the backdrop or pressing
              Escape.
            </Text>
            <Text size="sm" tone="secondary">
              Use the close button to dismiss.
            </Text>
          </VStack>
        </Drawer>
      </>
    )
  },
  args: {
    title: 'Persistent Mode',
    side: 'right',
    size: 'md',
    variant: 'default',
    persistent: true,
    closeOnBackdropClick: false,
    closeOnEscape: false,
  },
}

export const NoBackdrop: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Drawer (No Backdrop)</Button>
        <Drawer {...args} open={open} onClose={() => setOpen(false)}>
          <VStack gap="md">
            <Text as="h2" size="lg" weight="semibold">
              No Backdrop
            </Text>
            <Text>This drawer doesn&apos;t show a backdrop overlay.</Text>
          </VStack>
        </Drawer>
      </>
    )
  },
  args: {
    title: 'No Backdrop',
    side: 'right',
    size: 'sm',
    variant: 'elevated',
    showBackdrop: false,
  },
}

export const NoCloseButton: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>
          Open Drawer (No Close Button)
        </Button>
        <Drawer {...args} open={open} onClose={() => setOpen(false)}>
          <VStack gap="md">
            <Text as="h2" size="lg" weight="semibold">
              Custom Close
            </Text>
            <Text>This drawer doesn&apos;t show the default close button.</Text>
            <Button onClick={() => setOpen(false)} variant="secondary">
              Close Manually
            </Button>
          </VStack>
        </Drawer>
      </>
    )
  },
  args: {
    title: 'Custom Close',
    side: 'right',
    size: 'md',
    variant: 'default',
    showCloseButton: false,
  },
}

export const CustomRadius: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>
          Open Drawer with Custom Radius
        </Button>
        <Drawer {...args} open={open} onClose={() => setOpen(false)}>
          <VStack gap="md">
            <Text as="h2" size="lg" weight="semibold">
              Custom Radius
            </Text>
            <Text>This drawer uses a custom border radius.</Text>
            <Text size="sm" tone="secondary">
              Try different radius options: none, sm, md, lg, xl, full
            </Text>
            <VStack gap="sm">
              <Button onClick={() => setOpen(false)} variant="secondary">
                Close drawer
              </Button>
            </VStack>
          </VStack>
        </Drawer>
      </>
    )
  },
  args: {
    title: 'Custom Radius',
    side: 'right',
    size: 'md',
    variant: 'default',
    radius: 'xl',
  },
}
