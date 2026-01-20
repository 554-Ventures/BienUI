import { useState, ReactNode } from 'react'
import './styles/header.css'

export interface HeaderNavItem {
  label: string
  href?: string
  onClick?: () => void
  active?: boolean
}

export interface HeaderProps {
  logo?: ReactNode
  logoText?: string
  logoHref?: string
  navigation?: HeaderNavItem[]
  actions?: ReactNode
  variant?:
    | 'default'
    | 'transparent'
    | 'gradient'
    | 'glass-frost'
    | 'glass-tint'
  sticky?: boolean
  bordered?: boolean
  children?: ReactNode
  className?: string
}

export function Header({
  logo,
  logoText = 'Bien UI',
  logoHref = '#',
  navigation = [],
  actions,
  variant = 'default',
  sticky = false,
  bordered = true,
  children,
  className = '',
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const classes = [
    'bien-header',
    `bien-header--${variant}`,
    sticky && 'bien-header--sticky',
    bordered && 'bien-header--bordered',
    isMobileMenuOpen && 'bien-header--menu-open',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const handleNavClick = (item: HeaderNavItem) => {
    if (item.onClick) {
      item.onClick()
    }
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className={classes}>
      <div className="bien-header__container">
        {/* Logo */}
        <div className="bien-header__logo">
          <a href={logoHref} className="bien-header__logo-link">
            {logo || <span className="bien-header__logo-text">{logoText}</span>}
          </a>
        </div>

        {/* Desktop Navigation */}
        {navigation.length > 0 && (
          <nav className="bien-header__nav">
            {navigation.map((item, index) => (
              <a
                key={index}
                href={item.href || '#'}
                className={`bien-header__nav-item ${item.active ? 'bien-header__nav-item--active' : ''}`}
                onClick={(e) => {
                  if (item.onClick) {
                    e.preventDefault()
                    handleNavClick(item)
                  }
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}

        {/* Custom Children */}
        {children && <div className="bien-header__custom">{children}</div>}

        {/* Actions */}
        {actions && <div className="bien-header__actions">{actions}</div>}

        {/* Mobile Menu Toggle */}
        <button
          className="bien-header__mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="bien-header__mobile-toggle-icon">
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6L18 18M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {(navigation.length > 0 || actions || children) && (
        <div className="bien-header__mobile-menu">
          {navigation.length > 0 && (
            <nav className="bien-header__mobile-nav">
              {navigation.map((item, index) => (
                <a
                  key={index}
                  href={item.href || '#'}
                  className={`bien-header__mobile-nav-item ${item.active ? 'bien-header__mobile-nav-item--active' : ''}`}
                  onClick={(e) => {
                    if (item.onClick) {
                      e.preventDefault()
                      handleNavClick(item)
                    } else {
                      setIsMobileMenuOpen(false)
                    }
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}

          {children && (
            <div className="bien-header__mobile-custom">{children}</div>
          )}

          {actions && (
            <div className="bien-header__mobile-actions">{actions}</div>
          )}
        </div>
      )}
    </header>
  )
}
