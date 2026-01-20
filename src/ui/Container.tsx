import './styles/container.css'

export interface ContainerProps {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  centered?: boolean
  className?: string
  style?: React.CSSProperties
}

export function Container({
  children,
  size = 'lg',
  padding = 'md',
  centered = true,
  className = '',
  style,
}: ContainerProps) {
  const classes = [
    'bien-container',
    `bien-container--${size}`,
    `bien-container--padding-${padding}`,
    centered && 'bien-container--centered',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  )
}
