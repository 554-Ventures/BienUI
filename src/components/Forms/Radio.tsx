import { forwardRef } from 'react'

export interface RadioProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
> {
  label?: string
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className = '', ...props }, ref) => {
    const classes = ['bien-radio-wrapper', className].filter(Boolean).join(' ')

    return (
      <div className={classes}>
        <label className="bien-radio-label">
          <input ref={ref} type="radio" className="bien-radio" {...props} />
          <span className="bien-radio-box">
            <span className="bien-radio-dot" />
          </span>
          {label && <span className="bien-radio-text">{label}</span>}
        </label>
      </div>
    )
  }
)

Radio.displayName = 'Radio'

export interface RadioGroupProps {
  label?: string
  error?: string
  hint?: string
  children: React.ReactNode
  className?: string
}

export function RadioGroup({
  label,
  error,
  hint,
  children,
  className = '',
}: RadioGroupProps) {
  const classes = [
    'bien-radio-group',
    error && 'bien-radio-group--error',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      {label && <div className="bien-radio-group-label">{label}</div>}
      <div className="bien-radio-group-items">{children}</div>
      {hint && !error && <span className="bien-radio-group-hint">{hint}</span>}
      {error && <span className="bien-radio-group-error">{error}</span>}
    </div>
  )
}
