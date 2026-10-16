import type { ReactNode } from 'react'

export function SectionHeading({ index, label, title, description, action }: {
  index?: string
  label?: string
  title: ReactNode
  description?: string
  action?: ReactNode
}) {
  return (
    <div className="section-heading reveal">
      {(index || label) && <div className="section-label"><span>{index}</span><span>{label}</span></div>}
      <div className="section-heading__row"><div>{title}</div>{description && <p>{description}</p>}{action}</div>
    </div>
  )
}
