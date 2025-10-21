import ContactForm from '@/components/ContactForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Contactez-<span className="gradient-text">nous</span>
          </h1>
          <p className="text-xl text-light/70 max-w-2xl mx-auto">
            Une question ? Un projet ? Notre équipe vous répond sous 24h
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="card-glass p-8 text-center">
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-display font-bold text-xl mb-2">Email</h3>
            <a href="mailto:contact@market-ia.fr" className="text-light/70 hover:text-primary transition-colors">
              contact@market-ia.fr
            </a>
          </div>

          <div className="card-glass p-8 text-center">
            <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-display font-bold text-xl mb-2">Téléphone</h3>
            <a href="tel:+33123456789" className="text-light/70 hover:text-primary transition-colors">
              +33 1 23 45 67 89
            </a>
          </div>

          <div className="card-glass p-8 text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-display font-bold text-xl mb-2">Adresse</h3>
            <p className="text-light/70">
              Paris, France
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-display font-bold mb-6">
              Envoyez-nous un message
            </h2>
            <p className="text-light/70 mb-6">
              Remplissez le formulaire ci-contre et nous vous répondrons dans les plus brefs délais.
            </p>

            <div className="card-glass p-6 mb-6">
              <div className="flex items-start gap-3 mb-4">
                <Clock className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-bold text-light mb-1">Horaires</h3>
                  <p className="text-light/70 text-sm">Lundi - Vendredi : 9h - 18h</p>
                  <p className="text-light/70 text-sm">Weekend : Fermé</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
              <h3 className="font-bold text-light mb-3">Réponse rapide garantie</h3>
              <p className="text-light/70 text-sm">
                Nous nous engageons à répondre à toutes les demandes sous 24h ouvrées. 
                Pour les urgences, appelez-nous directement.
              </p>
            </div>
          </div>

          <div className="card-glass p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
