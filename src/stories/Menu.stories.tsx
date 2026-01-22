/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
  Menu,
  MenuItem,
  MenuDivider,
  MenuGroup,
} from '../components/Interactive/Menu'
import { Card } from '../components/Display/Card'
import { Text } from '../components/Display/Text'
import { Button } from '../components/Interactive/Button'
import {
  MoreVerticalIcon,
  EditIcon,
  CopyIcon,
  TrashIcon,
  ShareIcon,
  DownloadIcon,
  StarIcon,
  FolderIcon,
  SettingsIcon,
  LogOutIcon,
  UserIcon,
  HelpCircleIcon,
  PlusIcon,
  FileIcon,
  ImageIcon,
  VideoIcon,
} from 'lucide-react'

const meta: Meta<typeof Menu> = {
  title: 'Interactive/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Flexible dropdown menu component with customizable trigger, positioning, and content. Supports nested groups, dividers, and various visual variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    trigger: {
      control: false,
      description: 'The trigger element (button, link, etc.)',
    },
    placement: {
      control: 'select',
      options: [
        'bottom-start',
        'bottom-end',
        'top-start',
        'top-end',
        'left',
        'right',
      ],
      description: 'Placement of the menu relative to trigger',
    },
    autoPlacement: {
      control: 'boolean',
      description:
        'Automatically choose best placement based on available space',
    },
    variant: {
      control: 'select',
      options: ['default', 'glass-frost', 'glass-tint'],
      description: 'Visual variant',
    },
    width: {
      control: 'text',
      description: 'Width of the menu',
    },
    open: {
      control: 'boolean',
      description: 'Whether menu is open (controlled)',
    },
    onOpenChange: {
      action: 'openChanged',
      description: 'Callback when open state changes',
    },
    children: {
      control: false,
      description: 'Menu content',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    trigger: <Button variant="primary">Open Menu</Button>,
    placement: 'bottom-start',
    variant: 'default',
    width: '220px',
    children: (
      <>
        <MenuItem icon={<EditIcon />}>Edit</MenuItem>
        <MenuItem icon={<CopyIcon />}>Copy</MenuItem>
        <MenuDivider />
        <MenuItem icon={<TrashIcon />} destructive>
          Delete
        </MenuItem>
      </>
    ),
  },
}

export const WithIconButton: Story = {
  args: {
    trigger: (
      <Button variant="ghost" iconOnly icon={<MoreVerticalIcon />}>
        More options
      </Button>
    ),
    placement: 'bottom-end',
    variant: 'default',
    children: (
      <>
        <MenuItem icon={<EditIcon />}>Edit</MenuItem>
        <MenuItem icon={<ShareIcon />}>Share</MenuItem>
        <MenuItem icon={<CopyIcon />}>Duplicate</MenuItem>
        <MenuItem icon={<DownloadIcon />}>Download</MenuItem>
        <MenuDivider />
        <MenuItem icon={<StarIcon />}>Add to favorites</MenuItem>
        <MenuDivider />
        <MenuItem icon={<TrashIcon />} destructive>
          Delete
        </MenuItem>
      </>
    ),
  },
}

export const Disabled: Story = {
  args: {
    trigger: <Button variant="secondary">Actions</Button>,
    placement: 'bottom-start',
    variant: 'default',
    children: (
      <>
        <MenuItem icon={<EditIcon />}>Edit</MenuItem>
        <MenuItem icon={<CopyIcon />} disabled>
          Copy (Disabled)
        </MenuItem>
        <MenuItem icon={<ShareIcon />}>Share</MenuItem>
        <MenuDivider />
        <MenuItem icon={<TrashIcon />} destructive disabled>
          Delete (Disabled)
        </MenuItem>
      </>
    ),
  },
}

export const Placements: Story = {
  render: () => (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        minWidth: '600px',
        padding: '60px',
      }}
    >
      <Text size="lg" weight="semibold" style={{ textAlign: 'center' }}>
        Menu Placements
      </Text>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          alignItems: 'center',
          justifyItems: 'center',
        }}
      >
        {/* Top row */}
        <Menu
          trigger={
            <Button variant="primary" size="sm">
              Top Start
            </Button>
          }
          placement="top-start"
        >
          <MenuItem icon={<EditIcon />}>Edit</MenuItem>
          <MenuItem icon={<CopyIcon />}>Copy</MenuItem>
        </Menu>

        <Menu
          trigger={
            <Button variant="primary" size="sm">
              Left
            </Button>
          }
          placement="left"
        >
          <MenuItem icon={<EditIcon />}>Edit</MenuItem>
          <MenuItem icon={<CopyIcon />}>Copy</MenuItem>
        </Menu>

        <Menu
          trigger={
            <Button variant="primary" size="sm">
              Top End
            </Button>
          }
          placement="top-end"
        >
          <MenuItem icon={<EditIcon />}>Edit</MenuItem>
          <MenuItem icon={<CopyIcon />}>Copy</MenuItem>
        </Menu>

        {/* Middle row */}
        <Menu
          trigger={
            <Button variant="secondary" size="sm">
              Bottom Start
            </Button>
          }
          placement="bottom-start"
        >
          <MenuItem icon={<EditIcon />}>Edit</MenuItem>
          <MenuItem icon={<CopyIcon />}>Copy</MenuItem>
        </Menu>

        <div style={{ padding: '20px' }}>
          <Text size="sm" tone="tertiary" style={{ textAlign: 'center' }}>
            Click buttons to test
          </Text>
        </div>

        <Menu
          trigger={
            <Button variant="secondary" size="sm">
              Right
            </Button>
          }
          placement="right"
        >
          <MenuItem icon={<EditIcon />}>Edit</MenuItem>
          <MenuItem icon={<CopyIcon />}>Copy</MenuItem>
        </Menu>

        {/* Bottom row */}
        <div />
        <Menu
          trigger={
            <Button variant="accent" size="sm">
              Bottom End
            </Button>
          }
          placement="bottom-end"
        >
          <MenuItem icon={<EditIcon />}>Edit</MenuItem>
          <MenuItem icon={<CopyIcon />}>Copy</MenuItem>
        </Menu>
        <div />
      </div>
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const Variants: Story = {
  render: () => (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        minWidth: '400px',
      }}
    >
      <Text size="lg" weight="semibold">
        Menu Variants
      </Text>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Menu
          trigger={
            <Button variant="primary" size="sm">
              Default
            </Button>
          }
          variant="default"
        >
          <MenuItem icon={<EditIcon />}>Edit item</MenuItem>
          <MenuItem icon={<CopyIcon />}>Copy item</MenuItem>
          <MenuDivider />
          <MenuItem icon={<TrashIcon />} destructive>
            Delete
          </MenuItem>
        </Menu>

        <Menu
          trigger={
            <Button variant="secondary" size="sm">
              Glass Frost
            </Button>
          }
          variant="glass-frost"
        >
          <MenuItem icon={<EditIcon />}>Edit item</MenuItem>
          <MenuItem icon={<CopyIcon />}>Copy item</MenuItem>
          <MenuDivider />
          <MenuItem icon={<TrashIcon />} destructive>
            Delete
          </MenuItem>
        </Menu>

        <Menu
          trigger={
            <Button variant="accent" size="sm">
              Glass Tint
            </Button>
          }
          variant="glass-tint"
        >
          <MenuItem icon={<EditIcon />}>Edit item</MenuItem>
          <MenuItem icon={<CopyIcon />}>Copy item</MenuItem>
          <MenuDivider />
          <MenuItem icon={<TrashIcon />} destructive>
            Delete
          </MenuItem>
        </Menu>
      </div>
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const WithGroups: Story = {
  args: {
    trigger: <Button variant="primary">File Menu</Button>,
    placement: 'bottom-start',
    width: '240px',
    children: (
      <>
        <MenuGroup label="File Operations">
          <MenuItem icon={<FileIcon />}>New File</MenuItem>
          <MenuItem icon={<FolderIcon />}>New Folder</MenuItem>
          <MenuItem icon={<DownloadIcon />}>Import</MenuItem>
        </MenuGroup>

        <MenuDivider />

        <MenuGroup label="Edit">
          <MenuItem icon={<EditIcon />}>Rename</MenuItem>
          <MenuItem icon={<CopyIcon />}>Duplicate</MenuItem>
          <MenuItem icon={<ShareIcon />}>Share</MenuItem>
        </MenuGroup>

        <MenuDivider />

        <MenuGroup>
          <MenuItem icon={<StarIcon />}>Add to favorites</MenuItem>
          <MenuItem icon={<TrashIcon />} destructive>
            Delete
          </MenuItem>
        </MenuGroup>
      </>
    ),
  },
}

export const ControlledMenu: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedAction, setSelectedAction] = useState('')

    const handleMenuAction = (action: string) => {
      setSelectedAction(action)
      setIsOpen(false)
    }

    return (
      <Card
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          minWidth: '400px',
        }}
      >
        <Text size="lg" weight="semibold">
          Controlled Menu
        </Text>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Menu
            trigger={<Button variant="primary">Actions</Button>}
            open={isOpen}
            onOpenChange={setIsOpen}
            placement="bottom-start"
          >
            <MenuItem
              icon={<EditIcon />}
              onClick={() => handleMenuAction('edit')}
            >
              Edit
            </MenuItem>
            <MenuItem
              icon={<CopyIcon />}
              onClick={() => handleMenuAction('copy')}
            >
              Copy
            </MenuItem>
            <MenuItem
              icon={<ShareIcon />}
              onClick={() => handleMenuAction('share')}
            >
              Share
            </MenuItem>
            <MenuDivider />
            <MenuItem
              icon={<TrashIcon />}
              destructive
              onClick={() => handleMenuAction('delete')}
            >
              Delete
            </MenuItem>
          </Menu>

          <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'Close' : 'Open'} Menu
          </Button>
        </div>

        {selectedAction && (
          <div
            style={{
              padding: '12px',
              backgroundColor: 'var(--color-bg-subtle)',
              borderRadius: 'var(--radius-sm)',
            }}
          >
            <Text size="sm">
              Last action: <strong>{selectedAction}</strong>
            </Text>
          </div>
        )}
      </Card>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const UserAccountMenu: Story = {
  render: () => {
    const [user] = useState({
      name: 'Sarah Chen',
      email: 'sarah.chen@example.com',
      avatar: '👩‍💻',
    })

    return (
      <Card
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          minWidth: '400px',
        }}
      >
        <Text size="lg" weight="semibold">
          User Account Menu
        </Text>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-bg-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
              }}
            >
              {user.avatar}
            </div>
            <div>
              <Text weight="medium">{user.name}</Text>
              <Text size="sm" tone="tertiary">
                {user.email}
              </Text>
            </div>
          </div>

          <Menu
            trigger={
              <Button variant="ghost" iconOnly icon={<MoreVerticalIcon />}>
                User menu
              </Button>
            }
            placement="bottom-end"
            width="220px"
          >
            <MenuGroup>
              <MenuItem icon={<UserIcon />}>View Profile</MenuItem>
              <MenuItem icon={<SettingsIcon />}>Account Settings</MenuItem>
            </MenuGroup>

            <MenuDivider />

            <MenuGroup>
              <MenuItem icon={<HelpCircleIcon />}>Help & Support</MenuItem>
            </MenuGroup>

            <MenuDivider />

            <MenuGroup>
              <MenuItem icon={<LogOutIcon />} destructive>
                Sign Out
              </MenuItem>
            </MenuGroup>
          </Menu>
        </div>
      </Card>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const ContextualActions: Story = {
  render: () => {
    const [items] = useState([
      { id: 1, name: 'Project Proposal.pdf', type: 'pdf', size: '2.4 MB' },
      { id: 2, name: 'Design Mockups.fig', type: 'design', size: '15.2 MB' },
      { id: 3, name: 'Demo Video.mp4', type: 'video', size: '45.8 MB' },
    ])

    const getFileIcon = (type: string) => {
      switch (type) {
        case 'pdf':
          return <FileIcon />
        case 'design':
          return <ImageIcon />
        case 'video':
          return <VideoIcon />
        default:
          return <FileIcon />
      }
    }

    return (
      <Card
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          minWidth: '500px',
        }}
      >
        <Text size="lg" weight="semibold">
          File Management
        </Text>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px',
                backgroundColor: 'var(--color-bg-subtle)',
                borderRadius: 'var(--radius-sm)',
              }}
            >
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
              >
                <div
                  style={{
                    color: 'var(--color-text-tertiary)',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {getFileIcon(item.type)}
                </div>
                <div>
                  <Text weight="medium">{item.name}</Text>
                  <Text size="sm" tone="tertiary">
                    {item.size}
                  </Text>
                </div>
              </div>

              <Menu
                trigger={
                  <Button variant="ghost" iconOnly icon={<MoreVerticalIcon />}>
                    File actions
                  </Button>
                }
                placement="bottom-end"
                width="200px"
              >
                <MenuItem icon={<DownloadIcon />}>Download</MenuItem>
                <MenuItem icon={<ShareIcon />}>Share</MenuItem>
                <MenuItem icon={<CopyIcon />}>Copy Link</MenuItem>
                <MenuDivider />
                <MenuItem icon={<EditIcon />}>Rename</MenuItem>
                <MenuItem icon={<FolderIcon />}>Move to Folder</MenuItem>
                <MenuDivider />
                <MenuItem icon={<StarIcon />}>Add to Favorites</MenuItem>
                <MenuDivider />
                <MenuItem icon={<TrashIcon />} destructive>
                  Delete
                </MenuItem>
              </Menu>
            </div>
          ))}
        </div>
      </Card>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const CreateMenu: Story = {
  render: () => (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        minWidth: '400px',
      }}
    >
      <Text size="lg" weight="semibold">
        Create New Content
      </Text>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Menu
          trigger={
            <Button variant="gradient-primary" icon={<PlusIcon />}>
              Create New
            </Button>
          }
          placement="bottom-start"
          width="240px"
        >
          <MenuGroup label="Documents">
            <MenuItem icon={<FileIcon />}>Text Document</MenuItem>
            <MenuItem icon={<ImageIcon />}>Presentation</MenuItem>
            <MenuItem icon={<VideoIcon />}>Spreadsheet</MenuItem>
          </MenuGroup>

          <MenuDivider />

          <MenuGroup label="Projects">
            <MenuItem icon={<FolderIcon />}>New Project</MenuItem>
            <MenuItem icon={<CopyIcon />}>From Template</MenuItem>
          </MenuGroup>

          <MenuDivider />

          <MenuGroup label="Media">
            <MenuItem icon={<ImageIcon />}>Image Gallery</MenuItem>
            <MenuItem icon={<VideoIcon />}>Video Project</MenuItem>
          </MenuGroup>
        </Menu>
      </div>
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const AutoPlacement: Story = {
  render: () => (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        minWidth: '800px',
        minHeight: '600px',
        position: 'relative',
      }}
    >
      <Text size="lg" weight="semibold">
        Auto Placement Demo
      </Text>
      <Text size="sm" tone="tertiary">
        Click buttons in different corners to see auto placement in action. The
        menu will automatically choose the best position based on available
        viewport space.
      </Text>

      {/* Corner positions to test auto placement */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '500px',
          padding: '20px',
          border: '2px dashed var(--color-border)',
          borderRadius: 'var(--radius-md)',
        }}
      >
        {/* Top Left */}
        <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
          <Menu
            autoPlacement
            trigger={
              <Button variant="primary" size="sm">
                Top Left
              </Button>
            }
            width="180px"
          >
            <MenuItem icon={<EditIcon />}>Edit Item</MenuItem>
            <MenuItem icon={<CopyIcon />}>Copy Item</MenuItem>
            <MenuItem icon={<ShareIcon />}>Share Item</MenuItem>
            <MenuDivider />
            <MenuItem icon={<TrashIcon />} destructive>
              Delete
            </MenuItem>
          </Menu>
        </div>

        {/* Top Right */}
        <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
          <Menu
            autoPlacement
            trigger={
              <Button variant="secondary" size="sm">
                Top Right
              </Button>
            }
            width="180px"
          >
            <MenuItem icon={<DownloadIcon />}>Download</MenuItem>
            <MenuItem icon={<StarIcon />}>Favorite</MenuItem>
            <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
            <MenuDivider />
            <MenuItem icon={<HelpCircleIcon />}>Help</MenuItem>
          </Menu>
        </div>

        {/* Center */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Menu
            autoPlacement
            trigger={<Button variant="accent">Center</Button>}
            width="200px"
          >
            <MenuGroup label="Actions">
              <MenuItem icon={<PlusIcon />}>Create New</MenuItem>
              <MenuItem icon={<FolderIcon />}>Open Folder</MenuItem>
              <MenuItem icon={<FileIcon />}>New File</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup label="Recent">
              <MenuItem>Project Alpha</MenuItem>
              <MenuItem>Project Beta</MenuItem>
              <MenuItem>Project Gamma</MenuItem>
            </MenuGroup>
          </Menu>
        </div>

        {/* Bottom Left */}
        <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
          <Menu
            autoPlacement
            trigger={
              <Button variant="purple" size="sm">
                Bottom Left
              </Button>
            }
            width="160px"
          >
            <MenuItem icon={<UserIcon />}>Profile</MenuItem>
            <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
            <MenuDivider />
            <MenuItem icon={<LogOutIcon />}>Sign Out</MenuItem>
          </Menu>
        </div>

        {/* Bottom Right */}
        <div style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
          <Menu
            autoPlacement
            trigger={
              <Button variant="gradient-rainbow" size="sm">
                Bottom Right
              </Button>
            }
            width="200px"
          >
            <MenuGroup label="Export">
              <MenuItem icon={<DownloadIcon />}>PDF Export</MenuItem>
              <MenuItem icon={<ImageIcon />}>Image Export</MenuItem>
              <MenuItem icon={<FileIcon />}>CSV Export</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuItem icon={<ShareIcon />}>Share Link</MenuItem>
          </Menu>
        </div>

        {/* Edge cases - very close to edges */}
        <div
          style={{
            position: 'absolute',
            top: '5px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <Menu
            autoPlacement
            trigger={
              <Button variant="ghost" size="sm">
                Top Edge
              </Button>
            }
            width="150px"
          >
            <MenuItem>Option 1</MenuItem>
            <MenuItem>Option 2</MenuItem>
            <MenuItem>Option 3</MenuItem>
          </Menu>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '5px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <Menu
            autoPlacement
            trigger={
              <Button variant="ghost" size="sm">
                Bottom Edge
              </Button>
            }
            width="150px"
          >
            <MenuItem>Option A</MenuItem>
            <MenuItem>Option B</MenuItem>
            <MenuItem>Option C</MenuItem>
          </Menu>
        </div>
      </div>

      <div
        style={{
          padding: '16px',
          backgroundColor: 'var(--color-bg-subtle)',
          borderRadius: 'var(--radius-sm)',
        }}
      >
        <Text size="sm">
          <strong>Note:</strong> With autoPlacement enabled, menus intelligently
          position themselves to stay within the viewport. Try resizing your
          browser window and clicking the buttons to see how the positioning
          adapts.
        </Text>
      </div>
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const ManualVsAuto: Story = {
  render: () => (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        minWidth: '600px',
      }}
    >
      <Text size="lg" weight="semibold">
        Manual vs Auto Placement Comparison
      </Text>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          padding: '40px 20px',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <Text size="sm" weight="medium" style={{ marginBottom: '16px' }}>
            Manual Placement
          </Text>
          <Text size="xs" tone="tertiary" style={{ marginBottom: '12px' }}>
            Always uses specified placement
          </Text>
          <Menu
            placement="top-start"
            trigger={<Button variant="primary">Always Top Start</Button>}
          >
            <MenuItem icon={<EditIcon />}>Edit</MenuItem>
            <MenuItem icon={<CopyIcon />}>Copy</MenuItem>
            <MenuItem icon={<TrashIcon />}>Delete</MenuItem>
          </Menu>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Text size="sm" weight="medium" style={{ marginBottom: '16px' }}>
            Auto Placement
          </Text>
          <Text size="xs" tone="tertiary" style={{ marginBottom: '12px' }}>
            Adapts based on available space
          </Text>
          <Menu
            autoPlacement
            placement="top-start"
            trigger={<Button variant="accent">Smart Positioning</Button>}
          >
            <MenuItem icon={<EditIcon />}>Edit</MenuItem>
            <MenuItem icon={<CopyIcon />}>Copy</MenuItem>
            <MenuItem icon={<TrashIcon />}>Delete</MenuItem>
          </Menu>
        </div>
      </div>

      <div
        style={{
          padding: '16px',
          backgroundColor: 'var(--color-bg-subtle)',
          borderRadius: 'var(--radius-sm)',
        }}
      >
        <Text size="sm">
          <strong>Try this:</strong> Scroll this story to the top or bottom of
          the viewport, then click both buttons to see the difference. The auto
          placement menu will adapt while the manual one stays fixed.
        </Text>
      </div>
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}
