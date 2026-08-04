import type { Metadata, Viewport } from 'next'
import './globals.css'

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
    <html lang="pt-BR" className="bg-background" style={{ ['--font-inter' as any]: "'Inter', ui-sans-serif, system-ui, sans-serif" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
