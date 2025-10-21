'use client'

import { GraduationCap, Check, Sparkles, ArrowRight, BookOpen, Users, Award, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function FormationsPage() {
  return (
    <div className="py-16">
      <section className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Formation pratique</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Formations <span className="gradient-text">IA & Digital</span>
          </h1>
          <p className="text-xl text-light/70 mb-8">
            Devenez autonome avec l&apos;IA. Nos formations pratiques vous permettent de maîtriser les outils IA et digitaux pour développer votre activité sans dépendre de personne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all glow">
              Rejoindre la formation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#tarifs" className="inline-flex items-center gap-2 glass hover:border-primary/60 px-8 py-4 rounded-xl font-semibold transition-all">
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>

      <section id="tarifs" className="container mx-auto px-4 mb-24">
        <div className="card-glass p-12 text-center max-w-2xl mx-auto">
          <div className="text-sm uppercase tracking-wider text-primary mb-4">À PARTIR DE</div>
          <div className="text-6xl md:text-7xl font-display font-bold gradient-text mb-4">290€</div>
          <div className="text-light/70 mb-8">Formation complète + accès à vie</div>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all glow">
            Rejoindre la formation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-24">
        <h2 className="text-4xl font-display font-bold mb-12 text-center">
          Ce que vous allez <span className="gradient-text">apprendre</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            'Formation 100% pratique avec cas réels',
            'Accès à vie aux contenus et mises à jour',
            'Groupe privé Discord exclusif',
            'Support personnalisé illimité',
            'Certificat de réussite',
            'Templates et outils prêts à l\'emploi',
            'Sessions Q&A en direct mensuelles',
            'Études de cas détaillées',
            'Exercices pratiques corrigés',
            'Ressources téléchargeables',
            'Communauté d\'entraide active',
            'Garantie satisfait ou remboursé 30j',
          ].map((feature, index) => (
            <div key={index} className="glass p-6 flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span className="text-light">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 mb-24">
        <h2 className="text-4xl font-display font-bold mb-12 text-center">
          Programme de <span className="gradient-text">formation</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { step: '01', title: 'Fondamentaux', description: 'Comprenez les bases de l\'IA, du prompt engineering et des outils essentiels (ChatGPT, Claude, Midjourney).', icon: BookOpen },
            { step: '02', title: 'Pratique', description: 'Créez vos premiers projets : site web, automatisations, contenu IA, avec des exercices guidés pas à pas.', icon: Sparkles },
            { step: '03', title: 'Avancé', description: 'Maîtrisez les techniques avancées : agents IA, workflows complexes, intégrations API personnalisées.', icon: Award },
            { step: '04', title: 'Autonomie', description: 'Lancez vos propres projets en toute autonomie avec le support de la communauté et des experts.', icon: TrendingUp },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="card-glass p-8 text-center">
                <div className="text-5xl font-display font-bold gradient-text mb-4">{item.step}</div>
                <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-light/70">{item.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="container mx-auto px-4 mb-24">
        <h2 className="text-4xl font-display font-bold mb-12 text-center">
          Témoignages <span className="gradient-text">élèves</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: 'Marie Laurent', role: 'Entrepreneure', quote: 'J\'ai créé mon site web professionnel en 1 semaine grâce à la formation. Plus besoin de payer un développeur !', result: 'Site créé en 1 semaine' },
            { name: 'David Chen', role: 'Consultant', quote: 'Les automatisations que j\'ai apprises me font gagner 10h par semaine. Formation rentabilisée dès le premier mois.', result: '5 automatisations déployées' },
            { name: 'Emma Petit', role: 'Marketing', quote: 'L\'IA est devenue mon super-pouvoir. Je produis 3x plus de contenu de qualité en 2x moins de temps.', result: 'Productivité x3' },
          ].map((testimonial, index) => (
            <div key={index} className="card-glass p-8">
              <div className="text-4xl mb-4">🎓</div>
              <p className="text-light/80 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
              <div className="border-t border-white/10 pt-4">
                <div className="font-semibold text-primary mb-1">{testimonial.result}</div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-light/60">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="card-glass p-12 text-center max-w-4xl mx-auto">
          <Users className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Prêt à devenir <span className="gradient-text">autonome</span> ?
          </h2>
          <p className="text-xl text-light/70 mb-8">
            Rejoignez +200 entrepreneurs qui maîtrisent l&apos;IA
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all glow">
            Rejoindre la formation
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  )
}
