import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ParticleBackground } from '@/components/ParticleBackground'
import { FloatingOrbs } from '@/components/FloatingOrbs'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Market-IA | Sites Web & Automatisations IA pour Entreprises',
  description: 'Abonnements tout-inclus pour votre site web professionnel. Création, hébergement, maintenance et évolutions. Automatisations IA sur mesure.',
  keywords: ['site web abonnement', 'automatisation IA', 'marketing automation', 'création site web', 'SaaS personnalisé'],
  authors: [{ name: 'Maxence Alehause' }],
  openGraph: {
    title: 'Market-IA | Sites Web & Automatisations IA',
    description: 'Abonnements tout-inclus pour votre site web professionnel',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen flex flex-col relative overflow-x-hidden bg-[#0F0F10]">
        <FloatingOrbs />
        <ParticleBackground />
        <div className="relative z-10">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
