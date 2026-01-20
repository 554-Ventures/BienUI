import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { forwardRef, ReactNode } from 'react'

export interface RadioOption {
  value: string
  label: string
  disabled?: boolean
}

export interface RadioGroupProps {
  label?: string
  hint?: string
  options?: RadioOption[]
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  disabled?: boolean
  required?: boolean
  name?: string
  orientation?: 'horizontal' | 'vertical'
  children?: ReactNode
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      label,
      hint,
      options,
      value,
      defaultValue,
      onValueChange,
      disabled,
      required,
      name,
      orientation = 'vertical',
      children,
    },
    ref
  ) => {
    return (
      <div className="bien-radio-group-wrapper">
        {label && (
          <div className="bien-radio-group-label">
            {label}
            {required && <span className="bien-radio-required">*</span>}
          </div>
        )}
        {hint && (
          <div className="bien-radio-group-hint">
            {hint}
          </div>
        )}
        <RadioGroupPrimitive.Root
          ref={ref}
          className={`bien-radio-group bien-radio-group--${orientation}`}
          value={value}
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          disabled={disabled}
          required={required}
          name={name}
        >
          {options ? options.map((option) => (
            <div key={option.value} className="bien-radio-item-wrapper">
              <RadioGroupPrimitive.Item
                className="bien-radio-item"
                value={option.value}
                disabled={option.disabled || disabled}
                id={`${name}-${option.value}`}
              >
                <RadioGroupPrimitive.Indicator className="bien-radio-indicator" />
              </RadioGroupPrimitive.Item>
              <label
                htmlFor={`${name}-${option.value}`}
                className="bien-radio-label"
              >
                {option.label}
              </label>
            </div>
          )) : children}
        </RadioGroupPrimitive.Root>
      </div>
    )
  }
)

RadioGroup.displayName = 'RadioGroup'
