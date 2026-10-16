import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Student } from '@/types/portfolio'
import { PhotoPlaceholder } from '@/components/photo-placeholder'

const tones = ['rose', 'sand', 'olive', 'ink'] as const

export function StudentCard({ student, index = 0 }: { student: Student; index?: number }) {
  const number = String(index + 1).padStart(2, '0')
  const tone = tones[index % tones.length]
  return (
    <article className="student-card reveal">
      <Link className="student-card__link" href={`/turma/${student.slug}`} aria-label={`Ver perfil de ${student.name}`}>
        <div className="student-card__image">
          <PhotoPlaceholder src={student.portrait} label={`Retrato de ${student.name}`} index={number} variant="portrait" tone={tone} />
          <span className="student-card__arrow"><ArrowUpRight size={17} aria-hidden="true" /></span>
        </div>
        <div className="student-card__meta"><div><h2>{student.name}</h2><span>{student.isPlaceholder ? 'NOME PROVISÓRIO' : 'ESTUDANTE'}</span></div><span className="student-card__number">{number}</span></div>
      </Link>
    </article>
  )
}
