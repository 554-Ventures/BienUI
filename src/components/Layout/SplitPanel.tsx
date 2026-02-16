import { useRef, useState, useCallback, useEffect, ReactNode } from 'react'

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
  /** Whether the split is resizable */
  resizable?: boolean
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
  resizable = true,
  className = '',
  onResize,
}: SplitPanelProps) {
  const [size, setSize] = useState(initialSize)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

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
      const maxPercent = maxSize ? (maxSize / containerSize) * 100 : 100

      newSize = Math.max(minPercent, Math.min(maxPercent, newSize))

      setSize(newSize)
      onResize?.(newSize)
    },
    [isDragging, direction, minSize, maxSize, onResize]
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Add/remove mouse event listeners
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, handleMouseMove, handleMouseUp])

  const classes = [
    'bien-split-panel',
    `bien-split-panel--${direction}`,
    isDragging && 'bien-split-panel--dragging',
    !resizable && 'bien-split-panel--fixed',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const firstPanelStyle: React.CSSProperties =
    direction === 'horizontal' ? { width: `${size}%` } : { height: `${size}%` }

  const secondPanelStyle: React.CSSProperties =
    direction === 'horizontal'
      ? { width: `${100 - size}%` }
      : { height: `${100 - size}%` }

  return (
    <div ref={containerRef} className={classes}>
      <div className="bien-split-panel__first" style={firstPanelStyle}>
        {children[0]}
      </div>

      {resizable && (
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

      <div className="bien-split-panel__second" style={secondPanelStyle}>
        {children[1]}
      </div>
    </div>
  )
}
