'use client'

import Link from 'next/link'
import { ArrowRight, Check, Sparkles, TrendingUp, Shield, Clock, Users, Globe, Zap, Star, CheckCircle2, Award, Rocket, Target, BookOpen, BarChart, Package, Brain, Network, ArrowRightLeft, MessageSquare, FileText, Calendar, Mail, Bell, Play } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function AutomatisationsIA() {
  const [activeWorkflow, setActiveWorkflow] = useState<number | null>(null)
  const [demoActive, setDemoActive] = useState(false)
  const [demoStep, setDemoStep] = useState(0)

  useEffect(() => {
    document.title = 'Automatisations IA | Workflows Intelligents sur Mesure'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Automatisez votre entreprise avec l\'IA : workflows intelligents, connexion d\'outils, gestion automatique. Devis gratuit pour vos automatisations IA.')
    }
  }, [])

  const workflows = [
    {
      name: 'Lead → Notion CRM',
      steps: ['Formulaire Facebook', 'API', 'Notion', 'Notification'],
      description: 'Capture de lead automatique vers base Notion.',
      icon: Target
    },
    {
      name: 'RDV auto',
      steps: ['Email reçu', 'IA extrait infos', 'Calendly', 'Confirmation'],
      description: 'L\'IA lit vos mails et planifie les RDV.',
      icon: Calendar
    },
    {
      name: 'E-commerce suivi',
      steps: ['Shopify', 'IA', 'Email satisfaction', 'Avis Google'],
      description: 'L\'IA envoie un message post-achat automatique.',
      icon: Package
    },
    {
      name: 'Facturation intelligente',
      steps: ['Google Sheets', 'IA', 'PDF', 'Envoi client'],
      description: 'Les factures se génèrent et s\'envoient toutes seules.',
      icon: FileText
    },
    {
      name: 'Support automatisé',
      steps: ['Site', 'Chat IA', 'Tag ticket', 'Réponse auto'],
      description: 'L\'IA gère vos réponses simples instantanément.',
      icon: MessageSquare
    },
    {
      name: 'Publication IA',
      steps: ['Notion', 'IA', 'LinkedIn', 'Instagram API'],
      description: 'L\'IA rédige et publie vos posts réseaux.',
      icon: Globe
    }
  ]

  const startDemo = () => {
    setDemoActive(true)
    setDemoStep(0)
    const interval = setInterval(() => {
      setDemoStep(prev => {
        if (prev >= 3) {
          clearInterval(interval)
          setTimeout(() => setDemoActive(false), 2000)
          return prev
        }
        return prev + 1
      })
    }, 1500)
  }

  return (
    <>
      {/* SECTION 1 - HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-stars opacity-50" />
        
        {/* Réseau neuronal animé */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
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
              <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
                Automatisez vos tâches
              </span>
              , concentrez-vous sur l&apos;essentiel.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-light/90 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Des workflows IA intelligents qui connectent vos outils, envoient vos messages, gèrent vos clients et remplissent vos bases de données — <strong className="text-primary">automatiquement</strong>.
            </motion.p>

            {/* Workflow interactif */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-12 max-w-4xl mx-auto"
            >
              <div className="bg-dark-surface/80 backdrop-blur-xl border-2 border-primary/30 rounded-2xl p-8">
                <div className="flex flex-wrap justify-center items-center gap-4">
                  {['Formulaire Meta Ads', 'Notion CRM', 'Email auto', 'Slack notification'].map((step, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1, borderColor: 'rgb(123, 97, 255)' }}
                        className="bg-primary/20 border-2 border-primary/40 rounded-xl px-6 py-4 hover:shadow-glow transition-all cursor-pointer"
                      >
                        <p className="text-light font-semibold text-sm md:text-base">{step}</p>
                      </motion.div>
                      {index < 3 && <ArrowRight className="w-6 h-6 text-primary hidden md:block" />}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="#workflows"
                className="group bg-primary hover:bg-primary-dark text-white font-bold px-10 py-5 rounded-xl transition-all duration-300 hover:shadow-glow inline-flex items-center gap-3 text-lg"
              >
                Découvrir les automatisations interactives
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - CE QUE FAIT L'IA */}
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
              💡 L&apos;automatisation, c&apos;est <span className="gradient-text">l&apos;assistant que vous n&apos;avez jamais eu</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Prospection automatique',
                workflow: ['IA', 'LinkedIn', 'Google Sheets', 'Email', 'CRM'],
                description: 'L\'IA collecte, enrichit et envoie vos messages pendant que vous travaillez.',
                icon: Target
              },
              {
                title: 'Devis & facturation intelligente',
                workflow: ['Formulaire client', 'IA', 'Devis PDF', 'Notion + Email auto'],
                description: 'Un client remplit un formulaire, l\'IA génère le devis et l\'envoie.',
                icon: FileText
              },
              {
                title: 'Suivi client & relances automatiques',
                workflow: ['CRM', 'Trigger délai 7j', 'IA message', 'WhatsApp'],
                description: 'Plus aucune relance oubliée. Votre IA le fait pour vous.',
                icon: Bell
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-dark-surface/90 border-2 border-primary/30 rounded-xl p-8 hover:border-primary hover:shadow-glow transition-all group"
              >
                <item.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-light mb-4">{item.title}</h3>
                
                {/* Mini workflow */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.workflow.map((step, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">{step}</span>
                      {i < item.workflow.length - 1 && <ArrowRight className="w-3 h-3 text-primary/60" />}
                    </div>
                  ))}
                </div>
                
                <p className="text-light/80 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - WORKFLOWS VISUELS INTERACTIFS */}
      <section id="workflows" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              🧩 Exemples d&apos;automatisations <span className="gradient-text">visuelles</span>
            </h2>
            <p className="text-xl text-light/90">Cliquez sur un scénario pour le voir fonctionner</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {workflows.map((workflow, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
                onClick={() => setActiveWorkflow(activeWorkflow === index ? null : index)}
                className={`bg-dark-surface/90 border-2 rounded-xl p-6 cursor-pointer transition-all ${
                  activeWorkflow === index ? 'border-primary shadow-glow' : 'border-primary/30 hover:border-primary/60'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <workflow.icon className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold text-light">{workflow.name}</h3>
                </div>

                {activeWorkflow === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-4"
                  >
                    <div className="space-y-2">
                      {workflow.steps.map((step, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.2 }}
                          className="flex items-center gap-2"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                          <span className="text-sm text-light/80">{step}</span>
                          {i < workflow.steps.length - 1 && (
                            <ArrowRightLeft className="w-4 h-4 text-primary/60 ml-auto" />
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                <p className="text-light/70 text-sm mb-4">{workflow.description}</p>
                
                <button className="text-primary text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  {activeWorkflow === index ? 'Masquer' : 'Voir le workflow'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - COMMENT ÇA MARCHE */}
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
              🔁 De l&apos;idée à l&apos;automatisation, <span className="gradient-text">en 3 étapes</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Analyse IA',
                description: 'L\'IA identifie les tâches répétitives dans votre activité.',
                icon: Brain
              },
              {
                title: 'Conception du workflow',
                description: 'Un designer IA construit le scénario (nœuds Make, Zapier ou n8n).',
                icon: Network
              },
              {
                title: 'Déploiement & suivi',
                description: 'Le workflow tourne, se met à jour et envoie des rapports automatiques.',
                icon: Zap
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-dark-surface/90 border-2 border-primary/30 rounded-xl p-8 h-full hover:border-primary hover:shadow-glow transition-all">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  <step.icon className="w-16 h-16 text-primary mb-4 mx-auto animate-pulse" />
                  <h3 className="text-2xl font-bold text-light mb-4 text-center">{step.title}</h3>
                  <p className="text-light/80 text-center leading-relaxed">{step.description}</p>
                </div>
                {index < 2 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 text-primary/40 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - EXEMPLES CONCRETS */}
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
              Exemples concrets <span className="gradient-text">d&apos;automatisations IA</span>
            </h2>
            <p className="text-xl text-light/90">Voici ce que nos clients automatisent déjà</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                category: 'Marketing & Vente',
                items: ['Prospection LinkedIn automatisée', 'Relance paniers Shopify', 'Publication auto sur réseaux'],
                icon: TrendingUp
              },
              {
                category: 'Administration',
                items: ['Devis, factures et suivis Notion / Google Sheets', 'Génération PDF automatisée', 'Relance devis non signés'],
                icon: FileText
              },
              {
                category: 'RH & interne',
                items: ['Suivi heures / congés', 'Onboarding employés (emails automatiques, docs, chat IA)'],
                icon: Users
              },
              {
                category: 'Support client',
                items: ['Chatbot IA connecté au CRM', 'Ticket automatique via WhatsApp', 'Réponses pré-rédigées IA'],
                icon: MessageSquare
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
                className="bg-dark-surface/90 border-2 border-primary/30 rounded-xl p-6 hover:border-primary transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-light">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-light/80">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - FORMULES */}
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
              Nos formules <span className="gradient-text">d&apos;automatisation</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                name: 'Start IA',
                setup: '390 €',
                monthly: '39 €/mois',
                description: 'Une automatisation clé connectée à vos outils (Zapier ou Make).',
                features: ['1 workflow', 'Support email', 'Documentation']
              },
              {
                name: 'Business IA',
                setup: '690 €',
                monthly: '79 €/mois',
                description: '3 automatisations connectées + suivi mensuel.',
                features: ['3 workflows', 'Suivi mensuel', 'Support prioritaire'],
                popular: true
              },
              {
                name: 'Scale IA',
                setup: '990 €',
                monthly: '149 €/mois',
                description: '5 automatisations + reporting IA + maintenance proactive.',
                features: ['5 workflows', 'Reporting IA', 'Maintenance proactive', 'Support 24h']
              },
              {
                name: 'Custom Flow',
                setup: 'Sur devis',
                monthly: '',
                description: 'Automatisation sur mesure avec intégration API complète.',
                features: ['Workflows illimités', 'API custom', 'Déploiement dédié']
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
                className={`relative bg-dark-surface/90 border-2 rounded-xl p-6 hover:shadow-glow transition-all ${
                  plan.popular ? 'border-primary' : 'border-primary/30 hover:border-primary'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                    POPULAIRE
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-light mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <p className="text-3xl font-bold text-primary">{plan.setup}</p>
                  {plan.monthly && <p className="text-light/70">{plan.monthly}</p>}
                </div>
                <p className="text-light/80 text-sm mb-6">{plan.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-light/80">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/contact" 
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary-dark text-white' 
                      : 'bg-primary/20 hover:bg-primary/30 text-primary'
                  }`}
                >
                  Choisir
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white font-bold px-10 py-5 rounded-xl transition-all inline-flex items-center gap-3 text-lg">
              Je veux automatiser mon entreprise
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7 - DÉMONSTRATION EN DIRECT */}
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
              🎬 Testez un workflow <span className="gradient-text">en temps réel</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-dark-surface/90 border-2 border-primary/30 rounded-2xl p-8">
              <div className="text-center mb-8">
                <button
                  onClick={startDemo}
                  disabled={demoActive}
                  className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl transition-all inline-flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Play className="w-6 h-6" />
                  {demoActive ? 'Démo en cours...' : 'Nouveau lead'}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { label: 'Lead reçu', icon: Target, step: 0 },
                  { label: 'Traitement IA…', icon: Brain, step: 1 },
                  { label: 'Email envoyé ✅', icon: Mail, step: 2 },
                  { label: 'Contact ajouté CRM', icon: CheckCircle2, step: 3 }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      scale: demoActive && demoStep >= item.step ? 1.05 : 1,
                      borderColor: demoActive && demoStep >= item.step ? 'rgb(123, 97, 255)' : 'rgba(123, 97, 255, 0.2)'
                    }}
                    className="bg-dark-surface border-2 rounded-xl p-6 text-center"
                  >
                    <item.icon className={`w-12 h-12 mx-auto mb-3 transition-colors ${
                      demoActive && demoStep >= item.step ? 'text-primary' : 'text-light/40'
                    }`} />
                    <p className={`text-sm font-semibold transition-colors ${
                      demoActive && demoStep >= item.step ? 'text-light' : 'text-light/40'
                    }`}>{item.label}</p>
                  </motion.div>
                ))}
              </div>

              {demoActive && demoStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 bg-primary/10 border-2 border-primary rounded-xl p-6 text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-xl font-bold text-light mb-2">Workflow terminé avec succès !</p>
                  <p className="text-light/80">Voilà comment l&apos;automatisation IA fonctionne en temps réel.</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 - CTA FINAL */}
      <section className="py-24 bg-dark-surface">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Votre business tourne <span className="gradient-text">pendant que vous dormez</span>
            </h2>
            <p className="text-xl text-light/90 mb-4">
              L&apos;IA connecte, analyse, et agit pour vous.
            </p>
            <p className="text-lg text-light/80 mb-12">
              Ne perdez plus une minute — faites-vous assister par des automatisations intelligentes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white font-bold px-10 py-5 rounded-xl transition-all inline-flex items-center justify-center gap-3 text-lg">
                Créer mon premier workflow IA
                <Rocket className="w-6 h-6" />
              </Link>
              <Link href="/contact" className="bg-dark-surface/80 hover:bg-dark-lighter border-2 border-primary/40 hover:border-primary text-white font-bold px-10 py-5 rounded-xl transition-all text-lg">
                Demander une démo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 9 - ARTICLE SEO */}
      <section className="py-24">
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
                Automatisation IA : <span className="gradient-text">comment transformer votre entreprise grâce à l&apos;intelligence artificielle</span>
              </h2>
            </motion.div>

            <div className="bg-dark-surface/90 border-2 border-primary/30 rounded-2xl p-8 md:p-12 space-y-8 text-light/80 leading-relaxed">
              <div>
                <h3 className="text-2xl font-bold text-light mb-4">Introduction – L&apos;IA au cœur de la productivité moderne</h3>
                <p>
                  L&apos;<strong>automatisation IA</strong> révolutionne la façon dont les entreprises gèrent leurs processus. En 2025, l&apos;intelligence artificielle ne se limite plus aux grandes corporations : PME, TPE et indépendants peuvent désormais automatiser leurs tâches répétitives, gagner du temps et améliorer leur efficacité opérationnelle.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-light mb-4">1️⃣ Qu&apos;est-ce qu&apos;une automatisation IA ?</h3>
                <p>
                  Une <strong>automatisation IA</strong> combine workflows intelligents et intelligence artificielle pour exécuter des tâches sans intervention humaine. Contrairement aux automatisations classiques qui suivent des règles fixes, l&apos;IA peut apprendre, s&apos;adapter et prendre des décisions contextuelles.
                </p>
                <p className="mt-4">
                  <strong>Exemples concrets :</strong> extraction automatique d&apos;informations depuis des emails, génération de réponses personnalisées, qualification de leads, création de contenus, analyse de sentiments clients.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-light mb-4">2️⃣ Les outils qui rendent cela possible</h3>
                <p>Les plateformes d&apos;automatisation modernes incluent :</p>
                <ul className="space-y-2 ml-6 list-disc mt-4">
                  <li><strong>Make.com</strong> : workflows visuels avec intégrations IA</li>
                  <li><strong>Zapier</strong> : connexions d&apos;applications simplifiées</li>
                  <li><strong>n8n</strong> : solution open-source auto-hébergeable</li>
                  <li><strong>GPT API</strong> : intelligence artificielle générative</li>
                  <li><strong>Notion / Airtable</strong> : bases de données intelligentes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-light mb-4">3️⃣ Les avantages de l&apos;automatisation IA</h3>
                <ul className="space-y-3 ml-6 list-disc">
                  <li><strong>Gain de temps</strong> : jusqu&apos;à 2h économisées par jour sur les tâches administratives</li>
                  <li><strong>Réduction d&apos;erreurs</strong> : l&apos;IA ne fatigue jamais et suit les processus à la lettre</li>
                  <li><strong>Disponibilité 24/7</strong> : vos workflows tournent même la nuit</li>
                  <li><strong>Scalabilité</strong> : gérez 10× plus de clients sans embaucher</li>
                  <li><strong>ROI mesurable</strong> : analytics et rapports automatiques</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-light mb-4">4️⃣ Exemples concrets d&apos;automatisations réelles</h3>
                <p><strong>Prospection LinkedIn automatisée :</strong> L&apos;IA identifie vos prospects idéaux, envoie des messages personnalisés et suit les réponses dans votre CRM.</p>
                <p className="mt-4"><strong>Génération de devis intelligente :</strong> Un client remplit un formulaire, l&apos;IA calcule le prix, génère le PDF et l&apos;envoie par email.</p>
                <p className="mt-4"><strong>Support client automatisé :</strong> Chatbot IA répond aux questions fréquentes, crée des tickets et transfère les cas complexes.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-light mb-4">5️⃣ L&apos;intégration IA dans les PME et TPE</h3>
                <p>
                  Les petites entreprises bénéficient particulièrement de l&apos;automatisation IA car elle leur permet de rivaliser avec des structures plus grandes. <strong>Investissement initial : à partir de 390€</strong> pour un premier workflow professionnel.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-light mb-4">6️⃣ Comment créer son premier workflow</h3>
                <ol className="space-y-2 ml-6 list-decimal">
                  <li>Identifiez une tâche répétitive (ex: saisie dans un CRM)</li>
                  <li>Choisissez les outils à connecter (email, CRM, facturation…)</li>
                  <li>Créez le scénario avec un outil no-code comme Make</li>
                  <li>Intégrez l&apos;IA pour les décisions intelligentes</li>
                  <li>Testez et déployez progressivement</li>
                </ol>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-light mb-4">7️⃣ Les erreurs à éviter</h3>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Automatiser un processus mal défini</li>
                  <li>Négliger la sécurité des données</li>
                  <li>Vouloir tout automatiser d&apos;un coup</li>
                  <li>Oublier de former les équipes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-light mb-4">8️⃣ Combien coûte une automatisation IA ?</h3>
                <p>
                  Les tarifs varient selon la complexité. Pour un workflow simple : <strong>390€ de setup + 39€/mois</strong>. Pour une automatisation complète avec 5 workflows : <strong>990€ + 149€/mois</strong>. Le ROI est généralement atteint en 2-3 mois.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-light mb-4">Conclusion : l&apos;entreprise augmentée par l&apos;intelligence artificielle</h3>
                <p>
                  L&apos;<strong>automatisation IA</strong> n&apos;est plus un luxe mais une nécessité compétitive. Les entreprises qui l&apos;adoptent dès maintenant prennent une longueur d&apos;avance considérable. Commencez petit, testez un workflow, mesurez les résultats, puis développez progressivement votre écosystème d&apos;automatisations.
                </p>
                <p className="mt-4 text-primary font-bold text-xl">
                  🚀 Prêt à automatiser votre entreprise ? Contactez-nous pour une démo personnalisée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
