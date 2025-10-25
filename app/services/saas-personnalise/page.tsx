'use client'

import Link from 'next/link'
import { ArrowRight, Check, Sparkles, TrendingUp, Shield, Clock, Users, Globe, Zap, Star, CheckCircle2, Award, Rocket, Target, BookOpen, BarChart, Package, Brain, Network, ArrowRightLeft, MessageSquare, FileText, Calendar, Mail, Bell, Play, Lock, Database, Settings, Layers, Code } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function SaasPersonnalise() {
  useEffect(() => {
    document.title = 'Création SaaS Personnalisé | Logiciel sur Mesure avec IA'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Créez votre propre SaaS sur mesure avec IA. Automatisez vos processus, centralisez vos données. Hébergement sécurisé en Europe, conforme RGPD.')
    }
  }, [])

  return (
    <>
      {/* SECTION 1 - HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-stars opacity-50" />
        
        {/* Animation flux de données */}
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
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight"
            >
              🚀 Transformez votre entreprise avec{' '}
              <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
                votre propre SaaS sur mesure
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-light/90 mb-8 max-w-4xl mx-auto font-semibold"
            >
              Automatisez vos processus, centralisez vos données et créez vos propres outils internes — sans dépendre de solutions tierces.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-light/80 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Imaginez une application parfaitement adaptée à votre façon de travailler. Un logiciel interne qui fluidifie vos échanges, automatise vos tâches répétitives et vous fait gagner plusieurs heures par semaine. Chez Market-IA, nous concevons des <strong className="text-primary">SaaS personnalisés, sécurisés et hébergés en Europe</strong>, propulsés par l&apos;intelligence artificielle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <Link
                href="/contact"
                className="group bg-primary hover:bg-primary-dark text-white font-bold px-10 py-5 rounded-xl transition-all duration-300 hover:shadow-glow inline-flex items-center gap-3 text-lg"
              >
                Créer mon SaaS sur mesure
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-primary font-semibold text-lg"
            >
              Votre entreprise, augmentée par l&apos;IA.
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - POURQUOI CRÉER SON PROPRE SAAS */}
      <section className="py-24 bg-dark-surface">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              💡 Quand la productivité dépend de vos outils, <span className="gradient-text">ne laissez pas les autres les contrôler</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-xl text-light/90 mb-8 text-center leading-relaxed"
            >
              Les entreprises modernes ne se contentent plus d&apos;utiliser des logiciels standards. Elles créent leurs propres outils, exactement adaptés à leur métier.
            </motion.p>

            <div className="bg-dark-surface/90 border-2 border-primary/30 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-light mb-6">Un SaaS personnalisé vous permet de :</h3>
              <ul className="space-y-4">
                {[
                  'Centraliser vos données dans un espace unique et cohérent',
                  'Automatiser vos processus internes (facturation, suivi client, production, RH…)',
                  'Éliminer les pertes de temps liées aux exports, aux doublons et aux outils incompatibles',
                  'Créer une expérience fluide et intuitive pour votre équipe',
                  'Sécuriser vos données sans dépendre de plateformes américaines'
                ].map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
                    className="flex items-start gap-3 text-lg text-light/90"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - BÉNÉFICES CONCRETS */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              📈 Le sur-mesure, c&apos;est la performance <span className="gradient-text">sans friction</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                title: 'Automatisation totale',
                description: 'Vos process répétitifs deviennent des actions automatiques — sans erreur, sans oubli.',
                icon: Zap
              },
              {
                title: 'Simplicité d\'usage',
                description: 'Une interface pensée pour vos équipes, et non l\'inverse.',
                icon: Users
              },
              {
                title: 'Pilotage en temps réel',
                description: 'Toutes vos données, indicateurs et performances disponibles en un clic.',
                icon: BarChart
              },
              {
                title: 'Évolutivité continue',
                description: 'Votre SaaS grandit avec vous. Ajoutez, modifiez, connectez sans tout reconstruire.',
                icon: Rocket
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                className="bg-dark-surface/90 border-2 border-primary/30 rounded-xl p-8 hover:border-primary hover:shadow-glow transition-all"
              >
                <benefit.icon className="w-14 h-14 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-light mb-3">{benefit.title}</h3>
                <p className="text-light/80 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - SOUVERAINETÉ DES DONNÉES */}
      <section className="py-24 bg-dark-surface">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-center">
              🇪🇺 Hébergement sécurisé et souverain : <span className="gradient-text">vos données restent en Europe</span>
            </h2>

            <div className="bg-dark-surface/90 border-2 border-primary/30 rounded-2xl p-8 md:p-12 mt-12">
              <p className="text-xl text-light/90 mb-6 leading-relaxed">
                La confidentialité et la souveraineté numérique sont au cœur de nos priorités. Chaque SaaS conçu par Market-IA est hébergé sur des <strong className="text-primary">infrastructures européennes conformes au RGPD</strong>, garantissant la protection totale de vos informations.
              </p>

              <p className="text-xl text-light/90 mb-6 leading-relaxed">
                Nous collaborons notamment avec des technologies et partenaires comme <strong className="text-primary">Mistral AI</strong>, une référence française en matière de performance et de respect des données.
              </p>

              <div className="bg-primary/10 border-2 border-primary rounded-xl p-6 mt-8">
                <div className="flex items-center gap-4 mb-4">
                  <Shield className="w-12 h-12 text-primary" />
                  <div>
                    <p className="text-2xl font-bold text-light">Vos données ne traversent jamais les frontières.</p>
                    <p className="text-lg text-light/80">Elles vous appartiennent, intégralement.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-light/60">Powered by Mistral AI – EU Hosted</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 - EXPERTISE MARKET-IA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              🤖 Une équipe hybride entre <span className="gradient-text">ingénierie et intelligence artificielle</span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: 'Développement SaaS moderne',
                  items: ['React', 'Next.js', 'Supabase', 'PostgreSQL', 'API REST/GraphQL'],
                  icon: Code
                },
                {
                  title: 'Intelligence Artificielle',
                  items: ['GPT', 'Mistral', 'Modèles propriétaires', 'Automatisation logique métier'],
                  icon: Brain
                },
                {
                  title: 'Agilité No-Code',
                  items: ['Make', 'n8n', 'Webflow', 'Intégrations rapides'],
                  icon: Layers
                }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
                  className="bg-dark-surface/90 border-2 border-primary/30 rounded-xl p-6"
                >
                  <tech.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-light mb-3">{tech.title}</h3>
                  <ul className="space-y-1 text-light/80 text-sm">
                    {tech.items.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="bg-dark-surface/90 border-2 border-primary/30 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-light mb-6">Notre mission :</h3>
              <p className="text-xl text-light/90 leading-relaxed mb-6">
                Créer des outils <strong className="text-primary">puissants, élégants, et simples d&apos;usage</strong>, même pour les équipes non techniques.
              </p>
              <p className="text-lg text-light/80 leading-relaxed">
                Chaque projet SaaS démarre par un audit des flux internes, une conception modulaire et un déploiement progressif. Vous obtenez un outil vivant, qui s&apos;adapte à vos besoins sans jamais les contraindre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - CAS D'USAGE */}
      <section className="py-24 bg-dark-surface">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              🧠 Des cas d&apos;usage concrets, <span className="gradient-text">inspirés de vos métiers</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
            {[
              {
                title: 'Gestion interne',
                items: ['Suivi des projets', 'Interventions', 'Documents', 'Plannings', 'Alertes'],
                icon: Settings
              },
              {
                title: 'Facturation & devis',
                items: ['Génération automatique', 'Envoi', 'Relances', 'Tableaux de bord'],
                icon: FileText
              },
              {
                title: 'CRM intelligent',
                items: ['Scoring des leads', 'Notifications', 'Analyse performance'],
                icon: Target
              },
              {
                title: 'Production & logistique',
                items: ['Suivi des chantiers', 'Traçabilité', 'Tickets automatisés'],
                icon: Package
              },
              {
                title: 'Ressources humaines',
                items: ['Onboarding', 'Gestion absences', 'Fiches de poste dynamiques'],
                icon: Users
              },
              {
                title: 'Support & service client',
                items: ['Chat IA intégré', 'Tickets', 'Historique centralisé'],
                icon: MessageSquare
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
                className="bg-dark-surface/90 border-2 border-primary/30 rounded-xl p-6 hover:border-primary hover:shadow-glow transition-all"
              >
                <useCase.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-light mb-3">{useCase.title}</h3>
                <ul className="space-y-1 text-light/80 text-sm">
                  {useCase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-primary/10 border-2 border-primary rounded-2xl p-8 text-center">
            <p className="text-2xl font-bold text-light italic">
              &ldquo;Un bon SaaS ne vous fait pas travailler plus. Il fait travailler votre entreprise à votre place.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 - MÉTHODOLOGIE */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              🛠️ Une méthode claire, <span className="gradient-text">du concept à la livraison</span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {[
                { title: 'Audit & analyse IA', description: 'Compréhension de vos process internes', icon: Brain, step: 1 },
                { title: 'Architecture & design UX', description: 'Structure des bases et interfaces', icon: Layers, step: 2 },
                { title: 'Développement agile', description: 'Modules livrés en continu', icon: Code, step: 3 },
                { title: 'Connexion aux outils existants', description: 'Compatibilité totale (API, Google, Notion, CRM…)', icon: Network, step: 4 },
                { title: 'Formation & accompagnement', description: 'Prise en main complète par vos équipes', icon: Users, step: 5 },
                { title: 'Suivi & évolution', description: 'Amélioration continue grâce à nos modèles IA', icon: TrendingUp, step: 6 }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
                  className="relative bg-dark-surface/90 border-2 border-primary/30 rounded-xl p-6 hover:border-primary transition-all"
                >
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-light mb-2">{step.title}</h3>
                      <p className="text-light/80">{step.description}</p>
                    </div>
                    <step.icon className="w-12 h-12 text-primary/40" />
                  </div>
                  {index < 5 && (
                    <div className="absolute left-8 top-full w-0.5 h-6 bg-primary/30" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 - SÉCURITÉ & CONFORMITÉ */}
      <section className="py-24 bg-dark-surface">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-center">
              🔒 Une architecture <span className="gradient-text">fiable, conforme et durable</span>
            </h2>

            <div className="bg-dark-surface/90 border-2 border-primary/30 rounded-2xl p-8 md:p-12 mt-12">
              <p className="text-xl text-light/90 mb-8 leading-relaxed">
                Nos solutions sont pensées dès la conception pour répondre aux exigences de sécurité les plus strictes :
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'Hébergement RGPD by design, sur serveurs européens',
                  'Sauvegardes chiffrées et automatisées',
                  'Audit de sécurité continu (API & authentification)',
                  'Gestion des accès hiérarchiques et traçabilité complète',
                  'Modèles IA exécutés en local ou en cloud souverain (Mistral, OVHcloud, Scaleway)'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
                    className="flex items-start gap-3 text-lg text-light/90"
                  >
                    <Lock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="bg-primary/10 border-2 border-primary rounded-xl p-6">
                <p className="text-xl font-bold text-light text-center">
                  La donnée est la nouvelle ressource stratégique. Nous faisons en sorte qu&apos;elle reste entre vos mains.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 10 - CTA FINAL */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Votre SaaS sur mesure <span className="gradient-text">commence ici</span>
            </h2>
            <p className="text-xl text-light/90 mb-4">
              Ne vous adaptez plus aux outils existants — créez le vôtre.
            </p>
            <p className="text-lg text-light/80 mb-12">
              L&apos;intelligence artificielle devient votre atout le plus productif.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white font-bold px-10 py-5 rounded-xl transition-all inline-flex items-center justify-center gap-3 text-lg">
                Discuter de mon projet SaaS
                <Rocket className="w-6 h-6" />
              </Link>
              <Link href="/contact" className="bg-dark-surface/80 hover:bg-dark-lighter border-2 border-primary/40 hover:border-primary text-white font-bold px-10 py-5 rounded-xl transition-all text-lg">
                Planifier une démo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 11 - ARTICLE SEO */}
      <section className="py-24 bg-dark-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
                Pourquoi créer son propre SaaS personnalisé est <span className="gradient-text">la clé de la productivité en 2025</span>
              </h2>
            </motion.div>

            <div className="bg-dark-surface/90 border-2 border-primary/30 rounded-2xl p-8 md:p-12 space-y-8 text-light/80 leading-relaxed">
              <div>
                <h3 className="text-2xl font-bold text-light mb-4">Introduction</h3>
                <p>
                  Les entreprises ne veulent plus s&apos;adapter aux logiciels — elles veulent des logiciels qui s&apos;adaptent à elles. En 2025, la <strong>création de SaaS personnalisé</strong> devient un levier stratégique majeur pour toute organisation cherchant à optimiser ses process internes et gagner en compétitivité.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-light mb-4">1️⃣ Qu&apos;est-ce qu&apos;un SaaS personnalisé ?</h3>
                <p>
                  Un <strong>SaaS personnalisé</strong> est un outil interne sur mesure, hébergé en ligne, conçu spécifiquement pour une équipe ou un métier précis. Contrairement aux solutions génériques, il répond exactement à vos besoins sans compromis.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-light mb-4">2️⃣ Les limites des solutions génériques</h3>
                <p>Les ERP, CRM ou outils no-code standards présentent plusieurs inconvénients :</p>
                <ul className="space-y-2 ml-6 list-disc mt-4">
                  <li>Fonctionnalités inutiles qui complexifient l&apos;utilisation</li>
                  <li>Adaptation forcée de vos processus aux contraintes de l&apos;outil</li>
                  <li>Coûts récurrents élevés pour des features non utilisées</li>
                  <li>Dépendance à des plateformes tierces</li>
                  <li>Données hébergées hors Europe</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-light mb-4">3️⃣ Les bénéfices du sur-mesure</h3>
                <ul className="space-y-3 ml-6 list-disc">
                  <li><strong>Gain de productivité massif</strong> : élimination des frictions et automatisation totale</li>
                  <li><strong>Intégration de l&apos;IA</strong> : workflows intelligents et décisions automatisées</li>
                  <li><strong>Suppression des doublons</strong> : une seule source de vérité pour vos données</li>
                  <li><strong>Évolutivité parfaite</strong> : le SaaS grandit avec votre activité</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-light mb-4">4️⃣ L&apos;importance de la souveraineté des données</h3>
                <p>
                  Avec le RGPD et les enjeux de cybersécurité, héberger ses données en Europe n&apos;est plus une option mais une nécessité. Les partenaires français comme <strong>Mistral AI, OVHcloud et Scaleway</strong> garantissent une souveraineté totale de vos informations stratégiques.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-light mb-4">5️⃣ Les cas d&apos;usage concrets</h3>
                <p>Un SaaS personnalisé peut transformer :</p>
                <ul className="space-y-2 ml-6 list-disc mt-4">
                  <li><strong>L&apos;administration</strong> : facturation, devis, suivi financier automatisé</li>
                  <li><strong>Les RH</strong> : onboarding, gestion des absences, fiches de poste dynamiques</li>
                  <li><strong>La production</strong> : suivi des chantiers, traçabilité, planification</li>
                  <li><strong>La relation client</strong> : CRM intelligent, scoring automatique, support IA</li>
                  <li><strong>Le pilotage</strong> : tableaux de bord temps réel, KPIs personnalisés</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-light mb-4">6️⃣ Comment se déroule un projet SaaS chez Market-IA</h3>
                <ol className="space-y-2 ml-6 list-decimal">
                  <li>Diagnostic des flux internes et identification des points de friction</li>
                  <li>Architecture modulaire et design UX adapté à vos équipes</li>
                  <li>Développement agile avec livraisons progressives</li>
                  <li>Intégration avec vos outils existants (API, webhooks)</li>
                  <li>Formation complète et documentation</li>
                  <li>Support continu et évolutions IA</li>
                </ol>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-light mb-4">7️⃣ Les bonnes pratiques pour maintenir un SaaS performant</h3>
                <p>
                  Un SaaS vivant nécessite : maintenance IA régulière, monitoring des logs, tests automatisés, UX évolutive basée sur les retours utilisateurs, et sauvegardes chiffrées continues.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-light mb-4">8️⃣ La vision long terme : vers l&apos;entreprise augmentée</h3>
                <p>
                  L&apos;automatisation totale des tâches et l&apos;IA prédictive au cœur du pilotage transforment l&apos;entreprise en organisation augmentée, capable de prendre des décisions en temps réel basées sur des données fiables.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-light mb-4">Conclusion</h3>
                <p>
                  Le futur n&apos;est pas d&apos;utiliser des outils intelligents — c&apos;est d&apos;avoir <strong>son propre outil intelligent</strong>. La création de SaaS personnalisé n&apos;est plus réservée aux grandes entreprises. Avec les bonnes compétences et une approche modulaire, toute organisation peut se doter d&apos;un logiciel métier parfaitement adapté.
                </p>
                <p className="mt-4 text-primary font-bold text-xl">
                  🚀 Prêt à créer votre SaaS sur mesure ? Contactez-nous pour un diagnostic gratuit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
