import React from 'react'
import { card } from './Card.css'

export interface CardProps {
  children: React.ReactNode
  className?: string
}

/**
 * Card component for content containers
 */
export function Card({ children, className }: CardProps) {
  return <div className={`${card} ${className || ''}`}>{children}</div>
}
