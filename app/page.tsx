function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FileDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M12 18v-6" />
      <path d="m9 15 3 3 3-3" />
    </svg>
  )
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  )
}
import { ProfileCard } from '@/components/profile-card'
import { LinkButton } from '@/components/link-button'
import { ExperienceSection } from '@/components/experience-section'
import { StatsSection } from '@/components/stats-section'

const links = [
  {
    href: 'https://www.linkedin.com/in/williamtexeira/',
    label: 'LinkedIn',
    sublabel: 'linkedin.com/in/williamtexeira',
    icon: <LinkedinIcon className="w-5 h-5" />,
    variant: 'primary' as const,
  },
  {
    href: 'https://www.instagram.com/',
    label: 'Instagram',
    sublabel: '@williamtexeira',
    icon: <InstagramIcon className="w-5 h-5" />,
    variant: 'default' as const,
  },
  {
    href: '#',
    label: 'Baixar Currículo',
    sublabel: 'Currículo atualizado em PDF',
    icon: <FileDownIcon className="w-5 h-5" />,
    variant: 'default' as const,
  },
]

export default function Home() {
  return (
    <main className="min-h-screen flex items-start justify-center px-4 py-12 bg-background">
      {/* Noise texture overlay sutil */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Brilho de fundo suave */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, oklch(0.78 0.12 75 / 0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative w-full max-w-sm flex flex-col gap-8">
        {/* Cabeçalho / Perfil */}
        <ProfileCard />

        {/* Estatísticas */}
        <StatsSection />

        {/* Links */}
        <section className="w-full space-y-3">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground px-1">
            Conecte-se
          </h2>
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <LinkButton key={link.href} {...link} />
            ))}
          </div>
        </section>

        {/* Experiência */}
        <ExperienceSection />

        {/* Rodapé */}
        <footer className="text-center pb-4">
          <p className="text-xs text-muted-foreground/50">
            &copy; {new Date().getFullYear()} William Teixeira — Natal, RN
          </p>
        </footer>
      </div>
    </main>
  )
}
