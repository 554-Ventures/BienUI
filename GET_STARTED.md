# Getting Started with BienUI

Welcome to **BienUI** - a production-ready, accessibility-first React component library that makes building beautiful, accessible user interfaces effortless. Built with TypeScript, Radix UI primitives, and comprehensive design tokens.

## 📋 Table of Contents

- [Installation](#-installation)
- [Quick Start](#-quick-start)
- [Basic Usage](#-basic-usage)
- [Theming & Customization](#-theming--customization)
- [Component Overview](#-component-overview)
- [Development Setup](#-development-setup)
- [Best Practices](#-best-practices)
- [Examples](#-examples)
- [Next Steps](#-next-steps)

## 📦 Installation

### Prerequisites

Before installing BienUI, make sure you have the following:

- **Node.js** 16+ 
- **React** 17+ or 18+
- **React DOM** 17+ or 18+

### Install BienUI

Choose your preferred package manager:

```bash
# npm
npm install @bienui/core

# yarn
yarn add @bienui/core

# pnpm
pnpm add @bienui/core
```

### Install Peer Dependencies

BienUI requires React as a peer dependency. If you haven't already installed it:

```bash
npm install react react-dom
```

## 🚀 Quick Start

### 1. Import Styles

First, import the BienUI CSS styles in your application entry point:

```tsx
// In your main.tsx, App.tsx, or index.tsx
import '@bienui/core/styles';
```

### 2. Use Your First Component

```tsx
import React from 'react';
import { Button, Text } from '@bienui/core';

function App() {
  return (
    <div>
      <Text variant="heading1">Welcome to BienUI!</Text>
      <Button variant="primary" onClick={() => alert('Hello BienUI!')}>
        Get Started
      </Button>
    </div>
  );
}

export default App;
```

### 3. Run Your Application

```bash
npm run dev
# or
yarn dev
```

That's it! You should now see your first BienUI components rendered on the page.

## 🎨 Basic Usage

### Components Structure

BienUI components are organized into logical categories:

```tsx
import {
  // Display Components
  Avatar, Badge, Card, Logo, Text, Timeline,
  
  // Interactive Components  
  Button, Menu, Drawer, Tooltip,
  
  // Form Components
  Input, Select, Checkbox, Switch,
  
  // Layout Components
  Container, Stack, Grid, Spacer,
  
  // Navigation Components
  Breadcrumb, Tabs, Sidenav,
  
  // Feedback Components
  Banner, Callout, EmptyState, Loading,
} from '@bienui/core';
```

### Common Patterns

#### Building a Form

```tsx
import { Input, Select, Checkbox, Button, Stack } from '@bienui/core';

function ContactForm() {
  return (
    <Stack gap="md" maxWidth="400px">
      <Input 
        label="Full Name" 
        placeholder="Enter your name" 
        required 
      />
      
      <Input 
        label="Email" 
        type="email" 
        placeholder="your@email.com" 
        required 
      />
      
      <Select 
        label="How did you hear about us?"
        placeholder="Choose an option"
      >
        <Select.Option value="google">Google Search</Select.Option>
        <Select.Option value="social">Social Media</Select.Option>
        <Select.Option value="friend">Friend Referral</Select.Option>
      </Select>
      
      <Checkbox label="Subscribe to newsletter" />
      
      <Button variant="primary" size="lg">
        Submit
      </Button>
    </Stack>
  );
}
```

#### Creating a Dashboard Card

```tsx
import { Card, Text, Badge, Button, Stack } from '@bienui/core';

function DashboardCard({ title, status, description, onAction }) {
  return (
    <Card padding="lg">
      <Stack gap="sm">
        <Stack direction="row" justify="between" align="center">
          <Text variant="heading3">{title}</Text>
          <Badge variant={status === 'active' ? 'success' : 'neutral'}>
            {status}
          </Badge>
        </Stack>
        
        <Text variant="body" color="muted">
          {description}
        </Text>
        
        <Button variant="outline" size="sm" onClick={onAction}>
          View Details
        </Button>
      </Stack>
    </Card>
  );
}
```

#### Building a Header with Logo

```tsx
import { Container, Stack, Logo, Button, Avatar } from '@bienui/core';

function AppHeader({ user, onProfileClick, onLogout }) {
  return (
    <Container maxWidth="xl" padding="md">
      <Stack direction="row" justify="between" align="center">
        <Logo variant="horizontal" size="md" theme="light" />
        
        <Stack direction="row" gap="md" align="center">
          <Button variant="ghost">Dashboard</Button>
          <Button variant="ghost">Settings</Button>
          
          <Avatar 
            src={user.avatar} 
            name={user.name} 
            size="sm"
            onClick={onProfileClick}
          />
          
          <Button variant="outline" size="sm" onClick={onLogout}>
            Logout
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
```

## 🎭 Theming & Customization

### Design Tokens

BienUI uses a token-based theming system that supports:

- **Light/Dark modes** - Automatic theme switching
- **Density modes** - Comfortable and compact spacing
- **Custom colors** - Override brand colors
- **Typography scales** - Consistent text sizing

### Theme Configuration

```tsx
import { ThemeProvider } from '@bienui/core';

function App() {
  return (
    <ThemeProvider
      theme="light" // or "dark" or "auto"
      density="comfortable" // or "compact"
    >
      <YourAppComponents />
    </ThemeProvider>
  );
}
```

### CSS Custom Properties

You can customize the design tokens using CSS custom properties:

```css
:root {
  /* Primary brand colors */
  --color-primary-50: #f0f9ff;
  --color-primary-500: #3b82f6;
  --color-primary-900: #1e3a8a;
  
  /* Typography */
  --font-family-base: 'Inter', sans-serif;
  --font-size-base: 16px;
  
  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
}
```

## 📚 Component Overview

### Display Components

| Component | Purpose | Key Props |
|-----------|---------|-----------|
| `Avatar` | User profile images | `src`, `name`, `size` |
| `Badge` | Status indicators | `variant`, `size` |
| `Card` | Content containers | `padding`, `elevation` |
| `Logo` | Brand identity display | `variant`, `size`, `theme` |
| `Text` | Typography | `variant`, `color`, `size` |
| `Timeline` | Sequential events | `items`, `orientation` |

### Interactive Components

| Component | Purpose | Key Props |
|-----------|---------|-----------|
| `Button` | Actions & navigation | `variant`, `size`, `disabled` |
| `Menu` | Contextual actions | `trigger`, `items` |
| `Drawer` | Side panels | `open`, `onClose`, `position` |
| `Tooltip` | Helpful hints | `content`, `placement` |

### Form Components

| Component | Purpose | Key Props |
|-----------|---------|-----------|
| `Input` | Text input | `type`, `placeholder`, `error` |
| `Select` | Option selection | `placeholder`, `multiple` |
| `Checkbox` | Boolean choices | `checked`, `label` |
| `Switch` | Toggle states | `checked`, `size` |
| `Textarea` | Multi-line text | `rows`, `resize` |

### Layout Components

| Component | Purpose | Key Props |
|-----------|---------|-----------|
| `Container` | Max-width wrapper | `maxWidth`, `padding` |
| `Stack` | Flexible layouts | `direction`, `gap`, `align` |
| `Grid` | CSS Grid layouts | `columns`, `gap` |
| `Spacer` | Flexible spacing | `size` |

## 🛠 Development Setup

### For Library Contributors

If you want to contribute to BienUI or run it locally:

```bash
# Clone the repository
git clone https://github.com/554-Ventures/BienUI.git
cd BienUI

# Install dependencies
yarn install

# Start Storybook development server
yarn storybook

# Build the library
yarn build:lib

# Run tests
yarn test

# Lint and format
yarn lint:fix
yarn format
```

### Storybook Development

BienUI comes with comprehensive Storybook documentation:

```bash
# Start Storybook
yarn storybook
```

Visit `http://localhost:6006` to explore all components with:
- **Interactive controls** - Adjust props in real-time
- **Accessibility testing** - Built-in a11y auditing
- **Code examples** - Copy-paste ready snippets
- **Design tokens** - Visual token reference

## ✨ Best Practices

### Accessibility

BienUI is built with accessibility as a first-class citizen:

```tsx
// ✅ Good - Proper semantic markup
<Button onClick={handleClick} aria-label="Close dialog">
  <CloseIcon />
</Button>

// ✅ Good - Form labels
<Input label="Search" placeholder="Type to search..." />

// ❌ Avoid - Missing labels
<input placeholder="Search..." />
```

### Performance

```tsx
// ✅ Good - Import only what you need
import { Button, Input } from '@bienui/core';

// ❌ Avoid - Importing everything
import * as BienUI from '@bienui/core';
```

### Consistent Spacing

```tsx
// ✅ Good - Use Stack for consistent spacing
<Stack gap="md">
  <Text variant="heading2">Title</Text>
  <Text variant="body">Description text here.</Text>
  <Button variant="primary">Action</Button>
</Stack>

// ❌ Avoid - Manual margins
<div>
  <h2 style={{ marginBottom: '16px' }}>Title</h2>
  <p style={{ marginBottom: '24px' }}>Description</p>
  <button>Action</button>
</div>
```

### Type Safety

```tsx
// ✅ Good - Leverage TypeScript
interface User {
  id: string;
  name: string;
  avatar?: string;
}

function UserCard({ user }: { user: User }) {
  return (
    <Card>
      <Avatar src={user.avatar} name={user.name} />
      <Text>{user.name}</Text>
    </Card>
  );
}
```

## 🎯 Examples

### Complete Registration Form

```tsx
import React, { useState } from 'react';
import {
  Container,
  Card,
  Stack,
  Text,
  Input,
  Select,
  Checkbox,
  Button,
  Divider
} from '@bienui/core';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    newsletter: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Container maxWidth="md" padding="lg">
      <Card padding="xl">
        <form onSubmit={handleSubmit}>
          <Stack gap="lg">
            <Text variant="heading1" align="center">
              Create Your Account
            </Text>
            
            <Text variant="body" color="muted" align="center">
              Join thousands of developers building better UIs
            </Text>

            <Divider />

            <Stack direction="row" gap="md">
              <Input
                label="First Name"
                placeholder="John"
                value={formData.firstName}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  firstName: e.target.value
                }))}
                required
              />
              
              <Input
                label="Last Name"
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  lastName: e.target.value
                }))}
                required
              />
            </Stack>

            <Input
              label="Email Address"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                email: e.target.value
              }))}
              required
            />

            <Input
              label="Company"
              placeholder="Acme Inc."
              value={formData.company}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                company: e.target.value
              }))}
            />

            <Select
              label="Your Role"
              placeholder="Select your role"
              value={formData.role}
              onChange={(value) => setFormData(prev => ({
                ...prev,
                role: value
              }))}
            >
              <Select.Option value="developer">Developer</Select.Option>
              <Select.Option value="designer">Designer</Select.Option>
              <Select.Option value="manager">Product Manager</Select.Option>
              <Select.Option value="other">Other</Select.Option>
            </Select>

            <Checkbox
              label="Subscribe to our newsletter for updates and tips"
              checked={formData.newsletter}
              onChange={(checked) => setFormData(prev => ({
                ...prev,
                newsletter: checked
              }))}
            />

            <Button 
              type="submit" 
              variant="primary" 
              size="lg"
              fullWidth
            >
              Create Account
            </Button>
          </Stack>
        </form>
      </Card>
    </Container>
  );
}
```

### Dashboard with Multiple Components

```tsx
import React from 'react';
import {
  Container,
  Grid,
  Card,
  Stack,
  Text,
  Button,
  Badge,
  Avatar,
  Timeline,
  Meter
} from '@bienui/core';

function Dashboard() {
  const recentActivity = [
    {
      id: '1',
      title: 'New user registered',
      description: 'john.doe@example.com joined the platform',
      timestamp: '2 minutes ago',
      type: 'user'
    },
    {
      id: '2',
      title: 'Payment processed',
      description: '$99 subscription renewed',
      timestamp: '1 hour ago',
      type: 'payment'
    },
    {
      id: '3',
      title: 'Feature deployed',
      description: 'New dashboard components are now live',
      timestamp: '3 hours ago',
      type: 'deployment'
    }
  ];

  return (
    <Container maxWidth="xl" padding="lg">
      <Stack gap="xl">
        <Stack gap="sm">
          <Text variant="heading1">Dashboard</Text>
          <Text variant="body" color="muted">
            Welcome back! Here's what's happening.
          </Text>
        </Stack>

        <Grid columns={4} gap="lg">
          <Card padding="lg">
            <Stack gap="sm">
              <Stack direction="row" justify="between">
                <Text variant="caption" color="muted">TOTAL USERS</Text>
                <Badge variant="success" size="sm">+12%</Badge>
              </Stack>
              <Text variant="heading2">2,847</Text>
              <Text variant="caption" color="muted">
                +127 this month
              </Text>
            </Stack>
          </Card>

          <Card padding="lg">
            <Stack gap="sm">
              <Stack direction="row" justify="between">
                <Text variant="caption" color="muted">REVENUE</Text>
                <Badge variant="success" size="sm">+8%</Badge>
              </Stack>
              <Text variant="heading2">$12,847</Text>
              <Text variant="caption" color="muted">
                +$1,247 this month
              </Text>
            </Stack>
          </Card>

          <Card padding="lg">
            <Stack gap="sm">
              <Text variant="caption" color="muted">CONVERSION RATE</Text>
              <Text variant="heading2">3.24%</Text>
              <Meter value={3.24} max={10} size="sm" />
            </Stack>
          </Card>

          <Card padding="lg">
            <Stack gap="sm">
              <Text variant="caption" color="muted">ACTIVE SESSIONS</Text>
              <Text variant="heading2">847</Text>
              <Stack direction="row" gap="xs">
                <Avatar size="xs" name="John" />
                <Avatar size="xs" name="Jane" />
                <Avatar size="xs" name="Bob" />
                <Badge variant="neutral" size="sm">+844 more</Badge>
              </Stack>
            </Stack>
          </Card>
        </Grid>

        <Grid columns={2} gap="lg">
          <Card padding="lg">
            <Stack gap="md">
              <Text variant="heading3">Recent Activity</Text>
              <Timeline 
                items={recentActivity}
                orientation="vertical"
              />
            </Stack>
          </Card>

          <Card padding="lg">
            <Stack gap="md">
              <Stack direction="row" justify="between">
                <Text variant="heading3">Quick Actions</Text>
                <Button variant="ghost" size="sm">View All</Button>
              </Stack>
              
              <Stack gap="sm">
                <Button variant="outline" fullWidth justify="start">
                  👥 Invite team members
                </Button>
                <Button variant="outline" fullWidth justify="start">
                  📊 Generate report
                </Button>
                <Button variant="outline" fullWidth justify="start">
                  ⚙️ Configure settings
                </Button>
                <Button variant="outline" fullWidth justify="start">
                  📧 Send newsletter
                </Button>
              </Stack>
            </Stack>
          </Card>
        </Grid>
      </Stack>
    </Container>
  );
}
```

## 🎯 Next Steps

### Explore the Documentation

- **[Storybook](http://localhost:6006)** - Interactive component explorer
- **[Component API](./README.md#components)** - Detailed prop references
- **[Design Tokens](./src/stories/DesignTokens.stories.tsx)** - Theming system
- **[Accessibility Guide](./guidelines/Guidelines.md)** - A11y best practices

### Join the Community

- **[GitHub Repository](https://github.com/554-Ventures/BienUI)** - Source code & issues
- **[Discussions](https://github.com/554-Ventures/BienUI/discussions)** - Community support
- **[Contributing Guide](./CONTRIBUTING.md)** - Help improve BienUI

### Advanced Topics

- **Custom Themes** - Create your own design system
- **Component Extensions** - Build on top of BienUI
- **Performance Optimization** - Bundle size & rendering tips
- **Testing** - Unit & integration testing with BienUI

---

## 🎉 You're Ready!

Congratulations! You now have everything you need to start building beautiful, accessible user interfaces with BienUI. 

**What to do next:**
1. ⚡ Try the examples above in your project
2. 🎨 Explore components in Storybook
3. 🔧 Customize the theme to match your brand
4. 📖 Read the component documentation
5. 🚀 Build something amazing!

Need help? Check out our [discussions](https://github.com/554-Ventures/BienUI/discussions) or [open an issue](https://github.com/554-Ventures/BienUI/issues).

Happy coding with BienUI! 🎊