import { useState } from 'react'
import './styles/avatar.css'

export interface AvatarProps {
  src?: string
  alt?: string
  name?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  shape?: 'circle' | 'square'
  status?: 'online' | 'offline' | 'away' | 'busy'
  showStatus?: boolean
  icon?: React.ReactNode
  className?: string
}

export interface AvatarGroupProps {
  children: React.ReactNode
  max?: number
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  className?: string
}

function getInitials(name: string): string {
  const parts = name.trim().split(' ')
  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase()
  }
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase()
}

function getColorFromName(name: string): string {
  const colors = [
    'var(--color-blue)',
    'var(--color-teal)',
    'var(--color-purple)',
    'var(--color-accent)',
  ]

  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }

  return colors[Math.abs(hash) % colors.length]
}

export function Avatar({
  src,
  alt,
  name,
  size = 'md',
  shape = 'circle',
  status,
  showStatus = false,
  icon,
  className = '',
}: AvatarProps) {
  const [imageError, setImageError] = useState(false)

  const classes = [
    'bien-avatar',
    `bien-avatar--${size}`,
    `bien-avatar--${shape}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const displayName = name || alt || ''
  const initials = displayName ? getInitials(displayName) : ''
  const backgroundColor = displayName
    ? getColorFromName(displayName)
    : 'var(--color-bg-subtle)'

  const showImage = src && !imageError
  const showInitials = !showImage && !icon && initials
  const showIcon = !showImage && icon

  return (
    <div className={classes}>
      <div
        className="bien-avatar__container"
        style={{ backgroundColor: showInitials ? backgroundColor : undefined }}
      >
        {showImage && (
          <img
            src={src}
            alt={alt || name || 'Avatar'}
            className="bien-avatar__image"
            onError={() => setImageError(true)}
          />
        )}
        {showInitials && (
          <span className="bien-avatar__initials">{initials}</span>
        )}
        {showIcon && <span className="bien-avatar__icon">{icon}</span>}
      </div>
      {showStatus && status && (
        <span
          className={`bien-avatar__status bien-avatar__status--${status}`}
        />
      )}
    </div>
  )
}

export function AvatarGroup({
  children,
  max = 3,
  size = 'md',
  className = '',
}: AvatarGroupProps) {
  const childArray = Array.isArray(children) ? children : [children]
  const visibleChildren = childArray.slice(0, max)
  const remaining = childArray.length - max

  const classes = ['bien-avatar-group', `bien-avatar-group--${size}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      {visibleChildren}
      {remaining > 0 && (
        <div className={`bien-avatar bien-avatar--${size} bien-avatar--circle`}>
          <div className="bien-avatar__container bien-avatar__overflow">
            <span className="bien-avatar__initials">+{remaining}</span>
          </div>
        </div>
      )}
    </div>
  )
}
