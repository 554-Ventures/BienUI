import { useState } from 'react'
import {
  // Providers
  BienProvider,
  TooltipProvider,
  ToastProvider,
  useToast,
  
  // Interactive
  Button,
  Tooltip,
  Menu,
  MenuItem,
  MenuDivider,
  MenuGroup,
  Hotspot,
  DraggableList,
  FileDrop,
  Panel,
  
  // Display
  Text,
  Card,
  Badge,
  Avatar,
  AvatarGroup,
  ProfileAvatar,
  Timeline,
  Meter,
  CircularMeter,
  Table,
  List,
  ListItem,
  DescriptionList,
  DescriptionTerm,
  DescriptionDetails,
  ColorSwatch,
  
  // Forms
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  Textarea,
  MarkdownTextarea,
  Select,
  MultiSelect,
  Slider,
  DatePicker,
  
  // Navigation
  Link,
  Breadcrumb,
  Header,
  Sidenav,
  
  // Layout
  Container,
  Grid,
  VStack,
  HStack,
  Divider,
  Spacer,
  Section,
  
  // Feedback
  Modal,
  Accordion,
  Banner,
  Callout,
  EmptyState,
  Loading,
  Stepper,
  Tabs,
  
  // Utils
  ThinkingText,
  
  // Icons
  PlusIcon,
  DownloadIcon,
  SendIcon,
  HeartIcon,
  SettingsIcon,
  TrashIcon,
  SearchIcon,
  CheckIcon,
  ArrowRightIcon,
  SparklesIcon,
  BellIcon,
  HomeIcon,
  UsersIcon,
  ChartIcon,
  FileIcon,
  FolderIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  MessageIcon,
  HelpCircleIcon,
  UserIcon,
  LayoutDashboardIcon,
} from '../index'
import './App.css'

function DraggableListDemo() {
  const { toast } = useToast()
  const [tasks, setTasks] = useState([
    {
      id: 1,
      content: 'Design homepage mockups',
      priority: 'High',
      status: 'In Progress',
    },
    {
      id: 2,
      content: 'Implement user authentication',
      priority: 'Critical',
      status: 'To Do',
    },
    {
      id: 3,
      content: 'Write API documentation',
      priority: 'Medium',
      status: 'In Progress',
    },
    {
      id: 4,
      content: 'Set up CI/CD pipeline',
      priority: 'High',
      status: 'To Do',
    },
    { id: 5, content: 'Review pull requests', priority: 'Low', status: 'Done' },
  ])

  const [people, setPeople] = useState([
    { id: 1, content: 'Alice Johnson' },
    { id: 2, content: 'Bob Smith' },
    { id: 3, content: 'Charlie Davis' },
    { id: 4, content: 'Diana Wilson' },
    { id: 5, content: 'Eve Martinez' },
  ])

  const [features, setFeatures] = useState([
    { id: 1, content: '🎨 Custom theming support' },
    { id: 2, content: '🌙 Dark mode toggle' },
    { id: 3, content: '📱 Responsive design' },
    { id: 4, content: '♿ Accessibility features' },
    { id: 5, content: '⚡ Performance optimization' },
  ])

  return (
    <section id="draggable" className="demo-section">
      <Text size="lg" weight="semibold">
        🎯 Draggable List
      </Text>
      <VStack gap="lg">
        {/* Basic Drag and Drop */}
        <div>
          <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
            Basic Drag and Drop
          </Text>
          <Card>
            <Text size="sm" weight="semibold" style={{ marginBottom: '12px' }}>
              Reorder Items
            </Text>
            <DraggableList
              items={people}
              onReorder={(newItems) => {
                setPeople(newItems)
                toast({ title: 'List reordered!', variant: 'success' })
              }}
            />
          </Card>
        </div>

        {/* Task List with Custom Rendering */}
        <div>
          <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
            Task List (Custom Rendering)
          </Text>
          <Card>
            <DraggableList
              items={tasks}
              onReorder={(newItems) => {
                setTasks(newItems)
                toast({ title: 'Tasks reordered!', variant: 'info' })
              }}
              renderItem={(item) => (
                <VStack gap="xs" style={{ width: '100%' }}>
                  <HStack
                    gap="sm"
                    style={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Text weight="semibold">{item.content}</Text>
                    <HStack gap="xs">
                      <Badge
                        variant={
                          item.priority === 'Critical'
                            ? 'error'
                            : item.priority === 'High'
                              ? 'warning'
                              : item.priority === 'Medium'
                                ? 'primary'
                                : 'secondary'
                        }
                        size="sm"
                      >
                        {item.priority}
                      </Badge>
                      <Badge
                        variant={
                          item.status === 'Done'
                            ? 'success'
                            : item.status === 'In Progress'
                              ? 'primary'
                              : 'secondary'
                        }
                        size="sm"
                      >
                        {item.status}
                      </Badge>
                    </HStack>
                  </HStack>
                </VStack>
              )}
            />
          </Card>
        </div>

        {/* Features List with Emoji */}
        <div>
          <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
            Feature Priority
          </Text>
          <Card>
            <Text size="xs" tone="secondary" style={{ marginBottom: '12px' }}>
              Drag to reorder features by priority
            </Text>
            <DraggableList
              items={features}
              onReorder={(newItems) => {
                setFeatures(newItems)
              }}
              renderItem={(item, isDragging) => (
                <HStack gap="sm" style={{ alignItems: 'center' }}>
                  <Text size="lg">{item.content}</Text>
                  {isDragging && (
                    <Badge variant="primary" size="sm">
                      Moving...
                    </Badge>
                  )}
                </HStack>
              )}
            />
          </Card>
        </div>

        {/* Without Handle */}
        <div>
          <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
            Without Drag Handle
          </Text>
          <Card>
            <Text size="xs" tone="secondary" style={{ marginBottom: '12px' }}>
              Drag anywhere on the item
            </Text>
            <DraggableList
              items={[
                { id: 1, content: '🥇 First Place' },
                { id: 2, content: '🥈 Second Place' },
                { id: 3, content: '🥉 Third Place' },
              ]}
              onReorder={() => {}}
              showHandle={false}
            />
          </Card>
        </div>
      </VStack>

      <Banner variant="info" style={{ marginTop: '24px' }}>
        <Text size="sm">
          <strong>Drag and Drop:</strong> Use DraggableList to create
          reorderable lists. Items can be reordered by dragging with the handle
          or the entire item.
        </Text>
      </Banner>

      <Callout
        variant="tint"
        icon={<SparklesIcon />}
        style={{ marginTop: '16px' }}
      >
        <Text size="sm">
          <strong>Custom Rendering:</strong> Use renderItem prop to customize
          how each item looks. The isDragging parameter lets you show visual
          feedback during drag operations.
        </Text>
      </Callout>
    </section>
  )
}

function ThinkingTextDemo() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [showThinking, setShowThinking] = useState(true)
  const [showReasoning, setShowReasoning] = useState(true)
  const [showAnalyzing, setShowAnalyzing] = useState(true)

  return (
    <section id="thinking" className="demo-section">
      <Text size="lg" weight="semibold">
        🤖 AI Thinking Text
      </Text>
      <VStack gap="lg">
        {/* Indicator States */}
        <div>
          <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
            Thinking Indicators
          </Text>
          <VStack gap="md">
            <Card>
              <Text
                size="sm"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Thinking
              </Text>
              <ThinkingText variant="thinking" />
            </Card>

            <Card>
              <Text
                size="sm"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Reasoning
              </Text>
              <ThinkingText variant="reasoning" />
            </Card>

            <Card>
              <Text
                size="sm"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Analyzing
              </Text>
              <ThinkingText variant="analyzing" />
            </Card>

            <Card>
              <Text
                size="sm"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Processing
              </Text>
              <ThinkingText variant="processing" />
            </Card>

            <Card>
              <Text
                size="sm"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Generating
              </Text>
              <ThinkingText variant="generating" />
            </Card>
          </VStack>
        </div>

        {/* With Streaming Text */}
        <div>
          <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
            Streaming Text
          </Text>
          <VStack gap="md">
            <Card>
              <Text
                size="sm"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Slow Speed
              </Text>
              <ThinkingText
                variant="thinking"
                text="Let me think about this carefully..."
                speed="slow"
              />
            </Card>

            <Card>
              <Text
                size="sm"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Normal Speed
              </Text>
              <ThinkingText
                variant="reasoning"
                text="Analyzing the problem from multiple angles to find the optimal solution."
                speed="normal"
              />
            </Card>

            <Card>
              <Text
                size="sm"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Fast Speed
              </Text>
              <ThinkingText
                variant="generating"
                text="Generating response based on your query..."
                speed="fast"
              />
            </Card>
          </VStack>
        </div>

        {/* Interactive Examples */}
        <div>
          <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
            Interactive Examples
          </Text>
          <VStack gap="md">
            <Card>
              <VStack gap="md">
                <HStack gap="sm" style={{ alignItems: 'center' }}>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      setShowThinking(false)
                      setTimeout(() => setShowThinking(true), 100)
                    }}
                  >
                    Restart Thinking
                  </Button>
                  <Text size="sm" tone="secondary">
                    Click to restart animation
                  </Text>
                </HStack>
                {showThinking && (
                  <ThinkingText
                    variant="thinking"
                    text="I'm carefully considering all possible approaches to solve this complex problem..."
                    speed="normal"
                  />
                )}
              </VStack>
            </Card>

            <Card>
              <VStack gap="md">
                <HStack gap="sm" style={{ alignItems: 'center' }}>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      setShowReasoning(false)
                      setTimeout(() => setShowReasoning(true), 100)
                    }}
                  >
                    Restart Reasoning
                  </Button>
                  <Text size="sm" tone="secondary">
                    Different variant
                  </Text>
                </HStack>
                {showReasoning && (
                  <ThinkingText
                    variant="reasoning"
                    text="Breaking down the components: first, understanding context; second, evaluating options; third, selecting the best path forward."
                    speed="normal"
                  />
                )}
              </VStack>
            </Card>

            <Card>
              <VStack gap="md">
                <HStack gap="sm" style={{ alignItems: 'center' }}>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      setIsGenerating(true)
                      setTimeout(() => setIsGenerating(false), 5000)
                    }}
                  >
                    {isGenerating ? 'Generating...' : 'Start Generation'}
                  </Button>
                  <Text size="sm" tone="secondary">
                    5 second generation
                  </Text>
                </HStack>
                {isGenerating && (
                  <ThinkingText
                    variant="generating"
                    text="Creating a comprehensive response tailored to your specific needs and requirements..."
                    speed="fast"
                    onComplete={() => {
                      console.log('Generation complete!')
                    }}
                  />
                )}
              </VStack>
            </Card>
          </VStack>
        </div>

        {/* Real-World Chat Example */}
        <div>
          <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
            Chat Interface Example
          </Text>
          <Card>
            <VStack gap="md">
              <div
                style={{
                  padding: 'var(--space-md)',
                  background: 'var(--color-bg-subtle)',
                  borderRadius: 'var(--radius-md)',
                  alignSelf: 'flex-end',
                  maxWidth: '80%',
                }}
              >
                <Text size="sm">
                  What&apos;s the best way to optimize React performance?
                </Text>
              </div>

              <HStack gap="sm" style={{ alignItems: 'center' }}>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    setShowAnalyzing(false)
                    setTimeout(() => setShowAnalyzing(true), 100)
                  }}
                >
                  Ask AI
                </Button>
              </HStack>

              {showAnalyzing && (
                <div style={{ alignSelf: 'flex-start', maxWidth: '80%' }}>
                  <ThinkingText
                    variant="analyzing"
                    text="To optimize React performance, consider: memoization with useMemo and useCallback, code splitting with React.lazy, virtualization for long lists, avoiding unnecessary re-renders..."
                    speed="normal"
                  />
                </div>
              )}
            </VStack>
          </Card>
        </div>

        {/* Loop Example */}
        <div>
          <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
            Continuous Loop
          </Text>
          <Card>
            <ThinkingText
              variant="processing"
              text="Processing your request..."
              speed="fast"
              loop
            />
          </Card>
        </div>

        {/* Without Cursor */}
        <div>
          <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
            Without Cursor
          </Text>
          <Card>
            <ThinkingText
              variant="generating"
              text="This text appears without a blinking cursor for a cleaner look."
              speed="normal"
              showCursor={false}
            />
          </Card>
        </div>
      </VStack>

      <Banner variant="info" style={{ marginTop: '24px' }}>
        <Text size="sm">
          <strong>AI Thinking Effects:</strong> Use ThinkingText to show AI
          processing states with animated indicators and typewriter effects.
          Perfect for chatbots and AI interfaces.
        </Text>
      </Banner>

      <Callout
        variant="tint"
        icon={<SparklesIcon />}
        style={{ marginTop: '16px' }}
      >
        <Text size="sm">
          <strong>Typewriter Effect:</strong> Text streams character by
          character with gradient animation and shimmer effects. Customize
          speed, add cursor, and loop for continuous display.
        </Text>
      </Callout>
    </section>
  )
}

function DemoContent() {
  const { toast } = useToast()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [newsletter, setNewsletter] = useState(false)
  const [theme, setTheme] = useState('light')
  const [bio, setBio] = useState('')
  const [message, setMessage] = useState('')
  const [country, setCountry] = useState('')
  const [priority, setPriority] = useState('')
  const [skills, setSkills] = useState<string[]>([])
  const [languages, setLanguages] = useState<string[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [volume, setVolume] = useState(50)
  const [brightness, setBrightness] = useState(75)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [birthDate, setBirthDate] = useState<Date | undefined>(undefined)
  const [eventDate, setEventDate] = useState<Date | undefined>(new Date())
  const [dateRange, setDateRange] = useState<{
    start: Date | undefined
    end: Date | undefined
  }>({ start: undefined, end: undefined })
  const [tripRange, setTripRange] = useState<{
    start: Date | undefined
    end: Date | undefined
  }>({ start: undefined, end: undefined })

  // Pagination states
  const [tablePageSize, setTablePageSize] = useState(5)

  // Table filter states
  const [tableSearch, setTableSearch] = useState('')
  const [statusFilters, setStatusFilters] = useState<string[]>([])
  const [roleFilters, setRoleFilters] = useState<string[]>([])
  const [tablePage, setTablePage] = useState(1)
  const [tableDataPageSize, setTableDataPageSize] = useState(8)

  // Stepper states
  const [checkoutStep, setCheckoutStep] = useState(0)
  const [onboardingStep, setOnboardingStep] = useState(1)

  // Modal states
  const [basicModal, setBasicModal] = useState(false)
  const [formModal, setFormModal] = useState(false)
  const [confirmModal, setConfirmModal] = useState(false)
  const [gradientModal, setGradientModal] = useState(false)
  const [largeModal, setLargeModal] = useState(false)
  const [fullscreenModal, setFullscreenModal] = useState(false)
  const [glassFrostModal, setGlassFrostModal] = useState(false)
  const [glassTintModal, setGlassTintModal] = useState(false)

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (emailError) setEmailError('')
  }

  const handleSubmit = () => {
    if (!email.includes('@')) {
      setEmailError('Please enter a valid email address')
      return
    }
    toast({
      title: 'Success!',
      description: 'Form submitted successfully',
      variant: 'success',
    })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const sections = [
    { id: 'color-palette', label: 'Color Palette' },
    { id: 'typography', label: 'Typography' },
    { id: 'buttons', label: 'Buttons' },
    { id: 'icon-buttons', label: 'Icon Buttons' },
    { id: 'inputs', label: 'Form Inputs' },
    { id: 'checkboxes', label: 'Checkboxes & Radio' },
    { id: 'switches', label: 'Switches' },
    { id: 'textareas', label: 'Textareas' },
    { id: 'select', label: 'Select Dropdown' },
    { id: 'multiselect', label: 'MultiSelect' },
    { id: 'sliders', label: 'Sliders' },
    { id: 'datepicker', label: 'Date Picker' },
    { id: 'avatars', label: 'Avatars' },
    { id: 'breadcrumbs', label: 'Breadcrumbs' },
    { id: 'draggable', label: 'Draggable List' },
    { id: 'thinking', label: 'AI Thinking Text' },
    { id: 'layouts', label: 'Layout Components' },
    { id: 'header', label: 'Header' },
    { id: 'sidenav', label: 'Side Navigation' },
    { id: 'badges', label: 'Status Badges' },
    { id: 'tabs', label: 'Tabs' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'hotspot', label: 'Hotspot' },
    { id: 'links', label: 'Links' },
    { id: 'lists', label: 'Lists' },
    { id: 'menus', label: 'Menus' },
    { id: 'meters', label: 'Meters' },
    { id: 'tables', label: 'Tables' },
    { id: 'panels', label: 'Panel Layouts' },
    { id: 'cards', label: 'Cards' },
    { id: 'accordions', label: 'Accordions' },
    { id: 'banners', label: 'Banners' },
    { id: 'callouts', label: 'Callouts' },
    { id: 'empty-states', label: 'Empty States' },
    { id: 'file-drop', label: 'File Drop' },
    { id: 'loading', label: 'Loading Indicators' },
    { id: 'stepper', label: 'Progress Stepper' },
    { id: 'modals', label: 'Modals' },
    { id: 'toasts', label: 'Toast Notifications' },
    { id: 'tooltips', label: 'Tooltips' },
  ]

  return (
    <div className="demo-container">
      {/* Sidebar Navigation */}
      <aside className="demo-sidebar">
        <div className="demo-sidebar__title">Components</div>
        <nav className="demo-sidebar__nav">
          {sections.map((section) => (
            <button
              key={section.id}
              className="demo-sidebar__link"
              onClick={() => scrollToSection(section.id)}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="demo-main">
        {/* Hero Section */}
        <section className="demo-header">
          <Text as="h1" size="xl" weight="bold" align="center">
            Bien UI Component Library
          </Text>
          <Text
            size="lg"
            tone="secondary"
            align="center"
            style={{ marginTop: '8px' }}
          >
            Production-ready React components with{' '}
            <Text as="span" tone="brand">
              token-first theming
            </Text>
          </Text>
          <div
            style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center',
              marginTop: '24px',
            }}
          >
            <Button variant="gradient-primary" size="lg">
              Get Started
            </Button>
            <Button variant="gradient-purple" size="lg">
              View Docs
            </Button>
          </div>
        </section>

        {/* Color Palette */}
        <section id="color-palette" className="demo-section">
          <Text size="lg" weight="semibold">
            🎨 Color Palette
          </Text>
          <Text size="sm" tone="secondary" style={{ marginBottom: '24px' }}>
            Our complete color system with hex values, RGB, and usage guidelines
          </Text>

          {/* Primary Colors */}
          <div style={{ marginBottom: '32px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Primary Colors
            </Text>
            <Grid columns={3} gap="md">
              <ColorSwatch
                name="Blue"
                hex="#1d75bc"
                rgb="rgb(29, 117, 188)"
                usage="Primary brand color. Used for buttons, links, and key UI elements."
              />
              <ColorSwatch
                name="Blue Dark"
                hex="#155a94"
                rgb="rgb(21, 90, 148)"
                usage="Hover states and darker accents for the primary blue color."
              />
              <ColorSwatch
                name="Teal"
                hex="#016d77"
                rgb="rgb(1, 109, 119)"
                usage="Secondary brand color. Used for alternate buttons and accents."
              />
            </Grid>
          </div>

          {/* Accent Colors */}
          <div style={{ marginBottom: '32px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Accent Colors
            </Text>
            <Grid columns={3} gap="md">
              <ColorSwatch
                name="Gold"
                hex="#e7c067"
                rgb="rgb(231, 192, 103)"
                usage="Accent color for highlights, badges, and special emphasis."
              />
              <ColorSwatch
                name="Purple"
                hex="#a94f9e"
                rgb="rgb(169, 79, 158)"
                usage="Creative accent. Used for special features and visual variety."
              />
              <ColorSwatch
                name="Purple Dark"
                hex="#8b3f85"
                rgb="rgb(139, 63, 133)"
                usage="Darker purple for hover states and depth in purple elements."
              />
            </Grid>
          </div>

          {/* Gradients */}
          <div style={{ marginBottom: '32px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Gradients
            </Text>
            <Grid columns={2} gap="md">
              <ColorSwatch
                name="Primary Gradient"
                hex="Blue → Blue Dark"
                gradient="linear-gradient(135deg, #1d75bc 0%, #155a94 100%)"
                usage="Primary gradient for buttons, cards, and modern UI elements."
              />
              <ColorSwatch
                name="Teal Gradient"
                hex="Teal → Teal Light"
                gradient="linear-gradient(135deg, #016d77 0%, #028c86 100%)"
                usage="Alternative gradient with teal brand colors for variety."
              />
              <ColorSwatch
                name="Purple Gradient"
                hex="Purple → Purple Dark"
                gradient="linear-gradient(135deg, #a94f9e 0%, #8b3f85 100%)"
                usage="Creative gradient for special sections and premium features."
              />
              <ColorSwatch
                name="Accent Gradient"
                hex="Gold → Gold Dark"
                gradient="linear-gradient(135deg, #e7c067 0%, #d4a574 100%)"
                usage="Warm gradient for highlights, promotions, and CTAs."
              />
            </Grid>
          </div>

          {/* Status Colors */}
          <div style={{ marginBottom: '32px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Status Colors
            </Text>
            <Grid columns={4} gap="md">
              <ColorSwatch
                name="Success"
                hex="#14b8a6"
                rgb="rgb(20, 184, 166)"
                usage="Success states, confirmations, and positive actions."
              />
              <ColorSwatch
                name="Warning"
                hex="#fbbf24"
                rgb="rgb(251, 191, 36)"
                usage="Warnings, caution messages, and important notices."
              />
              <ColorSwatch
                name="Error"
                hex="#d4183d"
                rgb="rgb(212, 24, 61)"
                usage="Errors, destructive actions, and validation failures."
              />
              <ColorSwatch
                name="Info"
                hex="#3b82f6"
                rgb="rgb(59, 130, 246)"
                usage="Informational messages and helpful tips."
              />
            </Grid>
          </div>

          {/* Text Colors */}
          <div style={{ marginBottom: '32px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Text Colors
            </Text>
            <Grid columns={4} gap="md">
              <ColorSwatch
                name="Text Primary"
                hex="#20282b"
                rgb="rgb(32, 40, 43)"
                usage="Main text color for headings, body text, and content."
              />
              <ColorSwatch
                name="Text Secondary"
                hex="#6b7280"
                rgb="rgb(107, 114, 128)"
                usage="Secondary text for descriptions and less important content."
              />
              <ColorSwatch
                name="Text Tertiary"
                hex="#9ca3af"
                rgb="rgb(156, 163, 175)"
                usage="Tertiary text for metadata, timestamps, and subtle text."
              />
              <ColorSwatch
                name="Text Inverse"
                hex="#ffffff"
                rgb="rgb(255, 255, 255)"
                usage="White text on dark backgrounds, buttons, and overlays."
              />
            </Grid>
          </div>

          {/* Background Colors */}
          <div style={{ marginBottom: '32px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Background Colors
            </Text>
            <Grid columns={3} gap="md">
              <ColorSwatch
                name="Background Base"
                hex="#ffffff"
                rgb="rgb(255, 255, 255)"
                usage="Primary background color for the application."
              />
              <ColorSwatch
                name="Background Subtle"
                hex="#faf8f5"
                rgb="rgb(250, 248, 245)"
                usage="Subtle background for alternating sections and cards."
              />
              <ColorSwatch
                name="Background Muted"
                hex="#e5e5e3"
                rgb="rgb(229, 229, 227)"
                usage="Muted background for disabled states and dividers."
              />
            </Grid>
          </div>

          {/* Border Colors */}
          <div>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Border Colors
            </Text>
            <Grid columns={3} gap="md">
              <ColorSwatch
                name="Border Base"
                hex="rgba(32, 40, 43, 0.18)"
                rgb="rgba(32, 40, 43, 0.18)"
                usage="Default border color for inputs, cards, and dividers."
              />
              <ColorSwatch
                name="Border Strong"
                hex="rgba(32, 40, 43, 0.3)"
                rgb="rgba(32, 40, 43, 0.3)"
                usage="Stronger borders for emphasis and active states."
              />
              <ColorSwatch
                name="Border Subtle"
                hex="rgba(32, 40, 43, 0.1)"
                rgb="rgba(32, 40, 43, 0.1)"
                usage="Subtle borders for minimal separation between elements."
              />
            </Grid>
          </div>
        </section>

        {/* Typography Showcase */}
        <section id="typography" className="demo-section">
          <Text size="lg" weight="semibold">
            ✨ Advanced Typography
          </Text>
          <Card>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
            >
              {/* Size Scale */}
              <div>
                <Text
                  size="sm"
                  weight="semibold"
                  tone="secondary"
                  style={{ marginBottom: '12px' }}
                >
                  Size Scale
                </Text>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  <Text size="4xl" weight="bold">
                    4xl Headline
                  </Text>
                  <Text size="3xl" weight="bold">
                    3xl Large Title
                  </Text>
                  <Text size="2xl" weight="semibold">
                    2xl Medium Title
                  </Text>
                  <Text size="xl" weight="semibold">
                    XL Heading
                  </Text>
                  <Text size="lg">Large Body Text</Text>
                  <Text size="md">Medium Body Text (Default)</Text>
                  <Text size="sm">Small Text</Text>
                  <Text size="xs">Extra Small Text</Text>
                </div>
              </div>

              {/* Gradient Text */}
              <div>
                <Text
                  size="sm"
                  weight="semibold"
                  tone="secondary"
                  style={{ marginBottom: '12px' }}
                >
                  Gradient Text
                </Text>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  <Text size="3xl" gradient="primary">
                    Teal Gradient Text
                  </Text>
                  <Text size="3xl" gradient="blue">
                    Blue Gradient Text
                  </Text>
                  <Text size="3xl" gradient="purple">
                    Purple Gradient Text
                  </Text>
                  <Text size="3xl" gradient="accent">
                    Gold Gradient Text
                  </Text>
                  <Text size="3xl" gradient="rainbow">
                    Rainbow Gradient Text
                  </Text>
                </div>
              </div>

              {/* Text Highlights */}
              <div>
                <Text
                  size="sm"
                  weight="semibold"
                  tone="secondary"
                  style={{ marginBottom: '12px' }}
                >
                  Text Highlights
                </Text>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <Text size="2xl">
                    Your achievements deserve more than a{' '}
                    <Text as="span" highlight highlightColor="blue">
                      bullet point
                    </Text>
                  </Text>
                  <Text size="lg">
                    Build amazing things with{' '}
                    <Text as="span" highlight highlightColor="purple">
                      powerful tools
                    </Text>{' '}
                    and{' '}
                    <Text as="span" highlight highlightColor="accent">
                      modern design
                    </Text>
                  </Text>
                </div>
              </div>

              {/* Text Transforms & Decorations */}
              <div>
                <Text
                  size="sm"
                  weight="semibold"
                  tone="secondary"
                  style={{ marginBottom: '12px' }}
                >
                  Transforms & Decorations
                </Text>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  <Text transform="uppercase" letterSpacing="wide">
                    uppercase with wide spacing
                  </Text>
                  <Text transform="capitalize">capitalize each word</Text>
                  <Text decoration="underline" tone="brand">
                    Underlined brand text
                  </Text>
                  <Text decoration="line-through" tone="tertiary">
                    Strikethrough text
                  </Text>
                  <Text italic tone="secondary">
                    Italic text style
                  </Text>
                </div>
              </div>

              {/* Font Weights */}
              <div>
                <Text
                  size="sm"
                  weight="semibold"
                  tone="secondary"
                  style={{ marginBottom: '12px' }}
                >
                  Font Weights
                </Text>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}
                >
                  <Text weight="light">Light (300)</Text>
                  <Text weight="normal">Normal (400)</Text>
                  <Text weight="medium">Medium (500)</Text>
                  <Text weight="semibold">Semibold (600)</Text>
                  <Text weight="bold">Bold (700)</Text>
                  <Text weight="extrabold">Extrabold (800)</Text>
                </div>
              </div>

              {/* Truncation */}
              <div>
                <Text
                  size="sm"
                  weight="semibold"
                  tone="secondary"
                  style={{ marginBottom: '12px' }}
                >
                  Text Truncation
                </Text>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <div>
                    <Text
                      size="xs"
                      tone="tertiary"
                      style={{ marginBottom: '4px' }}
                    >
                      Single line truncate:
                    </Text>
                    <Text truncate>
                      This is a very long text that will be truncated with an
                      ellipsis when it exceeds the container width. You won&apos;t
                      see the rest of this sentence.
                    </Text>
                  </div>
                  <div>
                    <Text
                      size="xs"
                      tone="tertiary"
                      style={{ marginBottom: '4px' }}
                    >
                      Multi-line clamp (3 lines):
                    </Text>
                    <Text maxLines={3}>
                      This is a longer paragraph that demonstrates the
                      multi-line clamping feature. The text will be cut off
                      after three lines and show an ellipsis. This is useful for
                      previewing content in cards, lists, or anywhere you need
                      to constrain text to a specific number of lines while
                      maintaining readability.
                    </Text>
                  </div>
                </div>
              </div>

              {/* Color Tones */}
              <div>
                <Text
                  size="sm"
                  weight="semibold"
                  tone="secondary"
                  style={{ marginBottom: '12px' }}
                >
                  Color Tones
                </Text>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}
                >
                  <Text tone="primary">Primary text color</Text>
                  <Text tone="secondary">Secondary text color</Text>
                  <Text tone="tertiary">Tertiary text color</Text>
                  <Text tone="brand">Brand teal color</Text>
                  <Text tone="accent">Accent gold color</Text>
                  <Text tone="purple">Purple color</Text>
                  <Text tone="success">Success color</Text>
                  <Text tone="warning">Warning color</Text>
                  <Text tone="error">Error color</Text>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Button Variants */}
        <section id="buttons" className="demo-section">
          <Text size="lg" weight="semibold">
            Solid Button Variants
          </Text>
          <div className="demo-grid">
            <Button variant="primary">Primary (Teal)</Button>
            <Button variant="blue">Blue</Button>
            <Button variant="accent">Accent (Gold)</Button>
            <Button variant="purple">Purple</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </section>

        {/* Gradient Buttons */}
        <section className="demo-section">
          <Text size="lg" weight="semibold">
            ✨ Gradient Buttons
          </Text>
          <div className="demo-grid">
            <Button variant="gradient-primary">Teal Gradient</Button>
            <Button variant="gradient-blue">Blue Gradient</Button>
            <Button variant="gradient-purple">Purple Gradient</Button>
            <Button variant="gradient-accent">Gold Gradient</Button>
            <Button variant="gradient-rainbow">Rainbow Gradient</Button>
          </div>
        </section>

        {/* Button Sizes */}
        <section className="demo-section">
          <Text size="lg" weight="semibold">
            Button Sizes
          </Text>
          <div className="demo-grid">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>

        {/* Button States */}
        <section className="demo-section">
          <Text size="lg" weight="semibold">
            Button States
          </Text>
          <div className="demo-grid">
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
            <Tooltip content="This button has a tooltip">
              <Button variant="secondary">With Tooltip</Button>
            </Tooltip>
          </div>
        </section>

        {/* Icon Buttons - Start Position */}
        <section id="icon-buttons" className="demo-section">
          <Text size="lg" weight="semibold">
            Icon Buttons (Icon Start)
          </Text>
          <div className="demo-grid">
            <Button variant="primary" icon={<PlusIcon />}>
              Add Item
            </Button>
            <Button variant="accent" icon={<DownloadIcon />}>
              Download
            </Button>
            <Button variant="gradient-primary" icon={<SendIcon />}>
              Send Message
            </Button>
            <Button variant="gradient-purple" icon={<SparklesIcon />}>
              Generate
            </Button>
            <Button variant="secondary" icon={<SearchIcon />}>
              Search
            </Button>
          </div>
        </section>

        {/* Icon Buttons - End Position */}
        <section className="demo-section">
          <Text size="lg" weight="semibold">
            Icon Buttons (Icon End)
          </Text>
          <div className="demo-grid">
            <Button
              variant="primary"
              icon={<ArrowRightIcon />}
              iconPosition="end"
            >
              Continue
            </Button>
            <Button
              variant="gradient-accent"
              icon={<ArrowRightIcon />}
              iconPosition="end"
            >
              Next Step
            </Button>
            <Button variant="purple" icon={<CheckIcon />} iconPosition="end">
              Confirm
            </Button>
          </div>
        </section>

        {/* Icon-Only Buttons */}
        <section className="demo-section">
          <Text size="lg" weight="semibold">
            Icon-Only Buttons
          </Text>
          <div
            style={{
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Tooltip content="Add">
              <Button variant="primary" icon={<PlusIcon />} iconOnly>
                Add
              </Button>
            </Tooltip>
            <Tooltip content="Like">
              <Button variant="accent" icon={<HeartIcon />} iconOnly>
                Like
              </Button>
            </Tooltip>
            <Tooltip content="Settings">
              <Button variant="secondary" icon={<SettingsIcon />} iconOnly>
                Settings
              </Button>
            </Tooltip>
            <Tooltip content="Delete">
              <Button variant="danger" icon={<TrashIcon />} iconOnly>
                Delete
              </Button>
            </Tooltip>
            <Tooltip content="Search">
              <Button variant="ghost" icon={<SearchIcon />} iconOnly>
                Search
              </Button>
            </Tooltip>
            <Tooltip content="Gradient Magic">
              <Button
                variant="gradient-rainbow"
                icon={<SparklesIcon />}
                iconOnly
              >
                Magic
              </Button>
            </Tooltip>
          </div>
          <Text size="sm" tone="secondary" style={{ marginTop: '12px' }}>
            Hover over icon-only buttons to see their tooltips
          </Text>
        </section>

        {/* Circle Icon Buttons */}
        <section className="demo-section">
          <Text size="lg" weight="semibold">
            Circle Icon Buttons
          </Text>
          <div style={{ marginBottom: '16px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Circle Shape Variant
            </Text>
            <div
              style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Tooltip content="Add">
                <Button
                  variant="primary"
                  icon={<PlusIcon />}
                  iconOnly
                  shape="circle"
                >
                  Add
                </Button>
              </Tooltip>
              <Tooltip content="Like">
                <Button
                  variant="accent"
                  icon={<HeartIcon />}
                  iconOnly
                  shape="circle"
                >
                  Like
                </Button>
              </Tooltip>
              <Tooltip content="Settings">
                <Button
                  variant="secondary"
                  icon={<SettingsIcon />}
                  iconOnly
                  shape="circle"
                >
                  Settings
                </Button>
              </Tooltip>
              <Tooltip content="Delete">
                <Button
                  variant="danger"
                  icon={<TrashIcon />}
                  iconOnly
                  shape="circle"
                >
                  Delete
                </Button>
              </Tooltip>
              <Tooltip content="Search">
                <Button
                  variant="ghost"
                  icon={<SearchIcon />}
                  iconOnly
                  shape="circle"
                >
                  Search
                </Button>
              </Tooltip>
              <Tooltip content="Send">
                <Button
                  variant="blue"
                  icon={<SendIcon />}
                  iconOnly
                  shape="circle"
                >
                  Send
                </Button>
              </Tooltip>
            </div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Circle Gradient Buttons
            </Text>
            <div
              style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Tooltip content="Gradient Magic">
                <Button
                  variant="gradient-rainbow"
                  icon={<SparklesIcon />}
                  iconOnly
                  shape="circle"
                >
                  Magic
                </Button>
              </Tooltip>
              <Tooltip content="Download">
                <Button
                  variant="gradient-primary"
                  icon={<DownloadIcon />}
                  iconOnly
                  shape="circle"
                >
                  Download
                </Button>
              </Tooltip>
              <Tooltip content="Upload">
                <Button
                  variant="gradient-teal"
                  icon={<PlusIcon />}
                  iconOnly
                  shape="circle"
                >
                  Upload
                </Button>
              </Tooltip>
              <Tooltip content="Premium">
                <Button
                  variant="gradient-purple"
                  icon={<SparklesIcon />}
                  iconOnly
                  shape="circle"
                >
                  Premium
                </Button>
              </Tooltip>
              <Tooltip content="Highlight">
                <Button
                  variant="gradient-accent"
                  icon={<CheckIcon />}
                  iconOnly
                  shape="circle"
                >
                  Highlight
                </Button>
              </Tooltip>
            </div>
          </div>

          <div>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Circle Button Sizes
            </Text>
            <div
              style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Tooltip content="Small">
                <Button
                  variant="primary"
                  icon={<PlusIcon />}
                  iconOnly
                  shape="circle"
                  size="sm"
                >
                  Small
                </Button>
              </Tooltip>
              <Tooltip content="Medium">
                <Button
                  variant="secondary"
                  icon={<HeartIcon />}
                  iconOnly
                  shape="circle"
                  size="md"
                >
                  Medium
                </Button>
              </Tooltip>
              <Tooltip content="Large">
                <Button
                  variant="accent"
                  icon={<SparklesIcon />}
                  iconOnly
                  shape="circle"
                  size="lg"
                >
                  Large
                </Button>
              </Tooltip>
            </div>
          </div>

          <Callout
            variant="info"
            icon={<SparklesIcon />}
            style={{ marginTop: '16px' }}
          >
            <Text size="sm">
              <strong>Circle Icon Buttons:</strong> Perfect for floating action
              buttons, toolbars, and modern interfaces. They scale smoothly on
              hover and provide excellent visual feedback.
            </Text>
          </Callout>
        </section>

        {/* Form Example */}
        <section id="inputs" className="demo-section">
          <Text size="lg" weight="semibold">
            Form Components
          </Text>
          <Card>
            <Text weight="semibold" style={{ marginBottom: '16px' }}>
              Sign In Form
            </Text>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <Input
                label="Email Address"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={handleEmailChange}
                error={emailError}
                required
              />
              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                hint="Must be at least 8 characters"
              />
              <Button onClick={handleSubmit} fullWidth>
                Sign In
              </Button>
            </div>
          </Card>
        </section>

        {/* Checkboxes */}
        <section id="checkboxes" className="demo-section">
          <Text size="lg" weight="semibold">
            Checkboxes
          </Text>
          <Card>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <Checkbox
                label="I agree to the terms and conditions"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                required
              />
              <Checkbox
                label="Enable notifications"
                hint="Receive updates about your account"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
              />
              <Checkbox
                label="Subscribe to newsletter"
                checked={newsletter}
                onChange={(e) => setNewsletter(e.target.checked)}
              />
              <Checkbox label="Disabled checkbox" disabled />
              <Checkbox
                label="Checkbox with error"
                error="This field is required"
              />
            </div>
          </Card>
        </section>

        {/* Radio Buttons */}
        <section className="demo-section">
          <Text size="lg" weight="semibold">
            Radio Buttons
          </Text>
          <Card>
            <RadioGroup
              label="Select your preferred theme"
              hint="This will affect how the app looks"
            >
              <Radio
                label="Light mode"
                name="themeChoice"
                value="light"
                checked={theme === 'light'}
                onChange={(e) => setTheme(e.target.value)}
              />
              <Radio
                label="Dark mode"
                name="themeChoice"
                value="dark"
                checked={theme === 'dark'}
                onChange={(e) => setTheme(e.target.value)}
              />
              <Radio
                label="System default"
                name="themeChoice"
                value="system"
                checked={theme === 'system'}
                onChange={(e) => setTheme(e.target.value)}
              />
            </RadioGroup>
          </Card>
        </section>

        {/* Switches */}
        <section id="switches" className="demo-section">
          <Text size="lg" weight="semibold">
            Switches
          </Text>
          <Card>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <Switch
                label="Default switch"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
              />
              <Switch
                label="Brand variant"
                hint="Uses the primary brand gradient"
                variant="brand"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
              />
              <Switch
                label="Accent variant"
                hint="Golden accent color"
                variant="accent"
                checked={newsletter}
                onChange={(e) => setNewsletter(e.target.checked)}
              />
              <Switch label="Purple variant" variant="purple" defaultChecked />
              <Switch label="Disabled switch" disabled />
            </div>
          </Card>
        </section>

        {/* Textarea */}
        <section id="textareas" className="demo-section">
          <Text size="lg" weight="semibold">
            Textarea
          </Text>
          <Card>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <Textarea
                label="Bio"
                placeholder="Tell us about yourself..."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                hint="Write a short bio for your profile"
                showCount
                maxLength={200}
              />
              <MarkdownTextarea
                label="Message"
                placeholder="Your message..."
                value={message}
                onChange={setMessage}
                hint="This textarea is not resizable"
                resize="none"
              />
            </div>
          </Card>
        </section>

        {/* Select */}
        <section id="select" className="demo-section">
          <Text size="lg" weight="semibold">
            Select Dropdown
          </Text>
          <Card>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <Select
                label="Country"
                placeholder="Select your country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                hint="Choose your country of residence"
                options={[
                  { value: 'us', label: 'United States' },
                  { value: 'uk', label: 'United Kingdom' },
                  { value: 'ca', label: 'Canada' },
                  { value: 'au', label: 'Australia' },
                  { value: 'de', label: 'Germany' },
                  { value: 'fr', label: 'France' },
                ]}
              />
              <Select
                label="Priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                options={[
                  { value: 'low', label: 'Low' },
                  { value: 'medium', label: 'Medium' },
                  { value: 'high', label: 'High' },
                  { value: 'urgent', label: 'Urgent', disabled: true },
                ]}
                error="This field is required"
              />
            </div>
          </Card>
        </section>

        {/* MultiSelect */}
        <section id="multiselect" className="demo-section">
          <Text size="lg" weight="semibold">
            MultiSelect Dropdown
          </Text>
          <Card>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <MultiSelect
                label="Skills"
                placeholder="Select your skills"
                value={skills}
                onChange={setSkills}
                hint="Choose all that apply"
                variant="primary"
                options={[
                  { value: 'javascript', label: 'JavaScript' },
                  { value: 'typescript', label: 'TypeScript' },
                  { value: 'react', label: 'React' },
                  { value: 'vue', label: 'Vue' },
                  { value: 'angular', label: 'Angular' },
                  { value: 'nodejs', label: 'Node.js' },
                  { value: 'python', label: 'Python' },
                  { value: 'java', label: 'Java' },
                ]}
              />
              <MultiSelect
                label="Languages (Accent Variant)"
                placeholder="Select languages"
                value={languages}
                onChange={setLanguages}
                hint="Purple gradient tags"
                variant="purple"
                options={[
                  { value: 'english', label: 'English' },
                  { value: 'spanish', label: 'Spanish' },
                  { value: 'french', label: 'French' },
                  { value: 'german', label: 'German' },
                  { value: 'chinese', label: 'Chinese' },
                  { value: 'japanese', label: 'Japanese' },
                  { value: 'korean', label: 'Korean' },
                  { value: 'portuguese', label: 'Portuguese' },
                ]}
              />
              <MultiSelect
                label="Tags (Limited to 3 visible)"
                placeholder="Select tags"
                value={tags}
                onChange={setTags}
                hint="Gold gradient tags with max display limit"
                variant="accent"
                maxTags={3}
                options={[
                  { value: 'frontend', label: 'Frontend' },
                  { value: 'backend', label: 'Backend' },
                  { value: 'fullstack', label: 'Fullstack' },
                  { value: 'devops', label: 'DevOps' },
                  { value: 'design', label: 'Design' },
                  { value: 'testing', label: 'Testing' },
                  { value: 'mobile', label: 'Mobile' },
                  { value: 'cloud', label: 'Cloud' },
                ]}
              />
            </div>
          </Card>
        </section>

        {/* Sliders */}
        <section id="sliders" className="demo-section">
          <Text size="lg" weight="semibold">
            Sliders
          </Text>
          <Card>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
            >
              <Slider
                label="Volume"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                hint="Adjust the audio volume"
              />
              <Slider
                label="Brightness (Teal Gradient)"
                variant="gradient-teal"
                value={brightness}
                onChange={(e) => setBrightness(Number(e.target.value))}
              />
              <Slider
                label="Purple Gradient"
                variant="gradient-purple"
                defaultValue={60}
              />
              <Slider
                label="Gold Gradient"
                variant="gradient-accent"
                defaultValue={40}
              />
              <Slider label="Disabled" disabled defaultValue={30} />
            </div>
          </Card>
        </section>

        {/* Date Picker */}
        <section id="datepicker" className="demo-section">
          <Text size="lg" weight="semibold">
            📅 Date Picker
          </Text>
          <Text size="sm" tone="secondary" style={{ marginBottom: '24px' }}>
            Select dates with a modern calendar interface
          </Text>

          <VStack gap="xl">
            {/* Basic Date Picker */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Basic Date Picker
              </Text>
              <Card>
                <VStack gap="md">
                  <div style={{ maxWidth: '300px' }}>
                    <DatePicker
                      value={selectedDate}
                      onChange={setSelectedDate}
                      placeholder="Select a date"
                    />
                  </div>
                  {selectedDate && (
                    <Text size="sm" tone="secondary">
                      Selected:{' '}
                      {selectedDate.toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </Text>
                  )}
                </VStack>
              </Card>
            </div>

            {/* With Date Restrictions */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                With Date Restrictions
              </Text>
              <Grid columns={2} gap="md">
                <Card>
                  <VStack gap="md">
                    <Text size="sm" weight="semibold">
                      Past Dates Only (Birth Date)
                    </Text>
                    <DatePicker
                      value={birthDate}
                      onChange={setBirthDate}
                      maxDate={new Date()}
                      placeholder="Select birth date"
                    />
                    {birthDate && (
                      <Text size="sm" tone="secondary">
                        Birth date: {birthDate.toLocaleDateString()}
                      </Text>
                    )}
                  </VStack>
                </Card>

                <Card>
                  <VStack gap="md">
                    <Text size="sm" weight="semibold">
                      Future Dates Only (Event)
                    </Text>
                    <DatePicker
                      value={eventDate}
                      onChange={setEventDate}
                      minDate={new Date()}
                      placeholder="Select event date"
                    />
                    {eventDate && (
                      <Text size="sm" tone="secondary">
                        Event date: {eventDate.toLocaleDateString()}
                      </Text>
                    )}
                  </VStack>
                </Card>
              </Grid>
            </div>

            {/* In Form Context */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Form Integration Example
              </Text>
              <Card>
                <VStack gap="md">
                  <Text weight="semibold">Schedule Meeting</Text>
                  <Grid columns={2} gap="md">
                    <div>
                      <label
                        style={{
                          display: 'block',
                          marginBottom: '8px',
                          fontSize: '14px',
                          fontWeight: 500,
                        }}
                      >
                        Meeting Date
                      </label>
                      <DatePicker
                        value={eventDate}
                        onChange={setEventDate}
                        minDate={new Date()}
                        placeholder="Select date"
                      />
                    </div>
                    <Input label="Meeting Title" placeholder="Team Sync" />
                  </Grid>
                  <Textarea
                    label="Agenda"
                    placeholder="Meeting topics..."
                    rows={3}
                  />
                  <HStack gap="sm" style={{ justifyContent: 'flex-end' }}>
                    <Button variant="ghost">Cancel</Button>
                    <Button variant="primary">Schedule Meeting</Button>
                  </HStack>
                </VStack>
              </Card>
            </div>

            {/* Date Range */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Date Range Selection
              </Text>
              <Grid columns={2} gap="md">
                <Card>
                  <VStack gap="md">
                    <Text size="sm" weight="semibold">
                      Vacation Dates
                    </Text>
                    <DatePicker
                      range
                      rangeValue={tripRange}
                      onRangeChange={setTripRange}
                      minDate={new Date()}
                      placeholder="Select date range"
                    />
                    {tripRange.start && tripRange.end && (
                      <Text size="sm" tone="secondary">
                        {Math.ceil(
                          (tripRange.end.getTime() -
                            tripRange.start.getTime()) /
                            (1000 * 60 * 60 * 24)
                        ) + 1}{' '}
                        days selected
                      </Text>
                    )}
                  </VStack>
                </Card>

                <Card>
                  <VStack gap="md">
                    <Text size="sm" weight="semibold">
                      Report Period
                    </Text>
                    <DatePicker
                      range
                      rangeValue={dateRange}
                      onRangeChange={setDateRange}
                      placeholder="Select period"
                    />
                    {dateRange.start && dateRange.end && (
                      <Text size="sm" tone="secondary">
                        From {dateRange.start.toLocaleDateString()} to{' '}
                        {dateRange.end.toLocaleDateString()}
                      </Text>
                    )}
                  </VStack>
                </Card>
              </Grid>
            </div>

            {/* States */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                States
              </Text>
              <Grid columns={2} gap="md">
                <Card>
                  <VStack gap="md">
                    <Text size="sm" weight="semibold">
                      Default
                    </Text>
                    <DatePicker
                      value={undefined}
                      onChange={() => {}}
                      placeholder="Select a date"
                    />
                  </VStack>
                </Card>

                <Card>
                  <VStack gap="md">
                    <Text size="sm" weight="semibold">
                      Disabled
                    </Text>
                    <DatePicker
                      value={new Date()}
                      onChange={() => {}}
                      disabled
                    />
                  </VStack>
                </Card>
              </Grid>
            </div>
          </VStack>

          <Banner variant="info" style={{ marginTop: '24px' }}>
            <Text size="sm">
              <strong>Quick Month/Year Switching:</strong> Click the month or
              year in the header to quickly jump to any month or year. Range
              start/end dates are highlighted with a solid gradient.
            </Text>
          </Banner>

          <Callout
            variant="tint"
            icon={<SparklesIcon />}
            style={{ marginTop: '16px' }}
          >
            <Text size="sm">
              <strong>Date Ranges:</strong> Use the range prop to enable date
              range selection. Click once for start date, click again for end
              date. Perfect for bookings, reports, and date filters!
            </Text>
          </Callout>
        </section>

        {/* Avatars */}
        <section id="avatars" className="demo-section">
          <Text size="lg" weight="semibold">
            👤 Avatars
          </Text>
          <Text size="sm" tone="secondary" style={{ marginBottom: '24px' }}>
            Represent users and groups with images, initials, or icons
          </Text>

          <VStack gap="xl">
            {/* Sizes */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Avatar Sizes
              </Text>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  <Avatar name="Alice Johnson" size="xs" />
                  <Avatar name="Bob Smith" size="sm" />
                  <Avatar name="Charlie Davis" size="md" />
                  <Avatar name="Diana Prince" size="lg" />
                  <Avatar name="Ethan Hunt" size="xl" />
                  <Avatar name="Fiona Green" size="2xl" />
                </div>
              </Card>
            </div>

            {/* With Images */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                With Profile Images
              </Text>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  <Avatar
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                    alt="John Doe"
                    size="md"
                  />
                  <Avatar
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                    alt="Jane Smith"
                    size="md"
                  />
                  <Avatar
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
                    alt="Mike Wilson"
                    size="md"
                  />
                  <Avatar
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                    alt="Sarah Johnson"
                    size="md"
                  />
                </div>
              </Card>
            </div>

            {/* Initials */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Initials Fallback
              </Text>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  <Avatar name="Alice Johnson" size="md" />
                  <Avatar name="Bob Smith" size="md" />
                  <Avatar name="Charlie Davis" size="md" />
                  <Avatar name="Diana Prince" size="md" />
                  <Avatar name="Ethan Hunt" size="md" />
                  <Avatar name="Fiona Green" size="md" />
                </div>
                <Text size="sm" tone="secondary" style={{ marginTop: '12px' }}>
                  Each avatar gets a unique color based on the name
                </Text>
              </Card>
            </div>

            {/* Status Indicators */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Status Indicators
              </Text>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  <Avatar
                    name="Alice Johnson"
                    size="lg"
                    showStatus
                    status="online"
                  />
                  <Avatar
                    name="Bob Smith"
                    size="lg"
                    showStatus
                    status="offline"
                  />
                  <Avatar
                    name="Charlie Davis"
                    size="lg"
                    showStatus
                    status="away"
                  />
                  <Avatar
                    name="Diana Prince"
                    size="lg"
                    showStatus
                    status="busy"
                  />
                </div>
              </Card>
            </div>

            {/* Shapes */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Shapes
              </Text>
              <Grid columns={2} gap="md">
                <Card>
                  <VStack gap="md">
                    <Text size="sm" weight="semibold">
                      Circle (Default)
                    </Text>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <Avatar name="Alice Johnson" size="lg" shape="circle" />
                      <Avatar
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                        alt="John"
                        size="lg"
                        shape="circle"
                      />
                    </div>
                  </VStack>
                </Card>
                <Card>
                  <VStack gap="md">
                    <Text size="sm" weight="semibold">
                      Square
                    </Text>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <Avatar name="Bob Smith" size="lg" shape="square" />
                      <Avatar
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                        alt="Jane"
                        size="lg"
                        shape="square"
                      />
                    </div>
                  </VStack>
                </Card>
              </Grid>
            </div>

            {/* With Icons (for groups/teams) */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Icon Avatars (Groups/Teams)
              </Text>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  <Avatar icon={<UsersIcon />} size="md" />
                  <Avatar icon={<FolderIcon />} size="md" />
                  <Avatar icon={<SettingsIcon />} size="md" />
                  <Avatar icon={<SparklesIcon />} size="md" />
                </div>
              </Card>
            </div>

            {/* Avatar Groups */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Avatar Groups
              </Text>
              <VStack gap="md">
                <Card>
                  <VStack gap="md">
                    <Text size="sm" weight="semibold">
                      Team Members (Max 3)
                    </Text>
                    <AvatarGroup max={3}>
                      <Avatar name="Alice Johnson" size="md" />
                      <Avatar name="Bob Smith" size="md" />
                      <Avatar name="Charlie Davis" size="md" />
                      <Avatar name="Diana Prince" size="md" />
                      <Avatar name="Ethan Hunt" size="md" />
                    </AvatarGroup>
                    <Text size="sm" tone="secondary">
                      5 team members total
                    </Text>
                  </VStack>
                </Card>

                <Card>
                  <VStack gap="md">
                    <Text size="sm" weight="semibold">
                      Project Contributors (Max 5)
                    </Text>
                    <AvatarGroup max={5} size="lg">
                      <Avatar
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                        alt="John"
                        size="lg"
                      />
                      <Avatar
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                        alt="Jane"
                        size="lg"
                      />
                      <Avatar name="Mike Wilson" size="lg" />
                      <Avatar name="Sarah Johnson" size="lg" />
                      <Avatar name="Tom Anderson" size="lg" />
                      <Avatar name="Emma Davis" size="lg" />
                      <Avatar name="Chris Martin" size="lg" />
                    </AvatarGroup>
                    <Text size="sm" tone="secondary">
                      7 contributors
                    </Text>
                  </VStack>
                </Card>
              </VStack>
            </div>

            {/* Use Cases */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Real-World Examples
              </Text>
              <VStack gap="md">
                <Card>
                  <HStack gap="md">
                    <Avatar
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                      alt="John Doe"
                      size="lg"
                      showStatus
                      status="online"
                    />
                    <div style={{ flex: 1 }}>
                      <Text weight="semibold">John Doe</Text>
                      <Text size="sm" tone="secondary">
                        Product Designer
                      </Text>
                      <Badge
                        variant="primary"
                        size="sm"
                        style={{ marginTop: '4px' }}
                      >
                        Pro Member
                      </Badge>
                    </div>
                    <Button variant="primary" size="sm">
                      Message
                    </Button>
                  </HStack>
                </Card>

                <Card>
                  <VStack gap="md">
                    <HStack gap="md">
                      <Avatar icon={<FolderIcon />} size="lg" shape="square" />
                      <div style={{ flex: 1 }}>
                        <Text weight="semibold">Design System Project</Text>
                        <Text size="sm" tone="secondary">
                          Updated 2 hours ago
                        </Text>
                      </div>
                    </HStack>
                    <Divider />
                    <HStack gap="sm">
                      <Text size="sm" tone="secondary">
                        Team:
                      </Text>
                      <AvatarGroup max={4} size="sm">
                        <Avatar name="Alice Johnson" size="sm" />
                        <Avatar name="Bob Smith" size="sm" />
                        <Avatar name="Charlie Davis" size="sm" />
                        <Avatar name="Diana Prince" size="sm" />
                        <Avatar name="Ethan Hunt" size="sm" />
                      </AvatarGroup>
                    </HStack>
                  </VStack>
                </Card>
              </VStack>
            </div>

            {/* Profile Avatars */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Profile Avatar Variant
              </Text>
              <VStack gap="md">
                <Card>
                  <Text
                    size="sm"
                    weight="semibold"
                    style={{ marginBottom: '12px' }}
                  >
                    Profile Sizes
                  </Text>
                  <div
                    style={{
                      display: 'flex',
                      gap: '24px',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                    }}
                  >
                    <ProfileAvatar
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
                      alt="Profile"
                      size="md"
                    />
                    <ProfileAvatar
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop"
                      alt="Profile"
                      size="lg"
                    />
                    <ProfileAvatar
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
                      alt="Profile"
                      size="xl"
                    />
                    <ProfileAvatar
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
                      alt="Profile"
                      size="2xl"
                    />
                  </div>
                </Card>

                <Card>
                  <Text
                    size="sm"
                    weight="semibold"
                    style={{ marginBottom: '12px' }}
                  >
                    With Edit Button
                  </Text>
                  <div
                    style={{
                      display: 'flex',
                      gap: '24px',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                    }}
                  >
                    <ProfileAvatar
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
                      alt="Profile"
                      size="lg"
                      editable
                      onEdit={() =>
                        toast({
                          title: 'Edit profile picture',
                          variant: 'info',
                        })
                      }
                    />
                    <ProfileAvatar
                      name="Sarah Johnson"
                      size="lg"
                      editable
                      onEdit={() =>
                        toast({ title: 'Upload new photo', variant: 'info' })
                      }
                    />
                  </div>
                </Card>

                <Card>
                  <Text
                    size="sm"
                    weight="semibold"
                    style={{ marginBottom: '12px' }}
                  >
                    With Status Ring
                  </Text>
                  <div
                    style={{
                      display: 'flex',
                      gap: '24px',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                    }}
                  >
                    <ProfileAvatar
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
                      alt="Online User"
                      size="xl"
                      ring
                      ringColor="brand"
                      showStatus
                      status="online"
                    />
                    <ProfileAvatar
                      name="Alice Johnson"
                      size="xl"
                      ring
                      ringColor="success"
                      showStatus
                      status="online"
                    />
                    <ProfileAvatar
                      name="Bob Smith"
                      size="xl"
                      ring
                      ringColor="warning"
                      showStatus
                      status="away"
                    />
                  </div>
                </Card>

                <Card>
                  <Text
                    size="sm"
                    weight="semibold"
                    style={{ marginBottom: '12px' }}
                  >
                    With Badge
                  </Text>
                  <div
                    style={{
                      display: 'flex',
                      gap: '24px',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                    }}
                  >
                    <ProfileAvatar
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
                      alt="Premium User"
                      size="xl"
                      badge={
                        <Badge variant="ai" size="sm" icon={<SparklesIcon />}>
                          Pro
                        </Badge>
                      }
                    />
                    <ProfileAvatar
                      name="John Smith"
                      size="xl"
                      badge={
                        <Badge variant="success" size="sm" icon={<CheckIcon />}>
                          Verified
                        </Badge>
                      }
                    />
                  </div>
                </Card>

                <Card>
                  <Text
                    size="sm"
                    weight="semibold"
                    style={{ marginBottom: '12px' }}
                  >
                    Square Shape
                  </Text>
                  <div
                    style={{
                      display: 'flex',
                      gap: '24px',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                    }}
                  >
                    <ProfileAvatar
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
                      alt="Profile"
                      size="lg"
                      shape="square"
                    />
                    <ProfileAvatar
                      name="Brand Logo"
                      size="lg"
                      shape="square"
                      ring
                      ringColor="brand"
                    />
                  </div>
                </Card>
              </VStack>
            </div>

            {/* Profile Header Example */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Profile Header Example
              </Text>
              <Card>
                <VStack
                  gap="lg"
                  style={{ alignItems: 'center', textAlign: 'center' }}
                >
                  <ProfileAvatar
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
                    alt="John Doe"
                    size="2xl"
                    ring
                    ringColor="brand"
                    editable
                    onEdit={() =>
                      toast({
                        title: 'Change profile picture',
                        variant: 'info',
                      })
                    }
                    badge={
                      <Badge variant="ai" icon={<SparklesIcon />}>
                        Pro
                      </Badge>
                    }
                  />
                  <VStack gap="xs" style={{ alignItems: 'center' }}>
                    <Text size="lg" weight="semibold">
                      John Doe
                    </Text>
                    <Text tone="secondary">Senior Product Designer</Text>
                    <HStack gap="xs" style={{ marginTop: '8px' }}>
                      <Badge variant="primary" size="sm">
                        Premium
                      </Badge>
                      <Badge variant="success" size="sm" dot>
                        Online
                      </Badge>
                    </HStack>
                  </VStack>
                  <HStack gap="sm">
                    <Button variant="primary" icon={<MessageIcon />}>
                      Message
                    </Button>
                    <Button variant="secondary" icon={<UsersIcon />}>
                      Follow
                    </Button>
                  </HStack>
                </VStack>
              </Card>
            </div>
          </VStack>

          <Banner variant="info" style={{ marginTop: '24px' }}>
            <Text size="sm">
              <strong>Profile Variant Features:</strong> Larger sizes,
              decorative rings, edit buttons with gradient, status indicators,
              and badge support for verified/premium users.
            </Text>
          </Banner>

          <Callout
            variant="tint"
            icon={<SparklesIcon />}
            style={{ marginTop: '16px' }}
          >
            <Text size="sm">
              <strong>Ring Colors:</strong> Add colored rings around profile
              avatars for visual emphasis. Choose from brand (blue-teal),
              success (green), warning (orange), or error (red) rings.
            </Text>
          </Callout>
        </section>

        {/* Breadcrumbs */}
        <section id="breadcrumbs" className="demo-section">
          <Text size="lg" weight="semibold">
            🧭 Breadcrumbs
          </Text>
          <VStack gap="lg">
            {/* Basic Breadcrumbs */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Basic Breadcrumbs
              </Text>
              <VStack gap="md">
                <Card>
                  <Text
                    size="sm"
                    weight="semibold"
                    style={{ marginBottom: '12px' }}
                  >
                    Separator Styles
                  </Text>
                  <VStack gap="lg">
                    <div>
                      <Text
                        size="xs"
                        tone="secondary"
                        style={{ marginBottom: '8px' }}
                      >
                        Chevron (Default)
                      </Text>
                      <Breadcrumb
                        items={[
                          { label: 'Home', href: '#' },
                          { label: 'Products', href: '#' },
                          { label: 'Electronics', href: '#' },
                          { label: 'Laptops' },
                        ]}
                        separator="chevron"
                      />
                    </div>
                    <div>
                      <Text
                        size="xs"
                        tone="secondary"
                        style={{ marginBottom: '8px' }}
                      >
                        Slash
                      </Text>
                      <Breadcrumb
                        items={[
                          { label: 'Home', href: '#' },
                          { label: 'Products', href: '#' },
                          { label: 'Electronics', href: '#' },
                          { label: 'Laptops' },
                        ]}
                        separator="slash"
                      />
                    </div>
                    <div>
                      <Text
                        size="xs"
                        tone="secondary"
                        style={{ marginBottom: '8px' }}
                      >
                        Dot
                      </Text>
                      <Breadcrumb
                        items={[
                          { label: 'Home', href: '#' },
                          { label: 'Products', href: '#' },
                          { label: 'Electronics', href: '#' },
                          { label: 'Laptops' },
                        ]}
                        separator="dot"
                      />
                    </div>
                  </VStack>
                </Card>

                <Card>
                  <Text
                    size="sm"
                    weight="semibold"
                    style={{ marginBottom: '12px' }}
                  >
                    Sizes
                  </Text>
                  <VStack gap="lg">
                    <div>
                      <Text
                        size="xs"
                        tone="secondary"
                        style={{ marginBottom: '8px' }}
                      >
                        Small
                      </Text>
                      <Breadcrumb
                        items={[
                          { label: 'Dashboard', href: '#' },
                          { label: 'Analytics', href: '#' },
                          { label: 'Reports' },
                        ]}
                        size="sm"
                      />
                    </div>
                    <div>
                      <Text
                        size="xs"
                        tone="secondary"
                        style={{ marginBottom: '8px' }}
                      >
                        Medium
                      </Text>
                      <Breadcrumb
                        items={[
                          { label: 'Dashboard', href: '#' },
                          { label: 'Analytics', href: '#' },
                          { label: 'Reports' },
                        ]}
                        size="md"
                      />
                    </div>
                    <div>
                      <Text
                        size="xs"
                        tone="secondary"
                        style={{ marginBottom: '8px' }}
                      >
                        Large
                      </Text>
                      <Breadcrumb
                        items={[
                          { label: 'Dashboard', href: '#' },
                          { label: 'Analytics', href: '#' },
                          { label: 'Reports' },
                        ]}
                        size="lg"
                      />
                    </div>
                  </VStack>
                </Card>
              </VStack>
            </div>

            {/* With Icons */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                With Icons
              </Text>
              <Card>
                <VStack gap="lg">
                  <Breadcrumb
                    items={[
                      { label: 'Home', href: '#', icon: <HomeIcon /> },
                      { label: 'Settings', href: '#', icon: <SettingsIcon /> },
                      { label: 'Profile', icon: <UserIcon /> },
                    ]}
                  />
                  <Breadcrumb
                    items={[
                      {
                        label: 'Dashboard',
                        href: '#',
                        icon: <LayoutDashboardIcon />,
                      },
                      { label: 'Projects', href: '#', icon: <FolderIcon /> },
                      { label: 'Website Redesign', icon: <FileIcon /> },
                    ]}
                    size="lg"
                  />
                </VStack>
              </Card>
            </div>

            {/* Truncated Breadcrumbs */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Truncated (Long Paths)
              </Text>
              <Card>
                <VStack gap="lg">
                  <div>
                    <Text
                      size="xs"
                      tone="secondary"
                      style={{ marginBottom: '8px' }}
                    >
                      Max 4 items (shows first and last 3)
                    </Text>
                    <Breadcrumb
                      items={[
                        { label: 'Home', href: '#' },
                        { label: 'Products', href: '#' },
                        { label: 'Categories', href: '#' },
                        { label: 'Electronics', href: '#' },
                        { label: 'Computers', href: '#' },
                        { label: 'Laptops', href: '#' },
                        { label: 'Gaming Laptops' },
                      ]}
                      maxItems={4}
                    />
                  </div>
                  <div>
                    <Text
                      size="xs"
                      tone="secondary"
                      style={{ marginBottom: '8px' }}
                    >
                      Max 3 items
                    </Text>
                    <Breadcrumb
                      items={[
                        { label: 'Root', href: '#' },
                        { label: 'Level 1', href: '#' },
                        { label: 'Level 2', href: '#' },
                        { label: 'Level 3', href: '#' },
                        { label: 'Level 4', href: '#' },
                        { label: 'Current Page' },
                      ]}
                      maxItems={3}
                    />
                  </div>
                </VStack>
              </Card>
            </div>

            {/* Real-World Examples */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Real-World Examples
              </Text>
              <VStack gap="md">
                <Card>
                  <Text
                    size="sm"
                    weight="semibold"
                    style={{ marginBottom: '12px' }}
                  >
                    E-commerce Navigation
                  </Text>
                  <Breadcrumb
                    items={[
                      { label: 'Home', href: '#', icon: <HomeIcon /> },
                      { label: 'Men', href: '#' },
                      { label: 'Clothing', href: '#' },
                      { label: 'T-Shirts', href: '#' },
                      { label: 'Graphic Tees' },
                    ]}
                    onNavigate={(item) => {
                      toast({
                        title: `Navigating to ${item.label}`,
                        variant: 'info',
                      })
                    }}
                  />
                </Card>

                <Card>
                  <Text
                    size="sm"
                    weight="semibold"
                    style={{ marginBottom: '12px' }}
                  >
                    File System
                  </Text>
                  <Breadcrumb
                    items={[
                      { label: 'Documents', href: '#', icon: <FolderIcon /> },
                      { label: 'Projects', href: '#', icon: <FolderIcon /> },
                      { label: '2024', href: '#', icon: <FolderIcon /> },
                      { label: 'Q1', href: '#', icon: <FolderIcon /> },
                      { label: 'report.pdf', icon: <FileIcon /> },
                    ]}
                    separator="slash"
                    size="sm"
                  />
                </Card>

                <Card>
                  <Text
                    size="sm"
                    weight="semibold"
                    style={{ marginBottom: '12px' }}
                  >
                    Admin Dashboard
                  </Text>
                  <Breadcrumb
                    items={[
                      {
                        label: 'Dashboard',
                        href: '#',
                        icon: <LayoutDashboardIcon />,
                      },
                      { label: 'Users', href: '#', icon: <UsersIcon /> },
                      { label: 'Active Users', href: '#' },
                      { label: 'John Doe', icon: <UserIcon /> },
                    ]}
                    size="lg"
                  />
                </Card>
              </VStack>
            </div>
          </VStack>

          <Banner variant="info" style={{ marginTop: '24px' }}>
            <Text size="sm">
              <strong>Navigation Aid:</strong> Breadcrumbs help users understand
              their location in a hierarchy and navigate back to parent pages.
              The last item is automatically styled as the current page.
            </Text>
          </Banner>

          <Callout
            variant="tint"
            icon={<SparklesIcon />}
            style={{ marginTop: '16px' }}
          >
            <Text size="sm">
              <strong>Truncation:</strong> Use maxItems to automatically
              collapse long paths with an ellipsis. This keeps the breadcrumb
              readable while showing the first and last items for context.
            </Text>
          </Callout>
        </section>

        {/* Draggable List */}
        <DraggableListDemo />

        {/* AI Thinking Text */}
        <ThinkingTextDemo />

        {/* Layout Components */}
        <section id="layouts" className="demo-section">
          <Text size="lg" weight="semibold">
            ✨ Layout Components
          </Text>

          {/* Container */}
          <div style={{ marginBottom: '24px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Container
            </Text>
            <Card>
              <VStack gap="md">
                <Text tone="secondary" size="sm">
                  Container centers content with max-width constraints
                </Text>
                <Container
                  size="md"
                  padding="md"
                  style={{
                    background: 'var(--color-bg-subtle)',
                    borderRadius: 'var(--radius-md)',
                  }}
                >
                  <Text align="center">Medium Container (768px max-width)</Text>
                </Container>
                <Container
                  size="sm"
                  padding="sm"
                  style={{
                    background: 'var(--color-bg-subtle)',
                    borderRadius: 'var(--radius-md)',
                  }}
                >
                  <Text align="center">Small Container (640px)</Text>
                </Container>
              </VStack>
            </Card>
          </div>

          {/* Grid */}
          <div style={{ marginBottom: '24px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Grid Layout
            </Text>
            <Card>
              <VStack gap="lg">
                <div>
                  <Text
                    tone="secondary"
                    size="sm"
                    style={{ marginBottom: '8px' }}
                  >
                    Auto-responsive grid (adapts to screen size):
                  </Text>
                  <Grid gap="md">
                    <Card variant="outlined" padding="md">
                      <Text align="center">Item 1</Text>
                    </Card>
                    <Card variant="outlined" padding="md">
                      <Text align="center">Item 2</Text>
                    </Card>
                    <Card variant="outlined" padding="md">
                      <Text align="center">Item 3</Text>
                    </Card>
                    <Card variant="outlined" padding="md">
                      <Text align="center">Item 4</Text>
                    </Card>
                  </Grid>
                </div>

                <div>
                  <Text
                    tone="secondary"
                    size="sm"
                    style={{ marginBottom: '8px' }}
                  >
                    Fixed 3-column grid:
                  </Text>
                  <Grid columns={3} gap="sm">
                    <Card gradient="primary" padding="sm">
                      <Text align="center" size="sm">
                        Col 1
                      </Text>
                    </Card>
                    <Card gradient="purple" padding="sm">
                      <Text align="center" size="sm">
                        Col 2
                      </Text>
                    </Card>
                    <Card gradient="accent" padding="sm">
                      <Text align="center" size="sm">
                        Col 3
                      </Text>
                    </Card>
                  </Grid>
                </div>
              </VStack>
            </Card>
          </div>

          {/* Stack */}
          <div style={{ marginBottom: '24px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Stack (VStack / HStack)
            </Text>
            <Card>
              <VStack gap="lg">
                <div>
                  <Text
                    tone="secondary"
                    size="sm"
                    style={{ marginBottom: '8px' }}
                  >
                    Vertical Stack (VStack):
                  </Text>
                  <VStack gap="sm">
                    <Button variant="primary" fullWidth>
                      First Button
                    </Button>
                    <Button variant="secondary" fullWidth>
                      Second Button
                    </Button>
                    <Button variant="accent" fullWidth>
                      Third Button
                    </Button>
                  </VStack>
                </div>

                <Divider />

                <div>
                  <Text
                    tone="secondary"
                    size="sm"
                    style={{ marginBottom: '8px' }}
                  >
                    Horizontal Stack (HStack) with alignment:
                  </Text>
                  <HStack gap="md" align="center" justify="space-between">
                    <Text weight="semibold">Logo</Text>
                    <HStack gap="sm">
                      <Button size="sm" variant="ghost">
                        About
                      </Button>
                      <Button size="sm" variant="ghost">
                        Contact
                      </Button>
                      <Button size="sm" variant="primary">
                        Sign In
                      </Button>
                    </HStack>
                  </HStack>
                </div>
              </VStack>
            </Card>
          </div>

          {/* Divider */}
          <div style={{ marginBottom: '24px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Dividers
            </Text>
            <Card>
              <VStack gap="lg">
                <div>
                  <Text tone="secondary" size="sm">
                    Solid divider:
                  </Text>
                  <Divider spacing="sm" />
                  <Text tone="secondary" size="sm">
                    Default spacing
                  </Text>
                </div>

                <div>
                  <Text tone="secondary" size="sm">
                    Dashed divider:
                  </Text>
                  <Divider variant="dashed" spacing="md" />
                  <Text tone="secondary" size="sm">
                    Medium spacing
                  </Text>
                </div>

                <div>
                  <Text tone="secondary" size="sm">
                    Gradient divider with label:
                  </Text>
                  <Divider gradient label="OR" spacing="lg" />
                  <Text tone="secondary" size="sm">
                    Perfect for login forms
                  </Text>
                </div>

                <div>
                  <Text tone="secondary" size="sm">
                    Thick divider:
                  </Text>
                  <Divider thickness="thick" spacing="md" />
                  <Text tone="secondary" size="sm">
                    More prominent separation
                  </Text>
                </div>

                <HStack gap="md" align="center">
                  <Button variant="primary">Left Button</Button>
                  <Divider
                    orientation="vertical"
                    spacing="none"
                    style={{ height: '40px' }}
                  />
                  <Button variant="secondary">Right Button</Button>
                </HStack>
              </VStack>
            </Card>
          </div>

          {/* Spacer */}
          <div style={{ marginBottom: '24px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Spacer
            </Text>
            <Card>
              <VStack gap="sm">
                <Text tone="secondary" size="sm">
                  Spacers add flexible spacing between elements:
                </Text>
                <HStack gap="none">
                  <Card variant="outlined" padding="sm">
                    <Text size="sm">Left</Text>
                  </Card>
                  <Spacer size="md" axis="horizontal" />
                  <Card variant="outlined" padding="sm">
                    <Text size="sm">Right</Text>
                  </Card>
                </HStack>

                <Text tone="secondary" size="sm">
                  Vertical spacer:
                </Text>
                <Card variant="outlined" padding="sm">
                  <Text size="sm">Top Content</Text>
                </Card>
                <Spacer size="xl" />
                <Card variant="outlined" padding="sm">
                  <Text size="sm">Bottom Content (with XL space above)</Text>
                </Card>
              </VStack>
            </Card>
          </div>

          {/* Section */}
          <div>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Section
            </Text>
            <Card>
              <VStack gap="md">
                <Text tone="secondary" size="sm">
                  Section components wrap content with padding and background
                  options:
                </Text>

                <Section padding="md" background="subtle">
                  <Container size="md">
                    <Text align="center" weight="semibold">
                      Subtle Background Section
                    </Text>
                    <Text
                      align="center"
                      size="sm"
                      tone="secondary"
                      style={{ marginTop: '8px' }}
                    >
                      Perfect for alternating content sections
                    </Text>
                  </Container>
                </Section>

                <Section padding="lg" background="gradient-primary">
                  <Container size="md">
                    <Text align="center" weight="semibold">
                      Gradient Section
                    </Text>
                    <Text align="center" size="sm" style={{ marginTop: '8px' }}>
                      Eye-catching hero or CTA sections
                    </Text>
                  </Container>
                </Section>
              </VStack>
            </Card>
          </div>
        </section>

        {/* Header */}
        <section id="header" className="demo-section">
          <Text size="lg" weight="semibold">
            ✨ Header Component
          </Text>

          <VStack gap="xl">
            {/* Default Header */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Default Header
              </Text>
              <Card padding="none">
                <Header
                  logoText="Bien UI"
                  navigation={[
                    { label: 'Home', active: true },
                    { label: 'Products', href: '#' },
                    { label: 'Pricing', href: '#' },
                    { label: 'About', href: '#' },
                  ]}
                  actions={
                    <HStack gap="sm">
                      <Button variant="ghost" size="sm">
                        Sign In
                      </Button>
                      <Button variant="primary" size="sm">
                        Get Started
                      </Button>
                    </HStack>
                  }
                />
              </Card>
            </div>

            {/* Gradient Header */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Gradient Header
              </Text>
              <Card padding="none">
                <Header
                  variant="gradient"
                  logoText="Bien UI"
                  navigation={[
                    { label: 'Dashboard', active: true },
                    { label: 'Analytics', href: '#' },
                    { label: 'Reports', href: '#' },
                    { label: 'Settings', href: '#' },
                  ]}
                  actions={
                    <HStack gap="sm">
                      <Button variant="secondary" size="sm">
                        <SettingsIcon />
                      </Button>
                      <Button variant="secondary" size="sm">
                        Profile
                      </Button>
                    </HStack>
                  }
                />
              </Card>
            </div>

            {/* With Custom Logo */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                With Custom Logo
              </Text>
              <Card padding="none">
                <Header
                  logo={
                    <HStack gap="sm" align="center">
                      <SparklesIcon />
                      <Text size="lg" weight="bold" gradient="primary">
                        MyApp
                      </Text>
                    </HStack>
                  }
                  navigation={[
                    { label: 'Features', href: '#' },
                    { label: 'Docs', href: '#' },
                    { label: 'Blog', href: '#' },
                  ]}
                  actions={
                    <Button variant="gradient-primary" size="sm">
                      Launch App
                    </Button>
                  }
                />
              </Card>
            </div>

            {/* With Search */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                With Search Bar
              </Text>
              <Card padding="none">
                <Header
                  logoText="Bien UI"
                  navigation={[
                    { label: 'Explore', active: true },
                    { label: 'Library', href: '#' },
                  ]}
                >
                  <Input
                    placeholder="Search..."
                    icon={<SearchIcon />}
                    style={{ maxWidth: '300px' }}
                  />
                </Header>
              </Card>
            </div>

            {/* Minimal */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Minimal Header
              </Text>
              <Card padding="none">
                <Header
                  logoText="Brand"
                  bordered={false}
                  actions={
                    <HStack gap="xs">
                      <Button
                        variant="ghost"
                        size="sm"
                        iconOnly
                        icon={<SearchIcon />}
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        iconOnly
                        icon={<SettingsIcon />}
                      />
                    </HStack>
                  }
                />
              </Card>
            </div>

            {/* Glass Frost */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Glass Frost Header ✨
              </Text>
              <Card
                padding="none"
                style={{
                  background:
                    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  minHeight: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Header
                  variant="glass-frost"
                  logoText="Bien UI"
                  navigation={[
                    { label: 'Features', active: true },
                    { label: 'Pricing', href: '#' },
                    { label: 'Docs', href: '#' },
                  ]}
                  actions={
                    <Button variant="primary" size="sm">
                      Sign Up
                    </Button>
                  }
                />
                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '40px',
                    color: 'white',
                  }}
                >
                  <Text size="sm" style={{ color: 'white', opacity: 0.9 }}>
                    Frosted glass effect over gradient background
                  </Text>
                </div>
              </Card>
            </div>

            {/* Glass Tint */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Glass Tint Header ✨
              </Text>
              <Card
                padding="none"
                style={{
                  background:
                    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  minHeight: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Header
                  variant="glass-tint"
                  logoText="Bien UI"
                  navigation={[
                    { label: 'Dashboard', active: true },
                    { label: 'Projects', href: '#' },
                    { label: 'Team', href: '#' },
                  ]}
                  actions={
                    <HStack gap="sm">
                      <Button variant="ghost" size="sm">
                        <BellIcon />
                      </Button>
                      <Button variant="primary" size="sm">
                        Profile
                      </Button>
                    </HStack>
                  }
                />
                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '40px',
                    color: 'white',
                  }}
                >
                  <Text size="sm" style={{ color: 'white', opacity: 0.9 }}>
                    Tinted glass effect with brand colors
                  </Text>
                </div>
              </Card>
            </div>

            {/* Sticky Glass */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Sticky Glass Header ✨
              </Text>
              <Card
                padding="none"
                style={{
                  background:
                    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  minHeight: '400px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'auto',
                }}
              >
                <Header
                  variant="glass-frost"
                  sticky
                  logoText="Sticky Demo"
                  navigation={[{ label: 'Scroll Down', active: true }]}
                  actions={
                    <Button variant="secondary" size="sm">
                      Action
                    </Button>
                  }
                />
                <div
                  style={{
                    flex: 1,
                    padding: '40px',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                  }}
                >
                  <Text size="lg" weight="bold" style={{ color: 'white' }}>
                    Scroll to see sticky effect
                  </Text>
                  {[...Array(10)].map((_, i) => (
                    <Text
                      key={i}
                      size="sm"
                      style={{ color: 'white', opacity: 0.9 }}
                    >
                      Content line {i + 1} - The header stays at the top with
                      beautiful glass morphism
                    </Text>
                  ))}
                </div>
              </Card>
            </div>

            {/* Realistic Header with Profile Dropdown */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Complete Header Example 🎯
              </Text>
              <Text size="sm" tone="secondary" style={{ marginBottom: '12px' }}>
                Logo + 6 Navigation Items + Profile Dropdown
              </Text>
              <Card padding="none">
                <div style={{ position: 'relative' }}>
                  <Header
                    logo={
                      <HStack gap="sm" align="center">
                        <div
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: 'var(--radius-md)',
                            background: 'var(--gradient-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: 'var(--font-weight-bold)',
                            fontSize: '14px',
                          }}
                        >
                          B
                        </div>
                        <Text size="lg" weight="bold" gradient="primary">
                          Bien App
                        </Text>
                      </HStack>
                    }
                    navigation={[
                      { label: 'Dashboard', active: true },
                      { label: 'Projects', href: '#' },
                      { label: 'Team', href: '#' },
                      { label: 'Analytics', href: '#' },
                      { label: 'Reports', href: '#' },
                      { label: 'Settings', href: '#' },
                    ]}
                    actions={
                      <HStack gap="sm" align="center">
                        <Button
                          variant="ghost"
                          size="sm"
                          iconOnly
                          icon={<SearchIcon />}
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          iconOnly
                          icon={<BellIcon />}
                        />
                        <div style={{ position: 'relative' }}>
                          <button
                            style={{
                              width: '36px',
                              height: '36px',
                              borderRadius: '50%',
                              background: 'var(--gradient-purple)',
                              border: '2px solid var(--color-border-base)',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              fontWeight: 'var(--font-weight-semibold)',
                              fontSize: '14px',
                              transition:
                                'transform var(--duration-fast) var(--easing)',
                            }}
                            onClick={() => {
                              const dropdown = document.getElementById(
                                'profile-dropdown-demo'
                              )
                              if (dropdown) {
                                dropdown.style.display =
                                  dropdown.style.display === 'none'
                                    ? 'block'
                                    : 'none'
                              }
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'scale(1.05)'
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'scale(1)'
                            }}
                          >
                            JD
                          </button>
                          <div
                            id="profile-dropdown-demo"
                            style={{
                              display: 'none',
                              position: 'absolute',
                              top: 'calc(100% + 8px)',
                              right: 0,
                              minWidth: '220px',
                              background: 'var(--color-surface-base)',
                              border: '1px solid var(--color-border-base)',
                              borderRadius: 'var(--radius-lg)',
                              boxShadow: 'var(--shadow-lg)',
                              zIndex: 1000,
                              overflow: 'hidden',
                            }}
                          >
                            <div
                              style={{
                                padding: 'var(--space-md)',
                                borderBottom:
                                  '1px solid var(--color-border-base)',
                                background: 'var(--color-background-subtle)',
                              }}
                            >
                              <Text size="sm" weight="semibold">
                                John Doe
                              </Text>
                              <Text size="xs" tone="secondary">
                                john.doe@example.com
                              </Text>
                            </div>

                            <div style={{ padding: 'var(--space-xs)' }}>
                              {[
                                { icon: '👤', label: 'View Profile' },
                                { icon: '⚙️', label: 'Account Settings' },
                                { icon: '🎨', label: 'Appearance' },
                                { icon: '🔔', label: 'Notifications' },
                              ].map((item, idx) => (
                                <button
                                  key={idx}
                                  style={{
                                    width: '100%',
                                    padding: 'var(--space-sm) var(--space-md)',
                                    background: 'none',
                                    border: 'none',
                                    textAlign: 'left',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 'var(--space-sm)',
                                    borderRadius: 'var(--radius-md)',
                                    transition:
                                      'background var(--duration-fast) var(--easing)',
                                    fontSize: 'var(--font-size-sm)',
                                    color: 'var(--color-text-primary)',
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.background =
                                      'var(--color-interactive-hover)'
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'none'
                                  }}
                                >
                                  <span>{item.icon}</span>
                                  <span>{item.label}</span>
                                </button>
                              ))}
                            </div>

                            <div
                              style={{
                                height: '1px',
                                background: 'var(--color-border-base)',
                                margin: 'var(--space-xs) 0',
                              }}
                            />

                            <div style={{ padding: 'var(--space-xs)' }}>
                              <button
                                style={{
                                  width: '100%',
                                  padding: 'var(--space-sm) var(--space-md)',
                                  background: 'none',
                                  border: 'none',
                                  textAlign: 'left',
                                  cursor: 'pointer',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: 'var(--space-sm)',
                                  borderRadius: 'var(--radius-md)',
                                  transition:
                                    'background var(--duration-fast) var(--easing)',
                                  fontSize: 'var(--font-size-sm)',
                                  color: 'var(--color-error)',
                                  fontWeight: 'var(--font-weight-medium)',
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background =
                                    'rgba(212, 24, 61, 0.1)'
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = 'none'
                                }}
                              >
                                <span>🚪</span>
                                <span>Sign Out</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </HStack>
                    }
                  />
                </div>
              </Card>
              <Text size="xs" tone="secondary" style={{ marginTop: '8px' }}>
                Click the profile avatar to see the dropdown menu in action
              </Text>
            </div>
          </VStack>

          <Banner variant="info" style={{ marginTop: '24px' }}>
            <Text size="sm">
              <strong>Responsive Design:</strong> The header automatically
              collapses into a mobile menu on smaller screens (resize your
              browser to see it in action).
            </Text>
          </Banner>

          <Callout
            variant="frost"
            icon={<SparklesIcon />}
            style={{ marginTop: '16px' }}
          >
            <Text size="sm">
              <strong>Glass Morphism:</strong> The frosted and tinted variants
              use backdrop blur and transparency for modern glass effects.
              Perfect for hero sections and overlays!
            </Text>
          </Callout>
        </section>

        {/* Side Navigation */}
        <section id="sidenav" className="demo-section">
          <Text size="lg" weight="semibold">
            🧭 Side Navigation Component
          </Text>
          <Text size="sm" tone="secondary" style={{ marginBottom: '24px' }}>
            Collapsible side navigation that expands on hover, perfect for admin
            panels and dashboard layouts
          </Text>

          <VStack gap="xl">
            {/* Solid Comfortable */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Solid Variant (Comfortable)
              </Text>
              <Card
                padding="none"
                style={{
                  height: '500px',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                }}
              >
                <Sidenav
                  variant="solid"
                  density="comfortable"
                  items={[
                    {
                      id: 'dashboard',
                      label: 'Dashboard',
                      icon: <HomeIcon />,
                      active: true,
                    },
                    {
                      id: 'analytics',
                      label: 'Analytics',
                      icon: <ChartIcon />,
                    },
                    {
                      id: 'div1',
                      label: '',
                      icon: <></>,
                      divider: true,
                      category: 'Management',
                    },
                    { id: 'users', label: 'Users', icon: <UsersIcon /> },
                    { id: 'projects', label: 'Projects', icon: <FolderIcon /> },
                    { id: 'documents', label: 'Documents', icon: <FileIcon /> },
                    {
                      id: 'div2',
                      label: '',
                      icon: <></>,
                      divider: true,
                      category: 'Commerce',
                    },
                    {
                      id: 'orders',
                      label: 'Orders',
                      icon: <ShoppingCartIcon />,
                    },
                    {
                      id: 'payments',
                      label: 'Payments',
                      icon: <CreditCardIcon />,
                    },
                    {
                      id: 'div3',
                      label: '',
                      icon: <></>,
                      divider: true,
                      category: 'Support',
                    },
                    {
                      id: 'messages',
                      label: 'Messages',
                      icon: <MessageIcon />,
                    },
                    {
                      id: 'notifications',
                      label: 'Notifications',
                      icon: <BellIcon />,
                    },
                    {
                      id: 'help',
                      label: 'Help Center',
                      icon: <HelpCircleIcon />,
                    },
                    {
                      id: 'settings',
                      label: 'Settings',
                      icon: <SettingsIcon />,
                    },
                  ]}
                  onItemClick={(item) => {
                    toast({
                      title: `Navigated to ${item.label}`,
                      variant: 'success',
                    })
                  }}
                />
                <div style={{ flex: 1, padding: '24px' }}>
                  <Text
                    size="lg"
                    weight="semibold"
                    style={{ marginBottom: '16px' }}
                  >
                    Dashboard
                  </Text>
                  <Text tone="secondary">
                    Hover over the side navigation to see it expand with labels
                    and category headers. The navigation collapses automatically
                    after 500ms when you move your mouse away.
                  </Text>
                </div>
              </Card>
            </div>

            {/* Glass Frost Compact */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Glass Frost (Compact) ✨
              </Text>
              <Card
                padding="none"
                style={{
                  height: '500px',
                  position: 'relative',
                  overflow: 'hidden',
                  background:
                    'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                  display: 'flex',
                }}
              >
                <Sidenav
                  variant="glass-frost"
                  density="compact"
                  items={[
                    {
                      id: 'dashboard',
                      label: 'Dashboard',
                      icon: <HomeIcon />,
                      active: true,
                    },
                    {
                      id: 'analytics',
                      label: 'Analytics',
                      icon: <ChartIcon />,
                    },
                    {
                      id: 'div1',
                      label: '',
                      icon: <></>,
                      divider: true,
                      category: 'Management',
                    },
                    { id: 'users', label: 'Users', icon: <UsersIcon /> },
                    { id: 'projects', label: 'Projects', icon: <FolderIcon /> },
                    { id: 'documents', label: 'Documents', icon: <FileIcon /> },
                    {
                      id: 'div2',
                      label: '',
                      icon: <></>,
                      divider: true,
                      category: 'Commerce',
                    },
                    {
                      id: 'orders',
                      label: 'Orders',
                      icon: <ShoppingCartIcon />,
                    },
                    {
                      id: 'payments',
                      label: 'Payments',
                      icon: <CreditCardIcon />,
                    },
                    {
                      id: 'div3',
                      label: '',
                      icon: <></>,
                      divider: true,
                      category: 'Support',
                    },
                    {
                      id: 'messages',
                      label: 'Messages',
                      icon: <MessageIcon />,
                    },
                    {
                      id: 'help',
                      label: 'Help Center',
                      icon: <HelpCircleIcon />,
                    },
                    {
                      id: 'settings',
                      label: 'Settings',
                      icon: <SettingsIcon />,
                    },
                  ]}
                  onItemClick={(item) => {
                    toast({
                      title: `Navigated to ${item.label}`,
                      variant: 'success',
                    })
                  }}
                />
                <div style={{ flex: 1, padding: '24px', color: 'white' }}>
                  <Text
                    size="lg"
                    weight="semibold"
                    style={{ marginBottom: '16px' }}
                  >
                    Glass Frost Effect
                  </Text>
                  <Text>
                    The glass frost variant creates a beautiful frosted glass
                    effect with backdrop blur, perfect for modern interfaces
                    with colorful backgrounds.
                  </Text>
                </div>
              </Card>
            </div>
          </VStack>

          <Banner variant="info" style={{ marginTop: '24px' }}>
            <Text size="sm">
              <strong>Smart Auto-Expand:</strong> The navigation automatically
              expands when you hover and collapses 500ms after your mouse
              leaves, providing a smooth user experience.
            </Text>
          </Banner>

          <Callout
            variant="tint"
            icon={<SparklesIcon />}
            style={{ marginTop: '16px' }}
          >
            <Text size="sm">
              <strong>Category Organization:</strong> Use dividers with category
              labels to organize navigation items into logical groups.
              Categories appear as text labels when expanded and simple dividers
              when collapsed.
            </Text>
          </Callout>
        </section>

        {/* Status Badges */}
        <section id="badges" className="demo-section">
          <Text size="lg" weight="semibold">
            🏷️ Status Badge Component
          </Text>
          <Text size="sm" tone="secondary" style={{ marginBottom: '24px' }}>
            Modern status indicators with special AI variant and animated
            effects
          </Text>

          <VStack gap="xl">
            {/* Standard Statuses */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Standard Status Badges
              </Text>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                    alignItems: 'center',
                  }}
                >
                  <Badge variant="success">Active</Badge>
                  <Badge variant="error">Failed</Badge>
                  <Badge variant="warning">Pending</Badge>
                  <Badge variant="info">In Progress</Badge>
                  <Badge variant="neutral">Inactive</Badge>
                  <Badge variant="primary">Featured</Badge>
                </div>
              </Card>
            </div>

            {/* AI Badge */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                AI Generated Badge ✨
              </Text>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                    alignItems: 'center',
                  }}
                >
                  <Badge variant="ai">AI Generated</Badge>
                  <Badge variant="ai">Created by AI</Badge>
                  <Badge variant="ai">AI Enhanced</Badge>
                </div>
                <Text size="sm" tone="secondary" style={{ marginTop: '12px' }}>
                  Special gradient border with shimmer animation to highlight
                  AI-generated content
                </Text>
              </Card>
            </div>

            {/* With Dots */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                With Status Dots
              </Text>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                    alignItems: 'center',
                  }}
                >
                  <Badge variant="success" dot>
                    Online
                  </Badge>
                  <Badge variant="error" dot>
                    Offline
                  </Badge>
                  <Badge variant="warning" dot>
                    Away
                  </Badge>
                  <Badge variant="info" dot>
                    Busy
                  </Badge>
                  <Badge variant="ai" dot>
                    AI Active
                  </Badge>
                </div>
              </Card>
            </div>

            {/* With Icons */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                With Icons
              </Text>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                    alignItems: 'center',
                  }}
                >
                  <Badge variant="success" icon={<CheckIcon />}>
                    Verified
                  </Badge>
                  <Badge variant="error" icon={<TrashIcon />}>
                    Deleted
                  </Badge>
                  <Badge variant="warning" icon={<BellIcon />}>
                    Attention Needed
                  </Badge>
                  <Badge variant="info" icon={<DownloadIcon />}>
                    Downloading
                  </Badge>
                  <Badge variant="ai" icon={<SparklesIcon />}>
                    AI Powered
                  </Badge>
                </div>
              </Card>
            </div>

            {/* Outline Style */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Outline Style
              </Text>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                    alignItems: 'center',
                  }}
                >
                  <Badge variant="success" outline>
                    Success
                  </Badge>
                  <Badge variant="error" outline>
                    Error
                  </Badge>
                  <Badge variant="warning" outline>
                    Warning
                  </Badge>
                  <Badge variant="info" outline>
                    Info
                  </Badge>
                  <Badge variant="primary" outline>
                    Primary
                  </Badge>
                  <Badge variant="ai" outline>
                    AI Generated
                  </Badge>
                </div>
              </Card>
            </div>

            {/* Sizes */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Badge Sizes
              </Text>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '16px',
                    alignItems: 'center',
                  }}
                >
                  <Badge variant="primary" size="sm">
                    Small
                  </Badge>
                  <Badge variant="primary" size="md">
                    Medium
                  </Badge>
                  <Badge variant="primary" size="lg">
                    Large
                  </Badge>
                </div>
                <Divider style={{ margin: '16px 0' }} />
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '16px',
                    alignItems: 'center',
                  }}
                >
                  <Badge variant="ai" size="sm" icon={<SparklesIcon />}>
                    AI Small
                  </Badge>
                  <Badge variant="ai" size="md" icon={<SparklesIcon />}>
                    AI Medium
                  </Badge>
                  <Badge variant="ai" size="lg" icon={<SparklesIcon />}>
                    AI Large
                  </Badge>
                </div>
              </Card>
            </div>

            {/* Use Cases */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Real-World Examples
              </Text>
              <VStack gap="md">
                <Card>
                  <HStack gap="md">
                    <div style={{ flex: 1 }}>
                      <Text weight="semibold">User Profile</Text>
                      <Text size="sm" tone="secondary">
                        John Smith
                      </Text>
                    </div>
                    <Badge variant="success" dot>
                      Online
                    </Badge>
                  </HStack>
                </Card>

                <Card>
                  <HStack gap="md">
                    <div style={{ flex: 1 }}>
                      <Text weight="semibold">Project Status</Text>
                      <Text size="sm" tone="secondary">
                        Website Redesign
                      </Text>
                    </div>
                    <Badge variant="warning" icon={<BellIcon />}>
                      Needs Review
                    </Badge>
                  </HStack>
                </Card>

                <Card>
                  <HStack gap="md">
                    <div style={{ flex: 1 }}>
                      <Text weight="semibold">Content Article</Text>
                      <Text size="sm" tone="secondary">
                        Product Launch Announcement
                      </Text>
                    </div>
                    <Badge variant="ai" icon={<SparklesIcon />}>
                      AI Generated
                    </Badge>
                  </HStack>
                </Card>

                <Card>
                  <HStack gap="md">
                    <div style={{ flex: 1 }}>
                      <Text weight="semibold">Order #12345</Text>
                      <Text size="sm" tone="secondary">
                        2 items
                      </Text>
                    </div>
                    <Badge variant="info" dot>
                      Processing
                    </Badge>
                  </HStack>
                </Card>
              </VStack>
            </div>
          </VStack>

          <Banner variant="info" style={{ marginTop: '24px' }}>
            <Text size="sm">
              <strong>AI Badge:</strong> The AI variant features a special
              gradient border with an animated shimmer effect to clearly
              distinguish AI-generated content.
            </Text>
          </Banner>

          <Callout
            variant="tint"
            icon={<SparklesIcon />}
            style={{ marginTop: '16px' }}
          >
            <Text size="sm">
              <strong>Modern Design:</strong> Badges use rounded corners, subtle
              backgrounds, and smooth animations. The dot indicator pulses
              gently, and the AI variant includes a unique gradient shimmer
              effect.
            </Text>
          </Callout>
        </section>

        {/* Tabs */}
        <section id="tabs" className="demo-section">
          <Text size="lg" weight="semibold">
            📑 Tabs Component
          </Text>
          <Text size="sm" tone="secondary" style={{ marginBottom: '24px' }}>
            Organize and navigate content with modern, accessible tab interfaces
          </Text>

          <VStack gap="xl">
            {/* Default Variant */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Default Style
              </Text>
              <Card>
                <Tabs
                  variant="default"
                  tabs={[
                    {
                      id: 'overview',
                      label: 'Overview',
                      icon: <HomeIcon />,
                      content: (
                        <div>
                          <Text
                            weight="semibold"
                            style={{ marginBottom: '8px' }}
                          >
                            Overview Tab
                          </Text>
                          <Text tone="secondary">
                            The default tab style features a clean underline
                            indicator with brand gradient colors. Perfect for
                            content sections and navigation.
                          </Text>
                        </div>
                      ),
                    },
                    {
                      id: 'analytics',
                      label: 'Analytics',
                      icon: <ChartIcon />,
                      badge: 5,
                      content: (
                        <div>
                          <Text
                            weight="semibold"
                            style={{ marginBottom: '8px' }}
                          >
                            Analytics Dashboard
                          </Text>
                          <Text tone="secondary">
                            View charts, metrics, and performance data. The
                            badge shows you have 5 new insights.
                          </Text>
                        </div>
                      ),
                    },
                    {
                      id: 'settings',
                      label: 'Settings',
                      icon: <SettingsIcon />,
                      content: (
                        <div>
                          <Text
                            weight="semibold"
                            style={{ marginBottom: '8px' }}
                          >
                            Settings Panel
                          </Text>
                          <Text tone="secondary">
                            Configure your preferences and account settings
                            here.
                          </Text>
                        </div>
                      ),
                    },
                    {
                      id: 'disabled',
                      label: 'Disabled',
                      icon: <TrashIcon />,
                      disabled: true,
                    },
                  ]}
                />
              </Card>
            </div>

            {/* Underline Variant */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Underline Style
              </Text>
              <Card>
                <Tabs
                  variant="underline"
                  tabs={[
                    {
                      id: 'profile',
                      label: 'Profile',
                      icon: <UsersIcon />,
                      content: (
                        <VStack gap="md">
                          <Text weight="semibold">User Profile</Text>
                          <Text size="sm" tone="secondary">
                            Manage your personal information, avatar, and bio.
                            Keep your profile up to date.
                          </Text>
                        </VStack>
                      ),
                    },
                    {
                      id: 'notifications',
                      label: 'Notifications',
                      icon: <BellIcon />,
                      badge: 12,
                      content: (
                        <VStack gap="md">
                          <Text weight="semibold">
                            Notification Preferences
                          </Text>
                          <Text size="sm" tone="secondary">
                            You have 12 unread notifications. Configure when and
                            how you receive alerts.
                          </Text>
                        </VStack>
                      ),
                    },
                    {
                      id: 'messages',
                      label: 'Messages',
                      icon: <MessageIcon />,
                      badge: 3,
                      content: (
                        <VStack gap="md">
                          <Text weight="semibold">Messages</Text>
                          <Text size="sm" tone="secondary">
                            You have 3 new messages. View and respond to
                            conversations.
                          </Text>
                        </VStack>
                      ),
                    },
                  ]}
                />
              </Card>
            </div>

            {/* Pills Variant */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Pills Style
              </Text>
              <Card>
                <Tabs
                  variant="pills"
                  tabs={[
                    {
                      id: 'all',
                      label: 'All',
                      badge: 24,
                      content: (
                        <div>
                          <Text
                            weight="semibold"
                            style={{ marginBottom: '8px' }}
                          >
                            All Items (24)
                          </Text>
                          <Text tone="secondary">
                            View all available items across all categories.
                          </Text>
                        </div>
                      ),
                    },
                    {
                      id: 'active',
                      label: 'Active',
                      badge: 18,
                      content: (
                        <div>
                          <Text
                            weight="semibold"
                            style={{ marginBottom: '8px' }}
                          >
                            Active Items (18)
                          </Text>
                          <Text tone="secondary">
                            Currently active and in-progress items.
                          </Text>
                        </div>
                      ),
                    },
                    {
                      id: 'completed',
                      label: 'Completed',
                      badge: 6,
                      content: (
                        <div>
                          <Text
                            weight="semibold"
                            style={{ marginBottom: '8px' }}
                          >
                            Completed Items (6)
                          </Text>
                          <Text tone="secondary">
                            Successfully completed items.
                          </Text>
                        </div>
                      ),
                    },
                  ]}
                />
              </Card>
            </div>

            {/* Filled Variant */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Filled Style with Brand Gradient
              </Text>
              <Card>
                <Tabs
                  variant="filled"
                  tabs={[
                    {
                      id: 'docs',
                      label: 'Documents',
                      icon: <FileIcon />,
                      content: (
                        <div>
                          <Text
                            weight="semibold"
                            style={{ marginBottom: '8px' }}
                          >
                            Documents Library
                          </Text>
                          <Text tone="secondary">
                            Access and manage your document collection.
                          </Text>
                        </div>
                      ),
                    },
                    {
                      id: 'projects',
                      label: 'Projects',
                      icon: <FolderIcon />,
                      content: (
                        <div>
                          <Text
                            weight="semibold"
                            style={{ marginBottom: '8px' }}
                          >
                            Project Management
                          </Text>
                          <Text tone="secondary">
                            Organize and track your projects and tasks.
                          </Text>
                        </div>
                      ),
                    },
                    {
                      id: 'orders',
                      label: 'Orders',
                      icon: <ShoppingCartIcon />,
                      badge: 8,
                      content: (
                        <div>
                          <Text
                            weight="semibold"
                            style={{ marginBottom: '8px' }}
                          >
                            Recent Orders (8)
                          </Text>
                          <Text tone="secondary">
                            View and manage your order history.
                          </Text>
                        </div>
                      ),
                    },
                  ]}
                />
              </Card>
            </div>

            {/* Sizes */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Tab Sizes
              </Text>
              <VStack gap="md">
                <Card>
                  <Text
                    size="sm"
                    weight="semibold"
                    style={{ marginBottom: '12px' }}
                  >
                    Small
                  </Text>
                  <Tabs
                    variant="pills"
                    size="sm"
                    tabs={[
                      {
                        id: 'tab1',
                        label: 'Tab 1',
                        content: <Text size="sm">Small tab content</Text>,
                      },
                      {
                        id: 'tab2',
                        label: 'Tab 2',
                        badge: 5,
                        content: <Text size="sm">More content</Text>,
                      },
                      {
                        id: 'tab3',
                        label: 'Tab 3',
                        content: <Text size="sm">Additional content</Text>,
                      },
                    ]}
                  />
                </Card>

                <Card>
                  <Text
                    size="sm"
                    weight="semibold"
                    style={{ marginBottom: '12px' }}
                  >
                    Large
                  </Text>
                  <Tabs
                    variant="filled"
                    size="lg"
                    tabs={[
                      {
                        id: 'tab1',
                        label: 'Tab 1',
                        icon: <HomeIcon />,
                        content: <Text>Large tab content</Text>,
                      },
                      {
                        id: 'tab2',
                        label: 'Tab 2',
                        icon: <ChartIcon />,
                        content: <Text>More content</Text>,
                      },
                      {
                        id: 'tab3',
                        label: 'Tab 3',
                        icon: <SettingsIcon />,
                        content: <Text>Additional content</Text>,
                      },
                    ]}
                  />
                </Card>
              </VStack>
            </div>

            {/* Full Width */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Full Width Tabs
              </Text>
              <Card>
                <Tabs
                  variant="default"
                  fullWidth
                  tabs={[
                    {
                      id: 'tab1',
                      label: 'Dashboard',
                      icon: <HomeIcon />,
                      content: <Text>Dashboard content spans full width</Text>,
                    },
                    {
                      id: 'tab2',
                      label: 'Reports',
                      icon: <ChartIcon />,
                      content: <Text>Reports and analytics</Text>,
                    },
                    {
                      id: 'tab3',
                      label: 'Settings',
                      icon: <SettingsIcon />,
                      content: <Text>Configuration options</Text>,
                    },
                  ]}
                />
              </Card>
            </div>

            {/* Vertical Tabs */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Vertical Orientation
              </Text>
              <Card>
                <Tabs
                  variant="default"
                  vertical
                  tabs={[
                    {
                      id: 'general',
                      label: 'General',
                      icon: <SettingsIcon />,
                      content: (
                        <div>
                          <Text
                            weight="semibold"
                            style={{ marginBottom: '8px' }}
                          >
                            General Settings
                          </Text>
                          <Text tone="secondary">
                            Configure basic application preferences and
                            defaults.
                          </Text>
                        </div>
                      ),
                    },
                    {
                      id: 'account',
                      label: 'Account',
                      icon: <UsersIcon />,
                      content: (
                        <div>
                          <Text
                            weight="semibold"
                            style={{ marginBottom: '8px' }}
                          >
                            Account Settings
                          </Text>
                          <Text tone="secondary">
                            Manage your account details, password, and security
                            options.
                          </Text>
                        </div>
                      ),
                    },
                    {
                      id: 'billing',
                      label: 'Billing',
                      icon: <CreditCardIcon />,
                      content: (
                        <div>
                          <Text
                            weight="semibold"
                            style={{ marginBottom: '8px' }}
                          >
                            Billing & Payments
                          </Text>
                          <Text tone="secondary">
                            View invoices, update payment methods, and manage
                            subscriptions.
                          </Text>
                        </div>
                      ),
                    },
                    {
                      id: 'notifications-v',
                      label: 'Notifications',
                      icon: <BellIcon />,
                      badge: 3,
                      content: (
                        <div>
                          <Text
                            weight="semibold"
                            style={{ marginBottom: '8px' }}
                          >
                            Notification Settings
                          </Text>
                          <Text tone="secondary">
                            Control when and how you receive notifications.
                          </Text>
                        </div>
                      ),
                    },
                  ]}
                />
              </Card>
            </div>
          </VStack>

          <Banner variant="info" style={{ marginTop: '24px' }}>
            <Text size="sm">
              <strong>Responsive Design:</strong> Tabs automatically become
              scrollable on mobile devices. Vertical tabs convert to horizontal
              orientation on smaller screens.
            </Text>
          </Banner>

          <Callout
            variant="tint"
            icon={<SparklesIcon />}
            style={{ marginTop: '16px' }}
          >
            <Text size="sm">
              <strong>Brand Gradient Indicators:</strong> Active tab indicators
              use the signature blue → teal gradient. Choose from Default,
              Underline, Pills, or Filled styles to match your design needs.
            </Text>
          </Callout>
        </section>

        {/* Timeline */}
        <section id="timeline" className="demo-section">
          <Text size="lg" weight="semibold">
            ⏱️ Timeline Component
          </Text>
          <Text size="sm" tone="secondary" style={{ marginBottom: '24px' }}>
            Display chronological events with modern visual indicators and
            status colors
          </Text>

          <VStack gap="xl">
            {/* Default Timeline */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Default Timeline
              </Text>
              <Card>
                <Timeline
                  variant="default"
                  items={[
                    {
                      id: '1',
                      title: 'Order Placed',
                      description:
                        'Your order has been successfully placed and confirmed.',
                      time: '2 hours ago',
                      status: 'success',
                      icon: <CheckIcon />,
                    },
                    {
                      id: '2',
                      title: 'Payment Processed',
                      description: 'Payment has been received and verified.',
                      time: '1 hour ago',
                      status: 'success',
                      icon: <CheckIcon />,
                    },
                    {
                      id: '3',
                      title: 'Order Shipped',
                      description:
                        'Your package is on its way. Tracking number: TRK123456789',
                      time: '30 minutes ago',
                      status: 'primary',
                      icon: <SendIcon />,
                    },
                    {
                      id: '4',
                      title: 'Out for Delivery',
                      description: 'Expected delivery by end of day.',
                      time: 'In progress',
                      status: 'info',
                      icon: <DownloadIcon />,
                    },
                  ]}
                />
              </Card>
            </div>

            {/* Detailed Variant */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Detailed Style (Rich Content)
              </Text>
              <Card>
                <Timeline
                  variant="detailed"
                  items={[
                    {
                      id: '1',
                      title: 'New User Registration',
                      description:
                        'Sarah Johnson signed up for a premium account.',
                      time: 'March 15, 2024 - 3:45 PM',
                      status: 'primary',
                      icon: <UsersIcon />,
                      content: (
                        <div style={{ marginTop: '12px' }}>
                          <Badge variant="primary" size="sm">
                            Premium Plan
                          </Badge>{' '}
                          <Badge variant="info" size="sm">
                            Referred by John
                          </Badge>
                        </div>
                      ),
                    },
                    {
                      id: '2',
                      title: 'Payment Received',
                      description:
                        'Annual subscription payment of $99.00 processed successfully.',
                      time: 'March 15, 2024 - 3:46 PM',
                      status: 'success',
                      icon: <CreditCardIcon />,
                      content: (
                        <VStack gap="xs" style={{ marginTop: '12px' }}>
                          <Text size="sm">
                            Transaction ID: TXN-2024-0315-7890
                          </Text>
                          <Text size="sm" tone="secondary">
                            Visa ending in 4242
                          </Text>
                        </VStack>
                      ),
                    },
                    {
                      id: '3',
                      title: 'Welcome Email Sent',
                      description: 'Onboarding email delivered to user inbox.',
                      time: 'March 15, 2024 - 3:47 PM',
                      status: 'info',
                      icon: <MessageIcon />,
                    },
                  ]}
                />
              </Card>
            </div>

            {/* Horizontal Timeline */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Horizontal Orientation
              </Text>
              <Card>
                <Timeline
                  variant="default"
                  orientation="horizontal"
                  items={[
                    {
                      id: '1',
                      title: 'Planning',
                      description: 'Project kickoff and requirements gathering',
                      status: 'success',
                      icon: <FileIcon />,
                    },
                    {
                      id: '2',
                      title: 'Design',
                      description: 'UI/UX design and prototyping',
                      status: 'success',
                      icon: <SparklesIcon />,
                    },
                    {
                      id: '3',
                      title: 'Development',
                      description: 'Building the application',
                      status: 'primary',
                      icon: <SettingsIcon />,
                    },
                    {
                      id: '4',
                      title: 'Testing',
                      description: 'QA and bug fixes',
                      status: 'info',
                      icon: <SearchIcon />,
                    },
                    {
                      id: '5',
                      title: 'Launch',
                      description: 'Deploy to production',
                      status: 'neutral',
                      icon: <SendIcon />,
                    },
                  ]}
                />
              </Card>
            </div>

            {/* Activity Feed Example */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Activity Feed Example
              </Text>
              <Card>
                <Timeline
                  variant="default"
                  items={[
                    {
                      id: '1',
                      title: 'You created a new project',
                      description:
                        'Website Redesign Project initiated with 5 team members',
                      time: '5 minutes ago',
                      status: 'primary',
                      icon: <FolderIcon />,
                    },
                    {
                      id: '2',
                      title: 'John commented on your task',
                      description:
                        '"Great work on the homepage design! Let\'s discuss the color scheme."',
                      time: '1 hour ago',
                      status: 'info',
                      icon: <MessageIcon />,
                      content: (
                        <div style={{ marginTop: '8px' }}>
                          <Badge variant="neutral" size="sm">
                            Task #42
                          </Badge>
                        </div>
                      ),
                    },
                    {
                      id: '3',
                      title: 'Task completed',
                      description: 'Homepage mockup approved by design team',
                      time: '3 hours ago',
                      status: 'success',
                      icon: <CheckIcon />,
                    },
                    {
                      id: '4',
                      title: 'File uploaded',
                      description:
                        'design-system-v2.fig uploaded to project resources',
                      time: '5 hours ago',
                      status: 'neutral',
                      icon: <DownloadIcon />,
                    },
                    {
                      id: '5',
                      title: 'Meeting scheduled',
                      description:
                        'Design review meeting set for tomorrow at 2:00 PM',
                      time: 'Yesterday',
                      status: 'warning',
                      icon: <BellIcon />,
                    },
                  ]}
                />
              </Card>
            </div>
          </VStack>

          <Banner variant="info" style={{ marginTop: '24px' }}>
            <Text size="sm">
              <strong>Responsive Design:</strong> Horizontal timelines
              automatically convert to vertical orientation on mobile devices
              for better readability.
            </Text>
          </Banner>

          <Callout
            variant="tint"
            icon={<SparklesIcon />}
            style={{ marginTop: '16px' }}
          >
            <Text size="sm">
              <strong>Status Colors & Gradients:</strong> Use status colors
              (success, error, warning, info) for activity states, or the
              primary variant with blue → teal gradient for featured events.
              Hover over markers for subtle animations!
            </Text>
          </Callout>
        </section>

        {/* Hotspot */}
        <section id="hotspot" className="demo-section">
          <Text size="lg" weight="semibold">
            🎯 Hotspot Component
          </Text>
          <Text size="sm" tone="secondary" style={{ marginBottom: '24px' }}>
            Animated indicators to draw attention and guide users to important
            UI elements
          </Text>

          <VStack gap="xl">
            {/* Animation Variants */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Animation Styles
              </Text>
              <Grid columns={3} gap="md">
                <Card>
                  <div
                    style={{
                      position: 'relative',
                      height: '150px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Hotspot
                      animation="pulse"
                      variant="primary"
                      label="Pulse Animation"
                    />
                    <Text size="sm" tone="secondary">
                      Pulse
                    </Text>
                  </div>
                </Card>
                <Card>
                  <div
                    style={{
                      position: 'relative',
                      height: '150px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Hotspot
                      animation="ping"
                      variant="secondary"
                      label="Ping Animation"
                    />
                    <Text size="sm" tone="secondary">
                      Ping
                    </Text>
                  </div>
                </Card>
                <Card>
                  <div
                    style={{
                      position: 'relative',
                      height: '150px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Hotspot
                      animation="ripple"
                      variant="purple"
                      label="Ripple Animation"
                    />
                    <Text size="sm" tone="secondary">
                      Ripple
                    </Text>
                  </div>
                </Card>
              </Grid>
            </div>

            {/* Color Variants */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Color Variants
              </Text>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    gap: '40px',
                    padding: '40px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Hotspot
                      variant="primary"
                      label="Primary"
                      tooltipPosition="top"
                    />
                  </div>
                  <div
                    style={{
                      position: 'relative',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Hotspot
                      variant="secondary"
                      label="Secondary"
                      tooltipPosition="top"
                    />
                  </div>
                  <div
                    style={{
                      position: 'relative',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Hotspot
                      variant="success"
                      label="Success"
                      tooltipPosition="top"
                    />
                  </div>
                  <div
                    style={{
                      position: 'relative',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Hotspot
                      variant="warning"
                      label="Warning"
                      tooltipPosition="top"
                    />
                  </div>
                  <div
                    style={{
                      position: 'relative',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Hotspot
                      variant="error"
                      label="Error"
                      tooltipPosition="top"
                    />
                  </div>
                  <div
                    style={{
                      position: 'relative',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Hotspot
                      variant="purple"
                      label="Purple"
                      tooltipPosition="top"
                    />
                  </div>
                  <div
                    style={{
                      position: 'relative',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Hotspot
                      variant="gold"
                      label="Gold"
                      tooltipPosition="top"
                    />
                  </div>
                </div>
              </Card>
            </div>

            {/* Sizes */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Sizes
              </Text>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    gap: '60px',
                    padding: '40px',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Hotspot
                      size="sm"
                      variant="primary"
                      label="Small"
                      tooltipPosition="bottom"
                    />
                  </div>
                  <div
                    style={{
                      position: 'relative',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Hotspot
                      size="md"
                      variant="primary"
                      label="Medium"
                      tooltipPosition="bottom"
                    />
                  </div>
                  <div
                    style={{
                      position: 'relative',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Hotspot
                      size="lg"
                      variant="primary"
                      label="Large"
                      tooltipPosition="bottom"
                    />
                  </div>
                </div>
              </Card>
            </div>

            {/* Step Indicators */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Step Indicators
              </Text>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    gap: '60px',
                    padding: '40px',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Hotspot
                      size="lg"
                      variant="primary"
                      badge={1}
                      label="Step 1: Welcome"
                      tooltipPosition="top"
                    />
                  </div>
                  <div
                    style={{
                      position: 'relative',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Hotspot
                      size="lg"
                      variant="secondary"
                      badge={2}
                      label="Step 2: Setup"
                      tooltipPosition="top"
                    />
                  </div>
                  <div
                    style={{
                      position: 'relative',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Hotspot
                      size="lg"
                      variant="success"
                      badge={3}
                      label="Step 3: Complete"
                      tooltipPosition="top"
                    />
                  </div>
                </div>
              </Card>
            </div>

            {/* Positioning Demo */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Positioning on Components
              </Text>
              <Grid columns={2} gap="md">
                {/* Card with Corner Hotspots */}
                <Card title="New Features" subtitle="Check out what's new">
                  <Text
                    size="sm"
                    tone="secondary"
                    style={{ marginBottom: '16px' }}
                  >
                    This card shows hotspots positioned at different corners
                  </Text>
                  <Hotspot
                    position="top-right"
                    variant="error"
                    size="sm"
                    label="New!"
                  />
                  <Hotspot
                    position="bottom-left"
                    variant="success"
                    size="sm"
                    label="Updated"
                    tooltipPosition="right"
                  />
                  <Button variant="primary" style={{ marginTop: '8px' }}>
                    Learn More
                  </Button>
                </Card>

                {/* Button with Hotspot */}
                <Card>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '24px',
                      alignItems: 'center',
                      padding: '40px 20px',
                    }}
                  >
                    <Text size="sm" tone="secondary">
                      Important action with indicator
                    </Text>
                    <div style={{ position: 'relative' }}>
                      <Button variant="gradient-primary" size="lg">
                        Start Tutorial
                      </Button>
                      <Hotspot
                        position="custom"
                        customPosition={{ top: '-8px', right: '-8px' }}
                        variant="warning"
                        size="sm"
                        animation="ping"
                        label="Click here to begin"
                        tooltipPosition="top"
                      />
                    </div>
                  </div>
                </Card>
              </Grid>
            </div>

            {/* Interactive Example */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Interactive Onboarding Demo
              </Text>
              <Card
                style={{
                  background:
                    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                }}
              >
                <div style={{ position: 'relative', padding: '48px 40px' }}>
                  <Text
                    size="xl"
                    weight="bold"
                    style={{ color: 'white', marginBottom: '12px' }}
                  >
                    Welcome to Bien UI! 👋
                  </Text>
                  <Text
                    size="sm"
                    style={{
                      color: 'white',
                      opacity: 0.9,
                      marginBottom: '48px',
                    }}
                  >
                    Follow the hotspots to learn about key features
                  </Text>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns:
                        'repeat(auto-fit, minmax(160px, 1fr))',
                      gap: '32px',
                      maxWidth: '800px',
                    }}
                  >
                    <div
                      style={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <Button
                        variant="secondary"
                        style={{ width: '100%', maxWidth: '200px' }}
                      >
                        Profile
                      </Button>
                      <Hotspot
                        position="custom"
                        customPosition={{
                          top: '-12px',
                          right: 'calc(50% - 112px)',
                        }}
                        variant="gold"
                        size="md"
                        badge={1}
                        label="Update your profile"
                        tooltipPosition="top"
                        onClick={() => alert('Step 1: Profile clicked!')}
                      />
                    </div>

                    <div
                      style={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <Button
                        variant="secondary"
                        style={{ width: '100%', maxWidth: '200px' }}
                      >
                        Settings
                      </Button>
                      <Hotspot
                        position="custom"
                        customPosition={{
                          top: '-12px',
                          right: 'calc(50% - 112px)',
                        }}
                        variant="gold"
                        size="md"
                        badge={2}
                        label="Configure your preferences"
                        tooltipPosition="top"
                        onClick={() => alert('Step 2: Settings clicked!')}
                      />
                    </div>

                    <div
                      style={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <Button
                        variant="secondary"
                        style={{ width: '100%', maxWidth: '200px' }}
                      >
                        Get Started
                      </Button>
                      <Hotspot
                        position="custom"
                        customPosition={{
                          top: '-12px',
                          right: 'calc(50% - 112px)',
                        }}
                        variant="gold"
                        size="md"
                        badge={3}
                        label="Begin your journey"
                        tooltipPosition="top"
                        onClick={() => alert('Step 3: Get Started clicked!')}
                      />
                    </div>
                  </div>

                  <Text
                    size="xs"
                    style={{ color: 'white', opacity: 0.7, marginTop: '32px' }}
                  >
                    💡 Hover over the numbered badges to see tooltips, or click
                    them to interact
                  </Text>
                </div>
              </Card>
            </div>
          </VStack>

          <Callout
            variant="tint"
            icon={<SparklesIcon />}
            style={{ marginTop: '24px' }}
          >
            <Text size="sm">
              <strong>Pro Tip:</strong> Use hotspots for onboarding flows,
              feature announcements, or guiding users to important actions.
              Combine with tooltips for maximum clarity!
            </Text>
          </Callout>
        </section>

        {/* Links */}
        <section id="links" className="demo-section">
          <Text size="lg" weight="semibold">
            🔗 Link Component
          </Text>
          <Text size="sm" tone="secondary" style={{ marginBottom: '24px' }}>
            Flexible links with variants, sizes, and styles for navigation
            throughout your application
          </Text>

          <VStack gap="xl">
            {/* Variants */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Variants
              </Text>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      gap: '24px',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                    }}
                  >
                    <Link href="#" variant="default">
                      Default Link
                    </Link>
                    <Link href="#" variant="primary">
                      Primary Link
                    </Link>
                    <Link href="#" variant="secondary">
                      Secondary Link
                    </Link>
                    <Link href="#" variant="success">
                      Success Link
                    </Link>
                    <Link href="#" variant="warning">
                      Warning Link
                    </Link>
                    <Link href="#" variant="error">
                      Error Link
                    </Link>
                    <Link href="#" variant="muted">
                      Muted Link
                    </Link>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sizes */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Sizes
              </Text>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    gap: '24px',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  <Link href="#" size="xs">
                    Extra Small
                  </Link>
                  <Link href="#" size="sm">
                    Small
                  </Link>
                  <Link href="#" size="md">
                    Medium
                  </Link>
                  <Link href="#" size="lg">
                    Large
                  </Link>
                </div>
              </Card>
            </div>

            {/* Underline Styles */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Underline Styles
              </Text>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    gap: '24px',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                  }}
                >
                  <Link href="#" underline="always">
                    Always Underlined
                  </Link>
                  <Link href="#" underline="hover">
                    Underline on Hover
                  </Link>
                  <Link href="#" underline="none">
                    No Underline
                  </Link>
                </div>
              </Card>
            </div>

            {/* Font Weights */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Font Weights
              </Text>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    gap: '24px',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                  }}
                >
                  <Link href="#" weight="normal">
                    Normal Weight
                  </Link>
                  <Link href="#" weight="medium">
                    Medium Weight
                  </Link>
                  <Link href="#" weight="semibold">
                    Semibold Weight
                  </Link>
                  <Link href="#" weight="bold">
                    Bold Weight
                  </Link>
                </div>
              </Card>
            </div>

            {/* With Icons */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                With Icons
              </Text>
              <Grid columns={2} gap="md">
                <Card>
                  <Text
                    size="sm"
                    weight="semibold"
                    style={{ marginBottom: '12px' }}
                  >
                    Leading Icons
                  </Text>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                    }}
                  >
                    <Link href="#" iconStart={<ArrowRightIcon />}>
                      Go to Dashboard
                    </Link>
                    <Link
                      href="#"
                      iconStart={<DownloadIcon />}
                      variant="primary"
                    >
                      Download File
                    </Link>
                    <Link
                      href="#"
                      iconStart={<SettingsIcon />}
                      variant="secondary"
                    >
                      Open Settings
                    </Link>
                    <Link href="#" iconStart={<HeartIcon />} variant="error">
                      Favorite Item
                    </Link>
                  </div>
                </Card>

                <Card>
                  <Text
                    size="sm"
                    weight="semibold"
                    style={{ marginBottom: '12px' }}
                  >
                    Trailing Icons
                  </Text>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                    }}
                  >
                    <Link href="#" iconEnd={<ArrowRightIcon />}>
                      Continue
                    </Link>
                    <Link href="#" iconEnd={<SendIcon />} variant="primary">
                      Send Message
                    </Link>
                    <Link href="#" iconEnd={<CheckIcon />} variant="success">
                      Mark Complete
                    </Link>
                    <Link
                      href="#"
                      iconEnd={<SparklesIcon />}
                      variant="secondary"
                    >
                      View Details
                    </Link>
                  </div>
                </Card>
              </Grid>
            </div>

            {/* External Links */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                External Links
              </Text>
              <Card>
                <Text
                  size="sm"
                  tone="secondary"
                  style={{ marginBottom: '16px' }}
                >
                  External links automatically open in a new tab and display an
                  indicator icon
                </Text>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <Link href="https://github.com" external>
                    Visit GitHub
                  </Link>
                  <Link href="https://figma.com" external variant="primary">
                    Open Figma
                  </Link>
                  <Link href="https://google.com" external variant="secondary">
                    Search on Google
                  </Link>
                </div>
              </Card>
            </div>

            {/* States */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                States
              </Text>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    gap: '24px',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                  }}
                >
                  <Link href="#">Normal Link</Link>
                  <Link href="#" disabled>
                    Disabled Link
                  </Link>
                  <Link href="#" iconStart={<DownloadIcon />} disabled>
                    Disabled with Icon
                  </Link>
                </div>
              </Card>
            </div>

            {/* Real-world Examples */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Real-world Examples
              </Text>
              <Grid columns={2} gap="md">
                {/* Navigation Menu */}
                <Card title="Navigation Menu">
                  <VStack gap="sm">
                    <Link href="#" size="sm" underline="none">
                      Home
                    </Link>
                    <Link href="#" size="sm" underline="none">
                      Products
                    </Link>
                    <Link href="#" size="sm" underline="none">
                      About Us
                    </Link>
                    <Link href="#" size="sm" underline="none">
                      Contact
                    </Link>
                  </VStack>
                </Card>

                {/* Footer Links */}
                <Card title="Footer Links">
                  <VStack gap="sm">
                    <Link href="#" variant="muted" size="sm">
                      Privacy Policy
                    </Link>
                    <Link href="#" variant="muted" size="sm">
                      Terms of Service
                    </Link>
                    <Link href="#" variant="muted" size="sm">
                      Cookie Policy
                    </Link>
                    <Link href="#" variant="muted" size="sm">
                      Support Center
                    </Link>
                  </VStack>
                </Card>
              </Grid>
            </div>

            {/* In Context */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Links in Context
              </Text>
              <Card>
                <Text size="md" style={{ marginBottom: '16px' }}>
                  Welcome to Bien UI! This is a comprehensive design system
                  built with React and Tailwind CSS. Check out our{' '}
                  <Link href="#" variant="primary">
                    documentation
                  </Link>{' '}
                  to get started, or visit our{' '}
                  <Link href="https://github.com" external variant="secondary">
                    GitHub repository
                  </Link>{' '}
                  to contribute. Need help? View our{' '}
                  <Link href="#" iconEnd={<ArrowRightIcon />}>
                    support resources
                  </Link>
                  .
                </Text>

                <Divider style={{ margin: '16px 0' }} />

                <Text size="sm" tone="secondary">
                  By continuing, you agree to our{' '}
                  <Link href="#" variant="muted" size="sm">
                    Terms
                  </Link>{' '}
                  and{' '}
                  <Link href="#" variant="muted" size="sm">
                    Privacy Policy
                  </Link>
                  .
                </Text>
              </Card>
            </div>
          </VStack>

          <Banner variant="info" style={{ marginTop: '24px' }}>
            <Text size="sm">
              <strong>Accessibility:</strong> Links support keyboard navigation
              and proper focus states for better accessibility.
            </Text>
          </Banner>
        </section>

        {/* Lists */}
        <section id="lists" className="demo-section">
          <Text size="lg" weight="semibold">
            📋 List Component
          </Text>
          <Text size="sm" tone="secondary" style={{ marginBottom: '24px' }}>
            Flexible lists for displaying collections with various styles and
            interactive features
          </Text>

          <VStack gap="xl">
            {/* Basic Lists */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Basic Lists
              </Text>
              <Grid columns={2} gap="md">
                <Card title="Unordered List">
                  <List>
                    <ListItem>Design System Components</ListItem>
                    <ListItem>Responsive Layout</ListItem>
                    <ListItem>Dark Mode Support</ListItem>
                    <ListItem>Accessibility Features</ListItem>
                    <ListItem>TypeScript Support</ListItem>
                  </List>
                </Card>

                <Card title="Ordered List">
                  <List type="ordered">
                    <ListItem>Install dependencies</ListItem>
                    <ListItem>Configure theme settings</ListItem>
                    <ListItem>Import components</ListItem>
                    <ListItem>Build your application</ListItem>
                    <ListItem>Deploy to production</ListItem>
                  </List>
                </Card>
              </Grid>
            </div>

            {/* Marker Styles */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Marker Styles
              </Text>
              <Grid columns={3} gap="md">
                <Card>
                  <Text
                    size="sm"
                    weight="semibold"
                    style={{ marginBottom: '8px' }}
                  >
                    Circle Markers
                  </Text>
                  <List markerStyle="circle">
                    <ListItem>First item</ListItem>
                    <ListItem>Second item</ListItem>
                    <ListItem>Third item</ListItem>
                  </List>
                </Card>

                <Card>
                  <Text
                    size="sm"
                    weight="semibold"
                    style={{ marginBottom: '8px' }}
                  >
                    Square Markers
                  </Text>
                  <List markerStyle="square">
                    <ListItem>First item</ListItem>
                    <ListItem>Second item</ListItem>
                    <ListItem>Third item</ListItem>
                  </List>
                </Card>

                <Card>
                  <Text
                    size="sm"
                    weight="semibold"
                    style={{ marginBottom: '8px' }}
                  >
                    Roman Numerals
                  </Text>
                  <List type="ordered" markerStyle="roman">
                    <ListItem>First item</ListItem>
                    <ListItem>Second item</ListItem>
                    <ListItem>Third item</ListItem>
                  </List>
                </Card>
              </Grid>
            </div>

            {/* Sizes and Spacing */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Sizes and Spacing
              </Text>
              <Grid columns={3} gap="md">
                <Card title="Small">
                  <List size="sm" spacing="sm">
                    <ListItem>Compact item</ListItem>
                    <ListItem>Small text size</ListItem>
                    <ListItem>Tight spacing</ListItem>
                  </List>
                </Card>

                <Card title="Medium">
                  <List size="md" spacing="md">
                    <ListItem>Default item</ListItem>
                    <ListItem>Medium text size</ListItem>
                    <ListItem>Standard spacing</ListItem>
                  </List>
                </Card>

                <Card title="Large">
                  <List size="lg" spacing="lg">
                    <ListItem>Large item</ListItem>
                    <ListItem>Big text size</ListItem>
                    <ListItem>Generous spacing</ListItem>
                  </List>
                </Card>
              </Grid>
            </div>

            {/* With Icons */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Lists with Icons
              </Text>
              <Grid columns={2} gap="md">
                <Card title="Feature List">
                  <List type="unstyled" spacing="md">
                    <ListItem icon={<CheckIcon />}>
                      Complete documentation
                    </ListItem>
                    <ListItem icon={<CheckIcon />}>TypeScript support</ListItem>
                    <ListItem icon={<CheckIcon />}>Responsive design</ListItem>
                    <ListItem icon={<CheckIcon />}>Dark mode included</ListItem>
                    <ListItem icon={<CheckIcon />}>
                      Accessible components
                    </ListItem>
                  </List>
                </Card>

                <Card title="Action Items">
                  <List type="unstyled" spacing="md">
                    <ListItem icon={<SparklesIcon />}>
                      Review new designs
                    </ListItem>
                    <ListItem icon={<SettingsIcon />}>
                      Update configuration
                    </ListItem>
                    <ListItem icon={<DownloadIcon />}>Download assets</ListItem>
                    <ListItem icon={<SendIcon />}>Send for approval</ListItem>
                    <ListItem icon={<HeartIcon />}>Add to favorites</ListItem>
                  </List>
                </Card>
              </Grid>
            </div>

            {/* Interactive Lists */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Interactive Lists
              </Text>
              <Card title="Navigation Menu">
                <List type="unstyled" spacing="none">
                  <ListItem icon={<SparklesIcon />} interactive active>
                    Dashboard
                  </ListItem>
                  <ListItem icon={<SearchIcon />} interactive>
                    Search
                  </ListItem>
                  <ListItem icon={<SettingsIcon />} interactive>
                    Settings
                  </ListItem>
                  <ListItem icon={<HeartIcon />} interactive>
                    Favorites
                  </ListItem>
                  <ListItem icon={<TrashIcon />} interactive disabled>
                    Archive (Coming Soon)
                  </ListItem>
                </List>
              </Card>
            </div>

            {/* With Avatars */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Lists with Avatars
              </Text>
              <Card title="Team Members">
                <List type="unstyled" spacing="md">
                  <ListItem
                    avatar={
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          background: 'var(--gradient-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '12px',
                          fontWeight: 'var(--font-weight-bold)',
                        }}
                      >
                        JD
                      </div>
                    }
                  >
                    <Text size="sm" weight="semibold">
                      John Doe
                    </Text>
                    <Text size="xs" tone="secondary">
                      Product Designer
                    </Text>
                  </ListItem>
                  <ListItem
                    avatar={
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          background: 'var(--gradient-secondary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '12px',
                          fontWeight: 'var(--font-weight-bold)',
                        }}
                      >
                        SM
                      </div>
                    }
                  >
                    <Text size="sm" weight="semibold">
                      Sarah Miller
                    </Text>
                    <Text size="xs" tone="secondary">
                      Frontend Developer
                    </Text>
                  </ListItem>
                  <ListItem
                    avatar={
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          background: 'var(--gradient-purple)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '12px',
                          fontWeight: 'var(--font-weight-bold)',
                        }}
                      >
                        AK
                      </div>
                    }
                  >
                    <Text size="sm" weight="semibold">
                      Alex Kim
                    </Text>
                    <Text size="xs" tone="secondary">
                      UX Researcher
                    </Text>
                  </ListItem>
                </List>
              </Card>
            </div>

            {/* With Dividers */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Lists with Dividers
              </Text>
              <Card>
                <List type="unstyled" dividers spacing="md">
                  <ListItem icon={<CheckIcon />}>
                    <Text size="sm" weight="semibold">
                      Phase 1: Research
                    </Text>
                    <Text size="xs" tone="secondary">
                      User interviews and competitive analysis
                    </Text>
                  </ListItem>
                  <ListItem icon={<CheckIcon />}>
                    <Text size="sm" weight="semibold">
                      Phase 2: Design
                    </Text>
                    <Text size="xs" tone="secondary">
                      Wireframes, prototypes, and visual design
                    </Text>
                  </ListItem>
                  <ListItem icon={<SparklesIcon />}>
                    <Text size="sm" weight="semibold">
                      Phase 3: Development
                    </Text>
                    <Text size="xs" tone="secondary">
                      Building and testing the product
                    </Text>
                  </ListItem>
                  <ListItem icon={<SearchIcon />}>
                    <Text size="sm" weight="semibold">
                      Phase 4: Launch
                    </Text>
                    <Text size="xs" tone="secondary">
                      Deployment and user feedback
                    </Text>
                  </ListItem>
                </List>
              </Card>
            </div>

            {/* Description Lists */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Description Lists
              </Text>
              <Grid columns={2} gap="md">
                <Card title="Vertical Layout">
                  <DescriptionList>
                    <DescriptionTerm>Product Name</DescriptionTerm>
                    <DescriptionDetails>
                      Bien UI Design System
                    </DescriptionDetails>

                    <DescriptionTerm>Version</DescriptionTerm>
                    <DescriptionDetails>2.0.0</DescriptionDetails>

                    <DescriptionTerm>License</DescriptionTerm>
                    <DescriptionDetails>MIT License</DescriptionDetails>

                    <DescriptionTerm>Author</DescriptionTerm>
                    <DescriptionDetails>Bien Design Team</DescriptionDetails>
                  </DescriptionList>
                </Card>

                <Card title="Horizontal Layout">
                  <DescriptionList orientation="horizontal">
                    <div>
                      <DescriptionTerm>Status</DescriptionTerm>
                      <DescriptionDetails>Active</DescriptionDetails>
                    </div>
                    <div>
                      <DescriptionTerm>Created</DescriptionTerm>
                      <DescriptionDetails>January 2026</DescriptionDetails>
                    </div>
                    <div>
                      <DescriptionTerm>Updated</DescriptionTerm>
                      <DescriptionDetails>Today</DescriptionDetails>
                    </div>
                    <div>
                      <DescriptionTerm>Category</DescriptionTerm>
                      <DescriptionDetails>Design System</DescriptionDetails>
                    </div>
                  </DescriptionList>
                </Card>
              </Grid>
            </div>

            {/* Nested Lists */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Nested Lists
              </Text>
              <Card title="Component Structure">
                <List>
                  <ListItem>
                    Layout Components
                    <List>
                      <ListItem>Container</ListItem>
                      <ListItem>Grid</ListItem>
                      <ListItem>Stack</ListItem>
                    </List>
                  </ListItem>
                  <ListItem>
                    Form Components
                    <List>
                      <ListItem>Input</ListItem>
                      <ListItem>Textarea</ListItem>
                      <ListItem>Select</ListItem>
                    </List>
                  </ListItem>
                  <ListItem>
                    Navigation Components
                    <List>
                      <ListItem>Header</ListItem>
                      <ListItem>Link</ListItem>
                      <ListItem>Button</ListItem>
                    </List>
                  </ListItem>
                </List>
              </Card>
            </div>
          </VStack>

          <Callout
            variant="tint"
            icon={<SparklesIcon />}
            style={{ marginTop: '24px' }}
          >
            <Text size="sm">
              <strong>Versatile Lists:</strong> Use lists for navigation menus,
              feature highlights, team rosters, and more. Combine with icons and
              avatars for rich content!
            </Text>
          </Callout>
        </section>

        {/* Menus */}
        <section id="menus" className="demo-section">
          <Text size="lg" weight="semibold">
            📱 Menu Component
          </Text>
          <Text size="sm" tone="secondary" style={{ marginBottom: '24px' }}>
            Dropdown menus for actions, navigation, and contextual options in a
            compact space
          </Text>

          <VStack gap="xl">
            {/* Basic Menus */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Basic Menus
              </Text>
              <Card>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <Menu trigger={<Button variant="primary">Actions</Button>}>
                    <MenuItem icon={<PlusIcon />}>New Item</MenuItem>
                    <MenuItem icon={<DownloadIcon />}>Download</MenuItem>
                    <MenuItem icon={<SendIcon />}>Share</MenuItem>
                    <MenuDivider />
                    <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
                  </Menu>

                  <Menu trigger={<Button variant="secondary">Edit</Button>}>
                    <MenuItem icon={<PlusIcon />}>Copy</MenuItem>
                    <MenuItem icon={<DownloadIcon />}>Paste</MenuItem>
                    <MenuItem icon={<TrashIcon />} destructive>
                      Delete
                    </MenuItem>
                  </Menu>

                  <Menu
                    trigger={
                      <Button
                        variant="ghost"
                        iconOnly
                        icon={<SettingsIcon />}
                      />
                    }
                  >
                    <MenuItem icon={<SparklesIcon />}>Preferences</MenuItem>
                    <MenuItem icon={<CheckIcon />}>Notifications</MenuItem>
                    <MenuItem icon={<HeartIcon />}>Appearance</MenuItem>
                    <MenuDivider />
                    <MenuItem icon={<TrashIcon />}>Clear Cache</MenuItem>
                  </Menu>
                </div>
              </Card>
            </div>

            {/* Menu Placements */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Menu Placements
              </Text>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    gap: '16px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    padding: '40px 20px',
                  }}
                >
                  <Menu
                    trigger={<Button>Bottom Start</Button>}
                    placement="bottom-start"
                  >
                    <MenuItem>Option 1</MenuItem>
                    <MenuItem>Option 2</MenuItem>
                    <MenuItem>Option 3</MenuItem>
                  </Menu>

                  <Menu
                    trigger={<Button>Bottom End</Button>}
                    placement="bottom-end"
                  >
                    <MenuItem>Option 1</MenuItem>
                    <MenuItem>Option 2</MenuItem>
                    <MenuItem>Option 3</MenuItem>
                  </Menu>

                  <Menu
                    trigger={<Button>Top Start</Button>}
                    placement="top-start"
                  >
                    <MenuItem>Option 1</MenuItem>
                    <MenuItem>Option 2</MenuItem>
                    <MenuItem>Option 3</MenuItem>
                  </Menu>

                  <Menu trigger={<Button>Top End</Button>} placement="top-end">
                    <MenuItem>Option 1</MenuItem>
                    <MenuItem>Option 2</MenuItem>
                    <MenuItem>Option 3</MenuItem>
                  </Menu>
                </div>
              </Card>
            </div>

            {/* With Icons */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Menus with Icons
              </Text>
              <Grid columns={2} gap="md">
                <Card title="File Menu">
                  <Menu trigger={<Button variant="primary">File</Button>}>
                    <MenuItem icon={<PlusIcon />}>New File</MenuItem>
                    <MenuItem icon={<PlusIcon />}>New Folder</MenuItem>
                    <MenuDivider />
                    <MenuItem icon={<DownloadIcon />}>Open File</MenuItem>
                    <MenuItem icon={<DownloadIcon />}>Open Folder</MenuItem>
                    <MenuDivider />
                    <MenuItem icon={<CheckIcon />}>Save</MenuItem>
                    <MenuItem icon={<SendIcon />}>Save As...</MenuItem>
                  </Menu>
                </Card>

                <Card title="User Menu">
                  <Menu
                    trigger={
                      <button
                        style={{
                          padding: '8px 12px',
                          border: '1px solid var(--color-border-base)',
                          borderRadius: 'var(--radius-md)',
                          background: 'var(--color-surface-base)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          transition: 'all var(--duration-fast) var(--easing)',
                        }}
                      >
                        <div
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            background: 'var(--gradient-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '10px',
                            fontWeight: 'var(--font-weight-bold)',
                          }}
                        >
                          JD
                        </div>
                        <span style={{ fontSize: 'var(--font-size-sm)' }}>
                          John Doe
                        </span>
                      </button>
                    }
                    placement="bottom-end"
                  >
                    <MenuItem icon={<SparklesIcon />}>Profile</MenuItem>
                    <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
                    <MenuItem icon={<HeartIcon />}>Favorites</MenuItem>
                    <MenuDivider />
                    <MenuItem icon={<TrashIcon />} destructive>
                      Sign Out
                    </MenuItem>
                  </Menu>
                </Card>
              </Grid>
            </div>

            {/* Menu Groups */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Grouped Menus
              </Text>
              <Card>
                <Menu trigger={<Button variant="primary">View Options</Button>}>
                  <MenuGroup label="Layout">
                    <MenuItem icon={<CheckIcon />}>Grid View</MenuItem>
                    <MenuItem>List View</MenuItem>
                    <MenuItem>Compact View</MenuItem>
                  </MenuGroup>

                  <MenuDivider />

                  <MenuGroup label="Sort By">
                    <MenuItem>Name</MenuItem>
                    <MenuItem>Date Modified</MenuItem>
                    <MenuItem>Size</MenuItem>
                    <MenuItem>Type</MenuItem>
                  </MenuGroup>

                  <MenuDivider />

                  <MenuGroup label="Display">
                    <MenuItem icon={<CheckIcon />}>Show Hidden Files</MenuItem>
                    <MenuItem>Show File Extensions</MenuItem>
                    <MenuItem icon={<CheckIcon />}>Show Preview</MenuItem>
                  </MenuGroup>
                </Menu>
              </Card>
            </div>

            {/* States */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Item States
              </Text>
              <Card>
                <Menu trigger={<Button>Menu States</Button>}>
                  <MenuItem icon={<CheckIcon />}>Normal Item</MenuItem>
                  <MenuItem icon={<SparklesIcon />}>Active Item</MenuItem>
                  <MenuItem icon={<SettingsIcon />} disabled>
                    Disabled Item
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem icon={<TrashIcon />} destructive>
                    Destructive Action
                  </MenuItem>
                  <MenuItem icon={<TrashIcon />} destructive disabled>
                    Disabled Destructive
                  </MenuItem>
                </Menu>
              </Card>
            </div>

            {/* Custom Width */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Custom Width
              </Text>
              <Grid columns={3} gap="md">
                <Card>
                  <Text
                    size="sm"
                    weight="semibold"
                    style={{ marginBottom: '8px' }}
                  >
                    Narrow (180px)
                  </Text>
                  <Menu trigger={<Button size="sm">Open</Button>} width={180}>
                    <MenuItem>Short</MenuItem>
                    <MenuItem>Options</MenuItem>
                    <MenuItem>List</MenuItem>
                  </Menu>
                </Card>

                <Card>
                  <Text
                    size="sm"
                    weight="semibold"
                    style={{ marginBottom: '8px' }}
                  >
                    Default (220px)
                  </Text>
                  <Menu trigger={<Button size="sm">Open</Button>}>
                    <MenuItem>Standard Menu</MenuItem>
                    <MenuItem>Default Width</MenuItem>
                    <MenuItem>Perfect Size</MenuItem>
                  </Menu>
                </Card>

                <Card>
                  <Text
                    size="sm"
                    weight="semibold"
                    style={{ marginBottom: '8px' }}
                  >
                    Wide (300px)
                  </Text>
                  <Menu trigger={<Button size="sm">Open</Button>} width={300}>
                    <MenuItem>Extra Wide Menu Item</MenuItem>
                    <MenuItem>More Space for Content</MenuItem>
                    <MenuItem>Comfortable Reading</MenuItem>
                  </Menu>
                </Card>
              </Grid>
            </div>

            {/* Real-world Examples */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Real-world Examples
              </Text>
              <Grid columns={2} gap="md">
                {/* Context Menu */}
                <Card title="Table Actions">
                  <div
                    style={{
                      display: 'flex',
                      gap: '8px',
                      alignItems: 'center',
                      padding: '12px',
                      background: 'var(--color-background-subtle)',
                      borderRadius: 'var(--radius-md)',
                    }}
                  >
                    <Text size="sm">Project Alpha</Text>
                    <div style={{ marginLeft: 'auto' }}>
                      <Menu
                        trigger={
                          <Button
                            variant="ghost"
                            size="sm"
                            iconOnly
                            icon={<SettingsIcon />}
                          />
                        }
                        placement="bottom-end"
                      >
                        <MenuItem icon={<SparklesIcon />}>
                          View Details
                        </MenuItem>
                        <MenuItem icon={<PlusIcon />}>Duplicate</MenuItem>
                        <MenuItem icon={<DownloadIcon />}>Export</MenuItem>
                        <MenuDivider />
                        <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
                        <MenuItem icon={<TrashIcon />} destructive>
                          Delete
                        </MenuItem>
                      </Menu>
                    </div>
                  </div>
                </Card>

                {/* More Options */}
                <Card title="Card Actions">
                  <div
                    style={{
                      border: '1px solid var(--color-border-base)',
                      borderRadius: 'var(--radius-md)',
                      padding: '16px',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'start',
                        marginBottom: '8px',
                      }}
                    >
                      <Text size="sm" weight="semibold">
                        Document Title
                      </Text>
                      <Menu
                        trigger={
                          <button
                            style={{
                              background: 'none',
                              border: 'none',
                              cursor: 'pointer',
                              padding: '4px',
                              borderRadius: 'var(--radius-sm)',
                              display: 'flex',
                              fontSize: '16px',
                              color: 'var(--color-text-secondary)',
                            }}
                          >
                            •••
                          </button>
                        }
                        placement="bottom-end"
                      >
                        <MenuItem icon={<DownloadIcon />}>Download</MenuItem>
                        <MenuItem icon={<SendIcon />}>Share</MenuItem>
                        <MenuItem icon={<HeartIcon />}>
                          Add to Favorites
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem icon={<TrashIcon />} destructive>
                          Move to Trash
                        </MenuItem>
                      </Menu>
                    </div>
                    <Text size="xs" tone="secondary">
                      Last edited today
                    </Text>
                  </div>
                </Card>
              </Grid>
            </div>
            {/* Glass Variants */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Glass Variants ✨
              </Text>
              <Grid columns={2} gap="md">
                <Card>
                  <div
                    style={{
                      background:
                        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      padding: '48px 24px',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      minHeight: '200px',
                    }}
                  >
                    <Menu
                      trigger={
                        <Button variant="secondary">Glass Frost Menu</Button>
                      }
                      variant="glass-frost"
                    >
                      <MenuItem icon={<SparklesIcon />}>New Document</MenuItem>
                      <MenuItem icon={<DownloadIcon />}>Open File</MenuItem>
                      <MenuItem icon={<SendIcon />}>Share</MenuItem>
                      <MenuDivider />
                      <MenuItem icon={<SettingsIcon />}>Preferences</MenuItem>
                      <MenuItem icon={<HeartIcon />}>Favorites</MenuItem>
                      <MenuDivider />
                      <MenuItem icon={<TrashIcon />} destructive>
                        Delete
                      </MenuItem>
                    </Menu>
                  </div>
                  <Text size="xs" tone="secondary" style={{ marginTop: '8px' }}>
                    Frosted glass effect with backdrop blur
                  </Text>
                </Card>

                <Card>
                  <div
                    style={{
                      background:
                        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                      padding: '48px 24px',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      minHeight: '200px',
                    }}
                  >
                    <Menu
                      trigger={
                        <Button variant="secondary">Glass Tint Menu</Button>
                      }
                      variant="glass-tint"
                    >
                      <MenuItem icon={<SparklesIcon />}>Dashboard</MenuItem>
                      <MenuItem icon={<CheckIcon />}>Analytics</MenuItem>
                      <MenuItem icon={<SearchIcon />}>Reports</MenuItem>
                      <MenuDivider />
                      <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
                      <MenuItem icon={<HeartIcon />}>Notifications</MenuItem>
                      <MenuDivider />
                      <MenuItem icon={<TrashIcon />} destructive>
                        Sign Out
                      </MenuItem>
                    </Menu>
                  </div>
                  <Text size="xs" tone="secondary" style={{ marginTop: '8px' }}>
                    Tinted glass with colorful gradient overlay
                  </Text>
                </Card>
              </Grid>
            </div>
          </VStack>

          <Banner variant="info" style={{ marginTop: '24px' }}>
            <Text size="sm">
              <strong>Click Outside:</strong> Menus automatically close when
              clicking outside or pressing the Escape key for better UX.
            </Text>
          </Banner>

          <Callout
            variant="frost"
            icon={<SparklesIcon />}
            style={{ marginTop: '16px' }}
          >
            <Text size="sm">
              <strong>Glass Morphism:</strong> Use glass-frost and glass-tint
              variants for modern, beautiful menus over colorful backgrounds and
              images!
            </Text>
          </Callout>
        </section>

        {/* Meters */}
        <section id="meters" className="demo-section">
          <Text size="lg" weight="semibold">
            📊 Meter Component
          </Text>
          <Text size="sm" tone="secondary" style={{ marginBottom: '24px' }}>
            Visual indicators for progress, levels, and measurements with linear
            and circular displays
          </Text>

          <VStack gap="xl">
            {/* Basic Meters */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Basic Meters
              </Text>
              <Card>
                <VStack gap="md">
                  <Meter value={75} label="Default" showValue />
                  <Meter value={60} label="In Progress" showValue />
                  <Meter value={100} label="Complete" showValue />
                  <Meter value={30} label="Started" showValue />
                </VStack>
              </Card>
            </div>

            {/* Variants */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Color Variants
              </Text>
              <Card>
                <VStack gap="md">
                  <Meter
                    value={75}
                    variant="primary"
                    label="Primary"
                    showValue
                  />
                  <Meter
                    value={65}
                    variant="secondary"
                    label="Secondary"
                    showValue
                  />
                  <Meter
                    value={90}
                    variant="success"
                    label="Success"
                    showValue
                  />
                  <Meter
                    value={50}
                    variant="warning"
                    label="Warning"
                    showValue
                  />
                  <Meter value={25} variant="error" label="Error" showValue />
                </VStack>
              </Card>
            </div>

            {/* Gradient Variants */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Gradient Meters
              </Text>
              <Card>
                <VStack gap="md">
                  <Meter
                    value={80}
                    variant="gradient-primary"
                    label="Primary Gradient"
                    showValue
                  />
                  <Meter
                    value={70}
                    variant="gradient-purple"
                    label="Purple Gradient"
                    showValue
                  />
                </VStack>
              </Card>
            </div>

            {/* Sizes */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Sizes
              </Text>
              <Card>
                <VStack gap="md">
                  <Meter value={75} size="sm" label="Small" showValue />
                  <Meter value={75} size="md" label="Medium" showValue />
                  <Meter value={75} size="lg" label="Large" showValue />
                </VStack>
              </Card>
            </div>

            {/* With Custom Formatting */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Custom Formatting
              </Text>
              <Grid columns={2} gap="md">
                <Card>
                  <VStack gap="md">
                    <Meter
                      value={85}
                      label="Storage Used"
                      showValue
                      valueFormatter={(val) => `${val} GB`}
                    />
                    <Meter
                      value={12}
                      max={24}
                      label="Hours Worked"
                      showValue
                      valueFormatter={(val) => `${val}h`}
                    />
                    <Meter
                      value={450}
                      max={1000}
                      label="Points Earned"
                      showValue
                      valueFormatter={(val) => `${val} pts`}
                    />
                  </VStack>
                </Card>

                <Card>
                  <VStack gap="md">
                    <Meter
                      value={67.5}
                      label="Battery Level"
                      variant="success"
                      showValue
                      valueFormatter={(val) => `${val}%`}
                    />
                    <Meter
                      value={8.5}
                      max={10}
                      label="Rating"
                      variant="warning"
                      showValue
                      valueFormatter={(val) => `${val.toFixed(1)}/10`}
                    />
                    <Meter
                      value={3.2}
                      max={5}
                      label="Performance"
                      variant="gradient-primary"
                      showValue
                      valueFormatter={(val) => `${val.toFixed(1)}★`}
                    />
                  </VStack>
                </Card>
              </Grid>
            </div>

            {/* Circular Meters */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Circular Meters
              </Text>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    gap: '32px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                  }}
                >
                  <CircularMeter value={75} label="Progress" />
                  <CircularMeter
                    value={60}
                    label="Complete"
                    variant="primary"
                  />
                  <CircularMeter value={90} label="Success" variant="success" />
                  <CircularMeter value={45} label="Warning" variant="warning" />
                  <CircularMeter value={25} label="Error" variant="error" />
                </div>
              </Card>
            </div>

            {/* Circular Sizes */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Circular Sizes
              </Text>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    gap: '32px',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                  }}
                >
                  <CircularMeter
                    value={75}
                    label="Small"
                    size={80}
                    strokeWidth={6}
                  />
                  <CircularMeter
                    value={75}
                    label="Medium"
                    size={120}
                    strokeWidth={8}
                  />
                  <CircularMeter
                    value={75}
                    label="Large"
                    size={160}
                    strokeWidth={10}
                  />
                </div>
              </Card>
            </div>

            {/* Circular Gradients */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Circular Gradients
              </Text>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    gap: '32px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                  }}
                >
                  <CircularMeter
                    value={85}
                    variant="gradient-primary"
                    label="Downloads"
                    valueFormatter={(val) => `${Math.round(val)}%`}
                  />
                  <CircularMeter
                    value={70}
                    variant="gradient-purple"
                    label="Completion"
                    valueFormatter={(val) => `${Math.round(val)}%`}
                  />
                </div>
                <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                  <defs>
                    <linearGradient
                      id="gradient-primary"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#1d75bc" />
                      <stop offset="100%" stopColor="#155a94" />
                    </linearGradient>
                    <linearGradient
                      id="gradient-purple"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#a94f9e" />
                      <stop offset="100%" stopColor="#8b3f85" />
                    </linearGradient>
                  </defs>
                </svg>
              </Card>
            </div>

            {/* Real-world Examples */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Real-world Examples
              </Text>
              <Grid columns={2} gap="md">
                {/* Dashboard Stats */}
                <Card title="Dashboard Metrics">
                  <VStack gap="md">
                    <Meter
                      value={1250}
                      max={2000}
                      label="Daily Goal"
                      variant="gradient-primary"
                      showValue
                      valueFormatter={(val) => `${val} steps`}
                    />
                    <Meter
                      value={85}
                      label="Task Completion"
                      variant="success"
                      showValue
                      valueFormatter={(val) => `${val}%`}
                    />
                    <Meter
                      value={32}
                      max={50}
                      label="API Calls"
                      variant="warning"
                      showValue
                    />
                  </VStack>
                </Card>

                {/* Circular Dashboard */}
                <Card title="Performance Overview">
                  <div
                    style={{
                      display: 'flex',
                      gap: '24px',
                      justifyContent: 'space-around',
                    }}
                  >
                    <CircularMeter
                      value={88}
                      variant="success"
                      label="Uptime"
                      size={100}
                    />
                    <CircularMeter
                      value={67}
                      variant="warning"
                      label="Speed"
                      size={100}
                    />
                    <CircularMeter
                      value={92}
                      variant="primary"
                      label="Quality"
                      size={100}
                    />
                  </div>
                </Card>
              </Grid>
            </div>

            {/* Skills Display */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Skills & Proficiency
              </Text>
              <Card title="Technical Skills">
                <VStack gap="md">
                  <Meter
                    value={95}
                    label="React"
                    variant="gradient-primary"
                    showValue
                  />
                  <Meter
                    value={88}
                    label="TypeScript"
                    variant="gradient-primary"
                    showValue
                  />
                  <Meter
                    value={92}
                    label="CSS"
                    variant="gradient-purple"
                    showValue
                  />
                  <Meter
                    value={78}
                    label="Node.js"
                    variant="gradient-purple"
                    showValue
                  />
                  <Meter
                    value={85}
                    label="Design Systems"
                    variant="gradient-primary"
                    showValue
                  />
                </VStack>
              </Card>
            </div>
          </VStack>

          <Banner variant="success" style={{ marginTop: '24px' }}>
            <Text size="sm">
              <strong>Accessible:</strong> Meters use proper ARIA attributes for
              screen readers and include semantic HTML.
            </Text>
          </Banner>
        </section>

        {/* Tables */}
        <section id="tables" className="demo-section">
          <Text size="lg" weight="semibold">
            📋 Table Component
          </Text>
          <Text size="sm" tone="secondary" style={{ marginBottom: '24px' }}>
            Flexible tables for displaying tabular data with sorting, selection,
            and custom rendering
          </Text>

          <VStack gap="xl">
            {/* Basic Table */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Basic Table
              </Text>
              <Card>
                <Table
                  columns={[
                    { key: 'name', label: 'Name' },
                    { key: 'email', label: 'Email' },
                    { key: 'role', label: 'Role' },
                    { key: 'status', label: 'Status' },
                  ]}
                  data={[
                    {
                      id: '1',
                      name: 'John Doe',
                      email: 'john@example.com',
                      role: 'Admin',
                      status: 'Active',
                    },
                    {
                      id: '2',
                      name: 'Sarah Miller',
                      email: 'sarah@example.com',
                      role: 'Editor',
                      status: 'Active',
                    },
                    {
                      id: '3',
                      name: 'Alex Kim',
                      email: 'alex@example.com',
                      role: 'Viewer',
                      status: 'Inactive',
                    },
                    {
                      id: '4',
                      name: 'Emily Chen',
                      email: 'emily@example.com',
                      role: 'Editor',
                      status: 'Active',
                    },
                  ]}
                />
              </Card>
            </div>

            {/* Sortable Table */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Sortable Columns
              </Text>
              <Card>
                <Table
                  columns={[
                    { key: 'product', label: 'Product', sortable: true },
                    { key: 'category', label: 'Category', sortable: true },
                    {
                      key: 'price',
                      label: 'Price',
                      sortable: true,
                      align: 'right',
                    },
                    {
                      key: 'stock',
                      label: 'Stock',
                      sortable: true,
                      align: 'center',
                    },
                  ]}
                  data={[
                    {
                      id: '1',
                      product: 'Laptop Pro',
                      category: 'Electronics',
                      price: '$1,299',
                      stock: 45,
                    },
                    {
                      id: '2',
                      product: 'Desk Chair',
                      category: 'Furniture',
                      price: '$349',
                      stock: 23,
                    },
                    {
                      id: '3',
                      product: 'Coffee Maker',
                      category: 'Appliances',
                      price: '$89',
                      stock: 67,
                    },
                    {
                      id: '4',
                      product: 'Monitor 4K',
                      category: 'Electronics',
                      price: '$599',
                      stock: 12,
                    },
                    {
                      id: '5',
                      product: 'Standing Desk',
                      category: 'Furniture',
                      price: '$799',
                      stock: 8,
                    },
                  ]}
                />
              </Card>
            </div>

            {/* Table Variants */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Variants
              </Text>
              <Grid columns={2} gap="md">
                <Card title="Bordered">
                  <Table
                    variant="bordered"
                    columns={[
                      { key: 'name', label: 'Name' },
                      { key: 'value', label: 'Value', align: 'right' },
                    ]}
                    data={[
                      { id: '1', name: 'Revenue', value: '$45,000' },
                      { id: '2', name: 'Expenses', value: '$23,500' },
                      { id: '3', name: 'Profit', value: '$21,500' },
                    ]}
                  />
                </Card>

                <Card title="Striped">
                  <Table
                    variant="striped"
                    columns={[
                      { key: 'name', label: 'Name' },
                      { key: 'value', label: 'Value', align: 'right' },
                    ]}
                    data={[
                      { id: '1', name: 'Revenue', value: '$45,000' },
                      { id: '2', name: 'Expenses', value: '$23,500' },
                      { id: '3', name: 'Profit', value: '$21,500' },
                    ]}
                  />
                </Card>
              </Grid>
            </div>

            {/* Table Sizes */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Sizes
              </Text>
              <VStack gap="md">
                <Card title="Compact">
                  <Table
                    size="compact"
                    columns={[
                      { key: 'task', label: 'Task' },
                      { key: 'assignee', label: 'Assignee' },
                      { key: 'due', label: 'Due Date' },
                    ]}
                    data={[
                      {
                        id: '1',
                        task: 'Design review',
                        assignee: 'John',
                        due: 'Today',
                      },
                      {
                        id: '2',
                        task: 'Code review',
                        assignee: 'Sarah',
                        due: 'Tomorrow',
                      },
                    ]}
                  />
                </Card>

                <Card title="Spacious">
                  <Table
                    size="spacious"
                    columns={[
                      { key: 'task', label: 'Task' },
                      { key: 'assignee', label: 'Assignee' },
                      { key: 'due', label: 'Due Date' },
                    ]}
                    data={[
                      {
                        id: '1',
                        task: 'Design review',
                        assignee: 'John',
                        due: 'Today',
                      },
                      {
                        id: '2',
                        task: 'Code review',
                        assignee: 'Sarah',
                        due: 'Tomorrow',
                      },
                    ]}
                  />
                </Card>
              </VStack>
            </div>

            {/* Custom Rendering */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Custom Cell Rendering
              </Text>
              <Card>
                <Table
                  columns={[
                    { key: 'name', label: 'User' },
                    { key: 'email', label: 'Email' },
                    {
                      key: 'role',
                      label: 'Role',
                      render: (value) => (
                        <span
                          style={{
                            padding: '4px 8px',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: 'var(--font-size-xs)',
                            fontWeight: 'var(--font-weight-medium)',
                            background:
                              value === 'Admin'
                                ? 'rgba(29, 117, 188, 0.1)'
                                : value === 'Editor'
                                  ? 'rgba(231, 192, 103, 0.2)'
                                  : 'rgba(156, 163, 175, 0.2)',
                            color:
                              value === 'Admin'
                                ? '#1d75bc'
                                : value === 'Editor'
                                  ? '#d4a574'
                                  : 'var(--color-text-secondary)',
                          }}
                        >
                          {value}
                        </span>
                      ),
                    },
                    {
                      key: 'status',
                      label: 'Status',
                      align: 'center',
                      render: (value) => (
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: 'var(--font-size-sm)',
                            color: value === 'Active' ? '#14b8a6' : '#9ca3af',
                          }}
                        >
                          <span
                            style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              background:
                                value === 'Active' ? '#14b8a6' : '#9ca3af',
                            }}
                          />
                          {value}
                        </span>
                      ),
                    },
                  ]}
                  data={[
                    {
                      id: '1',
                      name: 'John Doe',
                      email: 'john@example.com',
                      role: 'Admin',
                      status: 'Active',
                    },
                    {
                      id: '2',
                      name: 'Sarah Miller',
                      email: 'sarah@example.com',
                      role: 'Editor',
                      status: 'Active',
                    },
                    {
                      id: '3',
                      name: 'Alex Kim',
                      email: 'alex@example.com',
                      role: 'Viewer',
                      status: 'Inactive',
                    },
                  ]}
                />
              </Card>
            </div>

            {/* With Actions */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                With Actions
              </Text>
              <Card>
                <Table
                  columns={[
                    { key: 'name', label: 'Project' },
                    { key: 'owner', label: 'Owner' },
                    { key: 'progress', label: 'Progress', align: 'center' },
                    {
                      key: 'actions',
                      label: 'Actions',
                      align: 'right',
                      render: () => (
                        <div
                          style={{
                            display: 'flex',
                            gap: '8px',
                            justifyContent: 'flex-end',
                          }}
                        >
                          <Button
                            variant="ghost"
                            size="sm"
                            iconOnly
                            icon={<SparklesIcon />}
                          />
                          <Button
                            variant="ghost"
                            size="sm"
                            iconOnly
                            icon={<SettingsIcon />}
                          />
                          <Button
                            variant="ghost"
                            size="sm"
                            iconOnly
                            icon={<TrashIcon />}
                          />
                        </div>
                      ),
                    },
                  ]}
                  data={[
                    {
                      id: '1',
                      name: 'Website Redesign',
                      owner: 'John Doe',
                      progress: '75%',
                      actions: null,
                    },
                    {
                      id: '2',
                      name: 'Mobile App',
                      owner: 'Sarah Miller',
                      progress: '50%',
                      actions: null,
                    },
                    {
                      id: '3',
                      name: 'API Integration',
                      owner: 'Alex Kim',
                      progress: '90%',
                      actions: null,
                    },
                  ]}
                />
              </Card>
            </div>

            {/* Sticky Header */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Sticky Header with Scroll
              </Text>
              <Card>
                <Table
                  stickyHeader
                  maxHeight={300}
                  columns={[
                    { key: 'id', label: 'ID', width: '60px' },
                    { key: 'transaction', label: 'Transaction' },
                    { key: 'amount', label: 'Amount', align: 'right' },
                    { key: 'date', label: 'Date' },
                    { key: 'status', label: 'Status' },
                  ]}
                  data={Array.from({ length: 15 }, (_, i) => ({
                    id: String(i + 1).padStart(3, '0'),
                    transaction: `Transaction ${i + 1}`,
                    amount: `$${((i + 1) * 127.43 % 1000).toFixed(2)}`,
                    date: `2026-01-${String(i + 1).padStart(2, '0')}`,
                    status:
                      i % 3 === 0
                        ? 'Pending'
                        : i % 2 === 0
                          ? 'Completed'
                          : 'Processing',
                  }))}
                />
              </Card>
            </div>

            {/* Empty State */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Empty State
              </Text>
              <Card>
                <Table
                  columns={[
                    { key: 'name', label: 'Name' },
                    { key: 'email', label: 'Email' },
                    { key: 'role', label: 'Role' },
                  ]}
                  data={[]}
                  emptyState={
                    <EmptyState
                      icon={<SearchIcon />}
                      title="No data found"
                      description="There are no items to display"
                    >
                      <Button variant="primary">Add Item</Button>
                    </EmptyState>
                  }
                />
              </Card>
            </div>

            {/* Glass Header Variants */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Glass Header Variants ✨
              </Text>
              <Grid columns={2} gap="md">
                <Card title="Glass Frost Header">
                  <Table
                    headerVariant="glass-frost"
                    columns={[
                      { key: 'name', label: 'Product' },
                      { key: 'category', label: 'Category' },
                      { key: 'price', label: 'Price', align: 'right' },
                    ]}
                    data={[
                      {
                        id: '1',
                        name: 'Wireless Mouse',
                        category: 'Electronics',
                        price: '$29.99',
                      },
                      {
                        id: '2',
                        name: 'Keyboard',
                        category: 'Electronics',
                        price: '$79.99',
                      },
                      {
                        id: '3',
                        name: 'Monitor Stand',
                        category: 'Accessories',
                        price: '$49.99',
                      },
                    ]}
                  />
                </Card>

                <Card title="Glass Tint Header">
                  <Table
                    headerVariant="glass-tint"
                    columns={[
                      { key: 'name', label: 'Product' },
                      { key: 'category', label: 'Category' },
                      { key: 'price', label: 'Price', align: 'right' },
                    ]}
                    data={[
                      {
                        id: '1',
                        name: 'Laptop Bag',
                        category: 'Accessories',
                        price: '$39.99',
                      },
                      {
                        id: '2',
                        name: 'USB Hub',
                        category: 'Electronics',
                        price: '$24.99',
                      },
                      {
                        id: '3',
                        name: 'Desk Lamp',
                        category: 'Lighting',
                        price: '$59.99',
                      },
                    ]}
                  />
                </Card>
              </Grid>
            </div>

            {/* Pagination */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                With Pagination
              </Text>
              <Card>
                <Table
                  pagination
                  page={1}
                  pageSize={tablePageSize}
                  onPageChange={(newPage) =>
                    console.log('Page changed to:', newPage)
                  }
                  onPageSizeChange={(size) => setTablePageSize(size)}
                  columns={[
                    { key: 'id', label: 'ID', width: '60px' },
                    { key: 'customer', label: 'Customer', sortable: true },
                    { key: 'email', label: 'Email', sortable: true },
                    { key: 'status', label: 'Status', align: 'center' },
                    {
                      key: 'amount',
                      label: 'Amount',
                      align: 'right',
                      sortable: true,
                    },
                  ]}
                  data={Array.from({ length: 25 }, (_, i) => ({
                    id: String(i + 1).padStart(3, '0'),
                    customer: `Customer ${i + 1}`,
                    email: `customer${i + 1}@example.com`,
                    status: i % 3 === 0 ? 'Active' : 'Pending',
                    amount: `$${((i + 1) * 73.21 % 500 + 50).toFixed(2)}`,
                  }))}
                />
              </Card>
            </div>

            {/* Complete Example with Search, Filter, Pagination, and Scrolling */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Complete Data Table Example 🚀
              </Text>
              <Text size="sm" tone="secondary" style={{ marginBottom: '16px' }}>
                Search, filter, sort, paginate, and scroll - all in one modern
                table with sticky header
              </Text>
              <Card style={{ position: 'relative', overflow: 'visible' }}>
                <VStack gap="md">
                  {/* Search and Filter Bar */}
                  <HStack gap="md" align="center" style={{ flexWrap: 'wrap' }}>
                    <Input
                      placeholder="Search by name or email..."
                      icon={<SearchIcon />}
                      style={{ flex: 1, minWidth: '250px' }}
                      value={tableSearch}
                      onChange={(e) => setTableSearch(e.target.value)}
                    />
                    <MultiSelect
                      variant="compact"
                      options={[
                        { value: 'Active', label: 'Active' },
                        { value: 'Inactive', label: 'Inactive' },
                        { value: 'Pending', label: 'Pending' },
                      ]}
                      placeholder="All Status"
                      style={{ minWidth: '180px' }}
                      value={statusFilters}
                      onChange={setStatusFilters}
                    />
                    <MultiSelect
                      variant="compact"
                      options={[
                        { value: 'Admin', label: 'Admin' },
                        { value: 'Editor', label: 'Editor' },
                        { value: 'Viewer', label: 'Viewer' },
                      ]}
                      placeholder="All Roles"
                      style={{ minWidth: '180px' }}
                      value={roleFilters}
                      onChange={setRoleFilters}
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      iconOnly
                      icon={<SettingsIcon />}
                    />
                  </HStack>

                  <Divider />

                  {/* Table with Glass Header and Pagination */}
                  <Table
                    headerVariant="glass-frost"
                    stickyHeader
                    maxHeight={500}
                    pagination
                    page={tablePage}
                    pageSize={tableDataPageSize}
                    onPageChange={(newPage) => setTablePage(newPage)}
                    onPageSizeChange={(size) => setTableDataPageSize(size)}
                    columns={[
                      {
                        key: 'name',
                        label: 'Name',
                        sortable: true,
                        render: (value, row: Record<string, unknown>) => (
                          <HStack gap="sm" align="center">
                            <div
                              style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                background: row.avatar,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: '12px',
                                fontWeight: 'var(--font-weight-bold)',
                                flexShrink: 0,
                              }}
                            >
                              {value
                                .split(' ')
                                .map((n: string) => n[0])
                                .join('')}
                            </div>
                            <div>
                              <Text size="sm" weight="semibold">
                                {value}
                              </Text>
                            </div>
                          </HStack>
                        ),
                      },
                      { key: 'email', label: 'Email', sortable: true },
                      {
                        key: 'role',
                        label: 'Role',
                        align: 'center',
                        render: (value) => (
                          <span
                            style={{
                              padding: '4px 10px',
                              borderRadius: 'var(--radius-full)',
                              fontSize: 'var(--font-size-xs)',
                              fontWeight: 'var(--font-weight-semibold)',
                              background:
                                value === 'Admin'
                                  ? 'rgba(29, 117, 188, 0.15)'
                                  : value === 'Editor'
                                    ? 'rgba(231, 192, 103, 0.25)'
                                    : 'rgba(156, 163, 175, 0.2)',
                              color:
                                value === 'Admin'
                                  ? '#1d75bc'
                                  : value === 'Editor'
                                    ? '#d4a574'
                                    : 'var(--color-text-secondary)',
                            }}
                          >
                            {value}
                          </span>
                        ),
                      },
                      {
                        key: 'status',
                        label: 'Status',
                        align: 'center',
                        sortable: true,
                        render: (value) => (
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              fontSize: 'var(--font-size-sm)',
                              fontWeight: 'var(--font-weight-medium)',
                              color:
                                value === 'Active'
                                  ? '#14b8a6'
                                  : value === 'Pending'
                                    ? '#fbbf24'
                                    : '#9ca3af',
                            }}
                          >
                            <span
                              style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                background:
                                  value === 'Active'
                                    ? '#14b8a6'
                                    : value === 'Pending'
                                      ? '#fbbf24'
                                      : '#9ca3af',
                              }}
                            />
                            {value}
                          </span>
                        ),
                      },
                      {
                        key: 'joined',
                        label: 'Joined',
                        sortable: true,
                        align: 'right',
                      },
                      {
                        key: 'actions',
                        label: 'Actions',
                        align: 'right',
                        render: () => (
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'flex-end',
                            }}
                          >
                            <Menu
                              trigger={
                                <button
                                  style={{
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: 'var(--space-xs)',
                                    borderRadius: 'var(--radius-md)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--color-text-secondary)',
                                    transition:
                                      'all var(--duration-fast) var(--easing)',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    width: '32px',
                                    height: '32px',
                                  }}
                                >
                                  •••
                                </button>
                              }
                              placement="bottom-end"
                            >
                              <MenuItem icon={<SparklesIcon />}>
                                View Profile
                              </MenuItem>
                              <MenuItem icon={<SettingsIcon />}>
                                Edit User
                              </MenuItem>
                              <MenuDivider />
                              <MenuItem icon={<TrashIcon />} destructive>
                                Remove
                              </MenuItem>
                            </Menu>
                          </div>
                        ),
                      },
                    ]}
                    data={(() => {
                      // Generate all data
                      const allData = Array.from({ length: 50 }, (_, i) => ({
                        id: String(i + 1),
                        name: [
                          'Alice Johnson',
                          'Bob Smith',
                          'Carol Williams',
                          'David Brown',
                          'Eve Davis',
                          'Frank Miller',
                          'Grace Wilson',
                          'Henry Moore',
                          'Iris Taylor',
                          'Jack Anderson',
                          'Kate Thomas',
                          'Leo Jackson',
                        ][i % 12],
                        email: `user${i + 1}@example.com`,
                        role: ['Admin', 'Editor', 'Viewer'][i % 3],
                        status: ['Active', 'Inactive', 'Pending'][i % 3],
                        joined: `2026-01-${String((i % 28) + 1).padStart(2, '0')}`,
                        avatar: [
                          'var(--gradient-primary)',
                          'var(--gradient-secondary)',
                          'var(--gradient-purple)',
                        ][i % 3],
                        actions: null,
                      }))

                      // Apply filters
                      return allData.filter((item) => {
                        // Search filter
                        if (tableSearch) {
                          const search = tableSearch.toLowerCase()
                          const matchesSearch =
                            item.name.toLowerCase().includes(search) ||
                            item.email.toLowerCase().includes(search)
                          if (!matchesSearch) return false
                        }

                        // Status filter
                        if (
                          statusFilters.length > 0 &&
                          !statusFilters.includes(item.status)
                        ) {
                          return false
                        }

                        // Role filter
                        if (
                          roleFilters.length > 0 &&
                          !roleFilters.includes(item.role)
                        ) {
                          return false
                        }

                        return true
                      })
                    })()}
                    total={(() => {
                      const allData = Array.from({ length: 50 }, (_, i) => ({
                        name: [
                          'Alice Johnson',
                          'Bob Smith',
                          'Carol Williams',
                          'David Brown',
                          'Eve Davis',
                          'Frank Miller',
                          'Grace Wilson',
                          'Henry Moore',
                          'Iris Taylor',
                          'Jack Anderson',
                          'Kate Thomas',
                          'Leo Jackson',
                        ][i % 12],
                        email: `user${i + 1}@example.com`,
                        role: ['Admin', 'Editor', 'Viewer'][i % 3],
                        status: ['Active', 'Inactive', 'Pending'][i % 3],
                      }))

                      return allData.filter((item) => {
                        if (tableSearch) {
                          const search = tableSearch.toLowerCase()
                          const matchesSearch =
                            item.name.toLowerCase().includes(search) ||
                            item.email.toLowerCase().includes(search)
                          if (!matchesSearch) return false
                        }
                        if (
                          statusFilters.length > 0 &&
                          !statusFilters.includes(item.status)
                        ) {
                          return false
                        }
                        if (
                          roleFilters.length > 0 &&
                          !roleFilters.includes(item.role)
                        ) {
                          return false
                        }
                        return true
                      }).length
                    })()}
                  />
                </VStack>
              </Card>
              <Text size="xs" tone="secondary" style={{ marginTop: '8px' }}>
                ✨ This example demonstrates: glass tint header, sticky header
                (scroll the table to see it), search bar, multi-select filters,
                sorting, custom rendering, pagination, and floating action menus
              </Text>
            </div>
          </VStack>

          <Banner variant="info" style={{ marginTop: '24px' }}>
            <Text size="sm">
              <strong>Responsive:</strong> Tables automatically become
              scrollable on smaller screens to maintain readability.
            </Text>
          </Banner>

          <Callout
            variant="frost"
            icon={<SparklesIcon />}
            style={{ marginTop: '16px' }}
          >
            <Text size="sm">
              <strong>Glass Headers:</strong> Use glass-frost or glass-tint
              header variants for modern, sophisticated table designs with
              glassmorphism effects!
            </Text>
          </Callout>
        </section>

        {/* Panel Layouts */}
        <section id="panels" className="demo-section">
          <Text size="lg" weight="semibold">
            ✨ Panel Layout Component
          </Text>

          <Text size="sm" tone="secondary" style={{ marginBottom: '24px' }}>
            Flexible layout component with collapsible sidebar that collapses to
            icon-only view on desktop and overlays on mobile.
          </Text>

          {/* Basic Panel Layout */}
          <div style={{ marginBottom: '24px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Basic Panel Layout
            </Text>
            <Card style={{ height: '500px', overflow: 'hidden' }}>
              <Panel side="left" variant="elevated" defaultCollapsed={false}>
                <Panel.Sidebar>
                  <VStack gap="md">
                    <Text size="sm" weight="semibold">
                      Navigation
                    </Text>
                    <VStack gap="xs">
                      <Tooltip content="Search" side="right">
                        <Button
                          variant="ghost"
                          size="sm"
                          fullWidth
                          style={{ justifyContent: 'flex-start' }}
                          icon={<SearchIcon />}
                        >
                          Search
                        </Button>
                      </Tooltip>
                      <Tooltip content="Notifications" side="right">
                        <Button
                          variant="ghost"
                          size="sm"
                          fullWidth
                          style={{ justifyContent: 'flex-start' }}
                          icon={<BellIcon />}
                        >
                          Notifications
                        </Button>
                      </Tooltip>
                      <Tooltip content="Settings" side="right">
                        <Button
                          variant="ghost"
                          size="sm"
                          fullWidth
                          style={{ justifyContent: 'flex-start' }}
                          icon={<SettingsIcon />}
                        >
                          Settings
                        </Button>
                      </Tooltip>
                      <Tooltip content="Favorites" side="right">
                        <Button
                          variant="ghost"
                          size="sm"
                          fullWidth
                          style={{ justifyContent: 'flex-start' }}
                          icon={<HeartIcon />}
                        >
                          Favorites
                        </Button>
                      </Tooltip>
                    </VStack>
                    <Divider />
                    <Text size="sm" weight="semibold">
                      Recent
                    </Text>
                    <VStack gap="xs">
                      <Tooltip content="Project Alpha" side="right">
                        <Button
                          variant="ghost"
                          size="sm"
                          fullWidth
                          style={{ justifyContent: 'flex-start' }}
                          icon={<SparklesIcon />}
                        >
                          Project Alpha
                        </Button>
                      </Tooltip>
                      <Tooltip content="Dashboard" side="right">
                        <Button
                          variant="ghost"
                          size="sm"
                          fullWidth
                          style={{ justifyContent: 'flex-start' }}
                          icon={<CheckIcon />}
                        >
                          Dashboard
                        </Button>
                      </Tooltip>
                    </VStack>
                  </VStack>
                </Panel.Sidebar>
                <Panel.Content>
                  <div style={{ padding: 'var(--space-xl)' }}>
                    <Text
                      size="xl"
                      weight="bold"
                      style={{ marginBottom: '16px' }}
                    >
                      Welcome to Panel Layout
                    </Text>
                    <Text
                      size="sm"
                      tone="secondary"
                      style={{ marginBottom: '24px' }}
                    >
                      Click the toggle button on the sidebar edge to collapse it
                      to icon-only view. The layout automatically adapts with
                      smooth transitions.
                    </Text>
                    <Grid columns={2} gap="md">
                      <Card variant="outlined" padding="lg">
                        <Text
                          size="sm"
                          weight="semibold"
                          style={{ marginBottom: '8px' }}
                        >
                          Feature 1
                        </Text>
                        <Text size="sm" tone="secondary">
                          Collapsible sidebar that reduces to icons
                        </Text>
                      </Card>
                      <Card variant="outlined" padding="lg">
                        <Text
                          size="sm"
                          weight="semibold"
                          style={{ marginBottom: '8px' }}
                        >
                          Feature 2
                        </Text>
                        <Text size="sm" tone="secondary">
                          Mobile responsive with overlay
                        </Text>
                      </Card>
                      <Card variant="outlined" padding="lg">
                        <Text
                          size="sm"
                          weight="semibold"
                          style={{ marginBottom: '8px' }}
                        >
                          Feature 3
                        </Text>
                        <Text size="sm" tone="secondary">
                          Smooth transitions and animations
                        </Text>
                      </Card>
                      <Card variant="outlined" padding="lg">
                        <Text
                          size="sm"
                          weight="semibold"
                          style={{ marginBottom: '8px' }}
                        >
                          Feature 4
                        </Text>
                        <Text size="sm" tone="secondary">
                          Glass variants supported
                        </Text>
                      </Card>
                    </Grid>
                  </div>
                </Panel.Content>
              </Panel>
            </Card>
          </div>

          {/* Right Side Panel */}
          <div style={{ marginBottom: '24px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Right Side Panel
            </Text>
            <Card style={{ height: '400px', overflow: 'hidden' }}>
              <Panel side="right" variant="outlined" defaultCollapsed={false}>
                <Panel.Sidebar>
                  <VStack gap="md">
                    <Text size="sm" weight="semibold">
                      Actions
                    </Text>
                    <VStack gap="xs">
                      <Tooltip content="New Item" side="left">
                        <Button
                          variant="primary"
                          size="sm"
                          fullWidth
                          icon={<PlusIcon />}
                        >
                          New Item
                        </Button>
                      </Tooltip>
                      <Tooltip content="Export" side="left">
                        <Button
                          variant="ghost"
                          size="sm"
                          fullWidth
                          icon={<DownloadIcon />}
                        >
                          Export
                        </Button>
                      </Tooltip>
                      <Tooltip content="Share" side="left">
                        <Button
                          variant="ghost"
                          size="sm"
                          fullWidth
                          icon={<SendIcon />}
                        >
                          Share
                        </Button>
                      </Tooltip>
                    </VStack>
                    <Divider />
                    <Text size="sm" weight="semibold">
                      Filters
                    </Text>
                    <Switch label="Active only" defaultChecked />
                    <Switch label="Show archived" />
                  </VStack>
                </Panel.Sidebar>
                <Panel.Content>
                  <div style={{ padding: 'var(--space-xl)' }}>
                    <Text
                      size="lg"
                      weight="bold"
                      style={{ marginBottom: '16px' }}
                    >
                      Right Side Panel Example
                    </Text>
                    <Text size="sm" tone="secondary">
                      The panel can be positioned on either the left or right
                      side. This example shows a right-side panel with action
                      buttons and filters.
                    </Text>
                  </div>
                </Panel.Content>
              </Panel>
            </Card>
          </div>

          {/* Glass Variants */}
          <div style={{ marginBottom: '24px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Glass Variants
            </Text>
            <Grid columns={2} gap="md">
              <Card style={{ height: '400px', overflow: 'hidden' }}>
                <Panel variant="glass-frost" defaultCollapsed={false}>
                  <Panel.Sidebar>
                    <VStack gap="md">
                      <Text size="sm" weight="semibold">
                        Glass Frost
                      </Text>
                      <VStack gap="xs">
                        <Tooltip content="Search" side="right">
                          <Button
                            variant="ghost"
                            size="sm"
                            fullWidth
                            style={{ justifyContent: 'flex-start' }}
                            icon={<SearchIcon />}
                          >
                            Search
                          </Button>
                        </Tooltip>
                        <Tooltip content="Settings" side="right">
                          <Button
                            variant="ghost"
                            size="sm"
                            fullWidth
                            style={{ justifyContent: 'flex-start' }}
                            icon={<SettingsIcon />}
                          >
                            Settings
                          </Button>
                        </Tooltip>
                        <Tooltip content="Favorites" side="right">
                          <Button
                            variant="ghost"
                            size="sm"
                            fullWidth
                            style={{ justifyContent: 'flex-start' }}
                            icon={<HeartIcon />}
                          >
                            Favorites
                          </Button>
                        </Tooltip>
                      </VStack>
                    </VStack>
                  </Panel.Sidebar>
                  <Panel.Content>
                    <div style={{ padding: 'var(--space-lg)' }}>
                      <Text
                        size="md"
                        weight="semibold"
                        style={{ marginBottom: '8px' }}
                      >
                        Frosted Glass
                      </Text>
                      <Text size="sm" tone="secondary">
                        Modern glassmorphism effect with frosted blur backdrop.
                      </Text>
                    </div>
                  </Panel.Content>
                </Panel>
              </Card>

              <Card style={{ height: '400px', overflow: 'hidden' }}>
                <Panel variant="glass-tint" defaultCollapsed={false}>
                  <Panel.Sidebar>
                    <VStack gap="md">
                      <Text size="sm" weight="semibold">
                        Glass Tint
                      </Text>
                      <VStack gap="xs">
                        <Tooltip content="AI Tools" side="right">
                          <Button
                            variant="ghost"
                            size="sm"
                            fullWidth
                            style={{ justifyContent: 'flex-start' }}
                            icon={<SparklesIcon />}
                          >
                            AI Tools
                          </Button>
                        </Tooltip>
                        <Tooltip content="Updates" side="right">
                          <Button
                            variant="ghost"
                            size="sm"
                            fullWidth
                            style={{ justifyContent: 'flex-start' }}
                            icon={<BellIcon />}
                          >
                            Updates
                          </Button>
                        </Tooltip>
                        <Tooltip content="Settings" side="right">
                          <Button
                            variant="ghost"
                            size="sm"
                            fullWidth
                            style={{ justifyContent: 'flex-start' }}
                            icon={<SettingsIcon />}
                          >
                            Settings
                          </Button>
                        </Tooltip>
                      </VStack>
                    </VStack>
                  </Panel.Sidebar>
                  <Panel.Content>
                    <div style={{ padding: 'var(--space-lg)' }}>
                      <Text
                        size="md"
                        weight="semibold"
                        style={{ marginBottom: '8px' }}
                      >
                        Tinted Glass
                      </Text>
                      <Text size="sm" tone="secondary">
                        Glassmorphism with subtle brand color gradient tint.
                      </Text>
                    </div>
                  </Panel.Content>
                </Panel>
              </Card>
            </Grid>
          </div>

          {/* Practical Example */}
          <div style={{ marginBottom: '24px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Dashboard Example
            </Text>
            <Card style={{ height: '600px', overflow: 'hidden' }}>
              <Panel variant="filled" defaultCollapsed={false}>
                <Panel.Sidebar>
                  <VStack gap="lg">
                    <div style={{ padding: 'var(--space-sm) 0' }}>
                      <Text
                        size="lg"
                        weight="bold"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        Bien UI
                      </Text>
                    </div>
                    <VStack gap="xs">
                      <Text
                        size="xs"
                        weight="semibold"
                        tone="secondary"
                        style={{
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}
                      >
                        Main
                      </Text>
                      <Tooltip content="Dashboard" side="right">
                        <Button
                          variant="primary"
                          size="sm"
                          fullWidth
                          style={{ justifyContent: 'flex-start' }}
                          icon={<SearchIcon />}
                        >
                          Dashboard
                        </Button>
                      </Tooltip>
                      <Tooltip content="Analytics" side="right">
                        <Button
                          variant="ghost"
                          size="sm"
                          fullWidth
                          style={{ justifyContent: 'flex-start' }}
                          icon={<SparklesIcon />}
                        >
                          Analytics
                        </Button>
                      </Tooltip>
                      <Tooltip content="Notifications" side="right">
                        <Button
                          variant="ghost"
                          size="sm"
                          fullWidth
                          style={{ justifyContent: 'flex-start' }}
                          icon={<BellIcon />}
                        >
                          Notifications
                        </Button>
                      </Tooltip>
                    </VStack>
                    <Divider />
                    <VStack gap="xs">
                      <Text
                        size="xs"
                        weight="semibold"
                        tone="secondary"
                        style={{
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}
                      >
                        Management
                      </Text>
                      <Tooltip content="Settings" side="right">
                        <Button
                          variant="ghost"
                          size="sm"
                          fullWidth
                          style={{ justifyContent: 'flex-start' }}
                          icon={<SettingsIcon />}
                        >
                          Settings
                        </Button>
                      </Tooltip>
                      <Tooltip content="Favorites" side="right">
                        <Button
                          variant="ghost"
                          size="sm"
                          fullWidth
                          style={{ justifyContent: 'flex-start' }}
                          icon={<HeartIcon />}
                        >
                          Favorites
                        </Button>
                      </Tooltip>
                    </VStack>
                  </VStack>
                </Panel.Sidebar>
                <Panel.Content>
                  <div style={{ padding: 'var(--space-xl)' }}>
                    <HStack
                      gap="md"
                      align="center"
                      style={{ marginBottom: 'var(--space-xl)' }}
                    >
                      <div style={{ flex: 1 }}>
                        <Text size="xl" weight="bold">
                          Dashboard Overview
                        </Text>
                        <Text size="sm" tone="secondary">
                          Welcome back! Here&apos;s what&apos;s happening.
                        </Text>
                      </div>
                      <Button variant="primary" icon={<PlusIcon />}>
                        New Project
                      </Button>
                    </HStack>

                    <Grid
                      columns={3}
                      gap="md"
                      style={{ marginBottom: 'var(--space-xl)' }}
                    >
                      <Card variant="outlined" padding="lg">
                        <Text
                          size="xs"
                          tone="secondary"
                          style={{ marginBottom: '8px' }}
                        >
                          Total Users
                        </Text>
                        <Text
                          size="2xl"
                          weight="bold"
                          style={{ color: 'var(--color-primary)' }}
                        >
                          12,485
                        </Text>
                        <Text
                          size="xs"
                          tone="secondary"
                          style={{ marginTop: '4px' }}
                        >
                          +12% from last month
                        </Text>
                      </Card>
                      <Card variant="outlined" padding="lg">
                        <Text
                          size="xs"
                          tone="secondary"
                          style={{ marginBottom: '8px' }}
                        >
                          Revenue
                        </Text>
                        <Text
                          size="2xl"
                          weight="bold"
                          style={{ color: 'var(--color-accent)' }}
                        >
                          $54,239
                        </Text>
                        <Text
                          size="xs"
                          tone="secondary"
                          style={{ marginTop: '4px' }}
                        >
                          +8% from last month
                        </Text>
                      </Card>
                      <Card variant="outlined" padding="lg">
                        <Text
                          size="xs"
                          tone="secondary"
                          style={{ marginBottom: '8px' }}
                        >
                          Active Projects
                        </Text>
                        <Text
                          size="2xl"
                          weight="bold"
                          style={{ color: 'var(--color-secondary)' }}
                        >
                          24
                        </Text>
                        <Text
                          size="xs"
                          tone="secondary"
                          style={{ marginTop: '4px' }}
                        >
                          3 completed this week
                        </Text>
                      </Card>
                    </Grid>

                    <Card variant="elevated" padding="lg">
                      <Text
                        size="md"
                        weight="semibold"
                        style={{ marginBottom: '16px' }}
                      >
                        Recent Activity
                      </Text>
                      <VStack gap="md">
                        <HStack gap="md" align="center">
                          <div
                            style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: 'var(--radius-full)',
                              background: 'var(--gradient-primary)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              fontSize: '12px',
                              fontWeight: 'bold',
                            }}
                          >
                            JD
                          </div>
                          <div style={{ flex: 1 }}>
                            <Text size="sm" weight="medium">
                              John Doe created a new project
                            </Text>
                            <Text size="xs" tone="secondary">
                              2 hours ago
                            </Text>
                          </div>
                        </HStack>
                        <HStack gap="md" align="center">
                          <div
                            style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: 'var(--radius-full)',
                              background: 'var(--gradient-purple)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              fontSize: '12px',
                              fontWeight: 'bold',
                            }}
                          >
                            AS
                          </div>
                          <div style={{ flex: 1 }}>
                            <Text size="sm" weight="medium">
                              Alice Smith completed a task
                            </Text>
                            <Text size="xs" tone="secondary">
                              5 hours ago
                            </Text>
                          </div>
                        </HStack>
                      </VStack>
                    </Card>
                  </div>
                </Panel.Content>
              </Panel>
            </Card>
          </div>

          <Callout variant="info" icon={<SparklesIcon />}>
            <Text size="sm">
              <strong>Pro Tip:</strong> The Panel component is fully responsive!
              On mobile devices (≤768px), the sidebar becomes an overlay with a
              hamburger menu button. Try resizing your browser to see it in
              action.
            </Text>
          </Callout>
        </section>

        {/* Cards - Supercharged */}
        <section id="cards" className="demo-section">
          <Text size="lg" weight="semibold">
            ✨ Supercharged Cards
          </Text>

          {/* Card Variants */}
          <div style={{ marginBottom: '24px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Card Variants
            </Text>
            <div className="demo-grid">
              <Card
                variant="elevated"
                title="Elevated Card"
                subtitle="Default with shadow"
              >
                <Text tone="secondary" size="sm">
                  The elevated variant provides depth with shadows and subtle
                  borders.
                </Text>
              </Card>
              <Card
                variant="outlined"
                title="Outlined Card"
                subtitle="Strong border"
              >
                <Text tone="secondary" size="sm">
                  The outlined variant uses a bold border without shadow.
                </Text>
              </Card>
              <Card
                variant="filled"
                title="Filled Card"
                subtitle="Subtle background"
              >
                <Text tone="secondary" size="sm">
                  The filled variant has a subtle background color.
                </Text>
              </Card>
              <Card variant="ghost" title="Ghost Card" subtitle="No background">
                <Text tone="secondary" size="sm">
                  The ghost variant is transparent with no borders.
                </Text>
              </Card>
              <Card
                variant="glass-frost"
                title="Glass Frost"
                subtitle="Frosted glass effect"
              >
                <Text tone="secondary" size="sm">
                  Modern glassmorphism with frosted blur and transparency.
                </Text>
              </Card>
              <Card
                variant="glass-tint"
                title="Glass Tint"
                subtitle="Colorful glass"
              >
                <Text tone="secondary" size="sm">
                  Glassmorphism with subtle brand color gradient tint.
                </Text>
              </Card>
            </div>
          </div>

          {/* Gradient Cards */}
          <div style={{ marginBottom: '24px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Gradient Cards
            </Text>
            <div className="demo-grid">
              <Card
                gradient="primary"
                title="Teal Gradient"
                subtitle="Primary brand color"
              >
                <Text size="sm">
                  Beautiful gradient backgrounds that match your brand identity.
                </Text>
              </Card>
              <Card
                gradient="blue"
                title="Blue Gradient"
                subtitle="Professional blue"
              >
                <Text size="sm">
                  Perfect for trustworthy and professional content sections.
                </Text>
              </Card>
              <Card
                gradient="purple"
                title="Purple Gradient"
                subtitle="Creative purple"
              >
                <Text size="sm">
                  Stand out with vibrant purple gradient effects.
                </Text>
              </Card>
              <Card
                gradient="accent"
                title="Gold Gradient"
                subtitle="Accent highlight"
              >
                <Text size="sm">
                  Highlight premium features with golden gradients.
                </Text>
              </Card>
            </div>
          </div>

          {/* Interactive Cards */}
          <div style={{ marginBottom: '24px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Interactive Cards
            </Text>
            <div className="demo-grid">
              <Card
                hoverable
                title="Hoverable Card"
                subtitle="Lifts on hover"
                shadow="md"
              >
                <Text tone="secondary" size="sm">
                  Hover over this card to see the elevation effect.
                </Text>
              </Card>
              <Card
                clickable
                title="Clickable Card"
                subtitle="Interactive action"
                onClick={() =>
                  toast({
                    title: 'Card Clicked!',
                    description: 'This card is interactive',
                  })
                }
              >
                <Text tone="secondary" size="sm">
                  Click this card to trigger an action.
                </Text>
              </Card>
              <Card
                hoverable
                gradient="rainbow"
                title="Rainbow Hover"
                subtitle="Gradient + hover"
              >
                <Text size="sm">
                  Combines gradient background with hover effects.
                </Text>
              </Card>
            </div>
          </div>

          {/* Cards with Headers & Footers */}
          <div style={{ marginBottom: '24px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Headers & Footers
            </Text>
            <div className="demo-grid">
              <Card
                title="User Profile"
                subtitle="Last updated 2 hours ago"
                footer={
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <Button size="sm" variant="primary">
                      Edit
                    </Button>
                    <Button size="sm" variant="ghost">
                      Cancel
                    </Button>
                  </div>
                }
              >
                <Text size="sm">
                  Cards can have headers with titles, subtitles, and footer
                  action areas.
                </Text>
              </Card>

              <Card
                gradient="blue"
                title="Premium Feature"
                subtitle="Upgrade to unlock"
                footer={
                  <Button variant="secondary" size="sm" fullWidth>
                    Learn More
                  </Button>
                }
              >
                <Text size="sm">
                  Gradient cards work seamlessly with headers and footers.
                </Text>
              </Card>

              <Card
                header={
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Text weight="semibold">Custom Header</Text>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <CheckIcon />
                    </div>
                  </div>
                }
                footer={
                  <Text size="xs" tone="tertiary">
                    Footer content can be anything
                  </Text>
                }
              >
                <Text size="sm" tone="secondary">
                  Use custom header and footer React nodes for full flexibility.
                </Text>
              </Card>
            </div>
          </div>

          {/* Padding & Shadow Variations */}
          <div style={{ marginBottom: '24px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Padding & Shadow Options
            </Text>
            <div className="demo-grid">
              <Card padding="sm" shadow="none" bordered title="Compact">
                <Text size="sm" tone="secondary">
                  Small padding, no shadow
                </Text>
              </Card>
              <Card padding="md" shadow="md" title="Medium">
                <Text size="sm" tone="secondary">
                  Default medium padding
                </Text>
              </Card>
              <Card padding="lg" shadow="lg" title="Spacious">
                <Text size="sm" tone="secondary">
                  Large padding, large shadow
                </Text>
              </Card>
              <Card padding="xl" shadow="xl" title="Extra Large">
                <Text size="sm" tone="secondary">
                  Maximum padding and shadow
                </Text>
              </Card>
            </div>
          </div>

          {/* Radius Variations */}
          <div>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Border Radius Options
            </Text>
            <div className="demo-grid">
              <Card radius="none" title="No Radius">
                <Text size="sm" tone="secondary">
                  Sharp corners
                </Text>
              </Card>
              <Card radius="sm" title="Small">
                <Text size="sm" tone="secondary">
                  Subtle rounding
                </Text>
              </Card>
              <Card radius="lg" title="Large">
                <Text size="sm" tone="secondary">
                  Default rounded
                </Text>
              </Card>
              <Card radius="xl" title="Extra Large">
                <Text size="sm" tone="secondary">
                  Very rounded
                </Text>
              </Card>
            </div>
          </div>

          {/* AI Cards */}
          <div style={{ marginBottom: '24px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              AI Card Variant
            </Text>
            <div className="demo-grid">
              <Card
                variant="ai"
                title="AI-Powered Feature"
                subtitle="Colorful gradient border"
              >
                <Text size="sm">
                  The AI variant features a static colorful gradient border with
                  a subtle glow effect, perfect for highlighting AI-powered
                  features.
                </Text>
              </Card>
              <Card
                variant="ai"
                hoverable
                title="Hoverable AI Card"
                subtitle="Combines AI border with hover"
              >
                <Text size="sm">
                  Hover effects work seamlessly with the AI variant for extra
                  visual appeal.
                </Text>
              </Card>
            </div>
          </div>

          {/* Collapsible Cards */}
          <div>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Collapsible Cards
            </Text>
            <div className="demo-grid">
              <Card
                collapsible
                title="Expandable Section"
                subtitle="Click to collapse/expand"
              >
                <VStack gap="sm">
                  <Text size="sm">
                    This card can be collapsed to save space. Click the header
                    to toggle the content visibility.
                  </Text>
                  <Text size="sm" tone="secondary">
                    Perfect for FAQ sections, settings panels, or any content
                    that users might want to hide.
                  </Text>
                </VStack>
              </Card>
              <Card
                collapsible
                defaultExpanded={false}
                title="Initially Collapsed"
                subtitle="Starts in collapsed state"
              >
                <Text size="sm">
                  This card starts collapsed by default. The defaultExpanded
                  prop controls the initial state.
                </Text>
              </Card>
              <Card
                collapsible
                variant="ai"
                title="AI + Collapsible"
                subtitle="Best of both worlds"
              >
                <VStack gap="sm">
                  <Text size="sm">
                    Combine the AI variant with collapsible functionality for
                    stunning, space-efficient cards.
                  </Text>
                  <Divider spacing="sm" />
                  <Text size="sm" tone="secondary">
                    The animated gradient border remains visible even when
                    collapsed!
                  </Text>
                </VStack>
              </Card>
            </div>
          </div>
        </section>

        {/* Accordions */}
        <section id="accordions" className="demo-section">
          <Text size="lg" weight="semibold">
            ✨ Accordion Components
          </Text>

          {/* Default Accordion */}
          <div style={{ marginBottom: '24px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Default Accordion
            </Text>
            <Card>
              <Accordion variant="default">
                <Accordion.Item
                  value="item-1"
                  title="What is Bien UI?"
                  subtitle="Learn about our component library"
                >
                  <Text size="sm">
                    Bien UI is a comprehensive React component library built
                    with modern web technologies and best practices. It provides
                    production-ready components with token-first theming,
                    accessibility features, and stunning visual design.
                  </Text>
                </Accordion.Item>
                <Accordion.Item value="item-2" title="How do I get started?">
                  <VStack gap="sm">
                    <Text size="sm">Getting started with Bien UI is easy:</Text>
                    <Text size="sm">1. Install the package</Text>
                    <Text size="sm">2. Import the components you need</Text>
                    <Text size="sm">3. Start building beautiful UIs!</Text>
                  </VStack>
                </Accordion.Item>
                <Accordion.Item value="item-3" title="Is it accessible?">
                  <Text size="sm">
                    Yes! All Bien UI components follow WCAG guidelines and
                    include proper ARIA attributes, keyboard navigation, and
                    focus management to ensure accessibility for everyone.
                  </Text>
                </Accordion.Item>
              </Accordion>
            </Card>
          </div>

          {/* Bordered & Filled Variants */}
          <div style={{ marginBottom: '24px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Bordered & Filled Variants
            </Text>
            <Grid columns={2} gap="md">
              <div>
                <Text
                  size="sm"
                  tone="secondary"
                  style={{ marginBottom: '8px' }}
                >
                  Bordered variant:
                </Text>
                <Accordion variant="bordered">
                  <Accordion.Item value="b1" title="Features">
                    <Text size="sm">
                      Bordered accordions have a distinct outline around each
                      item.
                    </Text>
                  </Accordion.Item>
                  <Accordion.Item value="b2" title="Design">
                    <Text size="sm">
                      Perfect for emphasizing content sections.
                    </Text>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div>
                <Text
                  size="sm"
                  tone="secondary"
                  style={{ marginBottom: '8px' }}
                >
                  Filled variant:
                </Text>
                <Accordion variant="filled">
                  <Accordion.Item value="f1" title="Benefits">
                    <Text size="sm">
                      Filled accordions have a subtle background color.
                    </Text>
                  </Accordion.Item>
                  <Accordion.Item value="f2" title="Usage">
                    <Text size="sm">
                      Great for alternating content sections.
                    </Text>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Grid>
          </div>

          {/* AI Variant */}
          <div style={{ marginBottom: '24px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              AI Accordion Variant
            </Text>
            <Card>
              <Accordion variant="ai">
                <Accordion.Item
                  value="ai-1"
                  title="AI-Powered Features"
                  subtitle="Colorful gradient borders"
                >
                  <Text size="sm">
                    The AI variant features a beautiful multicolor gradient
                    border, perfect for highlighting AI-powered features or
                    premium content in your application.
                  </Text>
                </Accordion.Item>
                <Accordion.Item value="ai-2" title="Smart Content Analysis">
                  <Text size="sm">
                    Showcase your AI capabilities with visually distinctive
                    accordion items that stand out from regular content
                    sections.
                  </Text>
                </Accordion.Item>
              </Accordion>
            </Card>
          </div>

          {/* Allow Multiple */}
          <div>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Multiple Items Open
            </Text>
            <Card>
              <Text size="sm" tone="secondary" style={{ marginBottom: '12px' }}>
                Set allowMultiple={'{true}'} to allow multiple items to be
                expanded simultaneously:
              </Text>
              <Accordion variant="bordered" allowMultiple>
                <Accordion.Item
                  value="m1"
                  title="Section 1"
                  subtitle="Can be open simultaneously"
                >
                  <Text size="sm">
                    This accordion allows multiple items to be open at the same
                    time.
                  </Text>
                </Accordion.Item>
                <Accordion.Item
                  value="m2"
                  title="Section 2"
                  subtitle="Independent state"
                >
                  <Text size="sm">
                    Each item maintains its own expanded state independently.
                  </Text>
                </Accordion.Item>
                <Accordion.Item
                  value="m3"
                  title="Section 3"
                  subtitle="Great for comparisons"
                >
                  <Text size="sm">
                    Perfect for when users need to compare content across
                    different sections.
                  </Text>
                </Accordion.Item>
              </Accordion>
            </Card>
          </div>
        </section>

        {/* Banners */}
        <section id="banners" className="demo-section">
          <Text size="lg" weight="semibold">
            ✨ Banner Components
          </Text>

          <VStack gap="lg">
            {/* Variants */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Banner Variants
              </Text>
              <VStack gap="md">
                <Banner variant="info" title="Information">
                  This is an informational banner. Use it to provide helpful
                  tips or general information to users.
                </Banner>

                <Banner variant="success" title="Success!">
                  Your changes have been saved successfully. All data has been
                  synchronized.
                </Banner>

                <Banner variant="warning" title="Warning">
                  Your subscription will expire in 3 days. Please renew to
                  continue using premium features.
                </Banner>

                <Banner variant="error" title="Error Occurred">
                  There was a problem processing your request. Please try again
                  later.
                </Banner>

                <Banner variant="neutral" title="New Update Available">
                  Version 2.0 is now available with improved performance and new
                  features.
                </Banner>
              </VStack>
            </div>

            {/* With Actions */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Banners with Actions
              </Text>
              <VStack gap="md">
                <Banner
                  variant="info"
                  title="Cookie Notice"
                  actions={[
                    {
                      label: 'Accept All',
                      variant: 'primary',
                      onClick: () => toast({ title: 'Cookies accepted' }),
                    },
                    {
                      label: 'Manage',
                      variant: 'secondary',
                      onClick: () => toast({ title: 'Opening settings' }),
                    },
                  ]}
                >
                  We use cookies to enhance your experience. By continuing to
                  visit this site you agree to our use of cookies.
                </Banner>

                <Banner
                  variant="success"
                  title="Trial Extended"
                  actions={[
                    {
                      label: 'Learn More',
                      variant: 'primary',
                      onClick: () => toast({ title: 'Opening details' }),
                    },
                  ]}
                >
                  Great news! Your trial has been extended by 7 days. Explore
                  all premium features.
                </Banner>

                <Banner
                  variant="warning"
                  title="Action Required"
                  actions={[
                    {
                      label: 'Update Now',
                      variant: 'primary',
                      onClick: () => toast({ title: 'Updating...' }),
                    },
                    {
                      label: 'Remind Later',
                      variant: 'secondary',
                      onClick: () => toast({ title: 'Reminder set' }),
                    },
                  ]}
                >
                  Please update your payment method to avoid service
                  interruption.
                </Banner>
              </VStack>
            </div>

            {/* Dismissible */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Dismissible Banners
              </Text>
              <VStack gap="md">
                <Banner
                  variant="info"
                  title="New Feature Available"
                  dismissible
                  onDismiss={() => toast({ title: 'Banner dismissed' })}
                >
                  Check out our new dark mode! Switch between themes in the
                  settings menu.
                </Banner>

                <Banner
                  variant="success"
                  title="Welcome!"
                  dismissible
                  actions={[
                    {
                      label: 'Get Started',
                      variant: 'primary',
                      onClick: () => toast({ title: 'Starting tour' }),
                    },
                  ]}
                >
                  Thanks for signing up! Let&apos;s take a quick tour of the
                  platform.
                </Banner>
              </VStack>
            </div>

            {/* Without Title */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Simple Banners (No Title)
              </Text>
              <VStack gap="md">
                <Banner variant="info">
                  Quick tip: Press Ctrl+K to open the command palette and
                  navigate faster.
                </Banner>

                <Banner variant="neutral" dismissible>
                  You have 3 unread notifications. Click here to view them.
                </Banner>
              </VStack>
            </div>

            {/* Custom Icon */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Custom Icons
              </Text>
              <Banner
                variant="neutral"
                icon={<SparklesIcon />}
                title="AI Assistant"
                actions={[
                  {
                    label: 'Try Now',
                    variant: 'primary',
                    onClick: () => toast({ title: 'Opening AI assistant' }),
                  },
                ]}
              >
                Our new AI-powered assistant can help you write better content
                faster.
              </Banner>
            </div>

            {/* AI Variant */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                AI Banner Variant
              </Text>
              <VStack gap="md">
                <Banner
                  variant="ai"
                  title="AI-Powered Features"
                  actions={[
                    {
                      label: 'Explore AI',
                      variant: 'primary',
                      onClick: () => toast({ title: 'Opening AI features' }),
                    },
                    {
                      label: 'Learn More',
                      variant: 'secondary',
                      onClick: () => toast({ title: 'Opening docs' }),
                    },
                  ]}
                >
                  Experience the future with our AI-powered tools. Get
                  intelligent suggestions, automated workflows, and smart
                  insights.
                </Banner>

                <Banner
                  variant="ai"
                  title="GPT-4 Integration Available"
                  dismissible
                  onDismiss={() => toast({ title: 'AI banner dismissed' })}
                >
                  Unlock advanced AI capabilities with GPT-4 integration. Create
                  better content, get smarter recommendations, and automate
                  complex tasks.
                </Banner>
              </VStack>
            </div>
          </VStack>
        </section>

        {/* Callouts */}
        <section id="callouts" className="demo-section">
          <Text size="lg" weight="semibold">
            ✨ Callout Components
          </Text>

          <Grid columns={3} gap="lg">
            {/* Default Callouts */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Default Callout
              </Text>
              <Card>
                <VStack gap="md" align="center">
                  <Callout
                    trigger={<Button variant="primary">Show Info</Button>}
                    title="Quick Tip"
                    description="Learn something new"
                  >
                    <Text size="sm">
                      Press Ctrl+K to open the command palette and navigate
                      faster through the application.
                    </Text>
                  </Callout>

                  <Callout
                    trigger={<Button variant="secondary">With Actions</Button>}
                    title="Confirm Action"
                    actions={[
                      {
                        label: 'Confirm',
                        variant: 'primary',
                        onClick: () => toast({ title: 'Confirmed!' }),
                      },
                      {
                        label: 'Cancel',
                        variant: 'secondary',
                        onClick: () => toast({ title: 'Cancelled' }),
                      },
                    ]}
                  >
                    <Text size="sm">
                      Are you sure you want to proceed with this action? This
                      cannot be undone.
                    </Text>
                  </Callout>
                </VStack>
              </Card>
            </div>

            {/* Glass Frost */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Glass Frost
              </Text>
              <Card>
                <VStack gap="md" align="center">
                  <Callout
                    variant="glass-frost"
                    trigger={
                      <Button variant="gradient-primary">Frosted Glass</Button>
                    }
                    title="Premium Feature"
                    description="Upgrade to unlock"
                  >
                    <Text size="sm">
                      Get access to advanced analytics, custom reports, and
                      priority support with our Pro plan.
                    </Text>
                  </Callout>

                  <Callout
                    variant="glass-frost"
                    trigger={<Button variant="accent">With Actions</Button>}
                    title="Special Offer"
                    actions={[
                      {
                        label: 'Claim Now',
                        variant: 'primary',
                        onClick: () => toast({ title: 'Claimed!' }),
                      },
                    ]}
                  >
                    <Text size="sm">
                      Limited time: Get 50% off your first month. Don&apos;t miss out
                      on this exclusive deal!
                    </Text>
                  </Callout>
                </VStack>
              </Card>
            </div>

            {/* Glass Tint */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Glass Tint
              </Text>
              <Card>
                <VStack gap="md" align="center">
                  <Callout
                    variant="glass-tint"
                    trigger={
                      <Button variant="gradient-purple">Tinted Glass</Button>
                    }
                    title="AI Assistant"
                    description="Powered by GPT-4"
                    icon={<SparklesIcon />}
                  >
                    <Text size="sm">
                      Our AI assistant can help you write better, faster, and
                      smarter. Try it now!
                    </Text>
                  </Callout>

                  <Callout
                    variant="glass-tint"
                    trigger={<Button variant="purple">Colorful</Button>}
                    title="New Feature"
                    actions={[
                      {
                        label: 'Learn More',
                        variant: 'primary',
                        onClick: () => toast({ title: 'Opening tutorial' }),
                      },
                      {
                        label: 'Skip',
                        variant: 'secondary',
                        onClick: () => toast({ title: 'Skipped' }),
                      },
                    ]}
                  >
                    <Text size="sm">
                      Introducing our new collaboration features. Work together
                      in real-time!
                    </Text>
                  </Callout>
                </VStack>
              </Card>
            </div>
          </Grid>

          <div style={{ marginTop: '24px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Auto Positioning
            </Text>
            <Card>
              <Text size="sm" tone="secondary" style={{ marginBottom: '12px' }}>
                Callouts automatically position themselves to stay within the
                viewport:
              </Text>
              <HStack
                gap="md"
                justify="space-between"
                style={{ padding: '24px' }}
              >
                <Callout
                  trigger={<Button size="sm">Top Left</Button>}
                  position="auto"
                  title="Smart Positioning"
                >
                  <Text size="sm">
                    Automatically adjusts based on available space.
                  </Text>
                </Callout>

                <Callout
                  variant="glass-frost"
                  trigger={
                    <Button size="sm" variant="gradient-primary">
                      Center
                    </Button>
                  }
                  position="bottom"
                  title="Frosted Glass"
                >
                  <Text size="sm">Beautiful translucent effect.</Text>
                </Callout>

                <Callout
                  variant="glass-tint"
                  trigger={
                    <Button size="sm" variant="gradient-purple">
                      Top Right
                    </Button>
                  }
                  position="auto"
                  title="Tinted Glass"
                >
                  <Text size="sm">Colorful gradient overlay.</Text>
                </Callout>
              </HStack>
            </Card>
          </div>
        </section>

        {/* Empty States */}
        <section id="empty-states" className="demo-section">
          <Text size="lg" weight="semibold">
            ✨ Empty State Components
          </Text>

          <Grid columns={2} gap="lg">
            {/* No Data */}
            <Card>
              <EmptyState
                illustration="no-data"
                title="No data available"
                description="There's no data to display yet. Start by adding your first item."
                action={
                  <Button variant="primary" icon={<PlusIcon />}>
                    Add Item
                  </Button>
                }
              />
            </Card>

            {/* No Results */}
            <Card>
              <EmptyState
                illustration="no-results"
                title="No results found"
                description="We couldn't find anything matching your search. Try adjusting your filters."
                action={<Button variant="secondary">Clear Filters</Button>}
              />
            </Card>

            {/* No Notifications */}
            <Card>
              <EmptyState
                illustration="no-notifications"
                title="No notifications"
                description="You're all caught up! Check back later for new updates."
              />
            </Card>

            {/* Error */}
            <Card>
              <EmptyState
                illustration="error"
                title="Something went wrong"
                description="We encountered an error while loading your data. Please try again."
                action={
                  <HStack gap="sm" justify="center">
                    <Button variant="primary">Retry</Button>
                    <Button variant="ghost">Contact Support</Button>
                  </HStack>
                }
              />
            </Card>

            {/* Coming Soon */}
            <Card>
              <EmptyState
                illustration="coming-soon"
                title="Coming soon"
                description="This feature is currently under development. Stay tuned for updates!"
                action={<Button variant="gradient-primary">Notify Me</Button>}
              />
            </Card>

            {/* Folder Empty */}
            <Card>
              <EmptyState
                illustration="folder-empty"
                title="Folder is empty"
                description="This folder doesn't contain any files yet. Upload or create new files to get started."
                action={
                  <HStack gap="sm" justify="center">
                    <Button variant="primary" icon={<PlusIcon />}>
                      Upload File
                    </Button>
                    <Button variant="secondary">Create File</Button>
                  </HStack>
                }
              />
            </Card>

            {/* Inbox Zero */}
            <Card>
              <EmptyState
                illustration="inbox-zero"
                title="Inbox zero!"
                description="Great job! You've cleared all your messages. Enjoy your productivity."
              />
            </Card>

            {/* Custom Illustration */}
            <Card>
              <EmptyState
                illustration={<SparklesIcon />}
                title="Custom illustration"
                description="You can pass any React element as a custom illustration for full flexibility."
                action={<Button variant="gradient-blue">Learn More</Button>}
              />
            </Card>
          </Grid>
        </section>

        {/* File Drop */}
        <section id="file-drop" className="demo-section">
          <Text size="lg" weight="semibold">
            ✨ File Drop Component
          </Text>

          <Grid columns={2} gap="lg">
            {/* Default */}
            <Card
              title="Default File Drop"
              subtitle="Drag & drop or click to upload"
            >
              <FileDrop
                onFilesSelected={(files) =>
                  toast({ title: `${files.length} file(s) selected` })
                }
                multiple
                maxSize={10 * 1024 * 1024}
              />
            </Card>

            {/* Images Only */}
            <Card title="Images Only" subtitle="Accept images with preview">
              <FileDrop
                accept="image/*"
                onFilesSelected={(files) =>
                  toast({ title: `${files.length} image(s) selected` })
                }
                maxSize={5 * 1024 * 1024}
              />
            </Card>

            {/* Single File */}
            <Card title="Single File" subtitle="Only one file allowed">
              <FileDrop
                multiple={false}
                onFilesSelected={(files) =>
                  toast({ title: `File selected: ${files[0]?.name}` })
                }
              />
            </Card>

            {/* Compact Variant */}
            <Card title="Compact Variant" subtitle="Smaller dropzone area">
              <FileDrop
                variant="compact"
                accept=".pdf,.doc,.docx"
                onFilesSelected={(files) =>
                  toast({ title: `${files.length} document(s) selected` })
                }
              />
            </Card>

            {/* Max Files Limit */}
            <Card title="Limited Files" subtitle="Maximum 3 files">
              <FileDrop
                maxFiles={3}
                onFilesSelected={(files) =>
                  toast({ title: `${files.length} file(s) selected` })
                }
              />
            </Card>

            {/* Specific File Types */}
            <Card title="Specific Types" subtitle="PDFs and images only">
              <FileDrop
                accept=".pdf,image/*"
                onFilesSelected={(files) =>
                  toast({ title: `${files.length} file(s) selected` })
                }
                maxSize={20 * 1024 * 1024}
              />
            </Card>

            <Card title="AI Variant" subtitle="Colorful gradient border">
              <FileDrop
                variant="ai"
                onFilesSelected={(files) =>
                  toast({ title: `${files.length} file(s) selected` })
                }
              />
            </Card>

            <Card title="Glass Frost" subtitle="Frosted glass effect">
              <FileDrop
                variant="glass-frost"
                accept="image/*"
                onFilesSelected={(files) =>
                  toast({ title: `${files.length} file(s) selected` })
                }
              />
            </Card>

            <Card title="Glass Tint" subtitle="Colorful glass effect">
              <FileDrop
                variant="glass-tint"
                onFilesSelected={(files) =>
                  toast({ title: `${files.length} file(s) selected` })
                }
              />
            </Card>
          </Grid>
        </section>

        {/* Loading Indicators */}
        <section id="loading" className="demo-section">
          <Text size="lg" weight="semibold">
            ✨ Loading Indicators
          </Text>

          <Text size="sm" tone="secondary" style={{ marginBottom: '24px' }}>
            Modern, sleek loading indicators with smooth animations for a
            polished user experience.
          </Text>

          {/* Animation Variants */}
          <div style={{ marginBottom: '24px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Animation Variants
            </Text>
            <Grid columns={4} gap="lg">
              <Card title="Spinner" subtitle="Classic rotating circle">
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: 'var(--space-xl) 0',
                  }}
                >
                  <Loading variant="spinner" size="lg" />
                </div>
              </Card>

              <Card title="Dots" subtitle="Bouncing dots">
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: 'var(--space-xl) 0',
                  }}
                >
                  <Loading variant="dots" size="lg" />
                </div>
              </Card>

              <Card title="Pulse" subtitle="Pulsing circle">
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: 'var(--space-xl) 0',
                  }}
                >
                  <Loading variant="pulse" size="lg" />
                </div>
              </Card>

              <Card title="Ring" subtitle="Gradient rotating ring">
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: 'var(--space-xl) 0',
                  }}
                >
                  <Loading variant="ring" size="lg" />
                </div>
              </Card>
            </Grid>
          </div>

          {/* With Messages */}
          <div style={{ marginBottom: '24px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              With Messages
            </Text>
            <Grid columns={2} gap="lg">
              <Card>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: 'var(--space-xl) 0',
                  }}
                >
                  <Loading
                    variant="spinner"
                    size="md"
                    message="Loading your data..."
                  />
                </div>
              </Card>

              <Card>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: 'var(--space-xl) 0',
                  }}
                >
                  <Loading
                    variant="ring"
                    size="md"
                    message="Please wait a moment..."
                  />
                </div>
              </Card>
            </Grid>
          </div>

          {/* Different Sizes */}
          <div style={{ marginBottom: '24px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Size Options
            </Text>
            <Card>
              <HStack
                gap="xl"
                align="center"
                justify="center"
                style={{ padding: 'var(--space-xl)' }}
              >
                <VStack gap="sm" align="center">
                  <Loading variant="spinner" size="sm" />
                  <Text size="xs" tone="secondary">
                    Small (24px)
                  </Text>
                </VStack>
                <VStack gap="sm" align="center">
                  <Loading variant="spinner" size="md" />
                  <Text size="xs" tone="secondary">
                    Medium (40px)
                  </Text>
                </VStack>
                <VStack gap="sm" align="center">
                  <Loading variant="spinner" size="lg" />
                  <Text size="xs" tone="secondary">
                    Large (60px)
                  </Text>
                </VStack>
                <VStack gap="sm" align="center">
                  <Loading variant="spinner" size="xl" />
                  <Text size="xs" tone="secondary">
                    Extra Large (80px)
                  </Text>
                </VStack>
              </HStack>
            </Card>
          </div>

          {/* In Context Examples */}
          <div style={{ marginBottom: '24px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              In Context
            </Text>
            <Grid columns={2} gap="lg">
              <Card title="Loading State" subtitle="Card with loading content">
                <VStack
                  gap="lg"
                  align="center"
                  style={{ padding: 'var(--space-xl) 0' }}
                >
                  <Loading
                    variant="pulse"
                    size="md"
                    message="Fetching dashboard data..."
                  />
                </VStack>
              </Card>

              <Card title="Processing Action" subtitle="Action in progress">
                <VStack
                  gap="lg"
                  align="center"
                  style={{ padding: 'var(--space-xl) 0' }}
                >
                  <Loading
                    variant="dots"
                    size="md"
                    message="Processing your request..."
                  />
                </VStack>
              </Card>
            </Grid>
          </div>

          {/* Full Screen Example */}
          <div style={{ marginBottom: '24px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Centered Display
            </Text>
            <Card>
              <div
                style={{
                  height: '300px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--color-bg-subtle)',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                <Loading
                  variant="ring"
                  size="xl"
                  message="Preparing your experience..."
                />
              </div>
            </Card>
          </div>

          <Callout variant="info" icon={<SparklesIcon />}>
            <Text size="sm">
              <strong>Modern Design:</strong> Pure CSS animations with smooth,
              performant rendering. All variants use hardware-accelerated
              transforms for butter-smooth 60fps animations!
            </Text>
          </Callout>
        </section>

        {/* Progress Stepper */}
        <section id="stepper" className="demo-section">
          <Text size="lg" weight="semibold">
            ✨ Progress Stepper
          </Text>

          <Text size="sm" tone="secondary" style={{ marginBottom: '24px' }}>
            Guide users through multi-step processes with beautiful, animated
            progress indicators.
          </Text>

          {/* Horizontal Variants */}
          <div style={{ marginBottom: '24px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Horizontal Stepper Variants
            </Text>
            <VStack gap="xl">
              <Card
                title="Numbered Stepper"
                subtitle="Classic step numbers with checkmarks"
              >
                <Stepper
                  steps={[
                    { label: 'Account', description: 'Create your account' },
                    { label: 'Profile', description: 'Complete your profile' },
                    { label: 'Settings', description: 'Configure preferences' },
                    { label: 'Done', description: "You're all set!" },
                  ]}
                  currentStep={1}
                  variant="numbered"
                  orientation="horizontal"
                />
              </Card>

              <Card title="Icon Stepper" subtitle="Custom icons for each step">
                <Stepper
                  steps={[
                    {
                      label: 'Cart',
                      description: 'Review items',
                      icon: <SearchIcon />,
                    },
                    {
                      label: 'Shipping',
                      description: 'Enter address',
                      icon: <SendIcon />,
                    },
                    {
                      label: 'Payment',
                      description: 'Payment details',
                      icon: <CheckIcon />,
                    },
                    {
                      label: 'Confirm',
                      description: 'Place order',
                      icon: <HeartIcon />,
                    },
                  ]}
                  currentStep={2}
                  variant="default"
                  orientation="horizontal"
                />
              </Card>

              <Card title="Dots Stepper" subtitle="Minimal dot indicators">
                <Stepper
                  steps={[
                    { label: 'Step 1' },
                    { label: 'Step 2' },
                    { label: 'Step 3' },
                    { label: 'Step 4' },
                    { label: 'Step 5' },
                  ]}
                  currentStep={3}
                  variant="dots"
                  orientation="horizontal"
                />
              </Card>
            </VStack>
          </div>

          {/* Compact Variant */}
          <div style={{ marginBottom: '24px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Compact Variant
            </Text>
            <Text size="sm" tone="secondary" style={{ marginBottom: '16px' }}>
              Use the compact variant when space is limited or you need a more
              condensed layout.
            </Text>
            <VStack gap="lg">
              <Card
                title="Compact Numbered"
                subtitle="Smaller indicators, no descriptions"
              >
                <Stepper
                  steps={[
                    { label: 'Account', description: 'Create your account' },
                    { label: 'Profile', description: 'Complete your profile' },
                    { label: 'Settings', description: 'Configure preferences' },
                    {
                      label: 'Preferences',
                      description: 'Set your preferences',
                    },
                    { label: 'Done', description: "You're all set!" },
                  ]}
                  currentStep={2}
                  variant="numbered"
                  orientation="horizontal"
                  size="compact"
                />
              </Card>

              <Grid columns={2} gap="lg">
                <Card
                  title="Default vs Compact"
                  subtitle="Side by side comparison"
                >
                  <VStack gap="lg">
                    <div>
                      <Text
                        size="xs"
                        tone="secondary"
                        style={{ marginBottom: '8px' }}
                      >
                        Default Size:
                      </Text>
                      <Stepper
                        steps={[
                          { label: 'Step 1' },
                          { label: 'Step 2' },
                          { label: 'Step 3' },
                        ]}
                        currentStep={1}
                        variant="numbered"
                      />
                    </div>
                    <Divider />
                    <div>
                      <Text
                        size="xs"
                        tone="secondary"
                        style={{ marginBottom: '8px' }}
                      >
                        Compact Size:
                      </Text>
                      <Stepper
                        steps={[
                          { label: 'Step 1' },
                          { label: 'Step 2' },
                          { label: 'Step 3' },
                        ]}
                        currentStep={1}
                        variant="numbered"
                        size="compact"
                      />
                    </div>
                  </VStack>
                </Card>

                <Card title="Compact Dots" subtitle="Minimal space usage">
                  <Stepper
                    steps={[
                      { label: 'Start' },
                      { label: 'Process' },
                      { label: 'Verify' },
                      { label: 'Complete' },
                      { label: 'Done' },
                      { label: 'Finish' },
                    ]}
                    currentStep={3}
                    variant="dots"
                    size="compact"
                    orientation="horizontal"
                  />
                </Card>
              </Grid>
            </VStack>
          </div>

          {/* Interactive Example */}
          <div style={{ marginBottom: '24px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Interactive Checkout Flow
            </Text>
            <Card>
              <VStack gap="lg">
                <Stepper
                  steps={[
                    { label: 'Cart', description: 'Review your items' },
                    {
                      label: 'Shipping',
                      description: 'Enter shipping address',
                    },
                    { label: 'Payment', description: 'Payment information' },
                    { label: 'Review', description: 'Confirm your order' },
                  ]}
                  currentStep={checkoutStep}
                  variant="numbered"
                  orientation="horizontal"
                  clickable
                  onStepClick={setCheckoutStep}
                />
                <Divider />
                <div
                  style={{
                    padding: 'var(--space-lg)',
                    background: 'var(--color-bg-subtle)',
                    borderRadius: 'var(--radius-md)',
                  }}
                >
                  <Text
                    size="md"
                    weight="semibold"
                    style={{ marginBottom: '8px' }}
                  >
                    {checkoutStep === 0 && '🛒 Shopping Cart'}
                    {checkoutStep === 1 && '📦 Shipping Information'}
                    {checkoutStep === 2 && '💳 Payment Details'}
                    {checkoutStep === 3 && '✅ Order Review'}
                  </Text>
                  <Text
                    size="sm"
                    tone="secondary"
                    style={{ marginBottom: '16px' }}
                  >
                    {checkoutStep === 0 &&
                      'Review the items in your cart before proceeding to checkout.'}
                    {checkoutStep === 1 &&
                      'Enter your shipping address and select delivery method.'}
                    {checkoutStep === 2 &&
                      'Securely enter your payment information to complete purchase.'}
                    {checkoutStep === 3 &&
                      'Review your order details and confirm to place order.'}
                  </Text>
                  <HStack gap="sm">
                    <Button
                      variant="ghost"
                      onClick={() =>
                        setCheckoutStep(Math.max(0, checkoutStep - 1))
                      }
                      disabled={checkoutStep === 0}
                    >
                      Previous
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() =>
                        setCheckoutStep(Math.min(3, checkoutStep + 1))
                      }
                      disabled={checkoutStep === 3}
                    >
                      {checkoutStep === 3 ? 'Complete' : 'Next'}
                    </Button>
                  </HStack>
                </div>
              </VStack>
            </Card>
          </div>

          {/* Vertical Stepper */}
          <div style={{ marginBottom: '24px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Vertical Stepper
            </Text>
            <Grid columns={2} gap="lg">
              <Card
                title="Onboarding Progress"
                subtitle="Vertical numbered steps"
              >
                <Stepper
                  steps={[
                    {
                      label: 'Welcome',
                      description: 'Get started with Bien UI',
                    },
                    {
                      label: 'Profile Setup',
                      description: 'Tell us about yourself',
                    },
                    {
                      label: 'Preferences',
                      description: 'Customize your experience',
                    },
                    {
                      label: 'Invite Team',
                      description: 'Collaborate with others',
                    },
                    {
                      label: 'Complete',
                      description: 'Start using the platform',
                    },
                  ]}
                  currentStep={onboardingStep}
                  variant="numbered"
                  orientation="vertical"
                  clickable
                  onStepClick={setOnboardingStep}
                />
                <Divider style={{ margin: 'var(--space-md) 0' }} />
                <HStack gap="sm" justify="end">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      setOnboardingStep(Math.max(0, onboardingStep - 1))
                    }
                    disabled={onboardingStep === 0}
                  >
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() =>
                      setOnboardingStep(Math.min(4, onboardingStep + 1))
                    }
                    disabled={onboardingStep === 4}
                  >
                    {onboardingStep === 4 ? 'Finish' : 'Continue'}
                  </Button>
                </HStack>
              </Card>

              <Card title="Project Timeline" subtitle="Vertical with icons">
                <Stepper
                  steps={[
                    {
                      label: 'Planning',
                      description: 'Define project scope',
                      icon: <SearchIcon />,
                    },
                    {
                      label: 'Design',
                      description: 'Create mockups',
                      icon: <SparklesIcon />,
                    },
                    {
                      label: 'Development',
                      description: 'Build features',
                      icon: <SettingsIcon />,
                    },
                    {
                      label: 'Testing',
                      description: 'QA and review',
                      icon: <CheckIcon />,
                    },
                    {
                      label: 'Launch',
                      description: 'Go live!',
                      icon: <HeartIcon />,
                    },
                  ]}
                  currentStep={2}
                  variant="default"
                  orientation="vertical"
                />
              </Card>
            </Grid>
          </div>

          {/* Different Step Counts */}
          <div style={{ marginBottom: '24px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Different Step Counts
            </Text>
            <VStack gap="md">
              <Card>
                <Text
                  size="sm"
                  tone="secondary"
                  style={{ marginBottom: '12px' }}
                >
                  3 Steps
                </Text>
                <Stepper
                  steps={[
                    { label: 'Start', description: 'Begin process' },
                    { label: 'Process', description: 'In progress' },
                    { label: 'Complete', description: 'Finished' },
                  ]}
                  currentStep={1}
                  variant="numbered"
                />
              </Card>

              <Card>
                <Text
                  size="sm"
                  tone="secondary"
                  style={{ marginBottom: '12px' }}
                >
                  6 Steps
                </Text>
                <Stepper
                  steps={[
                    { label: 'Step 1' },
                    { label: 'Step 2' },
                    { label: 'Step 3' },
                    { label: 'Step 4' },
                    { label: 'Step 5' },
                    { label: 'Step 6' },
                  ]}
                  currentStep={3}
                  variant="numbered"
                />
              </Card>
            </VStack>
          </div>

          <Callout variant="info" icon={<SparklesIcon />}>
            <Text size="sm">
              <strong>Interactive Steps:</strong> Set{' '}
              <code>clickable=true</code> to allow users to navigate back to
              previous steps. Perfect for multi-step forms and checkout flows!
            </Text>
          </Callout>
        </section>

        {/* Modals */}
        <section id="modals" className="demo-section">
          <Text size="lg" weight="semibold">
            ✨ Modal Dialogs
          </Text>

          <div style={{ marginBottom: '24px' }}>
            <Text size="md" weight="semibold" style={{ marginBottom: '12px' }}>
              Modal Sizes & Variants
            </Text>
            <div className="demo-grid">
              <Button variant="primary" onClick={() => setBasicModal(true)}>
                Basic Modal
              </Button>
              <Button variant="secondary" onClick={() => setFormModal(true)}>
                Form Modal
              </Button>
              <Button variant="accent" onClick={() => setConfirmModal(true)}>
                Confirm Dialog
              </Button>
              <Button
                variant="gradient-purple"
                onClick={() => setGradientModal(true)}
              >
                Gradient Modal
              </Button>
              <Button variant="ghost" onClick={() => setLargeModal(true)}>
                Large Modal
              </Button>
              <Button
                variant="gradient-rainbow"
                onClick={() => setFullscreenModal(true)}
              >
                Fullscreen Modal
              </Button>
              <Button
                variant="primary"
                onClick={() => setGlassFrostModal(true)}
              >
                Glass Frost Header
              </Button>
              <Button
                variant="secondary"
                onClick={() => setGlassTintModal(true)}
              >
                Glass Tint Header
              </Button>
            </div>
          </div>

          {/* Basic Modal */}
          <Modal
            open={basicModal}
            onClose={() => setBasicModal(false)}
            title="Welcome to Bien UI"
            subtitle="A modern component library"
            footer={
              <>
                <Button variant="ghost" onClick={() => setBasicModal(false)}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={() => setBasicModal(false)}>
                  Got it
                </Button>
              </>
            }
          >
            <Text>
              This is a basic modal dialog with a title, content, and footer
              actions. Modals are perfect for capturing user attention and
              requiring interaction.
            </Text>
            <Text tone="secondary" size="sm" style={{ marginTop: '12px' }}>
              Press Escape or click outside to close (if enabled).
            </Text>
          </Modal>

          {/* Form Modal */}
          <Modal
            open={formModal}
            onClose={() => setFormModal(false)}
            title="Create New Project"
            subtitle="Fill in the details below"
            size="md"
            footer={
              <>
                <Button variant="ghost" onClick={() => setFormModal(false)}>
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    toast({ title: 'Project created!', variant: 'success' })
                    setFormModal(false)
                  }}
                >
                  Create Project
                </Button>
              </>
            }
          >
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <Input label="Project Name" placeholder="My Awesome Project" />
              <Textarea
                label="Description"
                placeholder="Describe your project..."
                rows={4}
              />
              <Select
                label="Category"
                options={[
                  { value: 'web', label: 'Web Application' },
                  { value: 'mobile', label: 'Mobile App' },
                  { value: 'desktop', label: 'Desktop Software' },
                ]}
              />
            </div>
          </Modal>

          {/* Confirm Modal */}
          <Modal
            open={confirmModal}
            onClose={() => setConfirmModal(false)}
            title="Confirm Deletion"
            subtitle="This action cannot be undone"
            size="sm"
            variant="centered"
            footer={
              <>
                <Button variant="ghost" onClick={() => setConfirmModal(false)}>
                  Cancel
                </Button>
                <Button
                  variant="danger"
                  onClick={() => {
                    toast({ title: 'Item deleted', variant: 'error' })
                    setConfirmModal(false)
                  }}
                >
                  Delete
                </Button>
              </>
            }
          >
            <Text align="center">
              Are you sure you want to delete this item? This will permanently
              remove it from your account and cannot be recovered.
            </Text>
          </Modal>

          {/* Gradient Modal */}
          <Modal
            open={gradientModal}
            onClose={() => setGradientModal(false)}
            title="Premium Feature"
            subtitle="Unlock the full potential"
            gradient="purple"
            size="md"
            footer={
              <>
                <Button variant="ghost" onClick={() => setGradientModal(false)}>
                  Maybe Later
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setGradientModal(false)}
                >
                  Upgrade Now
                </Button>
              </>
            }
          >
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <Text>Unlock advanced features with our premium plan:</Text>
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                <li>
                  <Text size="sm">Unlimited projects</Text>
                </li>
                <li>
                  <Text size="sm">Advanced analytics</Text>
                </li>
                <li>
                  <Text size="sm">Priority support</Text>
                </li>
                <li>
                  <Text size="sm">Team collaboration</Text>
                </li>
              </ul>
            </div>
          </Modal>

          {/* Large Modal */}
          <Modal
            open={largeModal}
            onClose={() => setLargeModal(false)}
            title="Large Content Modal"
            subtitle="Scrollable content area"
            size="lg"
            footer={
              <Button
                variant="primary"
                onClick={() => setLargeModal(false)}
                fullWidth
              >
                Close
              </Button>
            }
          >
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <Text weight="semibold">About Bien UI</Text>
              <Text>
                Bien UI is a comprehensive component library built with modern
                web technologies and best practices. It provides a complete set
                of production-ready components for building beautiful user
                interfaces.
              </Text>

              <Text weight="semibold" style={{ marginTop: '12px' }}>
                Key Features
              </Text>
              <Text>
                The library includes advanced components like gradient buttons,
                multi-select dropdowns, supercharged cards, and now modal
                dialogs. Each component is carefully crafted with attention to
                detail and user experience.
              </Text>

              <Text weight="semibold" style={{ marginTop: '12px' }}>
                Design System
              </Text>
              <Text>
                Built on a token-first design system, Bien UI ensures
                consistency across all components. The color palette features
                teal, blue, purple, and gold gradients that create a modern and
                professional appearance.
              </Text>

              <Text weight="semibold" style={{ marginTop: '12px' }}>
                Accessibility
              </Text>
              <Text>
                All components follow WCAG guidelines and include proper ARIA
                attributes, keyboard navigation, and focus management. This
                ensures your applications are accessible to everyone.
              </Text>

              <Text tone="secondary" size="sm" style={{ marginTop: '12px' }}>
                This content area is scrollable when it exceeds the modal
                height.
              </Text>
            </div>
          </Modal>

          {/* Fullscreen Modal */}
          <Modal
            open={fullscreenModal}
            onClose={() => setFullscreenModal(false)}
            title="Fullscreen Experience"
            subtitle="Take over the entire viewport"
            size="fullscreen"
            footer={
              <Button
                variant="primary"
                onClick={() => setFullscreenModal(false)}
              >
                Exit Fullscreen
              </Button>
            }
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                height: '100%',
              }}
            >
              <Card gradient="rainbow" hoverable>
                <Text size="lg" weight="semibold">
                  Fullscreen Modals
                </Text>
                <Text size="sm" style={{ marginTop: '8px' }}>
                  Perfect for immersive experiences, presentations, or complex
                  workflows.
                </Text>
              </Card>

              <div className="demo-grid">
                <Card title="Feature 1" shadow="md">
                  <Text size="sm" tone="secondary">
                    Use fullscreen modals for detailed views
                  </Text>
                </Card>
                <Card title="Feature 2" shadow="md">
                  <Text size="sm" tone="secondary">
                    Great for multi-step forms and wizards
                  </Text>
                </Card>
                <Card title="Feature 3" shadow="md">
                  <Text size="sm" tone="secondary">
                    Ideal for media galleries and previews
                  </Text>
                </Card>
              </div>
            </div>
          </Modal>

          {/* Glass Frost Modal */}
          <Modal
            open={glassFrostModal}
            onClose={() => setGlassFrostModal(false)}
            title="Glass Frost Header"
            subtitle="Modern glassmorphism with frosted blur"
            headerVariant="glass-frost"
            size="md"
            footer={
              <>
                <Button
                  variant="ghost"
                  onClick={() => setGlassFrostModal(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  onClick={() => setGlassFrostModal(false)}
                >
                  Confirm
                </Button>
              </>
            }
          >
            <VStack gap="md">
              <Text>
                The glass frost header variant creates a beautiful frosted glass
                effect with backdrop blur. Perfect for modern, sleek interfaces
                that need visual depth and sophistication.
              </Text>
              <Card variant="outlined">
                <Text
                  size="sm"
                  weight="semibold"
                  style={{ marginBottom: '8px' }}
                >
                  Key Features:
                </Text>
                <List>
                  <ListItem>
                    70% white transparency with 20px backdrop blur
                  </ListItem>
                  <ListItem>Subtle border for definition</ListItem>
                  <ListItem>
                    Matches glass-frost components across the system
                  </ListItem>
                  <ListItem>
                    Works beautifully in both light and dark modes
                  </ListItem>
                </List>
              </Card>
              <Text size="sm" tone="secondary">
                Use this variant when you want to create a premium, modern feel
                while maintaining visual hierarchy.
              </Text>
            </VStack>
          </Modal>

          {/* Glass Tint Modal */}
          <Modal
            open={glassTintModal}
            onClose={() => setGlassTintModal(false)}
            title="Glass Tint Header"
            subtitle="Colorful glass with brand gradient"
            headerVariant="glass-tint"
            size="md"
            footer={
              <>
                <Button
                  variant="ghost"
                  onClick={() => setGlassTintModal(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setGlassTintModal(false)}
                >
                  Confirm
                </Button>
              </>
            }
          >
            <VStack gap="md">
              <Text>
                The glass tint header variant adds a subtle brand color gradient
                tint to the glassmorphism effect. It combines the sophistication
                of frosted glass with your brand identity.
              </Text>
              <Card variant="glass-tint">
                <Text
                  size="sm"
                  weight="semibold"
                  style={{ marginBottom: '8px' }}
                >
                  Brand Integration:
                </Text>
                <List>
                  <ListItem>Blue → Teal gradient tint (10% opacity)</ListItem>
                  <ListItem>20px backdrop blur with saturation boost</ListItem>
                  <ListItem>Matches the brand color palette</ListItem>
                  <ListItem>
                    Consistent with other glass-tint components
                  </ListItem>
                </List>
              </Card>
              <Text size="sm" tone="secondary">
                Perfect for branded experiences, premium features, or when you
                want to add a touch of color while maintaining the glass
                aesthetic.
              </Text>
            </VStack>
          </Modal>
        </section>

        {/* Toast Notifications */}
        <section id="toasts" className="demo-section">
          <Text size="lg" weight="semibold">
            Toast Notifications
          </Text>
          <div className="demo-grid">
            <Button
              variant="secondary"
              onClick={() =>
                toast({
                  title: 'Default Toast',
                  description: 'This is a default notification',
                })
              }
            >
              Default
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                toast({
                  title: 'Success!',
                  description: 'Operation completed',
                  variant: 'success',
                })
              }
            >
              Success
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                toast({
                  title: 'Warning',
                  description: 'Please review',
                  variant: 'warning',
                })
              }
            >
              Warning
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                toast({
                  title: 'Error',
                  description: 'Something went wrong',
                  variant: 'error',
                })
              }
            >
              Error
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                toast({
                  title: 'Info',
                  description: 'Here is some info',
                  variant: 'info',
                })
              }
            >
              Info
            </Button>
          </div>
        </section>

        {/* Tooltips */}
        <section id="tooltips" className="demo-section">
          <Text size="lg" weight="semibold">
            💬 Tooltips
          </Text>
          <Text size="sm" tone="secondary" style={{ marginBottom: '24px' }}>
            Provide helpful context and additional information on hover
          </Text>

          <VStack gap="xl">
            {/* Placement */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Tooltip Placement
              </Text>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '48px',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <Tooltip content="Tooltip on top" side="top">
                      <Button variant="secondary">Top</Button>
                    </Tooltip>
                    <Tooltip content="Tooltip on right" side="right">
                      <Button variant="secondary">Right</Button>
                    </Tooltip>
                    <Tooltip content="Tooltip on bottom" side="bottom">
                      <Button variant="secondary">Bottom</Button>
                    </Tooltip>
                    <Tooltip content="Tooltip on left" side="left">
                      <Button variant="secondary">Left</Button>
                    </Tooltip>
                  </div>
                </div>
              </Card>
            </div>

            {/* On Different Elements */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                On Different Elements
              </Text>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    gap: '12px',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                  }}
                >
                  <Tooltip content="Click to add new item">
                    <Button variant="primary" icon={<PlusIcon />}>
                      Add Item
                    </Button>
                  </Tooltip>

                  <Tooltip content="Delete this item">
                    <Button
                      variant="danger"
                      icon={<TrashIcon />}
                      iconOnly
                      shape="circle"
                    >
                      Delete
                    </Button>
                  </Tooltip>

                  <Tooltip content="Quick settings access">
                    <Button variant="ghost" icon={<SettingsIcon />} iconOnly>
                      Settings
                    </Button>
                  </Tooltip>

                  <Tooltip content="This is a badge with tooltip">
                    <Badge variant="primary">Hover me</Badge>
                  </Tooltip>
                </div>
              </Card>
            </div>

            {/* With Rich Content */}
            <div>
              <Text
                size="md"
                weight="semibold"
                style={{ marginBottom: '12px' }}
              >
                Rich Content Tooltips
              </Text>
              <Card>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Tooltip
                    content={
                      <div style={{ maxWidth: '200px' }}>
                        <div
                          style={{
                            fontWeight: 600,
                            marginBottom: '4px',
                            fontSize: '14px',
                          }}
                        >
                          Pro Feature
                        </div>
                        <div style={{ fontSize: '12px' }}>
                          Upgrade to access advanced analytics and reporting
                          tools.
                        </div>
                      </div>
                    }
                  >
                    <Button variant="gradient-purple" icon={<SparklesIcon />}>
                      Analytics
                    </Button>
                  </Tooltip>

                  <Tooltip
                    content={
                      <div>
                        <div
                          style={{
                            fontWeight: 600,
                            marginBottom: '4px',
                            fontSize: '14px',
                          }}
                        >
                          Download Report
                        </div>
                        <div style={{ fontSize: '12px' }}>
                          Export data in CSV or PDF format
                        </div>
                      </div>
                    }
                  >
                    <Button variant="secondary" icon={<DownloadIcon />}>
                      Export
                    </Button>
                  </Tooltip>

                  <Tooltip content="Last updated: 5 minutes ago">
                    <Badge variant="success" dot>
                      Live
                    </Badge>
                  </Tooltip>
                </div>
              </Card>
            </div>
          </VStack>

          <Banner variant="info" style={{ marginTop: '24px' }}>
            <Text size="sm">
              <strong>Smart Positioning:</strong> Tooltips automatically adjust
              their position to stay within the viewport.
            </Text>
          </Banner>

          <Callout
            variant="tint"
            icon={<SparklesIcon />}
            style={{ marginTop: '16px' }}
          >
            <Text size="sm">
              <strong>Accessibility Built-in:</strong> Tooltips include proper
              ARIA attributes, keyboard support, and appear after a 200ms delay
              for a smooth user experience.
            </Text>
          </Callout>
        </section>

        {/* Feature Highlights */}
        <section className="demo-section">
          <Text size="lg" weight="semibold" style={{ marginBottom: '16px' }}>
            Key Features
          </Text>
          <div className="demo-grid">
            <div className="demo-feature">
              <Text weight="semibold">🎨 Token-First Theming</Text>
              <Text size="sm" tone="secondary" style={{ marginTop: '8px' }}>
                All design decisions flow from semantic design tokens
              </Text>
            </div>
            <div className="demo-feature">
              <Text weight="semibold">♿ Accessible</Text>
              <Text size="sm" tone="secondary" style={{ marginTop: '8px' }}>
                Built with Radix UI primitives for proper ARIA and keyboard
                support
              </Text>
            </div>
            <div className="demo-feature">
              <Text weight="semibold">🎯 Type-Safe</Text>
              <Text size="sm" tone="secondary" style={{ marginTop: '8px' }}>
                Full TypeScript support with CSS modules
              </Text>
            </div>
            <div className="demo-feature">
              <Text weight="semibold">📱 Responsive</Text>
              <Text size="sm" tone="secondary" style={{ marginTop: '8px' }}>
                Works beautifully across all screen sizes
              </Text>
            </div>
            <div className="demo-feature">
              <Text weight="semibold">🌙 Dark Mode</Text>
              <Text size="sm" tone="secondary" style={{ marginTop: '8px' }}>
                Switch themes with the controls above
              </Text>
            </div>
            <div className="demo-feature">
              <Text weight="semibold">⚡ Performance</Text>
              <Text size="sm" tone="secondary" style={{ marginTop: '8px' }}>
                CSS custom properties with zero runtime cost
              </Text>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [density, setDensity] = useState<'comfortable' | 'compact'>(
    'comfortable'
  )

  return (
    <BienProvider theme={theme} density={density}>
      <TooltipProvider>
        <ToastProvider>
          {/* Theme Controls */}
          <div className="demo-controls">
            <Card>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  flexWrap: 'wrap',
                }}
              >
                <Text weight="semibold">Theme:</Text>
                <Button
                  size="sm"
                  variant={theme === 'light' ? 'primary' : 'secondary'}
                  onClick={() => setTheme('light')}
                >
                  ☀️ Light
                </Button>
                <Button
                  size="sm"
                  variant={theme === 'dark' ? 'primary' : 'secondary'}
                  onClick={() => setTheme('dark')}
                >
                  🌙 Dark
                </Button>
                <div
                  style={{
                    width: '1px',
                    height: '24px',
                    background: 'currentColor',
                    opacity: 0.2,
                  }}
                />
                <Text weight="semibold">Density:</Text>
                <Button
                  size="sm"
                  variant={density === 'comfortable' ? 'primary' : 'secondary'}
                  onClick={() => setDensity('comfortable')}
                >
                  Comfortable
                </Button>
                <Button
                  size="sm"
                  variant={density === 'compact' ? 'primary' : 'secondary'}
                  onClick={() => setDensity('compact')}
                >
                  Compact
                </Button>
              </div>
            </Card>
          </div>

          <DemoContent />
        </ToastProvider>
      </TooltipProvider>
    </BienProvider>
  )
}
