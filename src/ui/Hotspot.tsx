import { ReactNode, CSSProperties } from 'react'
import './styles/hotspot.css'

export interface HotspotProps {
  /** Position of the hotspot relative to its container */
  position?:
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'center'
    | 'custom'
  /** Custom position styles when position is 'custom' */
  customPosition?: {
    top?: string
    right?: string
    bottom?: string
    left?: string
  }
  /** Visual variant */
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'purple'
    | 'gold'
  /** Size of the hotspot */
  size?: 'sm' | 'md' | 'lg'
  /** Optional label/tooltip text */
  label?: string
  /** Optional number badge (for step indicators) */
  badge?: number | string
  /** Tooltip position relative to hotspot */
  tooltipPosition?: 'top' | 'right' | 'bottom' | 'left'
  /** Click handler */
  onClick?: () => void
  /** Animation style */
  animation?: 'pulse' | 'ping' | 'ripple' | 'none'
  /** Children to render inside (for custom content) */
  children?: ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional styles */
  style?: CSSProperties
}

export function Hotspot({
  position = 'center',
  customPosition,
  variant = 'primary',
  size = 'md',
  label,
  badge,
  tooltipPosition = 'top',
  onClick,
  animation = 'pulse',
  children,
  className = '',
  style,
}: HotspotProps) {
  const classes = [
    'bien-hotspot',
    `bien-hotspot--${variant}`,
    `bien-hotspot--${size}`,
    `bien-hotspot--${position}`,
    animation !== 'none' && `bien-hotspot--${animation}`,
    onClick && 'bien-hotspot--clickable',
    label && 'bien-hotspot--with-label',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const positionStyles: CSSProperties =
    position === 'custom' && customPosition ? customPosition : {}

  const combinedStyles: CSSProperties = {
    ...positionStyles,
    ...style,
  }

  return (
    <div className={classes} style={combinedStyles} onClick={onClick}>
      {/* Animated rings */}
      {animation !== 'none' && (
        <>
          <div className="bien-hotspot__ring bien-hotspot__ring--1" />
          <div className="bien-hotspot__ring bien-hotspot__ring--2" />
          {animation === 'ripple' && (
            <div className="bien-hotspot__ring bien-hotspot__ring--3" />
          )}
        </>
      )}

      {/* Main dot */}
      <div className="bien-hotspot__dot">
        {badge !== undefined ? (
          <span className="bien-hotspot__badge">{badge}</span>
        ) : children ? (
          <div className="bien-hotspot__content">{children}</div>
        ) : null}
      </div>

      {/* Label/Tooltip */}
      {label && (
        <div
          className={`bien-hotspot__label bien-hotspot__label--${tooltipPosition}`}
        >
          {label}
        </div>
      )}
    </div>
  )
}
