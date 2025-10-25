'use client'

import Link from 'next/link'
import { ArrowRight, Check, Sparkles, TrendingUp, Shield, Clock, Users, Globe, Zap, Star, GraduationCap, Target, Brain, Lock, Rocket, BookOpen, Award, MapPin, Calendar, Euro, CheckCircle2, BadgeCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function FormationsIA() {
  // Optimisation SEO pour "Formation IA Var"
  useEffect(() => {
    document.title = 'Formation IA Var | Intelligence Artificielle Toulon, Brignoles, Fréjus'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Formation IA professionnelle dans le Var : Toulon, Brignoles, Fréjus, Draguignan. Formation certifiante RS6776, finançable OPCO/CPF. Maîtrisez l\'IA avec MistralAI.')
    }
  }, [])
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    entreprise: '',
    fonction: '',
    formation: '',
    ville: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logique d'envoi du formulaire à implémenter
    console.log('Formulaire soumis:', formData)
    alert('Merci pour votre inscription ! Nous vous recontacterons rapidement.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      {/* SECTION 1 - HERO / ACCROCHE PRINCIPALE */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/20 border-2 border-primary rounded-full px-6 py-3 mb-8"
            >
              <Brain className="w-5 h-5 text-primary" />
              <span className="text-sm font-bold text-light">Formation IA Professionnelle dans le Var</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight"
            >
              Formez-vous à l&apos;{' '}
              <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
                Intelligence Artificielle
              </span>
              {' '}dans le Var
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-light/70 mb-8 max-w-3xl mx-auto"
            >
              Comprenez, maîtrisez et intégrez l&apos;IA dans votre métier dès aujourd&apos;hui.<br />
              <strong className="text-primary-light">Formation IA Var : Toulon, Brignoles, Fréjus, Draguignan</strong>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-4xl mx-auto mb-12"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-dark-surface/80 backdrop-blur-sm border-2 border-primary/40 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold text-light">Formation Initiation</h3>
                  </div>
                  <p className="text-light/90 mb-2">4 heures de découverte intensive</p>
                  <p className="text-sm text-light/70">Parfait pour démarrer avec l&apos;IA</p>
                </div>
                <div className="bg-dark-surface/80 backdrop-blur-sm border-2 border-primary/40 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold text-light">Formation Certifiante</h3>
                  </div>
                  <p className="text-light/90 mb-2">21 heures de formation complète</p>
                  <p className="text-sm text-light/70">Certification RS6776 • Finançable OPCO/CPF</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <a
                href="#formations"
                className="group bg-primary hover:bg-primary-dark text-white font-bold px-10 py-5 rounded-xl transition-all duration-300 hover:shadow-glow inline-flex items-center gap-3 text-lg"
              >
                Découvrir nos formations IA Var
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - POURQUOI SE FORMER À L'IA ? */}
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
              Formation IA Var : <span className="gradient-text">un levier de productivité</span>
            </h2>
            <p className="text-xl text-light/90 max-w-4xl mx-auto leading-relaxed">
              L&apos;intelligence artificielle transforme profondément les entreprises du Var. Nos formations IA Var vous permettent de maîtriser ces outils pour gagner du temps, réduire vos coûts et automatiser vos tâches quotidiennes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Rocket, title: 'Gagnez 2h par jour', description: 'Formation IA Var : automatisez vos tâches et concentrez-vous sur l\'essentiel.' },
              { icon: TrendingUp, title: 'Contenus professionnels', description: 'Créez des contenus de qualité avec l\'IA en toute autonomie.' },
              { icon: Lock, title: 'Conformité RGPD & IA Act', description: 'Formation IA Var conforme aux réglementations européennes.' },
              { icon: Globe, title: 'Outils IA français', description: 'MistralAI, Upmeet et solutions souveraines françaises.' },
              { icon: MapPin, title: 'Partout dans le Var', description: 'Formation IA Var : Toulon, Brignoles, Fréjus, Draguignan, Hyères.' },
              { icon: Award, title: 'Certification RS6776', description: 'Formation IA certifiante reconnue France Compétences.' },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-surface/90 backdrop-blur-sm border-2 border-primary/30 rounded-xl p-8 hover:border-primary hover:shadow-glow transition-all"
              >
                <benefit.icon className="w-14 h-14 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-light">{benefit.title}</h3>
                <p className="text-light/90 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - FORMATION COURTE : INITIATION À L'IA (4H) */}
      <section id="formations" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-dark-surface/90 backdrop-blur-sm border-2 border-primary/40 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-3 mb-6">
                  <Clock className="w-10 h-10 text-primary flex-shrink-0" />
                  <h2 className="text-3xl md:text-5xl font-display font-bold">
                    Formation IA Var <span className="gradient-text">Initiation</span>
                  </h2>
                </div>

                <p className="text-xl text-light/90 mb-4 leading-relaxed">
                  Formation IA intensive de 4 heures dans le Var
                </p>
                <p className="text-lg text-light/80 mb-8">
                  Idéale pour dirigeants, cadres et professions libérales du Var souhaitant découvrir l&apos;intelligence artificielle de manière concrète.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">Programme Formation IA Var</h3>
                    <ul className="space-y-3">
                      {[
                        'Comprendre les bases de l\'intelligence artificielle',
                        'Découvrir les outils MistralAI Pro et Upmeet',
                        'Rédiger ses premiers prompts efficaces',
                        'Créer un agent IA personnalisé',
                        'Mettre en place une charte interne IA (RGPD et IA Act)',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-light/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-dark-surface/80 border border-primary/20 p-5 rounded-xl">
                      <div className="flex items-center gap-3 mb-2">
                        <Clock className="w-6 h-6 text-primary" />
                        <span className="font-bold text-light text-lg">Durée</span>
                      </div>
                      <p className="text-light/90">4 heures intensives</p>
                      <p className="text-sm text-light/70">Session matin ou après-midi</p>
                    </div>

                    <div className="bg-dark-surface/80 border border-primary/20 p-5 rounded-xl">
                      <div className="flex items-center gap-3 mb-2">
                        <MapPin className="w-6 h-6 text-primary" />
                        <span className="font-bold text-light text-lg">Lieu Formation IA</span>
                      </div>
                      <p className="text-light/90">Brignoles, Var</p>
                      <p className="text-sm text-light/70">Pôle Entreprises 3 – 129 av. Saint-Jean</p>
                    </div>

                    <div className="bg-dark-surface/80 border border-primary/20 p-5 rounded-xl">
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="w-6 h-6 text-primary" />
                        <span className="font-bold text-light text-lg">Planning</span>
                      </div>
                      <p className="text-light/90">Sessions régulières</p>
                      <p className="text-sm text-light/70">Tous les lundis dans le Var</p>
                    </div>

                    <div className="bg-primary/10 border-2 border-primary p-5 rounded-xl">
                      <div className="flex items-center gap-3 mb-2">
                        <Euro className="w-6 h-6 text-primary" />
                        <span className="font-bold text-light text-lg">Tarif Formation IA</span>
                      </div>
                      <p className="text-3xl font-bold text-primary mb-1">195 € HT</p>
                      <p className="text-sm text-light/80">Non finançable OPCO / CPF</p>
                    </div>
                  </div>
                </div>

                <a
                  href="#inscription"
                  className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
                >
                  Je m&apos;inscris à la session d&apos;initiation
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 - FORMATION CERTIFIANTE */}
      <section className="py-24 bg-dark-surface">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-dark-surface/90 backdrop-blur-sm border-2 border-primary/40 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-3 mb-6">
                  <GraduationCap className="w-12 h-12 text-primary flex-shrink-0" />
                  <h2 className="text-3xl md:text-5xl font-display font-bold">
                    Formation IA Var <span className="gradient-text">Certifiante</span>
                  </h2>
                </div>

                <p className="text-xl text-light/90 mb-4 leading-relaxed">Formation IA professionnelle de 21 heures dans le Var</p>
                <p className="text-lg text-light/80 mb-8">
                  Formation IA Var immersive pour maîtriser la création de contenus rédactionnels et visuels avec l&apos;intelligence artificielle. Formation conforme RGPD et finançable OPCO/CPF.
                </p>

                <div className="bg-primary/10 border-2 border-primary rounded-xl p-6 md:p-8 mb-8">
                  <div className="flex items-start gap-4">
                    <Award className="w-12 h-12 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-primary">Certification RS6776</h3>
                      <p className="text-light/90 mb-3 text-lg leading-relaxed">
                        Formation IA Var certifiante : Création de contenus rédactionnels et visuels par l&apos;usage responsable de l&apos;intelligence artificielle générative
                      </p>
                      <p className="text-sm text-light/80">
                        ✓ Enregistrée France Compétences<br />
                        ✓ Formation IA finançable OPCO et CPF<br />
                        ✓ Certification professionnelle reconnue
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold mb-6 text-light">Programme Formation IA Var - 3 jours (21 heures)</h3>

                <div className="space-y-6 mb-10">
                  {/* Jour 1 */}
                  <div className="bg-dark-surface/80 p-6 rounded-xl border-2 border-primary/30">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-primary">1</span>
                      </div>
                      <h4 className="text-xl md:text-2xl font-bold text-light">Jour 1 – Fondamentaux et prompt engineering (6h)</h4>
                    </div>
                    <ul className="space-y-2 ml-0 md:ml-15">
                      {[
                        'Comprendre l\'IA générative et ses usages professionnels',
                        'Maîtriser les bases du prompt engineering',
                        'Identifier les tâches à automatiser',
                        'Cas pratiques : prompts pour rédaction, mails, fiches produit',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-light/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Jour 2 */}
                  <div className="bg-dark-surface/80 p-6 rounded-xl border-2 border-primary/30">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-primary">2</span>
                      </div>
                      <h4 className="text-xl md:text-2xl font-bold text-light">Jour 2 – Sécurité, conformité et création (7h)</h4>
                    </div>
                    <ul className="space-y-2 ml-0 md:ml-15">
                      {[
                        'Sécuriser et anonymiser les données (RGPD, IA Act)',
                        'Générer des contenus rédactionnels avec l\'IA',
                        'Créer des visuels professionnels avec Firefly / DALL·E',
                        'Étude de cas : campagne complète IA',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-light/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Jour 3 */}
                  <div className="bg-dark-surface/80 p-6 rounded-xl border-2 border-primary/30">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-primary">3</span>
                      </div>
                      <h4 className="text-xl md:text-2xl font-bold text-light">Jour 3 – Optimisation et certification (8h)</h4>
                    </div>
                    <ul className="space-y-2 ml-0 md:ml-15">
                      {[
                        'Accessibilité et inclusion numérique',
                        'Évaluation finale : 6 cas pratiques + soutenance orale',
                        'Plan d\'intégration IA dans l\'entreprise',
                        'Validation du parcours pour certification RS6776',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-light/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-dark-surface/60 border border-primary/20 p-6 rounded-xl">
                    <h4 className="text-xl font-bold mb-3 text-primary">Public Formation IA Var</h4>
                    <p className="text-light/90 leading-relaxed">
                      Professionnels du Var : cadres, responsables communication, RH, marketing, dirigeants, indépendants, formateurs, community managers.
                    </p>
                  </div>

                  <div className="bg-dark-surface/60 border border-primary/20 p-6 rounded-xl">
                    <h4 className="text-xl font-bold mb-3 text-primary">Financement Formation IA</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span className="text-light/90">Éligible OPCO et CPF</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span className="text-light/90">Accompagnement administratif</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span className="text-light/90">Prise en charge jusqu&apos;à 100%</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary/10 border-2 border-primary p-6 rounded-xl">
                    <h4 className="text-xl font-bold mb-3 text-primary">Tarif Formation IA Var</h4>
                    <p className="text-4xl font-bold text-primary mb-2">2 790 € TTC</p>
                    <p className="text-sm text-light/80">Financement possible OPCO/CPF</p>
                  </div>

                  <div className="bg-dark-surface/60 border border-primary/20 p-6 rounded-xl">
                    <h4 className="text-xl font-bold mb-3 text-primary">Formateur Expert IA</h4>
                    <p className="text-light/90 mb-2"><strong className="text-lg">Benoît Souffes</strong></p>
                    <p className="text-light/80">
                      Expert en IA et formateur SavoirIA France<br />
                      Spécialiste formation IA entreprises du Var
                    </p>
                  </div>
                </div>

                <a
                  href="#inscription"
                  className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
                >
                  Faire financer ma formation certifiante
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 - MÉTHODES PÉDAGOGIQUES */}
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
              Formation IA Var : <span className="gradient-text">pédagogie pratique</span>
            </h2>
            <p className="text-xl text-light/90 max-w-4xl mx-auto leading-relaxed">
              Notre formation IA Var est structurée autour de cas concrets et démonstrations en direct.
              L&apos;approche combine théorie, ateliers pratiques et accompagnement personnalisé pour garantir votre montée en compétences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Target, title: 'Exercices pratiques IA', description: 'Formation IA Var adaptée à votre métier et besoins réels' },
              { icon: Zap, title: 'Démonstrations live', description: 'Outils IA présentés et manipulés en temps réel' },
              { icon: BookOpen, title: 'Cas d\'entreprises Var', description: 'Études de cas issues d\'entreprises locales du Var' },
              { icon: Users, title: 'Ressources formation IA', description: 'Fiches et templates fournis pour application immédiate' },
              { icon: Shield, title: 'Support formation', description: 'Accompagnement après votre formation IA Var' },
            ].map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-surface/90 border-2 border-primary/30 rounded-xl p-8 text-center hover:border-primary hover:shadow-glow transition-all"
              >
                <method.icon className="w-14 h-14 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-light">{method.title}</h3>
                <p className="text-light/90 leading-relaxed">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - LES AVANTAGES */}
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
              Pourquoi choisir notre <span className="gradient-text">Formation IA Var</span> ?
            </h2>
            <p className="text-xl text-light/90 max-w-3xl mx-auto">
              Des formations IA professionnelles adaptées aux entreprises du Var
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: MapPin, title: 'Formation IA présentiel Var', description: 'Sessions dans tout le Var : Toulon, Brignoles, Fréjus, Draguignan, Hyères' },
              { icon: GraduationCap, title: 'Formateurs experts IA', description: 'Spécialistes formation IA avec expérience entreprises' },
              { icon: Shield, title: 'Formation IA conforme', description: 'Respect RGPD et IA Act européen' },
              { icon: Globe, title: 'Outils IA français', description: 'Formation MistralAI, Upmeet et solutions souveraines' },
              { icon: Award, title: 'Certification RS6776', description: 'Formation IA certifiante reconnue France Compétences' },
              { icon: CheckCircle2, title: 'Formation IA finançable', description: 'Éligible OPCO et CPF - Prise en charge jusqu\'à 100%' },
            ].map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-surface/90 border-2 border-primary/30 rounded-xl p-8 hover:border-primary hover:shadow-glow transition-all"
              >
                <advantage.icon className="w-16 h-16 text-primary mb-5" />
                <h3 className="text-xl font-bold mb-3 text-light">{advantage.title}</h3>
                <p className="text-light/90 leading-relaxed">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 - INFORMATIONS PRATIQUES */}
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
              Formation IA Var : <span className="gradient-text">Informations pratiques</span>
            </h2>
            <p className="text-xl text-light/90 max-w-3xl mx-auto">
              Comparez nos deux formats de formation IA dans le Var
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <div className="bg-dark-surface/90 backdrop-blur-sm border-2 border-primary/30 rounded-xl">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-primary/30 bg-primary/5">
                    <th className="p-4 md:p-6 text-left text-light font-bold text-lg">Formation IA Var</th>
                    <th className="p-4 md:p-6 text-left text-light font-bold text-lg">Initiation 4h</th>
                    <th className="p-4 md:p-6 text-left text-light font-bold text-lg">Certifiante 21h</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-primary/10">
                    <td className="p-4 md:p-6 font-bold text-primary">Durée</td>
                    <td className="p-4 md:p-6 text-light/90">4h (1/2 journée)</td>
                    <td className="p-4 md:p-6 text-light/90">21h (3 jours)</td>
                  </tr>
                  <tr className="border-b border-primary/10">
                    <td className="p-4 md:p-6 font-bold text-primary">Lieu</td>
                    <td className="p-4 md:p-6 text-light/90">Dans tout le Var</td>
                    <td className="p-4 md:p-6 text-light/90">Dans tout le Var</td>
                  </tr>
                  <tr className="border-b border-primary/10">
                    <td className="p-4 md:p-6 font-bold text-primary">Tarif</td>
                    <td className="p-4 md:p-6 text-light/90 font-bold">195 € HT</td>
                    <td className="p-4 md:p-6 text-light/90 font-bold">2 790 € TTC</td>
                  </tr>
                  <tr className="border-b border-primary/10">
                    <td className="p-4 md:p-6 font-bold text-primary">Public</td>
                    <td className="p-4 md:p-6 text-light/90">Dirigeants, cadres, professions libérales</td>
                    <td className="p-4 md:p-6 text-light/90">Tous professionnels du tertiaire</td>
                  </tr>
                  <tr className="border-b border-primary/10">
                    <td className="p-4 md:p-6 font-bold text-primary">Financement</td>
                    <td className="p-4 md:p-6 text-light/90">Non finançable</td>
                    <td className="p-4 md:p-6 text-light/90 text-primary font-semibold">✓ Éligible OPCO & CPF</td>
                  </tr>
                  <tr>
                    <td className="p-4 md:p-6 font-bold text-primary">Formateur IA</td>
                    <td className="p-4 md:p-6 text-light/90" colSpan={2}>Benoît Souffes - Expert formation IA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#inscription"
              className="bg-primary hover:bg-primary-dark text-white font-bold px-10 py-5 rounded-xl transition-all duration-300 hover:shadow-glow inline-flex items-center gap-3 text-lg"
            >
              Choisir ma formation IA Var
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 8 - FORMULAIRE D'INSCRIPTION */}
      <section id="inscription" className="py-24 bg-dark-surface">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Inscription <span className="gradient-text">Formation IA Var</span>
            </h2>
            <p className="text-xl text-light/90 max-w-3xl mx-auto">
              Réservez votre place pour notre prochaine formation IA dans le Var
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto bg-dark-surface/90 backdrop-blur-sm border-2 border-primary/40 rounded-2xl p-6 md:p-12 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nom" className="block text-light font-bold mb-2 text-lg">Nom *</label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-dark-surface/80 border-2 border-primary/30 rounded-xl text-light text-lg focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="prenom" className="block text-light font-bold mb-2 text-lg">Prénom *</label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    required
                    value={formData.prenom}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-dark-surface/80 border-2 border-primary/30 rounded-xl text-light text-lg focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-light font-bold mb-2 text-lg">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-dark-surface/80 border-2 border-primary/30 rounded-xl text-light text-lg focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="telephone" className="block text-light font-bold mb-2 text-lg">Téléphone *</label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    required
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-dark-surface/80 border-2 border-primary/30 rounded-xl text-light text-lg focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="entreprise" className="block text-light font-bold mb-2 text-lg">Entreprise</label>
                  <input
                    type="text"
                    id="entreprise"
                    name="entreprise"
                    value={formData.entreprise}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-dark-surface/80 border-2 border-primary/30 rounded-xl text-light text-lg focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="fonction" className="block text-light font-bold mb-2 text-lg">Fonction</label>
                  <input
                    type="text"
                    id="fonction"
                    name="fonction"
                    value={formData.fonction}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-dark-surface/80 border-2 border-primary/30 rounded-xl text-light text-lg focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="formation" className="block text-light font-bold mb-2 text-lg">Formation IA Var souhaitée *</label>
                <select
                  id="formation"
                  name="formation"
                  required
                  value={formData.formation}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-dark-surface/80 border-2 border-primary/30 rounded-xl text-light text-lg focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Sélectionnez votre formation IA</option>
                  <option value="Initiation (4h)">Formation IA Initiation (4h)</option>
                  <option value="Certifiante (3 jours)">Formation IA Certifiante (21h)</option>
                </select>
              </div>

              <div>
                <label htmlFor="ville" className="block text-light font-bold mb-2 text-lg">Lieu formation Var *</label>
                <select
                  id="ville"
                  name="ville"
                  required
                  value={formData.ville}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-dark-surface/80 border-2 border-primary/30 rounded-xl text-light text-lg focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Sélectionnez votre ville dans le Var</option>
                  <option value="Toulon">Toulon - Formation IA</option>
                  <option value="Brignoles">Brignoles - Formation IA</option>
                  <option value="Draguignan">Draguignan - Formation IA</option>
                  <option value="Hyères">Hyères - Formation IA</option>
                  <option value="Fréjus">Fréjus - Formation IA</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold text-xl px-8 py-5 rounded-xl transition-all duration-300 hover:shadow-glow flex items-center justify-center gap-3"
              >
                M&apos;inscrire à la Formation IA Var
                <ArrowRight className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 9 - ARTICLE SEO PLACEHOLDER */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
                Formation IA Var : <span className="gradient-text">Tout savoir sur l&apos;intelligence artificielle</span> pour votre entreprise
              </h2>
            </motion.div>

            <div className="bg-dark-surface/90 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-8 md:p-12 space-y-6 text-light/80">
              <p className="text-lg leading-relaxed font-medium">
                La <strong>formation IA Var</strong> devient un enjeu stratégique pour les entreprises de la région. Découvrez comment l&apos;intelligence artificielle transforme le tissu économique local.
              </p>
              <div className="space-y-4 leading-relaxed">
                <h3 className="text-2xl font-bold text-light mt-6">Pourquoi choisir une formation IA dans le Var ?</h3>
                <p>
                  Les entreprises varoises ont besoin de compétences en intelligence artificielle. Notre <strong>formation IA Var</strong> répond aux besoins spécifiques des professionnels de Toulon, Brignoles, Fréjus, Draguignan et Hyères.
                </p>
                
                <h3 className="text-2xl font-bold text-light mt-6">Formation IA Var : Pour qui ?</h3>
                <p>
                  Notre <strong>formation IA professionnelle dans le Var</strong> s&apos;adresse aux dirigeants, cadres, responsables marketing, RH et tous les professionnels souhaitant intégrer l&apos;intelligence artificielle dans leur activité.
                </p>
                
                <h3 className="text-2xl font-bold text-light mt-6">Outils et méthodes de la formation IA Var</h3>
                <p>
                  Formation pratique avec MistralAI, Upmeet et solutions françaises. Conformité RGPD et IA Act garantie pour toutes nos <strong>formations IA dans le Var</strong>.
                </p>
                
                <p className="text-sm italic mt-8">
                  <em>[Article SEO complet de 2000 mots à insérer : contexte économique Var, usages IA TPE/PME, outils français vs américains, retours d&apos;expérience, productivité, automatisation, conformité RGPD]</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-dark-surface">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="card-glass p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Prêt pour votre Formation IA Var ?
              </h2>
              <p className="text-xl text-light/90 mb-8 leading-relaxed">
                Rejoignez les entreprises du Var qui transforment leur activité avec notre formation IA professionnelle
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#inscription" className="bg-primary hover:bg-primary-dark text-white font-bold px-10 py-5 rounded-xl transition-all duration-300 hover:shadow-glow text-lg">
                  Réserver ma Formation IA Var
                </a>
                <Link href="/contact" className="bg-dark-surface/80 hover:bg-dark-lighter text-white font-bold px-10 py-5 rounded-xl border-2 border-primary/40 hover:border-primary transition-all duration-300 text-lg">
                  Nous contacter
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
