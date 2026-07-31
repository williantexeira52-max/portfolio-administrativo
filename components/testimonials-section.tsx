'use client'

import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 21c3 0 7-1.5 7-8V5H3v10h4c0 3-2 4-4 4v2Zm12 0c3 0 7-1.5 7-8V5h-7v10h4c0 3-2 4-4 4v2Z" />
    </svg>
  )
}

const testimonials = [
  {
    quote:
      'William é extremamente organizado e proativo. Trouxe soluções tecnológicas que facilitaram muito a rotina da secretaria escolar.',
    name: 'Coordenação Pedagógica',
    role: 'Diretor(a) de Instituição de Ensino',
  },
  {
    quote:
      'Profissional dedicado e atento aos detalhes. Sempre disposto a resolver problemas administrativos com agilidade.',
    name: 'Colega de Trabalho',
    role: 'Professor(a)',
  },
  {
    quote:
      'Sua visão administrativa aliada ao conhecimento em tecnologia fez toda diferença na gestão dos nossos processos.',
    name: 'Coordenação Administrativa',
    role: 'Coordenador(a) Geral',
  },
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="w-full space-y-6">
      <Reveal>
        <SectionHeading
          eyebrow="Depoimentos"
          title="O que dizem sobre meu trabalho"
          icon={<QuoteIcon className="w-3.5 h-3.5 text-primary/80" />}
        />
      </Reveal>

      <div className="grid sm:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 90}>
            <div className="h-full flex flex-col rounded-2xl glass-surface glass-surface-hover p-5">
              <QuoteIcon className="w-5 h-5 text-primary/40 mb-3" />
              <p className="text-sm text-foreground/85 leading-relaxed flex-1 text-pretty">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-border/40">
                <p className="text-xs font-semibold text-foreground">{t.name}</p>
                <p className="text-[11px] text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
