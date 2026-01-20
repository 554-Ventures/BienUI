import { ReactNode } from 'react'
import { useAccordionContext } from './Accordion'

export interface AccordionItemProps {
  value: string
  title: string
  subtitle?: string
  children: ReactNode
  disabled?: boolean
  className?: string
}

export function AccordionItem({
  value,
  title,
  subtitle,
  children,
  disabled = false,
  className = '',
}: AccordionItemProps) {
  const { expandedItems, toggleItem, variant } = useAccordionContext()
  const isExpanded = expandedItems.includes(value)

  const handleToggle = () => {
    if (!disabled) {
      toggleItem(value)
    }
  }

  const classes = [
    'bien-accordion-item',
    `bien-accordion-item--${variant}`,
    isExpanded && 'bien-accordion-item--expanded',
    disabled && 'bien-accordion-item--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      {variant === 'ai' && <div className="bien-accordion-item__ai-border" />}

      <button
        className="bien-accordion-item__trigger"
        onClick={handleToggle}
        disabled={disabled}
        aria-expanded={isExpanded}
        aria-controls={`accordion-content-${value}`}
        id={`accordion-trigger-${value}`}
      >
        <div className="bien-accordion-item__header">
          <div className="bien-accordion-item__text">
            <div className="bien-accordion-item__title">{title}</div>
            {subtitle && (
              <div className="bien-accordion-item__subtitle">{subtitle}</div>
            )}
          </div>
          <svg
            className={`bien-accordion-item__icon ${
              isExpanded ? 'bien-accordion-item__icon--expanded' : ''
            }`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      <div
        className={`bien-accordion-item__content ${
          isExpanded
            ? 'bien-accordion-item__content--expanded'
            : 'bien-accordion-item__content--collapsed'
        }`}
        id={`accordion-content-${value}`}
        role="region"
        aria-labelledby={`accordion-trigger-${value}`}
      >
        <div className="bien-accordion-item__content-inner">{children}</div>
      </div>
    </div>
  )
}
