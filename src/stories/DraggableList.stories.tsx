/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
  DraggableList,
  DraggableListProvider,
  Card,
  Button,
  Text,
  Avatar,
  Badge,
  VStack,
  HStack,
} from '..'
import { DraggableListItem } from '../components/Interactive/DraggableList'

const meta: Meta<typeof DraggableList> = {
  title: 'Interactive/DraggableList',
  component: DraggableList,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A flexible drag-and-drop list component for reordering items with support for custom rendering and drag handles. Requires DraggableListProvider wrapper for drag functionality.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Array of items to display in the draggable list',
      control: false,
    },
    onReorder: {
      description: 'Callback function called when items are reordered',
      action: 'reordered',
    },
    renderItem: {
      description: 'Optional custom render function for each item',
      control: false,
    },
    showHandle: {
      description: 'Whether to show the drag handle for each item',
      control: 'boolean',
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof DraggableList>

export const Default: Story = {
  render: (args) => {
    const [people, setPeople] = useState([
      { id: 1, content: 'Alice Johnson' },
      { id: 2, content: 'Bob Smith' },
      { id: 3, content: 'Charlie Davis' },
      { id: 4, content: 'Diana Wilson' },
      { id: 5, content: 'Eve Martinez' },
    ])

    return (
      <DraggableListProvider>
        <div style={{ maxWidth: '500px' }}>
          <Text size="sm" weight="semibold" style={{ marginBottom: '12px' }}>
            Basic Drag and Drop
          </Text>
          <Card>
            <DraggableList {...args} items={people} onReorder={setPeople} />
          </Card>
        </div>
      </DraggableListProvider>
    )
  },
  args: {
    showHandle: true,
  },
}

export const WithoutHandle: Story = {
  render: () => {
    const [rankings, setRankings] = useState([
      { id: 1, content: '🥇 First Place' },
      { id: 2, content: '🥈 Second Place' },
      { id: 3, content: '🥉 Third Place' },
      { id: 4, content: '🏅 Fourth Place' },
    ])

    return (
      <DraggableListProvider>
        <div style={{ maxWidth: '500px' }}>
          <Text size="sm" weight="semibold" style={{ marginBottom: '12px' }}>
            Without Drag Handle
          </Text>
          <Card>
            <Text size="xs" tone="secondary" style={{ marginBottom: '12px' }}>
              Drag anywhere on the item
            </Text>
            <DraggableList
              items={rankings}
              onReorder={setRankings}
              showHandle={false}
            />
          </Card>
        </div>
      </DraggableListProvider>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Draggable list without visible drag handles - the entire item becomes draggable.',
      },
    },
  },
}

export const TaskList: Story = {
  render: () => {
    const [tasks, setTasks] = useState([
      {
        id: 1,
        content: 'Design homepage mockups',
        priority: 'High',
        status: 'In Progress',
      },
      {
        id: 2,
        content: 'Implement user authentication',
        priority: 'Critical',
        status: 'To Do',
      },
      {
        id: 3,
        content: 'Write API documentation',
        priority: 'Medium',
        status: 'In Progress',
      },
      {
        id: 4,
        content: 'Set up CI/CD pipeline',
        priority: 'High',
        status: 'To Do',
      },
    ])

    return (
      <DraggableListProvider>
        <div style={{ maxWidth: '600px' }}>
          <Text size="sm" weight="semibold" style={{ marginBottom: '12px' }}>
            Task List with Custom Rendering
          </Text>
          <Card>
            <DraggableList
              items={tasks}
              onReorder={setTasks}
              renderItem={(item) => (
                <VStack gap="xs" style={{ width: '100%' }}>
                  <HStack
                    gap="sm"
                    style={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Text weight="semibold">{item.content}</Text>
                    <HStack gap="xs">
                      <Badge
                        variant={
                          item.priority === 'success'
                            ? 'error'
                            : item.priority === 'error'
                              ? 'warning'
                              : item.priority === 'Medium'
                                ? 'primary'
                                : 'info'
                        }
                        size="sm"
                      >
                        {item.priority}
                      </Badge>
                      <Badge
                        variant={
                          item.status === 'Done'
                            ? 'success'
                            : item.status === 'In Progress'
                              ? 'primary'
                              : 'secondary'
                        }
                        size="sm"
                      >
                        {item.status}
                      </Badge>
                    </HStack>
                  </HStack>
                </VStack>
              )}
            />
          </Card>
        </div>
      </DraggableListProvider>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Task management interface with priority and status badges.',
      },
    },
  },
}

export const FeatureList: Story = {
  render: () => {
    const [features, setFeatures] = useState([
      { id: 1, content: '🎨 Custom theming support' },
      { id: 2, content: '🌙 Dark mode toggle' },
      { id: 3, content: '📱 Responsive design' },
      { id: 4, content: '♿ Accessibility features' },
      { id: 5, content: '⚡ Performance optimization' },
    ])

    return (
      <DraggableListProvider>
        <div style={{ maxWidth: '500px' }}>
          <Text size="sm" weight="semibold" style={{ marginBottom: '12px' }}>
            Feature Priority List
          </Text>
          <Card>
            <Text size="xs" tone="secondary" style={{ marginBottom: '12px' }}>
              Drag to reorder features by priority
            </Text>
            <DraggableList
              items={features}
              onReorder={setFeatures}
              renderItem={(item, isDragging) => (
                <HStack gap="sm" style={{ alignItems: 'center' }}>
                  <Text size="md">{item.content}</Text>
                  {isDragging && (
                    <Badge variant="primary" size="sm">
                      Moving...
                    </Badge>
                  )}
                </HStack>
              )}
            />
          </Card>
        </div>
      </DraggableListProvider>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Feature prioritization with emoji icons and drag feedback.',
      },
    },
  },
}

export const UserManagement: Story = {
  render: () => {
    const [users, setUsers] = useState([
      {
        id: '1',
        name: 'Alice Johnson',
        role: 'Product Manager',
        avatar: 'AJ',
        status: 'active',
      },
      {
        id: '2',
        name: 'Bob Smith',
        role: 'Frontend Developer',
        avatar: 'BS',
        status: 'active',
      },
      {
        id: '3',
        name: 'Carol Davis',
        role: 'UX Designer',
        avatar: 'CD',
        status: 'away',
      },
      {
        id: '4',
        name: 'David Wilson',
        role: 'Backend Developer',
        avatar: 'DW',
        status: 'active',
      },
    ])

    const userItems: DraggableListItem[] = users.map((user) => ({
      id: user.id,
      content: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            width: '100%',
          }}
        >
          <Avatar size="sm" name={user.avatar} />
          <div style={{ flex: 1 }}>
            <Text weight="medium">{user.name}</Text>
            <Text size="sm" tone="tertiary">
              {user.role}
            </Text>
          </div>
          <Badge variant={user.status === 'active' ? 'success' : 'warning'}>
            {user.status}
          </Badge>
        </div>
      ),
    }))

    return (
      <DraggableListProvider>
        <div style={{ maxWidth: '500px' }}>
          <Text size="lg" weight="semibold" style={{ marginBottom: '16px' }}>
            Team Members (Drag to Reorder)
          </Text>
          <DraggableList
            items={userItems}
            onReorder={(newItems) => {
              // Update the original users array based on the new order
              const newUsers = newItems
                .map((item) => users.find((user) => user.id === item.id))
                .filter(Boolean)
              setUsers(newUsers)
            }}
            showHandle={true}
          />
        </div>
      </DraggableListProvider>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Complex user management interface with avatars, names, roles, and status badges.',
      },
    },
  },
}

export const PlaygroundExample: Story = {
  render: () => {
    const [items, setItems] = useState([
      { id: '1', content: 'First item in the list' },
      { id: '2', content: 'Second item to drag around' },
      { id: '3', content: 'Third item with more content' },
    ])
    const [newItemText, setNewItemText] = useState('')

    const addItem = () => {
      if (newItemText.trim()) {
        const newItem: DraggableListItem = {
          id: Date.now().toString(),
          content: newItemText.trim(),
        }
        setItems([...items, newItem])
        setNewItemText('')
      }
    }

    const removeItem = (id: string | number) => {
      setItems(items.filter((item) => item.id !== id))
    }

    const itemsWithActions: DraggableListItem[] = items.map((item) => ({
      ...item,
      content: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Text>{item.content}</Text>
          <Button variant="ghost" size="sm" onClick={() => removeItem(item.id)}>
            Remove
          </Button>
        </div>
      ),
    }))

    return (
      <DraggableListProvider>
        <div style={{ maxWidth: '500px' }}>
          <div style={{ marginBottom: '16px' }}>
            <Text size="lg" weight="semibold">
              Interactive Playground
            </Text>
            <Text size="sm" tone="tertiary" style={{ marginTop: '4px' }}>
              Add items, reorder by dragging, and remove items
            </Text>
          </div>

          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
            <input
              type="text"
              value={newItemText}
              onChange={(e) => setNewItemText(e.target.value)}
              placeholder="Enter new item..."
              style={{
                flex: 1,
                padding: '8px 12px',
                border: '1px solid var(--color-border-base)',
                borderRadius: 'var(--radius-md)',
                fontSize: '14px',
              }}
              onKeyPress={(e) => e.key === 'Enter' && addItem()}
            />
            <Button onClick={addItem} disabled={!newItemText.trim()}>
              Add
            </Button>
          </div>

          <DraggableList
            items={itemsWithActions}
            onReorder={setItems}
            showHandle={true}
          />
        </div>
      </DraggableListProvider>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Interactive playground where you can add, remove, and reorder items dynamically.',
      },
    },
  },
}
