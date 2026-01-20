import { forwardRef } from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'primary'
    | 'secondary'
    | 'ghost'
    | 'danger'
    | 'accent'
    | 'purple'
    | 'blue'
    | 'teal'
    | 'gradient-primary'
    | 'gradient-teal'
    | 'gradient-purple'
    | 'gradient-accent'
    | 'gradient-blue'
    | 'gradient-rainbow'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  fullWidth?: boolean
  icon?: React.ReactNode
  iconPosition?: 'start' | 'end'
  iconOnly?: boolean
  shape?: 'default' | 'circle'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      loading = false,
      fullWidth = false,
      icon,
      iconPosition = 'start',
      iconOnly = false,
      shape = 'default',
      disabled,
      className = '',
      ...props
    },
    ref
  ) => {
    const classes = [
      'bien-button',
      `bien-button--${variant}`,
      `bien-button--${size}`,
      fullWidth && 'bien-button--full-width',
      iconOnly && 'bien-button--icon-only',
      shape === 'circle' && 'bien-button--circle',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    const isGradient = variant?.startsWith('gradient-')

    const iconElement = icon && (
      <span className={`bien-button__icon bien-button__icon--${iconPosition}`}>
        {icon}
      </span>
    )

    const content = (
      <>
        {loading && (
          <span className="bien-button__spinner" aria-hidden="true" />
        )}
        {!loading && iconPosition === 'start' && iconElement}
        {!iconOnly && children}
        {!loading && iconPosition === 'end' && iconElement}
      </>
    )

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        aria-busy={loading}
        aria-label={
          iconOnly
            ? typeof children === 'string'
              ? children
              : undefined
            : undefined
        }
        {...props}
      >
        {isGradient ? (
          <span className="bien-button__content">{content}</span>
        ) : (
          content
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
