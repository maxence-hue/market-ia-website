'use client'

import { Zap } from 'lucide-react'
import { ServicePage } from '@/components/ServicePage'

export default function AutomatisationsPage() {
  return (
    <ServicePage
      icon={Zap}
      title="Automatisations & Agents IA"
      subtitle="Automatisation intelligente"
      description="Gagnez jusqu'à 20h par semaine en automatisant vos tâches répétitives. Agents IA, workflows intelligents et intégrations sur-mesure."
      price="790"
      priceDetails="Audit + 3 automatisations"
      features={[
        'Audit complet de vos processus',
        'Identification des tâches automatisables',
        'Agents IA conversationnels',
        'Workflows intelligents (Make, Zapier, n8n)',
        'Intégrations API sur-mesure',
        'Automatisation CRM et prospection',
        'Génération de contenu IA',
        'Scraping et enrichissement de données',
        'Formation de votre équipe',
        'Documentation complète',
        'Support continu et optimisations',
        'ROI garanti sous 6 mois',
      ]}
      process={[
        {
          step: '01',
          title: 'Diagnostic',
          description: 'Analyse de vos processus actuels et identification des opportunités d\'automatisation les plus rentables.',
        },
        {
          step: '02',
          title: 'Proposition',
          description: 'Architecture technique détaillée avec estimation du ROI et roadmap priorisée.',
        },
        {
          step: '03',
          title: 'Développement',
          description: 'Mise en place des automatisations avec tests rigoureux et intégrations complètes.',
        },
        {
          step: '04',
          title: 'Formation',
          description: 'Formation de votre équipe et documentation pour une autonomie maximale.',
        },
      ]}
      benefits={[
        'Gagnez jusqu\'à 20h par semaine',
        'ROI moyen de 400% en 6 mois',
        'Zéro erreur humaine',
        'Disponibilité 24/7',
        'Scalabilité sans embauche',
        'Expertise Make, Zapier, n8n',
        'Agents IA de pointe (GPT-4, Claude)',
        'Support réactif et évolutions',
      ]}
      cta="Demander un diagnostic gratuit"
      testimonials={[
        {
          name: 'Thomas Bernard',
          role: 'Agence Marketing',
          quote: 'Les automatisations ont transformé notre agence. Nous avons récupéré 15h par semaine que nous consacrons maintenant à nos clients.',
          result: '15h/semaine économisées',
        },
        {
          name: 'Laura Keller',
          role: 'SaaS B2B',
          quote: 'Pipeline de prospection entièrement automatisé. Nous générons maintenant des leads qualifiés pendant que nous dormons.',
          result: '80% de tâches automatisées',
        },
        {
          name: 'David Martinez',
          role: 'E-commerce',
          quote: 'L\'automatisation de notre service client avec l\'IA a réduit notre temps de réponse de 24h à 2 minutes. ROI incroyable.',
          result: 'ROI de 400% en 6 mois',
        },
      ]}
    />
  )
}
