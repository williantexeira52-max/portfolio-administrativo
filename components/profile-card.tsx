import Image from 'next/image'

export function ProfileCard() {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      {/* Avatar com anel dourado animado */}
      <div className="animate-fade-up relative">
        {/* Anel cónico girando devagar */}
        <div
          className="absolute -inset-[3px] rounded-full animate-spin-slow"
          style={{
            background:
              'conic-gradient(from 0deg, oklch(0.78 0.13 75), oklch(0.55 0.08 75 / 0.2), oklch(0.78 0.13 75 / 0.8), oklch(0.55 0.08 75 / 0.1), oklch(0.78 0.13 75))',
          }}
        />
        {/* Glow de fundo */}
        <div
          className="absolute -inset-4 rounded-full animate-glow-pulse pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, oklch(0.78 0.13 75 / 0.18) 0%, transparent 70%)',
          }}
        />
        {/* Foto */}
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden ring-[3px] ring-background">
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

      {/* Nome e cargo */}
      <div className="space-y-2 mt-2">
        <h1
          className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance leading-tight animate-fade-up delay-100"
          style={{ textShadow: '0 0 40px oklch(0.78 0.13 75 / 0.15)' }}
        >
          William Teixeira
        </h1>
        <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] sm:tracking-[0.25em] uppercase text-primary animate-fade-up delay-200">
          Coordenador Administrativo &amp; RH
        </p>
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1.5 animate-fade-up delay-300">
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
      <p className="text-sm leading-relaxed text-muted-foreground max-w-xs text-balance animate-fade-up delay-400">
        Profissional com mais de{' '}
        <span className="text-foreground font-semibold">9 anos de experiência</span> em
        administração, Recursos Humanos e Departamento Pessoal. Graduando em
        Administração pela Unifacex.
      </p>

      {/* Badges de habilidades */}
      <div className="flex flex-wrap justify-center gap-2 animate-fade-up delay-500">
        {[
          'RH & DP',
          'Recrutamento',
          'Folha de Pagamento',
          'Secretaria Escolar',
        ].map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-xs font-medium rounded-full border border-border/60 text-muted-foreground bg-card/60 backdrop-blur-sm hover:border-primary/40 hover:text-primary transition-colors duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
