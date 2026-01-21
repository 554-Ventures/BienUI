import type { Meta, StoryObj } from '@storybook/react'
import { EmptyState, Button, VStack, Text, Card } from '..'
import {
  SparklesIcon,
  PlusIcon,
  UsersIcon,
  CreditCardIcon,
} from '../components/Icons'

const meta: Meta<typeof EmptyState> = {
  title: 'Feedback/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The EmptyState component displays helpful messages and actions when there's no content to show. It guides users on what to do next and maintains engagement during empty or loading states.

**Key Features:**
- **Clear messaging**: Descriptive titles and explanations for empty states
- **Action-oriented**: Primary and secondary actions to guide user behavior
- **Visual appeal**: Icons and illustrations to make empty states more engaging
- **Contextual guidance**: Specific messaging based on the type of empty state
- **Responsive design**: Adapts to different container sizes and layouts

**Common Use Cases:**
- Empty data tables and lists
- New user onboarding states
- Search results with no matches
- Error states and fallbacks
- First-time user experiences
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Main heading for the empty state',
      table: {
        type: { summary: 'string' },
      },
    },
    description: {
      control: 'text',
      description: 'Optional descriptive text explaining the empty state',
      table: {
        type: { summary: 'string' },
      },
    },
    illustration: {
      control: 'select',
      options: [
        'no-data',
        'no-results',
        'no-notifications',
        'error',
        'coming-soon',
        'folder-empty',
        'inbox-zero',
      ],
      description:
        'Predefined illustration type or custom ReactNode to display above the content',
      table: {
        type: { summary: 'EmptyStateIllustration | ReactNode' },
      },
    },
    action: {
      control: false,
      description:
        'Optional action element (like a button) to help users resolve the empty state',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    className: {
      control: 'text',
      description: 'Optional CSS class name for custom styling',
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
    title: 'No documents found',
    description:
      "You haven't created any documents yet. Start by creating your first document to organize your content.",
    illustration: 'no-data',
  },
  render: (args) => (
    <div style={{ padding: '20px' }}>
      <Card
        style={{ minHeight: '300px', display: 'flex', alignItems: 'center' }}
      >
        <EmptyState
          {...args}
          action={
            <div
              style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Button
                variant="primary"
                onClick={() => alert('Create document clicked')}
              >
                Create Document
              </Button>
              <Button
                variant="secondary"
                onClick={() => alert('Learn more clicked')}
              >
                Learn More
              </Button>
            </div>
          }
        />
      </Card>
    </div>
  ),
}

export const SearchResults: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="lg">
        <Text size="lg" weight="semibold">
          Search Results
        </Text>
        <Text size="sm" tone="secondary">
          Empty state when search returns no results
        </Text>

        <Card
          style={{ minHeight: '300px', display: 'flex', alignItems: 'center' }}
        >
          <EmptyState
            illustration="no-results"
            title="No results found"
            description="We couldn't find anything matching your search. Try different keywords or check your spelling."
            action={
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Button
                  variant="primary"
                  onClick={() => alert('Clear search clicked')}
                >
                  Clear Search
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => alert('Advanced search clicked')}
                >
                  Advanced Search
                </Button>
              </div>
            }
          />
        </Card>
      </VStack>
    </div>
  ),
}

export const EmptyProject: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="lg">
        <Text size="lg" weight="semibold">
          New Project
        </Text>
        <Text size="sm" tone="secondary">
          Empty state for a newly created project
        </Text>

        <Card
          style={{ minHeight: '350px', display: 'flex', alignItems: 'center' }}
        >
          <EmptyState
            illustration="folder-empty"
            title="Welcome to your new project!"
            description="This project is empty. Start by uploading files, creating documents, or inviting team members to collaborate."
            action={
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Button
                  variant="primary"
                  onClick={() => alert('Upload files clicked')}
                >
                  Upload Files
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => alert('Invite team clicked')}
                >
                  Invite Team
                </Button>
              </div>
            }
          />
        </Card>
      </VStack>
    </div>
  ),
}

export const EmptyInbox: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="lg">
        <Text size="lg" weight="semibold">
          Message Inbox
        </Text>
        <Text size="sm" tone="secondary">
          Empty state for messages or notifications
        </Text>

        <Card
          style={{ minHeight: '300px', display: 'flex', alignItems: 'center' }}
        >
          <EmptyState
            illustration="inbox-zero"
            title="Inbox zero achieved!"
            description="You're all caught up. No new messages or notifications to review at this time."
            action={
              <Button
                variant="primary"
                onClick={() => alert('Compose message clicked')}
              >
                Compose Message
              </Button>
            }
          />
        </Card>
      </VStack>
    </div>
  ),
}

export const EmptyTeam: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="lg">
        <Text size="lg" weight="semibold">
          Team Management
        </Text>
        <Text size="sm" tone="secondary">
          Empty state for team member management
        </Text>

        <Card
          style={{ minHeight: '300px', display: 'flex', alignItems: 'center' }}
        >
          <EmptyState
            illustration={<UsersIcon size={48} />}
            title="Build your team"
            description="No team members yet. Invite colleagues to collaborate on projects and share resources together."
            action={
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Button
                  variant="primary"
                  onClick={() => alert('Invite members clicked')}
                >
                  Invite Members
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => alert('Import from CSV clicked')}
                >
                  Import from CSV
                </Button>
              </div>
            }
          />
        </Card>
      </VStack>
    </div>
  ),
}

export const FirstTimeUser: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="lg">
        <Text size="lg" weight="semibold">
          New User Onboarding
        </Text>
        <Text size="sm" tone="secondary">
          First-time user experience with guidance
        </Text>

        <Card
          style={{ minHeight: '350px', display: 'flex', alignItems: 'center' }}
        >
          <EmptyState
            illustration={<SparklesIcon size={48} />}
            title="Welcome to Bien UI!"
            description="Get started by exploring our component library, reading the documentation, or creating your first project. Everything you need is just a click away."
            action={
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Button
                  variant="primary"
                  onClick={() => alert('Start tutorial clicked')}
                >
                  Start Tutorial
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => alert('Browse components clicked')}
                >
                  Browse Components
                </Button>
              </div>
            }
          />
        </Card>
      </VStack>
    </div>
  ),
}

export const ErrorState: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="lg">
        <Text size="lg" weight="semibold">
          Error State
        </Text>
        <Text size="sm" tone="secondary">
          Empty state when something goes wrong
        </Text>

        <Card
          style={{ minHeight: '300px', display: 'flex', alignItems: 'center' }}
        >
          <EmptyState
            illustration="error"
            title="Failed to load data"
            description="We encountered an error while loading your content. Please try again or contact support if the problem persists."
            action={
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Button
                  variant="primary"
                  onClick={() => alert('Try again clicked')}
                >
                  Try Again
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => alert('Contact support clicked')}
                >
                  Contact Support
                </Button>
              </div>
            }
          />
        </Card>
      </VStack>
    </div>
  ),
}

export const UpgradeRequired: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="lg">
        <Text size="lg" weight="semibold">
          Premium Feature
        </Text>
        <Text size="sm" tone="secondary">
          Empty state encouraging upgrade to access features
        </Text>

        <Card
          style={{ minHeight: '350px', display: 'flex', alignItems: 'center' }}
        >
          <EmptyState
            illustration={
              <CreditCardIcon
                size={48}
                style={{ color: 'var(--color-accent)' }}
              />
            }
            title="Upgrade to unlock advanced analytics"
            description="Get deeper insights into your data with advanced charts, custom reports, and real-time analytics. Upgrade to Pro to access these powerful features."
            action={
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Button
                  variant="primary"
                  onClick={() => alert('Upgrade to Pro clicked')}
                >
                  Upgrade to Pro
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => alert('View plans clicked')}
                >
                  View Plans
                </Button>
              </div>
            }
          />
        </Card>
      </VStack>
    </div>
  ),
}

export const EmptyDataTable: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="lg">
        <Text size="lg" weight="semibold">
          Data Table
        </Text>
        <Text size="sm" tone="secondary">
          Empty state within a table or list context
        </Text>

        <Card>
          <div
            style={{
              border: '1px solid var(--color-border-base)',
              borderRadius: '12px',
              minHeight: '250px',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'var(--color-background-subtle)',
            }}
          >
            <EmptyState
              illustration={<PlusIcon size={40} />}
              title="No entries yet"
              description="Start adding entries to see your data organized in this table. You can import from CSV or add entries manually."
              action={
                <div
                  style={{
                    display: 'flex',
                    gap: '12px',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Button
                    variant="primary"
                    onClick={() => alert('Add entry clicked')}
                  >
                    Add Entry
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => alert('Import CSV clicked')}
                  >
                    Import CSV
                  </Button>
                </div>
              }
            />
          </div>
        </Card>
      </VStack>
    </div>
  ),
}

export const MinimalState: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="lg">
        <Text size="lg" weight="semibold">
          Minimal Empty State
        </Text>
        <Text size="sm" tone="secondary">
          Simple empty state with minimal content
        </Text>

        <Card
          style={{ minHeight: '200px', display: 'flex', alignItems: 'center' }}
        >
          <EmptyState
            title="No items"
            description="Nothing to display at the moment."
            action={
              <Button
                variant="primary"
                onClick={() => alert('Add item clicked')}
              >
                Add Item
              </Button>
            }
          />
        </Card>
      </VStack>
    </div>
  ),
}
