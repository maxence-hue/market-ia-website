import { Sparkles } from 'lucide-react'

interface ArticleSummaryProps {
  title?: string
  points?: string[]
}

export default function ArticleSummary({ 
  title = "Formation IA Var : ce qu'il faut savoir",
  points = [
    "Formations pratiques avec cas réels",
    "Accès à vie aux contenus",
    "Support personnalisé inclus"
  ]
}: ArticleSummaryProps) {
  return (
    <div className="card-glass p-8 mb-12 rounded-2xl">
      {/* Badge "À retenir" */}
      <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="font-display text-sm">À retenir</span>
      </div>

      {/* Titre du résumé */}
      <h2 className="text-2xl font-display mb-6">
        <span className="gradient-text">{title}</span>
      </h2>

      {/* Liste des points clés */}
      <ul className="space-y-4">
        {points.map((point, index) => (
          <li 
            key={index}
            className="flex items-start gap-3 group"
          >
            <span className="text-primary text-xl mt-1 group-hover:scale-110 transition-transform">
              ✓
            </span>
            <span className="text-light/80 leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
