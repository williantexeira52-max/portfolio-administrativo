import { ProfileCard } from '@/components/profile-card'
import { LinkButton } from '@/components/link-button'
import { ExperienceSection } from '@/components/experience-section'
import { StatsSection } from '@/components/stats-section'
import { IntroWrapper } from '@/components/intro-wrapper'

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

const links = [
  {
    href: 'https://www.linkedin.com/in/williamtexeira/',
    label: 'LinkedIn',
    sublabel: 'linkedin.com/in/williamtexeira',
    icon: <LinkedinIcon className="w-5 h-5" />,
    variant: 'primary' as const,
    delay: 'delay-700',
  },
  {
    href: 'https://www.instagram.com/williamteixeirac1',
    label: 'Instagram',
    sublabel: '@williamteixeirac1',
    icon: <InstagramIcon className="w-5 h-5" />,
    variant: 'default' as const,
    delay: 'delay-800',
  },
  {
    href: '#',
    label: 'Baixar Currículo',
    sublabel: 'Currículo atualizado em PDF',
    icon: <FileDownIcon className="w-5 h-5" />,
    variant: 'default' as const,
    delay: 'delay-900',
  },
]

export default function Home() {
  return (
    <IntroWrapper>
    <main className="relative min-h-screen flex items-start justify-center px-4 sm:px-6 py-10 sm:py-14 bg-background overflow-x-hidden">

      {/* ── Orb 1: topo centro ── */}
      <div
        className="fixed top-[-120px] left-1/2 -translate-x-1/2 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, oklch(0.78 0.13 75 / 0.07) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />

      {/* ── Orb 2: canto inferior esquerdo ── */}
      <div
        className="fixed bottom-[-80px] left-[-60px] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, oklch(0.78 0.13 75 / 0.05) 0%, transparent 65%)',
          filter: 'blur(50px)',
        }}
      />

      {/* ── Textura noise sutil ── */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.018]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Conteúdo ── */}
      <div className="relative z-10 w-full max-w-[420px] flex flex-col gap-6 sm:gap-8">

        {/* Perfil */}
        <ProfileCard />

        {/* Divisor */}
        <div className="animate-fade-up delay-500 flex items-center gap-4">
          <div className="flex-1 h-px bg-border/50" />
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: 'oklch(0.78 0.13 75 / 0.5)' }}
          />
          <div className="flex-1 h-px bg-border/50" />
        </div>

        {/* Estatísticas */}
        <StatsSection />

        {/* Links */}
        <section className="w-full space-y-3">
          <div className="animate-fade-up delay-600 flex items-center gap-3">
            <h2 className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Conecte-se
            </h2>
            <div className="flex-1 h-px bg-border/40" />
          </div>
          <div className="flex flex-col gap-2.5">
            {links.map((link) => (
              <LinkButton key={link.href} {...link} />
            ))}
          </div>
        </section>

        {/* Divisor */}
        <div className="animate-fade-up delay-900 flex items-center gap-4">
          <div className="flex-1 h-px bg-border/50" />
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: 'oklch(0.78 0.13 75 / 0.5)' }}
          />
          <div className="flex-1 h-px bg-border/50" />
        </div>

        {/* Experiência */}
        <ExperienceSection />

        {/* Rodapé */}
        <footer className="animate-fade-up delay-1000 text-center pb-4">
          <p className="text-[11px] text-muted-foreground/70 tracking-wide">
            &copy; {new Date().getFullYear()} William Teixeira &mdash; Natal, RN
          </p>
        </footer>

      </div>
    </main>
    </IntroWrapper>
  )
}
