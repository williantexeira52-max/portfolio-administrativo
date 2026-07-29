'use client'

import { Reveal } from '@/components/reveal'
import { CountUp } from '@/components/count-up'

const metrics = [
  { value: '9+', label: 'Anos de experiência' },
  { value: '5', label: 'Empresas' },
  { value: '1', label: 'ERP desenvolvido' },
  { value: '4', label: 'Sistemas criados' },
  { value: '15+', label: 'Projetos com IA' },
  { value: '2', label: 'Formações' },
]

export function MetricsSection() {
  return (
    <section id="metricas" className="w-full">
      <Reveal>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className="flex flex-col items-center gap-1 bg-card/60 border border-border/50 rounded-2xl py-4 sm:py-5 px-1.5 sm:px-2 backdrop-blur-sm hover:border-primary/30 hover:bg-card/90 transition-all duration-300 group"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <CountUp
                value={metric.value}
                className="font-serif text-xl sm:text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300 inline-block"
                style={{ textShadow: '0 0 20px oklch(0.62 0.19 258 / 0.4)' }}
              />
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
