'use client'

import { useEffect, useRef, useState } from 'react'
import { useGsap } from '@/lib/gsap'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!isFine || prefersReduced) return
    setEnabled(true)

    const { gsap } = useGsap()
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const ringX = gsap.quickTo(ring, 'x', { duration: 0.5, ease: 'power3.out' })
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.5, ease: 'power3.out' })
    const dotX = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power3.out' })
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power3.out' })

    function onMove(e: MouseEvent) {
      dotX(e.clientX)
      dotY(e.clientY)
      ringX(e.clientX)
      ringY(e.clientY)
    }

    function onOver(e: MouseEvent) {
      const target = e.target as HTMLElement
      const interactive = target.closest('a, button, [role="button"]')
      gsap.to(ring, {
        scale: interactive ? 1.8 : 1,
        opacity: interactive ? 0.5 : 0.25,
        duration: 0.3,
      })
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="hidden md:block fixed top-0 left-0 z-[60] w-8 h-8 -ml-4 -mt-4 rounded-full pointer-events-none"
        style={{ border: '1px solid oklch(0.78 0.13 75 / 0.5)', opacity: 0.25 }}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="hidden md:block fixed top-0 left-0 z-[60] w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full pointer-events-none"
        style={{ background: 'oklch(0.78 0.13 75)' }}
      />
    </>
  )
}
