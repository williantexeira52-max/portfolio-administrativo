import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'William Teixeira — Coordenador Administrativo & RH',
  description:
    'Portfólio profissional de William Teixeira, Coordenador Administrativo com experiência em RH, Departamento Pessoal e Secretaria Escolar. Natal, RN.',
  keywords: [
    'William Teixeira',
    'Coordenador Administrativo',
    'RH',
    'Recursos Humanos',
    'Natal RN',
    'Departamento Pessoal',
  ],
  openGraph: {
    title: 'William Teixeira — Coordenador Administrativo & RH',
    description:
      'Profissional com 9+ anos de experiência em administração, RH e educação.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'dark',
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} bg-background`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
