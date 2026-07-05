import React from 'react'
import { Breakpoint, mediaUp } from '../../breakpoints'
import { useMediaQuery } from '../../hooks'

export interface BottomNavItem {
  id: string
  label: string
  icon?: React.ReactNode
  /** Render the item as a link instead of a button */
  href?: string
  /** Small counter/status badge shown on the icon */
  badge?: number | string
  disabled?: boolean
}

export interface BottomNavProps {
  items: BottomNavItem[]
  /** id of the currently active item */
  activeId?: string
  onNavigate?: (item: BottomNavItem, index: number) => void
  /**
   * Unmount the nav when the viewport is strictly wider than this
   * breakpoint. Typical mobile-only usage: `hideAbove="md"`.
   */
  hideAbove?: Breakpoint | number
  /** Show item labels under the icons */
  showLabels?: boolean
  /** Accessible label for the nav landmark */
  ariaLabel?: string
  className?: string
}

export function BottomNav({
  items,
  activeId,
  onNavigate,
  hideAbove,
  showLabels = true,
  ariaLabel = 'Primary',
  className = '',
}: BottomNavProps) {
  const isHidden = useMediaQuery(
    hideAbove !== undefined ? mediaUp(hideAbove) : null
  )

  if (isHidden) return null

  const classes = [
    'bien-bottom-nav',
    !showLabels && 'bien-bottom-nav--icons-only',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const handleClick = (
    e: React.MouseEvent,
    item: BottomNavItem,
    index: number
  ) => {
    if (item.disabled) {
      e.preventDefault()
      return
    }
    if (onNavigate) {
      if (item.href) e.preventDefault()
      onNavigate(item, index)
    }
  }

  return (
    <nav aria-label={ariaLabel} className={classes}>
      <ul className="bien-bottom-nav__list">
        {items.map((item, index) => {
          const isActive = item.id === activeId

          const itemClasses = [
            'bien-bottom-nav__button',
            isActive && 'bien-bottom-nav__button--active',
          ]
            .filter(Boolean)
            .join(' ')

          const content = (
            <>
              {item.icon && (
                <span className="bien-bottom-nav__icon" aria-hidden="true">
                  {item.icon}
                  {item.badge !== undefined && (
                    <span className="bien-bottom-nav__badge">{item.badge}</span>
                  )}
                </span>
              )}
              {showLabels ? (
                <span className="bien-bottom-nav__label">{item.label}</span>
              ) : (
                <span className="bien-visually-hidden">{item.label}</span>
              )}
            </>
          )

          return (
            <li key={item.id} className="bien-bottom-nav__item">
              {item.href ? (
                <a
                  href={item.href}
                  className={itemClasses}
                  aria-current={isActive ? 'page' : undefined}
                  aria-disabled={item.disabled || undefined}
                  onClick={(e) => handleClick(e, item, index)}
                >
                  {content}
                </a>
              ) : (
                <button
                  type="button"
                  className={itemClasses}
                  aria-current={isActive ? 'page' : undefined}
                  disabled={item.disabled}
                  onClick={(e) => handleClick(e, item, index)}
                >
                  {content}
                </button>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
