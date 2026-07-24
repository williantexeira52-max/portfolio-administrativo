'use client'

import { useState } from 'react'
import { IntroAnimation } from '@/components/intro-animation'

export function IntroWrapper({ children }: { children: React.ReactNode }) {
  const [introDone, setIntroDone] = useState(false)

  return (
    <>
      {!introDone && (
        <IntroAnimation onComplete={() => setIntroDone(true)} />
      )}
      <div
        style={{
          opacity: introDone ? 1 : 0,
          transform: introDone ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: introDone ? 'all' : 'none',
        }}
      >
        {children}
      </div>
    </>
  )
}
