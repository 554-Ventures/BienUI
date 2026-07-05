/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { BottomNav } from '../components/Navigation/BottomNav'
import { Card } from '../components/Display/Card'
import { Text } from '../components/Display/Text'
import { VStack } from '../components/Layout/Stack'
import {
  HomeIcon,
  ChartIcon,
  PlusIcon,
  UserIcon,
  SettingsIcon,
} from '../components/Icons'

const meta: Meta<typeof BottomNav> = {
  title: 'Navigation/BottomNav',
  component: BottomNav,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A fixed bottom tab bar for mobile app-style navigation.

## Features
- **Fixed to the viewport bottom** with \`env(safe-area-inset-bottom)\` padding so items stay clear of the iOS home indicator
- **Active indicator** – colored bar above the active item, \`aria-current="page"\`
- **Badges** – optional counter/status badge on an item's icon
- **Links or buttons** – items render as \`<a>\` when given \`href\`, otherwise as \`<button>\`
- **Responsive** – pass \`hideAbove="md"\` to unmount the nav on viewports wider than the breakpoint
- **Touch friendly** – 56px minimum item height

## Usage
\`\`\`tsx
<BottomNav
  items={[
    { id: 'home', label: 'Home', icon: <HomeIcon /> },
    { id: 'profile', label: 'Profile', icon: <UserIcon />, badge: 3 },
  ]}
  activeId="home"
  onNavigate={(item) => setPage(item.id)}
  hideAbove="md"
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BottomNav>

const demoItems = [
  { id: 'home', label: 'Home', icon: <HomeIcon /> },
  { id: 'stats', label: 'Stats', icon: <ChartIcon /> },
  { id: 'add', label: 'Add', icon: <PlusIcon /> },
  { id: 'profile', label: 'Profile', icon: <UserIcon />, badge: 2 },
  { id: 'settings', label: 'Settings', icon: <SettingsIcon /> },
]

export const Default: Story = {
  render: () => {
    const [activeId, setActiveId] = useState('home')

    return (
      <div style={{ minHeight: '320px', paddingBottom: '72px' }}>
        <VStack gap="md" style={{ padding: '16px' }}>
          <Card>
            <Text>
              Active page: <strong>{activeId}</strong>
            </Text>
          </Card>
        </VStack>
        <BottomNav
          items={demoItems}
          activeId={activeId}
          onNavigate={(item) => setActiveId(item.id)}
        />
      </div>
    )
  },
}

export const IconsOnly: Story = {
  render: () => {
    const [activeId, setActiveId] = useState('home')

    return (
      <div style={{ minHeight: '240px', paddingBottom: '64px' }}>
        <BottomNav
          items={demoItems}
          activeId={activeId}
          showLabels={false}
          onNavigate={(item) => setActiveId(item.id)}
        />
      </div>
    )
  },
}

export const HiddenOnDesktop: Story = {
  render: () => {
    const [activeId, setActiveId] = useState('home')

    return (
      <div style={{ minHeight: '240px', paddingBottom: '72px' }}>
        <VStack gap="md" style={{ padding: '16px' }}>
          <Card>
            <Text>
              This nav uses <code>hideAbove=&quot;md&quot;</code> — resize the
              viewport below 768px to see it.
            </Text>
          </Card>
        </VStack>
        <BottomNav
          items={demoItems}
          activeId={activeId}
          hideAbove="md"
          onNavigate={(item) => setActiveId(item.id)}
        />
      </div>
    )
  },
}
