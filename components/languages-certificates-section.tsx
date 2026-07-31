'use client'

import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
    </svg>
  )
}

function AwardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  )
}

const languages = [
  { name: 'Português', level: 'Nativo', dots: 5 },
  { name: 'Inglês', level: 'Básico', dots: 2 },
]

const certificates = [
  'Administração — Unifacex (em andamento)',
  'Recursos Humanos e Departamento Pessoal',
  'Google AI Studio & Ferramentas de IA',
  'Gestão Escolar e Secretaria',
]

export function LanguagesCertificatesSection() {
  return (
    <section className="w-full grid sm:grid-cols-2 gap-8">
      <div className="space-y-5">
        <Reveal>
          <SectionHeading
            eyebrow="Idiomas"
            title="Comunicação"
            icon={<GlobeIcon className="w-3.5 h-3.5 text-primary/80" />}
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="space-y-3">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-center justify-between rounded-xl glass-surface px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-foreground">{lang.name}</p>
                  <p className="text-xs text-muted-foreground">{lang.level}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: i < lang.dots ? 'oklch(0.62 0.19 258)' : 'oklch(1 0 0 / 0.12)',
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="space-y-5">
        <Reveal delay={40}>
          <SectionHeading
            eyebrow="Certificados"
            title="Formação continuada"
            icon={<AwardIcon className="w-3.5 h-3.5 text-primary/80" />}
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="space-y-2.5">
            {certificates.map((cert) => (
              <div key={cert} className="flex items-center gap-3 rounded-xl glass-surface px-4 py-3">
                <AwardIcon className="w-4 h-4 text-primary/70 shrink-0" />
                <p className="text-sm text-foreground/85">{cert}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
