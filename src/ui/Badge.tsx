import { forwardRef } from 'react'
import './styles/badge.css'

export interface BadgeProps {
  children: React.ReactNode
  variant?:
    | 'success'
    | 'error'
    | 'warning'
    | 'info'
    | 'neutral'
    | 'primary'
    | 'ai'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  dot?: boolean
  outline?: boolean
  className?: string
}

const BadgeComponent = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      variant = 'neutral',
      size = 'md',
      icon,
      dot = false,
      outline = false,
      className = '',
    },
    ref
  ) => {
    const classes = [
      'bien-badge',
      `bien-badge--${variant}`,
      `bien-badge--${size}`,
      outline && 'bien-badge--outline',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <span ref={ref} className={classes}>
        {dot && <span className="bien-badge__dot" />}
        {icon && <span className="bien-badge__icon">{icon}</span>}
        <span className="bien-badge__text">{children}</span>
        {variant === 'ai' && <span className="bien-badge__shimmer" />}
      </span>
    )
  }
)

BadgeComponent.displayName = 'Badge'

export const Badge = BadgeComponent
