import type { Metadata } from 'next'
import '@fontsource-variable/manrope/wght.css'
import '@fontsource-variable/playfair-display/wght.css'
import '@fontsource-variable/playfair-display/wght-italic.css'
import '@fontsource/space-mono/latin-400.css'
import '@fontsource/space-mono/latin-700.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'PRONATEC 2026 — Um ano em construção',
  description: 'Um espaço para registrar as pessoas, os projetos e os momentos que vão dar forma à turma PRONATEC 2026.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>
}
