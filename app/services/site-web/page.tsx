'use client'

import { Globe } from 'lucide-react'
import { ServicePage } from '@/components/ServicePage'

export default function SiteWebPage() {
  return (
    <ServicePage
      icon={Globe}
      title="Sites Web Professionnels"
      subtitle="Création de sites web"
      description="Des sites modernes, rapides et optimisés pour convertir vos visiteurs en clients. Design personnalisé, SEO optimisé et performances maximales."
      price="490"
      priceDetails="Site vitrine complet"
      features={[
        'Design 100% personnalisé et moderne',
        'Optimisation SEO avancée',
        'Responsive sur tous les appareils',
        'Temps de chargement ultra-rapide',
        'Formulaires de contact intégrés',
        'Hébergement premium inclus',
        'SSL et sécurité garantis',
        'Analytics et suivi des performances',
        'Maintenance et mises à jour',
        'Formation à la gestion du site',
        'Support prioritaire 24/7',
        'Conformité RGPD',
      ]}
      process={[
        {
          step: '01',
          title: 'Analyse',
          description: 'Nous analysons vos besoins, votre audience et vos objectifs business pour créer la stratégie parfaite.',
        },
        {
          step: '02',
          title: 'Design',
          description: 'Création de maquettes modernes et intuitives qui reflètent votre identité de marque.',
        },
        {
          step: '03',
          title: 'Développement',
          description: 'Développement avec les technologies les plus performantes pour un site rapide et sécurisé.',
        },
        {
          step: '04',
          title: 'Lancement',
          description: 'Mise en ligne, formation et accompagnement pour assurer votre succès.',
        },
      ]}
      benefits={[
        'Expertise technique reconnue',
        'Design unique et sur-mesure',
        'Délais de livraison respectés',
        'Support réactif et personnalisé',
        'Technologies modernes et performantes',
        'Optimisation SEO incluse',
        'Évolutions et maintenance continues',
        'Rapport qualité-prix imbattable',
      ]}
      cta="Demander un devis gratuit"
      testimonials={[
        {
          name: 'Sophie Durand',
          role: 'E-commerce Mode',
          quote: 'Market-IA a transformé notre présence en ligne. Le site est magnifique, rapide et nos ventes ont explosé.',
          result: '+250% de conversions en 3 mois',
        },
        {
          name: 'Marc Lefebvre',
          role: 'Coach Professionnel',
          quote: 'Un site professionnel qui me représente parfaitement. Je suis maintenant 1er sur Google pour mes mots-clés.',
          result: '1er sur Google en 6 semaines',
        },
        {
          name: 'Julie Martin',
          role: 'Consultante RH',
          quote: 'Investissement rentabilisé dès le premier mois. Je reçois maintenant des demandes qualifiées chaque semaine.',
          result: '40 leads qualifiés par mois',
        },
      ]}
    />
  )
}
