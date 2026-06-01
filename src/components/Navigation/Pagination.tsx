import { CSSProperties } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Select } from '../Forms/Select'

export interface PaginationProps {
  /** Current page (1-indexed) */
  page: number
  /** Number of items per page */
  pageSize: number
  /** Total number of items */
  total: number
  /** Callback when page changes */
  onPageChange: (page: number) => void
  /** Callback when page size changes */
  onPageSizeChange?: (pageSize: number) => void
  /** Available page size options */
  pageSizeOptions?: number[]
  /** Label shown before the page size selector */
  pageSizeLabel?: string
  /** Additional CSS class */
  className?: string
  /** Additional styles */
  style?: CSSProperties
}

export function Pagination({
  page,
  pageSize,
  total,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [5, 10, 25, 50],
  pageSizeLabel = 'Items per page:',
  className = '',
  style,
}: PaginationProps) {
  const totalPages = Math.ceil(total / pageSize)

  const classes = ['bien-pagination', className].filter(Boolean).join(' ')

  const pages: (number | '...')[] = []
  const maxVisible = 5

  if (totalPages <= maxVisible + 2) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
    }
  } else {
    pages.push(1)

    if (page > 3) {
      pages.push('...')
    }

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

    if (totalPages > 1) {
      pages.push(totalPages)
    }
  }

  return (
    <div className={classes} style={style}>
      {onPageSizeChange && (
        <div className="bien-pagination__page-size">
          <span className="bien-pagination__page-size-label">
            {pageSizeLabel}
          </span>
          <Select
            value={String(pageSize)}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
            options={pageSizeOptions.map((s) => ({
              value: String(s),
              label: String(s),
            }))}
          />
        </div>
      )}
      <div className="bien-pagination__right">
        <div className="bien-pagination__info">
          {total === 0
            ? 'Showing 0 of 0'
            : `Showing ${(page - 1) * pageSize + 1}-${Math.min(page * pageSize, total)} of ${total}`}
        </div>
        <div className="bien-pagination__controls">
          <button
            className="bien-pagination__button bien-pagination__button--icon"
            onClick={() => onPageChange(page - 1)}
            disabled={page === 1}
            aria-label="Previous page"
          >
            <ChevronLeft />
          </button>
          {pages.map((pageNum, idx) => {
            if (pageNum === '...') {
              return (
                <span
                  key={`ellipsis-${idx}`}
                  className="bien-pagination__ellipsis"
                >
                  ...
                </span>
              )
            }

            return (
              <button
                key={pageNum}
                className={`bien-pagination__button ${page === pageNum ? 'bien-pagination__button--active' : ''}`}
                onClick={() => onPageChange(pageNum as number)}
                aria-label={`Page ${pageNum}`}
                aria-current={page === pageNum ? 'page' : undefined}
              >
                {pageNum}
              </button>
            )
          })}
          <button
            className="bien-pagination__button bien-pagination__button--icon"
            onClick={() => onPageChange(page + 1)}
            disabled={page === totalPages || totalPages === 0}
            aria-label="Next page"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  )
}
