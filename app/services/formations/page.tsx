import Link from 'next/link'
import { GraduationCap } from 'lucide-react'

export default function FormationsPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <GraduationCap className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-5xl font-display font-bold mb-6">
            <span className="gradient-text">Formations</span> IA & Automatisation
          </h1>
          <p className="text-xl text-light/70">
            Devenez autonome sur les outils d&apos;IA et d&apos;automatisation
          </p>
        </div>

        <div className="card-glass p-12 text-center">
          <h2 className="text-2xl font-display font-bold mb-4">Bientôt disponible</h2>
          <p className="text-light/70 mb-8">
            Nos formations arrivent prochainement. Inscrivez-vous à notre newsletter pour être averti du lancement.
          </p>
          <Link href="/contact" className="btn-primary">
            Être informé du lancement
          </Link>
        </div>
      </div>
    </div>
  )
}
