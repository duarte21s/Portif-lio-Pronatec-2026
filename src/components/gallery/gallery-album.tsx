import type { GalleryAlbum as GalleryAlbumModel, Photo } from '@/types/portfolio'
import { PhotoPlaceholder } from '@/components/photo-placeholder'

export function GalleryAlbum({ album, onSelect }: { album: GalleryAlbumModel; onSelect: (photo: Photo) => void }) {
  return (
    <section className="gallery-album" aria-labelledby={`album-${album.id}`}>
      <div className="gallery-album__heading"><div><p className="eyebrow">{album.category.replaceAll('-', ' ').toUpperCase()}</p><h2 id={`album-${album.id}`}>{album.title}</h2><p>{album.description}</p></div><span>{String(album.photos.length).padStart(2, '0')} REGISTROS</span></div>
      <div className="gallery-grid gallery-grid--album">{album.photos.map((photo, index) => <button type="button" key={photo.id} className="gallery-photo" onClick={() => onSelect(photo)} aria-label={`Ampliar fotografia: ${photo.title}`}><PhotoPlaceholder src={photo.src} label={photo.alt} index={String(index + 1).padStart(2, '0')} variant={photo.aspect} tone={['olive', 'rose', 'ink', 'sand'][index % 4] as 'olive' | 'rose' | 'ink' | 'sand'} /><span className="gallery-photo__caption"><span>{photo.title}</span><span>AMPLIAR ↗</span></span></button>)}</div>
    </section>
  )
}
