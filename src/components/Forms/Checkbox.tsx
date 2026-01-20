import { forwardRef } from 'react'

export interface CheckboxProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
> {
  label?: string
  error?: string
  hint?: string
  indeterminate?: boolean
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, hint, className = '', indeterminate, ...props }, ref) => {
    const classes = [
      'bien-checkbox-wrapper',
      error && 'bien-checkbox-wrapper--error',
      props.disabled && 'bien-checkbox-wrapper--disabled',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div className={classes}>
        <label className="bien-checkbox-label">
          <input
            ref={(el) => {
              if (el) {
                el.indeterminate = indeterminate || false
              }
              if (typeof ref === 'function') {
                ref(el)
              } else if (ref) {
                ref.current = el
              }
            }}
            type="checkbox"
            className="bien-checkbox"
            {...props}
          />
          <span className="bien-checkbox-box">
            <svg
              className="bien-checkbox-check"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M13.5 4.5L6 12L2.5 8.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className="bien-checkbox-indeterminate"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M4 8H12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          {label && <span className="bien-checkbox-text">{label}</span>}
        </label>
        {hint && !error && <span className="bien-checkbox-hint">{hint}</span>}
        {error && <span className="bien-checkbox-error">{error}</span>}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'
