'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 10) {
        // Toujours visible en haut de page
        setIsVisible(true)
      } else if (currentScrollY < lastScrollY) {
        // Scroll vers le haut - afficher le menu
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scroll vers le bas et pas en haut de page - cacher le menu
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', controlNavbar)
    return () => window.removeEventListener('scroll', controlNavbar)
  }, [lastScrollY])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] bg-dark/95 backdrop-blur-lg border-b border-white/10 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-xl font-display font-bold gradient-text">Market-IA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-light hover:text-primary transition-colors">
              Accueil
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                className="text-light hover:text-primary transition-colors flex items-center gap-1 py-2"
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {servicesOpen && (
                <div 
                  className="absolute top-full left-0 pt-2 w-72"
                >
                  <div className="bg-[#1C1C1E]/95 backdrop-blur-xl border border-primary/30 rounded-xl p-2 shadow-glow">
                    <Link href="/formations-ia" className="group block px-4 py-3 hover:bg-primary/20 rounded-lg transition-all">
                      <div className="font-semibold text-light group-hover:text-primary transition-colors">Formation IA Var</div>
                      <div className="text-xs text-light/60">Dans tout le Var</div>
                    </Link>
                    <Link href="/services/automatisations-ia" className="group block px-4 py-3 hover:bg-primary/20 rounded-lg transition-all">
                      <div className="font-semibold text-light group-hover:text-primary transition-colors">Automatisations IA</div>
                      <div className="text-xs text-light/60">Workflows intelligents</div>
                    </Link>
                    <Link href="/services/saas-personnalise" className="group block px-4 py-3 hover:bg-primary/20 rounded-lg transition-all">
                      <div className="font-semibold text-light group-hover:text-primary transition-colors">SaaS Personnalisé</div>
                      <div className="text-xs text-light/60">Logiciel sur mesure</div>
                    </Link>
                    <Link href="/services/site-internet" className="group block px-4 py-3 hover:bg-primary/20 rounded-lg transition-all">
                      <div className="font-semibold text-light group-hover:text-primary transition-colors">Site Internet</div>
                      <div className="text-xs text-light/60">à partir de 99 €/mois</div>
                    </Link>
                    <Link href="/services/landing-page-ia" className="group block px-4 py-3 hover:bg-primary/20 rounded-lg transition-all">
                      <div className="font-semibold text-light group-hover:text-primary transition-colors">Landing Page IA</div>
                      <div className="text-xs text-light/60">à partir de 199 €</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/blog" className="text-light hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-light hover:text-primary transition-colors">
              À propos
            </Link>
            <Link href="/contact" className="btn-primary">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-light"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4">
            <Link href="/" className="block text-light hover:text-primary transition-colors">
              Accueil
            </Link>
            <div className="space-y-2 pl-4">
              <Link href="/formations-ia" className="block text-light/80 hover:text-primary transition-colors">
                Formation IA Var
              </Link>
              <Link href="/services/automatisations-ia" className="block text-light/80 hover:text-primary transition-colors">
                Automatisations IA
              </Link>
              <Link href="/services/saas-personnalise" className="block text-light/80 hover:text-primary transition-colors">
                SaaS Personnalisé
              </Link>
              <Link href="/services/site-internet" className="block text-light/80 hover:text-primary transition-colors">
                Site Internet
              </Link>
              <Link href="/services/landing-page-ia" className="block text-light/80 hover:text-primary transition-colors">
                Landing Page IA
              </Link>
            </div>
            <Link href="/blog" className="block text-light hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/about" className="block text-light hover:text-primary transition-colors">
              À propos
            </Link>
            <Link href="/contact" className="block btn-primary text-center">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
