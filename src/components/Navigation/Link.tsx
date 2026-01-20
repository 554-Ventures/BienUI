import { ReactNode, AnchorHTMLAttributes } from 'react'

export interface LinkProps extends Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'className'
> {
  /** The URL to link to */
  href: string
  /** Variant style */
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'muted'
  /** Size of the link */
  size?: 'xs' | 'sm' | 'md' | 'lg'
  /** Underline behavior */
  underline?: 'always' | 'hover' | 'none'
  /** Whether link is disabled */
  disabled?: boolean
  /** Icon to display before text */
  iconStart?: ReactNode
  /** Icon to display after text */
  iconEnd?: ReactNode
  /** Whether link is external (opens in new tab) */
  external?: boolean
  /** Font weight */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  /** Children content */
  children: ReactNode
  /** Additional CSS class */
  className?: string
}

export function Link({
  href,
  variant = 'default',
  size = 'md',
  underline = 'hover',
  disabled = false,
  iconStart,
  iconEnd,
  external = false,
  weight = 'medium',
  children,
  className = '',
  ...props
}: LinkProps) {
  const classes = [
    'bien-link',
    `bien-link--${variant}`,
    `bien-link--${size}`,
    `bien-link--underline-${underline}`,
    `bien-link--weight-${weight}`,
    disabled && 'bien-link--disabled',
    external && 'bien-link--external',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault()
      return
    }
    if (props.onClick) {
      props.onClick(e)
    }
  }

  const linkProps = {
    ...props,
    href: disabled ? undefined : href,
    className: classes,
    onClick: handleClick,
    ...(external && !disabled
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {}),
  }

  return (
    <a {...linkProps}>
      {iconStart && (
        <span className="bien-link__icon bien-link__icon--start">
          {iconStart}
        </span>
      )}
      <span className="bien-link__text">{children}</span>
      {iconEnd && (
        <span className="bien-link__icon bien-link__icon--end">{iconEnd}</span>
      )}
      {external && !iconEnd && (
        <span className="bien-link__icon bien-link__icon--external">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </span>
      )}
    </a>
  )
}
