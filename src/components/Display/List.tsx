import { ReactNode, HTMLAttributes } from 'react'

export interface ListProps extends Omit<
  HTMLAttributes<HTMLUListElement | HTMLOListElement>,
  'className'
> {
  /** List type */
  type?: 'unordered' | 'ordered' | 'unstyled'
  /** Visual style for list markers */
  markerStyle?:
    | 'default'
    | 'circle'
    | 'square'
    | 'disc'
    | 'decimal'
    | 'roman'
    | 'alpha'
    | 'none'
  /** Size of the list items */
  size?: 'sm' | 'md' | 'lg'
  /** Spacing between items */
  spacing?: 'none' | 'sm' | 'md' | 'lg'
  /** Whether to show dividers between items */
  dividers?: boolean
  /** Children list items */
  children: ReactNode
  /** Additional CSS class */
  className?: string
}

export function List({
  type = 'unordered',
  markerStyle = 'default',
  size = 'md',
  spacing = 'sm',
  dividers = false,
  children,
  className = '',
  ...props
}: ListProps) {
  const classes = [
    'bien-list',
    `bien-list--${type}`,
    `bien-list--marker-${markerStyle}`,
    `bien-list--size-${size}`,
    `bien-list--spacing-${spacing}`,
    dividers && 'bien-list--dividers',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const Component = type === 'ordered' ? 'ol' : 'ul'

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}

export interface ListItemProps extends Omit<
  HTMLAttributes<HTMLLIElement>,
  'className'
> {
  /** Icon to display before content */
  icon?: ReactNode
  /** Avatar to display before content */
  avatar?: ReactNode
  /** Whether item is interactive/clickable */
  interactive?: boolean
  /** Whether item is active */
  active?: boolean
  /** Whether item is disabled */
  disabled?: boolean
  /** Click handler */
  onClick?: () => void
  /** Children content */
  children: ReactNode
  /** Additional CSS class */
  className?: string
}

export function ListItem({
  icon,
  avatar,
  interactive = false,
  active = false,
  disabled = false,
  onClick,
  children,
  className = '',
  ...props
}: ListItemProps) {
  const classes = [
    'bien-list-item',
    interactive && 'bien-list-item--interactive',
    active && 'bien-list-item--active',
    disabled && 'bien-list-item--disabled',
    (icon || avatar) && 'bien-list-item--with-prefix',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick()
    }
  }

  return (
    <li className={classes} onClick={handleClick} {...props}>
      {avatar && <div className="bien-list-item__avatar">{avatar}</div>}
      {icon && <div className="bien-list-item__icon">{icon}</div>}
      <div className="bien-list-item__content">{children}</div>
    </li>
  )
}

export interface DescriptionListProps extends Omit<
  HTMLAttributes<HTMLDListElement>,
  'className'
> {
  /** Size of the list */
  size?: 'sm' | 'md' | 'lg'
  /** Layout orientation */
  orientation?: 'vertical' | 'horizontal'
  /** Spacing between items */
  spacing?: 'none' | 'sm' | 'md' | 'lg'
  /** Whether to show dividers */
  dividers?: boolean
  /** Children content */
  children: ReactNode
  /** Additional CSS class */
  className?: string
}

export function DescriptionList({
  size = 'md',
  orientation = 'vertical',
  spacing = 'sm',
  dividers = false,
  children,
  className = '',
  ...props
}: DescriptionListProps) {
  const classes = [
    'bien-description-list',
    `bien-description-list--${orientation}`,
    `bien-description-list--size-${size}`,
    `bien-description-list--spacing-${spacing}`,
    dividers && 'bien-description-list--dividers',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <dl className={classes} {...props}>
      {children}
    </dl>
  )
}

export interface DescriptionTermProps extends Omit<
  HTMLAttributes<HTMLElement>,
  'className'
> {
  children: ReactNode
  className?: string
}

export function DescriptionTerm({
  children,
  className = '',
  ...props
}: DescriptionTermProps) {
  return (
    <dt className={`bien-description-term ${className}`} {...props}>
      {children}
    </dt>
  )
}

export interface DescriptionDetailsProps extends Omit<
  HTMLAttributes<HTMLElement>,
  'className'
> {
  children: ReactNode
  className?: string
}

export function DescriptionDetails({
  children,
  className = '',
  ...props
}: DescriptionDetailsProps) {
  return (
    <dd className={`bien-description-details ${className}`} {...props}>
      {children}
    </dd>
  )
}
