import { useCallback } from 'react'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const ITEM_TYPE = 'DRAGGABLE_ITEM'

export interface DraggableListItem {
  id: string | number
  content: React.ReactNode
}

export interface DraggableListProps {
  items: DraggableListItem[]
  onReorder: (items: DraggableListItem[]) => void
  renderItem?: (item: DraggableListItem, isDragging: boolean) => React.ReactNode
  showHandle?: boolean
  className?: string
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
  const [{ isDragging }, drag, preview] = useDrag({
    type: ITEM_TYPE,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover: (draggedItem: { index: number }) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index)
        draggedItem.index = index
      }
    },
  })

  const opacity = isDragging ? 0.5 : 1

  if (renderItem) {
    return (
      <div
        ref={(node) => preview(drop(node))}
        className="bien-draggable-item"
        style={{ opacity }}
      >
        {showHandle && (
          <div ref={drag} className="bien-draggable-handle">
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
      ref={(node) => {
        if (showHandle) {
          preview(drop(node))
        } else {
          drag(drop(node))
        }
      }}
      className="bien-draggable-item"
      style={{ opacity }}
    >
      {showHandle && (
        <div ref={drag} className="bien-draggable-handle">
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
      const newItems = [...items]
      const [removed] = newItems.splice(dragIndex, 1)
      newItems.splice(hoverIndex, 0, removed)
      onReorder(newItems)
    },
    [items, onReorder]
  )

  const classes = ['bien-draggable-list', className].filter(Boolean).join(' ')

  return (
    <DndProvider backend={HTML5Backend}>
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
    </DndProvider>
  )
}
