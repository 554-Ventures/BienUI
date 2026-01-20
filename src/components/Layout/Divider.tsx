
export interface DividerProps {
  orientation?: 'horizontal' | 'vertical'
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'solid' | 'dashed' | 'dotted'
  thickness?: 'thin' | 'medium' | 'thick'
  gradient?: boolean
  label?: string
  className?: string
  style?: React.CSSProperties
}

export function Divider({
  orientation = 'horizontal',
  spacing = 'md',
  variant = 'solid',
  thickness = 'thin',
  gradient = false,
  label,
  className = '',
  style,
}: DividerProps) {
  const classes = [
    'bien-divider',
    `bien-divider--${orientation}`,
    `bien-divider--spacing-${spacing}`,
    `bien-divider--${variant}`,
    `bien-divider--${thickness}`,
    gradient && 'bien-divider--gradient',
    label && 'bien-divider--with-label',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (label && orientation === 'horizontal') {
    return (
      <div className={classes} style={style}>
        <span className="bien-divider__line" />
        <span className="bien-divider__label">{label}</span>
        <span className="bien-divider__line" />
      </div>
    )
  }

  return <hr className={classes} style={style} />
}
