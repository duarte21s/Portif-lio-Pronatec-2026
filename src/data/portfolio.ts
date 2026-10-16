import type { GalleryAlbum, GalleryCategory, Project, Student } from '@/types/portfolio'

export const classmates: Student[] = Array.from({ length: 6 }, (_, index) => {
  const number = String(index + 1).padStart(2, '0')
  return {
    id: `student-${number}`,
    slug: `estudante-${number}`,
    name: `Estudante ${number}`,
    isPlaceholder: true,
  }
})

export const projects: Project[] = [
  { id: 'projeto-01', title: 'Projetos da turma', summary: 'Os trabalhos e estudos serão adicionados aqui.' },
  { id: 'projeto-02', title: 'Ideias em construção', summary: 'Espaço reservado para processos criativos.' },
  { id: 'projeto-03', title: 'Conquistas a registrar', summary: 'Um espaço para compartilhar futuras realizações.' },
]

export const timeline = [
  { date: 'EM BREVE', title: 'O começo de uma jornada', detail: 'Um primeiro encontro. Muitas possibilidades pela frente.' },
  { date: 'EM BREVE', title: 'Ideias ganham forma', detail: 'Aprender, experimentar e construir em conjunto.' },
  { date: 'EM BREVE', title: 'Um ano para lembrar', detail: 'As histórias da turma serão contadas aqui.' },
]

export const galleryCategories: { id: GalleryCategory | 'todas'; label: string }[] = [
  { id: 'todas', label: 'Todas' },
  { id: 'aulas', label: 'Aulas' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'eventos', label: 'Eventos' },
  { id: 'momentos-especiais', label: 'Momentos especiais' },
]

const albumDefinitions: Omit<GalleryAlbum, 'photos'>[] = [
  { id: 'aulas', title: 'Dias de aprender', description: 'Registros do cotidiano e das descobertas em sala.', category: 'aulas' },
  { id: 'projetos', title: 'Ideias em prática', description: 'Etapas, processos e trabalhos construídos pela turma.', category: 'projetos' },
  { id: 'eventos', title: 'Encontros e eventos', description: 'Momentos coletivos ao longo da jornada.', category: 'eventos' },
  { id: 'momentos-especiais', title: 'Pequenas memórias', description: 'Instantes que merecem ficar guardados.', category: 'momentos-especiais' },
]

export const galleryAlbums: GalleryAlbum[] = albumDefinitions.map((album, albumIndex) => ({
  ...album,
  photos: Array.from({ length: 2 }, (_, photoIndex) => {
    const index = albumIndex * 2 + photoIndex + 1
    const number = String(index).padStart(2, '0')
    const aspects = ['landscape', 'portrait', 'square'] as const
    return {
      id: `foto-${number}`,
      title: `${album.title} · registro ${number}`,
      caption: 'Legenda a ser adicionada pela turma.',
      alt: `Placeholder para fotografia: ${album.title.toLowerCase()}`,
      aspect: aspects[(index - 1) % aspects.length],
      category: album.category,
    }
  }),
}))

export const allPhotos = galleryAlbums.flatMap((album) => album.photos)

export function findStudentBySlug(slug: string) {
  return classmates.find((student) => student.slug === slug)
}
