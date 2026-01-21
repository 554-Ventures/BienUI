import { ReactNode, useState, CSSProperties } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Select } from '../Forms/Select'

export interface TableColumn<T = Record<string, unknown>> {
  /** Unique key for the column */
  key: string
  /** Column header label */
  label: string
  /** Width of the column */
  width?: string | number
  /** Whether column is sortable */
  sortable?: boolean
  /** Custom render function for cells */
  render?: (value: unknown, row: T, index: number) => ReactNode
  /** Alignment of column content */
  align?: 'left' | 'center' | 'right'
}

export interface TableProps<T = Record<string, unknown>> {
  /** Column definitions */
  columns: TableColumn<T>[]
  /** Table data */
  data: T[]
  /** Visual variant */
  variant?: 'default' | 'bordered' | 'striped' | 'minimal'
  /** Header style variant */
  headerVariant?: 'default' | 'glass-frost' | 'glass-tint'
  /** Size of table cells */
  size?: 'compact' | 'comfortable' | 'spacious'
  /** Whether rows are hoverable */
  hoverable?: boolean
  /** Whether rows are selectable */
  selectable?: boolean
  /** Selected row keys */
  selectedRows?: string[]
  /** Callback when selection changes */
  onSelectionChange?: (selectedKeys: string[]) => void
  /** Row key extractor */
  rowKey?: (row: T) => string
  /** Custom row click handler */
  onRowClick?: (row: T, index: number) => void
  /** Empty state content */
  emptyState?: ReactNode
  /** Caption for the table */
  caption?: string
  /** Whether table has sticky header */
  stickyHeader?: boolean
  /** Max height for scrollable table */
  maxHeight?: string | number
  /** Enable pagination */
  pagination?: boolean
  /** Current page (1-indexed) */
  page?: number
  /** Page size */
  pageSize?: number
  /** Total number of items */
  total?: number
  /** Callback when page changes */
  onPageChange?: (page: number) => void
  /** Callback when page size changes */
  onPageSizeChange?: (pageSize: number) => void
  /** Available page size options */
  pageSizeOptions?: number[]
  /** Additional CSS class */
  className?: string
  /** Additional styles */
  style?: CSSProperties
}

export function Table<T = Record<string, unknown>>({
  columns,
  data,
  variant = 'default',
  headerVariant = 'glass-frost',
  size = 'comfortable',
  hoverable = true,
  selectable = false,
  selectedRows = [],
  onSelectionChange,
  rowKey = (row: T) => (row as Record<string, unknown>).id || String(row),
  onRowClick,
  emptyState,
  caption,
  stickyHeader = false,
  maxHeight,
  pagination = false,
  page = 1,
  pageSize = 10,
  total,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [5, 10, 25, 50],
  className = '',
  style,
}: TableProps<T>) {
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

  const handleSort = (columnKey: string) => {
    if (sortColumn === columnKey) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(columnKey)
      setSortDirection('asc')
    }
  }

  const handleSelectAll = () => {
    if (!onSelectionChange) return

    if (selectedRows.length === data.length) {
      onSelectionChange([])
    } else {
      onSelectionChange(data.map(rowKey))
    }
  }

  const handleSelectRow = (row: T) => {
    if (!onSelectionChange) return

    const key = rowKey(row)
    if (selectedRows.includes(key)) {
      onSelectionChange(selectedRows.filter((k) => k !== key))
    } else {
      onSelectionChange([...selectedRows, key])
    }
  }

  const sortedData = [...data]
  if (sortColumn) {
    sortedData.sort((a, b) => {
      const aValue = (a as Record<string, unknown>)[sortColumn]
      const bValue = (b as Record<string, unknown>)[sortColumn]

      if (aValue === bValue) return 0

      const comparison = aValue > bValue ? 1 : -1
      return sortDirection === 'asc' ? comparison : -comparison
    })
  }

  const classes = [
    'bien-table-container',
    stickyHeader && 'bien-table-container--sticky',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const tableClasses = [
    'bien-table',
    `bien-table--${variant}`,
    `bien-table--${size}`,
    hoverable && 'bien-table--hoverable',
    selectable && 'bien-table--selectable',
  ]
    .filter(Boolean)
    .join(' ')

  const headClasses = ['bien-table__head', `bien-table__head--${headerVariant}`]
    .filter(Boolean)
    .join(' ')

  // Pagination calculations
  const totalItems = total || data.length
  const totalPages = Math.ceil(totalItems / pageSize)
  const paginatedData = pagination
    ? sortedData.slice((page - 1) * pageSize, page * pageSize)
    : sortedData

  const containerStyle: CSSProperties = {
    ...style,
    ...(maxHeight
      ? {
          maxHeight:
            typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight,
        }
      : {}),
  }

  if (data.length === 0 && emptyState) {
    return (
      <div className={classes} style={containerStyle}>
        <div className="bien-table-empty">{emptyState}</div>
      </div>
    )
  }

  return (
    <>
      <div className={classes} style={containerStyle}>
        <table className={tableClasses}>
          {caption && (
            <caption className="bien-table__caption">{caption}</caption>
          )}
          <thead className={headClasses}>
            <tr>
              {selectable && (
                <th className="bien-table__header bien-table__header--checkbox">
                  <input
                    type="checkbox"
                    checked={
                      selectedRows.length === data.length && data.length > 0
                    }
                    onChange={handleSelectAll}
                    className="bien-table__checkbox"
                  />
                </th>
              )}
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`bien-table__header bien-table__header--${column.align || 'left'} ${
                    column.sortable ? 'bien-table__header--sortable' : ''
                  } ${sortColumn === column.key ? 'bien-table__header--sorted' : ''}`}
                  style={{ width: column.width }}
                  onClick={() => column.sortable && handleSort(column.key)}
                >
                  <div className="bien-table__header-content">
                    {column.label}
                    {column.sortable && (
                      <span className="bien-table__sort-icon">
                        {sortColumn === column.key
                          ? sortDirection === 'asc'
                            ? '↑'
                            : '↓'
                          : '↕'}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bien-table__body">
            {paginatedData.map((row, rowIndex) => {
              const key = rowKey(row)
              const isSelected = selectedRows.includes(key)

              return (
                <tr
                  key={key}
                  className={`bien-table__row ${isSelected ? 'bien-table__row--selected' : ''}`}
                  onClick={() => onRowClick?.(row, rowIndex)}
                >
                  {selectable && (
                    <td className="bien-table__cell bien-table__cell--checkbox">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => handleSelectRow(row)}
                        onClick={(e) => e.stopPropagation()}
                        className="bien-table__checkbox"
                      />
                    </td>
                  )}
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={`bien-table__cell bien-table__cell--${column.align || 'left'}`}
                    >
                      {column.render
                        ? column.render(
                            (row as Record<string, unknown>)[column.key],
                            row,
                            rowIndex
                          )
                        : ((row as Record<string, unknown>)[
                            column.key
                          ] as ReactNode)}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      {pagination && (
        <div className="bien-table-pagination">
          {onPageSizeChange && (
            <div className="bien-table-pagination__page-size">
              <span className="bien-table-pagination__page-size-label">
                Rows per page:
              </span>
              <Select
                value={String(pageSize)}
                onChange={(e) => onPageSizeChange(Number(e.target.value))}
                options={pageSizeOptions.map((size) => ({
                  value: String(size),
                  label: String(size),
                }))}
              />
            </div>
          )}
          <div className="bien-table-pagination__right">
            <div className="bien-table-pagination__info">
              Showing {totalItems === 0 ? 0 : (page - 1) * pageSize + 1}-
              {Math.min(page * pageSize, totalItems)} of {totalItems}
            </div>
            <div className="bien-table-pagination__controls">
              <button
                className="bien-table-pagination__button bien-table-pagination__button--icon"
                onClick={() => onPageChange?.(page - 1)}
                disabled={page === 1}
                aria-label="Previous page"
              >
                <ChevronLeft />
              </button>
              {(() => {
                const pages = []
                const maxVisible = 5

                if (totalPages <= maxVisible + 2) {
                  // Show all pages
                  for (let i = 1; i <= totalPages; i++) {
                    pages.push(i)
                  }
                } else {
                  // Always show first page
                  pages.push(1)

                  if (page > 3) {
                    pages.push('...')
                  }

                  // Show pages around current page
                  const start = Math.max(2, page - 1)
                  const end = Math.min(totalPages - 1, page + 1)

                  for (let i = start; i <= end; i++) {
                    if (!pages.includes(i)) {
                      pages.push(i)
                    }
                  }

                  if (page < totalPages - 2) {
                    pages.push('...')
                  }

                  // Always show last page
                  if (totalPages > 1) {
                    pages.push(totalPages)
                  }
                }

                return pages.map((pageNum, idx) => {
                  if (pageNum === '...') {
                    return (
                      <span
                        key={`ellipsis-${idx}`}
                        className="bien-table-pagination__ellipsis"
                      >
                        ...
                      </span>
                    )
                  }

                  return (
                    <button
                      key={pageNum}
                      className={`bien-table-pagination__button ${page === pageNum ? 'bien-table-pagination__button--active' : ''}`}
                      onClick={() => onPageChange?.(pageNum as number)}
                    >
                      {pageNum}
                    </button>
                  )
                })
              })()}
              <button
                className="bien-table-pagination__button bien-table-pagination__button--icon"
                onClick={() => onPageChange?.(page + 1)}
                disabled={page === totalPages}
                aria-label="Next page"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
