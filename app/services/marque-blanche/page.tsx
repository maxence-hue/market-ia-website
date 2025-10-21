'use client'

import { Users } from 'lucide-react'
import { ServicePage } from '@/components/ServicePage'

export default function MarqueBlanchePage() {
  return (
    <ServicePage
      icon={Users}
      title="Services en Marque Blanche"
      subtitle="Programme partenaires"
      description="Vous êtes une agence ou un revendeur ? Proposez nos services à vos clients sous votre propre marque et développez votre offre sans investissement technique."
      price="Sur devis"
      priceDetails="Commission attractive sur chaque vente"
      features={[
        'Revendez tous nos services sous votre marque',
        'Marges attractives (30-40%)',
        'Support technique dédié pour vos clients',
        'Plateforme de gestion partenaire',
        'Matériel marketing personnalisé',
        'Formation complète à nos services',
        'Accès prioritaire aux nouvelles offres',
        'Dashboard de suivi des ventes',
        'Facturation directe à vos clients',
        'Accompagnement commercial',
        'Pas de minimum de ventes',
        'Contrat flexible sans engagement',
      ]}
      process={[
        {
          step: '01',
          title: 'Candidature',
          description: 'Remplissez le formulaire de candidature. Nous étudions votre profil et votre activité actuelle.',
        },
        {
          step: '02',
          title: 'Onboarding',
          description: 'Formation complète à nos services, outils et processus. Accès à la plateforme partenaire.',
        },
        {
          step: '03',
          title: 'Personnalisation',
          description: 'Configuration de votre marque, création de vos supports marketing personnalisés.',
        },
        {
          step: '04',
          title: 'Lancement',
          description: 'Commencez à vendre ! Support dédié pour vous accompagner dans vos premières ventes.',
        },
      ]}
      benefits={[
        'Diversifiez votre offre sans investissement',
        'Marges attractives sur chaque vente',
        'Aucun risque technique',
        'Support client assuré par nos équipes',
        'Montez en compétences',
        'Fidélisez vos clients existants',
        'Contrat flexible',
        'Paiements rapides et sécurisés',
      ]}
      cta="Devenir partenaire"
      testimonials={[
        {
          name: 'Agence Digital+',
          role: 'Agence Web',
          quote: 'Grâce au programme marque blanche, nous avons ajouté l\'IA et l\'automatisation à notre offre sans embaucher. +40% de CA.',
          result: '+40% de chiffre d\'affaires',
        },
        {
          name: 'Consultant Pro',
          role: 'Consultant Indépendant',
          quote: 'Je propose maintenant des sites web et automatisations à mes clients. Les marges sont excellentes et le support technique impeccable.',
          result: '15K€ de CA additionnel/mois',
        },
        {
          name: 'Studio Créatif',
          role: 'Studio de Design',
          quote: 'Nous nous concentrons sur le design, Market-IA gère le développement. Partenariat parfait pour nos clients.',
          result: '20+ projets réalisés ensemble',
        },
      ]}
    />
  )
}
