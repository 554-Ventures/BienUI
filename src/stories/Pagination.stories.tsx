/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Pagination } from '../components/Navigation/Pagination'
import { Card } from '../components/Display/Card'
import { Text } from '../components/Display/Text'
import { VStack } from '../components/Layout/Stack'
import { List, ListItem } from '../components/Display/List'

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A standalone Pagination component for navigating multi-page data sets.
It can be paired with any data display component such as Table, List, Grid, or custom layouts.

## Features
- **Page navigation** – previous/next buttons and numbered page buttons
- **Smart ellipsis** – collapses distant pages into \`...\` for large page counts
- **Page size selector** – optional dropdown to change items per page
- **Item count summary** – shows the range of items currently displayed
- **Accessible** – \`aria-label\` on nav buttons, \`aria-current="page"\` on active page
- **Dark mode** – automatically adapts via CSS custom properties

## Usage
\`\`\`tsx
const [page, setPage] = useState(1)
const [pageSize, setPageSize] = useState(10)

<Pagination
  page={page}
  pageSize={pageSize}
  total={235}
  onPageChange={setPage}
  onPageSizeChange={setPageSize}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    page: {
      control: { type: 'number', min: 1 },
      description: 'Current page (1-indexed)',
    },
    pageSize: {
      control: { type: 'number', min: 1 },
      description: 'Number of items per page',
    },
    total: {
      control: { type: 'number', min: 0 },
      description: 'Total number of items',
    },
    pageSizeOptions: {
      control: 'object',
      description: 'Available page size options',
    },
    pageSizeLabel: {
      control: 'text',
      description: 'Label shown before the page size selector',
    },
    onPageChange: {
      action: 'page changed',
      description: 'Callback when the user changes the page',
    },
    onPageSizeChange: {
      action: 'page size changed',
      description: 'Callback when the user changes the page size',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class name',
      table: { category: 'Styling' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Pagination>

// ---------------------------------------------------------------------------
// Default
// ---------------------------------------------------------------------------
export const Default: Story = {
  args: {
    page: 1,
    pageSize: 10,
    total: 100,
  },
  render: (args) => {
    const [page, setPage] = useState(args.page)
    return <Pagination {...args} page={page} onPageChange={setPage} />
  },
}

// ---------------------------------------------------------------------------
// With page size selector
// ---------------------------------------------------------------------------
export const WithPageSizeSelector: Story = {
  name: 'With Page Size Selector',
  render: () => {
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    return (
      <Pagination
        page={page}
        pageSize={pageSize}
        total={235}
        pageSizeOptions={[5, 10, 25, 50]}
        onPageChange={setPage}
        onPageSizeChange={(size) => {
          setPageSize(size)
          setPage(1)
        }}
      />
    )
  },
}

// ---------------------------------------------------------------------------
// Many pages (ellipsis behaviour)
// ---------------------------------------------------------------------------
export const ManyPages: Story = {
  name: 'Many Pages (Ellipsis)',
  render: () => {
    const [page, setPage] = useState(1)
    return (
      <VStack gap="lg">
        <Text size="sm" color="secondary">
          Current page: {page}
        </Text>
        <Pagination
          page={page}
          pageSize={10}
          total={500}
          onPageChange={setPage}
        />
      </VStack>
    )
  },
}

// ---------------------------------------------------------------------------
// Middle of many pages
// ---------------------------------------------------------------------------
export const MiddleOfManyPages: Story = {
  name: 'Middle of Many Pages',
  render: () => {
    const [page, setPage] = useState(25)
    return (
      <Pagination
        page={page}
        pageSize={10}
        total={500}
        onPageChange={setPage}
      />
    )
  },
}

// ---------------------------------------------------------------------------
// Single page (no navigation needed)
// ---------------------------------------------------------------------------
export const SinglePage: Story = {
  name: 'Single Page',
  args: {
    page: 1,
    pageSize: 10,
    total: 7,
  },
  render: (args) => {
    const [page, setPage] = useState(args.page)
    return <Pagination {...args} page={page} onPageChange={setPage} />
  },
}

// ---------------------------------------------------------------------------
// Empty data set
// ---------------------------------------------------------------------------
export const EmptyState: Story = {
  name: 'Empty Data Set',
  args: {
    page: 1,
    pageSize: 10,
    total: 0,
  },
  render: (args) => {
    const [page, setPage] = useState(args.page)
    return <Pagination {...args} page={page} onPageChange={setPage} />
  },
}

// ---------------------------------------------------------------------------
// Custom page size label
// ---------------------------------------------------------------------------
export const CustomPageSizeLabel: Story = {
  name: 'Custom Page Size Label',
  render: () => {
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    return (
      <Pagination
        page={page}
        pageSize={pageSize}
        total={120}
        pageSizeLabel="Results per page:"
        pageSizeOptions={[10, 20, 50]}
        onPageChange={setPage}
        onPageSizeChange={(size) => {
          setPageSize(size)
          setPage(1)
        }}
      />
    )
  },
}

// ---------------------------------------------------------------------------
// Used with a List component
// ---------------------------------------------------------------------------
const ALL_ITEMS = Array.from({ length: 47 }, (_, i) => ({
  id: i + 1,
  label: `Item ${String(i + 1).padStart(2, '0')}`,
  description: `Description for item ${i + 1}`,
}))

export const WithList: Story = {
  name: 'Used with List',
  render: () => {
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(8)

    const start = (page - 1) * pageSize
    const pageItems = ALL_ITEMS.slice(start, start + pageSize)

    return (
      <Card>
        <VStack gap="none">
          <div
            style={{
              padding: '16px 20px',
              borderBottom: '1px solid var(--color-border-subtle)',
            }}
          >
            <Text weight="semibold">Paginated List</Text>
          </div>
          <List>
            {pageItems.map((item) => (
              <ListItem key={item.id} description={item.description}>
                {item.label}
              </ListItem>
            ))}
          </List>
          <Pagination
            page={page}
            pageSize={pageSize}
            total={ALL_ITEMS.length}
            pageSizeOptions={[4, 8, 16]}
            pageSizeLabel="Items per page:"
            onPageChange={setPage}
            onPageSizeChange={(size) => {
              setPageSize(size)
              setPage(1)
            }}
          />
        </VStack>
      </Card>
    )
  },
}

// ---------------------------------------------------------------------------
// Playground (fully controlled via Controls panel)
// ---------------------------------------------------------------------------
export const Playground: Story = {
  render: (args) => {
    const [page, setPage] = useState(args.page ?? 1)
    const [pageSize, setPageSize] = useState(args.pageSize ?? 10)
    return (
      <VStack gap="md">
        <Text size="sm" color="secondary">
          Page {page} · {pageSize} per page · {args.total ?? 100} total items
        </Text>
        <Pagination
          {...args}
          page={page}
          pageSize={pageSize}
          onPageChange={(p) => {
            setPage(p)
            args.onPageChange?.(p)
          }}
          onPageSizeChange={(s) => {
            setPageSize(s)
            setPage(1)
            args.onPageSizeChange?.(s)
          }}
        />
      </VStack>
    )
  },
  args: {
    page: 3,
    pageSize: 10,
    total: 200,
    pageSizeOptions: [5, 10, 25, 50],
    pageSizeLabel: 'Items per page:',
  },
}
