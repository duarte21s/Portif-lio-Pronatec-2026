import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'

export function EmptyState({ title, description, actionLabel, actionHref, search = false }: {
  title: string
  description: string
  actionLabel?: string
  actionHref?: string
  search?: boolean
}) {
  const Icon = search ? Search : ArrowRight
  return (
    <div className="empty-state" role="status">
      <span className="empty-state__icon"><Icon size={20} aria-hidden="true" /></span>
      <p className="eyebrow">{search ? 'BUSCA SEM RESULTADOS' : 'ESPAÇO EM CONSTRUÇÃO'}</p>
      <h2>{title}</h2>
      <p>{description}</p>
      {actionLabel && actionHref && <Link className="text-link" href={actionHref}>{actionLabel} <ArrowRight size={16} aria-hidden="true" /></Link>}
    </div>
  )
}
