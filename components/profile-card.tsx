import Image from 'next/image'

export function ProfileCard() {
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      {/* Avatar com anel dourado */}
      <div className="relative">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'conic-gradient(from 0deg, oklch(0.78 0.12 75), oklch(0.60 0.08 75), oklch(0.78 0.12 75))',
            padding: '2px',
            borderRadius: '9999px',
          }}
        />
        <div className="relative w-28 h-28 rounded-full ring-2 ring-[oklch(0.78_0.12_75)] ring-offset-4 ring-offset-background overflow-hidden">
          <Image
            src="/william-profile.png"
            alt="Foto de perfil de William Teixeira"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Nome e cargo */}
      <div className="space-y-2">
        <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground text-balance">
          William Teixeira
        </h1>
        <p className="text-sm font-medium tracking-widest uppercase text-primary">
          Coordenador Administrativo & RH
        </p>
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
          Natal, Rio Grande do Norte
        </p>
      </div>

      {/* Bio */}
      <p className="text-sm leading-relaxed text-muted-foreground max-w-sm text-balance">
        Profissional com mais de{' '}
        <span className="text-foreground font-medium">9 anos de experiência</span> em
        administração, Recursos Humanos e Departamento Pessoal. Graduando em Administração
        pela Unifacex.
      </p>

      {/* Badges de destaque */}
      <div className="flex flex-wrap justify-center gap-2">
        {['RH & DP', 'Recrutamento & Seleção', 'Folha de Pagamento', 'Secretaria Escolar'].map(
          (skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs font-medium rounded-full border border-border text-muted-foreground bg-card"
            >
              {skill}
            </span>
          )
        )}
      </div>
    </div>
  )
}
