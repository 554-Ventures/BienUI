export interface TimelineItem {
  id: string
  title: string
  description?: string
  time?: string
  content?: React.ReactNode
}

export interface TimelineProps {
  items: TimelineItem[]
  orientation?: 'vertical' | 'horizontal'
  className?: string
}

export function Timeline({
  items,
  orientation = 'vertical',
  className = '',
}: TimelineProps) {
  const classes = ['bien-timeline', `bien-timeline--${orientation}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        const itemClasses = [
          'bien-timeline__item',
          isLast && 'bien-timeline__item--last',
        ]
          .filter(Boolean)
          .join(' ')

        return (
          <div key={item.id} className={itemClasses}>
            <div className="bien-timeline__marker">
              <div className="bien-timeline__dot" />
              {!isLast && <div className="bien-timeline__line" />}
            </div>
            <div className="bien-timeline__content">
              {item.time && (
                <div className="bien-timeline__time">{item.time}</div>
              )}
              <div className="bien-timeline__title">{item.title}</div>
              {item.description && (
                <div className="bien-timeline__description">
                  {item.description}
                </div>
              )}
              {item.content && (
                <div className="bien-timeline__extra">{item.content}</div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
