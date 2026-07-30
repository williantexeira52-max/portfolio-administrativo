'use client'

import { useRef } from 'react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { PlaceholderBanner } from '@/components/placeholder-banner'

function ImagesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 22H4a2 2 0 0 1-2-2V6" />
      <path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18" />
      <rect width="16" height="16" x="6" y="2" rx="2" />
      <circle cx="12" cy="8" r="1" fill="currentColor" />
    </svg>
  )
}

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

const screens = [
  'Dashboard',
  'Gestão Acadêmica',
  'Gestão Financeira',
  'Portal do Professor',
  'Portal do Aluno',
  'Assistente de IA',
]

export function GallerySection() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    const node = scrollerRef.current
    if (!node) return
    node.scrollBy({ left: dir === 'left' ? -280 : 280, behavior: 'smooth' })
  }

  return (
    <section id="galeria" className="w-full space-y-6">
      <Reveal>
        <div className="flex items-end justify-between gap-3">
          <SectionHeading
            eyebrow="Galeria"
            title="Telas dos sistemas"
            icon={<ImagesIcon className="w-3.5 h-3.5 text-primary/80" />}
          />
          <div className="hidden sm:flex gap-2 shrink-0 pb-1">
            <button
              onClick={() => scroll('left')}
              aria-label="Anterior"
              className="w-9 h-9 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Próximo"
              className="w-9 h-9 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div
          ref={scrollerRef}
          className="flex gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {screens.map((screen) => (
            <div key={screen} className="snap-start shrink-0 w-[200px] sm:w-[280px]">
              <PlaceholderBanner label={screen} aspect="aspect-[4/3]" />
              <p className="mt-2 text-xs font-medium text-muted-foreground text-center">
                {screen}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
