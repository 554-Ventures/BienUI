import React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { tabsRoot, tabsList, tabsTrigger, tabsContent } from './Tabs.css'

export interface TabsProps {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
  orientation?: 'horizontal' | 'vertical'
}

/**
 * Tabs component using Radix Tabs
 * Includes proper ARIA attributes and keyboard navigation
 */
export function Tabs({
  defaultValue,
  value,
  onValueChange,
  children,
  orientation = 'horizontal',
}: TabsProps) {
  return (
    <TabsPrimitive.Root
      className={tabsRoot}
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      orientation={orientation}
    >
      {children}
    </TabsPrimitive.Root>
  )
}

/**
 * TabsList - Container for tab triggers
 */
export interface TabsListProps {
  children: React.ReactNode
  'aria-label'?: string
}

export function TabsList({ children, ...props }: TabsListProps) {
  return (
    <TabsPrimitive.List className={tabsList} {...props}>
      {children}
    </TabsPrimitive.List>
  )
}

/**
 * TabsTrigger - Individual tab button
 */
export interface TabsTriggerProps {
  value: string
  children: React.ReactNode
  disabled?: boolean
}

export function TabsTrigger({ value, children, disabled }: TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      className={tabsTrigger}
      value={value}
      disabled={disabled}
    >
      {children}
    </TabsPrimitive.Trigger>
  )
}

/**
 * TabsContent - Content for each tab
 */
export interface TabsContentProps {
  value: string
  children: React.ReactNode
}

export function TabsContent({ value, children }: TabsContentProps) {
  return (
    <TabsPrimitive.Content className={tabsContent} value={value}>
      {children}
    </TabsPrimitive.Content>
  )
}
