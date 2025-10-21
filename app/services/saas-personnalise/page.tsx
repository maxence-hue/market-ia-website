'use client'

import { Star } from 'lucide-react'
import { ServicePage } from '@/components/ServicePage'

export default function SaaSPersonnalisePage() {
  return (
    <ServicePage
      icon={Star}
      title="SaaS Personnalisé"
      subtitle="Logiciel sur-mesure"
      description="Transformez votre idée en logiciel métier performant. De la conception au déploiement, nous créons votre solution SaaS sur-mesure."
      price="5000"
      priceDetails="MVP complet + 3 mois maintenance"
      features={[
        'Architecture scalable et sécurisée',
        'Interface utilisateur moderne et intuitive',
        'Intégrations avec vos outils existants',
        'API REST complète',
        'Authentification et gestion des rôles',
        'Paiements intégrés (Stripe)',
        'Dashboard analytics temps réel',
        'Déploiement cloud automatisé',
        'Tests automatiques (unité + intégration)',
        'Documentation technique complète',
        'Formation des utilisateurs',
        'Maintenance et évolutions continues',
      ]}
      process={[
        {
          step: '01',
          title: 'Découverte',
          description: 'Atelier de 2h pour comprendre vos besoins, workflows, pain points et définir la vision du produit.',
        },
        {
          step: '02',
          title: 'Conception',
          description: 'Architecture technique détaillée, maquettes UI/UX, stack technologique et roadmap priorisée.',
        },
        {
          step: '03',
          title: 'Développement',
          description: 'Développement agile du MVP avec sprints de 2 semaines, tests utilisateurs et itérations.',
        },
        {
          step: '04',
          title: 'Lancement',
          description: 'Déploiement en production, formation de votre équipe et documentation complète.',
        },
      ]}
      benefits={[
        'Solution 100% adaptée à vos besoins',
        'Propriété complète du code source',
        'Scalabilité illimitée',
        'Sécurité et conformité RGPD',
        'Support technique réactif',
        'Évolutions continues',
        'ROI mesurable',
        'Avantage concurrentiel unique',
      ]}
      cta="Discuter de mon projet SaaS"
      testimonials={[
        {
          name: 'StartupX',
          role: 'SaaS B2B',
          quote: 'Market-IA a transformé notre idée en un produit fonctionnel en 8 semaines. Nous avons dépassé les 1000 utilisateurs en 3 mois.',
          result: '1000+ utilisateurs en 3 mois',
        },
        {
          name: 'EntrepriseY',
          role: 'Industrie',
          quote: 'Le SaaS sur-mesure a automatisé notre processus de production. Gain de productivité de 50% et réduction des erreurs.',
          result: '50% de productivité en plus',
        },
        {
          name: 'AgenceZ',
          role: 'Services',
          quote: 'Grâce à notre plateforme SaaS, nous avons levé 500K€ et signé nos premiers clients entreprise.',
          result: 'Levée de fonds réussie',
        },
      ]}
    />
  )
}
