import type { Metadata } from 'next'
import { EmptyState } from '@/components/empty-state'
import { PageHeader } from '@/components/page-header'
import { SectionHeading } from '@/components/section-heading'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { StudentDirectory } from '@/components/student-directory'
import { MotionPage } from '@/components/motion-page'

export const metadata: Metadata = {
  title: 'A turma — PRONATEC 2026',
  description: 'Conheça os perfis dos integrantes da turma PRONATEC 2026.',
}

export default function ClassPage() {
  return (
    <>
      <SiteHeader />
      <MotionPage><main>
        <PageHeader index="01" label="QUEM FAZ" title={<>Pessoas,<br /><em>possibilidades.</em></>} description="Cada integrante traz um caminho e um olhar próprios. Os perfis desta turma serão construídos com as informações compartilhadas por cada estudante." action={<span className="page-hero__count">PERFIS A ADICIONAR</span>} />
        <section className="directory-section section-pad" aria-label="Diretório da turma">
          <SectionHeading index="02" label="A TURMA" title={<>Histórias em<br /><em>construção.</em></>} description="Pesquise pelo nome para encontrar um perfil. Os nomes atuais são identificadores provisórios." />
          <StudentDirectory />
        </section>
        <section className="page-closing section-pad"><EmptyState title="Seu percurso também tem lugar aqui." description="Os perfis serão preenchidos pela turma com nomes, apresentações e registros autorizados." actionLabel="Voltar ao início" actionHref="/" /></section>
      </main></MotionPage>
      <SiteFooter />
    </>
  )
}
