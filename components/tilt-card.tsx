'use client'

import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  max?: number
}

export function TiltCard({ children, className, max = 6 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const node = ref.current
    if (!node) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(pointer: fine)').matches) return

    const rect = node.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rotateY = (px - 0.5) * max * 2
    const rotateX = (0.5 - py) * max * 2

    node.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`
  }

  function handleLeave() {
    const node = ref.current
    if (!node) return
    node.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn('transition-transform duration-300 ease-out will-change-transform', className)}
    >
      {children}
    </div>
  )
}
