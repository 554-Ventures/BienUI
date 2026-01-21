export type Theme = 'light' | 'dark'
export type Density = 'comfortable' | 'compact'

export type ComponentVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'ghost'
  | 'outline'
  | 'destructive'
  | 'gradient-primary'
  | 'gradient-blue'
  | 'gradient-purple'
  | 'gradient-accent'
  | 'gradient-rainbow'

export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface ThemeContextType {
  theme: Theme
  density: Density
  setTheme: (theme: Theme) => void
  setDensity: (density: Density) => void
}
