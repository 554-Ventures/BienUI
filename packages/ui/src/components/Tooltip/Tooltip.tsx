import React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { tooltipContent, tooltipArrow } from './Tooltip.css'

export interface TooltipProps {
  children: React.ReactElement
  content: React.ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'start' | 'center' | 'end'
  delayDuration?: number
}

/**
 * Tooltip component using Radix Tooltip
 * Includes proper ARIA attributes and keyboard support
 */
export function Tooltip({
  children,
  content,
  side = 'top',
  align = 'center',
  delayDuration = 200,
}: TooltipProps) {
  return (
    <TooltipPrimitive.Root delayDuration={delayDuration}>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          className={tooltipContent}
          side={side}
          align={align}
          sideOffset={5}
        >
          {content}
          <TooltipPrimitive.Arrow className={tooltipArrow} />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  )
}

/**
 * TooltipProvider - Must wrap your app to enable tooltips
 */
export const TooltipProvider = TooltipPrimitive.Provider
