const words = [
  'ADMINISTRAÇÃO',
  'RECURSOS HUMANOS',
  'SIGTEO',
  'INTELIGÊNCIA ARTIFICIAL',
  'GESTÃO ESCOLAR',
  'DEPARTAMENTO PESSOAL',
  'DESENVOLVIMENTO WEB',
]

export function MarqueeStrip() {
  const track = [...words, ...words]

  return (
    <div
      className="relative w-full overflow-hidden border-y py-3"
      style={{ borderColor: 'oklch(1 0 0 / 0.08)' }}
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee gap-8">
        {track.map((word, i) => (
          <span
            key={i}
            className="flex items-center gap-8 text-xs font-semibold tracking-[0.2em] text-muted-foreground/60 whitespace-nowrap"
          >
            {word}
            <span className="w-1 h-1 rounded-full bg-primary/50" />
          </span>
        ))}
      </div>
      {/* Fades nas bordas */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-20"
        style={{ background: 'linear-gradient(to right, oklch(0.07 0 0), transparent)' }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-20"
        style={{ background: 'linear-gradient(to left, oklch(0.07 0 0), transparent)' }}
      />
    </div>
  )
}
