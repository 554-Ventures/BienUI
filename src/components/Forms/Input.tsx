import { forwardRef, useId } from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hint?: string
  error?: string
  startElement?: React.ReactNode
  endElement?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      hint,
      error,
      startElement,
      endElement,
      required,
      className = '',
      ...props
    },
    ref
  ) => {
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

    const hasAdornments = startElement || endElement

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

        <div
          className={`bien-input-wrapper ${hasAdornments ? 'bien-input-wrapper--with-adornments' : ''} ${error ? 'bien-input-wrapper--error' : ''}`}
        >
          {startElement && (
            <div className="bien-input-start-element">{startElement}</div>
          )}

          <input
            ref={ref}
            id={inputId}
            className={`bien-input ${hasAdornments ? 'bien-input--with-adornments' : ''} ${startElement ? 'bien-input--with-start' : ''} ${endElement ? 'bien-input--with-end' : ''} ${error ? 'bien-input--error' : ''} ${className}`}
            aria-describedby={describedBy || undefined}
            aria-invalid={error ? 'true' : undefined}
            required={required}
            {...props}
          />

          {endElement && (
            <div className="bien-input-end-element">{endElement}</div>
          )}
        </div>

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
