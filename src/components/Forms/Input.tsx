import { forwardRef, useId } from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hint?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, error, required, className = '', ...props }, ref) => {
    const id = useId()
    const inputId = props.id || id
    const hintId = `${inputId}-hint`
    const errorId = `${inputId}-error`

    const describedBy = [
      hint && hintId,
      error && errorId,
      props['aria-describedby'],
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div className="bien-input-field">
        {label && (
          <label htmlFor={inputId} className="bien-input-label">
            {label}
            {required && (
              <span className="bien-input-required" aria-label="required">
                *
              </span>
            )}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          className={`bien-input ${error ? 'bien-input--error' : ''} ${className}`}
          aria-describedby={describedBy || undefined}
          aria-invalid={error ? 'true' : undefined}
          required={required}
          {...props}
        />

        {hint && !error && (
          <span id={hintId} className="bien-input-hint">
            {hint}
          </span>
        )}

        {error && (
          <span id={errorId} className="bien-input-error" role="alert">
            {error}
          </span>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
