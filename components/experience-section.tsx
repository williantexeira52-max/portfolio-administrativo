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
    <section className="w-full space-y-3">
      <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground px-1">
        Experiência
      </h2>

      <div className="relative space-y-1">
        {/* Linha da timeline */}
        <div className="absolute left-[5px] top-2 bottom-2 w-px bg-border" />

        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-4 pl-6 relative">
            {/* Ponto da timeline */}
            <div
              className={`absolute left-0 top-2.5 w-2.5 h-2.5 rounded-full border-2 shrink-0 ${
                exp.current
                  ? 'bg-primary border-primary shadow-[0_0_8px_oklch(0.78_0.12_75/0.5)]'
                  : 'bg-background border-border'
              }`}
            />

            <div className="flex-1 pb-5">
              <p className="text-sm font-medium text-foreground leading-tight text-pretty">
                {exp.role}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">{exp.company}</p>
              <p className="text-xs text-muted-foreground/70 mt-0.5 flex items-center gap-1.5">
                {exp.current && (
                  <span className="inline-flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  </span>
                )}
                {exp.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
