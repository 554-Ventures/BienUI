import { useState, useRef, useEffect, useCallback, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import './styles/callout.css'

export interface CalloutAction {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
}

export interface CalloutProps {
  children: ReactNode
  trigger: ReactNode
  title?: string
  description?: string
  actions?: CalloutAction[]
  variant?: 'default' | 'glass-frost' | 'glass-tint'
  position?: 'top' | 'bottom' | 'left' | 'right' | 'auto'
  showArrow?: boolean
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  closeOnClickOutside?: boolean
  className?: string
}

export function Callout({
  children,
  trigger,
  title,
  description,
  actions,
  variant = 'default',
  position = 'auto',
  showArrow = true,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  closeOnClickOutside = true,
  className = '',
}: CalloutProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen)
  const [calculatedPosition, setCalculatedPosition] = useState<
    'top' | 'bottom' | 'left' | 'right'
  >('bottom')
  const [coords, setCoords] = useState({ top: 0, left: 0 })

  const triggerRef = useRef<HTMLDivElement>(null)
  const calloutRef = useRef<HTMLDivElement>(null)

  const isControlled = controlledOpen !== undefined
  const isOpen = isControlled ? controlledOpen : internalOpen

  const handleToggle = () => {
    const newOpen = !isOpen
    if (!isControlled) {
      setInternalOpen(newOpen)
    }
    onOpenChange?.(newOpen)
  }

  const handleClose = useCallback(() => {
    if (!isControlled) {
      setInternalOpen(false)
    }
    onOpenChange?.(false)
  }, [isControlled, onOpenChange])

  // Calculate position
  useEffect(() => {
    if (!isOpen || !triggerRef.current || !calloutRef.current) return

    const updatePosition = () => {
      const triggerRect = triggerRef.current!.getBoundingClientRect()
      const calloutRect = calloutRef.current!.getBoundingClientRect()
      const spacing = 8
      const arrowSize = showArrow ? 8 : 0

      let finalPosition = position === 'auto' ? 'bottom' : position
      let top = 0
      let left = 0

      // Auto positioning logic
      if (position === 'auto') {
        const viewportHeight = window.innerHeight
        const viewportWidth = window.innerWidth
        const spaceBelow = viewportHeight - triggerRect.bottom
        const spaceAbove = triggerRect.top
        const spaceRight = viewportWidth - triggerRect.right
        const spaceLeft = triggerRect.left

        if (spaceBelow >= calloutRect.height + spacing + arrowSize) {
          finalPosition = 'bottom'
        } else if (spaceAbove >= calloutRect.height + spacing + arrowSize) {
          finalPosition = 'top'
        } else if (spaceRight >= calloutRect.width + spacing + arrowSize) {
          finalPosition = 'right'
        } else if (spaceLeft >= calloutRect.width + spacing + arrowSize) {
          finalPosition = 'left'
        } else {
          finalPosition = 'bottom'
        }
      }

      // Calculate coordinates based on position
      switch (finalPosition) {
        case 'top':
          top = triggerRect.top - calloutRect.height - spacing - arrowSize
          left =
            triggerRect.left + triggerRect.width / 2 - calloutRect.width / 2
          break
        case 'bottom':
          top = triggerRect.bottom + spacing + arrowSize
          left =
            triggerRect.left + triggerRect.width / 2 - calloutRect.width / 2
          break
        case 'left':
          top =
            triggerRect.top + triggerRect.height / 2 - calloutRect.height / 2
          left = triggerRect.left - calloutRect.width - spacing - arrowSize
          break
        case 'right':
          top =
            triggerRect.top + triggerRect.height / 2 - calloutRect.height / 2
          left = triggerRect.right + spacing + arrowSize
          break
      }

      // Keep within viewport
      const viewportPadding = 8
      left = Math.max(
        viewportPadding,
        Math.min(left, window.innerWidth - calloutRect.width - viewportPadding)
      )
      top = Math.max(
        viewportPadding,
        Math.min(top, window.innerHeight - calloutRect.height - viewportPadding)
      )

      setCalculatedPosition(finalPosition)
      setCoords({ top, left })
    }

    updatePosition()
    window.addEventListener('resize', updatePosition)
    window.addEventListener('scroll', updatePosition)

    return () => {
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition)
    }
  }, [isOpen, position, showArrow])

  // Click outside handler
  useEffect(() => {
    if (!isOpen || !closeOnClickOutside) return

    const handleClickOutside = (event: MouseEvent) => {
      if (
        calloutRef.current &&
        triggerRef.current &&
        !calloutRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        handleClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, closeOnClickOutside, handleClose])

  const classes = [
    'bien-callout',
    `bien-callout--${variant}`,
    `bien-callout--${calculatedPosition}`,
    showArrow && 'bien-callout--with-arrow',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const calloutContent = isOpen
    ? createPortal(
        <div
          ref={calloutRef}
          className={classes}
          style={{
            position: 'fixed',
            top: `${coords.top}px`,
            left: `${coords.left}px`,
            zIndex: 9999,
          }}
          role="dialog"
          aria-modal="false"
        >
          {showArrow && <div className="bien-callout__arrow" />}

          <div className="bien-callout__content">
            {(title || description) && (
              <div className="bien-callout__header">
                {title && <div className="bien-callout__title">{title}</div>}
                {description && (
                  <div className="bien-callout__description">{description}</div>
                )}
              </div>
            )}

            <div className="bien-callout__body">{children}</div>

            {actions && actions.length > 0 && (
              <div className="bien-callout__actions">
                {actions.map((action, index) => (
                  <button
                    key={index}
                    className={`bien-callout__action bien-callout__action--${action.variant || 'secondary'}`}
                    onClick={() => {
                      action.onClick()
                      handleClose()
                    }}
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>,
        document.body
      )
    : null

  return (
    <>
      <div
        ref={triggerRef}
        onClick={handleToggle}
        style={{ display: 'inline-block' }}
      >
        {trigger}
      </div>
      {calloutContent}
    </>
  )
}
