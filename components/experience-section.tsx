interface ExperienceItem {
  role: string
  company: string
  period: string
  current?: boolean
}

const experiences: ExperienceItem[] = [
  {
    role: 'Coordenador Administrativo e Secretário Escolar',
    company: 'Escola de Teologia da Assembleia de Deus — ESTEADEB',
    period: 'Jun 2025 — Presente',
    current: true,
  },
  {
    role: 'Supervisor de DP e RH',
    company: 'Five Intermediadora de Vendas',
    period: 'Fev 2025 — Abr 2025',
  },
  {
    role: 'Educador Social — Instrutor de Empregabilidade',
    company: 'Casa do Menor Trabalhador de Natal',
    period: 'Mai 2024 — Out 2024',
  },
  {
    role: 'Auxiliar de Secretaria',
    company: 'Escola Luminova',
    period: 'Fev 2023 — Abr 2024',
  },
  {
    role: 'Auxiliar Administrativo',
    company: 'Colégio Salesiano Dom Bosco Parnamirim',
    period: 'Out 2017 — Out 2022',
  },
]

export function ExperienceSection() {
  return (
    <section className="w-full space-y-4 animate-fade-up delay-900">
      <div className="flex items-center gap-3">
        <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
          Trajetória
        </h2>
        <div className="flex-1 h-px bg-border/60" />
      </div>

      <div className="relative">
        {/* Linha da timeline */}
        <div
          className="absolute left-[9px] top-3 bottom-3 w-px"
          style={{
            background:
              'linear-gradient(to bottom, oklch(0.78 0.13 75 / 0.6), oklch(0.78 0.13 75 / 0.1))',
          }}
        />

        <div className="space-y-1">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-5 pl-7 relative group">
              {/* Ponto da timeline */}
              {exp.current ? (
                <div className="absolute left-0 top-3 flex items-center justify-center">
                  <div className="w-[18px] h-[18px] rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary animate-dot-pulse" />
                  </div>
                </div>
              ) : (
                <div
                  className="absolute left-[3px] top-[14px] w-[13px] h-[13px] rounded-full border-2 bg-background transition-colors duration-300 group-hover:border-primary/60"
                  style={{ borderColor: 'oklch(1 0 0 / 20%)' }}
                />
              )}

              <div
                className={`flex-1 pb-6 ${
                  index === experiences.length - 1 ? 'pb-0' : ''
                }`}
              >
                <div className="bg-card/50 border border-border/40 rounded-xl px-4 py-3 group-hover:border-primary/20 group-hover:bg-card/80 transition-all duration-300">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-medium text-foreground leading-tight text-pretty flex-1">
                      {exp.role}
                    </p>
                    {exp.current && (
                      <span className="shrink-0 text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/25">
                        Atual
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{exp.company}</p>
                  <p className="text-xs text-muted-foreground/60 mt-1">{exp.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
