'use client'

import Link from 'next/link'
import { ArrowRight, Check, Sparkles, TrendingUp, Shield, Clock, Users, Globe, Zap, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

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
    title: 'Automatisations & Agents IA',
    price: 'Sur devis',
    description: 'Gagnez jusqu\'à 20h par semaine en automatisant vos tâches répétitives. Guide complet des meilleurs outils et stratégies d\'automatisation.',
    features: [
      'Audit complet de vos processus actuels',
      'Identification des tâches automatisables',
      'Mise en place d\'automatisations sur-mesure',
      'Formation de votre équipe aux nouveaux outils',
      'Support continu et optimisations',
    ],
    icon: Zap,
    href: '/services/automatisations',
    results: [
      { name: 'Thomas B., Agence', result: '15h/semaine économisées' },
      { name: 'Laura K., SaaS', result: '80% de tâches automatisées' },
      { name: 'David M., E-commerce', result: 'ROI de 400% en 6 mois' },
    ],
    image: '/images/automation.jpg',
  },
  {
    title: 'SaaS Personnalisé',
    price: '5000€',
    description: 'Transformez votre idée en logiciel métier performant. De la conception au déploiement, nous créons votre solution SaaS sur-mesure.',
    features: [
      'Architecture scalable et sécurisée',
      'Interface utilisateur moderne et intuitive',
      'Intégrations avec vos outils existants',
      'Déploiement cloud automatisé',
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
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

      {/* Section Nos Offres - Design Figma */}
      <section id="offres" className="py-24 bg-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Nos <span className="gradient-text">Offres</span>
            </h2>
            <p className="text-xl text-light/70 max-w-3xl mx-auto">
              Des solutions complètes pour propulser votre business dans l&apos;ère de l&apos;IA
            </p>
          </motion.div>

          <div className="space-y-32">
            {offers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Contenu */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    {/* Badge Prix */}
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary rounded-2xl px-6 py-3 mb-6">
                      <offer.icon className="w-6 h-6 text-primary" />
                      <span className="text-2xl font-display font-bold text-light">À PARTIR DE</span>
                      <span className="text-3xl font-display font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                        {offer.price}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-display font-bold text-light mb-4">
                      {offer.title}
                    </h3>

                    <p className="text-lg text-light/80 mb-8">
                      {offer.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-4 mb-8">
                      {offer.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <span className="text-light/90">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={offer.href}
                      className="group btn-primary inline-flex items-center gap-2"
                    >
                      Découvrir {offer.title}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Image placeholder */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <offer.icon className="w-32 h-32 text-primary/30" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Résultats clients */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="mt-12"
                >
                  <div className="card-glass p-8">
                    <div className="flex items-center gap-2 mb-6">
                      <Star className="w-5 h-5 text-primary" />
                      <h4 className="text-xl font-display font-bold text-light">Résultats clients</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {offer.results.map((result, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-sm font-semibold text-light mb-2">{result.name}</div>
                          <div className="text-primary font-medium">{result.result}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-dark-surface">
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
