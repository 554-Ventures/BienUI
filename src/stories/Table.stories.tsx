import type { Meta, StoryObj } from '@storybook/react'
import {
  Table,
  Badge,
  Text,
  VStack,
  Grid,
  EmptyState,
  Button,
  Banner,
  Callout,
  HStack,
} from '..'
import {
  SearchIcon,
  SparklesIcon,
  SettingsIcon,
  TrashIcon,
} from '../components/Icons'
import { Eye, Edit, MoreHorizontal } from 'lucide-react'

const meta = {
  title: 'Display/Table',
  component: Table,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A comprehensive Table component for displaying structured data with advanced features including sorting, filtering, pagination, custom rendering, and various styling options.

## Features
- **Sortable columns** - Click headers to sort data
- **Multiple variants** - Default, striped, bordered, and glass effects
- **Custom rendering** - Full control over cell content
- **Sticky headers** - Keep headers visible while scrolling
- **Pagination** - Built-in pagination controls
- **Empty states** - Graceful handling of no data
- **Responsive** - Automatic horizontal scrolling on mobile
- **Sizes** - Compact, default, and spacious options

## Usage
\`\`\`tsx
<Table
  columns={[
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' }
  ]}
  data={[
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' }
  ]}
  variant="striped"
  sortable
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'striped', 'bordered', 'glass-frost', 'glass-tint'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['compact', 'default', 'spacious'],
      description: 'Table size and spacing',
    },
    headerVariant: {
      control: 'select',
      options: ['default', 'glass-frost', 'glass-tint'],
      description: 'Header styling variant with glassmorphism effects',
    },
    stickyHeader: {
      control: 'boolean',
      description: 'Keep header visible while scrolling',
    },
    pagination: {
      control: 'boolean',
      description: 'Enable pagination controls',
    },
  },
  args: {
    variant: 'default',
    headerVariant: 'default',
    stickyHeader: false,
    pagination: false,
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

// Basic table data
const basicUserData = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: '2',
    name: 'Sarah Miller',
    email: 'sarah@example.com',
    role: 'Editor',
    status: 'Active',
  },
  {
    id: '3',
    name: 'Alex Kim',
    email: 'alex@example.com',
    role: 'Viewer',
    status: 'Inactive',
  },
  {
    id: '4',
    name: 'Emily Chen',
    email: 'emily@example.com',
    role: 'Editor',
    status: 'Active',
  },
]

const productData = [
  {
    id: '1',
    product: 'Laptop Pro',
    category: 'Electronics',
    price: '$1,299',
    stock: 45,
  },
  {
    id: '2',
    product: 'Desk Chair',
    category: 'Furniture',
    price: '$349',
    stock: 23,
  },
  {
    id: '3',
    product: 'Coffee Maker',
    category: 'Appliances',
    price: '$89',
    stock: 67,
  },
  {
    id: '4',
    product: 'Monitor 4K',
    category: 'Electronics',
    price: '$599',
    stock: 12,
  },
  {
    id: '5',
    product: 'Standing Desk',
    category: 'Furniture',
    price: '$799',
    stock: 8,
  },
]

export const Default: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <Table
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'email', label: 'Email' },
          { key: 'role', label: 'Role' },
          { key: 'status', label: 'Status' },
        ]}
        data={basicUserData}
      />
    </div>
  ),
}

export const SortableColumns: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <Table
        columns={[
          { key: 'product', label: 'Product', sortable: true },
          { key: 'category', label: 'Category', sortable: true },
          { key: 'price', label: 'Price', sortable: true, align: 'right' },
          {
            key: 'stock',
            label: 'Stock',
            sortable: true,
            align: 'center',
          },
        ]}
        data={productData}
      />
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="xl">
        <Text size="lg">Table Variants</Text>

        <Grid columns={2} gap="md">
          <VStack gap="sm">
            <Text size="md" weight="semibold">
              Bordered
            </Text>
            <Table
              variant="bordered"
              columns={[
                { key: 'name', label: 'Name' },
                { key: 'value', label: 'Value', align: 'right' },
              ]}
              data={[
                { id: '1', name: 'Revenue', value: '$45,000' },
                { id: '2', name: 'Expenses', value: '$23,500' },
                { id: '3', name: 'Profit', value: '$21,500' },
              ]}
            />
          </VStack>

          <VStack gap="sm">
            <Text size="md" weight="semibold">
              Striped
            </Text>
            <Table
              variant="striped"
              columns={[
                { key: 'name', label: 'Name' },
                { key: 'value', label: 'Value', align: 'right' },
              ]}
              data={[
                { id: '1', name: 'Revenue', value: '$45,000' },
                { id: '2', name: 'Expenses', value: '$23,500' },
                { id: '3', name: 'Profit', value: '$21,500' },
              ]}
            />
          </VStack>
        </Grid>
      </VStack>
    </div>
  ),
}

export const TableSizes: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="xl">
        <Text size="lg">Table Sizes</Text>

        <VStack gap="md">
          <VStack gap="sm">
            <Text size="md" weight="semibold">
              Compact
            </Text>
            <Table
              size="compact"
              columns={[
                { key: 'task', label: 'Task' },
                { key: 'assignee', label: 'Assignee' },
                { key: 'due', label: 'Due Date' },
              ]}
              data={[
                {
                  id: '1',
                  task: 'Design review',
                  assignee: 'John',
                  due: 'Today',
                },
                {
                  id: '2',
                  task: 'Code review',
                  assignee: 'Sarah',
                  due: 'Tomorrow',
                },
              ]}
            />
          </VStack>

          <VStack gap="sm">
            <Text size="md" weight="semibold">
              Spacious
            </Text>
            <Table
              size="spacious"
              columns={[
                { key: 'task', label: 'Task' },
                { key: 'assignee', label: 'Assignee' },
                { key: 'due', label: 'Due Date' },
              ]}
              data={[
                {
                  id: '1',
                  task: 'Design review',
                  assignee: 'John',
                  due: 'Today',
                },
                {
                  id: '2',
                  task: 'Code review',
                  assignee: 'Sarah',
                  due: 'Tomorrow',
                },
              ]}
            />
          </VStack>
        </VStack>
      </VStack>
    </div>
  ),
}

export const CustomRendering: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="md">
        <Text size="lg">Custom Cell Rendering</Text>
        <Text size="sm" tone="secondary">
          Custom components and styling for table cells
        </Text>
        <Table
          columns={[
            { key: 'name', label: 'User' },
            { key: 'email', label: 'Email' },
            {
              key: 'role',
              label: 'Role',
              render: (value) => (
                <span
                  style={{
                    padding: '4px 8px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 'var(--font-weight-medium)',
                    background:
                      value === 'Admin'
                        ? 'rgba(29, 117, 188, 0.1)'
                        : value === 'Editor'
                          ? 'rgba(231, 192, 103, 0.2)'
                          : 'rgba(156, 163, 175, 0.2)',
                    color:
                      value === 'Admin'
                        ? '#1d75bc'
                        : value === 'Editor'
                          ? '#d4a574'
                          : 'var(--color-text-secondary)',
                  }}
                >
                  {value as string}
                </span>
              ),
            },
            {
              key: 'status',
              label: 'Status',
              align: 'center',
              render: (value) => (
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: 'var(--font-size-sm)',
                    color: value === 'Active' ? '#14b8a6' : '#9ca3af',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: value === 'Active' ? '#14b8a6' : '#9ca3af',
                    }}
                  />
                  {value}
                </span>
              ),
            },
          ]}
          data={basicUserData.slice(0, 3)}
        />
      </VStack>
    </div>
  ),
}

export const WithActions: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="md">
        <Text size="lg">Table with Actions</Text>
        <Text size="sm" tone="secondary">
          Interactive buttons and action columns
        </Text>
        <Table
          columns={[
            { key: 'name', label: 'Project' },
            { key: 'owner', label: 'Owner' },
            { key: 'progress', label: 'Progress', align: 'center' },
            {
              key: 'actions',
              label: 'Actions',
              align: 'right',
              render: () => (
                <div
                  style={{
                    display: 'flex',
                    gap: '8px',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    iconOnly
                    onClick={() => alert('View project')}
                  >
                    <SparklesIcon />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconOnly
                    onClick={() => alert('Edit project')}
                  >
                    <SettingsIcon />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconOnly
                    onClick={() => alert('Delete project')}
                  >
                    <TrashIcon />
                  </Button>
                </div>
              ),
            },
          ]}
          data={[
            {
              id: '1',
              name: 'Website Redesign',
              owner: 'John Doe',
              progress: '75%',
            },
            {
              id: '2',
              name: 'Mobile App',
              owner: 'Sarah Miller',
              progress: '50%',
            },
            {
              id: '3',
              name: 'API Integration',
              owner: 'Alex Kim',
              progress: '90%',
            },
          ]}
        />
      </VStack>
    </div>
  ),
}

export const StickyHeader: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="md">
        <Text size="lg">Sticky Header with Scroll</Text>
        <Text size="sm" tone="secondary">
          Header stays visible while scrolling through data
        </Text>
        <Table
          stickyHeader
          maxHeight={300}
          columns={[
            { key: 'id', label: 'ID', width: '60px' },
            { key: 'transaction', label: 'Transaction' },
            { key: 'amount', label: 'Amount', align: 'right' },
            { key: 'date', label: 'Date' },
            { key: 'status', label: 'Status' },
          ]}
          data={Array.from({ length: 15 }, (_, i) => ({
            id: String(i + 1).padStart(3, '0'),
            transaction: `Transaction ${i + 1}`,
            amount: `$${(((i + 1) * 127.43) % 1000).toFixed(2)}`,
            date: `2026-01-${String(i + 1).padStart(2, '0')}`,
            status:
              i % 3 === 0
                ? 'Pending'
                : i % 2 === 0
                  ? 'Completed'
                  : 'Processing',
          }))}
        />
      </VStack>
    </div>
  ),
}

export const EmptyTableState: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="md">
        <Text size="lg">Empty State</Text>
        <Text size="sm" tone="secondary">
          Graceful handling when no data is available
        </Text>
        <Table
          columns={[
            { key: 'name', label: 'Name' },
            { key: 'email', label: 'Email' },
            { key: 'role', label: 'Role' },
          ]}
          data={[]}
          emptyState={
            <EmptyState
              title="No data found"
              description="There are no items to display"
              action={
                <Button variant="primary" size="sm">
                  Add Item
                </Button>
              }
            />
          }
        />
      </VStack>
    </div>
  ),
}

export const GlassHeaderVariants: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="xl">
        <VStack gap="sm">
          <Text size="lg">Glass Header Variants ✨</Text>
          <Text size="sm" tone="secondary">
            Modern glassmorphism effects for table headers
          </Text>
        </VStack>

        <Grid columns={2} gap="md">
          <VStack gap="sm">
            <Text size="md" weight="semibold">
              Glass Frost Header
            </Text>
            <Table
              headerVariant="glass-frost"
              columns={[
                { key: 'name', label: 'Product' },
                { key: 'category', label: 'Category' },
                { key: 'price', label: 'Price', align: 'right' },
              ]}
              data={[
                {
                  id: '1',
                  name: 'Wireless Mouse',
                  category: 'Electronics',
                  price: '$29.99',
                },
                {
                  id: '2',
                  name: 'Keyboard',
                  category: 'Electronics',
                  price: '$79.99',
                },
                {
                  id: '3',
                  name: 'Monitor Stand',
                  category: 'Accessories',
                  price: '$49.99',
                },
              ]}
            />
          </VStack>

          <VStack gap="sm">
            <Text size="md" weight="semibold">
              Glass Tint Header
            </Text>
            <Table
              headerVariant="glass-tint"
              columns={[
                { key: 'name', label: 'Product' },
                { key: 'category', label: 'Category' },
                { key: 'price', label: 'Price', align: 'right' },
              ]}
              data={[
                {
                  id: '1',
                  name: 'Wireless Mouse',
                  category: 'Electronics',
                  price: '$29.99',
                },
                {
                  id: '2',
                  name: 'Keyboard',
                  category: 'Electronics',
                  price: '$79.99',
                },
                {
                  id: '3',
                  name: 'Monitor Stand',
                  category: 'Accessories',
                  price: '$49.99',
                },
              ]}
            />
          </VStack>
        </Grid>
      </VStack>
    </div>
  ),
}

export const WithPagination: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="md">
        <Text size="lg">Table with Pagination</Text>
        <Text size="sm" tone="secondary">
          Navigate through large datasets efficiently
        </Text>
        <Table
          pagination
          page={1}
          pageSize={5}
          onPageChange={(newPage) => alert(`Page changed to: ${newPage}`)}
          onPageSizeChange={(size) => alert(`Page size changed to: ${size}`)}
          columns={[
            { key: 'id', label: 'ID', width: '60px' },
            { key: 'customer', label: 'Customer', sortable: true },
            { key: 'email', label: 'Email', sortable: true },
            { key: 'status', label: 'Status', align: 'center' },
            {
              key: 'amount',
              label: 'Amount',
              align: 'right',
              sortable: true,
            },
          ]}
          data={Array.from({ length: 25 }, (_, i) => ({
            id: String(i + 1).padStart(3, '0'),
            customer: `Customer ${i + 1}`,
            email: `customer${i + 1}@example.com`,
            status: i % 3 === 0 ? 'Active' : 'Pending',
            amount: `$${((((i + 1) * 73.21) % 500) + 50).toFixed(2)}`,
          }))}
        />
      </VStack>
    </div>
  ),
}

export const ProductCatalog: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="md">
        <Text size="lg">Product Catalog Table</Text>
        <Text size="sm" tone="secondary">
          Rich product data with images, badges, and status indicators
        </Text>
        <Table
          variant="striped"
          columns={[
            { key: 'image', label: '', width: '60px' },
            { key: 'name', label: 'Product' },
            { key: 'category', label: 'Category', width: '150px' },
            { key: 'price', label: 'Price', width: '100px', align: 'right' },
            { key: 'stock', label: 'Stock', width: '80px', align: 'center' },
            { key: 'status', label: 'Status', width: '120px' },
          ]}
          data={[
            {
              id: 1,
              image:
                'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=50&h=50&fit=crop',
              name: 'Wireless Headphones',
              category: 'Electronics',
              price: '$199',
              stock: 45,
              status: 'In Stock',
            },
            {
              id: 2,
              image:
                'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=50&h=50&fit=crop',
              name: 'Running Shoes',
              category: 'Fashion',
              price: '$129',
              stock: 12,
              status: 'Low Stock',
            },
            {
              id: 3,
              image:
                'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=50&h=50&fit=crop',
              name: 'Smart Watch',
              category: 'Electronics',
              price: '$299',
              stock: 0,
              status: 'Out of Stock',
            },
          ]}
          renderCell={(value, column, row) => {
            if (column.key === 'image') {
              return (
                <img
                  src={value}
                  alt={row.name}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    objectFit: 'cover',
                  }}
                />
              )
            }
            if (column.key === 'status') {
              return (
                <Badge
                  variant={
                    value === 'In Stock'
                      ? 'success'
                      : value === 'Low Stock'
                        ? 'warning'
                        : 'error'
                  }
                  size="sm"
                >
                  {value}
                </Badge>
              )
            }
            if (column.key === 'stock') {
              return (
                <Text
                  tone={
                    value === 0 ? 'error' : value < 20 ? 'warning' : 'primary'
                  }
                  size="sm"
                >
                  {value}
                </Text>
              )
            }
            return value
          }}
        />
      </VStack>
    </div>
  ),
}

export const TransactionHistory: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="md">
        <Text size="lg">Transaction History</Text>
        <Text size="sm" tone="secondary">
          Financial data with color-coded amounts and status badges
        </Text>
        <Table
          variant="bordered"
          columns={[
            { key: 'id', label: 'Transaction ID', width: '140px' },
            { key: 'date', label: 'Date', width: '120px' },
            { key: 'description', label: 'Description' },
            { key: 'amount', label: 'Amount', width: '120px', align: 'right' },
            { key: 'type', label: 'Type', width: '100px' },
            { key: 'status', label: 'Status', width: '120px' },
          ]}
          data={[
            {
              id: 'TXN-001',
              date: '2023-12-15',
              description: 'Payment for subscription',
              amount: '+$29.99',
              type: 'Credit',
              status: 'Completed',
            },
            {
              id: 'TXN-002',
              date: '2023-12-14',
              description: 'Coffee shop purchase',
              amount: '-$4.50',
              type: 'Debit',
              status: 'Completed',
            },
            {
              id: 'TXN-003',
              date: '2023-12-13',
              description: 'Online shopping',
              amount: '-$89.99',
              type: 'Debit',
              status: 'Pending',
            },
            {
              id: 'TXN-004',
              date: '2023-12-12',
              description: 'Refund from return',
              amount: '+$45.00',
              type: 'Credit',
              status: 'Failed',
            },
          ]}
          renderCell={(value, column, row) => {
            if (column.key === 'amount') {
              const isCredit = value.startsWith('+')
              return (
                <Text tone={isCredit ? 'success' : 'error'} weight="medium">
                  {value}
                </Text>
              )
            }
            if (column.key === 'type') {
              return (
                <Badge
                  variant={value === 'Credit' ? 'success' : 'info'}
                  size="sm"
                >
                  {value}
                </Badge>
              )
            }
            if (column.key === 'status') {
              return (
                <Badge
                  variant={
                    value === 'Completed'
                      ? 'success'
                      : value === 'Pending'
                        ? 'warning'
                        : 'error'
                  }
                  size="sm"
                >
                  {value}
                </Badge>
              )
            }
            return value
          }}
        />
      </VStack>
    </div>
  ),
}

export const AllVariationsShowcase: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <VStack gap="xl">
        <VStack gap="sm">
          <Text size="xl">Complete Table Showcase 🚀</Text>
          <Text size="sm" tone="secondary">
            Comprehensive examples demonstrating all table features and
            capabilities
          </Text>
        </VStack>

        <Grid columns={1} gap="xl">
          {/* Basic Usage */}
          <VStack gap="md">
            <Text size="lg">Basic Table</Text>
            <Table
              columns={[
                { key: 'name', label: 'Name' },
                { key: 'email', label: 'Email' },
                { key: 'role', label: 'Role' },
                { key: 'status', label: 'Status' },
              ]}
              data={basicUserData.slice(0, 3)}
            />
          </VStack>

          {/* Advanced Features */}
          <VStack gap="md">
            <Text size="lg">Advanced Features</Text>
            <Table
              variant="striped"
              size="spacious"
              headerVariant="glass-frost"
              columns={[
                { key: 'product', label: 'Product', sortable: true },
                { key: 'category', label: 'Category', sortable: true },
                {
                  key: 'price',
                  label: 'Price',
                  sortable: true,
                  align: 'right',
                },
                {
                  key: 'stock',
                  label: 'Stock',
                  sortable: true,
                  align: 'center',
                },
                {
                  key: 'actions',
                  label: 'Actions',
                  align: 'right',
                  render: () => (
                    <HStack gap="xs">
                      <Button
                        variant="ghost"
                        size="sm"
                        iconOnly
                        onClick={() => alert('View')}
                      >
                        <Eye size={16} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        iconOnly
                        onClick={() => alert('Edit')}
                      >
                        <Edit size={16} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        iconOnly
                        onClick={() => alert('More')}
                      >
                        <MoreHorizontal size={16} />
                      </Button>
                    </HStack>
                  ),
                },
              ]}
              data={productData.slice(0, 4)}
            />
          </VStack>
        </Grid>

        <Banner variant="info">
          <Text size="sm">
            💡 Tables automatically become scrollable on smaller screens to
            maintain readability.
          </Text>
        </Banner>

        <Callout
          trigger={
            <Button variant="ghost" size="sm">
              Info
            </Button>
          }
        >
          <Text size="sm">
            ✨ Use glass-frost or glass-tint header variants for modern,
            sophisticated table designs with glassmorphism effects!
          </Text>
        </Callout>
      </VStack>
    </div>
  ),
}
