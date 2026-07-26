'use client'

import { Reveal } from '@/components/reveal'
import { PlaceholderBanner } from '@/components/placeholder-banner'

function CrownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7Z" />
      <path d="M5 20h14" />
    </svg>
  )
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  )
}

const stack = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'Tailwind CSS',
  'Google AI Studio',
]

const screens = ['Dashboard', 'Financeiro', 'Portal do Professor', 'Portal do Aluno']

export function SigteoSection() {
  return (
    <section id="sigteo" className="w-full">
      <Reveal>
        <div
          className="relative rounded-3xl overflow-hidden border p-1"
          style={{
            borderColor: 'oklch(0.78 0.13 75 / 0.3)',
            background:
              'linear-gradient(160deg, oklch(0.78 0.13 75 / 0.12), transparent 40%), oklch(0.14 0.008 60)',
          }}
        >
          <div className="rounded-[22px] p-5 sm:p-9">
            {/* Selo de projeto principal */}
            <div className="flex items-center gap-2 mb-5">
              <div
                className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase"
                style={{
                  background: 'oklch(0.78 0.13 75 / 0.15)',
                  color: 'oklch(0.82 0.13 78)',
                  border: '1px solid oklch(0.78 0.13 75 / 0.35)',
                }}
              >
                <CrownIcon className="w-3 h-3" />
                Projeto Principal
              </div>
            </div>

            {/* Banner grande */}
            <PlaceholderBanner label="Banner do SIGTEO" aspect="aspect-[16/8]" className="mb-7" />

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance leading-tight mb-3">
              Criador do <span className="text-primary">SIGTEO</span>
            </h2>
            <p className="text-sm sm:text-[15px] text-muted-foreground/90 leading-relaxed mb-2">
              Sistema Integrado de Gestão Teológica &mdash; uma plataforma completa para
              administrar secretaria, financeiro, professores e alunos de instituições de
              ensino teológico.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground mb-7">
              Idealizei, desenhei e desenvolvi o SIGTEO do zero para resolver, na prática,
              os gargalos administrativos que eu mesmo enfrentava na coordenação escolar:
              matrículas, controle financeiro, emissão de relatórios e comunicação entre
              secretaria, professores e alunos em um único lugar.
            </p>

            {/* Papel no projeto */}
            <div className="grid sm:grid-cols-2 gap-3 mb-7">
              <div className="rounded-2xl border border-border/50 bg-card/50 px-4 py-3.5">
                <p className="text-[11px] font-bold tracking-wider uppercase text-primary/80 mb-1">
                  Meu papel
                </p>
                <p className="text-sm text-foreground/90 leading-relaxed">
                  Idealização, gestão de produto e desenvolvimento full-stack, do
                  levantamento de requisitos ao deploy.
                </p>
              </div>
              <div className="rounded-2xl border border-border/50 bg-card/50 px-4 py-3.5">
                <p className="text-[11px] font-bold tracking-wider uppercase text-primary/80 mb-1">
                  Impacto
                </p>
                <p className="text-sm text-foreground/90 leading-relaxed">
                  Centralizou a gestão administrativa e financeira de uma instituição de
                  ensino, reduzindo trabalho manual e retrabalho.
                </p>
              </div>
            </div>

            {/* Tecnologias */}
            <div className="mb-7">
              <p className="text-[11px] font-bold tracking-wider uppercase text-muted-foreground/70 mb-2.5">
                Tecnologias utilizadas
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full border border-border/60 text-foreground/80 bg-background/40 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Galeria de telas */}
            <div className="mb-8">
              <p className="text-[11px] font-bold tracking-wider uppercase text-muted-foreground/70 mb-2.5">
                Galeria de telas
              </p>
              <div className="grid grid-cols-2 gap-3">
                {screens.map((screen) => (
                  <PlaceholderBanner key={screen} label={screen} aspect="aspect-[4/3]" />
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="#"
              className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300 bg-primary text-primary-foreground hover:brightness-110 hover:shadow-[0_0_32px_oklch(0.78_0.13_75/0.4)]"
            >
              Ver Projeto
              <ExternalLinkIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
