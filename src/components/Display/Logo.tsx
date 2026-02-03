import { forwardRef } from 'react'

// Import logo assets using explicit declarations to help TypeScript
import logoIcon from '../../assets/logos/Workarc_icon.png?url'
import logoLight from '../../assets/logos/WorkarcLogo.png?url'
import logoDark from '../../assets/logos/WorkarcLogoInverse.png?url'

export interface LogoProps {
  /** Logo variant - 'icon' uses small icon file, 'horizontal'/'stacked' use full logo with theme support */
  variant?: 'icon' | 'horizontal' | 'stacked'
  /** Size of the logo */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /** Theme variant - only affects horizontal/stacked variants (icon variant is theme-neutral) */
  theme?: 'light' | 'dark'
  /** Additional CSS classes */
  className?: string
  /** Alt text for accessibility */
  alt?: string
}

const LogoComponent = forwardRef<HTMLImageElement, LogoProps>(
  (
    {
      variant = 'horizontal',
      size = 'md',
      theme = 'light',
      className = '',
      alt = 'Workarc Logo',
    },
    ref
  ) => {
    const classes = [
      'bien-logo',
      `bien-logo--${variant}`,
      `bien-logo--${size}`,
      `bien-logo--${theme}`,
      className,
    ]
      .filter(Boolean)
      .join(' ')

    // Get the appropriate logo based on variant and theme
    const getLogoSrc = () => {
      // For icon variant, always use the icon file regardless of theme
      if (variant === 'icon') {
        return logoIcon
      }

      // For horizontal and stacked variants, use theme-appropriate logo
      return theme === 'dark' ? logoDark : logoLight
    }

    return (
      <img
        ref={ref}
        src={getLogoSrc()}
        alt={alt}
        className={classes}
        draggable={false}
      />
    )
  }
)

LogoComponent.displayName = 'Logo'

export const Logo = LogoComponent
