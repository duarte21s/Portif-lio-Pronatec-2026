'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Menu } from 'lucide-react'
import { useRef } from 'react'

const links = [
  { href: '/#sobre', label: 'O projeto', route: '/' },
  { href: '/turma', label: 'A turma', route: '/turma' },
  { href: '/galeria', label: 'Memórias', route: '/galeria' },
  { href: '/#projetos', label: 'Projetos' },
]

function isCurrent(pathname: string, route?: string) {
  if (!route) return false
  return route === '/' ? pathname === '/' : pathname === route || pathname.startsWith(`${route}/`)
}

export function SiteHeader() {
  const pathname = usePathname()
  const mobileNavRef = useRef<HTMLDetailsElement>(null)
  const closeMobileMenu = () => mobileNavRef.current?.removeAttribute('open')

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="PRONATEC 2026 — início">P<span>.</span>26</Link>
      <nav className="desktop-nav" aria-label="Navegação principal">
        {links.map((link) => <Link key={link.href} href={link.href} aria-current={isCurrent(pathname, link.route) ? 'page' : undefined}>{link.label}</Link>)}
      </nav>
      <Link className="header-cta" href="/#sobre">Conheça o projeto <ArrowUpRight size={15} aria-hidden="true" /></Link>
      <details className="mobile-nav" ref={mobileNavRef}>
        <summary aria-label="Abrir navegação"><Menu size={23} aria-hidden="true" /></summary>
        <nav aria-label="Navegação móvel">{links.map((link) => <Link key={link.href} href={link.href} aria-current={isCurrent(pathname, link.route) ? 'page' : undefined} onClick={closeMobileMenu}>{link.label}</Link>)}</nav>
      </details>
    </header>
  )
}
