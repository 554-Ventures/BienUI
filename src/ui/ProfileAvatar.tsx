import { useState } from 'react'
import './styles/profile-avatar.css'

export interface ProfileAvatarProps {
  src?: string
  alt?: string
  name?: string
  size?: 'md' | 'lg' | 'xl' | '2xl'
  shape?: 'circle' | 'square'
  status?: 'online' | 'offline' | 'away' | 'busy'
  showStatus?: boolean
  editable?: boolean
  onEdit?: () => void
  badge?: React.ReactNode
  ring?: boolean
  ringColor?: 'brand' | 'success' | 'warning' | 'error'
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

export function ProfileAvatar({
  src,
  alt,
  name,
  size = 'xl',
  shape = 'circle',
  status,
  showStatus = false,
  editable = false,
  onEdit,
  badge,
  ring = false,
  ringColor = 'brand',
  className = '',
}: ProfileAvatarProps) {
  const [imageError, setImageError] = useState(false)

  const classes = [
    'bien-profile-avatar',
    `bien-profile-avatar--${size}`,
    `bien-profile-avatar--${shape}`,
    ring && `bien-profile-avatar--ring-${ringColor}`,
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
  const showInitials = !showImage && initials

  return (
    <div className={classes}>
      <div
        className="bien-profile-avatar__container"
        style={{ backgroundColor: showInitials ? backgroundColor : undefined }}
      >
        {showImage && (
          <img
            src={src}
            alt={alt || name || 'Profile avatar'}
            className="bien-profile-avatar__image"
            onError={() => setImageError(true)}
          />
        )}
        {showInitials && (
          <span className="bien-profile-avatar__initials">{initials}</span>
        )}
      </div>
      {editable && (
        <button
          type="button"
          className="bien-profile-avatar__edit"
          onClick={onEdit}
          aria-label="Edit profile picture"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M9 3H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 1l4 4L9 15H5v-4L15 1z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
      {showStatus && status && (
        <span
          className={`bien-profile-avatar__status bien-profile-avatar__status--${status}`}
        />
      )}
      {badge && <div className="bien-profile-avatar__badge">{badge}</div>}
    </div>
  )
}
