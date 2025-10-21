import Link from 'next/link'
import { Users } from 'lucide-react'

export default function MarqueBlanchePage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <Users className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-5xl font-display font-bold mb-6">
            Services en <span className="gradient-text">Marque Blanche</span>
          </h1>
          <p className="text-xl text-light/70">
            Partenariat B2B pour agences et revendeurs
          </p>
        </div>

        <div className="card-glass p-12 text-center">
          <h2 className="text-2xl font-display font-bold mb-4">Programme partenaires</h2>
          <p className="text-light/70 mb-8">
            Vous êtes une agence ? Revendez nos services sous votre propre marque.
          </p>
          <Link href="/contact" className="btn-primary">
            Devenir partenaire
          </Link>
        </div>
      </div>
    </div>
  )
}
