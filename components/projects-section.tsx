'use client'

import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { PlaceholderBanner } from '@/components/placeholder-banner'
import { TiltCard } from '@/components/tilt-card'

function FolderIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
    </svg>
  )
}

interface Project {
  name: string
  description: string
  tags: string[]
}

const projects: Project[] = [
  {
    name: 'Sistema Financeiro',
    description:
      'Módulo de controle financeiro com fluxo de caixa, mensalidades e emissão de relatórios gerenciais.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    name: 'AlfaMundo',
    description:
      'Plataforma educacional voltada para alfabetização, com acompanhamento de progresso do aluno.',
    tags: ['Next.js', 'TypeScript'],
  },
  {
    name: 'Assistentes com IA',
    description:
      'Assistentes virtuais desenvolvidos com IA generativa para automatizar tarefas administrativas e de atendimento.',
    tags: ['Google AI Studio', 'Automação'],
  },
  {
    name: 'Sites Desenvolvidos',
    description:
      'Sites institucionais e landing pages entregues para clientes e projetos pessoais.',
    tags: ['React', 'Tailwind CSS'],
  },
  {
    name: 'Artes e Materiais',
    description:
      'Peças gráficas, materiais institucionais e artes para redes sociais e comunicação escolar.',
    tags: ['Design Gráfico', 'Identidade Visual'],
  },
]

export function ProjectsSection() {
  return (
    <section id="projetos" className="w-full space-y-7">
      <Reveal>
        <SectionHeading
          eyebrow="Projetos"
          title="O que venho construindo"
          icon={<FolderIcon className="w-3.5 h-3.5 text-primary/80" />}
        />
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 80}>
            <TiltCard className="h-full rounded-2xl">
              <div className="group h-full rounded-2xl border border-border/50 bg-card/50 overflow-hidden hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
                <PlaceholderBanner label={project.name} aspect="aspect-[16/9]" className="rounded-none border-0 border-b border-border/50" />
                <div className="p-4 sm:p-5 space-y-2">
                  <h3 className="font-semibold text-sm text-foreground">{project.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-medium rounded-full border border-border/50 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
