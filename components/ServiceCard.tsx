import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface Service {
  title: string
  starting_price?: number
  excerpt: string
  icon: string
  href: string
}

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={service.href}>
      <div className="card-glass p-8 h-full hover:shadow-glow transition-all duration-300 group">
        <div className="text-5xl mb-4">{service.icon}</div>
        
        <h3 className="text-2xl font-display font-bold text-light mb-3 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        
        {service.starting_price && (
          <div className="mb-4">
            <span className="text-light/60 text-sm">À partir de </span>
            <span className="text-2xl font-bold gradient-text">{service.starting_price}€</span>
          </div>
        )}
        
        <p className="text-light/70 mb-6">{service.excerpt}</p>
        
        <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
          En savoir plus
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>
    </Link>
  )
}
