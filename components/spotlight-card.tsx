'use client'

import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface SpotlightCardProps {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'a'
  href?: string
}

export function SpotlightCard({ children, className, as = 'div', href }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const node = ref.current
    if (!node) return
    if (!window.matchMedia('(pointer: fine)').matches) return
    const rect = node.getBoundingClientRect()
    node.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
    node.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
    node.style.setProperty('--spot-opacity', '1')
  }

  function handleLeave() {
    ref.current?.style.setProperty('--spot-opacity', '0')
  }

  const Comp = as as any

  return (
    <Comp
      ref={ref}
      href={as === 'a' ? href : undefined}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn('relative isolate overflow-hidden', className)}
      style={{ ['--spot-opacity' as any]: 0 }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          opacity: 'var(--spot-opacity, 0)',
          background:
            'radial-gradient(280px circle at var(--spot-x, 50%) var(--spot-y, 50%), oklch(0.92 0 0 / 0.1), transparent 70%)',
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </Comp>
  )
}
