/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
  FileDrop,
  type FileWithPreview,
} from '../components/Interactive/FileDrop'
import { Card } from '../components/Display/Card'
import { Text } from '../components/Display/Text'
import { Button } from '../components/Interactive/Button'
import { RefreshCcwIcon, XIcon } from 'lucide-react'

const meta: Meta<typeof FileDrop> = {
  title: 'Interactive/FileDrop',
  component: FileDrop,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A file upload component with drag & drop support, file validation, preview functionality, and multiple visual variants. Supports various file types, size limits, and customizable styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onFilesSelected: {
      action: 'files selected',
      description: 'Callback when files are selected/dropped',
    },
    onFilesRemoved: {
      action: 'files removed',
      description: 'Callback when files are removed',
    },
    accept: {
      control: 'text',
      description: 'Accepted file types (e.g., "image/*", ".pdf,.doc")',
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple file selection',
    },
    maxSize: {
      control: 'number',
      description: 'Maximum file size in bytes',
    },
    maxFiles: {
      control: 'number',
      description: 'Maximum number of files',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable file drop functionality',
    },
    variant: {
      control: 'select',
      options: ['default', 'compact', 'ai', 'glass-frost', 'glass-tint'],
      description: 'Visual variant',
    },
    showPreview: {
      control: 'boolean',
      description: 'Show file previews after upload',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    multiple: true,
    maxSize: 10 * 1024 * 1024, // 10MB
    maxFiles: 10,
    showPreview: true,
  },
  render: (args) => {
    const [selectedFiles, setSelectedFiles] = useState<FileWithPreview[]>([])

    return (
      <Card padding="lg" style={{ width: '500px' }}>
        <Text as="h3" style={{ marginBottom: '1rem' }}>
          File Upload
        </Text>
        <FileDrop
          {...args}
          onFilesSelected={setSelectedFiles}
          onFilesRemoved={setSelectedFiles}
        />
        {selectedFiles.length > 0 && (
          <div style={{ marginTop: '1rem' }}>
            <Text
              as="span"
              size="sm"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {selectedFiles.length} file{selectedFiles.length > 1 ? 's' : ''}{' '}
              selected
            </Text>
          </div>
        )}
      </Card>
    )
  },
}

export const ImageOnly: Story = {
  args: {
    accept: 'image/*',
    multiple: true,
    maxSize: 5 * 1024 * 1024, // 5MB
    maxFiles: 5,
    showPreview: true,
  },
  render: (args) => {
    const [, setSelectedFiles] = useState<FileWithPreview[]>([])

    return (
      <Card padding="lg" style={{ width: '500px' }}>
        <Text as="h3" style={{ marginBottom: '0.5rem' }}>
          Image Gallery Upload
        </Text>
        <Text
          as="span"
          size="sm"
          style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)' }}
        >
          Upload your images to create a gallery
        </Text>
        <FileDrop
          {...args}
          onFilesSelected={setSelectedFiles}
          onFilesRemoved={setSelectedFiles}
        />
      </Card>
    )
  },
}

export const SingleFile: Story = {
  args: {
    accept: '.pdf,.doc,.docx',
    multiple: false,
    maxSize: 20 * 1024 * 1024, // 20MB
    showPreview: true,
  },
  render: (args) => {
    const [, setSelectedFiles] = useState<FileWithPreview[]>([])

    return (
      <Card padding="lg" style={{ width: '500px' }}>
        <Text as="h3" style={{ marginBottom: '0.5rem' }}>
          Document Upload
        </Text>
        <Text
          as="span"
          size="sm"
          style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)' }}
        >
          Upload a single document (PDF, DOC, DOCX)
        </Text>
        <FileDrop
          {...args}
          onFilesSelected={setSelectedFiles}
          onFilesRemoved={setSelectedFiles}
        />
      </Card>
    )
  },
}

export const AIVariant: Story = {
  args: {
    variant: 'ai',
    accept: 'image/*,video/*',
    multiple: true,
    maxSize: 50 * 1024 * 1024, // 50MB
    maxFiles: 3,
    showPreview: true,
  },
  render: (args) => {
    const [, setSelectedFiles] = useState<FileWithPreview[]>([])

    return (
      <Card padding="lg" style={{ width: '500px' }}>
        <Text as="h3">AI Content Upload</Text>
        <Text as="span" size="sm" tone="secondary">
          Upload images or videos for AI processing
        </Text>
        <FileDrop
          {...args}
          onFilesSelected={setSelectedFiles}
          onFilesRemoved={setSelectedFiles}
        />
      </Card>
    )
  },
}

export const GlassVariants: Story = {
  render: () => {
    const [, setFrostFiles] = useState<FileWithPreview[]>([])
    const [, setTintFiles] = useState<FileWithPreview[]>([])

    return (
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <Card variant="glass-frost" padding="lg" style={{ width: '400px' }}>
          <Text as="h4" style={{ marginBottom: '1rem' }}>
            Glass Frost
          </Text>
          <FileDrop
            variant="glass-frost"
            multiple={true}
            showPreview={true}
            onFilesSelected={setFrostFiles}
            onFilesRemoved={setFrostFiles}
          />
        </Card>

        <Card variant="glass-tint" padding="lg" style={{ width: '400px' }}>
          <Text as="h4" style={{ marginBottom: '1rem' }}>
            Glass Tint
          </Text>
          <FileDrop
            variant="glass-tint"
            multiple={true}
            showPreview={true}
            onFilesSelected={setTintFiles}
            onFilesRemoved={setTintFiles}
          />
        </Card>
      </div>
    )
  },
}

export const CompactVariant: Story = {
  args: {
    variant: 'compact',
    multiple: true,
    showPreview: false,
    maxFiles: 5,
  },
  render: (args) => {
    const [selectedFiles, setSelectedFiles] = useState<FileWithPreview[]>([])

    return (
      <Card padding="lg" style={{ width: '400px' }}>
        <Text as="h4" style={{ marginBottom: '1rem' }}>
          Compact File Drop
        </Text>
        <FileDrop
          {...args}
          onFilesSelected={setSelectedFiles}
          onFilesRemoved={setSelectedFiles}
        />
        {selectedFiles.length > 0 && (
          <div style={{ marginTop: '1rem' }}>
            <Text as="span" size="sm" style={{ fontWeight: 500 }}>
              Selected Files:
            </Text>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1rem' }}>
              {selectedFiles.map((file) => (
                <li key={file.id}>
                  <Text
                    as="span"
                    size="sm"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {file.name} ({(file.size / 1024).toFixed(1)} KB)
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Card>
    )
  },
}

export const DisabledState: Story = {
  args: {
    disabled: true,
    multiple: true,
    showPreview: true,
  },
  render: (args) => (
    <Card padding="lg" style={{ width: '500px' }}>
      <Text as="h3" style={{ marginBottom: '0.5rem' }}>
        Disabled File Drop
      </Text>
      <Text
        as="span"
        size="sm"
        style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)' }}
      >
        This file drop is disabled and cannot accept files
      </Text>
      <FileDrop {...args} />
    </Card>
  ),
}

export const WithValidationDemo: Story = {
  render: () => {
    const [selectedFiles, setSelectedFiles] = useState<FileWithPreview[]>([])
    const [, setValidationMessages] = useState<string[]>([])

    const handleFilesSelected = (files: FileWithPreview[]) => {
      setSelectedFiles(files)
      setValidationMessages([])
    }

    return (
      <Card padding="lg" style={{ width: '500px' }}>
        <Text as="h3" style={{ marginBottom: '0.5rem' }}>
          Validation Demo
        </Text>
        <Text
          as="span"
          size="sm"
          style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)' }}
        >
          Try uploading files larger than 1MB or more than 2 files to see
          validation
        </Text>

        <FileDrop
          accept="image/*"
          multiple={true}
          maxSize={1024 * 1024} // 1MB
          maxFiles={2}
          showPreview={true}
          onFilesSelected={handleFilesSelected}
          onFilesRemoved={setSelectedFiles}
        />

        <div
          style={{
            marginTop: '1rem',
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
          }}
        >
          <Button
            variant="ghost"
            size="sm"
            icon={<RefreshCcwIcon />}
            onClick={() => {
              setSelectedFiles([])
              setValidationMessages([])
            }}
          >
            Reset
          </Button>
          {selectedFiles.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              icon={<XIcon />}
              onClick={() => setSelectedFiles([])}
            >
              Clear All
            </Button>
          )}
        </div>
      </Card>
    )
  },
}

export const AllVariants: Story = {
  render: () => {
    const variants = [
      'default',
      'compact',
      'ai',
      'glass-frost',
      'glass-tint',
    ] as const
    const [, setFilesState] = useState<Record<string, FileWithPreview[]>>({})

    const handleFilesSelected =
      (variant: string) => (files: FileWithPreview[]) => {
        setFilesState((prev) => ({ ...prev, [variant]: files }))
      }

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          width: '100%',
          maxWidth: '1200px',
        }}
      >
        {variants.map((variant) => (
          <Card key={variant} padding="lg">
            <Text
              as="h4"
              style={{ marginBottom: '1rem', textTransform: 'capitalize' }}
            >
              {variant.replace('-', ' ')} Variant
            </Text>
            <FileDrop
              variant={variant}
              multiple={true}
              showPreview={variant !== 'compact'}
              onFilesSelected={handleFilesSelected(variant)}
              onFilesRemoved={handleFilesSelected(variant)}
            />
          </Card>
        ))}
      </div>
    )
  },
}
