import { createContext, useContext, useState, useCallback } from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'

type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info'

interface Toast {
  id: string
  title: string
  description?: string
  variant?: ToastVariant
  duration?: number
}

interface ToastContextValue {
  toast: (toast: Omit<Toast, 'id'>) => void
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = useCallback((newToast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9)
    setToasts((prev) => [...prev, { ...newToast, id }])
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toast }}>
      <ToastPrimitive.Provider swipeDirection="right">
        {children}

        {toasts.map((t) => (
          <ToastPrimitive.Root
            key={t.id}
            className={`bien-toast ${t.variant ? `bien-toast--${t.variant}` : ''}`}
            duration={t.duration || 5000}
            onOpenChange={(open) => {
              if (!open) removeToast(t.id)
            }}
          >
            <ToastPrimitive.Title className="bien-toast-title">
              {t.title}
            </ToastPrimitive.Title>
            {t.description && (
              <ToastPrimitive.Description className="bien-toast-description">
                {t.description}
              </ToastPrimitive.Description>
            )}
            <ToastPrimitive.Close
              className="bien-toast-close"
              aria-label="Close"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path
                  d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </ToastPrimitive.Close>
          </ToastPrimitive.Root>
        ))}

        <ToastPrimitive.Viewport className="bien-toast-viewport" />
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components -- Hook is related to component
export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within ToastProvider')
  }
  return context
}
