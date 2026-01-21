/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
  Modal,
  VStack,
  Text,
  Card,
  Grid,
  Button,
  Banner,
  Callout,
  Input,
  Avatar,
  Badge,
} from '..'
import {
  TrashIcon,
  CheckIcon,
  BellIcon,
  HelpCircleIcon,
  HeartIcon,
} from '../components/Icons'

const meta: Meta<typeof Modal> = {
  title: 'Feedback/Modal',
  component: Modal,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The Modal component provides overlay dialogs for focused interactions that require user attention. It maintains context while temporarily blocking interaction with the main interface, ensuring users complete important actions or acknowledge critical information.

**Key Features:**
- **Flexible sizing**: Small, medium, large, and full-screen options
- **Accessible**: Focus management, keyboard navigation, and ARIA attributes
- **Action variants**: Confirmation, alert, info, and custom action patterns
- **Header customization**: Title, close button, and custom content
- **Backdrop control**: Click-outside-to-close and escape key support
- **Animation**: Smooth entrance and exit transitions

**Common Use Cases:**
- User confirmations and alerts
- Form dialogs and data entry
- Image galleries and media viewers
- Settings and configuration panels
- Multi-step workflows and wizards
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the modal is open',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onClose: {
      action: 'closed',
      description: 'Callback when modal is closed',
      table: {
        type: { summary: '() => void' },
      },
    },
    children: {
      control: false,
      description: 'Modal content',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    title: {
      control: 'text',
      description: 'Modal title displayed in header',
      table: {
        type: { summary: 'string' },
      },
    },
    subtitle: {
      control: 'text',
      description: 'Optional subtitle displayed below title',
      table: {
        type: { summary: 'string' },
      },
    },
    header: {
      control: false,
      description: 'Custom header content (overrides title/subtitle)',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    footer: {
      control: false,
      description: 'Footer content with actions',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'fullscreen'],
      description: 'Size of the modal',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'centered'],
      description: 'Modal positioning variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    headerVariant: {
      control: 'select',
      options: ['default', 'glass-frost', 'glass-tint'],
      description: 'Header visual style variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    gradient: {
      control: 'select',
      options: ['primary', 'purple', 'accent', 'blue', 'rainbow'],
      description: 'Optional gradient theme for modal',
      table: {
        type: { summary: 'string' },
      },
    },
    closeOnOverlayClick: {
      control: 'boolean',
      description: 'Whether clicking backdrop closes modal',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Whether to show the close button in header',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names',
      table: {
        type: { summary: 'string' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Modal Title',
    subtitle: 'Optional subtitle text',
    size: 'md',
    variant: 'default',
    headerVariant: 'default',
    closeOnOverlayClick: true,
    showCloseButton: true,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setIsOpen(true)} variant="primary">
          Open Modal
        </Button>

        <Modal {...args} open={isOpen} onClose={() => setIsOpen(false)}>
          <VStack gap="md">
            <Text>
              This is the modal content. You can customize all the modal
              properties using the controls panel on the right.
            </Text>
            <Text size="sm" tone="secondary">
              Try adjusting the size, title, subtitle, and other settings to see
              how they affect the modal appearance and behavior.
            </Text>
            <div
              style={{
                display: 'flex',
                gap: '8px',
                justifyContent: 'flex-end',
              }}
            >
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsOpen(false)}>Confirm</Button>
            </div>
          </VStack>
        </Modal>
      </>
    )
  },
}

export const AllSizes: Story = {
  render: () => {
    const [openModal, setOpenModal] = useState<string | null>(null)

    return (
      <div style={{ padding: '20px' }}>
        <VStack gap="lg">
          <Text size="lg" weight="semibold">
            Modal Sizes
          </Text>
          <Text size="sm" tone="secondary">
            Different modal sizes for various content types
          </Text>

          <Grid columns={3} gap="md">
            <Button onClick={() => setOpenModal('small')} variant="secondary">
              Small Modal
            </Button>
            <Button onClick={() => setOpenModal('medium')} variant="secondary">
              Medium Modal
            </Button>
            <Button onClick={() => setOpenModal('large')} variant="secondary">
              Large Modal
            </Button>
          </Grid>

          <Modal
            open={openModal === 'small'}
            onClose={() => setOpenModal(null)}
            size="sm"
            title="Small Modal"
          >
            <VStack gap="md">
              <Text>
                This is a small modal perfect for simple confirmations and quick
                actions.
              </Text>
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  justifyContent: 'flex-end',
                }}
              >
                <Button variant="ghost" onClick={() => setOpenModal(null)}>
                  Cancel
                </Button>
                <Button onClick={() => setOpenModal(null)}>Confirm</Button>
              </div>
            </VStack>
          </Modal>

          <Modal
            open={openModal === 'medium'}
            onClose={() => setOpenModal(null)}
            size="md"
            title="Medium Modal"
          >
            <VStack gap="md">
              <Text>
                This is a medium modal suitable for forms and moderate amounts
                of content.
              </Text>
              <VStack gap="sm">
                <Input label="Name" placeholder="Enter your name" />
                <Input
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                />
              </VStack>
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  justifyContent: 'flex-end',
                }}
              >
                <Button variant="ghost" onClick={() => setOpenModal(null)}>
                  Cancel
                </Button>
                <Button onClick={() => setOpenModal(null)}>Save</Button>
              </div>
            </VStack>
          </Modal>

          <Modal
            open={openModal === 'large'}
            onClose={() => setOpenModal(null)}
            size="lg"
            title="Large Modal"
          >
            <VStack gap="md">
              <Text>
                This is a large modal for complex forms, detailed content, or
                multi-section layouts.
              </Text>
              <Grid columns={2} gap="md">
                <VStack gap="sm">
                  <Input label="First Name" placeholder="John" />
                  <Input label="Email" placeholder="john@example.com" />
                  <Input label="Phone" placeholder="+1 (555) 123-4567" />
                </VStack>
                <VStack gap="sm">
                  <Input label="Last Name" placeholder="Doe" />
                  <Input label="Company" placeholder="Acme Corp" />
                  <Input label="Role" placeholder="Developer" />
                </VStack>
              </Grid>
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  justifyContent: 'flex-end',
                }}
              >
                <Button variant="ghost" onClick={() => setOpenModal(null)}>
                  Cancel
                </Button>
                <Button onClick={() => setOpenModal(null)}>Create User</Button>
              </div>
            </VStack>
          </Modal>
        </VStack>
      </div>
    )
  },
}

export const ConfirmationDialogs: Story = {
  render: () => {
    const [openModal, setOpenModal] = useState<string | null>(null)

    return (
      <div style={{ padding: '20px' }}>
        <VStack gap="lg">
          <Text size="lg" weight="semibold">
            Confirmation Dialogs
          </Text>
          <Text size="sm" tone="secondary">
            Different types of confirmation modals for user actions
          </Text>

          <Grid columns={2} gap="md">
            <Button onClick={() => setOpenModal('delete')} variant="danger">
              Delete Item
            </Button>
            <Button onClick={() => setOpenModal('save')} variant="primary">
              Save Changes
            </Button>
            <Button onClick={() => setOpenModal('discard')} variant="secondary">
              Discard Changes
            </Button>
            <Button onClick={() => setOpenModal('logout')} variant="ghost">
              Logout
            </Button>
          </Grid>

          {/* Delete Confirmation */}
          <Modal
            open={openModal === 'delete'}
            onClose={() => setOpenModal(null)}
            size="sm"
            title="Delete Item"
          >
            <VStack gap="md">
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start',
                }}
              >
                <TrashIcon
                  style={{
                    color: '#ef4444',
                    width: '20px',
                    height: '20px',
                    marginTop: '2px',
                  }}
                />
                <VStack gap="xs">
                  <Text weight="medium">
                    Are you sure you want to delete this item?
                  </Text>
                  <Text size="sm" tone="secondary">
                    This action cannot be undone. The item will be permanently
                    removed from your account.
                  </Text>
                </VStack>
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  justifyContent: 'flex-end',
                }}
              >
                <Button variant="ghost" onClick={() => setOpenModal(null)}>
                  Cancel
                </Button>
                <Button variant="danger" onClick={() => setOpenModal(null)}>
                  Delete
                </Button>
              </div>
            </VStack>
          </Modal>

          {/* Save Confirmation */}
          <Modal
            open={openModal === 'save'}
            onClose={() => setOpenModal(null)}
            size="sm"
            title="Save Changes"
          >
            <VStack gap="md">
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start',
                }}
              >
                <CheckIcon
                  style={{
                    color: '#10b981',
                    width: '20px',
                    height: '20px',
                    marginTop: '2px',
                  }}
                />
                <VStack gap="xs">
                  <Text weight="medium">Save your changes?</Text>
                  <Text size="sm" tone="secondary">
                    Your changes will be saved and applied immediately.
                  </Text>
                </VStack>
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  justifyContent: 'flex-end',
                }}
              >
                <Button variant="ghost" onClick={() => setOpenModal(null)}>
                  Don&apos;t Save
                </Button>
                <Button onClick={() => setOpenModal(null)}>Save</Button>
              </div>
            </VStack>
          </Modal>

          {/* Discard Confirmation */}
          <Modal
            open={openModal === 'discard'}
            onClose={() => setOpenModal(null)}
            size="sm"
            title="Discard Changes"
          >
            <VStack gap="md">
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start',
                }}
              >
                <BellIcon
                  style={{
                    color: '#f59e0b',
                    width: '20px',
                    height: '20px',
                    marginTop: '2px',
                  }}
                />
                <VStack gap="xs">
                  <Text weight="medium">Discard unsaved changes?</Text>
                  <Text size="sm" tone="secondary">
                    You have unsaved changes. Are you sure you want to discard
                    them?
                  </Text>
                </VStack>
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  justifyContent: 'flex-end',
                }}
              >
                <Button variant="ghost" onClick={() => setOpenModal(null)}>
                  Keep Editing
                </Button>
                <Button variant="danger" onClick={() => setOpenModal(null)}>
                  Discard
                </Button>
              </div>
            </VStack>
          </Modal>

          {/* Logout Confirmation */}
          <Modal
            open={openModal === 'logout'}
            onClose={() => setOpenModal(null)}
            size="sm"
            title="Logout"
          >
            <VStack gap="md">
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start',
                }}
              >
                <HelpCircleIcon
                  style={{
                    color: '#3b82f6',
                    width: '20px',
                    height: '20px',
                    marginTop: '2px',
                  }}
                />
                <VStack gap="xs">
                  <Text weight="medium">Are you sure you want to logout?</Text>
                  <Text size="sm" tone="secondary">
                    You&apos;ll need to sign in again to access your account.
                  </Text>
                </VStack>
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  justifyContent: 'flex-end',
                }}
              >
                <Button variant="ghost" onClick={() => setOpenModal(null)}>
                  Cancel
                </Button>
                <Button onClick={() => setOpenModal(null)}>Logout</Button>
              </div>
            </VStack>
          </Modal>
        </VStack>
      </div>
    )
  },
}

export const FormModals: Story = {
  render: () => {
    const [openModal, setOpenModal] = useState<string | null>(null)

    return (
      <div style={{ padding: '20px' }}>
        <VStack gap="lg">
          <Text size="lg" weight="semibold">
            Form Modals
          </Text>
          <Text size="sm" tone="secondary">
            Modals containing forms for data entry and editing
          </Text>

          <Grid columns={2} gap="md">
            <Button
              onClick={() => setOpenModal('create-user')}
              variant="primary"
            >
              Create New User
            </Button>
            <Button
              onClick={() => setOpenModal('edit-profile')}
              variant="secondary"
            >
              Edit Profile
            </Button>
          </Grid>

          {/* Create User Modal */}
          <Modal
            open={openModal === 'create-user'}
            onClose={() => setOpenModal(null)}
            size="md"
            title="Create New User"
          >
            <VStack gap="md">
              <Text size="sm" tone="secondary">
                Add a new team member to your workspace.
              </Text>

              <VStack gap="sm">
                <Grid columns={2} gap="sm">
                  <Input label="First Name" placeholder="John" required />
                  <Input label="Last Name" placeholder="Doe" required />
                </Grid>
                <Input
                  label="Email"
                  placeholder="john.doe@company.com"
                  type="email"
                  required
                />
                <Input label="Role" placeholder="Developer" />
              </VStack>

              <Banner variant="info">
                <Text size="sm">
                  An invitation email will be sent to the user&apos;s email
                  address.
                </Text>
              </Banner>

              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  justifyContent: 'flex-end',
                }}
              >
                <Button variant="ghost" onClick={() => setOpenModal(null)}>
                  Cancel
                </Button>
                <Button onClick={() => setOpenModal(null)}>
                  Send Invitation
                </Button>
              </div>
            </VStack>
          </Modal>

          {/* Edit Profile Modal */}
          <Modal
            open={openModal === 'edit-profile'}
            onClose={() => setOpenModal(null)}
            size="md"
            title="Edit Profile"
          >
            <VStack gap="md">
              <div
                style={{ display: 'flex', gap: '16px', alignItems: 'center' }}
              >
                <Avatar src="/api/placeholder/64/64" alt="Profile" size="lg" />
                <VStack gap="xs">
                  <Text weight="semibold">Profile Picture</Text>
                  <Button size="sm" variant="ghost">
                    Change Photo
                  </Button>
                </VStack>
              </div>

              <VStack gap="sm">
                <Grid columns={2} gap="sm">
                  <Input label="First Name" defaultValue="John" />
                  <Input label="Last Name" defaultValue="Doe" />
                </Grid>
                <Input
                  label="Email"
                  defaultValue="john.doe@company.com"
                  type="email"
                />
                <Input label="Job Title" defaultValue="Senior Developer" />
                <Input label="Department" defaultValue="Engineering" />
              </VStack>

              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  justifyContent: 'flex-end',
                }}
              >
                <Button variant="ghost" onClick={() => setOpenModal(null)}>
                  Cancel
                </Button>
                <Button onClick={() => setOpenModal(null)}>Save Changes</Button>
              </div>
            </VStack>
          </Modal>
        </VStack>
      </div>
    )
  },
}

export const InformationModals: Story = {
  render: () => {
    const [openModal, setOpenModal] = useState<string | null>(null)

    return (
      <div style={{ padding: '20px' }}>
        <VStack gap="lg">
          <Text size="lg" weight="semibold">
            Information Modals
          </Text>
          <Text size="sm" tone="secondary">
            Modals for displaying information, help, and content details
          </Text>

          <Grid columns={2} gap="md">
            <Button
              onClick={() => setOpenModal('user-details')}
              variant="secondary"
            >
              View User Details
            </Button>
            <Button onClick={() => setOpenModal('help')} variant="ghost">
              Help & Support
            </Button>
          </Grid>

          {/* User Details Modal */}
          <Modal
            open={openModal === 'user-details'}
            onClose={() => setOpenModal(null)}
            size="md"
            title="User Details"
          >
            <VStack gap="lg">
              <div
                style={{ display: 'flex', gap: '16px', alignItems: 'center' }}
              >
                <Avatar src="/api/placeholder/64/64" alt="John Doe" size="lg" />
                <VStack gap="xs">
                  <Text size="lg" weight="semibold">
                    John Doe
                  </Text>
                  <Text tone="secondary">Senior Developer</Text>
                  <Badge variant="success">Active</Badge>
                </VStack>
              </div>

              <VStack gap="md">
                <VStack gap="sm">
                  <Text weight="semibold">Contact Information</Text>
                  <Grid columns={2} gap="sm">
                    <VStack gap="xs">
                      <Text size="sm" weight="medium">
                        Email
                      </Text>
                      <Text size="sm">john.doe@company.com</Text>
                    </VStack>
                    <VStack gap="xs">
                      <Text size="sm" weight="medium">
                        Phone
                      </Text>
                      <Text size="sm">+1 (555) 123-4567</Text>
                    </VStack>
                    <VStack gap="xs">
                      <Text size="sm" weight="medium">
                        Department
                      </Text>
                      <Text size="sm">Engineering</Text>
                    </VStack>
                    <VStack gap="xs">
                      <Text size="sm" weight="medium">
                        Start Date
                      </Text>
                      <Text size="sm">March 15, 2022</Text>
                    </VStack>
                  </Grid>
                </VStack>

                <VStack gap="sm">
                  <Text weight="semibold">Recent Activity</Text>
                  <Card variant="ai">
                    <VStack gap="xs">
                      <Text size="sm">Last login: 2 hours ago</Text>
                      <Text size="sm">Current project: BienUI Components</Text>
                      <Text size="sm">Tasks completed this week: 12</Text>
                    </VStack>
                  </Card>
                </VStack>
              </VStack>

              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  justifyContent: 'flex-end',
                }}
              >
                <Button variant="ghost" onClick={() => setOpenModal(null)}>
                  Close
                </Button>
                <Button onClick={() => setOpenModal(null)}>Send Message</Button>
              </div>
            </VStack>
          </Modal>

          {/* Help Modal */}
          <Modal
            open={openModal === 'help'}
            onClose={() => setOpenModal(null)}
            size="lg"
            title="Help & Support"
          >
            <VStack gap="lg">
              <Text>
                Welcome to our help center. Find answers to common questions and
                get support.
              </Text>

              <VStack gap="md">
                <Text weight="semibold">Frequently Asked Questions</Text>
                <VStack gap="sm">
                  <Callout
                    trigger={
                      <Text size="sm" weight="medium">
                        How do I reset my password?
                      </Text>
                    }
                  >
                    <Text size="sm">
                      Click on &quot;Forgot Password&quot; on the login page and
                      follow the instructions sent to your email.
                    </Text>
                  </Callout>

                  <Callout
                    trigger={
                      <Text size="sm" weight="medium">
                        How do I invite team members?
                      </Text>
                    }
                  >
                    <Text size="sm">
                      Go to Settings → Team → Invite Members, enter their email
                      addresses, and click &quot;Send Invitations&quot;.
                    </Text>
                  </Callout>

                  <Callout
                    trigger={
                      <Text size="sm" weight="medium">
                        How do I export my data?
                      </Text>
                    }
                  >
                    <Text size="sm">
                      Navigate to Settings → Data & Privacy → Export Data.
                      Choose your preferred format and click
                      &quot;Download&quot;.
                    </Text>
                  </Callout>
                </VStack>
              </VStack>

              <VStack gap="md">
                <Text weight="semibold">Contact Support</Text>
                <Banner variant="info">
                  <VStack gap="xs">
                    <Text size="sm" weight="medium">
                      Need more help?
                    </Text>
                    <Text size="sm">
                      Reach out to our support team at support@company.com or
                      call (555) 123-HELP.
                    </Text>
                  </VStack>
                </Banner>
              </VStack>

              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  justifyContent: 'flex-end',
                }}
              >
                <Button variant="ghost" onClick={() => setOpenModal(null)}>
                  Close
                </Button>
                <Button onClick={() => setOpenModal(null)}>
                  Contact Support
                </Button>
              </div>
            </VStack>
          </Modal>
        </VStack>
      </div>
    )
  },
}

export const AllVariationsShowcase: Story = {
  render: () => {
    const [openModal, setOpenModal] = useState<string | null>(null)

    return (
      <div style={{ padding: '20px' }}>
        <VStack gap="xl">
          <VStack gap="sm">
            <Text size="xl" weight="bold">
              Complete Modal System 🪟
            </Text>
            <Text size="sm" tone="secondary">
              Comprehensive examples demonstrating all modal types, sizes, and
              interaction patterns
            </Text>
          </VStack>

          <Grid columns={1} gap="xl">
            {/* Modal Types */}
            <VStack gap="md">
              <Text size="lg" weight="semibold">
                Modal Categories
              </Text>
              <Grid columns={4} gap="md">
                <Card style={{ textAlign: 'center', padding: '16px' }}>
                  <VStack gap="sm">
                    <CheckIcon
                      style={{
                        color: '#10b981',
                        width: '24px',
                        height: '24px',
                        margin: '0 auto',
                      }}
                    />
                    <Text size="sm" weight="medium">
                      Confirmation
                    </Text>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setOpenModal('demo-confirm')}
                    >
                      Demo
                    </Button>
                  </VStack>
                </Card>

                <Card style={{ textAlign: 'center', padding: '16px' }}>
                  <VStack gap="sm">
                    <HeartIcon
                      style={{
                        color: '#3b82f6',
                        width: '24px',
                        height: '24px',
                        margin: '0 auto',
                      }}
                    />
                    <Text size="sm" weight="medium">
                      Information
                    </Text>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setOpenModal('demo-info')}
                    >
                      Demo
                    </Button>
                  </VStack>
                </Card>

                <Card style={{ textAlign: 'center', padding: '16px' }}>
                  <VStack gap="sm">
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        background: '#8b5cf6',
                        borderRadius: '50%',
                        margin: '0 auto',
                      }}
                    />
                    <Text size="sm" weight="medium">
                      Form
                    </Text>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setOpenModal('demo-form')}
                    >
                      Demo
                    </Button>
                  </VStack>
                </Card>

                <Card style={{ textAlign: 'center', padding: '16px' }}>
                  <VStack gap="sm">
                    <TrashIcon
                      style={{
                        color: '#ef4444',
                        width: '24px',
                        height: '24px',
                        margin: '0 auto',
                      }}
                    />
                    <Text size="sm" weight="medium">
                      Warning
                    </Text>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setOpenModal('demo-warning')}
                    >
                      Demo
                    </Button>
                  </VStack>
                </Card>
              </Grid>
            </VStack>

            {/* Size Reference */}
            <VStack gap="md">
              <Text size="lg" weight="semibold">
                Size Guidelines
              </Text>
              <Grid columns={2} gap="md">
                <Card>
                  <VStack gap="xs">
                    <Text weight="semibold" size="sm">
                      Small (sm)
                    </Text>
                    <Text size="sm" tone="secondary">
                      Quick confirmations, alerts
                    </Text>
                  </VStack>
                </Card>

                <Card>
                  <VStack gap="xs">
                    <Text weight="semibold" size="sm">
                      Medium (md)
                    </Text>
                    <Text size="sm" tone="secondary">
                      Forms, moderate content
                    </Text>
                  </VStack>
                </Card>

                <Card>
                  <VStack gap="xs">
                    <Text weight="semibold" size="sm">
                      Large (lg)
                    </Text>
                    <Text size="sm" tone="secondary">
                      Complex forms, detailed content
                    </Text>
                  </VStack>
                </Card>

                <Card>
                  <VStack gap="xs">
                    <Text weight="semibold" size="sm">
                      Full Screen
                    </Text>
                    <Text size="sm" tone="secondary">
                      Immersive experiences
                    </Text>
                  </VStack>
                </Card>
              </Grid>
            </VStack>
          </Grid>

          {/* Demo Modals */}
          <Modal
            open={openModal === 'demo-confirm'}
            onClose={() => setOpenModal(null)}
            size="sm"
            title="Confirm Action"
          >
            <VStack gap="md">
              <Text>Are you sure you want to proceed with this action?</Text>
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  justifyContent: 'flex-end',
                }}
              >
                <Button variant="ghost" onClick={() => setOpenModal(null)}>
                  Cancel
                </Button>
                <Button onClick={() => setOpenModal(null)}>Confirm</Button>
              </div>
            </VStack>
          </Modal>

          <Modal
            open={openModal === 'demo-info'}
            onClose={() => setOpenModal(null)}
            size="md"
            title="Information"
          >
            <VStack gap="md">
              <Text>
                This modal displays important information to the user.
              </Text>
              <Banner variant="info">
                <Text size="sm">
                  Additional context can be provided using banners or callouts.
                </Text>
              </Banner>
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  justifyContent: 'flex-end',
                }}
              >
                <Button onClick={() => setOpenModal(null)}>Got it</Button>
              </div>
            </VStack>
          </Modal>

          <Modal
            open={openModal === 'demo-form'}
            onClose={() => setOpenModal(null)}
            size="md"
            title="Form Example"
          >
            <VStack gap="md">
              <Input label="Name" placeholder="Enter your name" />
              <Input
                label="Email"
                placeholder="Enter your email"
                type="email"
              />
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  justifyContent: 'flex-end',
                }}
              >
                <Button variant="ghost" onClick={() => setOpenModal(null)}>
                  Cancel
                </Button>
                <Button onClick={() => setOpenModal(null)}>Submit</Button>
              </div>
            </VStack>
          </Modal>

          <Modal
            open={openModal === 'demo-warning'}
            onClose={() => setOpenModal(null)}
            size="sm"
            title="Warning"
          >
            <VStack gap="md">
              <div
                style={{ display: 'flex', gap: '12px', alignItems: 'center' }}
              >
                <TrashIcon
                  style={{ color: '#ef4444', width: '20px', height: '20px' }}
                />
                <Text>This action cannot be undone.</Text>
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  justifyContent: 'flex-end',
                }}
              >
                <Button variant="ghost" onClick={() => setOpenModal(null)}>
                  Cancel
                </Button>
                <Button variant="danger" onClick={() => setOpenModal(null)}>
                  Continue
                </Button>
              </div>
            </VStack>
          </Modal>

          <Banner variant="info">
            <Text size="sm">
              🎯 <strong>UX Tip:</strong> Use modals sparingly and ensure they
              can be dismissed easily. Always provide clear action buttons and
              consider the user&apos;s workflow.
            </Text>
          </Banner>

          <Text size="lg" weight="semibold">
            Modal Accessibility Best Practices
          </Text>
          <VStack gap="xs">
            <Text size="sm">
              • Focus management: Focus should move to modal when opened and
              return to trigger when closed
            </Text>
            <Text size="sm">
              • Keyboard navigation: Support Tab, Shift+Tab, and Escape key
              interactions
            </Text>
            <Text size="sm">
              • Screen readers: Use proper ARIA attributes
              (role=&quot;dialog&quot;, aria-modal=&quot;true&quot;)
            </Text>
            <Text size="sm">
              • Color contrast: Ensure adequate contrast for backdrop and
              content
            </Text>
            <Text size="sm">
              • Mobile experience: Consider full-screen modals on smaller
              screens
            </Text>
          </VStack>
        </VStack>
      </div>
    )
  },
}
