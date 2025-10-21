import { Check, Sparkles } from 'lucide-react'
import Link from 'next/link'

interface Feature {
  text: string
  included: boolean
}

interface Subscription {
  title: string
  subtitle: string
  price: number
  activation: number
  popular?: boolean
  features: Feature[]
  cta: string
  href: string
  savings?: {
    '12_months': string
    '24_months': string
  }
}

export default function SubscriptionCard({ subscription }: { subscription: Subscription }) {
  return (
    <div className={`relative card-glass p-8 hover:shadow-glow transition-all duration-300 ${
      subscription.popular ? 'ring-2 ring-primary' : ''
    }`}>
      {subscription.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary-light px-4 py-1 rounded-full flex items-center gap-1">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-semibold">POPULAIRE</span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-display font-bold text-light mb-2">{subscription.title}</h3>
        <p className="text-light/70 text-sm mb-4">{subscription.subtitle}</p>
        
        <div className="mb-2">
          <span className="text-4xl font-bold gradient-text">{subscription.price}€</span>
          <span className="text-light/70">/mois</span>
        </div>
        
        <div className="text-sm text-light/60">
          Frais d&apos;activation : {subscription.activation}€
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {subscription.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
              feature.included ? 'text-primary' : 'text-light/30'
            }`} />
            <span className={feature.included ? 'text-light/90' : 'text-light/40 line-through'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {subscription.savings && (
        <div className="mb-6 p-4 bg-primary/10 rounded-lg space-y-1 text-sm">
          <div className="text-light/80">💰 12 mois : {subscription.savings['12_months']}</div>
          <div className="text-light/80">💰 24 mois : {subscription.savings['24_months']}</div>
        </div>
      )}

      <Link href={subscription.href} className="block w-full btn-primary text-center">
        {subscription.cta}
      </Link>
    </div>
  )
}
