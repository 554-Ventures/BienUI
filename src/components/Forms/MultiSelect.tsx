import { forwardRef, useState, useRef, useEffect } from 'react'

export interface MultiSelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface MultiSelectProps {
  label?: string
  error?: string
  hint?: string
  options: MultiSelectOption[]
  placeholder?: string
  value?: string[]
  onChange?: (value: string[]) => void
  className?: string
  disabled?: boolean
  required?: boolean
  searchable?: boolean
  maxTags?: number
  variant?: 'primary' | 'accent' | 'purple'
}

export const MultiSelect = forwardRef<HTMLDivElement, MultiSelectProps>(
  (
    {
      label,
      error,
      hint,
      options,
      placeholder = 'Select options...',
      value = [],
      onChange,
      className = '',
      disabled = false,
      required = false,
      searchable = true,
      maxTags,
      variant = 'primary',
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const containerRef = useRef<HTMLDivElement>(null)
    const searchInputRef = useRef<HTMLInputElement>(null)

    const classes = [
      'bien-multi-select-wrapper',
      error && 'bien-multi-select-wrapper--error',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    const filteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleToggle = () => {
      if (!disabled) {
        setIsOpen(!isOpen)
        if (!isOpen && searchable) {
          setTimeout(() => {
            searchInputRef.current?.focus()
          }, 50)
        }
      }
    }

    const handleOptionClick = (
      optionValue: string,
      optionDisabled?: boolean
    ) => {
      if (optionDisabled || disabled) return

      const newValue = value.includes(optionValue)
        ? value.filter((v) => v !== optionValue)
        : [...value, optionValue]

      onChange?.(newValue)
    }

    const handleRemoveTag = (optionValue: string, e: React.MouseEvent) => {
      e.stopPropagation()
      if (!disabled) {
        onChange?.(value.filter((v) => v !== optionValue))
      }
    }

    // Get selected labels for display
    // const getSelectedLabels = () => {
    //   return value
    //     .map((v) => options.find((opt) => opt.value === v)?.label)
    //     .filter(Boolean) as string[]
    // }

    const displayedTags =
      maxTags && value.length > maxTags ? value.slice(0, maxTags) : value

    const remainingCount =
      maxTags && value.length > maxTags ? value.length - maxTags : 0

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false)
          setSearchTerm('')
        }
      }

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside)
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [isOpen])

    // Reset search when closing
    useEffect(() => {
      if (!isOpen) {
        // Use a timeout to avoid setState in effect
        const timer = setTimeout(() => setSearchTerm(''), 0)
        return () => clearTimeout(timer)
      }
    }, [isOpen])

    return (
      <div className={classes} ref={containerRef}>
        {label && (
          <label className="bien-multi-select-label">
            {label}
            {required && <span className="bien-multi-select-required">*</span>}
          </label>
        )}
        <div style={{ position: 'relative' }} ref={ref}>
          <div
            className="bien-multi-select-trigger"
            onClick={handleToggle}
            data-open={isOpen}
            tabIndex={disabled ? -1 : 0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleToggle()
              }
            }}
            role="combobox"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-disabled={disabled}
          >
            {displayedTags.length > 0 ? (
              <>
                {displayedTags.map((v) => {
                  const option = options.find((opt) => opt.value === v)
                  if (!option) return null
                  return (
                    <span
                      key={v}
                      className={`bien-multi-select-tag bien-multi-select-tag--${variant}`}
                    >
                      {option.label}
                      <button
                        type="button"
                        className="bien-multi-select-tag-remove"
                        onClick={(e) => handleRemoveTag(v, e)}
                        aria-label={`Remove ${option.label}`}
                      >
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                        >
                          <path
                            d="M2 2L8 8M2 8L8 2"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </span>
                  )
                })}
                {remainingCount > 0 && (
                  <span
                    className={`bien-multi-select-tag bien-multi-select-tag--${variant}`}
                  >
                    +{remainingCount} more
                  </span>
                )}
              </>
            ) : (
              <span className="bien-multi-select-placeholder">
                {placeholder}
              </span>
            )}
            <svg
              className="bien-multi-select-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {isOpen && (
            <div className="bien-multi-select-dropdown" role="listbox">
              {searchable && (
                <div className="bien-multi-select-search">
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              )}

              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => {
                  const isSelected = value.includes(option.value)
                  return (
                    <div
                      key={option.value}
                      className="bien-multi-select-option"
                      onClick={() =>
                        handleOptionClick(option.value, option.disabled)
                      }
                      data-selected={isSelected}
                      data-disabled={option.disabled}
                      role="option"
                      aria-selected={isSelected}
                      aria-disabled={option.disabled}
                    >
                      <div className="bien-multi-select-checkbox">
                        <svg
                          className="bien-multi-select-check-icon"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M2 6L5 9L10 3"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span>{option.label}</span>
                    </div>
                  )
                })
              ) : (
                <div className="bien-multi-select-no-results">
                  No options found
                </div>
              )}
            </div>
          )}
        </div>
        {hint && !error && (
          <span className="bien-multi-select-hint">{hint}</span>
        )}
        {error && <span className="bien-multi-select-error">{error}</span>}
      </div>
    )
  }
)

MultiSelect.displayName = 'MultiSelect'
