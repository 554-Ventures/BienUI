import { useEffect, useRef, forwardRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Button } from './Button'

export interface DrawerProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
  subtitle?: string
  header?: React.ReactNode
  footer?: React.ReactNode
  side?: 'left' | 'right' | 'top' | 'bottom'
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  variant?: 'default' | 'elevated' | 'glass-frost' | 'glass-tint'
  gradient?: 'primary' | 'purple' | 'accent' | 'blue' | 'rainbow'
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  closeOnBackdropClick?: boolean
  closeOnEscape?: boolean
  showCloseButton?: boolean
  showBackdrop?: boolean
  persistent?: boolean
  className?: string
  style?: React.CSSProperties
  backdropClassName?: string
  contentClassName?: string
  headerClassName?: string
  footerClassName?: string
  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
}

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      open,
      onClose,
      children,
      title,
      subtitle,
      header,
      footer,
      side = 'right',
      size = 'md',
      variant = 'default',
      gradient,
      radius = 'lg',
      closeOnBackdropClick = true,
      closeOnEscape = true,
      showCloseButton = true,
      showBackdrop = true,
      persistent = false,
      className = '',
      style,
      backdropClassName = '',
      contentClassName = '',
      headerClassName = '',
      footerClassName = '',
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      'aria-describedby': ariaDescribedby,
      ...props
    },
    ref
  ) => {
    const drawerRef = useRef<HTMLDivElement>(null)
    const backdropRef = useRef<HTMLDivElement>(null)
    const [mounted, setMounted] = useState(false)
    const [animating, setAnimating] = useState(false)

    // Handle mounting and animation states
    useEffect(() => {
      if (open) {
        // Use setTimeout to avoid synchronous setState
        const mountTimer = setTimeout(() => setMounted(true), 0)
        // Small delay to trigger animation after mount
        const animateTimer = setTimeout(() => setAnimating(true), 10)
        return () => {
          clearTimeout(mountTimer)
          clearTimeout(animateTimer)
        }
      } else {
        // Use setTimeout to avoid synchronous setState
        const animateTimer = setTimeout(() => setAnimating(false), 0)
        // Delay unmounting to allow exit animation
        const unmountTimer = setTimeout(() => setMounted(false), 250) // Duration should match CSS transition
        return () => {
          clearTimeout(animateTimer)
          clearTimeout(unmountTimer)
        }
      }
    }, [open])

    // Handle escape key
    useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && open && closeOnEscape && !persistent) {
          onClose()
        }
      }

      if (open) {
        document.addEventListener('keydown', handleEscape)
        // Prevent body scroll when drawer is open
        document.body.style.overflow = 'hidden'
      }

      return () => {
        document.removeEventListener('keydown', handleEscape)
        document.body.style.overflow = ''
      }
    }, [open, closeOnEscape, persistent, onClose])

    // Focus management and trap
    useEffect(() => {
      if (open && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[
          focusableElements.length - 1
        ] as HTMLElement

        const handleTab = (e: KeyboardEvent) => {
          if (e.key !== 'Tab') return

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault()
              lastElement?.focus()
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault()
              firstElement?.focus()
            }
          }
        }

        document.addEventListener('keydown', handleTab)

        // Focus first focusable element, or the drawer itself if none found
        if (firstElement) {
          firstElement.focus()
        } else {
          drawerRef.current.focus()
        }

        return () => {
          document.removeEventListener('keydown', handleTab)
        }
      }
    }, [open])

    // Handle backdrop click
    const handleBackdropClick = (e: React.MouseEvent) => {
      if (
        e.target === backdropRef.current &&
        closeOnBackdropClick &&
        !persistent
      ) {
        onClose()
      }
    }

    if (!mounted) return null

    const hasHeaderContent = header || title || subtitle
    const isOpen = open && animating

    const classes = [
      'bien-drawer',
      `bien-drawer--${side}`,
      `bien-drawer--${size}`,
      `bien-drawer--${variant}`,
      `bien-drawer--radius-${radius}`,
      gradient && `bien-drawer--gradient-${gradient}`,
      className,
    ]
      .filter(Boolean)
      .join(' ')

    const backdropClasses = [
      'bien-drawer-backdrop',
      showBackdrop && 'bien-drawer-backdrop--visible',
      isOpen && 'bien-drawer-backdrop--active',
      backdropClassName,
    ]
      .filter(Boolean)
      .join(' ')

    const contentClasses = ['bien-drawer__content', contentClassName]
      .filter(Boolean)
      .join(' ')

    const headerClasses = ['bien-drawer__header', headerClassName]
      .filter(Boolean)
      .join(' ')

    const footerClasses = ['bien-drawer__footer', footerClassName]
      .filter(Boolean)
      .join(' ')

    const drawerContent = (
      <>
        <div
          ref={backdropRef}
          className={backdropClasses}
          onClick={handleBackdropClick}
          aria-hidden="true"
        />
        <div
          ref={ref || drawerRef}
          className={classes}
          style={style}
          role="dialog"
          aria-modal="true"
          aria-label={ariaLabel}
          aria-labelledby={
            ariaLabelledby || (title ? 'drawer-title' : undefined)
          }
          aria-describedby={
            ariaDescribedby || (subtitle ? 'drawer-subtitle' : undefined)
          }
          tabIndex={-1}
          data-state={isOpen ? 'open' : 'closed'}
          {...props}
        >
          {variant === 'glass-frost' && (
            <div className="bien-drawer__glass" aria-hidden="true" />
          )}
          {variant === 'glass-tint' && (
            <div
              className="bien-drawer__glass bien-drawer__glass--tint"
              aria-hidden="true"
            />
          )}

          {showCloseButton && (
            <Button
              className="bien-drawer__close"
              onClick={onClose}
              variant="ghost"
              size="sm"
              iconOnly
              shape="circle"
              icon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 5L15 15M5 15L15 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              }
              aria-label="Close drawer"
            >
              Close
            </Button>
          )}

          {hasHeaderContent && (
            <div className={headerClasses}>
              {header || (
                <>
                  {title && (
                    <div id="drawer-title" className="bien-drawer__title">
                      {title}
                    </div>
                  )}
                  {subtitle && (
                    <div id="drawer-subtitle" className="bien-drawer__subtitle">
                      {subtitle}
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          <div className={contentClasses}>{children}</div>

          {footer && <div className={footerClasses}>{footer}</div>}
        </div>
      </>
    )

    return createPortal(drawerContent, document.body)
  }
)

Drawer.displayName = 'Drawer'
