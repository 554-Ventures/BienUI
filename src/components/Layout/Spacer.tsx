export interface SpacerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  axis?: 'vertical' | 'horizontal' | 'both'
  className?: string
}

export function Spacer({
  size = 'md',
  axis = 'vertical',
  className = '',
}: SpacerProps) {
  const classes = [
    'bien-spacer',
    `bien-spacer--${size}`,
    `bien-spacer--${axis}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <div className={classes} aria-hidden="true" />
}
