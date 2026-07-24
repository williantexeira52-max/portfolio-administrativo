'use client'

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  )
}

interface LinkButtonProps {
  href: string
  label: string
  sublabel?: string
  icon: React.ReactNode
  variant?: 'primary' | 'default'
}

export function LinkButton({
  href,
  label,
  sublabel,
  icon,
  variant = 'default',
}: LinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative flex items-center gap-4 w-full px-5 py-4 rounded-xl
        border transition-all duration-300
        ${
          variant === 'primary'
            ? 'bg-primary text-primary-foreground border-primary hover:brightness-110'
            : 'bg-card border-border text-foreground hover:border-primary/50 hover:bg-accent'
        }
      `}
    >
      {/* Ícone */}
      <div
        className={`
          flex items-center justify-center w-10 h-10 rounded-lg shrink-0
          ${variant === 'primary' ? 'bg-primary-foreground/10' : 'bg-muted text-primary'}
        `}
      >
        {icon}
      </div>

      {/* Texto */}
      <div className="flex-1 min-w-0">
        <span className="block text-sm font-semibold leading-tight">{label}</span>
        {sublabel && (
          <span
            className={`block text-xs mt-0.5 truncate ${
              variant === 'primary' ? 'text-primary-foreground/70' : 'text-muted-foreground'
            }`}
          >
            {sublabel}
          </span>
        )}
      </div>

      {/* Seta */}
      <ArrowUpRight
        className={`
          w-4 h-4 shrink-0 transition-transform duration-200
          group-hover:translate-x-0.5 group-hover:-translate-y-0.5
          ${variant === 'primary' ? 'text-primary-foreground/70' : 'text-muted-foreground'}
        `}
      />
    </a>
  )
}
