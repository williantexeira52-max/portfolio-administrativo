interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  icon?: React.ReactNode
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  icon,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={`space-y-3 ${align === 'center' ? 'text-center' : ''}`}>
      <div
        className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}
      >
        {align === 'left' && (
          <div className="flex items-center gap-2">
            {icon}
            <span className="text-xs font-bold tracking-[0.22em] uppercase text-primary/90">
              {eyebrow}
            </span>
          </div>
        )}
        {align === 'center' && (
          <span className="text-xs font-bold tracking-[0.22em] uppercase text-primary/90">
            {eyebrow}
          </span>
        )}
        {align === 'left' && <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />}
      </div>
      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground text-balance leading-tight">
        {title}
      </h2>
      {description && (
        <p
          className={`text-sm text-muted-foreground leading-relaxed max-w-xl ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
