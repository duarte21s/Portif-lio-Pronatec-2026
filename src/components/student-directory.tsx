'use client'

import { useMemo, useState } from 'react'
import { Search, X } from 'lucide-react'
import { classmates } from '@/data/portfolio'
import { EmptyState } from '@/components/empty-state'
import { StudentCard } from '@/components/student-card'

export function StudentDirectory() {
  const [query, setQuery] = useState('')
  const students = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('pt-BR')
    return normalizedQuery ? classmates.filter((student) => student.name.toLocaleLowerCase('pt-BR').includes(normalizedQuery)) : classmates
  }, [query])

  return (
    <>
      <div className="directory-toolbar">
        <label className="search-field">
          <Search size={18} aria-hidden="true" />
          <span className="sr-only">Pesquisar estudante pelo nome</span>
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar integrante da turma" />
          {query && <button type="button" className="search-clear" onClick={() => setQuery('')} aria-label="Limpar pesquisa"><X size={16} aria-hidden="true" /></button>}
        </label>
        <p aria-live="polite" aria-atomic="true">{students.length} {students.length === 1 ? 'perfil' : 'perfis'}</p>
      </div>
      {students.length ? <div className="student-grid">{students.map((student, index) => <StudentCard key={student.id} student={student} index={index} />)}</div> : <EmptyState title="Nenhum perfil encontrado." description="Tente outro nome ou limpe a pesquisa para ver todos os integrantes." search />}
    </>
  )
}
