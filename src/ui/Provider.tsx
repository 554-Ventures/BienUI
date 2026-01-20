import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
type Density = 'comfortable' | 'compact'

interface BienContextValue {
  theme: Theme
  density: Density
}

const BienContext = createContext<BienContextValue | undefined>(undefined)

export interface BienProviderProps {
  children: React.ReactNode
  theme?: Theme
  density?: Density
}

export function BienProvider({
  children,
  theme = 'light',
  density = 'comfortable',
}: BienProviderProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Use timeout to avoid direct setState in effect
    const timer = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', theme)
      document.documentElement.setAttribute('data-density', density)
    }
  }, [theme, density, mounted])

  return (
    <BienContext.Provider value={{ theme, density }}>
      <div style={{ minHeight: '100vh' }}>{children}</div>
    </BienContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components -- Hook is related to component
export function useBien() {
  const context = useContext(BienContext)
  if (!context) {
    throw new Error('useBien must be used within BienProvider')
  }
  return context
}
