import Link from 'next/link'
import type { ReactNode } from 'react'

export function PageHeader({ index, label, title, description, action }: {
  index: string
  label: string
  title: ReactNode
  description: string
  action?: ReactNode
}) {
  return (
    <section className="page-hero page-enter">
      <div className="section-label"><span>{index}</span><span>{label}</span></div>
      <div className="page-hero__content">
        <p className="eyebrow"><span className="eyebrow-dot" /> PORTFÓLIO DE TURMA · 2026</p>
        <h1>{title}</h1>
        <div className="page-hero__bottom"><p>{description}</p>{action}</div>
      </div>
      <Link className="page-hero__index" href="/" aria-label="Voltar ao início">P<span>.</span>26</Link>
    </section>
  )
}
