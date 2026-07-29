'use client'

import { useEffect, useRef, useState } from 'react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

function GaugeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  )
}

const skills = [
  { name: 'Administração', level: 95 },
  { name: 'RH & Departamento Pessoal', level: 90 },
  { name: 'Inteligência Artificial', level: 80 },
  { name: 'React / Next.js', level: 70 },
  { name: 'Google AI Studio', level: 85 },
  { name: 'Gestão Escolar', level: 90 },
]

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground/90">{name}</span>
        <span className="text-xs font-semibold tabular-nums text-primary">{level}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-muted/60 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`,
            background: 'linear-gradient(90deg, oklch(0.5 0.16 258), oklch(0.62 0.19 258))',
            boxShadow: '0 0 12px oklch(0.62 0.19 258 / 0.5)',
          }}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  return (
    <section id="habilidades" className="w-full space-y-7">
      <Reveal>
        <SectionHeading
          eyebrow="Habilidades"
          title="Onde eu entrego mais valor"
          icon={<GaugeIcon className="w-3.5 h-3.5 text-primary/80" />}
        />
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
        {skills.map((skill, i) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 80} />
        ))}
      </div>
    </section>
  )
}
