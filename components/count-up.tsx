'use client'

import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  value: string
  className?: string
  style?: React.CSSProperties
  duration?: number
}

/** Extrai a parte numérica de strings como "9+", "15+", "6" para animar. */
function parseValue(value: string) {
  const match = value.match(/(\d+)/)
  const num = match ? parseInt(match[1], 10) : 0
  const prefix = match ? value.slice(0, match.index) : ''
  const suffix = match ? value.slice((match.index ?? 0) + match[1].length) : value
  return { num, prefix, suffix }
}

export function CountUp({ value, className, style, duration = 1200 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const { num, prefix, suffix } = parseValue(value)

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setDisplay(value)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()

        function tick(now: number) {
          const progress = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - progress, 3)
          const current = Math.round(num * eased)
          setDisplay(`${prefix}${current}${suffix}`)
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [value, duration])

  return (
    <span ref={ref} className={className} style={style}>
      {display}
    </span>
  )
}
