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
  delay?: string
}

export function LinkButton({
  href,
  label,
  sublabel,
  icon,
  variant = 'default',
  delay = '',
}: LinkButtonProps) {
  const isPrimary = variant === 'primary'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`animate-fade-up ${delay} group relative flex items-center gap-4 w-full px-5 py-4 rounded-2xl border overflow-hidden transition-all duration-300 ${
        isPrimary
          ? 'bg-primary text-primary-foreground border-primary/80 hover:brightness-110 hover:shadow-[0_0_32px_oklch(0.78_0.13_75/0.35)]'
          : 'bg-card/80 border-border/60 text-foreground hover:border-primary/40 hover:bg-accent/80 hover:shadow-[0_0_20px_oklch(0.78_0.13_75/0.08)]'
      } backdrop-blur-sm`}
    >
      {/* Shimmer sweep no hover */}
      <div
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none"
        style={{
          background: isPrimary
            ? 'linear-gradient(105deg, transparent 20%, oklch(1 0 0 / 0.15) 50%, transparent 80%)'
            : 'linear-gradient(105deg, transparent 20%, oklch(0.62 0.19 258 / 0.06) 50%, transparent 80%)',
        }}
      />

      {/* Ícone */}
      <div
        className={`relative flex items-center justify-center w-11 h-11 rounded-xl shrink-0 transition-transform duration-300 group-hover:scale-110 ${
          isPrimary
            ? 'bg-primary-foreground/10'
            : 'bg-muted/80 text-primary border border-border/40'
        }`}
      >
        {icon}
      </div>

      {/* Texto */}
      <div className="flex-1 min-w-0 relative">
        <span className="block text-sm font-semibold leading-tight">{label}</span>
        {sublabel && (
          <span
            className={`block text-xs mt-0.5 truncate ${
              isPrimary ? 'text-primary-foreground/75' : 'text-muted-foreground'
            }`}
          >
            {sublabel}
          </span>
        )}
      </div>

      {/* Seta */}
      <ArrowUpRight
        className={`w-4 h-4 shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
          isPrimary ? 'text-primary-foreground/60' : 'text-muted-foreground group-hover:text-primary'
        }`}
      />
    </a>
  )
}
