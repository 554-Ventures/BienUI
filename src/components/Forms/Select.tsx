import { forwardRef } from 'react'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps extends Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  'children'
> {
  label?: string
  error?: string
  hint?: string
  options: SelectOption[]
  placeholder?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { label, error, hint, options, placeholder, className = '', ...props },
    ref
  ) => {
    const classes = [
      'bien-select-wrapper',
      error && 'bien-select-wrapper--error',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div className={classes}>
        {label && (
          <label className="bien-select-label">
            {label}
            {props.required && <span className="bien-select-required">*</span>}
          </label>
        )}
        <div className="bien-select-container">
          <select
            ref={ref}
            className="bien-select"
            aria-invalid={error ? 'true' : 'false'}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          <svg
            className="bien-select-icon"
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
        </div>
        {hint && !error && <span className="bien-select-hint">{hint}</span>}
        {error && <span className="bien-select-error">{error}</span>}
      </div>
    )
  }
)

Select.displayName = 'Select'
