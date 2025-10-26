import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CTABannerProps {
  title?: string
  description?: string
  buttonText?: string
  buttonLink?: string
}

export function CTABanner({
  title = "Prêt à passer à l'action ?",
  description = "Rejoignez des centaines d'entreprises qui ont déjà transformé leur activité avec l'IA",
  buttonText = "Réserver ma formation",
  buttonLink = "/contact"
}: CTABannerProps) {
  return (
    <div className="my-12 card-glass p-8 md:p-12 text-center border-2 border-primary/30 hover:border-primary transition-all">
      <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 gradient-text">
        {title}
      </h3>
      <p className="text-xl text-light/80 mb-8 max-w-2xl mx-auto">
        {description}
      </p>
      <Link
        href={buttonLink}
        className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl transition-all hover:shadow-glow"
      >
        {buttonText}
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  )
}
