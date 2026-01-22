/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Breadcrumb, BreadcrumbItem } from '../components/Navigation/Breadcrumb'
import { Card } from '../components/Display/Card'
import { Text } from '../components/Display/Text'
import { Button } from '../components/Interactive/Button'
import { VStack, HStack } from '../components/Layout/Stack'
import { Home } from 'lucide-react'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A breadcrumb navigation component that shows the current page location within a navigational hierarchy. Supports truncation, custom separators, and various sizes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of breadcrumb items to display',
      table: {
        type: { summary: 'BreadcrumbItem[]' },
      },
    },
    separator: {
      control: 'select',
      options: ['slash', 'chevron', 'dot'],
      description: 'Visual separator between breadcrumb items',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the breadcrumb component',
    },
    maxItems: {
      control: 'number',
      description: 'Maximum number of items to show before truncating',
    },
    onNavigate: {
      action: 'navigate',
      description: 'Callback fired when a breadcrumb item is clicked',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Sample breadcrumb data
const sampleItems: BreadcrumbItem[] = [
  { label: 'Home', href: '/', icon: <Home /> },
  { label: 'Products', href: '/products' },
  { label: 'Electronics', href: '/products/electronics' },
  { label: 'Laptops', href: '/products/electronics/laptops' },
  { label: 'MacBook Pro', current: true },
]

const HomeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9,22 9,12 15,12 15,22" />
  </svg>
)

const FolderIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
)

const FileIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
)

export const Default: Story = {
  args: {
    items: sampleItems,
    separator: 'chevron',
    size: 'md',
  },
}

export const WithoutIcons: Story = {
  args: {
    items: [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Settings', href: '/settings' },
      { label: 'Profile', href: '/settings/profile' },
      { label: 'Security', current: true },
    ],
    separator: 'chevron',
    size: 'md',
  },
}

export const SeparatorVariants: Story = {
  render: () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Docs', href: '/docs' },
      { label: 'Components', href: '/docs/components' },
      { label: 'Breadcrumb', current: true },
    ]

    return (
      <Card padding="xl" style={{ width: '600px' }}>
        <VStack gap="lg">
          <Text as="h3" style={{ margin: 0 }}>
            Separator Variants
          </Text>

          <VStack gap="md">
            <VStack gap="sm">
              <Text as="h5" style={{ margin: 0 }}>
                Chevron (Default)
              </Text>
              <Breadcrumb items={items} separator="chevron" />
            </VStack>

            <VStack gap="sm">
              <Text as="h5" style={{ margin: 0 }}>
                Slash
              </Text>
              <Breadcrumb items={items} separator="slash" />
            </VStack>

            <VStack gap="sm">
              <Text as="h5" style={{ margin: 0 }}>
                Dot
              </Text>
              <Breadcrumb items={items} separator="dot" />
            </VStack>
          </VStack>
        </VStack>
      </Card>
    )
  },
}

export const SizeVariants: Story = {
  render: () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Components', href: '/components' },
      { label: 'Navigation', current: true },
    ]

    return (
      <Card padding="xl" style={{ width: '500px' }}>
        <VStack gap="lg">
          <Text as="h3" style={{ margin: 0 }}>
            Size Variants
          </Text>

          <VStack gap="md">
            <VStack gap="sm">
              <Text as="h5" style={{ margin: 0 }}>
                Small
              </Text>
              <Breadcrumb items={items} size="sm" />
            </VStack>

            <VStack gap="sm">
              <Text as="h5" style={{ margin: 0 }}>
                Medium (Default)
              </Text>
              <Breadcrumb items={items} size="md" />
            </VStack>

            <VStack gap="sm">
              <Text as="h5" style={{ margin: 0 }}>
                Large
              </Text>
              <Breadcrumb items={items} size="lg" />
            </VStack>
          </VStack>
        </VStack>
      </Card>
    )
  },
}

export const WithTruncation: Story = {
  render: () => {
    const longItems: BreadcrumbItem[] = [
      { label: 'Dashboard', href: '/dashboard', icon: <HomeIcon /> },
      { label: 'Projects', href: '/projects', icon: <FolderIcon /> },
      {
        label: 'Web Application',
        href: '/projects/web-app',
        icon: <FolderIcon />,
      },
      {
        label: 'Frontend',
        href: '/projects/web-app/frontend',
        icon: <FolderIcon />,
      },
      {
        label: 'Components',
        href: '/projects/web-app/frontend/components',
        icon: <FolderIcon />,
      },
      {
        label: 'Navigation',
        href: '/projects/web-app/frontend/components/navigation',
        icon: <FolderIcon />,
      },
      { label: 'Breadcrumb.tsx', current: true, icon: <FileIcon /> },
    ]

    return (
      <Card padding="xl" style={{ width: '600px' }}>
        <VStack gap="lg">
          <Text as="h3" style={{ margin: 0 }}>
            Truncation Examples
          </Text>

          <VStack gap="md">
            <VStack gap="sm">
              <Text as="h5" style={{ margin: 0 }}>
                Full Path (No Truncation)
              </Text>
              <Breadcrumb items={longItems} />
            </VStack>

            <VStack gap="sm">
              <Text as="h5" style={{ margin: 0 }}>
                Max 5 Items
              </Text>
              <Breadcrumb items={longItems} maxItems={5} />
            </VStack>

            <VStack gap="sm">
              <Text as="h5" style={{ margin: 0 }}>
                Max 3 Items
              </Text>
              <Breadcrumb items={longItems} maxItems={3} />
            </VStack>
          </VStack>
        </VStack>
      </Card>
    )
  },
}

export const InteractiveNavigation: Story = {
  render: () => {
    const [currentPath, setCurrentPath] = useState('/home/projects/website')

    const pathSegments = currentPath.split('/').filter(Boolean)
    const items: BreadcrumbItem[] = [
      { label: 'Root', href: '/', icon: <HomeIcon /> },
      ...pathSegments.map((segment, index) => {
        const href = '/' + pathSegments.slice(0, index + 1).join('/')
        const isLast = index === pathSegments.length - 1
        return {
          label: segment.charAt(0).toUpperCase() + segment.slice(1),
          href: isLast ? undefined : href,
          current: isLast,
          icon:
            index === pathSegments.length - 1 ? <FileIcon /> : <FolderIcon />,
        }
      }),
    ]

    const handleNavigate = (item: BreadcrumbItem) => {
      if (item.href) {
        setCurrentPath(item.href)
      }
    }

    const navigateToPath = (path: string) => {
      setCurrentPath(path)
    }

    return (
      <Card padding="xl" style={{ width: '600px' }}>
        <VStack gap="lg">
          <Text as="h3" style={{ margin: 0 }}>
            Interactive Navigation
          </Text>

          <VStack gap="md">
            <Text
              as="p"
              style={{ margin: 0, color: 'var(--color-text-secondary)' }}
            >
              Click on breadcrumb items to navigate, or use the buttons below.
            </Text>

            <Card padding="md" variant="outlined">
              <Text
                as="p"
                style={{
                  margin: 0,
                  fontFamily: 'monospace',
                  fontSize: '0.875rem',
                }}
              >
                Current path: {currentPath}
              </Text>
            </Card>

            <Breadcrumb items={items} onNavigate={handleNavigate} size="md" />

            <VStack gap="sm">
              <Text as="h5" style={{ margin: 0 }}>
                Quick Navigation
              </Text>
              <HStack gap="sm">
                <Button size="sm" onClick={() => navigateToPath('/home')}>
                  Home
                </Button>
                <Button
                  size="sm"
                  onClick={() => navigateToPath('/home/projects')}
                >
                  Projects
                </Button>
                <Button
                  size="sm"
                  onClick={() => navigateToPath('/home/projects/website/docs')}
                >
                  Docs
                </Button>
                <Button
                  size="sm"
                  onClick={() =>
                    navigateToPath(
                      '/home/projects/website/docs/components/navigation/breadcrumb'
                    )
                  }
                >
                  Deep Path
                </Button>
              </HStack>
            </VStack>
          </VStack>
        </VStack>
      </Card>
    )
  },
}

export const FileSystemNavigation: Story = {
  render: () => {
    const [currentFolder, setCurrentFolder] = useState('components')

    const folderPaths = {
      root: { path: 'src', parent: null },
      components: { path: 'src/components', parent: 'root' },
      navigation: { path: 'src/components/navigation', parent: 'components' },
      forms: { path: 'src/components/forms', parent: 'components' },
      display: { path: 'src/components/display', parent: 'components' },
    }

    const getCurrentItems = () => {
      const current = folderPaths[currentFolder as keyof typeof folderPaths]
      const pathParts = current.path.split('/')

      return pathParts.map((part, index) => {
        const isLast = index === pathParts.length - 1
        return {
          label: part,
          href: isLast ? undefined : `#${part}`,
          current: isLast,
          icon: index === 0 ? <HomeIcon /> : <FolderIcon />,
        }
      })
    }

    const handleFolderChange = (folder: string) => {
      setCurrentFolder(folder)
    }

    return (
      <Card padding="xl" style={{ width: '600px' }}>
        <VStack gap="lg">
          <Text as="h3" style={{ margin: 0 }}>
            File System Navigation
          </Text>

          <VStack gap="md">
            <Breadcrumb items={getCurrentItems()} separator="slash" size="md" />

            <VStack gap="sm">
              <Text as="h5" style={{ margin: 0 }}>
                Available Folders
              </Text>
              <HStack gap="sm">
                {Object.keys(folderPaths).map((folder) => (
                  <Button
                    key={folder}
                    size="sm"
                    variant={currentFolder === folder ? 'primary' : 'secondary'}
                    onClick={() => handleFolderChange(folder)}
                  >
                    {folder}
                  </Button>
                ))}
              </HStack>
            </VStack>

            <Card padding="md" variant="outlined">
              <Text as="p" style={{ margin: 0, fontSize: '0.875rem' }}>
                Current folder:{' '}
                <strong>
                  {folderPaths[currentFolder as keyof typeof folderPaths]?.path}
                </strong>
              </Text>
            </Card>
          </VStack>
        </VStack>
      </Card>
    )
  },
}

export const CustomStyling: Story = {
  render: () => {
    const items = [
      { label: 'BienUI', href: '/' },
      { label: 'Documentation', href: '/docs' },
      { label: 'Components', href: '/docs/components' },
      { label: 'Breadcrumb', current: true },
    ]

    return (
      <Card padding="xl" style={{ width: '500px' }}>
        <VStack gap="lg">
          <Text as="h3" style={{ margin: 0 }}>
            Custom Styling
          </Text>

          <VStack gap="md">
            <VStack gap="sm">
              <Text as="h5" style={{ margin: 0 }}>
                Default Styling
              </Text>
              <Breadcrumb items={items} />
            </VStack>

            <VStack gap="sm">
              <Text as="h5" style={{ margin: 0 }}>
                With Custom Class
              </Text>
              <Breadcrumb items={items} className="custom-breadcrumb" />
            </VStack>
          </VStack>
        </VStack>
      </Card>
    )
  },
}
