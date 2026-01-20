import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export interface ModalProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
  subtitle?: string
  header?: React.ReactNode
  footer?: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen'
  variant?: 'default' | 'centered'
  headerVariant?: 'default' | 'glass-frost' | 'glass-tint'
  gradient?: 'primary' | 'purple' | 'accent' | 'blue' | 'rainbow'
  closeOnOverlayClick?: boolean
  showCloseButton?: boolean
  className?: string
}

export function Modal({
  open,
  onClose,
  children,
  title,
  subtitle,
  header,
  footer,
  size = 'md',
  variant = 'default',
  headerVariant = 'default',
  gradient,
  closeOnOverlayClick = true,
  showCloseButton = true,
  className = '',
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onClose()
      }
    }

    if (open) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  // Focus trap
  useEffect(() => {
    if (open && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
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
      firstElement?.focus()

      return () => {
        document.removeEventListener('keydown', handleTab)
      }
    }
  }, [open])

  if (!open) return null

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && closeOnOverlayClick) {
      onClose()
    }
  }

  const classes = [
    'bien-modal',
    `bien-modal--${size}`,
    `bien-modal--${variant}`,
    gradient && `bien-modal--gradient-${gradient}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const hasHeaderContent = header || title || subtitle

  const modalContent = (
    <div
      className={`bien-modal-overlay ${size === 'fullscreen' ? 'bien-modal-overlay--fullscreen' : ''}`}
      onClick={handleOverlayClick}
    >
      <div className={classes} ref={modalRef} role="dialog" aria-modal="true">
        {showCloseButton && (
          <button
            className="bien-modal__close"
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M5 5L15 15M5 15L15 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}

        {hasHeaderContent && (
          <div
            className={`bien-modal__header bien-modal__header--${headerVariant}`}
          >
            {header || (
              <>
                {title && <div className="bien-modal__title">{title}</div>}
                {subtitle && (
                  <div className="bien-modal__subtitle">{subtitle}</div>
                )}
              </>
            )}
          </div>
        )}

        <div className="bien-modal__content">{children}</div>

        {footer && <div className="bien-modal__footer">{footer}</div>}
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}
