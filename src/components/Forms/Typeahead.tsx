import {
  ReactNode,
  forwardRef,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Input } from './Input'
import { Tags } from '../Display/Tags'

export interface TypeaheadOption {
  value: string
  label: string
  description?: string
  icon?: ReactNode
  tags?: string[]
  disabled?: boolean
}

export interface TypeaheadProps {
  label?: string
  hint?: string
  error?: string
  required?: boolean
  disabled?: boolean
  placeholder?: string
  options: TypeaheadOption[]
  value?: string | null
  noResultsText?: string
  loading?: boolean
  loadingText?: string
  showSelectedCheckIcon?: boolean
  className?: string
  inputId?: string
  onChange?: (value: string | null, option: TypeaheadOption | null) => void
  onInputChange?: (inputValue: string) => void
  filterOptions?: (
    options: TypeaheadOption[],
    inputValue: string
  ) => TypeaheadOption[]
}

export const Typeahead = forwardRef<HTMLInputElement, TypeaheadProps>(
  (
    {
      label,
      hint,
      error,
      required = false,
      disabled = false,
      placeholder = 'Search...',
      options,
      value = null,
      noResultsText = 'No suggestions found',
      loading = false,
      loadingText = 'Loading suggestions...',
      showSelectedCheckIcon = true,
      className = '',
      inputId,
      onChange,
      onInputChange,
      filterOptions,
    },
    ref
  ) => {
    const generatedId = useId()
    const resolvedInputId = inputId || generatedId
    const listboxId = `${resolvedInputId}-listbox`
    const [isOpen, setIsOpen] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [activeIndex, setActiveIndex] = useState(-1)

    const containerRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const selectedOption = useMemo(
      () => options.find((option) => option.value === value) || null,
      [options, value]
    )

    useEffect(() => {
      if (!selectedOption) {
        return
      }

      setInputValue(selectedOption.label)
    }, [selectedOption])

    const defaultFilteredOptions = useMemo(() => {
      const query = inputValue.trim().toLowerCase()

      if (!query) {
        return options
      }

      return options.filter(
        (option) =>
          option.label.toLowerCase().includes(query) ||
          option.value.toLowerCase().includes(query)
      )
    }, [inputValue, options])

    const filteredOptions =
      filterOptions?.(options, inputValue) ?? defaultFilteredOptions

    const isDropdownVisible = isOpen && !disabled

    const selectOption = (option: TypeaheadOption) => {
      if (option.disabled) {
        return
      }

      setInputValue(option.label)
      setIsOpen(false)
      setActiveIndex(-1)
      onChange?.(option.value, option)
    }

    const handleInputChange = (nextValue: string) => {
      setInputValue(nextValue)
      setIsOpen(true)
      setActiveIndex(-1)
      onInputChange?.(nextValue)
    }

    const getNextEnabledIndex = (
      currentIndex: number,
      direction: 1 | -1
    ): number => {
      if (filteredOptions.length === 0) {
        return -1
      }

      let candidateIndex = currentIndex

      for (let i = 0; i < filteredOptions.length; i += 1) {
        if (direction === 1) {
          candidateIndex = (candidateIndex + 1) % filteredOptions.length
        } else {
          candidateIndex =
            candidateIndex <= 0
              ? filteredOptions.length - 1
              : candidateIndex - 1
        }

        if (!filteredOptions[candidateIndex]?.disabled) {
          return candidateIndex
        }
      }

      return -1
    }

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false)
          setActiveIndex(-1)

          if (selectedOption) {
            setInputValue(selectedOption.label)
          }
        }
      }

      document.addEventListener('mousedown', handleClickOutside)

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [selectedOption])

    useEffect(() => {
      if (!isOpen) {
        return
      }

      const firstEnabledIndex = filteredOptions.findIndex(
        (option) => !option.disabled
      )
      setActiveIndex(firstEnabledIndex)
    }, [filteredOptions, isOpen])

    const classes = ['bien-typeahead', className].filter(Boolean).join(' ')

    return (
      <div className={classes} ref={containerRef}>
        <Input
          ref={(node) => {
            inputRef.current = node

            if (typeof ref === 'function') {
              ref(node)
            } else if (ref) {
              ref.current = node
            }
          }}
          id={resolvedInputId}
          label={label}
          hint={hint}
          error={error}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          value={inputValue}
          onChange={(event) => handleInputChange(event.target.value)}
          onFocus={() => {
            setIsOpen(true)
          }}
          onClick={() => {
            if (!disabled) {
              setIsOpen(true)
            }
          }}
          role="combobox"
          aria-controls={listboxId}
          aria-expanded={isDropdownVisible}
          aria-autocomplete="list"
          aria-activedescendant={
            activeIndex >= 0
              ? `${resolvedInputId}-option-${activeIndex}`
              : undefined
          }
          onKeyDown={(event) => {
            if (!isOpen && event.key === 'ArrowDown') {
              event.preventDefault()
              setIsOpen(true)
              return
            }

            if (!isOpen) {
              return
            }

            if (event.key === 'Escape') {
              event.preventDefault()
              setIsOpen(false)
              setActiveIndex(-1)
              return
            }

            if (event.key === 'ArrowDown') {
              event.preventDefault()
              setActiveIndex(getNextEnabledIndex(activeIndex, 1))
              return
            }

            if (event.key === 'ArrowUp') {
              event.preventDefault()
              setActiveIndex(getNextEnabledIndex(activeIndex, -1))
              return
            }

            if (event.key === 'Enter' && activeIndex >= 0) {
              event.preventDefault()
              const activeOption = filteredOptions[activeIndex]

              if (activeOption && !activeOption.disabled) {
                selectOption(activeOption)
              }
            }
          }}
        />

        {isDropdownVisible && (
          <div
            className="bien-typeahead__dropdown"
            id={listboxId}
            role="listbox"
          >
            {loading && (
              <div className="bien-typeahead__state" aria-live="polite">
                {loadingText}
              </div>
            )}

            {!loading && filteredOptions.length === 0 && (
              <div className="bien-typeahead__state">{noResultsText}</div>
            )}

            {!loading && filteredOptions.length > 0 && (
              <ul className="bien-typeahead__list">
                {filteredOptions.map((option, index) => {
                  const isActive = index === activeIndex
                  const isSelected = selectedOption?.value === option.value

                  return (
                    <li
                      id={`${resolvedInputId}-option-${index}`}
                      key={option.value}
                      role="option"
                      aria-selected={isSelected}
                      aria-disabled={option.disabled || undefined}
                      className={[
                        'bien-typeahead__option',
                        isActive && 'bien-typeahead__option--active',
                        isSelected && 'bien-typeahead__option--selected',
                        option.disabled && 'bien-typeahead__option--disabled',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                      // Use onMouseDown to avoid input blur before selection runs.
                      onMouseDown={(event) => {
                        event.preventDefault()
                        selectOption(option)
                      }}
                      onMouseEnter={() => setActiveIndex(index)}
                    >
                      {option.icon && (
                        <span
                          className="bien-typeahead__option-icon"
                          aria-hidden="true"
                        >
                          {option.icon}
                        </span>
                      )}

                      <div className="bien-typeahead__content">
                        <span className="bien-typeahead__label">
                          {option.label}
                        </span>
                        {option.description && (
                          <span className="bien-typeahead__description">
                            {option.description}
                          </span>
                        )}
                        {option.tags && option.tags.length > 0 && (
                          <span className="bien-typeahead__tags">
                            {option.tags.map((tag) => (
                              <Tags
                                key={`${option.value}-${tag}`}
                                size="sm"
                                variant="neutral"
                                className="bien-typeahead__tag"
                              >
                                {tag}
                              </Tags>
                            ))}
                          </span>
                        )}
                      </div>

                      {showSelectedCheckIcon && isSelected && (
                        <span
                          className="bien-typeahead__selected-icon"
                          aria-label="Selected"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M2.75 7.25L5.5 10L11.25 4.25"
                              stroke="currentColor"
                              strokeWidth="1.75"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      )}
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        )}
      </div>
    )
  }
)

Typeahead.displayName = 'Typeahead'
