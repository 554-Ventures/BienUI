import React, { createContext, useContext, useMemo } from 'react'
import {
  lightTheme,
  darkTheme,
  comfortableDensity,
  compactDensity,
} from '@bien/tokens'
import '@bien/tokens/styles.css'

type Theme = 'light' | 'dark'
type Density = 'comfortable' | 'compact'
type Accent = string // Future-friendly for custom accent colors

interface BienContextValue {
  theme: Theme
  density: Density
  accent?: Accent
}

const BienContext = createContext<BienContextValue | undefined>(undefined)

export interface BienProviderProps {
  children: React.ReactNode
  theme?: Theme
  density?: Density
  accent?: Accent
}

/**
 * BienProvider - Root provider for Bien UI
 * Manages theme (light/dark) and density (comfortable/compact)
 */
export function BienProvider({
  children,
  theme = 'light',
  density = 'comfortable',
  accent,
}: BienProviderProps) {
  const themeClass = theme === 'light' ? lightTheme : darkTheme
  const densityClass =
    density === 'comfortable' ? comfortableDensity : compactDensity

  const contextValue = useMemo(
    () => ({ theme, density, accent }),
    [theme, density, accent]
  )

  return (
    <BienContext.Provider value={contextValue}>
      <div className={`${themeClass} ${densityClass}`}>{children}</div>
    </BienContext.Provider>
  )
}

/**
 * Hook to access Bien UI context
 */
// eslint-disable-next-line react-refresh/only-export-components -- Hook is related to component
export function useBien() {
  const context = useContext(BienContext)
  if (!context) {
    throw new Error('useBien must be used within BienProvider')
  }
  return context
}
