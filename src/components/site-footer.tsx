import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="site-footer" id="footer">
      <Link className="wordmark" href="/" aria-label="PRONATEC 2026 — voltar ao início">P<span>.</span>26</Link>
      <p>UM REGISTRO EM CONSTRUÇÃO, FEITO EM CONJUNTO.</p>
      <Link href="/" aria-label="Voltar ao início"><ArrowUpRight size={18} aria-hidden="true" /></Link>
      <span>© 2026 · PRONATEC</span>
    </footer>
  )
}
