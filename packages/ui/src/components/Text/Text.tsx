import React from 'react'
import { text } from './Text.css'

export interface TextProps {
  children: React.ReactNode
  as?: 'p' | 'span' | 'div' | 'label' | 'strong' | 'em'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  tone?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'inverse'
    | 'brand'
    | 'success'
    | 'error'
    | 'warning'
  align?: 'left' | 'center' | 'right'
  truncate?: boolean
  className?: string
}

/**
 * Text component for consistent typography
 */
export function Text({
  children,
  as: Component = 'p',
  size = 'md',
  weight = 'normal',
  tone = 'primary',
  align,
  truncate = false,
  className,
}: TextProps) {
  return (
    <Component
      className={`${text({ size, weight, tone, align, truncate })} ${className || ''}`}
    >
      {children}
    </Component>
  )
}
