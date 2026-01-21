import { createContext, useContext, useState, ReactNode } from 'react'
import { AccordionItem } from './AccordionItem'

interface AccordionContextValue {
  expandedItems: string[]
  toggleItem: (value: string) => void
  variant: 'default' | 'bordered' | 'filled' | 'ai'
  allowMultiple: boolean
}

const AccordionContext = createContext<AccordionContextValue | undefined>(
  undefined
)

// eslint-disable-next-line react-refresh/only-export-components -- Hook is related to component
export const useAccordionContext = () => {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error('Accordion components must be used within an Accordion')
  }
  return context
}

/**
 * Props for the Accordion component
 */
export interface AccordionProps {
  /** The accordion items to render */
  children: ReactNode
  /** Visual style variant of the accordion */
  variant?: 'default' | 'bordered' | 'filled' | 'ai'
  /** Allow multiple items to be expanded simultaneously */
  allowMultiple?: boolean
  /** Default expanded item(s) */
  defaultValue?: string | string[]
  /** Controlled expanded item(s) */
  value?: string | string[]
  /** Callback when expanded items change */
  onValueChange?: (value: string | string[]) => void
  /** Additional CSS class name */
  className?: string
  /** Inline styles */
  style?: React.CSSProperties
}

/**
 * Accordion component for creating collapsible content sections.
 * Allows users to expand and collapse information panels. Perfect for FAQs,
 * settings panels, and organizing content in a compact space.
 */
export function AccordionRoot({
  children,
  variant = 'default',
  allowMultiple = false,
  defaultValue,
  value: controlledValue,
  onValueChange,
  className = '',
  style,
}: AccordionProps) {
  // Normalize default value to array
  const normalizeValue = (val: string | string[] | undefined): string[] => {
    if (!val) return []
    return Array.isArray(val) ? val : [val]
  }

  const [internalValue, setInternalValue] = useState<string[]>(
    normalizeValue(defaultValue)
  )

  const isControlled = controlledValue !== undefined
  const expandedItems = isControlled
    ? normalizeValue(controlledValue)
    : internalValue

  const toggleItem = (itemValue: string) => {
    let newValue: string[]

    if (allowMultiple) {
      // Multiple mode: toggle the item
      newValue = expandedItems.includes(itemValue)
        ? expandedItems.filter((v) => v !== itemValue)
        : [...expandedItems, itemValue]
    } else {
      // Single mode: only one item open at a time
      newValue = expandedItems.includes(itemValue) ? [] : [itemValue]
    }

    if (!isControlled) {
      setInternalValue(newValue)
    }

    // Call onChange with proper format
    if (onValueChange) {
      onValueChange(allowMultiple ? newValue : newValue[0] || '')
    }
  }

  const classes = ['bien-accordion', `bien-accordion--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <AccordionContext.Provider
      value={{ expandedItems, toggleItem, variant, allowMultiple }}
    >
      <div className={classes} style={style}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

// Composite component pattern
export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
})
