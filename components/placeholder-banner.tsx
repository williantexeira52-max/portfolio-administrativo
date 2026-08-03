'use client'

import { useEffect, useRef, useState } from 'react'

function ImageIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
}

interface PlaceholderBannerProps {
  label?: string
  className?: string
  aspect?: string
}

export function PlaceholderBanner({
  label = 'Imagem em breve',
  className = '',
  aspect = 'aspect-[16/9]',
}: PlaceholderBannerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`relative w-full ${aspect} rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-2 border border-dashed border-border/70 ${className}`}
      style={{ background: 'oklch(0.13 0 0)' }}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, oklch(1 0 0 / 0.02) 0px, oklch(1 0 0 / 0.02) 1px, transparent 1px, transparent 12px)',
        }}
      />
      <ImageIcon
        className="relative w-7 h-7 text-muted-foreground/50 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'scale(1)' : 'scale(0.85)',
          transitionDelay: '250ms',
        }}
      />
      <span
        className="relative text-[11px] font-medium tracking-wide text-muted-foreground/60 uppercase transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(6px)',
          transitionDelay: '350ms',
        }}
      >
        {label}
      </span>
      {/* Cortina de revelação */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
        style={{
          background: 'oklch(0.07 0 0)',
          transform: visible ? 'scaleX(0)' : 'scaleX(1)',
          transformOrigin: 'right',
        }}
      />
    </div>
  )
}
