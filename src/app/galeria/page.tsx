import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { GalleryGrid } from '@/components/gallery/gallery-grid'
import { galleryAlbums } from '@/data/portfolio'
import { MotionPage } from '@/components/motion-page'

export const metadata: Metadata = {
  title: 'Galeria — PRONATEC 2026',
  description: 'Álbuns e fotografias da jornada da turma PRONATEC 2026.',
}

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <MotionPage><main>
        <PageHeader index="02" label="ARQUIVO DE MEMÓRIAS" title={<>Imagens que<br /><em>contam jornadas.</em></>} description="Um arquivo visual para as aulas, os projetos, os encontros e os pequenos momentos que fazem parte desta história." action={<span className="page-hero__count">FOTOGRAFIAS A ADICIONAR</span>} />
        <section className="gallery-page-section section-pad" aria-label="Galeria de fotografias"><GalleryGrid albums={galleryAlbums} /></section>
      </main></MotionPage>
      <SiteFooter />
    </>
  )
}
