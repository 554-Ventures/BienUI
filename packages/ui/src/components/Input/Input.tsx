import React, { forwardRef, useId } from 'react'
import {
  formField,
  label as labelStyle,
  requiredIndicator,
  input as inputStyle,
  inputError,
  hint as hintStyle,
  errorMessage as errorStyle,
} from './Input.css'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hint?: string
  error?: string
}

/**
 * Input component with label, hint, and error support
 * Properly wired with ARIA attributes for accessibility
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, error, required, className, ...props }, ref) => {
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
      <div className={formField}>
        {label && (
          <label htmlFor={inputId} className={labelStyle}>
            {label}
            {required && (
              <span className={requiredIndicator} aria-label="required">
                *
              </span>
            )}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          className={`${inputStyle} ${error ? inputError : ''} ${className || ''}`}
          aria-describedby={describedBy || undefined}
          aria-invalid={error ? 'true' : undefined}
          required={required}
          {...props}
        />

        {hint && !error && (
          <span id={hintId} className={hintStyle}>
            {hint}
          </span>
        )}

        {error && (
          <span id={errorId} className={errorStyle} role="alert">
            {error}
          </span>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

/**
 * FormField wrapper for custom form controls
 */
export interface FormFieldProps {
  children: React.ReactNode
  label?: string
  hint?: string
  error?: string
  required?: boolean
  htmlFor?: string
}

export function FormField({
  children,
  label,
  hint,
  error,
  required,
  htmlFor,
}: FormFieldProps) {
  const id = useId()
  const fieldId = htmlFor || id
  const hintId = `${fieldId}-hint`
  const errorId = `${fieldId}-error`

  return (
    <div className={formField}>
      {label && (
        <label htmlFor={fieldId} className={labelStyle}>
          {label}
          {required && (
            <span className={requiredIndicator} aria-label="required">
              *
            </span>
          )}
        </label>
      )}

      {children}

      {hint && !error && (
        <span id={hintId} className={hintStyle}>
          {hint}
        </span>
      )}

      {error && (
        <span id={errorId} className={errorStyle} role="alert">
          {error}
        </span>
      )}
    </div>
  )
}
