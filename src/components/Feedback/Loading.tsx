export interface LoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'spinner' | 'dots' | 'pulse' | 'ring'
  message?: string
  className?: string
  style?: React.CSSProperties
}

export function Loading({
  size = 'md',
  variant = 'spinner',
  message,
  className = '',
  style,
}: LoadingProps) {
  const classes = ['bien-loading', `bien-loading--${size}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} style={style}>
      <div className={`bien-loading__${variant}`} />
      {message && <p className="bien-loading__message">{message}</p>}
    </div>
  )
}
