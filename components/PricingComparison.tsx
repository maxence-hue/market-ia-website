'use client'

import { Check, X } from 'lucide-react'

interface ComparisonData {
  feature: string
  essentiel: string | boolean
  business: string | boolean
  ecommerce: string | boolean
  growthPlus: string | boolean
}

const comparisonData: ComparisonData[] = [
  { feature: 'Prix/mois', essentiel: '99€', business: '179€', ecommerce: '289€', growthPlus: '499€' },
  { feature: 'Frais activation', essentiel: '290€', business: '390€', ecommerce: '590€', growthPlus: '790€' },
  { feature: 'Pages incluses', essentiel: '1-5', business: '1-8', ecommerce: 'Boutique ≤100', growthPlus: 'Illimité' },
  { feature: 'Design', essentiel: 'Template premium', business: 'Custom semi', ecommerce: 'Custom complet', growthPlus: 'Premium + UX' },
  { feature: 'Blog/CMS', essentiel: false, business: true, ecommerce: true, growthPlus: true },
  { feature: 'Google Business', essentiel: false, business: true, ecommerce: true, growthPlus: true },
  { feature: 'Prise RDV', essentiel: false, business: true, ecommerce: true, growthPlus: true },
  { feature: 'E-commerce', essentiel: false, business: false, ecommerce: true, growthPlus: true },
  { feature: 'AB Testing', essentiel: false, business: false, ecommerce: false, growthPlus: '1/trim.' },
  { feature: 'Contenu/mois', essentiel: false, business: false, ecommerce: false, growthPlus: '2 articles' },
  { feature: 'Modifs incluses/mois', essentiel: '15 min', business: '45 min', ecommerce: '60 min', growthPlus: '90 min' },
  { feature: 'SLA Support', essentiel: '72h', business: '48h', ecommerce: '24-48h', growthPlus: '24h' },
  { feature: 'Call mensuel', essentiel: false, business: false, ecommerce: false, growthPlus: '30 min' },
]

export default function PricingComparison() {
  const renderCell = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-primary mx-auto" />
      ) : (
        <X className="w-5 h-5 text-light/30 mx-auto" />
      )
    }
    return <span className="text-light/90">{value}</span>
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left py-4 px-4 text-light font-display font-semibold sticky left-0 bg-dark-surface">
              Fonctionnalité
            </th>
            <th className="text-center py-4 px-4 text-light font-display font-semibold">Essentiel</th>
            <th className="text-center py-4 px-4 text-primary font-display font-semibold">Business ⭐</th>
            <th className="text-center py-4 px-4 text-light font-display font-semibold">E-commerce</th>
            <th className="text-center py-4 px-4 text-light font-display font-semibold">Growth+</th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map((row, index) => (
            <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
              <td className="py-4 px-4 text-light/70 sticky left-0 bg-dark-surface">
                {row.feature}
              </td>
              <td className="py-4 px-4 text-center">{renderCell(row.essentiel)}</td>
              <td className="py-4 px-4 text-center bg-primary/5">{renderCell(row.business)}</td>
              <td className="py-4 px-4 text-center">{renderCell(row.ecommerce)}</td>
              <td className="py-4 px-4 text-center">{renderCell(row.growthPlus)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
