'use client'

function FolderIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
    </svg>
  )
}

function CrownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7Z" />
      <path d="M5 20h14" />
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

function FileDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M12 18v-6" />
      <path d="m9 15 3 3 3-3" />
    </svg>
  )
}

const items = [
  { href: '/curriculo-william-teixeira.pdf', label: 'Currículo', icon: FileDownIcon },
  { href: '#sigteo', label: 'SIGTEO', icon: CrownIcon },
  { href: '#projetos', label: 'Projetos', icon: FolderIcon },
  { href: '#contato', label: 'Contato', icon: MailIcon },
]

export function MobileTabBar() {
  return (
    <nav
      className="md:hidden fixed bottom-3 left-3 right-3 z-40 rounded-2xl border flex items-stretch justify-between px-1 py-1"
      style={{
        background: 'oklch(0.1 0 0 / 0.85)',
        backdropFilter: 'blur(16px)',
        borderColor: 'oklch(1 0 0 / 0.09)',
        boxShadow: '0 8px 32px oklch(0 0 0 / 0.4)',
      }}
    >
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="flex-1 flex flex-col items-center gap-0.5 py-2 rounded-xl text-muted-foreground active:text-primary active:bg-primary/10 transition-colors"
        >
          <item.icon className="w-[18px] h-[18px]" />
          <span className="text-[9px] font-medium tracking-wide">{item.label}</span>
        </a>
      ))}
    </nav>
  )
}
