'use client'

import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { PlaceholderBanner } from '@/components/placeholder-banner'
import { TiltCard } from '@/components/tilt-card'

function PenIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>
  )
}

const posts = [
  {
    title: 'Como a tecnologia está transformando a gestão escolar',
    tag: 'Gestão Escolar',
    excerpt:
      'Sistemas integrados reduzem retrabalho e dão mais visão sobre financeiro, matrículas e desempenho.',
  },
  {
    title: '5 lições de RH que aprendi administrando pessoas',
    tag: 'RH',
    excerpt:
      'Recrutamento, folha de pagamento e gestão de conflitos: o que realmente funciona no dia a dia.',
  },
  {
    title: 'Inteligência Artificial aplicada à administração',
    tag: 'IA',
    excerpt:
      'Como assistentes de IA podem automatizar tarefas repetitivas e liberar tempo para decisões estratégicas.',
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="w-full space-y-6">
      <Reveal>
        <SectionHeading
          eyebrow="Blog"
          title="Escrevendo sobre gestão e tecnologia"
          icon={<PenIcon className="w-3.5 h-3.5 text-primary/80" />}
        />
      </Reveal>

      <div className="grid sm:grid-cols-3 gap-4">
        {posts.map((post, i) => (
          <Reveal key={post.title} delay={i * 90}>
            <TiltCard className="h-full rounded-2xl">
              <a href="#" className="group block h-full rounded-2xl border border-border/50 bg-card/50 overflow-hidden hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
                <PlaceholderBanner label={post.tag} aspect="aspect-[16/9]" className="rounded-none border-0 border-b border-border/50" />
                <div className="p-4 sm:p-5 space-y-2">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-primary/80">
                    {post.tag}
                  </span>
                  <h3 className="text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{post.excerpt}</p>
                </div>
              </a>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
