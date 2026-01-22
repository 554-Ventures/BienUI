import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../components/Layout/Section'
import { Container } from '../components/Layout/Container'
import { Card } from '../components/Display/Card'
import { Text } from '../components/Display/Text'
import { Button } from '../components/Interactive/Button'
import { Grid } from '../components/Layout/Grid'
import { Badge } from '../components/Display/Badge'

const meta: Meta<typeof Section> = {
  title: 'Layout/Section',
  component: Section,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A semantic section component for organizing content into distinct areas. Provides consistent spacing, background options, and works seamlessly with Container for responsive layouts.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
      description: 'Vertical padding of the section',
    },
    background: {
      control: 'select',
      options: [
        'default',
        'subtle',
        'muted',
        'gradient-primary',
        'gradient-purple',
        'gradient-accent',
      ],
      description: 'Background style',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    id: {
      control: 'text',
      description: 'Section ID for navigation anchors',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    padding: 'lg',
    background: 'default',
  },
  render: (args) => (
    <Section {...args}>
      <Container>
        <Text as="h2" style={{ margin: '0 0 1rem 0' }}>
          Welcome Section
        </Text>
        <Text
          as="p"
          style={{ margin: '0 0 2rem 0', color: 'var(--color-text-secondary)' }}
        >
          This is a default section with standard background and padding. It
          uses the Container component for proper responsive layout.
        </Text>

        <Grid columns="auto" gap="lg">
          <Card padding="lg">
            <Text as="h4" style={{ margin: '0 0 0.5rem 0' }}>
              Feature 1
            </Text>
            <Text
              as="p"
              style={{
                color: 'var(--color-text-secondary)',
                margin: '0 0 1rem 0',
              }}
            >
              Detailed description of the first feature.
            </Text>
            <Button size="sm">Learn More</Button>
          </Card>

          <Card padding="lg">
            <Text as="h4" style={{ margin: '0 0 0.5rem 0' }}>
              Feature 2
            </Text>
            <Text
              as="p"
              style={{
                color: 'var(--color-text-secondary)',
                margin: '0 0 1rem 0',
              }}
            >
              Detailed description of the second feature.
            </Text>
            <Button size="sm" variant="ghost">
              Learn More
            </Button>
          </Card>

          <Card padding="lg">
            <Text as="h4" style={{ margin: '0 0 0.5rem 0' }}>
              Feature 3
            </Text>
            <Text
              as="p"
              style={{
                color: 'var(--color-text-secondary)',
                margin: '0 0 1rem 0',
              }}
            >
              Detailed description of the third feature.
            </Text>
            <Button size="sm" variant="accent">
              Learn More
            </Button>
          </Card>
        </Grid>
      </Container>
    </Section>
  ),
}

export const BackgroundVariants: Story = {
  render: () => {
    const backgrounds = [
      { value: 'default', label: 'Default' },
      { value: 'subtle', label: 'Subtle' },
      { value: 'muted', label: 'Muted' },
      { value: 'gradient-primary', label: 'Gradient Primary' },
      { value: 'gradient-purple', label: 'Gradient Purple' },
      { value: 'gradient-accent', label: 'Gradient Accent' },
    ] as const

    return (
      <div>
        {backgrounds.map(({ value, label }) => (
          <Section key={value} background={value} padding="lg">
            <Container>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem',
                }}
              >
                <Text as="h3" style={{ margin: 0 }}>
                  {label} Background
                </Text>
                <Badge variant="primary">{value}</Badge>
              </div>
              <Text
                as="p"
                style={{
                  color: 'var(--color-text-secondary)',
                  margin: '0 0 2rem 0',
                }}
              >
                This section demonstrates the &quot;{value}&quot; background
                variant. Each background provides a different visual emphasis
                and hierarchy.
              </Text>

              <Grid columns={2} gap="lg">
                <Card padding="lg">
                  <Text as="h4" style={{ margin: '0 0 0.5rem 0' }}>
                    Content Card 1
                  </Text>
                  <Text
                    as="p"
                    style={{ color: 'var(--color-text-secondary)', margin: 0 }}
                  >
                    This card sits within the {label.toLowerCase()} section
                    background.
                  </Text>
                </Card>

                <Card padding="lg">
                  <Text as="h4" style={{ margin: '0 0 0.5rem 0' }}>
                    Content Card 2
                  </Text>
                  <Text
                    as="p"
                    style={{ color: 'var(--color-text-secondary)', margin: 0 }}
                  >
                    Notice how the card contrast changes with different section
                    backgrounds.
                  </Text>
                </Card>
              </Grid>
            </Container>
          </Section>
        ))}
      </div>
    )
  },
}

export const PaddingVariations: Story = {
  render: () => {
    const paddings = ['none', 'sm', 'md', 'lg', 'xl'] as const

    return (
      <div>
        {paddings.map((padding) => (
          <Section
            key={padding}
            padding={padding}
            background={padding === 'none' ? 'subtle' : 'default'}
          >
            <Container>
              <Card
                padding="md"
                style={{ border: '2px dashed var(--color-brand-base)' }}
              >
                <Text as="h4" style={{ margin: '0 0 0.5rem 0' }}>
                  Padding: {padding}
                </Text>
                <Text
                  as="p"
                  style={{ color: 'var(--color-text-secondary)', margin: 0 }}
                >
                  This section has &quot;{padding}&quot; vertical padding
                  applied.
                  {padding === 'none' &&
                    ' Notice how this section has no spacing around the content.'}
                </Text>
              </Card>
            </Container>
          </Section>
        ))}
      </div>
    )
  },
}

export const LandingPageDemo: Story = {
  render: () => (
    <div>
      {/* Hero Section */}
      <Section background="gradient-primary" padding="xl">
        <Container>
          <div style={{ textAlign: 'center' }}>
            <Text as="h1" style={{ margin: '0 0 1rem 0', color: 'white' }}>
              Welcome to BienUI
            </Text>
            <Text
              as="p"
              style={{ margin: '0 0 2rem 0', color: 'rgba(255,255,255,0.9)' }}
            >
              A comprehensive design system built with React and modern web
              technologies. Create beautiful, accessible interfaces with
              confidence.
            </Text>
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Button size="lg" variant="secondary">
                Get Started
              </Button>
              <Button size="lg" variant="ghost">
                View Components
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section background="default" padding="xl">
        <Container>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <Text as="h2" style={{ margin: '0 0 1rem 0' }}>
              Key Features
            </Text>
            <Text
              as="p"
              style={{ color: 'var(--color-text-secondary)', margin: 0 }}
            >
              Everything you need to build modern applications
            </Text>
          </div>

          <Grid columns="auto" gap="xl">
            <Card padding="xl">
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎨</div>
                <Text as="h4" style={{ margin: '0 0 1rem 0' }}>
                  Design System
                </Text>
                <Text
                  as="p"
                  style={{ color: 'var(--color-text-secondary)', margin: 0 }}
                >
                  Comprehensive design tokens and components for consistent UI
                </Text>
              </div>
            </Card>

            <Card padding="xl">
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
                <Text as="h4" style={{ margin: '0 0 1rem 0' }}>
                  Performance
                </Text>
                <Text
                  as="p"
                  style={{ color: 'var(--color-text-secondary)', margin: 0 }}
                >
                  Optimized components built for speed and efficiency
                </Text>
              </div>
            </Card>

            <Card padding="xl">
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>♿</div>
                <Text as="h4" style={{ margin: '0 0 1rem 0' }}>
                  Accessible
                </Text>
                <Text
                  as="p"
                  style={{ color: 'var(--color-text-secondary)', margin: 0 }}
                >
                  WCAG compliant components with built-in accessibility features
                </Text>
              </div>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gradient-accent" padding="lg">
        <Container>
          <div style={{ textAlign: 'center' }}>
            <Text as="h3" style={{ margin: '0 0 1rem 0', color: 'white' }}>
              Ready to get started?
            </Text>
            <Text
              as="p"
              style={{ margin: '0 0 2rem 0', color: 'rgba(255,255,255,0.9)' }}
            >
              Join thousands of developers building with BienUI
            </Text>
            <Button size="lg" variant="secondary">
              Start Building
            </Button>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <Section background="muted" padding="md">
        <Container>
          <div style={{ textAlign: 'center' }}>
            <Text
              as="p"
              style={{ color: 'var(--color-text-secondary)', margin: 0 }}
            >
              © 2024 BienUI. Built with ❤️ and React.
            </Text>
          </div>
        </Container>
      </Section>
    </div>
  ),
}

export const WithAnchors: Story = {
  render: () => (
    <div>
      {/* Navigation */}
      <Section background="subtle" padding="sm">
        <Container>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Button size="sm" variant="ghost">
              About
            </Button>
            <Button size="sm" variant="ghost">
              Services
            </Button>
            <Button size="sm" variant="ghost">
              Contact
            </Button>
          </div>
        </Container>
      </Section>

      {/* About Section */}
      <Section id="about" background="default" padding="xl">
        <Container>
          <Text as="h2" style={{ margin: '0 0 1rem 0' }}>
            About Us
          </Text>
          <Text
            as="p"
            style={{
              color: 'var(--color-text-secondary)',
              margin: '0 0 2rem 0',
            }}
          >
            This section has id=&quot;about&quot; and can be navigated to using
            anchor links.
          </Text>
          <Card padding="lg">
            <Text as="p" style={{ margin: 0 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </Text>
          </Card>
        </Container>
      </Section>

      {/* Services Section */}
      <Section id="services" background="subtle" padding="xl">
        <Container>
          <Text as="h2" style={{ margin: '0 0 1rem 0' }}>
            Services
          </Text>
          <Text
            as="p"
            style={{
              color: 'var(--color-text-secondary)',
              margin: '0 0 2rem 0',
            }}
          >
            This section has id=&quot;services&quot; and demonstrates sectioned
            content organization.
          </Text>
          <Grid columns={2} gap="lg">
            <Card padding="lg">
              <Text as="h4" style={{ margin: '0 0 0.5rem 0' }}>
                Service 1
              </Text>
              <Text
                as="p"
                style={{ color: 'var(--color-text-secondary)', margin: 0 }}
              >
                Professional web development services
              </Text>
            </Card>
            <Card padding="lg">
              <Text as="h4" style={{ margin: '0 0 0.5rem 0' }}>
                Service 2
              </Text>
              <Text
                as="p"
                style={{ color: 'var(--color-text-secondary)', margin: 0 }}
              >
                Custom design system creation
              </Text>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section id="contact" background="default" padding="xl">
        <Container>
          <Text as="h2" style={{ margin: '0 0 1rem 0' }}>
            Contact
          </Text>
          <Text
            as="p"
            style={{
              color: 'var(--color-text-secondary)',
              margin: '0 0 2rem 0',
            }}
          >
            This section has id=&quot;contact&quot; and shows how sections can
            be used for page organization.
          </Text>
          <Card padding="lg">
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Button>Get in Touch</Button>
              <Button variant="ghost">View Portfolio</Button>
            </div>
          </Card>
        </Container>
      </Section>
    </div>
  ),
}
