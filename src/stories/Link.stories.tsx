/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Link } from '../components/Navigation/Link'
import { Card } from '../components/Display/Card'
import { Text } from '../components/Display/Text'
import { Button } from '../components/Interactive/Button'
import { VStack, HStack } from '../components/Layout/Stack'

const meta: Meta<typeof Link> = {
  title: 'Navigation/Link',
  component: Link,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A versatile link component with multiple variants, sizes, and customization options. Supports icons, external links, and various underline behaviors.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: 'The URL to link to',
    },
    variant: {
      control: 'select',
      options: [
        'default',
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
        'muted',
      ],
      description: 'Visual style variant of the link',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Size of the link',
    },
    underline: {
      control: 'select',
      options: ['always', 'hover', 'none'],
      description: 'Underline behavior',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the link is disabled',
    },
    iconStart: {
      control: 'object',
      description: 'Icon to display before text',
    },
    iconEnd: {
      control: 'object',
      description: 'Icon to display after text',
    },
    external: {
      control: 'boolean',
      description: 'Whether link is external (opens in new tab)',
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
      description: 'Font weight of the link text',
    },
    children: {
      control: 'text',
      description: 'Link text content',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Icons for examples

const ArrowRightIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

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
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)

const DownloadIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

const HeartIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

const StarIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

export const Default: Story = {
  args: {
    href: '#',
    children: 'Default link',
    variant: 'default',
    size: 'md',
  },
}

export const VariantShowcase: Story = {
  render: () => {
    const variants = [
      { variant: 'default' as const, description: 'Standard link style' },
      { variant: 'primary' as const, description: 'Primary brand color' },
      { variant: 'secondary' as const, description: 'Secondary color scheme' },
      { variant: 'success' as const, description: 'Positive actions' },
      { variant: 'warning' as const, description: 'Caution or attention' },
      { variant: 'error' as const, description: 'Destructive actions' },
      { variant: 'muted' as const, description: 'Subdued appearance' },
    ]

    return (
      <Card padding="xl" style={{ width: '500px' }}>
        <VStack gap="lg">
          <Text as="h3" style={{ margin: 0 }}>
            Link Variants
          </Text>

          <VStack gap="md">
            {variants.map(({ variant, description }) => (
              <Card key={variant} padding="md" variant="outlined">
                <HStack justify="space-between" align="center">
                  <VStack gap="xs" align="start">
                    <Link href="#" variant={variant}>
                      {variant.charAt(0).toUpperCase() + variant.slice(1)} Link
                    </Link>
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
                  <VStack gap="xs" align="end">
                    <Link href="#" variant={variant} disabled>
                      Disabled
                    </Link>
                  </VStack>
                </HStack>
              </Card>
            ))}
          </VStack>
        </VStack>
      </Card>
    )
  },
}

export const SizeVariants: Story = {
  render: () => {
    const sizes = [
      { size: 'xs' as const, description: 'Extra small text' },
      { size: 'sm' as const, description: 'Small text' },
      { size: 'md' as const, description: 'Medium text (default)' },
      { size: 'lg' as const, description: 'Large text' },
    ]

    return (
      <Card padding="xl" style={{ width: '400px' }}>
        <VStack gap="lg">
          <Text as="h3" style={{ margin: 0 }}>
            Size Variants
          </Text>

          <VStack gap="md">
            {sizes.map(({ size, description }) => (
              <VStack key={size} gap="xs" align="start">
                <Link href="#" size={size} variant="primary">
                  {size.toUpperCase()} Size Link
                </Link>
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
            ))}
          </VStack>
        </VStack>
      </Card>
    )
  },
}

export const UnderlineVariants: Story = {
  render: () => {
    const underlineTypes = [
      { type: 'always' as const, description: 'Always underlined' },
      { type: 'hover' as const, description: 'Underlined on hover (default)' },
      { type: 'none' as const, description: 'Never underlined' },
    ]

    return (
      <Card padding="xl" style={{ width: '400px' }}>
        <VStack gap="lg">
          <Text as="h3" style={{ margin: 0 }}>
            Underline Behaviors
          </Text>
          <Text
            as="p"
            style={{ margin: 0, color: 'var(--color-text-secondary)' }}
          >
            Hover over the links to see the different underline behaviors.
          </Text>

          <VStack gap="md">
            {underlineTypes.map(({ type, description }) => (
              <VStack key={type} gap="xs" align="start">
                <Link href="#" underline={type} variant="primary">
                  {type.charAt(0).toUpperCase() + type.slice(1)} underline
                </Link>
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
            ))}
          </VStack>
        </VStack>
      </Card>
    )
  },
}

export const WeightVariants: Story = {
  render: () => {
    const weights = [
      { weight: 'normal' as const, description: 'Regular weight' },
      { weight: 'medium' as const, description: 'Medium weight (default)' },
      { weight: 'semibold' as const, description: 'Semi-bold weight' },
      { weight: 'bold' as const, description: 'Bold weight' },
    ]

    return (
      <Card padding="xl" style={{ width: '400px' }}>
        <VStack gap="lg">
          <Text as="h3" style={{ margin: 0 }}>
            Font Weight Variants
          </Text>

          <VStack gap="md">
            {weights.map(({ weight, description }) => (
              <VStack key={weight} gap="xs" align="start">
                <Link href="#" weight={weight} variant="primary">
                  {weight.charAt(0).toUpperCase() + weight.slice(1)} weight
                </Link>
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
            ))}
          </VStack>
        </VStack>
      </Card>
    )
  },
}

export const WithIcons: Story = {
  render: () => {
    return (
      <Card padding="xl" style={{ width: '500px' }}>
        <VStack gap="lg">
          <Text as="h3" style={{ margin: 0 }}>
            Links with Icons
          </Text>

          <VStack gap="md">
            <VStack gap="sm" align="start">
              <Text as="h5" style={{ margin: 0 }}>
                Start Icons
              </Text>
              <VStack gap="xs" align="start">
                <Link href="#" iconStart={<HomeIcon />} variant="primary">
                  Go to Home
                </Link>
                <Link href="#" iconStart={<DownloadIcon />} variant="success">
                  Download File
                </Link>
                <Link href="#" iconStart={<HeartIcon />} variant="error">
                  Add to Favorites
                </Link>
              </VStack>
            </VStack>

            <VStack gap="sm" align="start">
              <Text as="h5" style={{ margin: 0 }}>
                End Icons
              </Text>
              <VStack gap="xs" align="start">
                <Link href="#" iconEnd={<ArrowRightIcon />} variant="primary">
                  Continue Reading
                </Link>
                <Link href="#" iconEnd={<StarIcon />} variant="warning">
                  Rate this page
                </Link>
              </VStack>
            </VStack>

            <VStack gap="sm" align="start">
              <Text as="h5" style={{ margin: 0 }}>
                Both Icons
              </Text>
              <Link
                href="#"
                iconStart={<StarIcon />}
                iconEnd={<ArrowRightIcon />}
                variant="primary"
              >
                Star and Continue
              </Link>
            </VStack>
          </VStack>
        </VStack>
      </Card>
    )
  },
}

export const ExternalLinks: Story = {
  render: () => {
    return (
      <Card padding="xl" style={{ width: '400px' }}>
        <VStack gap="lg">
          <Text as="h3" style={{ margin: 0 }}>
            External Links
          </Text>
          <Text
            as="p"
            style={{ margin: 0, color: 'var(--color-text-secondary)' }}
          >
            External links automatically show an external icon and open in a new
            tab.
          </Text>

          <VStack gap="md" align="start">
            <Link href="https://github.com" external variant="primary">
              Visit GitHub
            </Link>
            <Link href="https://reactjs.org" external variant="secondary">
              React Documentation
            </Link>
            <Link href="https://storybook.js.org" external variant="default">
              Storybook Docs
            </Link>

            <VStack gap="sm" align="start">
              <Text as="h5" style={{ margin: 0 }}>
                With Custom End Icon
              </Text>
              <Link
                href="https://example.com"
                external
                variant="success"
                iconEnd={<StarIcon />}
              >
                Custom External Link
              </Link>
              <Text
                as="p"
                style={{
                  margin: 0,
                  fontSize: '0.875rem',
                  color: 'var(--color-text-secondary)',
                }}
              >
                When you provide an iconEnd, the external icon won&apos;t be
                shown.
              </Text>
            </VStack>
          </VStack>
        </VStack>
      </Card>
    )
  },
}

export const InteractiveDemo: Story = {
  render: () => {
    const [clickCount, setClickCount] = useState(0)
    const [isDisabled, setIsDisabled] = useState(false)

    const handleLinkClick = (e: React.MouseEvent) => {
      e.preventDefault()
      setClickCount((count) => count + 1)
    }

    return (
      <Card padding="xl" style={{ width: '500px' }}>
        <VStack gap="lg">
          <Text as="h3" style={{ margin: 0 }}>
            Interactive Demo
          </Text>

          <VStack gap="md">
            <Card padding="md" variant="outlined">
              <VStack gap="sm">
                <Text as="p" style={{ margin: 0 }}>
                  Click counter: <strong>{clickCount}</strong>
                </Text>
                <HStack gap="sm">
                  <Button size="sm" onClick={() => setClickCount(0)}>
                    Reset
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => setIsDisabled(!isDisabled)}
                  >
                    {isDisabled ? 'Enable' : 'Disable'} Links
                  </Button>
                </HStack>
              </VStack>
            </Card>

            <VStack gap="md" align="start">
              <Text as="h5" style={{ margin: 0 }}>
                Test Links
              </Text>

              <HStack gap="md" wrap>
                <Link
                  href="#"
                  onClick={handleLinkClick}
                  disabled={isDisabled}
                  variant="primary"
                  iconStart={<StarIcon />}
                >
                  Primary Link
                </Link>

                <Link
                  href="#"
                  onClick={handleLinkClick}
                  disabled={isDisabled}
                  variant="success"
                  iconEnd={<ArrowRightIcon />}
                >
                  Success Link
                </Link>

                <Link
                  href="#"
                  onClick={handleLinkClick}
                  disabled={isDisabled}
                  variant="warning"
                  size="lg"
                  weight="bold"
                >
                  Warning Link
                </Link>
              </HStack>

              <Text
                as="p"
                style={{
                  margin: 0,
                  fontSize: '0.875rem',
                  color: 'var(--color-text-secondary)',
                }}
              >
                {isDisabled
                  ? 'Links are disabled - clicking will not work'
                  : 'Links are enabled - click to increment counter'}
              </Text>
            </VStack>
          </VStack>
        </VStack>
      </Card>
    )
  },
}

export const InTextUsage: Story = {
  render: () => {
    return (
      <Card padding="xl" style={{ width: '600px' }}>
        <VStack gap="lg">
          <Text as="h3" style={{ margin: 0 }}>
            Links in Text Content
          </Text>

          <VStack gap="md" align="start">
            <Text as="p" style={{ margin: 0 }}>
              This paragraph contains a{' '}
              <Link href="#" variant="primary" size="md" underline="hover">
                normal link
              </Link>{' '}
              that flows naturally with the text. You can also include{' '}
              <Link
                href="https://example.com"
                external
                variant="secondary"
                size="md"
              >
                external links
              </Link>{' '}
              that open in new tabs.
            </Text>

            <Text as="p" style={{ margin: 0 }}>
              Sometimes you need{' '}
              <Link href="#" variant="success" size="md" underline="always">
                always underlined links
              </Link>{' '}
              or{' '}
              <Link href="#" variant="error" size="md" underline="none">
                links without underlines
              </Link>{' '}
              for different contexts.
            </Text>

            <Text as="p" style={{ margin: 0 }}>
              You can also have{' '}
              <Link href="#" variant="muted" size="sm" disabled>
                disabled links
              </Link>{' '}
              when certain actions are not available.
            </Text>
          </VStack>

          <Card padding="md" variant="outlined">
            <VStack gap="sm">
              <Text as="h5" style={{ margin: 0 }}>
                Best Practices
              </Text>
              <VStack gap="xs" align="start">
                <Text as="p" style={{ margin: 0, fontSize: '0.875rem' }}>
                  • Use descriptive link text that makes sense out of context
                </Text>
                <Text as="p" style={{ margin: 0, fontSize: '0.875rem' }}>
                  • Keep link text concise but meaningful
                </Text>
                <Text as="p" style={{ margin: 0, fontSize: '0.875rem' }}>
                  • Use external prop for links that leave your site
                </Text>
                <Text as="p" style={{ margin: 0, fontSize: '0.875rem' }}>
                  • Consider using icons to provide additional context
                </Text>
              </VStack>
            </VStack>
          </Card>
        </VStack>
      </Card>
    )
  },
}

export const NavigationLinks: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState('home')

    const navigationItems = [
      { id: 'home', label: 'Home', icon: <HomeIcon /> },
      { id: 'docs', label: 'Documentation', icon: <StarIcon /> },
      { id: 'examples', label: 'Examples', icon: <ArrowRightIcon /> },
      { id: 'download', label: 'Download', icon: <DownloadIcon /> },
    ]

    return (
      <Card padding="xl" style={{ width: '500px' }}>
        <VStack gap="lg">
          <Text as="h3" style={{ margin: 0 }}>
            Navigation Menu
          </Text>

          <VStack gap="md">
            <HStack gap="md" wrap>
              {navigationItems.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  variant={currentPage === item.id ? 'primary' : 'default'}
                  weight={currentPage === item.id ? 'semibold' : 'medium'}
                  iconStart={item.icon}
                  underline="none"
                  onClick={(e) => {
                    e.preventDefault()
                    setCurrentPage(item.id)
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </HStack>

            <Card padding="md" variant="outlined">
              <VStack gap="sm">
                <Text as="h4" style={{ margin: 0 }}>
                  {
                    navigationItems.find((item) => item.id === currentPage)
                      ?.label
                  }
                </Text>
                <Text
                  as="p"
                  style={{ margin: 0, color: 'var(--color-text-secondary)' }}
                >
                  Content for the {currentPage} page would be displayed here.
                </Text>
              </VStack>
            </Card>
          </VStack>
        </VStack>
      </Card>
    )
  },
}
