'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-[100] bg-dark/95 backdrop-blur-lg border-b border-white/10">
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
                    <Link href="/services/site-web" className="group block px-4 py-3 hover:bg-primary/20 rounded-lg transition-all">
                      <div className="font-semibold text-light group-hover:text-primary transition-colors">Sites Web</div>
                      <div className="text-xs text-light/60">Design moderne et performant</div>
                    </Link>
                    <Link href="/services/automatisations" className="group block px-4 py-3 hover:bg-primary/20 rounded-lg transition-all">
                      <div className="font-semibold text-light group-hover:text-primary transition-colors">Automatisations IA</div>
                      <div className="text-xs text-light/60">Gagnez du temps avec l&apos;IA</div>
                    </Link>
                    <Link href="/services/saas-personnalise" className="group block px-4 py-3 hover:bg-primary/20 rounded-lg transition-all">
                      <div className="font-semibold text-light group-hover:text-primary transition-colors">SaaS Personnalisé</div>
                      <div className="text-xs text-light/60">Votre logiciel sur-mesure</div>
                    </Link>
                    <Link href="/services/formations" className="group block px-4 py-3 hover:bg-primary/20 rounded-lg transition-all">
                      <div className="font-semibold text-light group-hover:text-primary transition-colors">Formations</div>
                      <div className="text-xs text-light/60">Devenez autonome avec l&apos;IA</div>
                    </Link>
                    <Link href="/services/marque-blanche" className="group block px-4 py-3 hover:bg-primary/20 rounded-lg transition-all">
                      <div className="font-semibold text-light group-hover:text-primary transition-colors">Marque Blanche</div>
                      <div className="text-xs text-light/60">Revendez nos services</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/abonnements" className="text-light hover:text-primary transition-colors">
              Abonnements
            </Link>
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
              <Link href="/services/site-web" className="block text-light/80 hover:text-primary transition-colors">
                Sites Web
              </Link>
              <Link href="/services/automatisations" className="block text-light/80 hover:text-primary transition-colors">
                Automatisations IA
              </Link>
              <Link href="/services/saas-personnalise" className="block text-light/80 hover:text-primary transition-colors">
                SaaS Personnalisé
              </Link>
              <Link href="/services/formations" className="block text-light/80 hover:text-primary transition-colors">
                Formations
              </Link>
              <Link href="/services/marque-blanche" className="block text-light/80 hover:text-primary transition-colors">
                Marque Blanche
              </Link>
            </div>
            <Link href="/abonnements" className="block text-light hover:text-primary transition-colors">
              Abonnements
            </Link>
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
