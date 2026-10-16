'use client'

import { useState } from 'react'
import type { GalleryCategory, GalleryAlbum, Photo } from '@/types/portfolio'
import { galleryCategories } from '@/data/portfolio'
import { EmptyState } from '@/components/empty-state'
import { GalleryAlbum as GalleryAlbumView } from '@/components/gallery/gallery-album'
import { PhotoViewer } from '@/components/gallery/photo-viewer'

export function GalleryGrid({ albums, loading = false }: { albums: GalleryAlbum[]; loading?: boolean }) {
  const [category, setCategory] = useState<GalleryCategory | 'todas'>('todas')
  const [activePhoto, setActivePhoto] = useState<Photo | null>(null)
  const visibleAlbums = category === 'todas' ? albums : albums.filter((album) => album.category === category)
  const photos = visibleAlbums.flatMap((album) => album.photos)
  const selectedIndex = activePhoto ? photos.findIndex((photo) => photo.id === activePhoto.id) : -1

  const navigate = (direction: number) => {
    if (selectedIndex < 0 || photos.length < 2) return
    const index = (selectedIndex + direction + photos.length) % photos.length
    setActivePhoto(photos[index])
  }

  return (
    <>
      <div className="gallery-toolbar"><div className="category-filters" role="group" aria-label="Filtrar álbuns por categoria">{galleryCategories.map((item) => <button type="button" key={item.id} className={category === item.id ? 'category-filter is-active' : 'category-filter'} aria-pressed={category === item.id} onClick={() => setCategory(item.id)}>{item.label}</button>)}</div><p aria-live="polite">{photos.length} {photos.length === 1 ? 'fotografia' : 'fotografias'}</p></div>
      {loading ? <div className="gallery-grid-skeleton" aria-label="Carregando fotografias" aria-busy="true">{Array.from({ length: 4 }, (_, index) => <div className="gallery-skeleton" key={index} />)}</div> : visibleAlbums.length ? <div className="gallery-albums">{visibleAlbums.map((album) => <GalleryAlbumView key={album.id} album={album} onSelect={setActivePhoto} />)}</div> : <EmptyState title="Este álbum ainda está vazio." description="Os registros desta categoria serão adicionados ao longo da jornada." />}
      <PhotoViewer photo={activePhoto} index={selectedIndex} total={photos.length} onClose={() => setActivePhoto(null)} onPrevious={() => navigate(-1)} onNext={() => navigate(1)} />
    </>
  )
}
