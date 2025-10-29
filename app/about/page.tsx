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
            Les <span className="gradient-text">Co-fondateurs</span>
          </h2>
          <p className="text-xl text-light/70 max-w-3xl mx-auto text-center mb-12">
            Une équipe de 3 experts passionnés, complémentaires dans leurs domaines, 
            unis pour propulser votre business avec l&apos;IA
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-glass p-8 text-center group hover:border-primary/50 transition-all">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/30 group-hover:border-primary transition-colors duration-300">
                <img
                  src="https://fm7yortwrlfmgjdb.public.blob.vercel-storage.com/image-maxence-vKxVHfCCQzpRh1TXxE6kWbmoXRGPPl.jpg"
                  alt="Maxence Alehause"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-display font-bold text-light mb-2">
                Maxence Alehause
              </h3>
              <p className="text-primary font-semibold mb-4">
                Co-fondateur • Stratégie & Management
              </p>
              <p className="text-light/70 leading-relaxed">
                Issu d&apos;une école de commerce, Maxence est expert en vente, finance, 
                stratégie d&apos;entreprise et management. Il transforme votre vision 
                en stratégie concrète pour maximiser la productivité et la croissance.
              </p>
            </div>

            <div className="card-glass p-8 text-center group hover:border-primary/50 transition-all">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/30 group-hover:border-primary transition-colors duration-300">
                <img
                  src="https://fm7yortwrlfmgjdb.public.blob.vercel-storage.com/portrait-hugo-dyxNs8VAjJQMlHGmzTnqeb44lNpjd9.jpg"
                  alt="Hugo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-display font-bold text-light mb-2">
                Hugo
              </h3>
              <p className="text-primary font-semibold mb-4">
                Co-fondateur • Marketing & Design
              </p>
              <p className="text-light/70 leading-relaxed">
                Expert en marketing digital, photographie, montage vidéo et UI/UX design. 
                Hugo crée des expériences visuelles captivantes qui convertissent vos 
                visiteurs en clients fidèles.
              </p>
            </div>

            <div className="card-glass p-8 text-center group hover:border-primary/50 transition-all">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/30 group-hover:border-primary transition-colors duration-300">
                <img
                  src="https://framerusercontent.com/images/wf7MIq4YOerrqKHiX9ybOtRHm8.jpg?width=393&height=392"
                  alt="Benoit"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-display font-bold text-light mb-2">
                Benoit
              </h3>
              <p className="text-primary font-semibold mb-4">
                Co-fondateur • Expert IA & Formateur
              </p>
              <p className="text-light/70 leading-relaxed">
                Spécialiste de l&apos;intelligence artificielle et formateur passionné. 
                Benoit développe des solutions IA sur-mesure et transmet son expertise 
                pour rendre l&apos;IA accessible à tous.
              </p>
            </div>
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
