
export interface GridProps {
  children: React.ReactNode
  columns?: 1 | 2 | 3 | 4 | 6 | 12 | 'auto'
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  rowGap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  columnGap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  responsive?: boolean
  align?: 'start' | 'center' | 'end' | 'stretch'
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around'
  className?: string
  style?: React.CSSProperties
}

export function Grid({
  children,
  columns = 'auto',
  gap,
  rowGap,
  columnGap,
  responsive = true,
  align,
  justify,
  className = '',
  style,
}: GridProps) {
  const classes = [
    'bien-grid',
    columns !== 'auto' && `bien-grid--cols-${columns}`,
    columns === 'auto' && responsive && 'bien-grid--auto-responsive',
    columns === 'auto' && !responsive && 'bien-grid--auto',
    gap && `bien-grid--gap-${gap}`,
    rowGap && `bien-grid--row-gap-${rowGap}`,
    columnGap && `bien-grid--col-gap-${columnGap}`,
    align && `bien-grid--align-${align}`,
    justify && `bien-grid--justify-${justify}`,
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
