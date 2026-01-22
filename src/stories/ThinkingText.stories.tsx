/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { ThinkingText } from '../components/Utils/ThinkingText'
import { Card } from '../components/Display/Card'
import { Text } from '../components/Display/Text'
import { Button } from '../components/Interactive/Button'
import { VStack, HStack } from '../components/Layout/Stack'

const meta: Meta<typeof ThinkingText> = {
  title: 'Utils/ThinkingText',
  component: ThinkingText,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A typewriter-style text component with animated thinking indicators. Perfect for AI interfaces, loading states, or any scenario where you want to show progressive text revelation with context-aware variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'The text to display with typewriter effect',
    },
    variant: {
      control: 'select',
      options: [
        'thinking',
        'reasoning',
        'analyzing',
        'processing',
        'generating',
      ],
      description: 'Visual style and context of the thinking state',
    },
    speed: {
      control: 'select',
      options: ['slow', 'normal', 'fast'],
      description: 'Speed of the typewriter animation',
    },
    showCursor: {
      control: 'boolean',
      description: 'Whether to show the typing cursor',
    },
    loop: {
      control: 'boolean',
      description: 'Whether to loop the animation continuously',
    },
    onComplete: {
      action: 'completed',
      description: 'Callback fired when typing animation completes',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'Hello! I am analyzing your request and preparing a thoughtful response...',
    variant: 'thinking',
    speed: 'normal',
    showCursor: true,
    loop: false,
  },
}

export const WithoutText: Story = {
  args: {
    variant: 'thinking',
    speed: 'normal',
  },
  render: (args) => (
    <Card padding="lg" style={{ width: '300px' }}>
      <VStack gap="md">
        <Text as="h4" style={{ margin: 0 }}>
          Loading State
        </Text>
        <ThinkingText {...args} />
        <Text
          as="p"
          style={{ margin: 0, color: 'var(--color-text-secondary)' }}
        >
          This shows the animated thinking indicator without text.
        </Text>
      </VStack>
    </Card>
  ),
}

export const VariantShowcase: Story = {
  render: () => {
    const variants = [
      {
        variant: 'thinking' as const,
        text: 'Let me think about this problem step by step...',
        description: 'General thought process',
      },
      {
        variant: 'reasoning' as const,
        text: 'Based on the data, I can deduce that the solution requires...',
        description: 'Logical deduction and analysis',
      },
      {
        variant: 'analyzing' as const,
        text: 'Scanning through the provided information to identify patterns...',
        description: 'Deep examination of data',
      },
      {
        variant: 'processing' as const,
        text: 'Converting your input into actionable insights...',
        description: 'Data transformation',
      },
      {
        variant: 'generating' as const,
        text: 'Creating a comprehensive response based on your requirements...',
        description: 'Content creation',
      },
    ]

    return (
      <Card padding="xl" style={{ width: '600px' }}>
        <VStack gap="lg">
          <Text as="h3" style={{ margin: 0 }}>
            ThinkingText Variants
          </Text>
          <Text
            as="p"
            style={{ margin: 0, color: 'var(--color-text-secondary)' }}
          >
            Different variants for various AI interaction contexts.
          </Text>

          <VStack gap="md">
            {variants.map(({ variant, text, description }) => (
              <Card key={variant} padding="lg" variant="outlined">
                <VStack gap="sm">
                  <HStack justify="space-between" align="start">
                    <VStack gap="xs">
                      <Text
                        as="h5"
                        style={{ margin: 0, textTransform: 'capitalize' }}
                      >
                        {variant}
                      </Text>
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
                  </HStack>
                  <ThinkingText
                    variant={variant}
                    text={text}
                    speed="fast"
                    showCursor={true}
                  />
                </VStack>
              </Card>
            ))}
          </VStack>
        </VStack>
      </Card>
    )
  },
}

export const SpeedComparison: Story = {
  render: () => {
    const speeds = [
      { speed: 'slow' as const, description: 'Deliberate and careful' },
      { speed: 'normal' as const, description: 'Balanced typing speed' },
      { speed: 'fast' as const, description: 'Quick and responsive' },
    ]

    const sampleText =
      'This text demonstrates the typing speed for this variant.'

    return (
      <Card padding="xl" style={{ width: '500px' }}>
        <VStack gap="lg">
          <Text as="h3" style={{ margin: 0 }}>
            Speed Variations
          </Text>
          <Text
            as="p"
            style={{ margin: 0, color: 'var(--color-text-secondary)' }}
          >
            Compare different typing speeds for the typewriter effect.
          </Text>

          <VStack gap="md">
            {speeds.map(({ speed, description }) => (
              <Card key={speed} padding="md" variant="outlined">
                <VStack gap="sm">
                  <HStack justify="space-between" align="center">
                    <Text
                      as="h5"
                      style={{ margin: 0, textTransform: 'capitalize' }}
                    >
                      {speed} Speed
                    </Text>
                    <Text
                      as="span"
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      {description}
                    </Text>
                  </HStack>
                  <ThinkingText
                    variant="processing"
                    text={sampleText}
                    speed={speed}
                    showCursor={true}
                  />
                </VStack>
              </Card>
            ))}
          </VStack>
        </VStack>
      </Card>
    )
  },
}

export const InteractiveDemo: Story = {
  render: () => {
    const [currentVariant, setCurrentVariant] = useState<
      'thinking' | 'reasoning' | 'analyzing' | 'processing' | 'generating'
    >('thinking')
    const [isLooping, setIsLooping] = useState(false)
    const [completionCount, setCompletionCount] = useState(0)

    const messages = {
      thinking: "I'm carefully considering all aspects of your question...",
      reasoning:
        'Let me work through this logic step by step to find the best solution...',
      analyzing: "I'm examining the patterns and relationships in your data...",
      processing: 'Converting your requirements into actionable results...',
      generating: 'Crafting a comprehensive response tailored to your needs...',
    }

    const handleComplete = () => {
      setCompletionCount((prev) => prev + 1)
    }

    return (
      <Card padding="xl" style={{ width: '600px' }}>
        <VStack gap="lg">
          <Text as="h3" style={{ margin: 0 }}>
            Interactive Demo
          </Text>
          <Text
            as="p"
            style={{ margin: 0, color: 'var(--color-text-secondary)' }}
          >
            Test different variants and see the typing animation in action.
          </Text>

          <Card padding="lg" variant="outlined" style={{ minHeight: '120px' }}>
            <ThinkingText
              variant={currentVariant}
              text={messages[currentVariant]}
              speed="normal"
              showCursor={true}
              loop={isLooping}
              onComplete={handleComplete}
            />
          </Card>

          <VStack gap="md">
            <VStack gap="sm">
              <Text as="h5" style={{ margin: 0 }}>
                Select Variant:
              </Text>
              <HStack gap="xs">
                {Object.keys(messages).map((variant) => (
                  <Button
                    key={variant}
                    size="sm"
                    variant={
                      currentVariant === variant ? 'primary' : 'secondary'
                    }
                    onClick={() =>
                      setCurrentVariant(variant as keyof typeof messages)
                    }
                  >
                    {variant}
                  </Button>
                ))}
              </HStack>
            </VStack>

            <HStack justify="space-between" align="center">
              <Button
                variant={isLooping ? 'primary' : 'secondary'}
                onClick={() => setIsLooping(!isLooping)}
              >
                {isLooping ? 'Stop Loop' : 'Enable Loop'}
              </Button>

              <Text
                as="span"
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-text-secondary)',
                }}
              >
                Completed: {completionCount} times
              </Text>
            </HStack>
          </VStack>
        </VStack>
      </Card>
    )
  },
}

export const ChatInterface: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(0)
    const [isProcessing, setIsProcessing] = useState(false)

    const chatSteps = [
      {
        variant: 'analyzing' as const,
        text: 'Let me analyze your question about React performance optimization...',
      },
      {
        variant: 'reasoning' as const,
        text: 'Based on modern React patterns, I can recommend several approaches...',
      },
      {
        variant: 'generating' as const,
        text: "Here's a comprehensive solution with code examples and best practices...",
      },
    ]

    const startChat = () => {
      setIsProcessing(true)
      setCurrentStep(0)
    }

    const handleStepComplete = () => {
      if (currentStep < chatSteps.length - 1) {
        setTimeout(() => setCurrentStep(currentStep + 1), 1000)
      } else {
        setTimeout(() => setIsProcessing(false), 2000)
      }
    }

    return (
      <Card padding="xl" style={{ width: '500px' }}>
        <VStack gap="lg">
          <Text as="h3" style={{ margin: 0 }}>
            AI Chat Interface
          </Text>
          <Text
            as="p"
            style={{ margin: 0, color: 'var(--color-text-secondary)' }}
          >
            Simulates a multi-step AI thinking process in a chat interface.
          </Text>

          <Card padding="lg" variant="outlined" style={{ minHeight: '150px' }}>
            {!isProcessing ? (
              <VStack
                gap="md"
                align="center"
                justify="center"
                style={{ height: '100%' }}
              >
                <Text
                  as="p"
                  style={{
                    margin: 0,
                    textAlign: 'center',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  Click the button below to simulate an AI thinking through a
                  complex query.
                </Text>
                <Button onClick={startChat} variant="primary">
                  Ask AI a Question
                </Button>
              </VStack>
            ) : (
              <VStack gap="md">
                <Text as="h5" style={{ margin: 0 }}>
                  AI Assistant
                </Text>
                {chatSteps.slice(0, currentStep + 1).map((step, index) => (
                  <div key={index}>
                    {index === currentStep ? (
                      <ThinkingText
                        variant={step.variant}
                        text={step.text}
                        speed="normal"
                        showCursor={true}
                        onComplete={handleStepComplete}
                      />
                    ) : (
                      <Text as="p" style={{ margin: 0, opacity: 0.7 }}>
                        {step.text}
                      </Text>
                    )}
                  </div>
                ))}
              </VStack>
            )}
          </Card>

          {isProcessing && (
            <Card padding="sm" variant="outlined">
              <Text
                as="p"
                style={{
                  margin: 0,
                  fontSize: '0.875rem',
                  color: 'var(--color-text-secondary)',
                  textAlign: 'center',
                }}
              >
                Step {currentStep + 1} of {chatSteps.length}
              </Text>
            </Card>
          )}
        </VStack>
      </Card>
    )
  },
}

export const LoadingStates: Story = {
  render: () => {
    const loadingStates = [
      { variant: 'thinking' as const, context: 'Initial thought process' },
      { variant: 'analyzing' as const, context: 'Data examination' },
      { variant: 'processing' as const, context: 'Background computation' },
      { variant: 'reasoning' as const, context: 'Logic evaluation' },
      { variant: 'generating' as const, context: 'Content creation' },
    ]

    return (
      <Card padding="xl" style={{ width: '400px' }}>
        <VStack gap="lg">
          <Text as="h3" style={{ margin: 0 }}>
            Loading State Indicators
          </Text>
          <Text
            as="p"
            style={{ margin: 0, color: 'var(--color-text-secondary)' }}
          >
            Use these when you need loading indicators without specific text.
          </Text>

          <VStack gap="md">
            {loadingStates.map(({ variant, context }) => (
              <Card key={variant} padding="md" variant="outlined">
                <HStack gap="md" align="center">
                  <ThinkingText variant={variant} speed="normal" />
                  <Text as="p" style={{ margin: 0, fontSize: '0.875rem' }}>
                    {context}
                  </Text>
                </HStack>
              </Card>
            ))}
          </VStack>
        </VStack>
      </Card>
    )
  },
}
