'use client'

interface ExperienceItem {
  role: string
  company: string
  period: string
  location?: string
  current?: boolean
  future?: boolean
  highlight?: string
}

const experiences: ExperienceItem[] = [
  {
    role: 'Coordenador Administrativo e Secretário Escolar',
    company: 'Escola de Teologia da Assembleia de Deus — ESTEADEB',
    period: 'Jun 2025 — Presente',
    location: 'Natal, RN',
    current: true,
  },
  {
    role: 'Supervisor de Departamento Pessoal e RH',
    company: 'Five Intermediadora de Vendas',
    period: 'Fev 2025 — Abr 2025',
    location: 'Natal, RN',
  },
  {
    role: 'Educador Social — Instrutor de Empregabilidade',
    company: 'Casa do Menor Trabalhador de Natal',
    period: 'Mai 2024 — Out 2024',
    location: 'Natal, RN',
  },
  {
    role: 'Auxiliar de Secretaria',
    company: 'Escola Luminova',
    period: 'Fev 2023 — Abr 2024',
    location: 'Natal, RN',
  },
  {
    role: 'Auxiliar Administrativo',
    company: 'Colégio Salesiano Dom Bosco Parnamirim',
    period: 'Out 2017 — Out 2022',
    location: 'Parnamirim, RN',
  },
]

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="14" x="2" y="7" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function RocketIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}

export function ExperienceSection() {
  return (
    <section className="w-full space-y-5 animate-fade-up delay-900">

      {/* Cabeçalho da seção */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <BriefcaseIcon className="w-3.5 h-3.5 text-primary/80" />
          <h2 className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/80">
            Trajetória
          </h2>
        </div>
        <div
          className="flex-1 h-px"
          style={{
            background: 'linear-gradient(to right, oklch(0.78 0.13 75 / 0.4), transparent)',
          }}
        />
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Linha vertical */}
        <div
          className="absolute left-[15px] top-4 bottom-16 w-px pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, oklch(0.78 0.13 75 / 0.7) 0%, oklch(0.78 0.13 75 / 0.15) 85%, transparent 100%)',
          }}
        />

        <div className="space-y-2.5">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-4 relative group">

              {/* Ponto / Dot */}
              <div className="shrink-0 flex flex-col items-center" style={{ paddingTop: '14px' }}>
                {exp.current ? (
                  <div className="relative flex items-center justify-center">
                    <div
                      className="w-[30px] h-[30px] rounded-full flex items-center justify-center"
                      style={{ background: 'oklch(0.78 0.13 75 / 0.15)', border: '1px solid oklch(0.78 0.13 75 / 0.4)' }}
                    >
                      <div
                        className="w-3 h-3 rounded-full animate-dot-pulse"
                        style={{ background: 'oklch(0.78 0.13 75)' }}
                      />
                    </div>
                  </div>
                ) : (
                  <div
                    className="w-[30px] h-[30px] rounded-full flex items-center justify-center transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/5"
                    style={{
                      border: '1px solid oklch(1 0 0 / 0.12)',
                      background: 'oklch(0.18 0.01 264)',
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full transition-all duration-300 group-hover:bg-primary/60"
                      style={{ background: 'oklch(1 0 0 / 0.2)' }}
                    />
                  </div>
                )}
              </div>

              {/* Conteúdo */}
              <div className="flex-1 pb-1">
                <div
                  className={`rounded-2xl px-4 py-3.5 transition-all duration-300 ${
                    exp.current
                      ? 'border group-hover:shadow-[0_0_24px_oklch(0.78_0.13_75/0.12)]'
                      : 'border group-hover:border-primary/20 group-hover:bg-card/90'
                  }`}
                  style={
                    exp.current
                      ? {
                          background: 'oklch(0.18 0.015 75 / 0.9)',
                          borderColor: 'oklch(0.78 0.13 75 / 0.35)',
                          boxShadow: '0 0 0 1px oklch(0.78 0.13 75 / 0.08) inset',
                        }
                      : {
                          background: 'oklch(0.17 0.01 264 / 0.7)',
                          borderColor: 'oklch(1 0 0 / 0.08)',
                        }
                  }
                >
                  {/* Topo: cargo + badge */}
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <p
                      className={`text-sm font-semibold leading-snug text-pretty flex-1 ${
                        exp.current ? 'text-foreground' : 'text-foreground/85'
                      }`}
                    >
                      {exp.role}
                    </p>
                    {exp.current && (
                      <span
                        className="shrink-0 text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
                        style={{
                          background: 'oklch(0.78 0.13 75 / 0.18)',
                          color: 'oklch(0.78 0.13 75)',
                          border: '1px solid oklch(0.78 0.13 75 / 0.3)',
                        }}
                      >
                        Atual
                      </span>
                    )}
                  </div>

                  {/* Empresa */}
                  <p
                    className={`text-xs leading-relaxed ${
                      exp.current ? 'text-foreground/70' : 'text-muted-foreground/70'
                    }`}
                  >
                    {exp.company}
                  </p>

                  {/* Período + localização */}
                  <div className="flex items-center gap-3 mt-2 flex-wrap">
                    <span
                      className="text-[11px] font-medium tabular-nums"
                      style={{ color: exp.current ? 'oklch(0.78 0.13 75 / 0.9)' : 'oklch(1 0 0 / 0.35)' }}
                    >
                      {exp.period}
                    </span>
                    {exp.location && (
                      <span className="flex items-center gap-1 text-[11px] text-muted-foreground/50">
                        <MapPinIcon className="w-2.5 h-2.5" />
                        {exp.location}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Card de Plano de Carreira — Curitiba 2027 */}
      <div
        className="relative rounded-2xl px-5 py-4 overflow-hidden mt-1"
        style={{
          background: 'linear-gradient(135deg, oklch(0.22 0.04 264 / 0.95), oklch(0.19 0.02 264 / 0.95))',
          border: '1px solid oklch(0.78 0.13 75 / 0.22)',
        }}
      >
        {/* Orb decorativo */}
        <div
          className="absolute -right-6 -top-6 w-28 h-28 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, oklch(0.78 0.13 75 / 0.12) 0%, transparent 70%)',
          }}
        />

        <div className="relative flex items-start gap-3.5">
          {/* Ícone */}
          <div
            className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center mt-0.5"
            style={{
              background: 'oklch(0.78 0.13 75 / 0.15)',
              border: '1px solid oklch(0.78 0.13 75 / 0.3)',
            }}
          >
            <RocketIcon className="w-4 h-4" style={{ color: 'oklch(0.78 0.13 75)' } as React.CSSProperties} />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span
                className="text-xs font-bold tracking-wider uppercase"
                style={{ color: 'oklch(0.78 0.13 75)' }}
              >
                Próximo Passo
              </span>
              <span
                className="text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
                style={{
                  background: 'oklch(0.78 0.13 75 / 0.1)',
                  color: 'oklch(0.78 0.13 75 / 0.8)',
                  border: '1px solid oklch(0.78 0.13 75 / 0.2)',
                }}
              >
                2027
              </span>
            </div>
            <p className="text-sm font-semibold text-foreground leading-snug">
              Expansão para Curitiba, PR
            </p>
            <p className="text-xs text-muted-foreground/70 mt-1 leading-relaxed">
              Planejamento de atuação profissional em Curitiba a partir de 2027, ampliando o alcance de carreira para o mercado do Sul do Brasil.
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}
