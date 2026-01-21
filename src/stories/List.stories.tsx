import type { Meta, StoryObj } from '@storybook/react'
import {
  List,
  ListItem,
  DescriptionList,
  DescriptionTerm,
  DescriptionDetails,
} from '../components/Display/List'
import { Text } from '../components/Display/Text'
import { Card } from '../components/Display/Card'
import { Grid } from '../components/Layout/Grid'
import { VStack } from '../components/Layout/Stack'
import {
  CheckIcon,
  SparklesIcon,
  SettingsIcon,
  DownloadIcon,
  SendIcon,
  HeartIcon,
  SearchIcon,
  TrashIcon,
} from '../components/Icons'

const meta = {
  title: 'Display/List',
  component: List,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Flexible lists for displaying collections with various styles and interactive features. Supports different list types, markers, sizes, icons, avatars, and nested content.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['unordered', 'ordered', 'unstyled'],
      description: 'Type of list',
    },
    markerStyle: {
      control: 'select',
      options: ['default', 'circle', 'square', 'roman'],
      description: 'Style of list markers',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the list text',
    },
    spacing: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'none'],
      description: 'Spacing between list items',
    },
    dividers: {
      control: 'boolean',
      description: 'Show dividers between items',
    },
  },
  args: {
    type: 'unordered',
    size: 'md',
    spacing: 'md',
    dividers: false,
  },
} satisfies Meta<typeof List>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <List {...args}>
      <ListItem>Design System Components</ListItem>
      <ListItem>Responsive Layout</ListItem>
      <ListItem>Dark Mode Support</ListItem>
      <ListItem>Accessibility Features</ListItem>
      <ListItem>TypeScript Support</ListItem>
    </List>
  ),
}

export const BasicLists: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '800px' }}>
      <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
        Basic Lists
      </Text>
      <Grid columns={2} gap="md">
        <Card title="Unordered List">
          <List>
            <ListItem>Design System Components</ListItem>
            <ListItem>Responsive Layout</ListItem>
            <ListItem>Dark Mode Support</ListItem>
            <ListItem>Accessibility Features</ListItem>
            <ListItem>TypeScript Support</ListItem>
          </List>
        </Card>

        <Card title="Ordered List">
          <List type="ordered">
            <ListItem>Install dependencies</ListItem>
            <ListItem>Configure theme settings</ListItem>
            <ListItem>Import components</ListItem>
            <ListItem>Build your application</ListItem>
            <ListItem>Deploy to production</ListItem>
          </List>
        </Card>
      </Grid>
    </div>
  ),
}

export const MarkerStyles: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '900px' }}>
      <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
        Marker Styles
      </Text>
      <Grid columns={3} gap="md">
        <Card>
          <Text size="sm" weight="semibold" style={{ marginBottom: '8px' }}>
            Circle Markers
          </Text>
          <List markerStyle="circle">
            <ListItem>First item</ListItem>
            <ListItem>Second item</ListItem>
            <ListItem>Third item</ListItem>
          </List>
        </Card>

        <Card>
          <Text size="sm" weight="semibold" style={{ marginBottom: '8px' }}>
            Square Markers
          </Text>
          <List markerStyle="square">
            <ListItem>First item</ListItem>
            <ListItem>Second item</ListItem>
            <ListItem>Third item</ListItem>
          </List>
        </Card>

        <Card>
          <Text size="sm" weight="semibold" style={{ marginBottom: '8px' }}>
            Roman Numerals
          </Text>
          <List type="ordered" markerStyle="roman">
            <ListItem>First item</ListItem>
            <ListItem>Second item</ListItem>
            <ListItem>Third item</ListItem>
          </List>
        </Card>
      </Grid>
    </div>
  ),
}

export const SizesAndSpacing: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '900px' }}>
      <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
        Sizes and Spacing
      </Text>
      <Grid columns={3} gap="md">
        <Card title="Small">
          <List size="sm" spacing="sm">
            <ListItem>Compact item</ListItem>
            <ListItem>Small text size</ListItem>
            <ListItem>Tight spacing</ListItem>
          </List>
        </Card>

        <Card title="Medium">
          <List size="md" spacing="md">
            <ListItem>Default item</ListItem>
            <ListItem>Medium text size</ListItem>
            <ListItem>Standard spacing</ListItem>
          </List>
        </Card>

        <Card title="Large">
          <List size="lg" spacing="lg">
            <ListItem>Large item</ListItem>
            <ListItem>Big text size</ListItem>
            <ListItem>Generous spacing</ListItem>
          </List>
        </Card>
      </Grid>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '800px' }}>
      <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
        Lists with Icons
      </Text>
      <Grid columns={2} gap="md">
        <Card title="Feature List">
          <List type="unstyled" spacing="md">
            <ListItem icon={<CheckIcon />}>Complete documentation</ListItem>
            <ListItem icon={<CheckIcon />}>TypeScript support</ListItem>
            <ListItem icon={<CheckIcon />}>Responsive design</ListItem>
            <ListItem icon={<CheckIcon />}>Dark mode included</ListItem>
            <ListItem icon={<CheckIcon />}>Accessible components</ListItem>
          </List>
        </Card>

        <Card title="Action Items">
          <List type="unstyled" spacing="md">
            <ListItem icon={<SparklesIcon />}>Review new designs</ListItem>
            <ListItem icon={<SettingsIcon />}>Update configuration</ListItem>
            <ListItem icon={<DownloadIcon />}>Download assets</ListItem>
            <ListItem icon={<SendIcon />}>Send for approval</ListItem>
            <ListItem icon={<HeartIcon />}>Add to favorites</ListItem>
          </List>
        </Card>
      </Grid>
    </div>
  ),
}

export const InteractiveLists: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '400px' }}>
      <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
        Interactive Lists
      </Text>
      <Card title="Navigation Menu">
        <List type="unstyled" spacing="none">
          <ListItem icon={<SparklesIcon />} interactive active>
            Dashboard
          </ListItem>
          <ListItem icon={<SearchIcon />} interactive>
            Search
          </ListItem>
          <ListItem icon={<SettingsIcon />} interactive>
            Settings
          </ListItem>
          <ListItem icon={<HeartIcon />} interactive>
            Favorites
          </ListItem>
          <ListItem icon={<TrashIcon />} interactive disabled>
            Archive (Coming Soon)
          </ListItem>
        </List>
      </Card>
    </div>
  ),
}

export const WithAvatars: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '400px' }}>
      <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
        Lists with Avatars
      </Text>
      <Card title="Team Members">
        <List type="unstyled" spacing="md">
          <ListItem
            avatar={
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'var(--gradient-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: 'var(--font-weight-bold)',
                }}
              >
                JD
              </div>
            }
          >
            <Text size="sm" weight="semibold">
              John Doe
            </Text>
            <Text size="xs" tone="secondary">
              Product Designer
            </Text>
          </ListItem>
          <ListItem
            avatar={
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'var(--gradient-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: 'var(--font-weight-bold)',
                }}
              >
                SM
              </div>
            }
          >
            <Text size="sm" weight="semibold">
              Sarah Miller
            </Text>
            <Text size="xs" tone="secondary">
              Frontend Developer
            </Text>
          </ListItem>
          <ListItem
            avatar={
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'var(--gradient-purple)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: 'var(--font-weight-bold)',
                }}
              >
                AK
              </div>
            }
          >
            <Text size="sm" weight="semibold">
              Alex Kim
            </Text>
            <Text size="xs" tone="secondary">
              UX Researcher
            </Text>
          </ListItem>
        </List>
      </Card>
    </div>
  ),
}

export const WithDividers: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '500px' }}>
      <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
        Lists with Dividers
      </Text>
      <Card>
        <List type="unstyled" dividers spacing="md">
          <ListItem icon={<CheckIcon />}>
            <Text size="sm" weight="semibold">
              Phase 1: Research
            </Text>
            <Text size="xs" tone="secondary">
              User interviews and competitive analysis
            </Text>
          </ListItem>
          <ListItem icon={<CheckIcon />}>
            <Text size="sm" weight="semibold">
              Phase 2: Design
            </Text>
            <Text size="xs" tone="secondary">
              Wireframes, prototypes, and visual design
            </Text>
          </ListItem>
          <ListItem icon={<SparklesIcon />}>
            <Text size="sm" weight="semibold">
              Phase 3: Development
            </Text>
            <Text size="xs" tone="secondary">
              Building and testing the product
            </Text>
          </ListItem>
          <ListItem icon={<SearchIcon />}>
            <Text size="sm" weight="semibold">
              Phase 4: Launch
            </Text>
            <Text size="xs" tone="secondary">
              Deployment and user feedback
            </Text>
          </ListItem>
        </List>
      </Card>
    </div>
  ),
}

export const DescriptionLists: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '800px' }}>
      <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
        Description Lists
      </Text>
      <Grid columns={2} gap="md">
        <Card title="Vertical Layout">
          <DescriptionList>
            <DescriptionTerm>Product Name</DescriptionTerm>
            <DescriptionDetails>Bien UI Design System</DescriptionDetails>

            <DescriptionTerm>Version</DescriptionTerm>
            <DescriptionDetails>2.0.0</DescriptionDetails>

            <DescriptionTerm>License</DescriptionTerm>
            <DescriptionDetails>MIT License</DescriptionDetails>

            <DescriptionTerm>Author</DescriptionTerm>
            <DescriptionDetails>Bien Design Team</DescriptionDetails>
          </DescriptionList>
        </Card>

        <Card title="Horizontal Layout">
          <DescriptionList orientation="horizontal">
            <div>
              <DescriptionTerm>Status</DescriptionTerm>
              <DescriptionDetails>Active</DescriptionDetails>
            </div>
            <div>
              <DescriptionTerm>Created</DescriptionTerm>
              <DescriptionDetails>January 2026</DescriptionDetails>
            </div>
            <div>
              <DescriptionTerm>Updated</DescriptionTerm>
              <DescriptionDetails>Today</DescriptionDetails>
            </div>
            <div>
              <DescriptionTerm>Category</DescriptionTerm>
              <DescriptionDetails>Design System</DescriptionDetails>
            </div>
          </DescriptionList>
        </Card>
      </Grid>
    </div>
  ),
}

export const NestedLists: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '500px' }}>
      <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
        Nested Lists
      </Text>
      <Card title="Component Structure">
        <List>
          <ListItem>
            Layout Components
            <List>
              <ListItem>Container</ListItem>
              <ListItem>Grid</ListItem>
              <ListItem>Stack</ListItem>
            </List>
          </ListItem>
          <ListItem>
            Form Components
            <List>
              <ListItem>Input</ListItem>
              <ListItem>Textarea</ListItem>
              <ListItem>Select</ListItem>
            </List>
          </ListItem>
          <ListItem>
            Navigation Components
            <List>
              <ListItem>Header</ListItem>
              <ListItem>Link</ListItem>
              <ListItem>Button</ListItem>
            </List>
          </ListItem>
        </List>
      </Card>
    </div>
  ),
}

export const AllVariations: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '1000px' }}>
      <VStack gap="xl">
        <div>
          <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
            Basic Lists
          </Text>
          <Grid columns={2} gap="md">
            <Card title="Unordered List">
              <List>
                <ListItem>Design System Components</ListItem>
                <ListItem>Responsive Layout</ListItem>
                <ListItem>Dark Mode Support</ListItem>
                <ListItem>Accessibility Features</ListItem>
                <ListItem>TypeScript Support</ListItem>
              </List>
            </Card>

            <Card title="Ordered List">
              <List type="ordered">
                <ListItem>Install dependencies</ListItem>
                <ListItem>Configure theme settings</ListItem>
                <ListItem>Import components</ListItem>
                <ListItem>Build your application</ListItem>
                <ListItem>Deploy to production</ListItem>
              </List>
            </Card>
          </Grid>
        </div>

        <div>
          <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
            Lists with Icons
          </Text>
          <Grid columns={2} gap="md">
            <Card title="Feature List">
              <List type="unstyled" spacing="md">
                <ListItem icon={<CheckIcon />}>Complete documentation</ListItem>
                <ListItem icon={<CheckIcon />}>TypeScript support</ListItem>
                <ListItem icon={<CheckIcon />}>Responsive design</ListItem>
                <ListItem icon={<CheckIcon />}>Dark mode included</ListItem>
                <ListItem icon={<CheckIcon />}>Accessible components</ListItem>
              </List>
            </Card>

            <Card title="Interactive Menu">
              <List type="unstyled" spacing="none">
                <ListItem icon={<SparklesIcon />} interactive active>
                  Dashboard
                </ListItem>
                <ListItem icon={<SearchIcon />} interactive>
                  Search
                </ListItem>
                <ListItem icon={<SettingsIcon />} interactive>
                  Settings
                </ListItem>
                <ListItem icon={<HeartIcon />} interactive>
                  Favorites
                </ListItem>
              </List>
            </Card>
          </Grid>
        </div>

        <div>
          <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
            Lists with Avatars and Dividers
          </Text>
          <Grid columns={2} gap="md">
            <Card title="Team Members">
              <List type="unstyled" spacing="md">
                <ListItem
                  avatar={
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: 'var(--gradient-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '12px',
                        fontWeight: 'var(--font-weight-bold)',
                      }}
                    >
                      JD
                    </div>
                  }
                >
                  <Text size="sm" weight="semibold">
                    John Doe
                  </Text>
                  <Text size="xs" tone="secondary">
                    Product Designer
                  </Text>
                </ListItem>
                <ListItem
                  avatar={
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: 'var(--gradient-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '12px',
                        fontWeight: 'var(--font-weight-bold)',
                      }}
                    >
                      SM
                    </div>
                  }
                >
                  <Text size="sm" weight="semibold">
                    Sarah Miller
                  </Text>
                  <Text size="xs" tone="secondary">
                    Frontend Developer
                  </Text>
                </ListItem>
              </List>
            </Card>

            <Card title="Project Phases">
              <List type="unstyled" dividers spacing="md">
                <ListItem icon={<CheckIcon />}>
                  <Text size="sm" weight="semibold">
                    Phase 1: Research
                  </Text>
                  <Text size="xs" tone="secondary">
                    User interviews and competitive analysis
                  </Text>
                </ListItem>
                <ListItem icon={<SparklesIcon />}>
                  <Text size="sm" weight="semibold">
                    Phase 2: Development
                  </Text>
                  <Text size="xs" tone="secondary">
                    Building and testing the product
                  </Text>
                </ListItem>
                <ListItem icon={<SearchIcon />}>
                  <Text size="sm" weight="semibold">
                    Phase 3: Launch
                  </Text>
                  <Text size="xs" tone="secondary">
                    Deployment and user feedback
                  </Text>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </div>
      </VStack>
    </div>
  ),
}
