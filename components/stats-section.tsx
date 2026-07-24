const stats = [
  { value: '9+', label: 'Anos de experiência' },
  { value: '5', label: 'Empresas' },
  { value: '2', label: 'Formações' },
]

export function StatsSection() {
  return (
    <div className="grid grid-cols-3 gap-3 w-full">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col items-center gap-1 bg-card border border-border rounded-xl py-4 px-2"
        >
          <span className="font-serif text-2xl font-bold text-primary">{stat.value}</span>
          <span className="text-xs text-muted-foreground text-center leading-tight text-balance">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  )
}
