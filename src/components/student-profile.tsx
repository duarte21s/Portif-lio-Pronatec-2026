import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import type { Student } from '@/types/portfolio'
import { PhotoPlaceholder } from '@/components/photo-placeholder'
import { EmptyState } from '@/components/empty-state'
import { StudentCard } from '@/components/student-card'
import { classmates } from '@/data/portfolio'

export function StudentProfile({ student }: { student: Student }) {
  const otherStudents = classmates.filter((item) => item.id !== student.id).slice(0, 3)
  return (
    <>
      <section className="profile-intro section-pad page-enter">
        <Link className="text-link profile-back" href="/turma"><ArrowLeft size={15} aria-hidden="true" /> VOLTAR À TURMA</Link>
        <div className="profile-intro__grid">
          <div className="profile-intro__copy">
            <div className="section-label"><span>PERFIL</span><span>PRONATEC 2026</span></div>
            <p className="eyebrow">INTEGRANTE DA TURMA</p>
            <h1>{student.name}<span className="period">.</span></h1>
            {student.isPlaceholder && !student.introduction && <p className="profile-placeholder-note">Este perfil será preenchido com a apresentação e as informações escolhidas pelo estudante.</p>}
            {student.quote && <blockquote className="student-quote">“{student.quote}”</blockquote>}
          </div>
          <PhotoPlaceholder src={student.portrait} label={`Fotografia de ${student.name}`} index="01" variant="portrait" tone="rose" className="profile-photo" />
        </div>
      </section>

      {(student.introduction || student.interests?.length || student.skills?.length) && <section className="profile-details section-pad"><div className="section-label"><span>01</span><span>UM POUCO SOBRE</span></div><div className="profile-details__grid">{student.introduction && <div><p className="eyebrow">APRESENTAÇÃO</p><p className="profile-prose">{student.introduction}</p></div>}{student.interests?.length ? <div><p className="eyebrow">INTERESSES</p><ul className="tag-list">{student.interests.map((interest) => <li key={interest}>{interest}</li>)}</ul></div> : null}{student.skills?.length ? <div><p className="eyebrow">HABILIDADES</p><ul className="tag-list">{student.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></div> : null}</div></section>}

      <section className="profile-projects section-pad"><div className="section-label"><span>02</span><span>IDEIAS EM PRÁTICA</span></div><div className="profile-section-heading"><h2>Projetos <em>realizados.</em></h2></div>{student.projects?.length ? <div className="profile-project-list">{student.projects.map((project, index) => <article className="project-row" key={project.id}><span className="project-number">{String(index + 1).padStart(2, '0')}</span><div><h3>{project.title}</h3><p>{project.summary}</p></div><ArrowUpRight size={18} aria-hidden="true" /></article>)}</div> : <EmptyState title="Projetos serão adicionados aqui." description="Este espaço reúne os trabalhos que o estudante quiser compartilhar durante o curso." actionLabel="Ver projetos da turma" actionHref="/#projetos" />}</section>

      {student.gallery?.length ? <section className="profile-gallery section-pad"><div className="section-label"><span>03</span><span>GALERIA PESSOAL</span></div><div className="profile-gallery__grid">{student.gallery.map((photo, index) => <PhotoPlaceholder key={photo.id} src={photo.src} label={photo.alt} index={String(index + 1).padStart(2, '0')} variant={photo.aspect} tone={index % 2 ? 'sand' : 'olive'} />)}</div></section> : null}

      <section className="more-students section-pad"><div className="section-label"><span>04</span><span>OUTRAS HISTÓRIAS</span></div><div className="profile-section-heading"><h2>Conheça também <em>quem faz.</em></h2><Link className="text-link" href="/turma">VER A TURMA <ArrowRight size={16} aria-hidden="true" /></Link></div><div className="student-grid">{otherStudents.map((other, index) => <StudentCard key={other.id} student={other} index={index} />)}</div></section>
    </>
  )
}
