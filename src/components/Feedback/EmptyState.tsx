import { ReactNode } from 'react'

// Built-in SVG illustrations
const illustrations = {
  'no-data': (
    <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
      <rect
        x="40"
        y="60"
        width="120"
        height="80"
        rx="8"
        fill="var(--color-bg-subtle)"
        stroke="var(--color-border-base)"
        strokeWidth="2"
      />
      <circle
        cx="100"
        cy="85"
        r="15"
        fill="var(--color-primary)"
        opacity="0.2"
      />
      <path
        d="M93 85L98 90L107 78"
        stroke="var(--color-primary)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="60"
        y="110"
        width="80"
        height="4"
        rx="2"
        fill="var(--color-border-base)"
      />
      <rect
        x="70"
        y="120"
        width="60"
        height="4"
        rx="2"
        fill="var(--color-border-base)"
      />
      <circle cx="50" cy="40" r="3" fill="var(--color-primary)" opacity="0.3" />
      <circle cx="150" cy="35" r="4" fill="var(--color-accent)" opacity="0.3" />
      <circle
        cx="160"
        cy="120"
        r="3"
        fill="var(--color-purple)"
        opacity="0.3"
      />
    </svg>
  ),
  'no-results': (
    <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
      <circle
        cx="90"
        cy="75"
        r="32"
        fill="var(--color-bg-subtle)"
        stroke="var(--color-border-base)"
        strokeWidth="3"
      />
      <line
        x1="113"
        y1="98"
        x2="135"
        y2="120"
        stroke="var(--color-border-base)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="82"
        y1="67"
        x2="98"
        y2="83"
        stroke="var(--color-status-error)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="98"
        y1="67"
        x2="82"
        y2="83"
        stroke="var(--color-status-error)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="45" cy="45" r="3" fill="var(--color-primary)" opacity="0.3" />
      <circle cx="155" cy="50" r="4" fill="var(--color-accent)" opacity="0.3" />
      <circle cx="40" cy="120" r="3" fill="var(--color-purple)" opacity="0.3" />
      <circle
        cx="160"
        cy="115"
        r="3"
        fill="var(--color-primary)"
        opacity="0.3"
      />
    </svg>
  ),
  'no-notifications': (
    <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
      <path
        d="M100 50C95 50 91 54 91 59V65C80 68 72 78 72 90V105L65 112V117H135V112L128 105V90C128 78 120 68 109 65V59C109 54 105 50 100 50Z"
        fill="var(--color-bg-subtle)"
        stroke="var(--color-border-base)"
        strokeWidth="2"
      />
      <circle cx="100" cy="125" r="5" fill="var(--color-border-base)" />
      <circle
        cx="115"
        cy="60"
        r="8"
        fill="var(--color-primary)"
        opacity="0.2"
      />
      <circle cx="50" cy="45" r="3" fill="var(--color-primary)" opacity="0.3" />
      <circle cx="150" cy="55" r="4" fill="var(--color-accent)" opacity="0.3" />
      <circle cx="45" cy="125" r="3" fill="var(--color-purple)" opacity="0.3" />
    </svg>
  ),
  error: (
    <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
      <circle
        cx="100"
        cy="80"
        r="35"
        fill="var(--color-status-error-subtle)"
        stroke="var(--color-status-error)"
        strokeWidth="2"
      />
      <path
        d="M100 65V85"
        stroke="var(--color-status-error)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="100" cy="95" r="2.5" fill="var(--color-status-error)" />
      <path
        d="M70 50L80 40M130 50L120 40M70 110L80 120M130 110L120 120"
        stroke="var(--color-status-error)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.3"
      />
    </svg>
  ),
  'coming-soon': (
    <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
      <rect
        x="60"
        y="50"
        width="80"
        height="70"
        rx="8"
        fill="var(--color-bg-subtle)"
        stroke="var(--color-border-base)"
        strokeWidth="2"
      />
      <circle
        cx="100"
        cy="75"
        r="12"
        fill="var(--color-primary)"
        opacity="0.2"
      />
      <path
        d="M100 70V75L103 78"
        stroke="var(--color-primary)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="75"
        y="100"
        width="50"
        height="4"
        rx="2"
        fill="var(--color-border-base)"
      />
      <rect
        x="85"
        y="108"
        width="30"
        height="4"
        rx="2"
        fill="var(--color-border-base)"
      />
      <circle cx="50" cy="40" r="3" fill="var(--color-primary)" opacity="0.3" />
      <circle cx="150" cy="40" r="4" fill="var(--color-accent)" opacity="0.3" />
      <circle cx="45" cy="130" r="3" fill="var(--color-purple)" opacity="0.3" />
      <circle
        cx="155"
        cy="125"
        r="4"
        fill="var(--color-primary)"
        opacity="0.3"
      />
    </svg>
  ),
  'folder-empty': (
    <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
      <path
        d="M40 70C40 65.5817 43.5817 62 48 62H85L95 52H48C38.0589 52 30 60.0589 30 70V110C30 119.941 38.0589 128 48 128H152C161.941 128 170 119.941 170 110V80C170 70.0589 161.941 62 152 62H105L95 72H152C156.418 72 160 75.5817 160 80V110C160 114.418 156.418 118 152 118H48C43.5817 118 40 114.418 40 110V70Z"
        fill="var(--color-bg-subtle)"
        stroke="var(--color-border-base)"
        strokeWidth="2"
      />
      <circle
        cx="100"
        cy="90"
        r="15"
        fill="var(--color-primary)"
        opacity="0.1"
      />
      <circle cx="50" cy="40" r="3" fill="var(--color-primary)" opacity="0.3" />
      <circle cx="155" cy="45" r="4" fill="var(--color-accent)" opacity="0.3" />
    </svg>
  ),
  'inbox-zero': (
    <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
      <rect
        x="50"
        y="50"
        width="100"
        height="70"
        rx="4"
        fill="var(--color-bg-subtle)"
        stroke="var(--color-border-base)"
        strokeWidth="2"
      />
      <path
        d="M50 70L100 95L150 70"
        stroke="var(--color-border-base)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <line
        x1="50"
        y1="50"
        x2="100"
        y2="80"
        stroke="var(--color-border-base)"
        strokeWidth="2"
      />
      <line
        x1="150"
        y1="50"
        x2="100"
        y2="80"
        stroke="var(--color-border-base)"
        strokeWidth="2"
      />
      <circle
        cx="125"
        cy="55"
        r="8"
        fill="var(--color-status-success)"
        opacity="0.8"
      />
      <path
        d="M122 55L124 57L128 53"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="45" cy="40" r="3" fill="var(--color-primary)" opacity="0.3" />
      <circle
        cx="160"
        cy="125"
        r="4"
        fill="var(--color-accent)"
        opacity="0.3"
      />
    </svg>
  ),
}

export type EmptyStateIllustration = keyof typeof illustrations

export interface EmptyStateProps {
  illustration?: EmptyStateIllustration | ReactNode
  title: string
  description?: string
  action?: ReactNode
  className?: string
  style?: React.CSSProperties
}

export function EmptyState({
  illustration = 'no-data',
  title,
  description,
  action,
  className = '',
  style,
}: EmptyStateProps) {
  const classes = ['bien-empty-state', className].filter(Boolean).join(' ')

  const illustrationElement =
    typeof illustration === 'string'
      ? illustrations[illustration]
      : illustration

  return (
    <div className={classes} style={style}>
      <div className="bien-empty-state__illustration">
        {illustrationElement}
      </div>
      <div className="bien-empty-state__content">
        <h3 className="bien-empty-state__title">{title}</h3>
        {description && (
          <p className="bien-empty-state__description">{description}</p>
        )}
        {action && <div className="bien-empty-state__action">{action}</div>}
      </div>
    </div>
  )
}
