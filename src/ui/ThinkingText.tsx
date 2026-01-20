import { useState, useEffect } from 'react'
import './styles/thinking-text.css'

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

const speedConfig = {
  slow: 80,
  normal: 50,
  fast: 30,
}

export function ThinkingText({
  text,
  variant = 'thinking',
  speed = 'normal',
  showCursor = true,
  loop = false,
  onComplete,
  className = '',
}: ThinkingTextProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const config = variantConfig[variant]
  const typingSpeed = speedConfig[speed]

  useEffect(() => {
    if (!text) {
      // Use setTimeout to avoid setState in effect
      const timer = setTimeout(() => {
        setDisplayedText('')
        setCurrentIndex(0)
        setIsComplete(false)
      }, 0)
      return () => clearTimeout(timer)
    }

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, typingSpeed)

      return () => clearTimeout(timeout)
    } else if (!isComplete) {
      const timer = setTimeout(() => {
        setIsComplete(true)
        onComplete?.()
        
        if (loop) {
          setTimeout(() => {
            setDisplayedText('')
            setCurrentIndex(0)
            setIsComplete(false)
          }, 2000)
        }
      }, 0)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, text, typingSpeed, isComplete, loop, onComplete])

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
          <span className="bien-thinking-text__text">{displayedText}</span>
          {showCursor && !isComplete && (
            <span className="bien-thinking-text__cursor">|</span>
          )}
        </div>
      </div>
      <div className="bien-thinking-text__shimmer"></div>
    </div>
  )
}
