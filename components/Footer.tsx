import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-surface border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo-marketia-white.png"
                alt="Market-IA"
                width={40}
                height={40}
                className="object-contain"
                loading="lazy"
              />
              <span className="text-xl font-display font-bold gradient-text">Market-IA</span>
            </div>
            <p className="text-light/70 text-sm mb-4">
              Votre partenaire digital pour des sites web performants et des automatisations intelligentes.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light/70 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light/70 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light/70 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-light mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/site-web" className="text-light/70 hover:text-primary transition-colors">
                  Sites Web
                </Link>
              </li>
              <li>
                <Link href="/services/automatisations" className="text-light/70 hover:text-primary transition-colors">
                  Automatisations IA
                </Link>
              </li>
              <li>
                <Link href="/services/saas-personnalise" className="text-light/70 hover:text-primary transition-colors">
                  SaaS Personnalisé
                </Link>
              </li>
              <li>
                <Link href="/services/formations" className="text-light/70 hover:text-primary transition-colors">
                  Formations
                </Link>
              </li>
              <li>
                <Link href="/abonnements" className="text-light/70 hover:text-primary transition-colors">
                  Abonnements
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-light mb-4">Entreprise</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-light/70 hover:text-primary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-light/70 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-light/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-light/70 hover:text-primary transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/cgv" className="text-light/70 hover:text-primary transition-colors">
                  CGV
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="text-light/70 hover:text-primary transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-light mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-light/70">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="mailto:contact@market-ia.fr" className="hover:text-primary transition-colors">
                  contact@market-ia.fr
                </a>
              </li>
              <li className="flex items-start gap-2 text-light/70">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="tel:0618180598" className="hover:text-primary transition-colors">
                  06 18 18 05 98
                </a>
              </li>
              <li className="flex items-start gap-2 text-light/70">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Toulon, France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-light/50">
          <p>&copy; {currentYear} Market-IA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
