import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { SplitPanel } from '../components/Layout/SplitPanel'
import { Text } from '../components/Display/Text'
import { AIChatbox, type AIChatMessage } from '../components/Feedback/AIChatbox'

const meta = {
  title: 'Layout/SplitPanel',
  component: SplitPanel,
  args: {
    children: [<div key="split-left" />, <div key="split-right" />],
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A resizable split panel component for creating layouts with adjustable sections. Supports both horizontal and vertical splits with customizable constraints.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Split direction',
    },
    initialSize: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Initial split position as percentage (0-100)',
    },
    minSize: {
      control: { type: 'number', min: 0, step: 10 },
      description: 'Minimum size for first panel in pixels',
    },
    maxSize: {
      control: { type: 'number', min: 0, step: 10 },
      description: 'Maximum size for first panel in pixels',
    },
    resizable: {
      control: 'boolean',
      description: 'Whether the split is resizable',
    },
    collapsibleSecondPanel: {
      control: 'boolean',
      description: 'Whether the second panel can be collapsed and toggled',
    },
  },
} satisfies Meta<typeof SplitPanel>

export default meta
type Story = StoryObj<typeof meta>

const DemoPanel = ({ title, bgColor }: { title: string; bgColor: string }) => (
  <div
    style={{
      padding: '24px',
      height: '100%',
      backgroundColor: bgColor,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Text as="h3" align="center">
      {title}
    </Text>
  </div>
)

export const HorizontalSplit: Story = {
  args: {
    direction: 'horizontal',
    initialSize: 50,
    resizable: true,
  },
  render: (args) => {
    return (
      <div style={{ height: '500px' }}>
        <SplitPanel {...args}>
          <DemoPanel title="Left Panel" bgColor="#f0f9ff" />
          <DemoPanel title="Right Panel" bgColor="#fef3c7" />
        </SplitPanel>
      </div>
    )
  },
}

export const VerticalSplit: Story = {
  args: {
    direction: 'vertical',
    initialSize: 50,
    resizable: true,
  },
  render: (args) => {
    return (
      <div style={{ height: '500px' }}>
        <SplitPanel {...args}>
          <DemoPanel title="Top Panel" bgColor="#f0f9ff" />
          <DemoPanel title="Bottom Panel" bgColor="#fef3c7" />
        </SplitPanel>
      </div>
    )
  },
}

export const WithMinMax: Story = {
  args: {
    direction: 'horizontal',
    initialSize: 30,
    minSize: 200,
    maxSize: 600,
    resizable: true,
  },
  render: (args) => {
    return (
      <div style={{ height: '500px' }}>
        <SplitPanel {...args}>
          <DemoPanel
            title="Sidebar (min: 200px, max: 600px)"
            bgColor="#f0f9ff"
          />
          <DemoPanel title="Main Content" bgColor="#fef3c7" />
        </SplitPanel>
      </div>
    )
  },
}

export const AIAssistantDashboard: Story = {
  render: () => (
    <div style={{ height: '700px' }}>
      <SplitPanel direction="horizontal" initialSize={30} minSize={300}>
        {/* AI Chat Panel */}
        <div
          style={{
            backgroundColor: '#fafaf9',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            borderRight: '1px solid #e5e5e3',
          }}
        >
          {/* Chat Header */}
          <div
            style={{
              padding: '20px',
              borderBottom: '1px solid #e5e5e3',
              backgroundColor: '#ffffff',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background:
                    'linear-gradient(135deg, #a94f9e 0%, #8b3f85 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                }}
              >
                🤖
              </div>
              <div>
                <Text as="p" style={{ fontWeight: 600 }}>
                  AI Assistant
                </Text>
                <Text as="p" tone="secondary" style={{ fontSize: '12px' }}>
                  Always here to help
                </Text>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div
            style={{
              flex: 1,
              padding: '20px',
              overflow: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {/* AI Message */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background:
                    'linear-gradient(135deg, #a94f9e 0%, #8b3f85 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  flexShrink: 0,
                }}
              >
                🤖
              </div>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  maxWidth: '80%',
                  border: '1px solid #e5e5e3',
                }}
              >
                <Text as="p">
                  Hi! I&apos;ve analyzed your dashboard metrics. Would you like
                  insights on your revenue growth or user engagement trends?
                </Text>
              </div>
            </div>

            {/* User Message */}
            <div
              style={{
                display: 'flex',
                gap: '12px',
                justifyContent: 'flex-end',
              }}
            >
              <div
                style={{
                  backgroundColor: '#1d75bc',
                  color: '#ffffff',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  maxWidth: '80%',
                }}
              >
                <Text as="p" style={{ color: '#ffffff' }}>
                  Tell me about the revenue growth
                </Text>
              </div>
            </div>

            {/* AI Message */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background:
                    'linear-gradient(135deg, #a94f9e 0%, #8b3f85 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  flexShrink: 0,
                }}
              >
                🤖
              </div>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  maxWidth: '80%',
                  border: '1px solid #e5e5e3',
                }}
              >
                <Text as="p" style={{ marginBottom: '8px' }}>
                  Great news! Your revenue is up 12% from last month at $45,231.
                  Here are the key drivers:
                </Text>
                <ul
                  style={{
                    margin: '8px 0',
                    paddingLeft: '20px',
                    fontSize: '14px',
                  }}
                >
                  <li>24% increase in conversions (892 total)</li>
                  <li>8% growth in active users (3,842 total)</li>
                  <li>Higher average order value</li>
                </ul>
                <Text as="p" tone="secondary" style={{ fontSize: '12px' }}>
                  Would you like me to suggest strategies to maintain this
                  growth?
                </Text>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div
            style={{
              padding: '16px',
              borderTop: '1px solid #e5e5e3',
              backgroundColor: '#ffffff',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '8px',
                padding: '12px',
                backgroundColor: '#fafaf9',
                borderRadius: '8px',
                border: '1px solid #e5e5e3',
              }}
            >
              <input
                type="text"
                placeholder="Ask AI anything about your data..."
                style={{
                  flex: 1,
                  border: 'none',
                  backgroundColor: 'transparent',
                  outline: 'none',
                  fontSize: '14px',
                }}
              />
              <button
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#1d75bc',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Main Dashboard Panel */}
        <div
          style={{
            backgroundColor: '#ffffff',
            height: '100%',
            padding: '32px',
            overflow: 'auto',
          }}
        >
          <div style={{ marginBottom: '32px' }}>
            <Text as="h1" style={{ marginBottom: '8px' }}>
              Dashboard Overview
            </Text>
            <Text as="p" tone="secondary">
              Welcome back! Here&apos;s your performance summary.
            </Text>
          </div>

          {/* Stats Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              marginBottom: '32px',
            }}
          >
            <div
              style={{
                padding: '20px',
                backgroundColor: '#f0f9ff',
                borderRadius: '12px',
                border: '1px solid #e0f2fe',
              }}
            >
              <Text as="p" tone="secondary" style={{ marginBottom: '8px' }}>
                Total Revenue
              </Text>
              <Text as="h2" style={{ color: '#1d75bc' }}>
                $45,231
              </Text>
              <Text as="p" tone="secondary" style={{ fontSize: '12px' }}>
                ↑ 12% from last month
              </Text>
            </div>
            <div
              style={{
                padding: '20px',
                backgroundColor: '#fef3c7',
                borderRadius: '12px',
                border: '1px solid #fde68a',
              }}
            >
              <Text as="p" tone="secondary" style={{ marginBottom: '8px' }}>
                Active Users
              </Text>
              <Text as="h2" style={{ color: '#d97706' }}>
                3,842
              </Text>
              <Text as="p" tone="secondary" style={{ fontSize: '12px' }}>
                ↑ 8% from last week
              </Text>
            </div>
            <div
              style={{
                padding: '20px',
                backgroundColor: '#dcfce7',
                borderRadius: '12px',
                border: '1px solid #bbf7d0',
              }}
            >
              <Text as="p" tone="secondary" style={{ marginBottom: '8px' }}>
                Conversions
              </Text>
              <Text as="h2" style={{ color: '#16a34a' }}>
                892
              </Text>
              <Text as="p" tone="secondary" style={{ fontSize: '12px' }}>
                ↑ 24% from last month
              </Text>
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <Text as="h3" style={{ marginBottom: '16px' }}>
              Recent Activity
            </Text>
            <div
              style={{
                backgroundColor: '#fafaf9',
                borderRadius: '8px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px',
                  backgroundColor: '#ffffff',
                  borderRadius: '6px',
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#16a34a',
                  }}
                />
                <div style={{ flex: 1 }}>
                  <Text as="p" style={{ fontWeight: 500 }}>
                    New sale completed
                  </Text>
                  <Text as="p" tone="secondary" style={{ fontSize: '12px' }}>
                    Order #1847 - $249.00
                  </Text>
                </div>
                <Text as="p" tone="secondary" style={{ fontSize: '12px' }}>
                  2 min ago
                </Text>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px',
                  backgroundColor: '#ffffff',
                  borderRadius: '6px',
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#3b82f6',
                  }}
                />
                <div style={{ flex: 1 }}>
                  <Text as="p" style={{ fontWeight: 500 }}>
                    User registered
                  </Text>
                  <Text as="p" tone="secondary" style={{ fontSize: '12px' }}>
                    jane.smith@example.com
                  </Text>
                </div>
                <Text as="p" tone="secondary" style={{ fontSize: '12px' }}>
                  15 min ago
                </Text>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px',
                  backgroundColor: '#ffffff',
                  borderRadius: '6px',
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#f59e0b',
                  }}
                />
                <div style={{ flex: 1 }}>
                  <Text as="p" style={{ fontWeight: 500 }}>
                    Support ticket created
                  </Text>
                  <Text as="p" tone="secondary" style={{ fontSize: '12px' }}>
                    Ticket #2891 - Payment issue
                  </Text>
                </div>
                <Text as="p" tone="secondary" style={{ fontSize: '12px' }}>
                  1 hour ago
                </Text>
              </div>
            </div>
          </div>
        </div>
      </SplitPanel>
    </div>
  ),
}

function MainWithToggleableRightChatDemo() {
  const [chatCollapsed, setChatCollapsed] = useState(false)
  const [chatInput, setChatInput] = useState('')
  const [chatMessages, setChatMessages] = useState<AIChatMessage[]>([
    {
      id: 'split-chat-assistant-1',
      role: 'assistant',
      content:
        'I can turn your notes into polished release highlights. Share the sprint summary and I will draft it.',
      timestamp: '11:15',
      status: 'complete',
    },
    {
      id: 'split-chat-user-1',
      role: 'user',
      content: 'Start with this sprint and keep it concise.',
      timestamp: '11:16',
      status: 'complete',
    },
  ])

  return (
    <div style={{ height: '700px' }}>
      <SplitPanel
        direction="horizontal"
        initialSize={68}
        minSize={360}
        collapsibleSecondPanel
        secondPanelCollapsed={chatCollapsed}
        onSecondPanelCollapsedChange={setChatCollapsed}
        collapseSecondPanelLabel="Hide AI chat"
        expandSecondPanelLabel="Show AI chat"
      >
        <div
          style={{
            backgroundColor: '#ffffff',
            height: '100%',
            padding: '28px',
            overflow: 'auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '18px',
            }}
          >
            <Text as="h2" style={{ margin: 0 }}>
              Main Content
            </Text>
            <button
              type="button"
              onClick={() => setChatCollapsed((prev) => !prev)}
              style={{
                border: '1px solid #d9dde2',
                backgroundColor: '#f8fafc',
                borderRadius: '9999px',
                padding: '8px 14px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              {chatCollapsed ? 'Open Chat' : 'Hide Chat'}
            </button>
          </div>

          <Text as="p" tone="secondary" style={{ marginBottom: '20px' }}>
            Use the pill button or the floating edge toggle to show/hide the
            right AI chat panel.
          </Text>

          <div
            style={{
              display: 'grid',
              gap: '14px',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            }}
          >
            {['Tasks', 'Draft', 'Results', 'Timeline'].map((item) => (
              <div
                key={item}
                style={{
                  border: '1px solid #e8ecf1',
                  borderRadius: '12px',
                  padding: '16px',
                  backgroundColor: '#f8fafc',
                }}
              >
                <Text as="h4" style={{ margin: '0 0 6px 0' }}>
                  {item}
                </Text>
                <Text as="p" tone="secondary" style={{ margin: 0 }}>
                  Workspace details stay readable when chat is hidden.
                </Text>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            height: '100%',
            padding: '12px',
            backgroundColor: '#fbfcfd',
            borderLeft: '1px solid #e8ecf1',
          }}
        >
          <AIChatbox
            variant="streamlined"
            title="AI Chat"
            subtitle="Ask for summaries, rewrites, and implementation help"
            messages={chatMessages}
            inputValue={chatInput}
            onInputChange={setChatInput}
            onSend={(value) => {
              setChatMessages((prev) => [
                ...prev,
                {
                  id: `split-chat-user-${Date.now()}`,
                  role: 'user',
                  content: value,
                  timestamp: 'now',
                  status: 'complete',
                },
                {
                  id: `split-chat-assistant-${Date.now()}`,
                  role: 'assistant',
                  content:
                    'Received. I will condense this into a crisp release-ready summary.',
                  timestamp: 'now',
                  status: 'complete',
                },
              ])
              setChatInput('')
            }}
            suggestions={[
              'Summarize this sprint in 3 bullets',
              'Convert notes into release highlights',
              'Extract user impact and outcomes',
            ]}
            onSuggestionClick={(suggestion) => setChatInput(suggestion)}
            maxHeight="100%"
            capabilities={['Summarize', 'Rewrite', 'Structure']}
          />
        </div>
      </SplitPanel>
    </div>
  )
}

export const MainWithToggleableRightChat: Story = {
  render: () => <MainWithToggleableRightChatDemo />,
}
