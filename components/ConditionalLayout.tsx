'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import { ParticleBackground } from './ParticleBackground'
import { FloatingOrbs } from './FloatingOrbs'

/**
 * Composant qui affiche Header/Footer sauf sur /admin, /chat-assistant, /inscription, /landing-formation et /formationcpf1
 */
export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdmin = pathname?.startsWith('/admin')
  const isChatAssistant = pathname?.startsWith('/chat-assistant')
  const isInscription = pathname?.startsWith('/inscription')
  const isLandingFormation = pathname?.startsWith('/landing-formation')
  const isFormationCPF1 = pathname?.startsWith('/formationcpf1')

  if (isAdmin || isChatAssistant || isInscription || isLandingFormation || isFormationCPF1) {
    // Admin, Chat ou Landing Pages : pas de header/footer, juste le contenu
    return <>{children}</>
  }

  // Pages normales : avec header, footer et effets
  return (
    <>
      <FloatingOrbs />
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
