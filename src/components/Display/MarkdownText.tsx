import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export interface MarkdownTextProps {
  content: string
  className?: string
}

export function MarkdownText({ content, className = '' }: MarkdownTextProps) {
  const classes = ['bien-markdown-text', className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  )
}
