'use client'

import { useEffect, useRef } from 'react'
import { useGsap } from '@/lib/gsap'

export function BackgroundOrbs() {
  const orb1Ref = useRef<HTMLDivElement>(null)
  const orb2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!isDesktop || prefersReduced) return

    const { gsap, ScrollTrigger } = useGsap()
    const ctx = gsap.context(() => {
      if (orb1Ref.current) {
        gsap.to(orb1Ref.current, {
          y: 220,
          x: -60,
          scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 1.2 },
        })
      }
      if (orb2Ref.current) {
        gsap.to(orb2Ref.current, {
          y: -180,
          x: 80,
          scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 1.2 },
        })
      }
    })

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <>
      <div
        ref={orb1Ref}
        className="fixed top-[-100px] sm:top-[-120px] left-1/2 -translate-x-1/2 w-[260px] h-[260px] sm:w-[480px] sm:h-[480px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, oklch(0.7 0 0 / 0.05) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        ref={orb2Ref}
        className="fixed bottom-[-60px] sm:bottom-[-80px] left-[-40px] sm:left-[-60px] w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, oklch(0.7 0 0 / 0.04) 0%, transparent 65%)',
          filter: 'blur(50px)',
        }}
      />
    </>
  )
}
