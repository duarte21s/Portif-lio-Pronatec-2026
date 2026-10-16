type PhotoPlaceholderProps = {
  label: string
  index?: string
  variant?: 'portrait' | 'landscape' | 'square'
  tone?: 'rose' | 'sand' | 'olive' | 'ink'
  className?: string
}

export function PhotoPlaceholder({ label, index = '01', variant = 'landscape', tone = 'sand', className = '' }: PhotoPlaceholderProps) {
  return (
    <div className={`photo-placeholder photo-placeholder--${variant} photo-placeholder--${tone} ${className}`} role="img" aria-label={`Espaço reservado para fotografia: ${label}`}>
      <span className="photo-placeholder__sun" aria-hidden="true" />
      <span className="photo-placeholder__arc" aria-hidden="true" />
      <span className="photo-placeholder__label"><span>{index} / IMAGEM A ADICIONAR</span><span>{label}</span></span>
    </div>
  )
}
