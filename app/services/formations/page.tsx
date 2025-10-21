'use client'

import { GraduationCap } from 'lucide-react'
import { ServicePage } from '@/components/ServicePage'

export default function FormationsPage() {
  return (
    <ServicePage
      icon={GraduationCap}
      title="Formations IA & Digital"
      subtitle="Formation pratique"
      description="Devenez autonome avec l'IA. Nos formations pratiques vous permettent de maîtriser les outils IA et digitaux pour développer votre activité sans dépendre de personne."
      price="290"
      priceDetails="Formation complète + accès à vie"
      features={[
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
      ]}
      process={[
        {
          step: '01',
          title: 'Fondamentaux',
          description: 'Comprenez les bases de l\'IA, du prompt engineering et des outils essentiels (ChatGPT, Claude, Midjourney).',
        },
        {
          step: '02',
          title: 'Pratique',
          description: 'Créez vos premiers projets : site web, automatisations, contenu IA, avec des exercices guidés pas à pas.',
        },
        {
          step: '03',
          title: 'Avancé',
          description: 'Maîtrisez les techniques avancées : agents IA, workflows complexes, intégrations API personnalisées.',
        },
        {
          step: '04',
          title: 'Autonomie',
          description: 'Lancez vos propres projets en toute autonomie avec le support de la communauté et des experts.',
        },
      ]}
      benefits={[
        'Devenez autonome en 4 semaines',
        'Économisez des milliers d\'euros en prestations',
        'Apprenez à votre rythme',
        'Accès à vie aux mises à jour',
        'Communauté d\'entraide active',
        'Support personnalisé inclus',
        'Certificat reconnu',
        'ROI garanti dès le 1er projet',
      ]}
      cta="Rejoindre la formation"
      testimonials={[
        {
          name: 'Marie Laurent',
          role: 'Entrepreneure',
          quote: 'J\'ai créé mon site web professionnel en 1 semaine grâce à la formation. Plus besoin de payer un développeur !',
          result: 'Site créé en autonomie en 1 semaine',
        },
        {
          name: 'David Chen',
          role: 'Consultant',
          quote: 'Les automatisations que j\'ai apprises me font gagner 10h par semaine. Formation rentabilisée dès le premier mois.',
          result: '5 automatisations déployées',
        },
        {
          name: 'Emma Petit',
          role: 'Responsable Marketing',
          quote: 'L\'IA est devenue mon super-pouvoir. Je produis 3x plus de contenu de qualité en 2x moins de temps.',
          result: 'Productivité x3 avec l\'IA',
        },
      ]}
    />
  )
}
