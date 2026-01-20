import { CSSProperties } from 'react'

export interface MeterProps {
  /** Current value */
  value: number
  /** Minimum value */
  min?: number
  /** Maximum value */
  max?: number
  /** Visual variant */
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'gradient-primary'
    | 'gradient-purple'
  /** Size of the meter */
  size?: 'sm' | 'md' | 'lg'
  /** Label text */
  label?: string
  /** Whether to show value */
  showValue?: boolean
  /** Custom value formatter */
  valueFormatter?: (value: number) => string
  /** Whether meter is optimum (positive) or suboptimum (negative) */
  optimum?: 'low' | 'high'
  /** Threshold values for status colors */
  thresholds?: {
    low?: number
    high?: number
    optimum?: number
  }
  /** Whether to animate value changes */
  animated?: boolean
  /** Additional CSS class */
  className?: string
  /** Additional styles */
  style?: CSSProperties
}

export function Meter({
  value,
  min = 0,
  max = 100,
  variant = 'default',
  size = 'md',
  label,
  showValue = false,
  valueFormatter,
  optimum,
  thresholds,
  animated = true,
  className = '',
  style,
}: MeterProps) {
  // Clamp value between min and max
  const clampedValue = Math.max(min, Math.min(max, value))
  const percentage = ((clampedValue - min) / (max - min)) * 100

  // Determine status based on thresholds
  let statusVariant = variant
  if (thresholds && variant === 'default') {
    if (optimum === 'low') {
      // Lower is better (e.g., error rate)
      if (thresholds.low !== undefined && clampedValue <= thresholds.low) {
        statusVariant = 'success'
      } else if (
        thresholds.high !== undefined &&
        clampedValue >= thresholds.high
      ) {
        statusVariant = 'error'
      } else {
        statusVariant = 'warning'
      }
    } else if (optimum === 'high') {
      // Higher is better (e.g., completion)
      if (thresholds.high !== undefined && clampedValue >= thresholds.high) {
        statusVariant = 'success'
      } else if (
        thresholds.low !== undefined &&
        clampedValue <= thresholds.low
      ) {
        statusVariant = 'error'
      } else {
        statusVariant = 'warning'
      }
    }
  }

  const classes = [
    'bien-meter',
    `bien-meter--${statusVariant}`,
    `bien-meter--${size}`,
    animated && 'bien-meter--animated',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const formatValue = (val: number) => {
    if (valueFormatter) {
      return valueFormatter(val)
    }
    return `${Math.round(val)}`
  }

  return (
    <div className={classes} style={style}>
      {(label || showValue) && (
        <div className="bien-meter__header">
          {label && <span className="bien-meter__label">{label}</span>}
          {showValue && (
            <span className="bien-meter__value">
              {formatValue(clampedValue)}/{max}
            </span>
          )}
        </div>
      )}
      <div className="bien-meter__track">
        <div
          className="bien-meter__fill"
          style={{ width: `${percentage}%` }}
          role="meter"
          aria-valuenow={clampedValue}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-label={label}
        />
      </div>
    </div>
  )
}

export interface CircularMeterProps {
  /** Current value */
  value: number
  /** Minimum value */
  min?: number
  /** Maximum value */
  max?: number
  /** Visual variant */
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'gradient-primary'
    | 'gradient-purple'
  /** Size of the meter */
  size?: number
  /** Stroke width */
  strokeWidth?: number
  /** Label text */
  label?: string
  /** Whether to show value in center */
  showValue?: boolean
  /** Custom value formatter */
  valueFormatter?: (value: number) => string
  /** Whether to animate value changes */
  animated?: boolean
  /** Additional CSS class */
  className?: string
}

export function CircularMeter({
  value,
  min = 0,
  max = 100,
  variant = 'default',
  size = 120,
  strokeWidth = 8,
  label,
  showValue = true,
  valueFormatter,
  animated = true,
  className = '',
}: CircularMeterProps) {
  const clampedValue = Math.max(min, Math.min(max, value))
  const percentage = ((clampedValue - min) / (max - min)) * 100

  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference

  const classes = [
    'bien-circular-meter',
    `bien-circular-meter--${variant}`,
    animated && 'bien-circular-meter--animated',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const formatValue = (val: number) => {
    if (valueFormatter) {
      return valueFormatter(val)
    }
    return `${Math.round((val / max) * 100)}%`
  }

  return (
    <div className={classes} style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        {/* Background circle */}
        <circle
          className="bien-circular-meter__track"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          className="bien-circular-meter__fill"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="bien-circular-meter__content">
        {showValue && (
          <div className="bien-circular-meter__value">
            {formatValue(clampedValue)}
          </div>
        )}
        {label && <div className="bien-circular-meter__label">{label}</div>}
      </div>
    </div>
  )
}
