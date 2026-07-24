'use client'

import { useEffect, useState } from 'react'

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'enter' | 'hold' | 'exit'>('enter')
  const [lettersDone, setLettersDone] = useState(false)

  const firstName = 'William'
  const lastName  = 'Teixeira'

  useEffect(() => {
    // Fase 1: letras entram (150ms × 15 letras + folga)
    const lettersTimer = setTimeout(() => setLettersDone(true), 1600)

    // Fase 2: hold curto
    const holdTimer = setTimeout(() => setPhase('hold'), 1800)

    // Fase 3: saída
    const exitTimer = setTimeout(() => setPhase('exit'), 2600)

    // Fase 4: unmount
    const doneTimer = setTimeout(() => onComplete(), 3400)

    return () => {
      clearTimeout(lettersTimer)
      clearTimeout(holdTimer)
      clearTimeout(exitTimer)
      clearTimeout(doneTimer)
    }
  }, [onComplete])

  const isExiting = phase === 'exit'

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'oklch(0.06 0.004 60)',
        opacity: isExiting ? 0 : 1,
        transition: isExiting ? 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)' : undefined,
        pointerEvents: isExiting ? 'none' : 'all',
      }}
    >

      {/* Grade de linhas finas ao fundo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(oklch(1 0 0 / 3%) 1px, transparent 1px),
            linear-gradient(90deg, oklch(1 0 0 / 3%) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 100%)',
          transform: isExiting ? 'scale(1.06)' : 'scale(1)',
          transition: isExiting ? 'transform 0.8s ease' : 'transform 1.2s ease',
        }}
      />

      {/* Orb dourado central */}
      <div
        className="absolute rounded-full"
        style={{
          width: 360,
          height: 360,
          background: 'radial-gradient(circle, oklch(0.78 0.13 75 / 0.09) 0%, transparent 70%)',
          filter: 'blur(48px)',
          opacity: isExiting ? 0 : 1,
          transition: isExiting ? 'opacity 0.5s ease' : 'opacity 0.8s ease 0.4s',
          transitionDelay: isExiting ? '0s' : '0.4s',
        }}
      />

      {/* Container central */}
      <div className="relative flex flex-col items-center gap-6 select-none">

        {/* Monograma — iniciais em quadrado */}
        <div
          style={{
            opacity: isExiting ? 0 : 1,
            transform: isExiting ? 'scale(0.85) translateY(-8px)' : 'scale(1) translateY(0)',
            transition: isExiting
              ? 'opacity 0.45s ease, transform 0.45s ease'
              : 'opacity 0.6s ease 0.2s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
          }}
        >
          <MonogramMark />
        </div>

        {/* Nome letra a letra */}
        <div className="flex flex-col items-center gap-1">
          {/* Primeira linha: WILLIAM */}
          <div className="flex gap-[2px]" aria-label="William">
            {firstName.split('').map((char, i) => (
              <LetterReveal
                key={i}
                char={char}
                delay={180 + i * 80}
                isExiting={isExiting}
                exitDelay={i * 30}
                className="text-[2.2rem] font-serif font-bold tracking-[0.15em] text-foreground"
              />
            ))}
          </div>

          {/* Segunda linha: TEIXEIRA mais sutil */}
          <div className="flex gap-[1px]" aria-label="Teixeira">
            {lastName.split('').map((char, i) => (
              <LetterReveal
                key={i}
                char={char}
                delay={400 + i * 70}
                isExiting={isExiting}
                exitDelay={80 + i * 25}
                className="text-[0.9rem] font-sans font-light tracking-[0.55em] uppercase"
                style={{ color: 'oklch(0.78 0.13 75)' }}
              />
            ))}
          </div>
        </div>

        {/* Linha separadora que expande */}
        <Divider lettersDone={lettersDone} isExiting={isExiting} />

        {/* Cargo */}
        <p
          className="text-[0.65rem] font-sans tracking-[0.4em] uppercase text-muted-foreground/70"
          style={{
            opacity: lettersDone && !isExiting ? 1 : 0,
            transform: lettersDone && !isExiting ? 'translateY(0)' : 'translateY(6px)',
            transition: 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s',
          }}
        >
          Gerente Administrativo
        </p>
      </div>

      {/* Barra de progresso inferior */}
      <ProgressBar isExiting={isExiting} />
    </div>
  )
}

/* ── Monograma WT ── */
function MonogramMark() {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: 72, height: 72 }}
    >
      {/* Borda exterior animada */}
      <svg
        className="absolute inset-0 animate-spin-slow"
        width="72" height="72" viewBox="0 0 72 72"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="2" y="2" width="68" height="68"
          rx="6"
          stroke="oklch(0.78 0.13 75)"
          strokeWidth="1"
          strokeDasharray="8 4"
          strokeOpacity="0.5"
        />
      </svg>
      {/* Borda interior estática */}
      <svg
        className="absolute inset-0"
        width="72" height="72" viewBox="0 0 72 72"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="8" y="8" width="56" height="56"
          rx="3"
          stroke="oklch(0.78 0.13 75 / 0.25)"
          strokeWidth="0.75"
        />
      </svg>
      {/* Iniciais */}
      <span
        className="font-serif font-bold text-xl relative z-10"
        style={{ color: 'oklch(0.78 0.13 75)', letterSpacing: '0.05em' }}
      >
        WT
      </span>
    </div>
  )
}

/* ── Letra individual com reveal ── */
function LetterReveal({
  char, delay, isExiting, exitDelay, className, style,
}: {
  char: string
  delay: number
  isExiting: boolean
  exitDelay: number
  className?: string
  style?: React.CSSProperties
}) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  return (
    <span
      className={className}
      style={{
        ...style,
        display: 'inline-block',
        opacity: visible && !isExiting ? 1 : 0,
        transform: visible && !isExiting ? 'translateY(0)' : 'translateY(12px)',
        transition: isExiting
          ? `opacity 0.3s ease ${exitDelay}ms, transform 0.3s ease ${exitDelay}ms`
          : `opacity 0.35s ease, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)`,
      }}
    >
      {char}
    </span>
  )
}

/* ── Linha divisória que expande ── */
function Divider({ lettersDone, isExiting }: { lettersDone: boolean; isExiting: boolean }) {
  return (
    <div className="relative flex items-center gap-2" style={{ width: 220 }}>
      <div
        style={{
          flex: 1,
          height: 1,
          background: 'oklch(0.78 0.13 75 / 0.4)',
          transformOrigin: 'right center',
          transform: lettersDone && !isExiting ? 'scaleX(1)' : 'scaleX(0)',
          transition: lettersDone
            ? 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
            : 'transform 0.3s ease',
        }}
      />
      <div
        style={{
          width: 5, height: 5, borderRadius: '50%',
          background: 'oklch(0.78 0.13 75)',
          opacity: lettersDone && !isExiting ? 1 : 0,
          transition: 'opacity 0.4s ease 0.4s',
        }}
      />
      <div
        style={{
          flex: 1,
          height: 1,
          background: 'oklch(0.78 0.13 75 / 0.4)',
          transformOrigin: 'left center',
          transform: lettersDone && !isExiting ? 'scaleX(1)' : 'scaleX(0)',
          transition: lettersDone
            ? 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
            : 'transform 0.3s ease',
        }}
      />
    </div>
  )
}

/* ── Barra de progresso ── */
function ProgressBar({ isExiting }: { isExiting: boolean }) {
  const [width, setWidth] = useState('0%')

  useEffect(() => {
    // Pequeno delay para o CSS transition detectar a mudança de 0 → 75%
    const t1 = setTimeout(() => setWidth('75%'), 80)
    return () => clearTimeout(t1)
  }, [])

  useEffect(() => {
    if (isExiting) setWidth('100%')
  }, [isExiting])

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2" style={{ width: 120 }}>
      <div
        style={{
          height: 1,
          background: 'oklch(0.78 0.13 75 / 0.15)',
          borderRadius: 999,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, oklch(0.78 0.13 75 / 0.6), oklch(0.78 0.13 75))',
            borderRadius: 999,
            width,
            transition: isExiting
              ? 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
              : 'width 2.2s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      </div>
    </div>
  )
}
