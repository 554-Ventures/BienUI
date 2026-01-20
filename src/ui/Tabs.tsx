import { useState } from 'react'
import './styles/tabs.css'

export interface Tab {
  id: string
  label: string
  icon?: React.ReactNode
  content?: React.ReactNode
  disabled?: boolean
  badge?: string | number
}

export interface TabsProps {
  tabs: Tab[]
  defaultTab?: string
  variant?: 'default' | 'underline' | 'pills' | 'filled'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  vertical?: boolean
  onChange?: (tabId: string) => void
  className?: string
}

export function Tabs({
  tabs,
  defaultTab,
  variant = 'default',
  size = 'md',
  fullWidth = false,
  vertical = false,
  onChange,
  className = '',
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

  const handleTabClick = (tabId: string, disabled?: boolean) => {
    if (disabled) return
    setActiveTab(tabId)
    if (onChange) {
      onChange(tabId)
    }
  }

  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content

  const tabListClasses = [
    'bien-tabs__list',
    `bien-tabs__list--${variant}`,
    `bien-tabs__list--${size}`,
    fullWidth && 'bien-tabs__list--full-width',
    vertical && 'bien-tabs__list--vertical',
  ]
    .filter(Boolean)
    .join(' ')

  const containerClasses = [
    'bien-tabs',
    vertical && 'bien-tabs--vertical',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={containerClasses}>
      <div
        className={tabListClasses}
        role="tablist"
        aria-orientation={vertical ? 'vertical' : 'horizontal'}
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab
          const tabClasses = [
            'bien-tabs__tab',
            isActive && 'bien-tabs__tab--active',
            tab.disabled && 'bien-tabs__tab--disabled',
          ]
            .filter(Boolean)
            .join(' ')

          return (
            <button
              key={tab.id}
              className={tabClasses}
              onClick={() => handleTabClick(tab.id, tab.disabled)}
              role="tab"
              aria-selected={isActive}
              aria-disabled={tab.disabled}
              disabled={tab.disabled}
              type="button"
            >
              {tab.icon && <span className="bien-tabs__icon">{tab.icon}</span>}
              <span className="bien-tabs__label">{tab.label}</span>
              {tab.badge !== undefined && (
                <span className="bien-tabs__badge">{tab.badge}</span>
              )}
            </button>
          )
        })}
      </div>
      {activeTabContent && (
        <div className="bien-tabs__content" role="tabpanel">
          {activeTabContent}
        </div>
      )}
    </div>
  )
}
