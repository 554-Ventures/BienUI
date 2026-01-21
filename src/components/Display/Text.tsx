export interface TextProps {
  children: React.ReactNode
  as?:
    | 'p'
    | 'span'
    | 'div'
    | 'label'
    | 'strong'
    | 'em'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'
  tone?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'inverse'
    | 'brand'
    | 'success'
    | 'error'
    | 'warning'
    | 'accent'
    | 'purple'
    | 'blue'
  align?: 'left' | 'center' | 'right' | 'justify'
  truncate?: boolean
  maxLines?: number
  gradient?: 'primary' | 'purple' | 'accent' | 'blue' | 'rainbow'
  highlight?: boolean
  highlightColor?: 'primary' | 'accent' | 'purple' | 'blue'
  decoration?: 'underline' | 'line-through' | 'none'
  transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none'
  letterSpacing?: 'tight' | 'normal' | 'wide' | 'wider'
  lineHeight?: 'tight' | 'normal' | 'relaxed' | 'loose'
  italic?: boolean
  className?: string
  style?: React.CSSProperties
}

export function Text({
  children,
  as: Component = 'p',
  size = 'md',
  weight = 'normal',
  tone = 'primary',
  align,
  truncate = false,
  maxLines,
  gradient,
  highlight,
  highlightColor,
  decoration,
  transform,
  letterSpacing,
  lineHeight,
  italic = false,
  className = '',
  style,
}: TextProps) {
  const classes = [
    'bien-text',
    `bien-text--${size}`,
    `bien-text--weight-${weight}`,
    !gradient && `bien-text--${tone}`,
    gradient && `bien-text--gradient-${gradient}`,
    align && `bien-text--${align}`,
    truncate && 'bien-text--truncate',
    maxLines && 'bien-text--clamp',
    decoration && `bien-text--decoration-${decoration}`,
    transform && `bien-text--transform-${transform}`,
    letterSpacing && `bien-text--spacing-${letterSpacing}`,
    lineHeight && `bien-text--line-${lineHeight}`,
    italic && 'bien-text--italic',
    highlight && `bien-text--highlight-${highlightColor}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const inlineStyle = maxLines
    ? {
        ...style,
        WebkitLineClamp: maxLines,
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical' as const,
        overflow: 'hidden',
      }
    : style

  return (
    <Component className={classes} style={inlineStyle}>
      {children}
    </Component>
  )
}
