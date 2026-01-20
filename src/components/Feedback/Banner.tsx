import { useState } from 'react'

export interface BannerAction {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
}

export interface BannerProps {
  title?: string
  children: React.ReactNode
  variant?: 'info' | 'success' | 'warning' | 'error' | 'neutral' | 'ai'
  icon?: React.ReactNode
  actions?: BannerAction[]
  dismissible?: boolean
  onDismiss?: () => void
  defaultVisible?: boolean
  visible?: boolean
  sticky?: boolean
  className?: string
  style?: React.CSSProperties
}

export function Banner({
  title,
  children,
  variant = 'neutral',
  icon,
  actions,
  dismissible = false,
  onDismiss,
  defaultVisible = true,
  visible: controlledVisible,
  sticky = false,
  className = '',
  style,
}: BannerProps) {
  const [internalVisible, setInternalVisible] = useState(defaultVisible)
  const isControlled = controlledVisible !== undefined
  const isVisible = isControlled ? controlledVisible : internalVisible

  const handleDismiss = () => {
    if (!isControlled) {
      setInternalVisible(false)
    }
    onDismiss?.()
  }

  if (!isVisible) return null

  const classes = [
    'bien-banner',
    `bien-banner--${variant}`,
    sticky && 'bien-banner--sticky',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  // Default icons for each variant
  const defaultIcons = {
    info: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 15C9.45 15 9 14.55 9 14V10C9 9.45 9.45 9 10 9C10.55 9 11 9.45 11 10V14C11 14.55 10.55 15 10 15ZM11 7H9V5H11V7Z"
          fill="currentColor"
        />
      </svg>
    ),
    success: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"
          fill="currentColor"
        />
      </svg>
    ),
    warning: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M1 17H19L10 2L1 17ZM11 14H9V12H11V14ZM11 10H9V6H11V10Z"
          fill="currentColor"
        />
      </svg>
    ),
    error: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z"
          fill="currentColor"
        />
      </svg>
    ),
    neutral: null,
    ai: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 15C9.45 15 9 14.55 9 14V10C9 9.45 9.45 9 10 9C10.55 9 11 9.45 11 10V14C11 14.55 10.55 15 10 15ZM11 7H9V5H11V7Z"
          fill="currentColor"
        />
      </svg>
    ),
  }

  const displayIcon = icon !== undefined ? icon : defaultIcons[variant]

  return (
    <div className={classes} style={style} role="alert" aria-live="polite">
      <div className="bien-banner__content">
        {displayIcon && <div className="bien-banner__icon">{displayIcon}</div>}

        <div className="bien-banner__text">
          {title && <div className="bien-banner__title">{title}</div>}
          <div className="bien-banner__description">{children}</div>
        </div>

        {actions && actions.length > 0 && (
          <div className="bien-banner__actions">
            {actions.map((action, index) => (
              <button
                key={index}
                className={`bien-banner__action bien-banner__action--${action.variant || 'secondary'}`}
                onClick={action.onClick}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}

        {dismissible && (
          <button
            className="bien-banner__dismiss"
            onClick={handleDismiss}
            aria-label="Dismiss banner"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M4 4L12 12M4 12L12 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}
