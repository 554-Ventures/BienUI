export interface StackProps {
  children: React.ReactNode
  direction?: 'vertical' | 'horizontal'
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  justify?:
    | 'start'
    | 'center'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  wrap?: boolean
  className?: string
  style?: React.CSSProperties
}

export function Stack({
  children,
  direction = 'vertical',
  gap = 'md',
  align,
  justify,
  wrap = false,
  className = '',
  style,
}: StackProps) {
  const classes = [
    'bien-stack',
    `bien-stack--${direction}`,
    `bien-stack--gap-${gap}`,
    align && `bien-stack--align-${align}`,
    justify && `bien-stack--justify-${justify}`,
    wrap && 'bien-stack--wrap',
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

// Convenience components
export function VStack(props: Omit<StackProps, 'direction'>) {
  return <Stack {...props} direction="vertical" />
}

export function HStack(props: Omit<StackProps, 'direction'>) {
  return <Stack {...props} direction="horizontal" />
}
