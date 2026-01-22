/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef, useEffect } from 'react'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import type { Identifier, XYCoord } from 'dnd-core'

const ITEM_TYPE = 'DRAGGABLE_ITEM'

interface DragItem {
  index: number
  id: string
  type: string
}

export type DraggableListItem = {
  id: string | number
  content: React.ReactNode
}

export type DraggableListProps = {
  items: DraggableListItem[]
  onReorder: (items: DraggableListItem[]) => void
  renderItem?: (item: DraggableListItem, isDragging: boolean) => React.ReactNode
  showHandle?: boolean
  className?: string
}

export type DraggableListProviderProps = {
  children: React.ReactNode
  backend?: any
}

interface DraggableItemProps {
  item: DraggableListItem
  index: number
  moveItem: (dragIndex: number, hoverIndex: number) => void
  renderItem?: (item: DraggableListItem, isDragging: boolean) => React.ReactNode
  showHandle?: boolean
}

function DraggableItem({
  item,
  index,
  moveItem,
  renderItem,
  showHandle,
}: DraggableItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const dragHandleRef = useRef<HTMLDivElement>(null)

  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: ITEM_TYPE,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect()

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      // Determine mouse position
      const clientOffset = monitor.getClientOffset()

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      // Time to actually perform the action
      moveItem(dragIndex, hoverIndex)

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag, preview] = useDrag({
    type: ITEM_TYPE,
    item: () => {
      return { id: item.id, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0.5 : 1

  // Set up refs in useEffect to avoid accessing refs during render
  useEffect(() => {
    if (showHandle) {
      // When showing handle, use entire row as preview but only handle as drag source
      preview(drop(ref))
      drag(dragHandleRef)
    } else {
      // When no handle, entire row is both source and preview
      drag(drop(ref))
    }
  }, [showHandle, drag, drop, preview])

  if (renderItem) {
    return (
      <div
        ref={ref}
        className={`bien-draggable-item ${showHandle ? 'bien-draggable-item--with-handle' : ''}`}
        style={{ opacity }}
        data-handler-id={handlerId}
      >
        {showHandle && (
          <div ref={dragHandleRef} className="bien-draggable-handle">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="6" cy="4" r="1.5" fill="currentColor" />
              <circle cx="10" cy="4" r="1.5" fill="currentColor" />
              <circle cx="6" cy="8" r="1.5" fill="currentColor" />
              <circle cx="10" cy="8" r="1.5" fill="currentColor" />
              <circle cx="6" cy="12" r="1.5" fill="currentColor" />
              <circle cx="10" cy="12" r="1.5" fill="currentColor" />
            </svg>
          </div>
        )}
        <div className="bien-draggable-content">
          {renderItem(item, isDragging)}
        </div>
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={`bien-draggable-item ${showHandle ? 'bien-draggable-item--with-handle' : ''}`}
      style={{ opacity }}
      data-handler-id={handlerId}
    >
      {showHandle && (
        <div ref={dragHandleRef} className="bien-draggable-handle">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="6" cy="4" r="1.5" fill="currentColor" />
            <circle cx="10" cy="4" r="1.5" fill="currentColor" />
            <circle cx="6" cy="8" r="1.5" fill="currentColor" />
            <circle cx="10" cy="8" r="1.5" fill="currentColor" />
            <circle cx="6" cy="12" r="1.5" fill="currentColor" />
            <circle cx="10" cy="12" r="1.5" fill="currentColor" />
          </svg>
        </div>
      )}
      <div className="bien-draggable-content">{item.content}</div>
    </div>
  )
}

export function DraggableList({
  items,
  onReorder,
  renderItem,
  showHandle = true,
  className = '',
}: DraggableListProps) {
  const moveItem = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      // Only move if indices are actually different
      if (dragIndex === hoverIndex) return

      const newItems = [...items]
      const [removed] = newItems.splice(dragIndex, 1)
      newItems.splice(hoverIndex, 0, removed)
      onReorder(newItems)
    },
    [items, onReorder]
  )

  const classes = ['bien-draggable-list', className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      {items.map((item, index) => (
        <DraggableItem
          key={item.id}
          item={item}
          index={index}
          moveItem={moveItem}
          renderItem={renderItem}
          showHandle={showHandle}
        />
      ))}
    </div>
  )
}

// Wrapper component that provides DndProvider for standalone use
export function DraggableListProvider({
  children,
  backend = HTML5Backend,
}: {
  children: React.ReactNode
  backend?: any
}) {
  return <DndProvider backend={backend}>{children}</DndProvider>
}
