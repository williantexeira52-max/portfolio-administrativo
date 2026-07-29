'use client'

import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}

const achievements = [
  { title: 'Soluções com IA', desc: 'Desenvolvimento de assistentes e automações inteligentes.' },
  { title: 'Gestão de centenas de alunos', desc: 'Secretaria escolar e coordenação administrativa.' },
  { title: 'Liderança administrativa', desc: 'Coordenação de equipes e processos internos.' },
  { title: 'Projetos próprios', desc: 'Da ideia à execução, sem depender de terceiros.' },
]

export function AchievementsSection() {
  return (
    <section id="conquistas" className="w-full space-y-6">
      <Reveal>
        <SectionHeading
          eyebrow="Conquistas"
          title="Marcos da minha trajetória"
          icon={<TrophyIcon className="w-3.5 h-3.5 text-primary/80" />}
        />
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-3">
        {achievements.map((item, i) => (
          <Reveal key={item.title} delay={i * 70}>
            <div className="flex items-start gap-3 rounded-2xl border border-border/50 bg-card/50 px-4 py-3.5 hover:border-primary/30 transition-colors duration-300">
              <span
                className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full"
                style={{ background: 'oklch(0.62 0.19 258)' }}
              />
              <div>
                <p className="text-sm font-semibold text-foreground leading-snug">{item.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
