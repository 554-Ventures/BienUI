/**
 * Props for the Loading component
 */
export interface LoadingProps {
  /** Size of the loading indicator. Defaults to 'md' if not specified */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /** Visual style variant of the loading indicator. Defaults to 'spinner' if not specified */
  variant?: 'spinner' | 'dots' | 'pulse' | 'ring'
  /** Optional message to display alongside the loading indicator */
  message?: string
  /** Additional CSS class names to apply to the loading component */
  className?: string
  /** Inline styles to apply to the loading component */
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
