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

export interface AccordionProps {
  children: ReactNode
  variant?: 'default' | 'bordered' | 'filled' | 'ai'
  allowMultiple?: boolean
  defaultValue?: string | string[]
  value?: string | string[]
  onValueChange?: (value: string | string[]) => void
  className?: string
  style?: React.CSSProperties
}

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
