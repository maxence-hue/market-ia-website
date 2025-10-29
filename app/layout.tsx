import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import ConditionalLayout from '@/components/ConditionalLayout'
import ClientProviders from '@/components/ClientProviders'

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
        <ClientProviders>
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
        </ClientProviders>
      </body>
    </html>
  )
}
