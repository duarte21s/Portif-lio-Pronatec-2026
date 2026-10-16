'use client'

import { useEffect, useRef } from 'react'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import type { Photo } from '@/types/portfolio'
import { PhotoPlaceholder } from '@/components/photo-placeholder'

export function PhotoViewer({ photo, index, total, onClose, onPrevious, onNext }: {
  photo: Photo | null
  index: number
  total: number
  onClose: () => void
  onPrevious: () => void
  onNext: () => void
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (photo && !dialog.open) {
      dialog.showModal()
      closeRef.current?.focus()
    } else if (!photo && dialog.open) {
      dialog.close()
    }
  }, [photo])

  return (
    <dialog ref={dialogRef} className="photo-viewer" aria-labelledby="photo-viewer-title" onClose={onClose} onClick={(event) => { if (event.target === event.currentTarget) onClose() }} onKeyDown={(event) => { if (event.key === 'ArrowLeft') { event.preventDefault(); onPrevious() } if (event.key === 'ArrowRight') { event.preventDefault(); onNext() } }}>
      {photo && <div className="photo-viewer__content"><div className="photo-viewer__top"><span>{String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span><button ref={closeRef} type="button" className="icon-button" onClick={onClose} aria-label="Fechar visualizador"><X size={22} aria-hidden="true" /></button></div><div className="photo-viewer__image"><PhotoPlaceholder src={photo.src} label={photo.alt} index={String(index + 1).padStart(2, '0')} variant={photo.aspect} tone="sand" /></div><div className="photo-viewer__bottom"><div><h2 id="photo-viewer-title">{photo.title}</h2><p>{photo.caption ?? 'Legenda a ser adicionada.'}</p><span>USE AS SETAS DO TECLADO PARA NAVEGAR</span></div><div className="photo-viewer__controls"><button className="icon-button" type="button" onClick={onPrevious} disabled={total < 2} aria-label="Fotografia anterior"><ArrowLeft size={19} aria-hidden="true" /></button><button className="icon-button" type="button" onClick={onNext} disabled={total < 2} aria-label="Próxima fotografia"><ArrowRight size={19} aria-hidden="true" /></button></div></div></div>}
    </dialog>
  )
}
