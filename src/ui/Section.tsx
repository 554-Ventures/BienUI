import './styles/section.css'

export interface SectionProps {
  children: React.ReactNode
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  background?:
    | 'default'
    | 'subtle'
    | 'muted'
    | 'gradient-primary'
    | 'gradient-purple'
    | 'gradient-accent'
  className?: string
  style?: React.CSSProperties
  id?: string
}

export function Section({
  children,
  padding = 'lg',
  background = 'default',
  className = '',
  style,
  id,
}: SectionProps) {
  const classes = [
    'bien-section',
    `bien-section--padding-${padding}`,
    `bien-section--bg-${background}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={classes} style={style} id={id}>
      {children}
    </section>
  )
}
