export type Project = {
  id: string
  title: string
  summary: string
  image?: string
  category?: string
  completedAt?: string
}

export type Student = {
  id: string
  slug: string
  name: string
  isPlaceholder: boolean
  portrait?: string
  introduction?: string
  interests?: string[]
  skills?: string[]
  projects?: Project[]
  gallery?: Photo[]
  quote?: string
}

export type Photo = {
  id: string
  title: string
  caption?: string
  src?: string
  alt: string
  aspect: 'portrait' | 'landscape' | 'square'
  category: GalleryCategory
}

export type GalleryCategory = 'aulas' | 'projetos' | 'eventos' | 'momentos-especiais'

export type GalleryAlbum = {
  id: string
  title: string
  description: string
  category: GalleryCategory
  photos: Photo[]
}
