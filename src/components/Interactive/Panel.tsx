import { useState, createContext, useContext } from 'react'

interface PanelContextValue {
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
  side: 'left' | 'right'
  variant:
    | 'elevated'
    | 'outlined'
    | 'filled'
    | 'ghost'
    | 'glass-frost'
    | 'glass-tint'
  sidebarWidth: number
  collapsedWidth: number
}

const PanelContext = createContext<PanelContextValue | null>(null)

const usePanelContext = () => {
  const context = useContext(PanelContext)
  if (!context) {
    throw new Error('Panel components must be used within a PanelGroup')
  }
  return context
}

export interface PanelGroupProps {
  children: React.ReactNode
  side?: 'left' | 'right'
  variant?:
    | 'elevated'
    | 'outlined'
    | 'filled'
    | 'ghost'
    | 'glass-frost'
    | 'glass-tint'
  defaultCollapsed?: boolean
  collapsed?: boolean
  onCollapsedChange?: (collapsed: boolean) => void
  sidebarWidth?: number
  collapsedWidth?: number
  className?: string
  style?: React.CSSProperties
}

export function PanelGroup({
  children,
  side = 'left',
  variant = 'elevated',
  defaultCollapsed = false,
  collapsed: controlledCollapsed,
  onCollapsedChange,
  sidebarWidth = 280,
  collapsedWidth = 60,
  className = '',
  style,
}: PanelGroupProps) {
  const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed)
  const isControlled = controlledCollapsed !== undefined
  const collapsed = isControlled ? controlledCollapsed : internalCollapsed

  const setCollapsed = (value: boolean) => {
    if (!isControlled) {
      setInternalCollapsed(value)
    }
    onCollapsedChange?.(value)
  }

  const classes = ['bien-panel-group', `bien-panel-group--${side}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <PanelContext.Provider
      value={{
        collapsed,
        setCollapsed,
        side,
        variant,
        sidebarWidth,
        collapsedWidth,
      }}
    >
      <div className={classes} style={style}>
        {children}
      </div>
    </PanelContext.Provider>
  )
}

export interface PanelSidebarProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function PanelSidebar({
  children,
  className = '',
  style,
}: PanelSidebarProps) {
  const {
    collapsed,
    setCollapsed,
    side,
    variant,
    sidebarWidth,
    collapsedWidth,
  } = usePanelContext()
  const [mobileOpen, setMobileOpen] = useState(false)

  const classes = [
    'bien-panel-sidebar',
    `bien-panel-sidebar--${variant}`,
    collapsed && 'bien-panel-sidebar--collapsed',
    mobileOpen && 'bien-panel-sidebar--mobile-open',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const sidebarStyles = {
    ...style,
    width: collapsed ? `${collapsedWidth}px` : `${sidebarWidth}px`,
  }

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen)
  }

  const closeMobile = () => {
    setMobileOpen(false)
  }

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="bien-panel-mobile-toggle"
        onClick={toggleMobile}
        aria-label="Toggle sidebar"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Backdrop for mobile */}
      {mobileOpen && (
        <div className="bien-panel-backdrop" onClick={closeMobile} />
      )}

      {/* Sidebar */}
      <aside className={classes} style={sidebarStyles}>
        {variant === 'glass-frost' && (
          <div className="bien-panel-sidebar__glass" />
        )}
        {variant === 'glass-tint' && (
          <div className="bien-panel-sidebar__glass bien-panel-sidebar__glass--tint" />
        )}

        <div className="bien-panel-sidebar__content">{children}</div>

        {/* Desktop toggle button */}
        <button
          className="bien-panel-sidebar__toggle"
          onClick={toggleCollapsed}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <span
            className="bien-panel-sidebar__toggle-icon"
            style={{
              transform:
                side === 'left'
                  ? collapsed
                    ? 'rotate(0deg)'
                    : 'rotate(180deg)'
                  : collapsed
                    ? 'rotate(180deg)'
                    : 'rotate(0deg)',
            }}
          />
        </button>
      </aside>
    </>
  )
}

export interface PanelContentProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function PanelContent({
  children,
  className = '',
  style,
}: PanelContentProps) {
  const classes = ['bien-panel-content', className].filter(Boolean).join(' ')

  return (
    <main className={classes} style={style}>
      {children}
    </main>
  )
}

// Compound component pattern
export const Panel = Object.assign(PanelGroup, {
  Sidebar: PanelSidebar,
  Content: PanelContent,
})
