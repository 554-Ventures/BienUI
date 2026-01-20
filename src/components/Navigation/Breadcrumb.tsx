import React from 'react'

export interface BreadcrumbItem {
  label: string
  href?: string
  icon?: React.ReactNode
  current?: boolean
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
  separator?: 'slash' | 'chevron' | 'dot'
  size?: 'sm' | 'md' | 'lg'
  maxItems?: number
  onNavigate?: (item: BreadcrumbItem, index: number) => void
  className?: string
}

const ChevronRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M6 12l4-4-4-4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const SlashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <line
      x1="6"
      y1="12"
      x2="10"
      y2="4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

const DotIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="2" fill="currentColor" />
  </svg>
)

const EllipsisIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="3" cy="8" r="1.5" fill="currentColor" />
    <circle cx="8" cy="8" r="1.5" fill="currentColor" />
    <circle cx="13" cy="8" r="1.5" fill="currentColor" />
  </svg>
)

export function Breadcrumb({
  items,
  separator = 'chevron',
  size = 'md',
  maxItems,
  onNavigate,
  className = '',
}: BreadcrumbProps) {
  const SeparatorIcon =
    separator === 'slash'
      ? SlashIcon
      : separator === 'dot'
        ? DotIcon
        : ChevronRightIcon

  // Handle truncation
  let displayItems = items
  let hasEllipsis = false

  if (maxItems && items.length > maxItems) {
    hasEllipsis = true
    const firstItem = items[0]
    const lastItems = items.slice(-(maxItems - 1))
    displayItems = [firstItem, ...lastItems]
  }

  const classes = ['bien-breadcrumb', `bien-breadcrumb--${size}`, className]
    .filter(Boolean)
    .join(' ')

  const handleClick = (
    e: React.MouseEvent,
    item: BreadcrumbItem,
    index: number
  ) => {
    if (item.current) {
      e.preventDefault()
      return
    }
    if (onNavigate) {
      e.preventDefault()
      onNavigate(item, index)
    }
  }

  return (
    <nav aria-label="Breadcrumb" className={classes}>
      <ol className="bien-breadcrumb__list">
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1
          const isCurrent = item.current || isLast
          const actualIndex =
            hasEllipsis && index > 0
              ? items.length - (displayItems.length - index)
              : index

          const elements = []

          // Ellipsis after first item if truncated
          if (hasEllipsis && index === 1) {
            elements.push(
              <li
                key={`sep-ellipsis-${actualIndex}`}
                className="bien-breadcrumb__separator"
                aria-hidden="true"
              >
                <SeparatorIcon />
              </li>
            )
            elements.push(
              <li
                key={`ellipsis-${actualIndex}`}
                className="bien-breadcrumb__item"
              >
                <span className="bien-breadcrumb__ellipsis">
                  <EllipsisIcon />
                </span>
              </li>
            )
          }

          // Separator
          if (index > 0 && (!hasEllipsis || index > 1)) {
            elements.push(
              <li
                key={`sep-${actualIndex}`}
                className="bien-breadcrumb__separator"
                aria-hidden="true"
              >
                <SeparatorIcon />
              </li>
            )
          }

          // Breadcrumb Item
          elements.push(
            <li key={`item-${actualIndex}`} className="bien-breadcrumb__item">
              {item.href && !isCurrent ? (
                <a
                  href={item.href}
                  className="bien-breadcrumb__link"
                  onClick={(e) => handleClick(e, item, actualIndex)}
                  aria-current={isCurrent ? 'page' : undefined}
                >
                  {item.icon && (
                    <span className="bien-breadcrumb__icon">{item.icon}</span>
                  )}
                  <span className="bien-breadcrumb__label">{item.label}</span>
                </a>
              ) : (
                <span
                  className={`bien-breadcrumb__text ${isCurrent ? 'bien-breadcrumb__text--current' : ''}`}
                  aria-current={isCurrent ? 'page' : undefined}
                >
                  {item.icon && (
                    <span className="bien-breadcrumb__icon">{item.icon}</span>
                  )}
                  <span className="bien-breadcrumb__label">{item.label}</span>
                </span>
              )}
            </li>
          )

          return elements
        })}
      </ol>
    </nav>
  )
}
