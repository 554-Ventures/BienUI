import { useEffect, useRef } from 'react'
import { Card } from '../Display/Card'
import { Avatar } from '../Display/Avatar'
import { Badge } from '../Display/Badge'
import { Text } from '../Display/Text'
import { Button } from '../Interactive/Button'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { SendIcon, TrashIcon } from '../Icons'
import { ThinkingText } from '../Utils/ThinkingText'

export type AIChatRole = 'assistant' | 'user' | 'system'

export type AIChatboxStatus =
  | 'idle'
  | 'composing'
  | 'sending'
  | 'thinking'
  | 'streaming'
  | 'error'
  | 'disabled'

export type AIChatMessageStatus = 'pending' | 'complete' | 'error'

export type AIChatToolStatus = 'queued' | 'running' | 'success' | 'error'

export type AIChatActionVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'danger'
  | 'accent'
  | 'purple'
  | 'blue'
  | 'teal'

export interface AIChatCitation {
  id: string
  label: string
  href?: string
  source?: string
}

export interface AIChatAction {
  id: string
  label: string
  variant?: AIChatActionVariant
  disabled?: boolean
}

export interface AIChatToolCall {
  id: string
  toolName: string
  status: AIChatToolStatus
  summary?: string
  input?: React.ReactNode
  output?: React.ReactNode
  durationMs?: number
}

export interface AIChatArtifactField {
  label: string
  value: React.ReactNode
}

export interface AIChatArtifactCard {
  id: string
  title: string
  description?: string
  fields?: AIChatArtifactField[]
  footer?: React.ReactNode
}

export interface AIChatMessage {
  id: string
  role: AIChatRole
  content: React.ReactNode
  timestamp?: string
  status?: AIChatMessageStatus
  avatarSlot?: React.ReactNode
  citations?: AIChatCitation[]
  actions?: AIChatAction[]
  toolCalls?: AIChatToolCall[]
  artifacts?: AIChatArtifactCard[]
}

export interface AIChatboxProps {
  messages: AIChatMessage[]
  inputValue: string
  onInputChange: (value: string) => void
  onSend?: (value: string) => void
  onRetry?: (message?: AIChatMessage) => void
  status?: AIChatboxStatus
  title?: string
  subtitle?: string
  placeholder?: string
  suggestions?: string[]
  onSuggestionClick?: (suggestion: string) => void
  emptyState?: React.ReactNode
  assistantName?: string
  assistantAvatar?: React.ReactNode
  userAvatar?: React.ReactNode
  userName?: string
  agentModeLabel?: string
  capabilities?: string[]
  errorMessage?: string
  disabled?: boolean
  readOnly?: boolean
  onStop?: () => void
  onClearConversation?: () => void
  onMessageAction?: (action: AIChatAction, message: AIChatMessage) => void
  onCitationClick?: (citation: AIChatCitation, message: AIChatMessage) => void
  autoScroll?: boolean
  showHeader?: boolean
  showComposer?: boolean
  maxHeight?: string | number
  className?: string
  style?: React.CSSProperties
}

function normalizeHeight(value: string | number | undefined): string {
  if (typeof value === 'number') {
    return `${value}px`
  }

  return value || '580px'
}

function getStatusLabel(status: AIChatboxStatus): string {
  switch (status) {
    case 'composing':
      return 'Composing'
    case 'sending':
      return 'Sending'
    case 'thinking':
      return 'Thinking'
    case 'streaming':
      return 'Streaming'
    case 'error':
      return 'Error'
    case 'disabled':
      return 'Disabled'
    default:
      return 'Ready'
  }
}

function isBusyStatus(status: AIChatboxStatus): boolean {
  return status === 'sending' || status === 'thinking' || status === 'streaming'
}

function getToolBadgeVariant(
  status: AIChatToolStatus
): 'warning' | 'ai' | 'success' | 'error' {
  switch (status) {
    case 'queued':
      return 'warning'
    case 'running':
      return 'ai'
    case 'success':
      return 'success'
    case 'error':
      return 'error'
    default:
      return 'ai'
  }
}

function renderMessageContent(content: React.ReactNode) {
  if (typeof content === 'string') {
    return (
      <div className="bien-chatbox__markdown">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    )
  }

  return content
}

export function AIChatbox({
  messages,
  inputValue,
  onInputChange,
  onSend,
  onRetry,
  status = 'idle',
  title = 'AI Assistant',
  subtitle = 'Ask anything about your workspace',
  placeholder = 'Type your message...',
  suggestions,
  onSuggestionClick,
  emptyState,
  assistantName = 'Assistant',
  assistantAvatar,
  userAvatar,
  userName = 'You',
  agentModeLabel = 'Agent Mode',
  capabilities,
  errorMessage = 'Something went wrong. Please try again.',
  disabled = false,
  readOnly = false,
  onStop,
  onClearConversation,
  onMessageAction,
  onCitationClick,
  autoScroll = true,
  showHeader = true,
  showComposer = true,
  maxHeight,
  className = '',
  style,
}: AIChatboxProps) {
  const classes = ['bien-chatbox', `bien-chatbox--${status}`, className]
    .filter(Boolean)
    .join(' ')

  const isBusy = isBusyStatus(status)
  const isDisabled = disabled || readOnly || status === 'disabled'
  const hasMessages = messages.length > 0
  const statusLabel = getStatusLabel(status)
  const transcriptRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!autoScroll || !transcriptRef.current) {
      return
    }

    transcriptRef.current.scrollTo({
      top: transcriptRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [autoScroll, messages, status])

  const handleSend = () => {
    if (!onSend || isDisabled || isBusy) {
      return
    }

    const value = inputValue.trim()
    if (!value) {
      return
    }

    onSend(value)
  }

  const handleComposerKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSend()
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    if (isDisabled) {
      return
    }

    onSuggestionClick?.(suggestion)
  }

  return (
    <Card
      variant="ai"
      padding="none"
      className={classes}
      style={{
        ...style,
        ['--bien-chatbox-max-height' as string]: normalizeHeight(maxHeight),
      }}
    >
      {showHeader && (
        <header className="bien-chatbox__header">
          <div className="bien-chatbox__header-main">
            <div className="bien-chatbox__title-group">
              {assistantAvatar || <Avatar size="sm" name="AI" />}
              <div className="bien-chatbox__title-copy">
                <Text as="h3" size="sm" weight="semibold" style={{ margin: 0 }}>
                  {title}
                </Text>
                <Text as="p" size="xs" tone="secondary" style={{ margin: 0 }}>
                  {subtitle}
                </Text>
              </div>
            </div>
            <div className="bien-chatbox__header-badges">
              <Badge variant="ai" size="sm">
                {agentModeLabel}
              </Badge>
              <Badge
                variant={status === 'error' ? 'error' : 'ai'}
                size="sm"
                dot
              >
                {statusLabel}
              </Badge>
            </div>
          </div>

          {(capabilities && capabilities.length > 0) || onClearConversation ? (
            <div className="bien-chatbox__header-tools">
              {capabilities && capabilities.length > 0 && (
                <div
                  className="bien-chatbox__capabilities"
                  aria-label="Agent capabilities"
                >
                  {capabilities.map((capability) => (
                    <span key={capability} className="bien-chatbox__capability">
                      {capability}
                    </span>
                  ))}
                </div>
              )}
              {onClearConversation && (
                <Button
                  variant="ghost"
                  size="sm"
                  icon={<TrashIcon size={14} />}
                  onClick={onClearConversation}
                >
                  Clear
                </Button>
              )}
            </div>
          ) : null}
        </header>
      )}

      <div
        ref={transcriptRef}
        className="bien-chatbox__transcript"
        role="log"
        aria-live="polite"
        aria-atomic="false"
      >
        {!hasMessages && (
          <div className="bien-chatbox__empty">
            {emptyState || (
              <>
                <Text as="h4" size="lg" weight="semibold" style={{ margin: 0 }}>
                  Start a conversation
                </Text>
                <Text as="p" tone="secondary" style={{ margin: 0 }}>
                  Ask for analysis, summaries, refactors, or implementation
                  help.
                </Text>
              </>
            )}

            {suggestions && suggestions.length > 0 && (
              <div className="bien-chatbox__suggestions">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    className="bien-chatbox__suggestion"
                    onClick={() => handleSuggestionClick(suggestion)}
                    disabled={isDisabled}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {messages.map((message) => {
          const bubbleClasses = [
            'bien-chatbox__bubble',
            `bien-chatbox__bubble--${message.role}`,
            message.status && `bien-chatbox__bubble--${message.status}`,
          ]
            .filter(Boolean)
            .join(' ')

          const sender = message.role === 'user' ? userName : assistantName
          const avatarNode =
            message.avatarSlot ||
            (message.role === 'assistant'
              ? assistantAvatar || <Avatar size="xs" name="AI" />
              : userAvatar || <Avatar size="xs" name={sender} />)

          return (
            <article
              key={message.id}
              className={`bien-chatbox__message bien-chatbox__message--${message.role}`}
            >
              {avatarNode}
              <div className={bubbleClasses}>
                <div className="bien-chatbox__meta">
                  <Text as="span" size="xs" weight="semibold">
                    {sender}
                  </Text>
                  {message.timestamp && (
                    <Text as="span" size="xs" tone="tertiary">
                      {message.timestamp}
                    </Text>
                  )}
                </div>
                <div className="bien-chatbox__content">
                  {renderMessageContent(message.content)}
                </div>

                {message.toolCalls && message.toolCalls.length > 0 && (
                  <div className="bien-chatbox__tool-calls">
                    {message.toolCalls.map((toolCall) => (
                      <section
                        key={toolCall.id}
                        className="bien-chatbox__tool-call"
                      >
                        <div className="bien-chatbox__tool-call-header">
                          <Text as="span" size="xs" weight="semibold">
                            {toolCall.toolName}
                          </Text>
                          <Badge
                            variant={getToolBadgeVariant(toolCall.status)}
                            size="sm"
                          >
                            {toolCall.status}
                          </Badge>
                        </div>

                        {toolCall.summary && (
                          <Text
                            as="p"
                            size="xs"
                            tone="secondary"
                            style={{ margin: 0 }}
                          >
                            {toolCall.summary}
                          </Text>
                        )}

                        {toolCall.input && (
                          <div className="bien-chatbox__tool-call-block">
                            <Text as="span" size="xs" tone="tertiary">
                              Input
                            </Text>
                            <div>{toolCall.input}</div>
                          </div>
                        )}

                        {toolCall.output && (
                          <div className="bien-chatbox__tool-call-block">
                            <Text as="span" size="xs" tone="tertiary">
                              Output
                            </Text>
                            <div>{toolCall.output}</div>
                          </div>
                        )}

                        {toolCall.durationMs !== undefined && (
                          <Text as="span" size="xs" tone="tertiary">
                            {toolCall.durationMs} ms
                          </Text>
                        )}
                      </section>
                    ))}
                  </div>
                )}

                {message.artifacts && message.artifacts.length > 0 && (
                  <div className="bien-chatbox__artifacts">
                    {message.artifacts.map((artifact) => (
                      <article
                        key={artifact.id}
                        className="bien-chatbox__artifact"
                      >
                        <Text
                          as="h5"
                          size="sm"
                          weight="semibold"
                          style={{ margin: 0 }}
                        >
                          {artifact.title}
                        </Text>
                        {artifact.description && (
                          <Text
                            as="p"
                            size="xs"
                            tone="secondary"
                            style={{ margin: 0 }}
                          >
                            {artifact.description}
                          </Text>
                        )}

                        {artifact.fields && artifact.fields.length > 0 && (
                          <dl className="bien-chatbox__artifact-fields">
                            {artifact.fields.map((field) => (
                              <div
                                key={field.label}
                                className="bien-chatbox__artifact-field"
                              >
                                <dt>{field.label}</dt>
                                <dd>{field.value}</dd>
                              </div>
                            ))}
                          </dl>
                        )}

                        {artifact.footer && (
                          <div className="bien-chatbox__artifact-footer">
                            {artifact.footer}
                          </div>
                        )}
                      </article>
                    ))}
                  </div>
                )}

                {message.citations && message.citations.length > 0 && (
                  <div
                    className="bien-chatbox__citations"
                    aria-label="Citations"
                  >
                    {message.citations.map((citation) => {
                      const label = citation.source
                        ? `${citation.label} - ${citation.source}`
                        : citation.label

                      if (citation.href) {
                        return (
                          <a
                            key={citation.id}
                            className="bien-chatbox__citation"
                            href={citation.href}
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => onCitationClick?.(citation, message)}
                          >
                            {label}
                          </a>
                        )
                      }

                      return (
                        <button
                          key={citation.id}
                          type="button"
                          className="bien-chatbox__citation"
                          onClick={() => onCitationClick?.(citation, message)}
                        >
                          {label}
                        </button>
                      )
                    })}
                  </div>
                )}

                {message.actions && message.actions.length > 0 && (
                  <div className="bien-chatbox__actions">
                    {message.actions.map((action) => (
                      <Button
                        key={action.id}
                        size="sm"
                        variant={action.variant || 'secondary'}
                        disabled={action.disabled || isDisabled}
                        onClick={() => onMessageAction?.(action, message)}
                      >
                        {action.label}
                      </Button>
                    ))}
                  </div>
                )}

                {message.status === 'error' && onRetry && (
                  <button
                    type="button"
                    className="bien-chatbox__retry"
                    onClick={() => onRetry(message)}
                  >
                    Retry
                  </button>
                )}
              </div>
            </article>
          )
        })}

        {(status === 'thinking' || status === 'streaming') && (
          <div className="bien-chatbox__assistant-state">
            {status === 'thinking' && (
              <ThinkingText
                variant="thinking"
                text="Thinking through your request..."
                speed="fast"
              />
            )}
            {status === 'streaming' && (
              <ThinkingText
                variant="generating"
                text="Generating response and streaming tokens..."
                speed="fast"
              />
            )}
          </div>
        )}
      </div>

      {status === 'error' && (
        <div className="bien-chatbox__global-error" role="alert">
          <Text as="span" size="sm" tone="error">
            {errorMessage}
          </Text>
          {onRetry && (
            <Button variant="ghost" size="sm" onClick={() => onRetry()}>
              Retry
            </Button>
          )}
        </div>
      )}

      {showComposer && (
        <footer
          className="bien-chatbox__composer"
          aria-label="Message composer"
        >
          <label className="bien-chatbox__composer-input">
            <span className="bien-chatbox__sr-only">Message</span>
            <textarea
              value={inputValue}
              placeholder={placeholder}
              rows={2}
              onChange={(event) => onInputChange(event.target.value)}
              onKeyDown={handleComposerKeyDown}
              disabled={isDisabled}
              readOnly={readOnly}
            />
          </label>
          <Button
            size="md"
            variant="gradient-primary"
            icon={<SendIcon size={14} />}
            iconOnly
            onClick={handleSend}
            loading={status === 'sending'}
            disabled={isDisabled || isBusy || inputValue.trim().length === 0}
          >
            Send
          </Button>
          {onStop && isBusy && (
            <Button variant="danger" size="md" onClick={onStop}>
              Stop
            </Button>
          )}
        </footer>
      )}
    </Card>
  )
}
