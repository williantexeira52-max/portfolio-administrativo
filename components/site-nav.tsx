'use client'

import { useEffect, useState } from 'react'

const links = [
  { href: '#sigteo', label: 'SIGTEO' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#blog', label: 'Blog' },
]

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? 'py-2.5' : 'py-4'
      }`}
      style={{
        background: scrolled ? 'oklch(0.09 0.004 60 / 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid oklch(1 0 0 / 0.06)' : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#" className="font-serif font-bold text-sm text-foreground tracking-tight">
          William <span className="text-primary">Teixeira</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors rounded-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-border/50 text-foreground"
          aria-label="Abrir menu"
        >
          {open ? <CloseIcon className="w-4 h-4" /> : <MenuIcon className="w-4 h-4" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-2 mx-4 rounded-2xl border border-border/50 bg-card/95 backdrop-blur-sm overflow-hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-5 py-3 text-sm text-foreground/85 border-b border-border/30 last:border-0 hover:text-primary hover:bg-primary/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
