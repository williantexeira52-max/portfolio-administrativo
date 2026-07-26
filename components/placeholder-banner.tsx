function ImageIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
}

interface PlaceholderBannerProps {
  label?: string
  className?: string
  aspect?: string
}

export function PlaceholderBanner({
  label = 'Imagem em breve',
  className = '',
  aspect = 'aspect-[16/9]',
}: PlaceholderBannerProps) {
  return (
    <div
      className={`relative w-full ${aspect} rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-2 border border-dashed border-border/70 ${className}`}
      style={{ background: 'oklch(0.15 0.008 60)' }}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, oklch(1 0 0 / 0.02) 0px, oklch(1 0 0 / 0.02) 1px, transparent 1px, transparent 12px)',
        }}
      />
      <ImageIcon className="relative w-7 h-7 text-muted-foreground/50" />
      <span className="relative text-[11px] font-medium tracking-wide text-muted-foreground/60 uppercase">
        {label}
      </span>
    </div>
  )
}
