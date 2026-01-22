/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'
import { ToastProvider, useToast } from '../components/Utils/Toast'
import { Card } from '../components/Display/Card'
import { Text } from '../components/Display/Text'
import { Button } from '../components/Interactive/Button'
import { VStack, HStack } from '../components/Layout/Stack'

// Demo component to trigger toasts
function ToastDemo() {
  const { toast } = useToast()

  const showDefaultToast = () => {
    toast({
      title: 'Default Toast',
      description: 'This is a default toast notification.',
    })
  }

  const showSuccessToast = () => {
    toast({
      title: 'Success!',
      description: 'Your action was completed successfully.',
      variant: 'success',
    })
  }

  const showErrorToast = () => {
    toast({
      title: 'Error',
      description: 'Something went wrong. Please try again.',
      variant: 'error',
    })
  }

  const showWarningToast = () => {
    toast({
      title: 'Warning',
      description: 'Please check your input and try again.',
      variant: 'warning',
    })
  }

  const showInfoToast = () => {
    toast({
      title: 'Information',
      description: 'Here is some useful information for you.',
      variant: 'info',
    })
  }

  const showLongToast = () => {
    toast({
      title: 'Long Duration Toast',
      description: 'This toast will stay visible for 10 seconds.',
      duration: 10000,
      variant: 'info',
    })
  }

  const showShortToast = () => {
    toast({
      title: 'Quick Toast',
      description: 'This toast disappears quickly.',
      duration: 2000,
      variant: 'success',
    })
  }

  return (
    <Card padding="xl" style={{ width: '400px' }}>
      <VStack gap="lg">
        <Text as="h3" style={{ margin: 0 }}>
          Toast Notifications
        </Text>
        <Text
          as="p"
          style={{ margin: 0, color: 'var(--color-text-secondary)' }}
        >
          Click the buttons below to see different toast variants.
        </Text>

        <VStack gap="md">
          <HStack gap="md">
            <Button onClick={showDefaultToast}>Default</Button>
            <Button onClick={showSuccessToast} variant="primary">
              Success
            </Button>
          </HStack>

          <HStack gap="md">
            <Button onClick={showErrorToast} variant="ghost">
              Error
            </Button>
            <Button onClick={showWarningToast} variant="secondary">
              Warning
            </Button>
          </HStack>

          <HStack gap="md">
            <Button onClick={showInfoToast} variant="accent">
              Info
            </Button>
            <Button onClick={showLongToast} variant="secondary">
              Long (10s)
            </Button>
          </HStack>

          <Button
            onClick={showShortToast}
            variant="ghost"
            style={{ width: '100%' }}
          >
            Short (2s)
          </Button>
        </VStack>
      </VStack>
    </Card>
  )
}

const meta: Meta<typeof ToastProvider> = {
  title: 'Utils/Toast',
  component: ToastProvider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A toast notification system built with Radix UI. Provides contextual feedback to users with different variants and customizable duration. Use the ToastProvider wrapper and useToast hook to trigger notifications.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
      description: 'Child components wrapped by the toast provider',
    },
  },
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <ToastDemo />,
}

export const VariantExamples: Story = {
  render: () => {
    const { toast } = useToast()

    const variants = [
      {
        name: 'Default',
        variant: undefined,
        description: 'Standard notification',
      },
      {
        name: 'Success',
        variant: 'success',
        description: 'Action completed successfully',
      },
      { name: 'Error', variant: 'error', description: 'Something went wrong' },
      {
        name: 'Warning',
        variant: 'warning',
        description: 'Please check your input',
      },
      {
        name: 'Info',
        variant: 'info',
        description: 'Helpful information for you',
      },
    ] as const

    const showVariant = (
      variant: (typeof variants)[number]['variant'],
      name: string,
      description: string
    ) => {
      toast({
        title: `${name} Toast`,
        description,
        variant,
      })
    }

    return (
      <Card padding="xl" style={{ width: '500px' }}>
        <VStack gap="lg">
          <Text as="h3" style={{ margin: 0 }}>
            Toast Variants
          </Text>
          <Text
            as="p"
            style={{ margin: 0, color: 'var(--color-text-secondary)' }}
          >
            Different toast styles for various types of feedback.
          </Text>

          <VStack gap="sm">
            {variants.map(({ name, variant, description }) => (
              <Card key={name} padding="md" variant="outlined">
                <HStack justify="space-between" align="center">
                  <VStack gap="xs">
                    <Text as="h5" style={{ margin: 0 }}>
                      {name}
                    </Text>
                    <Text
                      as="p"
                      style={{
                        margin: 0,
                        fontSize: '0.875rem',
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      {description}
                    </Text>
                  </VStack>
                  <Button
                    size="sm"
                    variant={
                      variant === 'success'
                        ? 'primary'
                        : variant === 'error'
                          ? 'ghost'
                          : 'secondary'
                    }
                    onClick={() => showVariant(variant, name, description)}
                  >
                    Show
                  </Button>
                </HStack>
              </Card>
            ))}
          </VStack>
        </VStack>
      </Card>
    )
  },
}

export const DurationExamples: Story = {
  render: () => {
    const { toast } = useToast()

    const durations = [
      { label: 'Quick (1s)', duration: 1000 },
      { label: 'Short (2s)', duration: 2000 },
      { label: 'Default (5s)', duration: 5000 },
      { label: 'Long (10s)', duration: 10000 },
      { label: 'Very Long (15s)', duration: 15000 },
    ]

    const showDurationToast = (duration: number, label: string) => {
      toast({
        title: 'Duration Test',
        description: `This toast will show for ${label.toLowerCase()}.`,
        duration,
        variant: 'info',
      })
    }

    return (
      <Card padding="xl" style={{ width: '400px' }}>
        <VStack gap="lg">
          <Text as="h3" style={{ margin: 0 }}>
            Toast Duration
          </Text>
          <Text
            as="p"
            style={{ margin: 0, color: 'var(--color-text-secondary)' }}
          >
            Test different toast durations to see how long they remain visible.
          </Text>

          <VStack gap="sm">
            {durations.map(({ label, duration }) => (
              <Button
                key={duration}
                variant="secondary"
                style={{ width: '100%' }}
                onClick={() => showDurationToast(duration, label)}
              >
                {label}
              </Button>
            ))}
          </VStack>
        </VStack>
      </Card>
    )
  },
}

export const InteractiveDemo: Story = {
  render: () => {
    const { toast } = useToast()

    const showFormSubmissionToast = () => {
      toast({
        title: 'Form Submitted',
        description: 'Your form has been submitted successfully.',
        variant: 'success',
        duration: 4000,
      })
    }

    const showSaveToast = () => {
      toast({
        title: 'Document Saved',
        description: 'Your changes have been saved automatically.',
        variant: 'success',
        duration: 3000,
      })
    }

    const showDeleteToast = () => {
      toast({
        title: 'Item Deleted',
        description: 'The item has been permanently deleted.',
        variant: 'error',
        duration: 4000,
      })
    }

    const showNetworkErrorToast = () => {
      toast({
        title: 'Network Error',
        description:
          'Unable to connect to the server. Please check your connection.',
        variant: 'error',
        duration: 6000,
      })
    }

    const showUpdateAvailableToast = () => {
      toast({
        title: 'Update Available',
        description: 'A new version of the application is available.',
        variant: 'info',
        duration: 8000,
      })
    }

    return (
      <Card padding="xl" style={{ width: '500px' }}>
        <VStack gap="lg">
          <Text as="h3" style={{ margin: 0 }}>
            Real-World Examples
          </Text>
          <Text
            as="p"
            style={{ margin: 0, color: 'var(--color-text-secondary)' }}
          >
            Common toast notification scenarios you might encounter in
            applications.
          </Text>

          <VStack gap="sm">
            <Card padding="md" variant="outlined">
              <HStack justify="space-between" align="center">
                <VStack gap="xs">
                  <Text as="h5" style={{ margin: 0 }}>
                    Form Submission
                  </Text>
                  <Text
                    as="p"
                    style={{
                      margin: 0,
                      fontSize: '0.875rem',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    User successfully submits a form
                  </Text>
                </VStack>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={showFormSubmissionToast}
                >
                  Submit Form
                </Button>
              </HStack>
            </Card>

            <Card padding="md" variant="outlined">
              <HStack justify="space-between" align="center">
                <VStack gap="xs">
                  <Text as="h5" style={{ margin: 0 }}>
                    Auto-save
                  </Text>
                  <Text
                    as="p"
                    style={{
                      margin: 0,
                      fontSize: '0.875rem',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    Document automatically saves changes
                  </Text>
                </VStack>
                <Button variant="secondary" size="sm" onClick={showSaveToast}>
                  Save Changes
                </Button>
              </HStack>
            </Card>

            <Card padding="md" variant="outlined">
              <HStack justify="space-between" align="center">
                <VStack gap="xs">
                  <Text as="h5" style={{ margin: 0 }}>
                    Delete Action
                  </Text>
                  <Text
                    as="p"
                    style={{
                      margin: 0,
                      fontSize: '0.875rem',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    User permanently deletes an item
                  </Text>
                </VStack>
                <Button variant="ghost" size="sm" onClick={showDeleteToast}>
                  Delete Item
                </Button>
              </HStack>
            </Card>

            <Card padding="md" variant="outlined">
              <HStack justify="space-between" align="center">
                <VStack gap="xs">
                  <Text as="h5" style={{ margin: 0 }}>
                    Network Error
                  </Text>
                  <Text
                    as="p"
                    style={{
                      margin: 0,
                      fontSize: '0.875rem',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    Connection issue occurs
                  </Text>
                </VStack>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={showNetworkErrorToast}
                >
                  Simulate Error
                </Button>
              </HStack>
            </Card>

            <Card padding="md" variant="outlined">
              <HStack justify="space-between" align="center">
                <VStack gap="xs">
                  <Text as="h5" style={{ margin: 0 }}>
                    Update Available
                  </Text>
                  <Text
                    as="p"
                    style={{
                      margin: 0,
                      fontSize: '0.875rem',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    New version notification
                  </Text>
                </VStack>
                <Button
                  variant="accent"
                  size="sm"
                  onClick={showUpdateAvailableToast}
                >
                  Check Updates
                </Button>
              </HStack>
            </Card>
          </VStack>
        </VStack>
      </Card>
    )
  },
}
