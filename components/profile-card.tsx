import Image from 'next/image'

export function ProfileCard({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-5 sm:gap-6 lg:gap-14 text-center lg:text-left">
      {/* Avatar com anel dourado animado */}
      <div className="animate-fade-up relative shrink-0 lg:self-center mx-auto lg:mx-0">
        {/* Anel cónico girando devagar */}
        <div
          className="absolute -inset-[3px] rounded-full animate-spin-slow"
          style={{
            background:
              'conic-gradient(from 0deg, oklch(0.75 0 0), oklch(0.4 0 0 / 0.3), oklch(0.62 0.1 258 / 0.6), oklch(0.35 0 0 / 0.15), oklch(0.75 0 0))',
          }}
        />
        {/* Glow de fundo */}
        <div
          className="absolute -inset-4 rounded-full animate-glow-pulse pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, oklch(0.7 0 0 / 0.14) 0%, transparent 70%)',
          }}
        />
        {/* Foto */}
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden ring-[3px] ring-background">
          <Image
            src="/william-real.png"
            alt="Foto de perfil de William Teixeira"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        {/* Badge de disponível */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-card border border-border px-2.5 py-0.5 rounded-full shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-dot-pulse" />
          <span className="text-[10px] font-medium text-muted-foreground whitespace-nowrap">
            Disponível
          </span>
        </div>
      </div>

      {/* Coluna de conteúdo */}
      <div className="flex flex-col items-center lg:items-start gap-5 sm:gap-6 flex-1 w-full">
        {/* Nome e cargo */}
        <div className="space-y-2 mt-2 lg:mt-0">
          <h1
            className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance leading-tight animate-fade-up delay-100"
            style={{ textShadow: '0 0 40px oklch(0.62 0.19 258 / 0.15)' }}
          >
            William Teixeira
          </h1>
          <p className="text-[11px] sm:text-xs lg:text-sm font-semibold tracking-[0.22em] sm:tracking-[0.25em] uppercase text-primary animate-fade-up delay-200">
            Supervisor Administrativo • Professor • Dev. de Soluções IA
          </p>
          <p className="text-sm text-muted-foreground flex items-center justify-center lg:justify-start gap-1.5 animate-fade-up delay-300">
            <svg
              className="w-3.5 h-3.5 text-primary/60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Natal, Rio Grande do Norte
          </p>
        </div>

        {/* Bio */}
        <p className="text-sm lg:text-[15px] leading-relaxed text-muted-foreground max-w-xs lg:max-w-md text-balance lg:text-pretty animate-fade-up delay-400">
          Transformo desafios administrativos e educacionais em soluções digitais
          inteligentes, unindo <span className="text-foreground font-semibold">gestão, tecnologia e IA</span> para
          otimizar processos e gerar resultados.
        </p>

        {/* Badges de habilidades */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 animate-fade-up delay-500">
          {[
            'Gestão de RH & DP',
            'Gestão Escolar',
            'Criador do SIGTEO',
            'Automação com IA',
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs font-medium rounded-full border border-border/60 text-muted-foreground bg-card/60 backdrop-blur-sm hover:border-primary/40 hover:text-primary transition-colors duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>

        {children && <div className="w-full max-w-xs lg:max-w-sm mt-1">{children}</div>}
      </div>
    </div>
  )
}
