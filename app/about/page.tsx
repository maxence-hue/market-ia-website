import TeamMember from '@/components/TeamMember'
import { Target, Heart, Sparkles, TrendingUp } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: 'Innovation continue',
      description: 'Nous restons à la pointe des technologies IA et web pour vous offrir le meilleur',
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: 'Accompagnement humain',
      description: 'Derrière chaque projet, une équipe dédiée qui vous écoute et vous conseille',
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: 'Excellence technique',
      description: 'Code propre, performances optimales, sécurité maximale sur tous nos projets',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: 'Transparence',
      description: 'Tarifs clairs, processus transparent, communication ouverte à chaque étape',
    },
  ]

  const process = [
    {
      step: '1',
      title: 'Écoute & Diagnostic',
      description: 'Nous prenons le temps de comprendre vos besoins et vos objectifs business',
    },
    {
      step: '2',
      title: 'Proposition sur mesure',
      description: 'Solution adaptée à votre budget et vos ambitions, sans superflu',
    },
    {
      step: '3',
      title: 'Développement agile',
      description: 'Itérations rapides, feedback continu, ajustements en temps réel',
    },
    {
      step: '4',
      title: 'Formation & Support',
      description: 'Autonomie garantie + accompagnement long terme si besoin',
    },
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            À propos de <span className="gradient-text">Market-IA</span>
          </h1>
          <p className="text-xl text-light/70 max-w-3xl mx-auto">
            Nous rendons la puissance de l&apos;IA et des automatisations accessible à toutes les entreprises
          </p>
        </div>

        {/* Vision */}
        <div className="card-glass p-12 mb-16 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">Notre Vision</h2>
          <p className="text-xl text-light/80 max-w-3xl mx-auto leading-relaxed">
            Rendre la puissance de l&apos;IA et des automatisations accessible à toutes les entreprises. 
            Accélérer leur croissance tout en réduisant leurs coûts et leur temps de gestion.
          </p>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">
            Nos <span className="gradient-text">Valeurs</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-glass p-8 text-center hover:shadow-glow transition-all duration-300">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="font-display font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-light/70 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">
            Notre <span className="gradient-text">Méthode</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((phase, index) => (
              <div key={index} className="card-glass p-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">{phase.step}</span>
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{phase.title}</h3>
                <p className="text-light/70 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">
            L&apos;<span className="gradient-text">Équipe</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember
              name="Maxence Alehause"
              role="Fondateur & Directeur Technique"
              description="Expert en développement web et IA, passionné par l'automatisation et l'innovation"
              photo="/images/team/maxence.jpg"
            />
            <TeamMember
              name="Marie-Christine"
              role="Administration & Relation Client"
              description="Gestion administrative et point de contact privilégié pour nos clients"
              photo="/images/team/marie.jpg"
            />
            <TeamMember
              name="Réseau de partenaires"
              role="Développeurs & Designers IA"
              description="Équipe étendue de spécialistes pour répondre à tous vos besoins"
              photo="/images/team/team.jpg"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="card-glass p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-light/70">Projets livrés</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">98%</div>
              <div className="text-light/70">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">24h</div>
              <div className="text-light/70">Temps de réponse</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">3 ans</div>
              <div className="text-light/70">D&apos;expérience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
