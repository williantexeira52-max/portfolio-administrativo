'use client'

import { useEffect, useRef } from 'react'
import { useGsap } from '@/lib/gsap'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  icon?: React.ReactNode
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  icon,
  align = 'left',
}: SectionHeadingProps) {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const { gsap, ScrollTrigger } = useGsap()
    const root = rootRef.current
    if (!root) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const targets = root.querySelectorAll('[data-reveal]')
    const ctx = gsap.context(() => {
      gsap.set(targets, { yPercent: 100, opacity: 0 })
      gsap.to(targets, {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: root,
          start: 'top 85%',
          once: true,
        },
      })
    }, root)

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((t) => t.trigger === root && t.kill())
    }
  }, [])

  return (
    <div ref={rootRef} className={`space-y-3 ${align === 'center' ? 'text-center' : ''}`}>
      <div
        className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}
      >
        {align === 'left' && (
          <div className="flex items-center gap-2 overflow-hidden">
            <span data-reveal className="inline-block">
              {icon}
            </span>
            <span
              data-reveal
              className="inline-block text-xs font-bold tracking-[0.22em] uppercase text-primary/90"
            >
              {eyebrow}
            </span>
          </div>
        )}
        {align === 'center' && (
          <span className="overflow-hidden inline-block">
            <span
              data-reveal
              className="inline-block text-xs font-bold tracking-[0.22em] uppercase text-primary/90"
            >
              {eyebrow}
            </span>
          </span>
        )}
        {align === 'left' && <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />}
      </div>
      <div className="overflow-hidden">
        <h2
          data-reveal
          className="inline-block font-serif text-xl sm:text-3xl font-bold text-foreground text-balance leading-tight"
        >
          {title}
        </h2>
      </div>
      {description && (
        <p
          className={`text-sm text-muted-foreground leading-relaxed max-w-xl ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
