'use client'

import Link from 'next/link'
import { ArrowRight, Check, Sparkles, TrendingUp, Shield, Clock, Users, Globe, Zap, Star, CheckCircle2, Award, Rocket, Target, BookOpen, BarChart, Package } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function SiteInternet() {
  useEffect(() => {
    document.title = 'Création Site Internet Var | Site Web Professionnel dès 99€/mois'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Création de site internet professionnel dans le Var : Toulon, Hyères, Fréjus. À partir de 99€/mois, tout inclus : hébergement, maintenance, SEO. Mise en ligne en 10 jours.')
    }
  }, [])

  return (
    <>
      {/* SECTION 1 - HERO */}
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
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight"
            >
              👉 Votre site Internet{' '}
              <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
                clé en main
              </span>
              , sans prise de tête.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-light/90 mb-8 max-w-4xl mx-auto font-semibold"
            >
              Des sites modernes, performants et 100 % gérés pour vous<br />
              <span className="text-primary">à partir de 99 €/mois</span>, hébergement et maintenance inclus.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-light/80 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Fini les sites oubliés après leur mise en ligne. Nous créons, hébergeons, optimisons et faisons évoluer votre site en continu.
              Nos abonnements mensuels incluent tout : design, sécurité, SEO et accompagnement.
              <strong className="text-light block mt-4">Vous vous concentrez sur votre métier — on s&apos;occupe du reste.</strong>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <a
                href="#formules"
                className="group bg-primary hover:bg-primary-dark text-white font-bold px-10 py-5 rounded-xl transition-all duration-300 hover:shadow-glow inline-flex items-center gap-3 text-lg"
              >
                Je découvre les formules
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="inline-flex items-center gap-2 bg-primary/10 border-2 border-primary rounded-full px-6 py-3"
            >
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm font-bold text-light">Mis en ligne en 10 jours ouvrés ou 1 mois offert</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - POURQUOI ABONNEMENT */}
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
              💡 Le site Web n&apos;est plus un achat, <span className="gradient-text">c&apos;est un service</span>
            </h2>
            <p className="text-xl text-light/90 max-w-4xl mx-auto leading-relaxed">
              Les entreprises du Var évoluent vite : horaires, tarifs, visuels, promotions, actualités…
              Un site doit vivre. C&apos;est pour cela que nous proposons un modèle d&apos;abonnement tout-inclus.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {[
              { icon: Rocket, title: 'Mise à jour continue', description: 'Technique et graphique' },
              { icon: Shield, title: 'Sécurité & Performance', description: 'Sans faille, toujours optimisé' },
              { icon: Users, title: 'Accompagnement humain', description: 'Modifications et support inclus' },
              { icon: Sparkles, title: 'Design professionnel', description: 'Toujours à jour et moderne' },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
                className="bg-dark-surface/90 border-2 border-primary/30 rounded-xl p-8 text-center hover:border-primary hover:shadow-glow transition-all"
              >
                <benefit.icon className="w-14 h-14 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-light">{benefit.title}</h3>
                <p className="text-light/80">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-primary/10 border-2 border-primary rounded-2xl p-8 text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-2xl font-bold text-light">
                "Mis en ligne en <span className="text-primary">10 jours ouvrés</span> ou 1 mois offert."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 - LES FORMULES */}
      <section id="formules" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <p className="text-lg text-primary font-semibold mb-4">
              ⚙️ Tous nos sites sont créés sur Webflow (ou Shopify pour e-commerce)
            </p>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Choisissez votre <span className="gradient-text">formule</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Formule Essentiel */}
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-dark-surface/90 border-2 border-primary/40 rounded-2xl p-8 hover:border-primary hover:shadow-glow transition-all"
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-light mb-2">🧩 Essentiel</h3>
                <p className="text-light/70 mb-4">Pour les indépendants et TPE qui veulent être trouvés</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-primary">99€</span>
                  <span className="text-xl text-light/70">/mois</span>
                </div>
                <p className="text-sm text-light/60 mt-2">+ 290 € activation</p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  'Site vitrine 1 à 5 pages',
                  'Design premium personnalisé',
                  'SEO technique de base',
                  'Sécurité, RGPD, sauvegardes',
                  '15 min/mois de modifications',
                  'Hébergement & maintenance inclus',
                  'Délai support : 72 h ouvrées',
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-light/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-6">
                <p className="text-sm text-light/90 font-semibold">✓ Mis en ligne en 10 jours ouvrés</p>
              </div>

              <Link href="/contact" className="block w-full btn-primary text-center text-lg py-4">
                Je lance mon site vitrine →
              </Link>
            </motion.div>

            {/* Formule Business */}
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
              className="bg-dark-surface/90 border-2 border-primary rounded-2xl p-8 relative overflow-hidden hover:shadow-glow transition-all"
            >
              <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                POPULAIRE
              </div>

              <div className="mb-6">
                <h3 className="text-3xl font-bold text-light mb-2">🚀 Business</h3>
                <p className="text-light/70 mb-4">Pour générer des contacts automatiquement</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-primary">179€</span>
                  <span className="text-xl text-light/70">/mois</span>
                </div>
                <p className="text-sm text-light/60 mt-2">+ 390 € activation</p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  'Tout du plan Essentiel',
                  'Blog connecté (CMS)',
                  'Fiche Google Business optimisée',
                  'Prise de RDV en ligne',
                  'Formulaires dynamiques avec emails auto',
                  '45 min/mois de modifications',
                  'Délai support : 48 h',
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-light/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="block w-full bg-primary hover:bg-primary-dark text-white font-bold text-center text-lg py-4 rounded-xl transition-all">
                Je rends mon site interactif →
              </Link>
            </motion.div>

            {/* Formule E-Commerce */}
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
              className="bg-dark-surface/90 border-2 border-primary/40 rounded-2xl p-8 hover:border-primary hover:shadow-glow transition-all"
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-light mb-2">🛒 E-Commerce</h3>
                <p className="text-light/70 mb-4">Pour vendre en ligne sans prise de tête</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-primary">289€</span>
                  <span className="text-xl text-light/70">/mois</span>
                </div>
                <p className="text-sm text-light/60 mt-2">+ 590 € activation</p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  'Boutique Shopify ou Webflow (≤ 100 produits)',
                  'Paiement sécurisé, taxes, livraison',
                  'Emails transactionnels paramétrés',
                  '1 h de formation incluse',
                  '60 min/mois de modifications',
                  'Délai support : 24–48 h',
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-light/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="block w-full btn-primary text-center text-lg py-4">
                Je lance ma boutique en ligne →
              </Link>
            </motion.div>

            {/* Formule Growth+ */}
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
              className="bg-gradient-to-br from-primary/20 to-dark-surface border-2 border-primary rounded-2xl p-8 hover:shadow-glow transition-all"
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-light mb-2">📈 Growth+</h3>
                <p className="text-light/70 mb-4">Pour les marques qui veulent croître</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-primary">499€</span>
                  <span className="text-xl text-light/70">/mois</span>
                </div>
                <p className="text-sm text-light/60 mt-2">+ 790 € activation</p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  'Tout du plan Business ou E-commerce',
                  'Plan éditorial mensuel (2 contenus/mois)',
                  'A/B Testing (1 test/trimestre)',
                  'Rapport mensuel + call 30 min',
                  '90 min/mois de modifications',
                  'SLA 24 h',
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-light/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="block w-full bg-primary hover:bg-primary-dark text-white font-bold text-center text-lg py-4 rounded-xl transition-all">
                Je passe en mode croissance →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - OPTIONS */}
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
              💎 Faites évoluer votre site <span className="gradient-text">à votre rythme</span>
            </h2>
            <p className="text-xl text-light/90">Des options simples pour booster votre visibilité ou vos ventes</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Croissance & SEO */}
            <div className="bg-dark-surface/90 border-2 border-primary/30 rounded-xl p-6">
              <BarChart className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-light mb-4">Croissance & SEO</h3>
              <ul className="space-y-3 text-light/80">
                <li>SEO Avancé — <strong>249 €/mois</strong></li>
                <li>Google Ads Setup — <strong>290 € + 149€/mois</strong></li>
                <li>Meta Ads Setup — <strong>240 € + 129€/mois</strong></li>
                <li>Réputation locale — <strong>49 €/mois</strong></li>
              </ul>
            </div>

            {/* Fonctionnalités */}
            <div className="bg-dark-surface/90 border-2 border-primary/30 rounded-xl p-6">
              <Package className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-light mb-4">Fonctionnalités</h3>
              <ul className="space-y-3 text-light/80">
                <li>Réservation avancée — <strong>190 € + 19€/mois</strong></li>
                <li>Multilingue — <strong>150€/langue + 9€/mois</strong></li>
                <li>E-shop &gt; 100 produits — <strong>+ 90€/mois</strong></li>
                <li>Chat WhatsApp — <strong>9 €/mois</strong></li>
              </ul>
            </div>

            {/* Technique */}
            <div className="bg-dark-surface/90 border-2 border-primary/30 rounded-xl p-6">
              <Shield className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-light mb-4">Technique</h3>
              <ul className="space-y-3 text-light/80">
                <li>Performance Core Web Vitals — <strong>120 € + 9€/mois</strong></li>
                <li>Accessibilité AA — <strong>dès 290 €</strong></li>
                <li>Sauvegardes externes — <strong>5 €/mois</strong></li>
                <li>Politique cookies — <strong>7 €/mois</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - GARANTIES */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-center">
              🧾 Engagement flexible, <span className="gradient-text">transparence totale</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-dark-surface/90 border-2 border-primary/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-3">Engagement</h3>
                <ul className="space-y-2 text-light/90">
                  <li>✓ Engagement 12 mois minimum</li>
                  <li>✓ Pré-paiement 12 mois : <strong>–10 %</strong></li>
                  <li>✓ Engagement 24 mois : <strong>–15 %</strong></li>
                  <li>✓ Frais d&apos;activation offerts si paiement annuel</li>
                </ul>
              </div>

              <div className="bg-dark-surface/90 border-2 border-primary/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-3">Conditions</h3>
                <ul className="space-y-2 text-light/90">
                  <li>• Résiliation anticipée : 50 % des mensualités restantes</li>
                  <li>• Design propriété Market-IA pendant l&apos;abonnement</li>
                  <li>• Export possible : dès 490 € (vitrine) ou 990 € (e-commerce)</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 - TÉMOIGNAGES */}
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
              ✨ Ce qu&apos;en disent <span className="gradient-text">nos clients du Var</span>
            </h2>
            <p className="text-xl text-light/90">Des artisans, commerçants et indépendants qui ont franchi le pas</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Mis en ligne en 7 jours, et j'ai déjà eu mes premiers appels !",
                name: "Isabelle",
                role: "coiffeuse à La Garde"
              },
              {
                quote: "Le site se met à jour automatiquement avec mes publications Facebook, c'est top.",
                name: "Nicolas",
                role: "plombier à Solliès-Pont"
              },
              {
                quote: "Ils m'ont tout installé, même la prise de RDV en ligne. Je gagne 1 h par jour !",
                name: "Patrick",
                role: "kiné à Toulon"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
                className="bg-dark-surface/90 border-2 border-primary/30 rounded-xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-light/90 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                <div className="border-t border-primary/20 pt-4">
                  <p className="font-bold text-light">{testimonial.name}</p>
                  <p className="text-sm text-light/60">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 - CTA FINAL */}
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
              Prêt à propulser votre activité <span className="gradient-text">en ligne</span> ?
            </h2>
            <p className="text-xl text-light/90 mb-12">
              Nos experts créent et gèrent votre site pour vous, sans frais cachés
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white font-bold px-10 py-5 rounded-xl transition-all text-lg">
                Simuler mon projet
              </Link>
              <a href="#formules" className="bg-dark-surface/80 hover:bg-dark-lighter border-2 border-primary/40 hover:border-primary text-white font-bold px-10 py-5 rounded-xl transition-all text-lg">
                Découvrir les formules
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 8 - ARTICLE SEO */}
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
                Créer un site Internet professionnel dans le Var : <span className="gradient-text">le guide complet pour 2025</span>
              </h2>
            </motion.div>

            <div className="bg-dark-surface/90 border-2 border-primary/30 rounded-2xl p-8 md:p-12 space-y-8 text-light/80 leading-relaxed">
              <div>
                <h3 className="text-2xl font-bold text-light mb-4">Introduction</h3>
                <p>
                  <strong>Créer un site Internet professionnel dans le Var</strong> n&apos;est plus réservé aux grandes entreprises. Que vous soyez artisan, restaurateur, thérapeute ou entrepreneur, un site bien conçu peut transformer votre activité locale. Dans cet article, nous vous expliquons comment choisir la bonne solution, les pièges à éviter, et pourquoi le modèle d&apos;abonnement tout-inclus devient la référence.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-light mb-4">1️⃣ Pourquoi un site Internet reste indispensable en 2025</h3>
                <p>
                  Même à l&apos;heure des réseaux sociaux, 87 % des consommateurs recherchent d&apos;abord un site avant d&apos;acheter ou réserver. Dans le Var, où la concurrence locale est forte (Toulon, Hyères, Fréjus, Draguignan…), un site bien positionné sur Google garantit une visibilité continue et une crédibilité immédiate.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-light mb-4">2️⃣ Les erreurs les plus fréquentes des entreprises locales</h3>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Acheter un site &quot;à vie&quot; sans budget de maintenance</li>
                  <li>Négliger la sécurité (certificat SSL, sauvegardes)</li>
                  <li>Oublier le référencement naturel (SEO)</li>
                  <li>Avoir un design non responsive</li>
                  <li>Ne jamais mettre à jour les contenus</li>
                </ul>
                <p className="mt-4">
                  C&apos;est exactement pour corriger ces problèmes que le modèle à abonnement a été créé.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-light mb-4">3️⃣ Le modèle à abonnement : pourquoi il séduit les entrepreneurs</h3>
                <p>
                  Avec un abonnement, tout est inclus : hébergement, maintenance, mises à jour, petites modifications, et support humain. Vous ne payez plus un site &quot;mort&quot; au bout de 6 mois, mais un service vivant qui évolue avec votre activité.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-light mb-4">4️⃣ Quel type de site choisir ?</h3>
                <p><strong>Site vitrine (Essentiel)</strong> : parfait pour présenter vos services et coordonnées.</p>
                <p><strong>Site Business</strong> : pour automatiser les prises de contact.</p>
                <p><strong>E-commerce</strong> : vendre vos produits sans intermédiaire.</p>
                <p><strong>Growth+</strong> : stratégie complète avec contenus, tests, et optimisation.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-light mb-4">5️⃣ Le SEO local dans le Var</h3>
                <p>Le référencement naturel local repose sur 3 piliers :</p>
                <ul className="space-y-2 ml-6 list-disc mt-4">
                  <li>Une fiche Google Business bien optimisée (photos, horaires, avis)</li>
                  <li>Un site rapide et mobile-friendly</li>
                  <li>Des contenus géolocalisés (&quot;plombier à Hyères&quot;, &quot;restaurant à Toulon&quot;, etc.)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-light mb-4">6️⃣ Combien coûte réellement un site pro ?</h3>
                <p>
                  Un site &quot;one shot&quot; peut coûter 1500 € à 4000 € à la création, sans maintenance. Nos formules, dès <strong className="text-primary">99 €/mois</strong>, incluent tout : design, hébergement, support, SEO et sécurité. En deux ans, vous dépensez moins qu&apos;un site classique… avec un service 10 fois plus complet.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-light mb-4">7️⃣ Pourquoi choisir un prestataire local dans le Var</h3>
                <p>
                  Travailler avec une équipe basée dans le Var, c&apos;est bénéficier d&apos;un accompagnement humain et d&apos;une connaissance du territoire. Nous intervenons sur tout le département : <strong>Toulon, La Seyne, Hyères, Brignoles, Draguignan, Fréjus, Saint-Raphaël…</strong>
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-light mb-4">Conclusion</h3>
                <p>
                  En 2025, la <strong>création de site Internet dans le Var</strong> devient un levier stratégique pour toute entreprise locale. Avec un abonnement mensuel, vous obtenez un site rapide, visible, maintenu et soutenu par une équipe locale.
                </p>
                <p className="mt-4 text-primary font-bold text-xl">
                  🚀 Demandez votre site clé en main aujourd&apos;hui et soyez en ligne sous 10 jours !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SPÉCIFIQUE */}
      <section className="py-16 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-light/70 mb-4">Villes couvertes dans le Var :</p>
            <p className="text-light/90 text-sm">
              Toulon • Hyères • La Garde • Solliès-Pont • Brignoles • Draguignan • Fréjus • Saint-Raphaël • Le Luc • Vidauban • Bandol • La Seyne-sur-Mer
            </p>
            <div className="mt-8">
              <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl transition-all inline-block">
                Créer mon site maintenant
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
