import { ProfileCard } from '@/components/profile-card'
import { LinkButton } from '@/components/link-button'
import { ExperienceSection } from '@/components/experience-section'
import { IntroWrapper } from '@/components/intro-wrapper'
import { SiteNav } from '@/components/site-nav'
import { ScrollProgress } from '@/components/scroll-progress'
import { MarqueeStrip } from '@/components/marquee-strip'
import { MobileTabBar } from '@/components/mobile-tab-bar'
import { CustomCursor } from '@/components/custom-cursor'
import { Magnetic } from '@/components/magnetic'
import { BackgroundOrbs } from '@/components/background-orbs'
import { SigteoSection } from '@/components/sigteo-section'
import { ProjectsSection } from '@/components/projects-section'
import { GallerySection } from '@/components/gallery-section'
import { AchievementsSection } from '@/components/achievements-section'
import { SkillsSection } from '@/components/skills-section'
import { MetricsSection } from '@/components/metrics-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { VideoSection } from '@/components/video-section'
import { BlogSection } from '@/components/blog-section'
import { LanguagesCertificatesSection } from '@/components/languages-certificates-section'
import { DifferentialsSection } from '@/components/differentials-section'

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

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.78 14.02c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.11.11-1.79-.11-.41-.13-.94-.3-1.62-.6-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.55-1.16-2.95 0-1.4.73-2.09.99-2.38.26-.28.57-.35.76-.35.19 0 .38 0 .54.01.17.01.4-.06.63.48.24.56.8 1.96.87 2.1.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.61-.07.17-.19.71-.83.9-1.11.19-.28.38-.24.63-.14.26.09 1.63.77 1.91.91.28.14.47.21.54.33.07.12.07.68-.17 1.36Z" />
    </svg>
  )
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

const links = [
  {
    href: '#',
    label: 'Baixar Currículo',
    sublabel: 'Currículo atualizado em PDF',
    icon: <FileDownIcon className="w-5 h-5" />,
    variant: 'primary' as const,
    delay: 'delay-700',
  },
  {
    href: 'https://wa.me/5584921642584',
    label: 'WhatsApp',
    sublabel: '+55 (84) 92164-2584',
    icon: <WhatsappIcon className="w-5 h-5" />,
    variant: 'default' as const,
    delay: 'delay-750',
  },
  {
    href: 'https://www.linkedin.com/in/williamteixeira/',
    label: 'LinkedIn',
    sublabel: 'linkedin.com/in/williamteixeira',
    icon: <LinkedinIcon className="w-5 h-5" />,
    variant: 'default' as const,
    delay: 'delay-800',
  },
  {
    href: 'mailto:willian-texeira1@hotmail.com',
    label: 'E-mail',
    sublabel: 'willian-texeira1@hotmail.com',
    icon: <MailIcon className="w-5 h-5" />,
    variant: 'default' as const,
    delay: 'delay-850',
  },
  {
    href: 'https://www.instagram.com/williamteixeira.ai',
    label: 'Instagram',
    sublabel: '@williamteixeira.ai',
    icon: <InstagramIcon className="w-5 h-5" />,
    variant: 'default' as const,
    delay: 'delay-900',
  },
]

function Divider() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-1 h-px bg-border/50" />
      <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'oklch(0.62 0.19 258 / 0.5)' }} />
      <div className="flex-1 h-px bg-border/50" />
    </div>
  )
}

export default function Home() {
  return (
    <IntroWrapper>
      <CustomCursor />
      <ScrollProgress />
      <SiteNav />
      <main className="relative min-h-screen bg-background overflow-x-hidden">

        {/* ── Orbs de fundo com parallax (desktop) ── */}
        <BackgroundOrbs />

        {/* ── Textura noise sutil ── */}
        <div
          className="fixed inset-0 pointer-events-none opacity-[0.018]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* ── Hero ── */}
        <div className="relative z-10 px-4 sm:px-6 pt-20 sm:pt-32 pb-8 sm:pb-10">
          <div className="w-full max-w-[420px] lg:max-w-4xl mx-auto flex flex-col gap-5 sm:gap-8">
            <ProfileCard>
              <section id="contato" className="w-full space-y-3 scroll-mt-24">
                <div className="animate-fade-up delay-600 flex items-center gap-3">
                  <h2 className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground">
                    Conecte-se
                  </h2>
                  <div className="flex-1 h-px bg-border/40" />
                </div>
                <div className="flex flex-col gap-2.5">
                  {links.map((link) =>
                    link.variant === 'primary' ? (
                      <Magnetic key={link.href} strength={0.12}>
                        <LinkButton {...link} />
                      </Magnetic>
                    ) : (
                      <LinkButton key={link.href} {...link} />
                    )
                  )}
                </div>
              </section>
            </ProfileCard>
            <Divider />
          </div>
        </div>

        {/* ── Faixa de destaque (marquee) ── */}
        <div className="relative z-10 mb-10 sm:mb-16 animate-fade-in delay-700">
          <MarqueeStrip />
        </div>

        {/* ── Seções da landing page ── */}
        <div className="relative z-10 px-4 sm:px-6 pb-12 sm:pb-16">
          <div className="w-full max-w-5xl lg:max-w-6xl mx-auto flex flex-col gap-14 sm:gap-24">
            <MetricsSection />
            <SigteoSection />
            <ProjectsSection />
            <GallerySection />
            <SkillsSection />
            <AchievementsSection />

            <div className="max-w-[420px] lg:max-w-2xl mx-auto w-full flex flex-col gap-14 sm:gap-20">
              <Divider />
              <ExperienceSection />
            </div>

            <TestimonialsSection />
            <DifferentialsSection />
            <VideoSection />
            <BlogSection />
            <LanguagesCertificatesSection />
          </div>
        </div>

        {/* Rodapé */}
        <footer className="relative z-10 animate-fade-up text-center pt-4 pb-24 md:pb-10 px-4">
          <div className="max-w-[420px] mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              <div className="w-1 h-1 rounded-full bg-primary/40" />
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            </div>
            <p className="text-[11px] text-muted-foreground/70 tracking-wide">
              &copy; {new Date().getFullYear()} William Teixeira &mdash; Natal, RN
            </p>
          </div>
        </footer>

      </main>
      <MobileTabBar />
    </IntroWrapper>
  )
}
