import { LucideIcon } from 'lucide-react'

interface AddOn {
  title: string
  category: string
  setup_price?: number | string
  monthly_price?: number
  description: string
  icon: string
}

export default function AddOnCard({ addon }: { addon: AddOn }) {
  return (
    <div className="card-glass p-6 hover:shadow-glow transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-display font-semibold text-light mb-1">{addon.title}</h3>
          <p className="text-sm text-primary/70">{addon.category}</p>
        </div>
      </div>

      <p className="text-light/70 text-sm mb-4">{addon.description}</p>

      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        {addon.setup_price && (
          <div className="text-sm">
            <span className="text-light/50">Setup : </span>
            <span className="text-light font-semibold">
              {typeof addon.setup_price === 'number' ? `${addon.setup_price}€` : addon.setup_price}
            </span>
          </div>
        )}
        {addon.monthly_price && (
          <div className="text-sm">
            <span className="text-primary font-bold text-lg">{addon.monthly_price}€</span>
            <span className="text-light/50">/mois</span>
          </div>
        )}
        {!addon.monthly_price && addon.setup_price && (
          <div className="text-sm">
            <span className="text-primary font-bold text-lg">
              {typeof addon.setup_price === 'number' ? `${addon.setup_price}€` : addon.setup_price}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
