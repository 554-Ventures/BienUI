import { forwardRef, useState } from 'react'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  hint?: string
  showCount?: boolean
  resize?: 'none' | 'vertical' | 'horizontal' | 'both'
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      hint,
      showCount,
      resize = 'vertical',
      className = '',
      maxLength,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const [charCount, setCharCount] = useState(value ? String(value).length : 0)

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length)
      onChange?.(e)
    }

    const classes = [
      'bien-textarea-wrapper',
      error && 'bien-textarea-wrapper--error',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    const textareaClasses = ['bien-textarea', `bien-textarea--resize-${resize}`]
      .filter(Boolean)
      .join(' ')

    return (
      <div className={classes}>
        {label && (
          <label className="bien-textarea-label">
            {label}
            {props.required && (
              <span className="bien-textarea-required">*</span>
            )}
          </label>
        )}
        <textarea
          ref={ref}
          className={textareaClasses}
          value={value}
          onChange={handleChange}
          maxLength={maxLength}
          aria-invalid={error ? 'true' : 'false'}
          {...props}
        />
        <div className="bien-textarea-footer">
          <div className="bien-textarea-messages">
            {hint && !error && (
              <span className="bien-textarea-hint">{hint}</span>
            )}
            {error && <span className="bien-textarea-error">{error}</span>}
          </div>
          {showCount && (
            <span className="bien-textarea-count">
              {charCount}
              {maxLength && ` / ${maxLength}`}
            </span>
          )}
        </div>
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
