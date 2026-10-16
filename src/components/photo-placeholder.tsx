import Image from 'next/image'

type PhotoPlaceholderProps = {
  label: string
  src?: string
  index?: string
  variant?: 'portrait' | 'landscape' | 'square'
  tone?: 'rose' | 'sand' | 'olive' | 'ink'
  className?: string
}

export function PhotoPlaceholder({ label, src, index = '01', variant = 'landscape', tone = 'sand', className = '' }: PhotoPlaceholderProps) {
  return (
    <div className={`photo-placeholder photo-placeholder--${variant} photo-placeholder--${tone} ${className}`} role="img" aria-label={src ? label : `Espaço reservado para fotografia: ${label}`}>
      {src ? <Image className="photo-placeholder__image" src={src} alt="" fill sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw" /> : <><span className="photo-placeholder__sun" aria-hidden="true" /><span className="photo-placeholder__arc" aria-hidden="true" /><span className="photo-placeholder__label"><span>{index} / IMAGEM A ADICIONAR</span><span>{label}</span></span></>}
    </div>
  )
}
