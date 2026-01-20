import { useState } from 'react'
import './styles/datepicker.css'

export interface DateRange {
  start: Date | undefined
  end: Date | undefined
}

export interface DatePickerProps {
  value?: Date
  onChange?: (date: Date) => void
  range?: boolean
  rangeValue?: DateRange
  onRangeChange?: (range: DateRange) => void
  minDate?: Date
  maxDate?: Date
  placeholder?: string
  disabled?: boolean
  className?: string
}

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export function DatePicker({
  value,
  onChange,
  range = false,
  rangeValue,
  onRangeChange,
  minDate,
  maxDate,
  placeholder = 'Select date',
  disabled = false,
  className = '',
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(value || new Date())
  const [rangeStart, setRangeStart] = useState<Date | undefined>(
    rangeValue?.start
  )
  const [rangeEnd, setRangeEnd] = useState<Date | undefined>(rangeValue?.end)
  const [showMonthPicker, setShowMonthPicker] = useState(false)
  const [showYearPicker, setShowYearPicker] = useState(false)

  const formatDate = (date: Date | undefined) => {
    if (!date) return ''
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  const formatRange = (start: Date | undefined, end: Date | undefined) => {
    if (!start && !end) return ''
    if (start && !end) return `${formatDate(start)} - ...`
    if (!start && end) return `... - ${formatDate(end)}`
    return `${formatDate(start)} - ${formatDate(end)}`
  }

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days: (Date | null)[] = []

    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i))
    }

    return days
  }

  const handleDateClick = (date: Date) => {
    if (range) {
      if (!rangeStart || (rangeStart && rangeEnd)) {
        setRangeStart(date)
        setRangeEnd(undefined)
      } else if (rangeStart && !rangeEnd) {
        if (date < rangeStart) {
          setRangeStart(date)
          setRangeEnd(rangeStart)
        } else {
          setRangeEnd(date)
        }
        if (onRangeChange) {
          const newEnd = date < rangeStart ? rangeStart : date
          const newStart = date < rangeStart ? date : rangeStart
          onRangeChange({ start: newStart, end: newEnd })
        }
        setTimeout(() => setIsOpen(false), 200)
      }
    } else {
      if (onChange) {
        onChange(date)
      }
      setIsOpen(false)
    }
  }

  const handlePreviousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    )
  }

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    )
  }

  const handleMonthSelect = (monthIndex: number) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), monthIndex))
    setShowMonthPicker(false)
  }

  const handleYearSelect = (year: number) => {
    setCurrentMonth(new Date(year, currentMonth.getMonth()))
    setShowYearPicker(false)
  }

  const handleToday = () => {
    const today = new Date()
    if (range) {
      setRangeStart(today)
      setRangeEnd(today)
      if (onRangeChange) {
        onRangeChange({ start: today, end: today })
      }
    } else {
      if (onChange) {
        onChange(today)
      }
    }
    setCurrentMonth(today)
    setIsOpen(false)
  }

  const isDateDisabled = (date: Date) => {
    if (minDate && date < minDate) return true
    if (maxDate && date > maxDate) return true
    return false
  }

  const isToday = (date: Date) => {
    const today = new Date()
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    )
  }

  const isSelected = (date: Date) => {
    if (range) {
      if (!rangeStart) return false
      const dateTime = date.getTime()
      const startTime = new Date(
        rangeStart.getFullYear(),
        rangeStart.getMonth(),
        rangeStart.getDate()
      ).getTime()
      const endTime = rangeEnd
        ? new Date(
            rangeEnd.getFullYear(),
            rangeEnd.getMonth(),
            rangeEnd.getDate()
          ).getTime()
        : startTime
      return dateTime >= startTime && dateTime <= endTime
    } else {
      if (!value) return false
      return (
        date.getDate() === value.getDate() &&
        date.getMonth() === value.getMonth() &&
        date.getFullYear() === value.getFullYear()
      )
    }
  }

  const isRangeStart = (date: Date) => {
    if (!rangeStart) return false
    return (
      date.getDate() === rangeStart.getDate() &&
      date.getMonth() === rangeStart.getMonth() &&
      date.getFullYear() === rangeStart.getFullYear()
    )
  }

  const isRangeEnd = (date: Date) => {
    if (!rangeEnd) return false
    return (
      date.getDate() === rangeEnd.getDate() &&
      date.getMonth() === rangeEnd.getMonth() &&
      date.getFullYear() === rangeEnd.getFullYear()
    )
  }

  const days = getDaysInMonth(currentMonth)
  const currentYear = currentMonth.getFullYear()
  const years = Array.from({ length: 20 }, (_, i) => currentYear - 10 + i)

  const classes = [
    'bien-datepicker',
    disabled && 'bien-datepicker--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const displayValue = range
    ? formatRange(rangeStart, rangeEnd)
    : value
      ? formatDate(value)
      : ''

  return (
    <div className={classes}>
      <button
        type="button"
        className="bien-datepicker__input"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
      >
        <span
          className={
            displayValue
              ? 'bien-datepicker__value'
              : 'bien-datepicker__placeholder'
          }
        >
          {displayValue || placeholder}
        </span>
        <svg
          className="bien-datepicker__icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="4"
            width="14"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M3 8h14M7 2v4M13 2v4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="bien-datepicker__overlay"
            onClick={() => setIsOpen(false)}
          />
          <div className="bien-datepicker__dropdown">
            <div className="bien-datepicker__header">
              <button
                type="button"
                className="bien-datepicker__nav-button"
                onClick={handlePreviousMonth}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M12 14L8 10L12 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="bien-datepicker__month-year-selector">
                <button
                  type="button"
                  className="bien-datepicker__month-button"
                  onClick={() => {
                    setShowMonthPicker(!showMonthPicker)
                    setShowYearPicker(false)
                  }}
                >
                  {MONTHS[currentMonth.getMonth()]}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="bien-datepicker__year-button"
                  onClick={() => {
                    setShowYearPicker(!showYearPicker)
                    setShowMonthPicker(false)
                  }}
                >
                  {currentMonth.getFullYear()}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <button
                type="button"
                className="bien-datepicker__nav-button"
                onClick={handleNextMonth}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M8 6L12 10L8 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {showMonthPicker && (
              <div className="bien-datepicker__month-grid">
                {MONTHS.map((month, index) => (
                  <button
                    key={month}
                    type="button"
                    className={`bien-datepicker__month-option ${
                      index === currentMonth.getMonth()
                        ? 'bien-datepicker__month-option--active'
                        : ''
                    }`}
                    onClick={() => handleMonthSelect(index)}
                  >
                    {month.slice(0, 3)}
                  </button>
                ))}
              </div>
            )}

            {showYearPicker && (
              <div className="bien-datepicker__year-grid">
                {years.map((year) => (
                  <button
                    key={year}
                    type="button"
                    className={`bien-datepicker__year-option ${
                      year === currentMonth.getFullYear()
                        ? 'bien-datepicker__year-option--active'
                        : ''
                    }`}
                    onClick={() => handleYearSelect(year)}
                  >
                    {year}
                  </button>
                ))}
              </div>
            )}

            {!showMonthPicker && !showYearPicker && (
              <div className="bien-datepicker__calendar">
                <div className="bien-datepicker__weekdays">
                  {DAYS.map((day) => (
                    <div key={day} className="bien-datepicker__weekday">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="bien-datepicker__days">
                  {days.map((date, index) => (
                    <div key={index} className="bien-datepicker__day-cell">
                      {date && (
                        <button
                          type="button"
                          className={[
                            'bien-datepicker__day',
                            isSelected(date) &&
                              'bien-datepicker__day--selected',
                            isRangeStart(date) &&
                              'bien-datepicker__day--range-start',
                            isRangeEnd(date) &&
                              'bien-datepicker__day--range-end',
                            isToday(date) && 'bien-datepicker__day--today',
                            isDateDisabled(date) &&
                              'bien-datepicker__day--disabled',
                          ]
                            .filter(Boolean)
                            .join(' ')}
                          onClick={() =>
                            !isDateDisabled(date) && handleDateClick(date)
                          }
                          disabled={isDateDisabled(date)}
                        >
                          {date.getDate()}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bien-datepicker__footer">
              <button
                type="button"
                className="bien-datepicker__today-button"
                onClick={handleToday}
              >
                Today
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
