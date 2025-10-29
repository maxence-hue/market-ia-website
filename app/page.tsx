'use client'

import Link from 'next/link'
import { ArrowRight, Check, Sparkles, TrendingUp, Shield, Clock, Users, Globe, Zap, Star, GraduationCap, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'
import { OfferSection } from '@/components/OfferSection'
import { WebsiteIllustration } from '@/components/illustrations/WebsiteIllustration'
import { AutomationIllustration } from '@/components/illustrations/AutomationIllustration'
import { FormationIllustration } from '@/components/illustrations/FormationIllustration'

const offers = [
  {
    title: 'Sites Web Personnalisés',
    price: '490€',
    description: 'Créez une présence en ligne qui convertit. Nos sites web sur-mesure allient design moderne et performance technique pour transformer vos visiteurs en clients fidèles.',
    features: [
      'Design 100% personnalisé reflétant votre identité',
      'Optimisation SEO pour être visible sur Google',
      'Responsive sur tous les appareils (mobile, tablette, desktop)',
      'Temps de chargement ultra-rapide pour une meilleure expérience',
      'Formulaires de contact et intégrations sur-mesure',
    ],
    icon: Globe,
    href: '/services/site-web',
    results: [
      { name: 'Sophie Durand, E-commerce', result: '+250% de conversions en 3 mois' },
      { name: 'Marc Lefebvre, Coach', result: '1er sur Google en 6 semaines' },
      { name: 'Julie Martin, Consultante', result: '40 leads qualifiés par mois' },
    ],
    image: '/images/web-design.jpg',
  },
  {
    title: 'Automatisations IA',
    price: 'Dès 390€',
    description: 'Des workflows IA intelligents qui connectent vos outils, envoient vos messages, gèrent vos clients et remplissent vos bases de données — automatiquement.',
    features: [
      'Workflows intelligents sur-mesure',
      'Connexion de tous vos outils (Make, Zapier, n8n)',
      'Automatisation marketing, vente et admin',
      'Support client automatisé avec IA',
      'Démo interactive en temps réel',
    ],
    icon: Zap,
    href: '/services/automatisations-ia',
    results: [
      { name: 'Thomas B., Agence', result: '15h/semaine économisées' },
      { name: 'Laura K., SaaS', result: '80% de tâches automatisées' },
      { name: 'David M., E-commerce', result: 'ROI de 400% en 6 mois' },
    ],
    image: '/images/automation.jpg',
  },
  {
    title: 'SaaS Personnalisé',
    price: 'Sur devis',
    description: 'Transformez votre entreprise avec votre propre SaaS sur mesure. Automatisez vos processus, centralisez vos données. Hébergé en Europe avec Mistral AI.',
    features: [
      'Architecture scalable et sécurisée (RGPD)',
      'Interface utilisateur moderne et intuitive',
      'IA intégrée (GPT, Mistral, modèles propriétaires)',
      'Hébergement souverain en Europe',
      'Maintenance et évolutions continues',
    ],
    icon: Star,
    href: '/services/saas-personnalise',
    results: [
      { name: 'StartupX', result: '1000+ utilisateurs en 3 mois' },
      { name: 'EntrepriseY', result: '50% de productivité en plus' },
      { name: 'AgenceZ', result: 'Levée de fonds réussie' },
    ],
    image: '/images/saas.jpg',
  },
]



export default function Home() {
  return (
    <>
      {/* Hero Section - Nouveau design Figma */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background avec particules */}
        <div className="absolute inset-0 bg-stars opacity-50" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Badge confiance */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-light">+200 entreprises nous font confiance</span>
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight"
            >
              L&apos;alliance parfaite entre{' '}
              <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
                humain
              </span>
              {' '}et{' '}
              <span className="bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
                intelligence artificielle
              </span>
              .
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-light/70 mb-12 max-w-3xl mx-auto"
            >
              Des sites, automatisations et formations qui travaillent à votre place
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Link
                href="#offres"
                className="group btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
              >
                Découvrir Market-IA
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="btn-secondary inline-flex items-center gap-2 text-lg px-8 py-4"
              >
                Découvrir nos offres
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              <div className="card-glass p-6">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-4xl font-display font-bold text-light mb-2">500+</div>
                <div className="text-light/70">Projets réalisés</div>
              </div>
              <div className="card-glass p-6">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-4xl font-display font-bold text-light mb-2">98%</div>
                <div className="text-light/70">Satisfaction client</div>
              </div>
              <div className="card-glass p-6">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-4xl font-display font-bold text-light mb-2">24/7</div>
                <div className="text-light/70">Support disponible</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Nos Offres - Composant OfferSection */}
      <div id="offres">
        <div className="text-center py-20 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-4"
          >
            Nos <span className="gradient-text">Offres</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-light/70 max-w-3xl mx-auto"
          >
            Des solutions complètes pour propulser votre business dans l&apos;ère de l&apos;IA
          </motion.p>
        </div>

        <OfferSection
          icon={GraduationCap}
          title="Formations IA & Digital"
          description="Devenez autonome avec l'IA. Nos formations pratiques vous permettent de maîtriser les outils IA et digitaux pour développer votre activité sans dépendre de personne."
          startingPrice="290"
          benefits={[
            'Formation 100% pratique avec cas réels',
            'Accès à vie aux contenus et mises à jour',
            'Groupe privé et support personnalisé',
            'Certificat de réussite',
            'Templates et outils prêts à l\'emploi',
          ]}
          references={[
            { name: 'Marie Laurent, Entrepreneure', result: 'Site créé en autonomie en 1 semaine' },
            { name: 'David Chen, Consultant', result: '5 automatisations déployées' },
            { name: 'Emma Petit, Marketing', result: 'Productivité x3 avec l\'IA' },
          ]}
          servicePage="/services/formations"
          illustration={<FormationIllustration />}
        />

        <OfferSection
          icon={Zap}
          title="Automatisations IA"
          description="Des workflows IA intelligents qui automatisent vos tâches pendant que vous travaillez"
          startingPrice="390"
          benefits={[
            'Workflows intelligents sur-mesure (Make, Zapier, n8n)',
            'Connexion automatique de tous vos outils',
            'Automatisation marketing, vente et admin',
            'Support client avec IA',
            'Démo interactive en temps réel',
          ]}
          references={[
            { name: 'Thomas B., Agence', result: '15h/semaine économisées' },
            { name: 'Laura K., SaaS', result: '80% de tâches automatisées' },
            { name: 'David M., E-commerce', result: 'ROI de 400% en 6 mois' },
          ]}
          servicePage="/services/automatisations-ia"
          illustration={<AutomationIllustration />}
          reversed
        />

        <OfferSection
          icon={Star}
          title="SaaS Personnalisé"
          description="Transformez votre entreprise avec votre propre SaaS sur mesure. Automatisez vos processus, centralisez vos données, hébergé en Europe avec IA intégrée."
          startingPrice="Sur devis"
          benefits={[
            'Architecture scalable et sécurisée (RGPD)',
            'Interface utilisateur moderne et intuitive',
            'IA intégrée (GPT, Mistral, modèles propriétaires)',
            'Hébergement souverain en Europe (OVH, Scaleway)',
            'Maintenance et évolutions continues',
          ]}
          references={[
            { name: 'StartupX', result: '1000+ utilisateurs en 3 mois' },
            { name: 'EntrepriseY', result: '50% de productivité en plus' },
            { name: 'AgenceZ', result: 'Levée de fonds réussie' },
          ]}
          servicePage="/services/saas-personnalise"
          illustration={<AutomationIllustration />}
        />

        <OfferSection
          icon={Globe}
          title="Sites Web Personnalisés"
          description="Créez une présence en ligne qui convertit. Nos sites web sur-mesure allient design moderne et performance technique pour transformer vos visiteurs en clients fidèles."
          startingPrice="99"
          benefits={[
            'Design 100% personnalisé reflétant votre identité',
            'Optimisation SEO pour être visible sur Google',
            'Responsive sur tous les appareils (mobile, tablette, desktop)',
            'Temps de chargement ultra-rapide pour une meilleure expérience',
            'Formules par abonnement dès 99€/mois',
          ]}
          references={[
            { name: 'Sophie Durand, E-commerce', result: '+250% de conversions en 3 mois' },
            { name: 'Marc Lefebvre, Coach', result: '1er sur Google en 6 semaines' },
            { name: 'Julie Martin, Consultante', result: '40 leads qualifiés par mois' },
          ]}
          servicePage="/services/site-internet"
          illustration={<WebsiteIllustration />}
          reversed
        />

        <OfferSection
          icon={Rocket}
          title="Landing Page IA"
          description="Une page conçue pour convertir. Optimisation automatique, A/B testing IA, livrée en 72h."
          startingPrice="199"
          benefits={[
            'Conception IA et structure optimale',
            'Design Webflow ou Next.js responsive',
            'Optimisation SEO et conversion',
            'Livrée en 72h, prête pour vos campagnes',
            'Intégrations CRM et tracking disponibles',
          ]}
          references={[
            { name: 'StartupY', result: '+37% de leads générés' },
            { name: 'AgenceX', result: 'Taux de conversion x2' },
            { name: 'E-commerceZ', result: '150 leads/mois' },
          ]}
          servicePage="/services/landing-page-ia"
          illustration={<AutomationIllustration />}
        />
      </div>

      {/* Section Qui sommes-nous */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Qui <span className="gradient-text">sommes-nous</span> ?
            </h2>
            <p className="text-xl text-light/70 max-w-3xl mx-auto">
              Une équipe de 3 co-fondateurs passionnés, experts dans leurs domaines, 
              unis pour propulser votre business avec l&apos;IA
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Maxence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-glass p-8 text-center group hover:border-primary/50 transition-all"
            >
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/30 group-hover:border-primary transition-all">
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
            </motion.div>

            {/* Hugo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card-glass p-8 text-center group hover:border-primary/50 transition-all"
            >
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/30 group-hover:border-primary transition-all">
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
            </motion.div>

            {/* Benoit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="card-glass p-8 text-center group hover:border-primary/50 transition-all"
            >
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/30 group-hover:border-primary transition-all">
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
            </motion.div>
          </div>

          {/* CTA sous l'équipe */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-light/60 mb-6">
              Une équipe complémentaire pour un accompagnement complet
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 btn-secondary px-8 py-4"
            >
              En savoir plus sur notre histoire
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Prêt à transformer votre business ?
              </h2>
              <p className="text-xl text-light/70 mb-8">
                Discutons de votre projet et trouvons la solution parfaite pour vous
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  Demander un devis gratuit
                </Link>
                <Link href="/about" className="btn-secondary text-lg px-8 py-4">
                  En savoir plus sur nous
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
