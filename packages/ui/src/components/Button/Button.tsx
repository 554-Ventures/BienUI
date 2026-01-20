import React, { forwardRef } from 'react'
import { button, spinner } from './Button.css'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  fullWidth?: boolean
}

/**
 * Button component with multiple variants and sizes
 * Built on native button with proper ARIA attributes
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      loading = false,
      fullWidth = false,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`${button({ variant, size, fullWidth })} ${className || ''}`}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading && <span className={spinner} aria-hidden="true" />}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
