import { useRef, useState, useCallback, useEffect, ReactNode } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '../Icons'
import { Breakpoint, mediaDown } from '../../breakpoints'
import { useMediaQuery } from '../../hooks'

export interface SplitPanelProps {
  /** Child panels to render - should be exactly 2 elements */
  children: [ReactNode, ReactNode]
  /** Split direction */
  direction?: 'horizontal' | 'vertical'
  /** Initial split position as percentage (0-100) */
  initialSize?: number
  /** Minimum size for first panel in pixels */
  minSize?: number
  /** Maximum size for first panel in pixels */
  maxSize?: number
  /** Minimum size for second panel in pixels */
  minSecondSize?: number
  /**
   * At or below this viewport width the split collapses: only the first
   * panel renders, full-size. Present the second panel another way on small
   * screens (e.g. in a Drawer). Pixel min sizes are ignored while collapsed.
   */
  collapseBelow?: Breakpoint | number
  /** Whether the split is resizable */
  resizable?: boolean
  /** Whether the second (right/bottom) panel can be collapsed */
  collapsibleSecondPanel?: boolean
  /** Controlled collapsed state of the second panel */
  secondPanelCollapsed?: boolean
  /** Initial collapsed state when uncontrolled */
  defaultSecondPanelCollapsed?: boolean
  /** Callback when second panel collapsed state changes */
  onSecondPanelCollapsedChange?: (collapsed: boolean) => void
  /** Accessible label for collapse action */
  collapseSecondPanelLabel?: string
  /** Accessible label for expand action */
  expandSecondPanelLabel?: string
  /** Additional CSS classes */
  className?: string
  /** Callback when split size changes */
  onResize?: (size: number) => void
}

export function SplitPanel({
  children,
  direction = 'horizontal',
  initialSize = 50,
  minSize = 100,
  maxSize,
  minSecondSize = 0,
  collapseBelow,
  resizable = true,
  collapsibleSecondPanel = false,
  secondPanelCollapsed,
  defaultSecondPanelCollapsed = false,
  onSecondPanelCollapsedChange,
  collapseSecondPanelLabel = 'Hide right panel',
  expandSecondPanelLabel = 'Show right panel',
  className = '',
  onResize,
}: SplitPanelProps) {
  const [size, setSize] = useState(initialSize)
  const [isDragging, setIsDragging] = useState(false)
  const isViewportCollapsed = useMediaQuery(
    collapseBelow !== undefined ? mediaDown(collapseBelow) : null
  )
  const [
    uncontrolledSecondPanelCollapsed,
    setUncontrolledSecondPanelCollapsed,
  ] = useState(defaultSecondPanelCollapsed)
  const containerRef = useRef<HTMLDivElement>(null)

  const isSecondPanelCollapsedControlled = secondPanelCollapsed !== undefined
  const isSecondPanelCollapsed =
    collapsibleSecondPanel &&
    (isSecondPanelCollapsedControlled
      ? Boolean(secondPanelCollapsed)
      : uncontrolledSecondPanelCollapsed)

  const setSecondPanelCollapsed = useCallback(
    (collapsed: boolean) => {
      if (!collapsibleSecondPanel) {
        return
      }

      if (!isSecondPanelCollapsedControlled) {
        setUncontrolledSecondPanelCollapsed(collapsed)
      }

      onSecondPanelCollapsedChange?.(collapsed)
    },
    [
      collapsibleSecondPanel,
      isSecondPanelCollapsedControlled,
      onSecondPanelCollapsedChange,
    ]
  )

  const handleSecondPanelToggle = useCallback(() => {
    setSecondPanelCollapsed(!isSecondPanelCollapsed)
  }, [isSecondPanelCollapsed, setSecondPanelCollapsed])

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!resizable) return
      e.preventDefault()
      setIsDragging(true)
    },
    [resizable]
  )

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return

      const container = containerRef.current
      const rect = container.getBoundingClientRect()

      let newSize: number
      if (direction === 'horizontal') {
        const x = e.clientX - rect.left
        newSize = (x / rect.width) * 100
      } else {
        const y = e.clientY - rect.top
        newSize = (y / rect.height) * 100
      }

      // Apply constraints
      const containerSize =
        direction === 'horizontal' ? rect.width : rect.height
      const minPercent = (minSize / containerSize) * 100
      const maxPercentFromFirst = maxSize
        ? (maxSize / containerSize) * 100
        : 100
      const maxPercentFromSecond = 100 - (minSecondSize / containerSize) * 100
      const maxPercent = Math.max(
        minPercent,
        Math.min(maxPercentFromFirst, maxPercentFromSecond)
      )

      newSize = Math.max(minPercent, Math.min(maxPercent, newSize))

      setSize(newSize)
      onResize?.(newSize)
    },
    [isDragging, direction, minSize, maxSize, minSecondSize, onResize]
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Add/remove mouse event listeners
  useEffect(() => {
    if (isDragging && !isSecondPanelCollapsed) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, isSecondPanelCollapsed, handleMouseMove, handleMouseUp])

  if (isViewportCollapsed) {
    const collapsedClasses = [
      'bien-split-panel',
      `bien-split-panel--${direction}`,
      'bien-split-panel--viewport-collapsed',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div ref={containerRef} className={collapsedClasses}>
        <div
          className="bien-split-panel__first"
          style={{ width: '100%', height: '100%' }}
        >
          {children[0]}
        </div>
      </div>
    )
  }

  const classes = [
    'bien-split-panel',
    `bien-split-panel--${direction}`,
    isDragging && 'bien-split-panel--dragging',
    !resizable && 'bien-split-panel--fixed',
    collapsibleSecondPanel && 'bien-split-panel--second-collapsible',
    isSecondPanelCollapsed && 'bien-split-panel--second-collapsed',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const firstPanelStyle: React.CSSProperties = isSecondPanelCollapsed
    ? direction === 'horizontal'
      ? { width: '100%' }
      : { height: '100%' }
    : direction === 'horizontal'
      ? { width: `${size}%` }
      : { height: `${size}%` }

  const secondPanelStyle: React.CSSProperties =
    direction === 'horizontal'
      ? { width: `${100 - size}%`, minWidth: `${minSecondSize}px` }
      : { height: `${100 - size}%`, minHeight: `${minSecondSize}px` }

  const toggleStyle: React.CSSProperties =
    direction === 'horizontal'
      ? isSecondPanelCollapsed
        ? {
            top: '50%',
            right: '12px',
            transform: 'translateY(-50%)',
          }
        : {
            top: '50%',
            left: `calc(${size}% - 14px)`,
            transform: 'translate(-50%, -50%)',
          }
      : isSecondPanelCollapsed
        ? {
            left: '50%',
            bottom: '12px',
            transform: 'translateX(-50%)',
          }
        : {
            left: '50%',
            top: `calc(${size}% - 14px)`,
            transform: 'translate(-50%, -50%)',
          }

  return (
    <div ref={containerRef} className={classes}>
      <div className="bien-split-panel__first" style={firstPanelStyle}>
        {children[0]}
      </div>

      {collapsibleSecondPanel && (
        <button
          type="button"
          className="bien-split-panel__toggle"
          style={toggleStyle}
          onClick={handleSecondPanelToggle}
          aria-label={
            isSecondPanelCollapsed
              ? expandSecondPanelLabel
              : collapseSecondPanelLabel
          }
          aria-expanded={!isSecondPanelCollapsed}
          data-direction={direction}
          data-collapsed={isSecondPanelCollapsed}
        >
          {isSecondPanelCollapsed ? (
            <ChevronLeftIcon size={14} />
          ) : (
            <ChevronRightIcon size={14} />
          )}
        </button>
      )}

      {resizable && !isSecondPanelCollapsed && (
        <div
          className="bien-split-panel__divider"
          onMouseDown={handleMouseDown}
          role="separator"
          aria-orientation={direction}
          aria-valuenow={size}
          tabIndex={0}
        >
          <div className="bien-split-panel__handle" />
        </div>
      )}

      {!isSecondPanelCollapsed && (
        <div className="bien-split-panel__second" style={secondPanelStyle}>
          {children[1]}
        </div>
      )}
    </div>
  )
}
