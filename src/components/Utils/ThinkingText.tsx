import { useEffect } from 'react'

export interface ThinkingTextProps {
  text?: string
  variant?: 'thinking' | 'reasoning' | 'analyzing' | 'processing' | 'generating'
  speed?: 'slow' | 'normal' | 'fast'
  showCursor?: boolean
  loop?: boolean
  onComplete?: () => void
  className?: string
}

const variantConfig = {
  thinking: {
    icon: '🤔',
    label: 'Thinking',
    gradient: 'var(--gradient-primary)',
  },
  reasoning: {
    icon: '🧠',
    label: 'Reasoning',
    gradient: 'var(--gradient-purple)',
  },
  analyzing: {
    icon: '🔍',
    label: 'Analyzing',
    gradient:
      'linear-gradient(135deg, var(--color-teal) 0%, var(--color-blue) 100%)',
  },
  processing: {
    icon: '⚙️',
    label: 'Processing',
    gradient:
      'linear-gradient(135deg, var(--color-accent) 0%, var(--color-teal) 100%)',
  },
  generating: {
    icon: '✨',
    label: 'Generating',
    gradient:
      'linear-gradient(135deg, var(--color-purple) 0%, var(--color-blue) 100%)',
  },
}

export function ThinkingText({
  text,
  variant = 'thinking',
  showCursor = true,
  onComplete,
  className = '',
}: ThinkingTextProps) {
  const config = variantConfig[variant]

  useEffect(() => {
    if (!text || !onComplete) {
      return
    }

    // Text now renders immediately without typing animation.
    onComplete()
  }, [text, onComplete])

  const classes = [
    'bien-thinking-text',
    `bien-thinking-text--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (!text) {
    return (
      <div className={classes}>
        <div className="bien-thinking-text__indicator">
          <span className="bien-thinking-text__icon">{config.icon}</span>
          <span className="bien-thinking-text__label">{config.label}</span>
          <div className="bien-thinking-text__dots">
            <span className="bien-thinking-text__dot"></span>
            <span className="bien-thinking-text__dot"></span>
            <span className="bien-thinking-text__dot"></span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={classes}>
      <div className="bien-thinking-text__content">
        <span className="bien-thinking-text__icon">{config.icon}</span>
        <div className="bien-thinking-text__text-wrapper">
          <span className="bien-thinking-text__text">{text}</span>
          {showCursor && <span className="bien-thinking-text__cursor">|</span>}
        </div>
      </div>
      <div className="bien-thinking-text__shimmer"></div>
    </div>
  )
}
