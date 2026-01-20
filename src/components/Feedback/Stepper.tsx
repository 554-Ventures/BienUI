import { ReactNode } from 'react'

export interface Step {
  label: string
  description?: string
  icon?: ReactNode
}

export interface StepperProps {
  steps: Step[]
  currentStep: number
  orientation?: 'horizontal' | 'vertical'
  variant?: 'default' | 'numbered' | 'dots'
  size?: 'default' | 'compact'
  clickable?: boolean
  onStepClick?: (step: number) => void
  className?: string
  style?: React.CSSProperties
}

export function Stepper({
  steps,
  currentStep,
  orientation = 'horizontal',
  variant = 'numbered',
  size = 'default',
  clickable = false,
  onStepClick,
  className = '',
  style,
}: StepperProps) {
  const classes = [
    'bien-stepper',
    `bien-stepper--${orientation}`,
    `bien-stepper--${variant}`,
    `bien-stepper--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const handleStepClick = (index: number) => {
    if (clickable && onStepClick && index <= currentStep) {
      onStepClick(index)
    }
  }

  const getStepStatus = (
    index: number
  ): 'completed' | 'active' | 'upcoming' => {
    if (index < currentStep) return 'completed'
    if (index === currentStep) return 'active'
    return 'upcoming'
  }

  return (
    <div className={classes} style={style}>
      {steps.map((step, index) => {
        const status = getStepStatus(index)
        const isClickable = clickable && index <= currentStep

        return (
          <div
            key={index}
            className={`bien-stepper__step bien-stepper__step--${status} ${
              isClickable ? 'bien-stepper__step--clickable' : ''
            }`}
            onClick={() => handleStepClick(index)}
          >
            <div className="bien-stepper__step-indicator">
              {variant === 'numbered' && (
                <span className="bien-stepper__step-number">
                  {status === 'completed' ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M13.3332 4L5.99984 11.3333L2.6665 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </span>
              )}
              {variant === 'default' && step.icon && (
                <span className="bien-stepper__step-icon">{step.icon}</span>
              )}
              {variant === 'dots' && (
                <span className="bien-stepper__step-dot" />
              )}
            </div>

            {index < steps.length - 1 && (
              <div className="bien-stepper__connector">
                <div
                  className="bien-stepper__connector-line"
                  style={{
                    width: status === 'completed' ? '100%' : '0%',
                  }}
                />
              </div>
            )}

            <div className="bien-stepper__step-content">
              <span className="bien-stepper__step-label">{step.label}</span>
              {step.description && (
                <span className="bien-stepper__step-description">
                  {step.description}
                </span>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
