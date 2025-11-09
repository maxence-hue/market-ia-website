'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import { ParticleBackground } from './ParticleBackground'
import { FloatingOrbs } from './FloatingOrbs'

/**
 * Composant qui affiche Header/Footer sauf sur /admin, /chat-assistant, /inscription et /landing-formation
 */
export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdmin = pathname?.startsWith('/admin')
  const isChatAssistant = pathname?.startsWith('/chat-assistant')
  const isInscription = pathname?.startsWith('/inscription')
  const isLandingFormation = pathname?.startsWith('/landing-formation')

  if (isAdmin || isChatAssistant || isInscription || isLandingFormation) {
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
