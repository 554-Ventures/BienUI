import { useState } from 'react'

export interface CardProps {
  children: React.ReactNode
  variant?:
    | 'elevated'
    | 'outlined'
    | 'filled'
    | 'ghost'
    | 'ai'
    | 'glass-frost'
    | 'glass-tint'
  color?: 'blue' | 'teal' | 'purple' | 'yellow'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  gradient?: 'primary' | 'purple' | 'accent' | 'blue' | 'rainbow'
  topGradient?: 'primary' | 'purple' | 'accent' | 'blue' | 'rainbow' | false
  hoverable?: boolean
  clickable?: boolean
  bordered?: boolean
  collapsible?: boolean
  defaultExpanded?: boolean
  expanded?: boolean
  onExpandChange?: (expanded: boolean) => void
  header?: React.ReactNode
  footer?: React.ReactNode
  title?: string
  subtitle?: string
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}

export function Card({
  children,
  variant = 'elevated',
  color,
  padding = 'md',
  radius = 'lg',
  shadow = 'sm',
  gradient,
  topGradient,
  hoverable = false,
  clickable = false,
  bordered = false,
  collapsible = false,
  defaultExpanded = true,
  expanded: controlledExpanded,
  onExpandChange,
  header,
  footer,
  title,
  subtitle,
  className = '',
  style,
  onClick,
}: CardProps) {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded)
  const isControlled = controlledExpanded !== undefined
  const isExpanded = isControlled ? controlledExpanded : internalExpanded

  const handleToggle = () => {
    if (!collapsible) return

    const newExpanded = !isExpanded
    if (!isControlled) {
      setInternalExpanded(newExpanded)
    }
    onExpandChange?.(newExpanded)
  }

  const classes = [
    'bien-card',
    `bien-card--${variant}`,
    color && `bien-card--color-${color}`,
    `bien-card--padding-${padding}`,
    `bien-card--radius-${radius}`,
    !gradient && `bien-card--shadow-${shadow}`,
    gradient && `bien-card--gradient-${gradient}`,
    topGradient && 'bien-card--has-top-gradient',
    topGradient && `bien-card--top-gradient-${topGradient}`,
    hoverable && 'bien-card--hoverable',
    clickable && 'bien-card--clickable',
    bordered && 'bien-card--bordered',
    collapsible && 'bien-card--collapsible',
    (header || title) && 'bien-card--has-header',
    footer && 'bien-card--has-footer',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const hasHeaderContent = header || title || subtitle

  return (
    <div
      className={classes}
      style={style}
      onClick={clickable ? onClick : undefined}
    >
      {variant === 'ai' && <div className="bien-card__ai-border" />}

      {hasHeaderContent && (
        <div
          className="bien-card__header"
          onClick={collapsible ? handleToggle : undefined}
          style={{ cursor: collapsible ? 'pointer' : 'default' }}
        >
          {header || (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                {title && <div className="bien-card__title">{title}</div>}
                {subtitle && (
                  <div className="bien-card__subtitle">{subtitle}</div>
                )}
              </div>
              {collapsible && (
                <button
                  className="bien-card__expand-button"
                  aria-label={isExpanded ? 'Collapse' : 'Expand'}
                  aria-expanded={isExpanded}
                  type="button"
                  onClick={handleToggle}
                >
                  <svg
                    className={`bien-card__expand-icon ${isExpanded ? 'bien-card__expand-icon--expanded' : ''}`}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}
            </div>
          )}
        </div>
      )}

      <div
        className={`bien-card__content ${collapsible && !isExpanded ? 'bien-card__content--collapsed' : ''}`}
      >
        {children}
      </div>

      {footer && <div className="bien-card__footer">{footer}</div>}
    </div>
  )
}
