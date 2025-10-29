'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import { ParticleBackground } from './ParticleBackground'
import { FloatingOrbs } from './FloatingOrbs'
import ThemeToggle from './ThemeToggle'
import { ThemeProvider } from '@/contexts/ThemeContext'

/**
 * Composant qui affiche Header/Footer sauf sur /admin
 */
export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdmin = pathname?.startsWith('/admin')

  if (isAdmin) {
    // Admin : pas de header/footer, juste le contenu
    return <>{children}</>
  }

  // Pages normales : avec header, footer et effets
  return (
    <ThemeProvider>
      <FloatingOrbs />
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
      <ThemeToggle />
    </ThemeProvider>
  )
}
