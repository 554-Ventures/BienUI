import { useState, useRef, useEffect } from 'react'
import './styles/sidenav.css'

export interface SidenavItem {
  id: string
  label: string
  icon: React.ReactNode
  href?: string
  onClick?: () => void
  active?: boolean
  divider?: boolean
  category?: string
}

export interface SidenavProps {
  items: SidenavItem[]
  variant?: 'solid' | 'glass-frost' | 'glass-tint'
  density?: 'comfortable' | 'compact'
  onItemClick?: (item: SidenavItem) => void
  className?: string
}

export function Sidenav({
  items,
  variant = 'solid',
  density = 'comfortable',
  onItemClick,
  className = '',
}: SidenavProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const collapseTimeoutRef = useRef<number>()

  const handleMouseEnter = () => {
    if (collapseTimeoutRef.current) {
      clearTimeout(collapseTimeoutRef.current)
    }
    setIsExpanded(true)
  }

  const handleMouseLeave = () => {
    collapseTimeoutRef.current = window.setTimeout(() => {
      setIsExpanded(false)
    }, 500)
  }

  useEffect(() => {
    return () => {
      if (collapseTimeoutRef.current) {
        clearTimeout(collapseTimeoutRef.current)
      }
    }
  }, [])

  const handleItemClick = (item: SidenavItem) => {
    if (item.onClick) {
      item.onClick()
    }
    if (onItemClick) {
      onItemClick(item)
    }
  }

  const classes = [
    'bien-sidenav',
    `bien-sidenav--${variant}`,
    `bien-sidenav--${density}`,
    isExpanded && 'bien-sidenav--expanded',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  // Group items by category
  let currentCategory = ''
  const processedItems: Array<SidenavItem & { showCategoryLabel?: boolean }> =
    []

  items.forEach((item, _index) => {
    if (item.divider) {
      if (item.category && item.category !== currentCategory) {
        currentCategory = item.category
        processedItems.push({ ...item, showCategoryLabel: true })
      } else {
        processedItems.push(item)
      }
    } else {
      processedItems.push(item)
    }
  })

  return (
    <nav
      className={classes}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Side navigation"
    >
      <div className="bien-sidenav__items">
        {processedItems.map((item, index) => {
          if (item.divider) {
            return (
              <div key={`divider-${index}`} className="bien-sidenav__divider">
                {item.showCategoryLabel && isExpanded && item.category && (
                  <span className="bien-sidenav__category">
                    {item.category}
                  </span>
                )}
              </div>
            )
          }

          const itemClasses = [
            'bien-sidenav__item',
            item.active && 'bien-sidenav__item--active',
          ]
            .filter(Boolean)
            .join(' ')

          const content = (
            <>
              <span className="bien-sidenav__icon">{item.icon}</span>
              <span className="bien-sidenav__label">{item.label}</span>
            </>
          )

          if (item.href) {
            return (
              <a
                key={item.id}
                href={item.href}
                className={itemClasses}
                onClick={() => handleItemClick(item)}
                aria-current={item.active ? 'page' : undefined}
              >
                {content}
              </a>
            )
          }

          return (
            <button
              key={item.id}
              className={itemClasses}
              onClick={() => handleItemClick(item)}
              aria-current={item.active ? 'page' : undefined}
              type="button"
            >
              {content}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
