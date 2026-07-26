'use client'

import { Reveal } from '@/components/reveal'

const metrics = [
  { value: '9+', label: 'Anos de experiência' },
  { value: '6', label: 'Empresas' },
  { value: '1', label: 'ERP desenvolvido' },
  { value: '4', label: 'Sistemas criados' },
  { value: '15+', label: 'Projetos com IA' },
  { value: '2', label: 'Formações' },
]

export function MetricsSection() {
  return (
    <section id="metricas" className="w-full">
      <Reveal>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className="flex flex-col items-center gap-1 bg-card/60 border border-border/50 rounded-2xl py-5 px-2 backdrop-blur-sm hover:border-primary/30 hover:bg-card/90 transition-all duration-300 group"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <span
                className="font-serif text-2xl sm:text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300 inline-block"
                style={{ textShadow: '0 0 20px oklch(0.78 0.13 75 / 0.4)' }}
              >
                {metric.value}
              </span>
              <span className="text-[10px] font-medium text-muted-foreground/80 text-center leading-tight">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
