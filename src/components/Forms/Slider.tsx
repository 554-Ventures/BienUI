import { forwardRef, useState } from 'react'

export interface SliderProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
> {
  label?: string
  hint?: string
  showValue?: boolean
  variant?: 'default' | 'gradient-teal' | 'gradient-purple' | 'gradient-accent'
}

export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      label,
      hint,
      showValue = true,
      variant = 'default',
      className = '',
      value,
      onChange,
      min = 0,
      max = 100,
      ...props
    },
    ref
  ) => {
    const [currentValue, setCurrentValue] = useState(value || min)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCurrentValue(e.target.value)
      onChange?.(e)
    }

    const classes = [
      'bien-slider-wrapper',
      props.disabled && 'bien-slider-wrapper--disabled',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    const sliderClasses = ['bien-slider', `bien-slider--${variant}`]
      .filter(Boolean)
      .join(' ')

    const percentage =
      ((Number(currentValue) - Number(min)) / (Number(max) - Number(min))) * 100

    return (
      <div className={classes}>
        <div className="bien-slider-header">
          {label && <label className="bien-slider-label">{label}</label>}
          {showValue && (
            <span className="bien-slider-value">{currentValue}</span>
          )}
        </div>
        <div className="bien-slider-container">
          <input
            ref={ref}
            type="range"
            className={sliderClasses}
            value={value}
            onChange={handleChange}
            min={min}
            max={max}
            style={
              {
                '--slider-percentage': `${percentage}%`,
              } as React.CSSProperties
            }
            {...props}
          />
        </div>
        {hint && <span className="bien-slider-hint">{hint}</span>}
      </div>
    )
  }
)

Slider.displayName = 'Slider'
