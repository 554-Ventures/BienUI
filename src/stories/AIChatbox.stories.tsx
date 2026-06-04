import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import type {
  AIChatMessage,
  AIChatboxStatus,
} from '../components/Feedback/AIChatbox'
import { AIChatbox, Card, VStack, HStack, Text, Button } from '..'

const baseMessages: AIChatMessage[] = [
  {
    id: 'assistant-1',
    role: 'assistant',
    content: 'Hi! I can help you plan, refactor, and explain your UI code.',
    timestamp: '09:41',
    status: 'complete',
  },
  {
    id: 'user-1',
    role: 'user',
    content:
      'Please design a polished AI chat component with all visible states.',
    timestamp: '09:42',
    status: 'complete',
  },
  {
    id: 'assistant-2',
    role: 'assistant',
    content:
      'Great idea. I will define a complete state model, then map visuals and animations for each state.',
    timestamp: '09:43',
    status: 'complete',
    citations: [
      {
        id: 'citation-1',
        label: 'State models for assistants',
        source: 'Design docs',
      },
    ],
  },
]

const meta: Meta<typeof AIChatbox> = {
  title: 'Feedback/AIChatbox',
  component: AIChatbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A composable AI chatbox UI with stateful visual modes, animated assistant feedback, and token-based styling that aligns with existing BienUI AI design language.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: [
        'idle',
        'composing',
        'sending',
        'thinking',
        'streaming',
        'error',
        'disabled',
      ],
    },
    inputValue: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    subtitle: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: ['default', 'streamlined'],
    },
    showHeader: {
      control: 'boolean',
    },
    showComposer: {
      control: 'boolean',
    },
    showEmptyState: {
      control: 'boolean',
    },
    showSuggestions: {
      control: 'boolean',
    },
    fileAccept: {
      control: 'text',
    },
    fileMultiple: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

function ChatWithState(args: React.ComponentProps<typeof AIChatbox>) {
  const [draft, setDraft] = useState(args.inputValue)
  const [messages, setMessages] = useState(args.messages)

  return (
    <AIChatbox
      {...args}
      inputValue={draft}
      messages={messages}
      onInputChange={setDraft}
      onSuggestionClick={(suggestion) => setDraft(suggestion)}
      onSend={(value) => {
        setMessages((prev) => [
          ...prev,
          {
            id: `${Date.now()}`,
            role: 'user',
            content: value,
            timestamp: 'now',
            status: 'complete',
          },
        ])
        setDraft('')
      }}
      onRetry={() => {
        setMessages((prev) =>
          prev.map((message) =>
            message.status === 'error'
              ? {
                  ...message,
                  status: 'complete',
                  content:
                    'Retry succeeded. Here is a fresh answer with updated context.',
                }
              : message
          )
        )
      }}
      onMessageAction={(action, message) => {
        setMessages((prev) => [
          ...prev,
          {
            id: `system-${Date.now()}`,
            role: 'system',
            content: `Action "${action.label}" selected for message ${message.id}.`,
            status: 'complete',
            timestamp: 'now',
          },
        ])
      }}
    />
  )
}

export const Default: Story = {
  render: ChatWithState,
  args: {
    messages: baseMessages,
    inputValue: '',
    status: 'idle',
    suggestions: [
      'Summarize this file',
      'Refactor for readability',
      'Find potential bugs',
    ],
    capabilities: ['Repo search', 'Code edits', 'Test execution'],
    agentModeLabel: 'Autonomous Agent',
    maxHeight: 560,
  },
}

export const EmptyState: Story = {
  render: ChatWithState,
  args: {
    messages: [],
    inputValue: '',
    status: 'idle',
    suggestions: [
      'Write release notes from commits',
      'Create a test plan',
      'Review this pull request',
    ],
    maxHeight: 540,
  },
}

function StreamlinedAgenticStreamingDemo() {
  const [draft, setDraft] = useState('')
  const [stepIndex, setStepIndex] = useState(1)

  const streamingStatus: AIChatboxStatus = stepIndex < 3 ? 'streaming' : 'idle'

  const stepDefinitions = [
    {
      id: 'profile',
      toolName: 'Reading your profile',
      summary: 'Collecting profile context and recent entries.',
    },
    {
      id: 'standardize',
      toolName: 'Standardizing your achievement',
      summary: 'Converting raw notes into normalized achievement format.',
    },
    {
      id: 'log',
      toolName: 'Logging your achievement',
      summary: 'Writing standardized output into the activity ledger.',
    },
  ]

  const workflowMessages: AIChatMessage[] = [
    {
      id: 'stream-user-1',
      role: 'user',
      content: 'Please process my latest achievement and log it.',
      timestamp: '11:04',
      status: 'complete',
    },
    {
      id: 'stream-assistant-1',
      role: 'assistant',
      content:
        'Running your achievement workflow as a streaming sequence. I will keep each step visible while it executes.',
      timestamp: '11:05',
      status: 'complete',
      toolCalls: stepDefinitions.map((step, index) => ({
        id: step.id,
        toolName: step.toolName,
        summary: step.summary,
        status:
          index < stepIndex
            ? 'success'
            : index === stepIndex
              ? 'running'
              : 'queued',
      })),
    },
  ]

  return (
    <VStack gap="sm" style={{ width: 'min(100vw - 32px, 760px)' }}>
      <HStack wrap gap="sm" align="center">
        <Button
          size="sm"
          variant="primary"
          onClick={() => setStepIndex((prev) => Math.min(prev + 1, 3))}
        >
          Advance Step
        </Button>
        <Button size="sm" variant="ghost" onClick={() => setStepIndex(1)}>
          Reset Streaming
        </Button>
      </HStack>

      <AIChatbox
        messages={workflowMessages}
        inputValue={draft}
        onInputChange={setDraft}
        onSend={(_value) => {
          setDraft('')
          setStepIndex(1)
        }}
        status={streamingStatus}
        variant="streamlined"
        suggestions={[
          'Reading your profile',
          'Standardizing your achievement',
          'Logging your achievement',
        ]}
        assistantState={() => (
          <Text as="span" size="xs" tone="secondary">
            Reading your profile -&gt; Standardizing your achievement -&gt;
            Logging your achievement
          </Text>
        )}
        maxHeight={560}
      />
    </VStack>
  )
}

export const StreamlinedModern: Story = {
  render: () => <StreamlinedAgenticStreamingDemo />,
}

export const SendingState: Story = {
  render: ChatWithState,
  args: {
    messages: [
      ...baseMessages,
      {
        id: 'user-2',
        role: 'user',
        content: 'Can you turn this into implementation tasks?',
        timestamp: '09:45',
        status: 'pending',
      },
    ],
    inputValue: 'Can you turn this into implementation tasks?',
    status: 'sending',
    maxHeight: 560,
  },
}

export const ThinkingAndStreaming: Story = {
  render: () => (
    <VStack gap="md" style={{ width: 'min(100vw - 32px, 760px)' }}>
      <AIChatbox
        messages={baseMessages}
        inputValue=""
        onInputChange={() => {}}
        status="thinking"
        showComposer={false}
        maxHeight={360}
      />
      <AIChatbox
        messages={baseMessages}
        inputValue=""
        onInputChange={() => {}}
        status="streaming"
        showComposer={false}
        maxHeight={360}
      />
    </VStack>
  ),
}

export const ErrorAndDisabled: Story = {
  render: () => (
    <VStack gap="md" style={{ width: 'min(100vw - 32px, 760px)' }}>
      <AIChatbox
        messages={[
          ...baseMessages,
          {
            id: 'assistant-error',
            role: 'assistant',
            content:
              'I could not complete that request due to a network issue.',
            timestamp: '09:48',
            status: 'error',
          },
        ]}
        inputValue="Try again with the previous context"
        onInputChange={() => {}}
        status="error"
        errorMessage="Connection interrupted while generating response."
        maxHeight={430}
      />
      <AIChatbox
        messages={baseMessages}
        inputValue="Chat is disabled during maintenance"
        onInputChange={() => {}}
        status="disabled"
        disabled
        maxHeight={430}
      />
    </VStack>
  ),
}

export const StateMatrix: Story = {
  render: () => {
    const statuses: AIChatboxStatus[] = [
      'idle',
      'composing',
      'sending',
      'thinking',
      'streaming',
      'error',
      'disabled',
    ]

    return (
      <Card style={{ width: 'min(100vw - 32px, 1200px)' }}>
        <VStack gap="lg">
          <Text as="h3" style={{ margin: 0 }}>
            Full State Matrix
          </Text>
          <Text as="p" tone="secondary" style={{ margin: 0 }}>
            Verify all visual states in one screen.
          </Text>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '16px',
            }}
          >
            {statuses.map((status) => (
              <VStack key={status} gap="sm">
                <Text
                  as="span"
                  size="sm"
                  weight="semibold"
                  style={{ textTransform: 'capitalize' }}
                >
                  {status}
                </Text>
                <AIChatbox
                  messages={status === 'idle' ? [] : baseMessages}
                  inputValue={
                    status === 'composing' ? 'Draft message in progress...' : ''
                  }
                  onInputChange={() => {}}
                  status={status}
                  suggestions={
                    status === 'idle'
                      ? ['Generate changelog', 'Review tests', 'Improve naming']
                      : undefined
                  }
                  maxHeight={360}
                />
              </VStack>
            ))}
          </div>
        </VStack>
      </Card>
    )
  },
}

export const ResponsivePreview: Story = {
  render: ChatWithState,
  args: {
    messages: baseMessages,
    inputValue: '',
    status: 'idle',
    suggestions: ['Draft API docs', 'Generate migration guide'],
    maxHeight: 500,
  },
  decorators: [
    (StoryComponent) => (
      <VStack gap="md" style={{ width: '100%' }}>
        <HStack
          justify="space-between"
          style={{ width: 'min(100vw - 32px, 760px)' }}
        >
          <Text as="span" size="sm" tone="secondary">
            Resize canvas to test mobile behavior.
          </Text>
          <Button variant="ghost" size="sm">
            Demo
          </Button>
        </HStack>
        <div style={{ width: 'min(100vw - 32px, 760px)' }}>
          <StoryComponent />
        </div>
      </VStack>
    ),
  ],
}

function FileUploadAndDropDemo() {
  const [draft, setDraft] = useState('')
  const [messages, setMessages] = useState<AIChatMessage[]>(baseMessages)

  return (
    <VStack gap="sm" style={{ width: 'min(100vw - 32px, 760px)' }}>
      <Text as="p" size="sm" tone="secondary" style={{ margin: 0 }}>
        Use the Upload button or drag files onto the composer area.
      </Text>

      <AIChatbox
        messages={messages}
        inputValue={draft}
        onInputChange={setDraft}
        onSend={(value) => {
          setMessages((prev) => [
            ...prev,
            {
              id: `upload-user-${Date.now()}`,
              role: 'user',
              content: value,
              timestamp: 'now',
              status: 'complete',
            },
          ])
          setDraft('')
        }}
        onFilesSelected={(files) => {
          const names = files.map((file) => file.name).join(', ')

          setMessages((prev) => [
            ...prev,
            {
              id: `upload-system-${Date.now()}`,
              role: 'system',
              content: `Uploaded ${files.length} file${files.length > 1 ? 's' : ''}: ${names}`,
              timestamp: 'now',
              status: 'complete',
            },
          ])
        }}
        fileAccept=".pdf,.png,.jpg,.jpeg,.txt,.md"
        fileMultiple
        status="idle"
        maxHeight={520}
      />
    </VStack>
  )
}

export const FileUploadAndDrop: Story = {
  render: () => <FileUploadAndDropDemo />,
}

function AgenticWorkflowDemo() {
  const initialWorkflow: AIChatMessage[] = [
    {
      id: 'assistant-agent-1',
      role: 'assistant',
      content:
        'Starting autonomous workflow. I will inspect architecture, gather style patterns, then implement and validate.',
      timestamp: '10:02',
      status: 'complete',
      avatarSlot: (
        <div
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '9999px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '11px',
            fontWeight: 700,
            background:
              'linear-gradient(135deg, var(--color-primary) 0%, var(--color-purple) 100%)',
          }}
        >
          AG
        </div>
      ),
    },
    {
      id: 'user-agent-1',
      role: 'user',
      content: 'Apply the plan and run verification.',
      timestamp: '10:03',
      status: 'complete',
    },
    {
      id: 'assistant-agent-2',
      role: 'assistant',
      content:
        'Discovery complete. Found relevant UI patterns for card borders, motion, and loading states.',
      timestamp: '10:04',
      status: 'complete',
      toolCalls: [
        {
          id: 'tool-1',
          toolName: 'semantic_search',
          status: 'success',
          summary:
            'Located existing AI styling patterns from Card and ThinkingText.',
          input: 'Search for AI card styling and loading states',
          output: 'Found relevant code in src/components/Display/Card.tsx',
          durationMs: 245,
        },
      ],
      citations: [
        {
          id: 'citation-2',
          label: 'Card AI variant',
          source: 'src/components/Display/Card.tsx',
        },
        {
          id: 'citation-3',
          label: 'Thinking animation',
          source: 'src/components/Utils/ThinkingText.tsx',
        },
      ],
    },
    {
      id: 'assistant-agent-3',
      role: 'assistant',
      content:
        'Applying chatbox API extension for citations, actions, tool calls, and artifact cards.',
      timestamp: '10:05',
      status: 'complete',
      toolCalls: [
        {
          id: 'tool-2',
          toolName: 'apply_patch',
          status: 'success',
          summary: 'Patched AIChatbox.tsx with richer message schema.',
          input: 'Patch AIChatbox.tsx',
          output: 'Added types and renderers for tool calls and artifacts.',
          durationMs: 182,
        },
      ],
    },
    {
      id: 'assistant-agent-4',
      role: 'assistant',
      content:
        'Styling pass completed. Added visual treatments for tool blocks, citations, and action rows.',
      timestamp: '10:06',
      status: 'complete',
      toolCalls: [
        {
          id: 'tool-3',
          toolName: 'apply_patch',
          status: 'success',
          summary: 'Patched chatbox.css with agentic visual styles.',
          input: 'Patch chatbox.css',
          output: 'Added new sections for tool cards and artifact blocks.',
          durationMs: 133,
        },
      ],
    },
    {
      id: 'assistant-agent-5',
      role: 'assistant',
      content: 'Validation completed and artifact report generated.',
      timestamp: '10:07',
      status: 'complete',
      artifacts: [
        {
          id: 'artifact-1',
          title: 'Implementation Summary',
          description: 'Component update delivered with state coverage.',
          fields: [
            { label: 'Files updated', value: '3' },
            { label: 'States covered', value: '9' },
            { label: 'Risk', value: 'Low' },
          ],
          footer: (
            <>
              <Button size="sm" variant="primary">
                View Diff
              </Button>
              <Button size="sm" variant="ghost">
                Open Tests
              </Button>
            </>
          ),
        },
      ],
      actions: [
        { id: 'approve', label: 'Approve Plan', variant: 'primary' },
        { id: 'revise', label: 'Revise', variant: 'secondary' },
        { id: 'run-tests', label: 'Run Tests', variant: 'teal' },
      ],
    },
    {
      id: 'assistant-agent-6',
      role: 'assistant',
      content:
        'Next options: continue with timeline grouping, collapsible tool traces, or persistable run history.',
      timestamp: '10:08',
      status: 'complete',
    },
  ]

  const [messages, setMessages] = useState(initialWorkflow)
  const [draft, setDraft] = useState(
    'Proceed with implementation and summarize results.'
  )
  const [status, setStatus] = useState<AIChatboxStatus>('streaming')

  const appendAgentStep = () => {
    const nextIndex = messages.length + 1
    const minute = 8 + nextIndex
    const time = `10:${minute.toString().padStart(2, '0')}`

    setMessages((prev) => [
      ...prev,
      {
        id: `assistant-live-${Date.now()}`,
        role: 'assistant',
        content: `Live agent step ${nextIndex}: executed another tool and appended result to the transcript.`,
        timestamp: time,
        status: 'complete',
        toolCalls: [
          {
            id: `tool-live-${Date.now()}`,
            toolName: 'execution_subagent',
            status: 'success',
            summary: 'Executed command and extracted key output.',
            input: 'yarn lint && yarn build:lib',
            output: 'Both commands passed.',
            durationMs: 320,
          },
        ],
      },
    ])
    setStatus('streaming')
  }

  return (
    <VStack gap="md" style={{ width: 'min(100vw - 32px, 780px)' }}>
      <HStack wrap gap="sm" align="center">
        <Button size="sm" variant="primary" onClick={appendAgentStep}>
          Append Agent Step
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={() =>
            setMessages((prev) => [
              ...prev,
              {
                id: `user-live-${Date.now()}`,
                role: 'user',
                content: 'Continue and include a rollback plan.',
                timestamp: 'now',
                status: 'complete',
              },
            ])
          }
        >
          Add User Prompt
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={() =>
            setStatus((prev) => (prev === 'streaming' ? 'idle' : 'streaming'))
          }
        >
          Toggle Streaming
        </Button>
        <Button
          size="sm"
          variant="danger"
          onClick={() => {
            setMessages(initialWorkflow)
            setStatus('streaming')
          }}
        >
          Reset Transcript
        </Button>
      </HStack>

      <Text as="p" size="sm" tone="secondary" style={{ margin: 0 }}>
        This story is intentionally height-constrained. Add steps to watch
        auto-scroll and manual scroll behavior in a long agent run.
      </Text>

      <AIChatbox
        messages={messages}
        inputValue={draft}
        onInputChange={setDraft}
        onSend={(value) => {
          setMessages((prev) => [
            ...prev,
            {
              id: `user-send-${Date.now()}`,
              role: 'user',
              content: value,
              timestamp: 'now',
              status: 'complete',
            },
          ])
          setDraft('')
          setStatus('thinking')
          setTimeout(() => {
            setMessages((prev) => [
              ...prev,
              {
                id: `assistant-reply-${Date.now()}`,
                role: 'assistant',
                content:
                  'Acknowledged. I will continue with the next execution phase.',
                timestamp: 'now',
                status: 'complete',
              },
            ])
            setStatus('streaming')
          }, 500)
        }}
        status={status}
        capabilities={['Plan', 'Code', 'Run tools', 'Summarize']}
        agentModeLabel="Agentic Workflow"
        onStop={() => setStatus('idle')}
        onClearConversation={() => setMessages([])}
        onMessageAction={(action, message) => {
          setMessages((prev) => [
            ...prev,
            {
              id: `action-${Date.now()}`,
              role: 'system',
              content: `Action "${action.label}" selected for ${message.id}.`,
              timestamp: 'now',
              status: 'complete',
            },
          ])
        }}
        maxHeight={440}
      />
    </VStack>
  )
}

export const AgenticWorkflow: Story = {
  render: () => <AgenticWorkflowDemo />,
}
