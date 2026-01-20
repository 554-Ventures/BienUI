import { useState, useRef, useEffect, ReactNode, MouseEvent } from 'react'

export interface MenuProps {
  /** The trigger element (button, link, etc.) */
  trigger: ReactNode
  /** Placement of the menu relative to trigger */
  placement?:
    | 'bottom-start'
    | 'bottom-end'
    | 'top-start'
    | 'top-end'
    | 'left'
    | 'right'
  /** Visual variant */
  variant?: 'default' | 'glass-frost' | 'glass-tint'
  /** Width of the menu */
  width?: string | number
  /** Whether menu is open (controlled) */
  open?: boolean
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void
  /** Menu content */
  children: ReactNode
  /** Additional CSS class */
  className?: string
}

export function Menu({
  trigger,
  placement = 'bottom-start',
  variant = 'default',
  width = '220px',
  open: controlledOpen,
  onOpenChange,
  children,
  className = '',
}: MenuProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const isControlled = controlledOpen !== undefined
  const isOpen = isControlled ? controlledOpen : internalOpen

  const menuRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  const setOpen = (newOpen: boolean) => {
    if (!isControlled) {
      setInternalOpen(newOpen)
    }
    onOpenChange?.(newOpen)
  }

  const handleTriggerClick = () => {
    setOpen(!isOpen)
  }

  // Calculate position when menu opens
  useEffect(() => {
    if (!isOpen || !triggerRef.current) return

    const updatePosition = () => {
      const rect = triggerRef.current!.getBoundingClientRect()
      let top = 0
      let left = 0

      switch (placement) {
        case 'bottom-start':
          top = rect.bottom + 4
          left = rect.left
          break
        case 'bottom-end':
          top = rect.bottom + 4
          left = rect.right - (typeof width === 'number' ? width : 220)
          break
        case 'top-start':
          top = rect.top - 4
          left = rect.left
          break
        case 'top-end':
          top = rect.top - 4
          left = rect.right - (typeof width === 'number' ? width : 220)
          break
        case 'left':
          top = rect.top
          left = rect.left - 4
          break
        case 'right':
          top = rect.top
          left = rect.right + 4
          break
      }

      setPosition({ top, left })
    }

    updatePosition()
    window.addEventListener('scroll', updatePosition, true)
    window.addEventListener('resize', updatePosition)

    return () => {
      window.removeEventListener('scroll', updatePosition, true)
      window.removeEventListener('resize', updatePosition)
    }
  }, [isOpen, placement, width])

  // Close on click outside
  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (
        menuRef.current &&
        triggerRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- setOpen is stable from useState
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- setOpen is stable from useState
  }, [isOpen])

  const classes = [
    'bien-menu',
    `bien-menu--${placement}`,
    `bien-menu--${variant}`,
    isOpen && 'bien-menu--open',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const menuStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
    top: `${position.top}px`,
    left: `${position.left}px`,
  }

  return (
    <div className="bien-menu-container">
      <div
        ref={triggerRef}
        onClick={handleTriggerClick}
        className="bien-menu-trigger"
      >
        {trigger}
      </div>
      {isOpen && (
        <div ref={menuRef} className={classes} style={menuStyle}>
          <div className="bien-menu__content" onClick={() => setOpen(false)}>
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

export interface MenuItemProps {
  /** Icon to display before label */
  icon?: ReactNode
  /** Item label */
  children: ReactNode
  /** Whether item is disabled */
  disabled?: boolean
  /** Whether item is destructive/dangerous */
  destructive?: boolean
  /** Click handler */
  onClick?: () => void
  /** Additional CSS class */
  className?: string
}

export function MenuItem({
  icon,
  children,
  disabled = false,
  destructive = false,
  onClick,
  className = '',
}: MenuItemProps) {
  const classes = [
    'bien-menu-item',
    disabled && 'bien-menu-item--disabled',
    destructive && 'bien-menu-item--destructive',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const handleClick = (e: MouseEvent) => {
    if (disabled) {
      e.stopPropagation()
      return
    }
    onClick?.()
  }

  return (
    <div className={classes} onClick={handleClick}>
      {icon && <span className="bien-menu-item__icon">{icon}</span>}
      <span className="bien-menu-item__label">{children}</span>
    </div>
  )
}

export interface MenuDividerProps {
  className?: string
}

export function MenuDivider({ className = '' }: MenuDividerProps) {
  return <div className={`bien-menu-divider ${className}`} />
}

export interface MenuGroupProps {
  /** Group label */
  label?: string
  /** Group items */
  children: ReactNode
  /** Additional CSS class */
  className?: string
}

export function MenuGroup({ label, children, className = '' }: MenuGroupProps) {
  return (
    <div className={`bien-menu-group ${className}`}>
      {label && <div className="bien-menu-group__label">{label}</div>}
      {children}
    </div>
  )
}
