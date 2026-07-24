const stats = [
  { value: '9+', label: 'Anos de Exp.' },
  { value: '5', label: 'Empresas' },
  { value: '2', label: 'Formações' },
]

export function StatsSection() {
  return (
    <div className="animate-fade-up delay-600 grid grid-cols-3 gap-3 w-full">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="flex flex-col items-center gap-1 bg-card/60 border border-border/50 rounded-2xl py-4 px-3 backdrop-blur-sm hover:border-primary/30 hover:bg-card/90 transition-all duration-300 group"
        >
          <span
            className="font-serif text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300 inline-block"
            style={{ textShadow: '0 0 20px oklch(0.78 0.13 75 / 0.4)' }}
          >
            {stat.value}
          </span>
          <span className="text-[10px] font-medium text-muted-foreground/80 text-center leading-tight">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  )
}
