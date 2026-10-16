import Link from 'next/link'
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react'
import { MotionPage } from '@/components/motion-page'
import { PhotoPlaceholder } from '@/components/photo-placeholder'
import { classmates, projects, timeline } from '@/data/portfolio'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <MotionPage>
      <SiteHeader />

      <main id="inicio">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-topline"><span>UM REGISTRO COLETIVO</span><span>BRASIL · 2026</span></div>
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> PORTFÓLIO DE TURMA</p>
            <h1 id="hero-title">Um ano.<br /><em>Muitas</em> histórias<span className="period">.</span></h1>
            <div className="hero-bottom">
              <p>Um espaço para guardar o que estamos aprendendo,<br className="desktop-break" /> criando e vivendo juntos.</p>
              <a className="round-link" href="#sobre" aria-label="Conheça o projeto"><ArrowDown size={19} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-art hero-art--one" /><div className="hero-art hero-art--two" /><div className="hero-art hero-art--three" />
            <span className="hero-art-note">UM ESPAÇO<br />EM CONSTRUÇÃO</span>
            <span className="hero-art-index">26<span> / 01</span></span>
          </div>
          <div className="hero-caption"><span>PRONATEC 2026</span><span>APRENDER É TAMBÉM DEIXAR MARCAS</span></div>
        </section>

        <section className="intro section-pad" id="sobre" aria-labelledby="intro-title">
          <div className="section-label reveal"><span>01</span><span>O PROJETO</span></div>
          <div className="intro-content reveal">
            <p className="eyebrow">UMA HISTÓRIA QUE COMEÇA AGORA</p>
            <h2 id="intro-title">Todo percurso importante merece ser <em>lembrado.</em></h2>
            <div className="intro-description"><p>Este portfólio nasce para acompanhar a turma PRONATEC 2026 ao longo de sua jornada. Um lugar para reunir pessoas, descobertas, projetos e pequenos momentos que, juntos, contam uma história maior.</p><p>Os detalhes serão construídos com a turma. Por enquanto, esta página é o primeiro convite para fazer parte desse registro.</p></div>
            <a className="text-link" href="#turma">Conheça a estrutura <ArrowRight size={16} aria-hidden="true" /></a>
          </div>
          <div className="intro-aside"><PhotoPlaceholder label="Imagem de abertura do projeto" index="00" variant="portrait" tone="rose" /><span className="image-note">ESPAÇO RESERVADO PARA UMA MEMÓRIA DA TURMA</span></div>
        </section>

        <section className="class-section section-pad" id="turma" aria-labelledby="class-title">
          <div className="section-label reveal"><span>02</span><span>QUEM FAZ</span></div>
          <div className="class-heading reveal"><div><p className="eyebrow">PESSOAS, IDEIAS, CAMINHOS</p><h2 id="class-title">Toda turma é feita<br />de <em>singularidades.</em></h2></div><p className="class-note">Os perfis dos estudantes e educadores serão adicionados com a participação da turma.</p></div>
          <div className="people-grid">{classmates.slice(0, 3).map((person, index) => <article className="person-card reveal" key={person.id}><PhotoPlaceholder label={`Retrato de ${person.name}`} index={String(index + 1).padStart(2, '0')} variant="portrait" tone={(['rose', 'sand', 'olive'] as const)[index]} /><div className="person-meta"><h3>{person.name}</h3><span>PERFIL PROVISÓRIO</span></div></article>)}</div>
          <Link className="text-link class-link" href="/turma">CONHEÇA A TURMA TODA <ArrowRight size={16} aria-hidden="true" /></Link>
        </section>

        <section className="memories-section" id="memorias" aria-labelledby="memories-title">
          <div className="memories-heading section-pad reveal"><div><div className="section-label"><span>03</span><span>ARQUIVO DE MEMÓRIAS</span></div><h2 id="memories-title">Momentos que<br /><em>ficam com a gente.</em></h2></div><p>Fotografias e registros desta jornada serão reunidos aqui.</p></div>
          <Link className="gallery-grid gallery-preview-link" href="/galeria" aria-label="Abrir a galeria completa"><PhotoPlaceholder label="Registro coletivo" index="01" variant="landscape" tone="olive" /><PhotoPlaceholder label="Um momento da turma" index="02" variant="portrait" tone="rose" /><PhotoPlaceholder label="Detalhe de um dia especial" index="03" variant="square" tone="ink" /><PhotoPlaceholder label="Encontro da turma" index="04" variant="landscape" tone="sand" /></Link>
          <p className="gallery-caption section-pad">GALERIA DA TURMA <span>IMAGENS A ADICIONAR AO LONGO DO ANO</span></p>
        </section>

        <section className="timeline-section section-pad" aria-labelledby="timeline-title">
          <div className="section-label reveal"><span>04</span><span>O CAMINHO</span></div>
          <div className="timeline-layout"><div className="timeline-intro reveal"><p className="eyebrow">EM MOVIMENTO</p><h2 id="timeline-title">Um ano em<br /><em>perspectiva.</em></h2><p>Uma linha do tempo aberta para os encontros, aprendizados e acontecimentos que ainda virão.</p></div><ol className="timeline-list">{timeline.map((item, index) => <li className="timeline-item reveal" key={item.title}><span className="timeline-marker" aria-hidden="true">0{index + 1}</span><div><span className="timeline-date">{item.date}</span><h3>{item.title}</h3><p>{item.detail}</p></div><ArrowUpRight className="timeline-arrow" size={17} aria-hidden="true" /></li>)}</ol></div>
        </section>

        <section className="projects-section section-pad" id="projetos" aria-labelledby="projects-title">
          <div className="section-label reveal"><span>05</span><span>IDEIAS EM PRÁTICA</span></div>
          <div className="projects-heading reveal"><div><p className="eyebrow">FEITO EM CONJUNTO</p><h2 id="projects-title">Aprender, fazer,<br /><em>compartilhar.</em></h2></div><p>Um espaço para os projetos e conquistas desenvolvidos durante o curso.</p></div>
          <div className="project-list">{projects.map((project, index) => <article className="project-row reveal" key={project.id}><span className="project-number">{String(index + 1).padStart(2, '0')}</span><div><h3>{project.title}</h3><p>{project.summary}</p></div><span className="project-status">EM BREVE</span><ArrowUpRight size={18} aria-hidden="true" /></article>)}</div>
        </section>

        <section className="closing" aria-labelledby="closing-title"><div className="closing-mark" aria-hidden="true">P<span>.</span>26</div><p className="eyebrow">O PRIMEIRO CAPÍTULO</p><h2 id="closing-title">Ainda há muito<br />por <em>escrever.</em></h2><p className="closing-copy">Este espaço cresce com as pessoas que fazem parte da jornada. O próximo capítulo começa em conjunto.</p><a className="closing-link" href="#inicio">VOLTAR AO COMEÇO <ArrowDown size={16} aria-hidden="true" /></a><span className="closing-footnote">PORTFÓLIO COLETIVO · PRONATEC 2026</span></section>
      </main>

      <SiteFooter />
    </MotionPage>
  )
}
