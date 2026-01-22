import { forwardRef } from 'react'

export interface SwitchProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
> {
  label?: string
  hint?: string
  variant?: 'default' | 'brand' | 'accent' | 'purple'
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, hint, variant = 'default', className = '', ...props }, ref) => {
    const classes = [
      'bien-switch-wrapper',
      props.disabled && 'bien-switch-wrapper--disabled',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    const trackClasses = ['bien-switch-track', `bien-switch-track--${variant}`]
      .filter(Boolean)
      .join(' ')

    // Handle controlled vs uncontrolled pattern
    const inputProps = { ...props }

    // If both checked and defaultChecked are provided, prioritize checked (controlled)
    if (
      inputProps.checked !== undefined &&
      inputProps.defaultChecked !== undefined
    ) {
      delete inputProps.defaultChecked
    }

    return (
      <div className={classes}>
        <label className="bien-switch-label">
          <input
            ref={ref}
            type="checkbox"
            className="bien-switch-input"
            {...inputProps}
          />
          <span className={trackClasses}>
            <span className="bien-switch-thumb" />
          </span>
          {label && (
            <span className="bien-switch-content">
              <span className="bien-switch-text">{label}</span>
              {hint && <span className="bien-switch-hint">{hint}</span>}
            </span>
          )}
        </label>
      </div>
    )
  }
)

Switch.displayName = 'Switch'
