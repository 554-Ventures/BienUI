import { forwardRef } from 'react'

export interface TagsProps {
  children: React.ReactNode
  variant?:
    | 'success'
    | 'error'
    | 'warning'
    | 'info'
    | 'neutral'
    | 'primary'
    | 'accent'
    | 'purple'
    | 'gradient-primary'
    | 'gradient-purple'
    | 'gradient-accent'
    | 'gradient-rainbow'
    | 'gradient-blue'
    | 'gradient-teal'
  size?: 'sm' | 'md' | 'lg'
  onRemove?: () => void
  removable?: boolean
  disabled?: boolean
  className?: string
}

const TagsComponent = forwardRef<HTMLSpanElement, TagsProps>(
  (
    {
      children,
      variant = 'neutral',
      size = 'md',
      onRemove,
      removable = false,
      disabled = false,
      className = '',
    },
    ref
  ) => {
    const classes = [
      'bien-tags',
      `bien-tags--${variant}`,
      `bien-tags--${size}`,
      disabled && 'bien-tags--disabled',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    const handleRemove = (e: React.MouseEvent) => {
      e.stopPropagation()
      if (!disabled && onRemove) {
        onRemove()
      }
    }

    return (
      <span ref={ref} className={classes}>
        <span className="bien-tags__text">{children}</span>
        {(removable || onRemove) && (
          <button
            type="button"
            className="bien-tags__remove"
            onClick={handleRemove}
            disabled={disabled}
            aria-label={`Remove ${typeof children === 'string' ? children : 'tag'}`}
          >
            <svg
              className="bien-tags__remove-icon"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M3 3L9 9M3 9L9 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </span>
    )
  }
)

TagsComponent.displayName = 'Tags'

export const Tags = TagsComponent
