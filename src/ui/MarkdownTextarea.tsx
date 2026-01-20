import { forwardRef, useState, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {
  Bold,
  Italic,
  Heading1,
  Heading2,
  List,
  Link as LinkIcon,
  Code,
  Eye,
  Edit3,
} from 'lucide-react'
import './styles/markdown-textarea.css'

export interface MarkdownTextareaProps extends Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  'onChange'
> {
  label?: string
  error?: string
  hint?: string
  showCount?: boolean
  onChange?: (value: string) => void
  value?: string
  defaultValue?: string
}

export const MarkdownTextarea = forwardRef<
  HTMLTextAreaElement,
  MarkdownTextareaProps
>(
  (
    {
      label,
      error,
      hint,
      showCount,
      className = '',
      maxLength,
      value: controlledValue,
      defaultValue = '',
      onChange,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue)
    const [mode, setMode] = useState<'edit' | 'preview'>('edit')
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)

    const value =
      controlledValue !== undefined ? controlledValue : internalValue
    const charCount = value ? String(value).length : 0

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value
      if (controlledValue === undefined) {
        setInternalValue(newValue)
      }
      onChange?.(newValue)
    }

    const insertMarkdown = (before: string, after: string = '') => {
      const textarea = textareaRef.current
      if (!textarea) return

      const start = textarea.selectionStart
      const end = textarea.selectionEnd
      const selectedText = value.substring(start, end)
      const newValue =
        value.substring(0, start) +
        before +
        selectedText +
        after +
        value.substring(end)

      if (controlledValue === undefined) {
        setInternalValue(newValue)
      }
      onChange?.(newValue)

      // Restore focus and selection
      setTimeout(() => {
        textarea.focus()
        const newCursorPos = start + before.length + selectedText.length
        textarea.setSelectionRange(newCursorPos, newCursorPos)
      }, 0)
    }

    const classes = [
      'bien-md-textarea-wrapper',
      error && 'bien-md-textarea-wrapper--error',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div className={classes}>
        {label && (
          <label className="bien-md-textarea-label">
            {label}
            {props.required && (
              <span className="bien-md-textarea-required">*</span>
            )}
          </label>
        )}

        <div className="bien-md-textarea-container">
          {/* Toolbar */}
          <div className="bien-md-toolbar">
            <div className="bien-md-toolbar-group">
              <button
                type="button"
                className="bien-md-toolbar-btn"
                onClick={() => insertMarkdown('**', '**')}
                title="Bold"
                aria-label="Bold"
              >
                <Bold size={16} />
              </button>
              <button
                type="button"
                className="bien-md-toolbar-btn"
                onClick={() => insertMarkdown('_', '_')}
                title="Italic"
                aria-label="Italic"
              >
                <Italic size={16} />
              </button>
              <button
                type="button"
                className="bien-md-toolbar-btn"
                onClick={() => insertMarkdown('# ', '')}
                title="Heading 1"
                aria-label="Heading 1"
              >
                <Heading1 size={16} />
              </button>
              <button
                type="button"
                className="bien-md-toolbar-btn"
                onClick={() => insertMarkdown('## ', '')}
                title="Heading 2"
                aria-label="Heading 2"
              >
                <Heading2 size={16} />
              </button>
              <button
                type="button"
                className="bien-md-toolbar-btn"
                onClick={() => insertMarkdown('- ', '')}
                title="List"
                aria-label="List"
              >
                <List size={16} />
              </button>
              <button
                type="button"
                className="bien-md-toolbar-btn"
                onClick={() => insertMarkdown('[', '](url)')}
                title="Link"
                aria-label="Link"
              >
                <LinkIcon size={16} />
              </button>
              <button
                type="button"
                className="bien-md-toolbar-btn"
                onClick={() => insertMarkdown('`', '`')}
                title="Code"
                aria-label="Code"
              >
                <Code size={16} />
              </button>
            </div>
            <div className="bien-md-toolbar-group">
              <button
                type="button"
                className={`bien-md-toolbar-btn ${mode === 'edit' ? 'bien-md-toolbar-btn--active' : ''}`}
                onClick={() => setMode('edit')}
                title="Edit"
                aria-label="Edit mode"
              >
                <Edit3 size={16} />
              </button>
              <button
                type="button"
                className={`bien-md-toolbar-btn ${mode === 'preview' ? 'bien-md-toolbar-btn--active' : ''}`}
                onClick={() => setMode('preview')}
                title="Preview"
                aria-label="Preview mode"
              >
                <Eye size={16} />
              </button>
            </div>
          </div>

          {/* Editor / Preview */}
          {mode === 'edit' ? (
            <textarea
              ref={(node) => {
                textareaRef.current = node
                if (typeof ref === 'function') {
                  ref(node)
                } else if (ref) {
                  ref.current = node
                }
              }}
              className="bien-md-textarea"
              value={value}
              onChange={handleChange}
              maxLength={maxLength}
              aria-invalid={error ? 'true' : 'false'}
              {...props}
            />
          ) : (
            <div className="bien-md-preview">
              {value ? (
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {String(value)}
                </ReactMarkdown>
              ) : (
                <p className="bien-md-preview-empty">Nothing to preview</p>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bien-md-textarea-footer">
          <div className="bien-md-textarea-messages">
            {hint && !error && (
              <span className="bien-md-textarea-hint">{hint}</span>
            )}
            {error && <span className="bien-md-textarea-error">{error}</span>}
          </div>
          {showCount && (
            <span className="bien-md-textarea-count">
              {charCount}
              {maxLength && ` / ${maxLength}`}
            </span>
          )}
        </div>
      </div>
    )
  }
)

MarkdownTextarea.displayName = 'MarkdownTextarea'
