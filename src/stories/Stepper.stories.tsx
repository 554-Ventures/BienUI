/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Stepper, VStack, Text, Card, Grid, Button, Banner, Badge } from '..'
import { CheckIcon, BellIcon, TrashIcon } from '../components/Icons'

const meta: Meta<typeof Stepper> = {
  title: 'Feedback/Stepper',
  component: Stepper,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The Stepper component guides users through multi-step processes by clearly showing progress, current position, and remaining steps. It provides visual feedback about completed, current, and upcoming stages while maintaining context of the overall workflow.

**Key Features:**
- **Progress indication**: Clear visual representation of completion status
- **Step navigation**: Interactive steps that can be clicked to navigate
- **Flexible orientation**: Horizontal and vertical layout options
- **Custom content**: Support for icons, descriptions, and rich step content
- **State management**: Automatic handling of step states and transitions
- **Accessibility**: Keyboard navigation and screen reader support

**Common Use Cases:**
- Multi-step forms and wizards
- Onboarding processes and tutorials
- Checkout flows and purchase processes
- Setup and configuration workflows
- Progress tracking for long operations
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    steps: {
      control: 'object',
      description: 'Array of step objects with label, description, and icon',
      table: {
        type: { summary: 'Step[]' },
      },
    },
    currentStep: {
      control: 'number',
      description: 'Index of the currently active step (0-based)',
      table: {
        type: { summary: 'number' },
      },
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Layout direction of the stepper',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'numbered', 'dots'],
      description: 'Visual style variant of the stepper',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'numbered' },
      },
    },
    size: {
      control: 'select',
      options: ['default', 'compact'],
      description: 'Size variant of the stepper',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    clickable: {
      control: 'boolean',
      description: 'Whether users can click on previous steps to navigate',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onStepClick: {
      action: 'step-clicked',
      description: 'Callback when a step is clicked',
      table: {
        type: { summary: '(step: number) => void' },
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
    steps: [
      { label: 'Account Setup', description: 'Create your account' },
      { label: 'Profile Info', description: 'Add personal details' },
      { label: 'Preferences', description: 'Customize your experience' },
      { label: 'Verification', description: 'Verify your email' },
    ],
    currentStep: 1,
    orientation: 'horizontal',
    variant: 'numbered',
    size: 'default',
    clickable: false,
  },
  render: (args) => (
    <div style={{ padding: '20px' }}>
      <Stepper {...args} />
    </div>
  ),
}

export const BasicStepper: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(1)

    const steps = [
      { label: 'Account Setup', description: 'Create your account' },
      { label: 'Profile Info', description: 'Add personal details' },
      { label: 'Preferences', description: 'Customize your experience' },
      { label: 'Verification', description: 'Verify your email' },
      { label: 'Complete', description: 'Welcome aboard!' },
    ]

    return (
      <div style={{ padding: '20px' }}>
        <VStack gap="lg">
          <Text size="lg" weight="semibold">
            Basic Stepper
          </Text>
          <Text size="sm" tone="secondary">
            A simple step-by-step progress indicator
          </Text>

          <Card>
            <VStack gap="lg">
              <Stepper
                steps={steps}
                currentStep={currentStep}
                clickable
                onStepClick={setCurrentStep}
              />

              <div
                style={{
                  padding: '20px',
                  background: '#f9fafb',
                  borderRadius: '8px',
                }}
              >
                <VStack gap="md">
                  <Text weight="semibold">
                    Step {currentStep + 1}: {steps[currentStep]?.label}
                  </Text>
                  <Text size="sm" tone="secondary">
                    {steps[currentStep]?.description}
                  </Text>

                  <div
                    style={{
                      display: 'flex',
                      gap: '8px',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Button
                      variant="ghost"
                      disabled={currentStep === 0}
                      onClick={() =>
                        setCurrentStep(Math.max(0, currentStep - 1))
                      }
                    >
                      Previous
                    </Button>
                    <Button
                      disabled={currentStep === steps.length - 1}
                      onClick={() =>
                        setCurrentStep(
                          Math.min(steps.length - 1, currentStep + 1)
                        )
                      }
                    >
                      {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
                    </Button>
                  </div>
                </VStack>
              </div>
            </VStack>
          </Card>
        </VStack>
      </div>
    )
  },
}

export const OnboardingFlow: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(0)

    const onboardingSteps = [
      {
        label: 'Welcome',
        description: 'Get started with our platform',
        icon: '👋',
        content:
          "Welcome to our platform! We'll help you get set up in just a few minutes.",
      },
      {
        label: 'Create Profile',
        description: 'Tell us about yourself',
        icon: '👤',
        content:
          'Add your basic information and profile picture to personalize your experience.',
      },
      {
        label: 'Connect Tools',
        description: 'Integrate your favorite tools',
        icon: '🔧',
        content:
          'Connect your existing tools and services to streamline your workflow.',
      },
      {
        label: 'Invite Team',
        description: 'Collaborate with others',
        icon: '👥',
        content:
          'Invite team members to join your workspace and start collaborating.',
      },
      {
        label: 'All Set!',
        description: "You're ready to go",
        icon: '🎉',
        content:
          'Congratulations! Your account is fully set up and ready to use.',
      },
    ]

    return (
      <div style={{ padding: '20px' }}>
        <VStack gap="lg">
          <Text size="lg" weight="semibold">
            Onboarding Flow
          </Text>
          <Text size="sm" tone="secondary">
            Step-by-step user onboarding with rich content
          </Text>

          <Card>
            <VStack gap="lg">
              <Stepper
                steps={onboardingSteps}
                currentStep={currentStep}
                clickable
                onStepClick={setCurrentStep}
              />

              <div
                style={{
                  padding: '32px',
                  background: '#f9fafb',
                  borderRadius: '8px',
                  textAlign: 'center',
                }}
              >
                <VStack gap="md">
                  <div style={{ fontSize: '32px' }}>
                    {onboardingSteps[currentStep]?.icon}
                  </div>
                  <Text size="lg" weight="semibold">
                    {onboardingSteps[currentStep]?.label}
                  </Text>
                  <Text size="sm" tone="secondary">
                    {onboardingSteps[currentStep]?.content}
                  </Text>

                  <div
                    style={{
                      display: 'flex',
                      gap: '8px',
                      justifyContent: 'center',
                      marginTop: '16px',
                    }}
                  >
                    {currentStep > 0 && (
                      <Button
                        variant="ghost"
                        onClick={() => setCurrentStep(currentStep - 1)}
                      >
                        Back
                      </Button>
                    )}
                    <Button
                      onClick={() =>
                        setCurrentStep(
                          Math.min(onboardingSteps.length - 1, currentStep + 1)
                        )
                      }
                    >
                      {currentStep === onboardingSteps.length - 1
                        ? 'Get Started'
                        : 'Continue'}
                    </Button>
                  </div>
                </VStack>
              </div>
            </VStack>
          </Card>
        </VStack>
      </div>
    )
  },
}

export const CheckoutFlow: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(0)

    const checkoutSteps = [
      {
        label: 'Cart Review',
        description: 'Review your items',
      },
      {
        label: 'Shipping',
        description: 'Delivery information',
      },
      {
        label: 'Payment',
        description: 'Payment details',
      },
      {
        label: 'Confirmation',
        description: 'Order complete',
      },
    ]

    const getStepContent = (step: number) => {
      switch (step) {
        case 0:
          return (
            <VStack gap="md">
              <Text weight="semibold">Review Your Cart</Text>
              <div
                style={{
                  background: 'white',
                  padding: '16px',
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                }}
              >
                <VStack gap="sm">
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Text size="sm">BienUI Pro License</Text>
                    <Text size="sm" weight="medium">
                      $99.00
                    </Text>
                  </div>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Text size="sm">Support Package</Text>
                    <Text size="sm" weight="medium">
                      $29.00
                    </Text>
                  </div>
                  <hr style={{ margin: '8px 0' }} />
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Text weight="semibold">Total</Text>
                    <Text weight="semibold">$128.00</Text>
                  </div>
                </VStack>
              </div>
            </VStack>
          )
        case 2:
          return (
            <VStack gap="md">
              <Text weight="semibold">Shipping Information</Text>
              <div
                style={{
                  background: 'white',
                  padding: '16px',
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                }}
              >
                <Text size="sm">Digital delivery - No shipping required</Text>
              </div>
            </VStack>
          )
        case 3:
          return (
            <VStack gap="md">
              <Text weight="semibold">Payment Method</Text>
              <div
                style={{
                  background: 'white',
                  padding: '16px',
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                }}
              >
                <Text size="sm">💳 Secure payment processing</Text>
              </div>
            </VStack>
          )
        case 4:
          return (
            <VStack gap="md">
              <Text weight="semibold">Order Confirmed!</Text>
              <Banner variant="success">
                <Text size="sm">
                  ✅ Your order has been processed successfully. You&apos;ll
                  receive an email confirmation shortly.
                </Text>
              </Banner>
            </VStack>
          )
        default:
          return null
      }
    }

    return (
      <div style={{ padding: '20px' }}>
        <VStack gap="lg">
          <Text size="lg" weight="semibold">
            Checkout Flow
          </Text>
          <Text size="sm" tone="secondary">
            E-commerce checkout process with step validation
          </Text>

          <Card>
            <VStack gap="lg">
              <Stepper
                steps={checkoutSteps}
                currentStep={currentStep}
                clickable
                onStepClick={(step) => {
                  // Only allow going back to previous steps
                  if (step <= currentStep) {
                    setCurrentStep(step)
                  }
                }}
              />

              <div
                style={{
                  padding: '20px',
                  background: '#f9fafb',
                  borderRadius: '8px',
                }}
              >
                <VStack gap="lg">
                  {getStepContent(currentStep)}

                  <div
                    style={{
                      display: 'flex',
                      gap: '8px',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Button
                      variant="ghost"
                      disabled={currentStep === 0}
                      onClick={() =>
                        setCurrentStep(Math.max(0, currentStep - 1))
                      }
                    >
                      Back
                    </Button>
                    <Button
                      disabled={currentStep === 3}
                      onClick={() =>
                        setCurrentStep(
                          Math.min(checkoutSteps.length - 1, currentStep + 1)
                        )
                      }
                    >
                      {currentStep === 2
                        ? 'Place Order'
                        : currentStep === 3
                          ? 'Done'
                          : 'Continue'}
                    </Button>
                  </div>
                </VStack>
              </div>
            </VStack>
          </Card>
        </VStack>
      </div>
    )
  },
}

export const VerticalStepper: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(1)

    const verticalSteps = [
      {
        label: 'Project Created',
        description: 'Your new project has been initialized',
      },
      {
        label: 'Dependencies Installed',
        description: 'All required packages have been downloaded',
      },
      {
        label: 'Building Application',
        description: 'Compiling and bundling your code',
      },
      {
        label: 'Running Tests',
        description: 'Executing automated test suite',
      },
      {
        label: 'Deployment Ready',
        description: 'Application is ready for deployment',
      },
    ]

    return (
      <div style={{ padding: '20px' }}>
        <VStack gap="lg">
          <Text size="lg" weight="semibold">
            Vertical Stepper
          </Text>
          <Text size="sm" tone="secondary">
            Progress tracking with detailed step information
          </Text>

          <Card>
            <Stepper
              steps={verticalSteps}
              currentStep={currentStep}
              orientation="vertical"
            />
          </Card>

          <div
            style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}
          >
            <Button
              variant="ghost"
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            >
              Simulate Previous
            </Button>
            <Button
              onClick={() =>
                setCurrentStep(Math.min(verticalSteps.length, currentStep + 1))
              }
            >
              Simulate Progress
            </Button>
          </div>
        </VStack>
      </div>
    )
  },
}

export const FormWizard: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(0)
    const [formData, setFormData] = useState({
      personal: { completed: false },
      company: { completed: false },
      preferences: { completed: false },
      review: { completed: false },
    })

    const wizardSteps = [
      {
        label: 'Personal Info',
        description: 'Basic information',
      },
      {
        label: 'Company Details',
        description: 'Organization information',
      },
      {
        label: 'Preferences',
        description: 'Customize your experience',
      },
      {
        label: 'Review',
        description: 'Confirm your information',
      },
    ]

    const handleNext = () => {
      // Mark current step as completed and move to next
      const stepKeys = ['personal', 'company', 'preferences', 'review'] as const
      const currentKey = stepKeys[currentStep]

      if (currentKey && currentKey !== 'review') {
        setFormData((prev) => ({
          ...prev,
          [currentKey]: { completed: true },
        }))
      }

      setCurrentStep(Math.min(wizardSteps.length - 1, currentStep + 1))
    }

    return (
      <div style={{ padding: '20px' }}>
        <VStack gap="lg">
          <Text size="lg" weight="semibold">
            Form Wizard
          </Text>
          <Text size="sm" tone="secondary">
            Multi-step form with progress tracking and validation
          </Text>

          <Card>
            <VStack gap="lg">
              <Stepper
                steps={wizardSteps}
                currentStep={currentStep}
                clickable
                onStepClick={(step) => {
                  // Allow navigation to completed steps or current step
                  if (step <= currentStep) {
                    setCurrentStep(step)
                  }
                }}
              />

              <div
                style={{
                  padding: '24px',
                  background: '#f9fafb',
                  borderRadius: '8px',
                }}
              >
                <VStack gap="lg">
                  {currentStep === 0 && (
                    <VStack gap="md">
                      <Text weight="semibold">Personal Information</Text>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                        }}
                      >
                        <Badge
                          variant={
                            formData.personal.completed ? 'success' : 'neutral'
                          }
                        >
                          {formData.personal.completed
                            ? 'Completed'
                            : 'In Progress'}
                        </Badge>
                        <Text size="xs" tone="secondary">
                          * Required
                        </Text>
                      </div>
                      <Text size="sm" tone="secondary">
                        Please provide your basic personal information to get
                        started.
                      </Text>
                    </VStack>
                  )}

                  {currentStep === 1 && (
                    <VStack gap="md">
                      <Text weight="semibold">Company Details</Text>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                        }}
                      >
                        <Badge
                          variant={
                            formData.company.completed ? 'success' : 'neutral'
                          }
                        >
                          {formData.company.completed
                            ? 'Completed'
                            : 'In Progress'}
                        </Badge>
                        <Text size="xs" tone="secondary">
                          * Required
                        </Text>
                      </div>
                      <Text size="sm" tone="secondary">
                        Tell us about your organization to customize your
                        experience.
                      </Text>
                    </VStack>
                  )}

                  {currentStep === 2 && (
                    <VStack gap="md">
                      <Text weight="semibold">Preferences</Text>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                        }}
                      >
                        <Badge
                          variant={
                            formData.preferences.completed
                              ? 'success'
                              : 'neutral'
                          }
                        >
                          {formData.preferences.completed
                            ? 'Completed'
                            : 'In Progress'}
                        </Badge>
                        <Text size="xs" tone="secondary">
                          Optional
                        </Text>
                      </div>
                      <Text size="sm" tone="secondary">
                        Customize your preferences to personalize your
                        experience.
                      </Text>
                    </VStack>
                  )}

                  {currentStep === 3 && (
                    <VStack gap="md">
                      <Text weight="semibold">Review & Submit</Text>
                      <Text size="sm" tone="secondary">
                        Please review your information before submitting.
                      </Text>
                      <Banner variant="info">
                        <VStack gap="xs">
                          <Text size="sm" weight="medium">
                            Summary:
                          </Text>
                          <Text size="sm">
                            ✅ Personal Info:{' '}
                            {formData.personal.completed
                              ? 'Complete'
                              : 'Incomplete'}
                          </Text>
                          <Text size="sm">
                            ✅ Company Details:{' '}
                            {formData.company.completed
                              ? 'Complete'
                              : 'Incomplete'}
                          </Text>
                          <Text size="sm">
                            {formData.preferences.completed ? '✅' : '○'}{' '}
                            Preferences:{' '}
                            {formData.preferences.completed
                              ? 'Complete'
                              : 'Skipped'}
                          </Text>
                        </VStack>
                      </Banner>
                    </VStack>
                  )}

                  <div
                    style={{
                      display: 'flex',
                      gap: '8px',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Button
                      variant="ghost"
                      disabled={currentStep === 0}
                      onClick={() =>
                        setCurrentStep(Math.max(0, currentStep - 1))
                      }
                    >
                      Back
                    </Button>

                    {currentStep === 2 && (
                      <Button variant="ghost" onClick={() => setCurrentStep(3)}>
                        Skip
                      </Button>
                    )}

                    <Button
                      onClick={handleNext}
                      disabled={currentStep === wizardSteps.length - 1}
                    >
                      {currentStep === 3 ? 'Submit' : 'Next'}
                    </Button>
                  </div>
                </VStack>
              </div>
            </VStack>
          </Card>
        </VStack>
      </div>
    )
  },
}

export const AllVariationsShowcase: Story = {
  render: () => {
    const [demoStep, setDemoStep] = useState(0)

    const showcaseSteps = [
      { label: 'Planning', description: 'Project setup' },
      { label: 'Development', description: 'Building features' },
      { label: 'Testing', description: 'Quality assurance' },
      { label: 'Deployment', description: 'Going live' },
    ]

    return (
      <div style={{ padding: '20px' }}>
        <VStack gap="xl">
          <VStack gap="sm">
            <Text size="xl" weight="bold">
              Complete Stepper System 📋
            </Text>
            <Text size="sm" tone="secondary">
              Comprehensive examples demonstrating all stepper types,
              orientations, and use cases
            </Text>
          </VStack>

          <Grid columns={1} gap="xl">
            {/* Stepper Types */}
            <VStack gap="md">
              <Text size="lg" weight="semibold">
                Stepper Categories
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
                      Linear Flow
                    </Text>
                    <Text size="xs" tone="secondary">
                      Sequential steps
                    </Text>
                  </VStack>
                </Card>

                <Card style={{ textAlign: 'center', padding: '16px' }}>
                  <VStack gap="sm">
                    <BellIcon
                      style={{
                        color: '#f59e0b',
                        width: '24px',
                        height: '24px',
                        margin: '0 auto',
                      }}
                    />
                    <Text size="sm" weight="medium">
                      Progress Tracking
                    </Text>
                    <Text size="xs" tone="secondary">
                      Status updates
                    </Text>
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
                      Form Wizard
                    </Text>
                    <Text size="xs" tone="secondary">
                      Multi-step forms
                    </Text>
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
                      Validation
                    </Text>
                    <Text size="xs" tone="secondary">
                      Step validation
                    </Text>
                  </VStack>
                </Card>
              </Grid>
            </VStack>

            {/* Interactive Demo */}
            <VStack gap="md">
              <Text size="lg" weight="semibold">
                Interactive Demo
              </Text>
              <Card>
                <VStack gap="lg">
                  <Stepper
                    steps={showcaseSteps}
                    currentStep={demoStep}
                    onStepClick={setDemoStep}
                  />

                  <div
                    style={{
                      display: 'flex',
                      gap: '8px',
                      justifyContent: 'center',
                    }}
                  >
                    <Button
                      variant="ghost"
                      disabled={demoStep === 1}
                      onClick={() => setDemoStep(Math.max(1, demoStep - 1))}
                    >
                      Previous
                    </Button>
                    <Button
                      disabled={demoStep === showcaseSteps.length}
                      onClick={() =>
                        setDemoStep(
                          Math.min(showcaseSteps.length, demoStep + 1)
                        )
                      }
                    >
                      Next
                    </Button>
                  </div>
                </VStack>
              </Card>
            </VStack>

            {/* Orientation Comparison */}
            <VStack gap="md">
              <Text size="lg" weight="semibold">
                Layout Options
              </Text>
              <Grid columns={2} gap="md">
                <Card>
                  <VStack gap="sm">
                    <Text weight="semibold" size="sm">
                      Horizontal
                    </Text>
                    <Text size="sm" tone="secondary">
                      Best for short processes
                    </Text>
                    <div
                      style={{
                        padding: '16px',
                        background: '#f9fafb',
                        borderRadius: '6px',
                      }}
                    >
                      <Stepper
                        steps={showcaseSteps.slice(0, 3)}
                        currentStep={2}
                        orientation="horizontal"
                      />
                    </div>
                  </VStack>
                </Card>

                <Card>
                  <VStack gap="sm">
                    <Text weight="semibold" size="sm">
                      Vertical
                    </Text>
                    <Text size="sm" tone="secondary">
                      Better for detailed content
                    </Text>
                    <div
                      style={{
                        padding: '16px',
                        background: '#f9fafb',
                        borderRadius: '6px',
                      }}
                    >
                      <Stepper
                        steps={showcaseSteps.slice(0, 3)}
                        currentStep={2}
                        orientation="vertical"
                      />
                    </div>
                  </VStack>
                </Card>
              </Grid>
            </VStack>
          </Grid>

          <Banner variant="info">
            <Text size="sm">
              🎯 <strong>UX Tip:</strong> Use steppers for processes with 3-7
              steps. For longer flows, consider breaking them into sections or
              using a different pattern.
            </Text>
          </Banner>

          <Text size="lg" weight="semibold">
            Stepper Design Best Practices
          </Text>
          <VStack gap="xs">
            <Text size="sm">
              • Clear labeling: Use descriptive titles and helpful descriptions
              for each step
            </Text>
            <Text size="sm">
              • Progress indication: Show completed, current, and remaining
              steps clearly
            </Text>
            <Text size="sm">
              • Navigation control: Allow users to go back to previous steps
              when appropriate
            </Text>
            <Text size="sm">
              • Validation feedback: Indicate validation errors and completion
              status
            </Text>
            <Text size="sm">
              • Mobile optimization: Consider vertical layout for better mobile
              experience
            </Text>
          </VStack>
        </VStack>
      </div>
    )
  },
}
