import { useState, useRef, DragEvent, ChangeEvent } from 'react'

export interface FileWithPreview extends File {
  preview?: string
  id?: string
}

export interface FileDropProps {
  onFilesSelected?: (files: FileWithPreview[]) => void
  onFilesRemoved?: (files: FileWithPreview[]) => void
  accept?: string
  multiple?: boolean
  maxSize?: number // in bytes
  maxFiles?: number
  disabled?: boolean
  variant?: 'default' | 'compact' | 'ai' | 'glass-frost' | 'glass-tint'
  showPreview?: boolean
  className?: string
}

export function FileDrop({
  onFilesSelected,
  onFilesRemoved,
  accept,
  multiple = true,
  maxSize = 10 * 1024 * 1024, // 10MB default
  maxFiles = 10,
  disabled = false,
  variant = 'default',
  showPreview = true,
  className = '',
}: FileDropProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [files, setFiles] = useState<FileWithPreview[]>([])
  const [error, setError] = useState<string>('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i]
  }

  const validateFiles = (
    fileList: File[]
  ): { valid: FileWithPreview[]; errors: string[] } => {
    const errors: string[] = []
    const valid: FileWithPreview[] = []

    if (!multiple && fileList.length > 1) {
      errors.push('Only one file is allowed')
      return { valid, errors }
    }

    if (files.length + fileList.length > maxFiles) {
      errors.push(`Maximum ${maxFiles} files allowed`)
      return { valid, errors }
    }

    fileList.forEach((file) => {
      if (maxSize && file.size > maxSize) {
        errors.push(
          `${file.name} exceeds maximum size of ${formatFileSize(maxSize)}`
        )
        return
      }

      if (accept) {
        const acceptedTypes = accept.split(',').map((t) => t.trim())
        const fileType = file.type
        const fileExt = '.' + file.name.split('.').pop()

        const isAccepted = acceptedTypes.some((type) => {
          if (type.startsWith('.')) {
            return fileExt === type
          }
          if (type.endsWith('/*')) {
            return fileType.startsWith(type.replace('/*', ''))
          }
          return fileType === type
        })

        if (!isAccepted) {
          errors.push(`${file.name} type not accepted`)
          return
        }
      }

      const fileWithPreview: FileWithPreview = Object.assign(file, {
        id: Math.random().toString(36).substr(2, 9),
        preview: file.type.startsWith('image/')
          ? URL.createObjectURL(file)
          : undefined,
      })

      valid.push(fileWithPreview)
    })

    return { valid, errors }
  }

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return

    const filesArray = Array.from(fileList)
    const { valid, errors } = validateFiles(filesArray)

    if (errors.length > 0) {
      setError(errors.join(', '))
      setTimeout(() => setError(''), 5000)
      return
    }

    const newFiles = multiple ? [...files, ...valid] : valid
    setFiles(newFiles)
    setError('')
    onFilesSelected?.(newFiles)
  }

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (!disabled) {
      setIsDragging(true)
    }
  }

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    if (disabled) return

    handleFiles(e.dataTransfer.files)
  }

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files)
    // Reset input so same file can be selected again
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleRemoveFile = (fileToRemove: FileWithPreview) => {
    if (fileToRemove.preview) {
      URL.revokeObjectURL(fileToRemove.preview)
    }
    const newFiles = files.filter((f) => f.id !== fileToRemove.id)
    setFiles(newFiles)
    onFilesRemoved?.(newFiles)
  }

  const handleClick = () => {
    if (!disabled) {
      fileInputRef.current?.click()
    }
  }

  const classes = [
    'bien-file-drop',
    `bien-file-drop--${variant}`,
    isDragging && 'bien-file-drop--dragging',
    disabled && 'bien-file-drop--disabled',
    error && 'bien-file-drop--error',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="bien-file-drop-wrapper">
      <div
        className={classes}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        {variant === 'ai' && <div className="bien-file-drop__ai-border" />}

        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileInputChange}
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          style={{ display: 'none' }}
        />

        <div className="bien-file-drop__content">
          <svg
            className="bien-file-drop__icon"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M24 14V34M24 14L18 20M24 14L30 20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M36 28V38C36 39.1046 35.1046 40 34 40H14C12.8954 40 12 39.1046 12 38V28"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <div className="bien-file-drop__text">
            <p className="bien-file-drop__title">
              {isDragging ? 'Drop files here' : 'Drag & drop files here'}
            </p>
            <p className="bien-file-drop__subtitle">or click to browse</p>
          </div>

          {(accept || maxSize) && (
            <div className="bien-file-drop__info">
              {accept && <span>Accepted: {accept}</span>}
              {maxSize && <span>Max size: {formatFileSize(maxSize)}</span>}
            </div>
          )}
        </div>
      </div>

      {error && <div className="bien-file-drop__error">{error}</div>}

      {showPreview && files.length > 0 && (
        <div className="bien-file-drop__preview">
          {files.map((file) => (
            <div key={file.id} className="bien-file-drop__file">
              <div className="bien-file-drop__file-preview">
                {file.preview ? (
                  <img src={file.preview} alt={file.name} />
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 2V8H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <div className="bien-file-drop__file-info">
                <p className="bien-file-drop__file-name">{file.name}</p>
                <p className="bien-file-drop__file-size">
                  {formatFileSize(file.size)}
                </p>
              </div>
              <button
                className="bien-file-drop__file-remove"
                onClick={(e) => {
                  e.stopPropagation()
                  handleRemoveFile(file)
                }}
                aria-label="Remove file"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M4 4L12 12M4 12L12 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
