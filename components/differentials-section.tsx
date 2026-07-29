'use client'

import { Reveal } from '@/components/reveal'

const differentials = [
  'Visão administrativa',
  'Formação em Educação',
  'Tecnologia aplicada à gestão',
  'Automação com IA',
  'Comunicação e liderança',
]

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m12 2 2.9 6.26L21 9.27l-4.5 4.4L17.8 21 12 17.77 6.2 21l1.3-7.33L3 9.27l6.1-1.01Z" />
    </svg>
  )
}

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="w-full">
      <Reveal>
        <div
          className="relative rounded-3xl p-5 sm:p-8 overflow-hidden border"
          style={{
            borderColor: 'oklch(0.62 0.19 258 / 0.25)',
            background:
              'linear-gradient(135deg, oklch(0.17 0 0 / 0.9), oklch(0.12 0 0 / 0.95))',
          }}
        >
          <div
            className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, oklch(0.62 0.19 258 / 0.1) 0%, transparent 70%)' }}
          />
          <div className="relative flex items-center gap-2 mb-2">
            <StarIcon className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold tracking-[0.22em] uppercase text-primary/90">
              Diferenciais
            </span>
          </div>
          <h2 className="relative font-serif text-xl sm:text-3xl font-bold text-foreground mb-5">
            Por que trabalhar comigo?
          </h2>
          <div className="relative flex flex-wrap gap-2.5">
            {differentials.map((item) => (
              <span
                key={item}
                className="px-4 py-2 text-sm font-medium rounded-full border text-foreground/90 bg-background/40 backdrop-blur-sm hover:border-primary/50 hover:text-primary transition-colors duration-300"
                style={{ borderColor: 'oklch(1 0 0 / 0.12)' }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
