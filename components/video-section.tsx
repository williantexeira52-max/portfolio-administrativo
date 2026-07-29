'use client'

import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7Z" />
    </svg>
  )
}

function VideoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  )
}

export function VideoSection() {
  return (
    <section id="video" className="w-full space-y-6">
      <Reveal>
        <SectionHeading
          eyebrow="Vídeo"
          title="Um pouco sobre mim, em 30 segundos"
          icon={<VideoIcon className="w-3.5 h-3.5 text-primary/80" />}
        />
      </Reveal>

      <Reveal delay={100}>
        <div
          className="relative w-full aspect-video rounded-2xl overflow-hidden border border-dashed border-border/70 flex flex-col items-center justify-center gap-3 group cursor-pointer"
          style={{ background: 'oklch(0.13 0 0)' }}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
            style={{
              background: 'oklch(0.62 0.19 258 / 0.15)',
              border: '1px solid oklch(0.62 0.19 258 / 0.4)',
            }}
          >
            <PlayIcon className="w-6 h-6 text-primary ml-0.5" />
          </div>
          <span className="text-xs font-medium tracking-wide text-muted-foreground/70 uppercase">
            Vídeo em breve
          </span>
          <p className="text-xs text-muted-foreground/60 max-w-xs text-center px-4">
            &ldquo;Olá, eu sou William...&rdquo;
          </p>
        </div>
      </Reveal>
    </section>
  )
}
