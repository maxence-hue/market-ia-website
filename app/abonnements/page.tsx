import SubscriptionCard from '@/components/SubscriptionCard'
import PricingComparison from '@/components/PricingComparison'
import AddOnCard from '@/components/AddOnCard'
import { Sparkles, Shield, Zap, Clock } from 'lucide-react'
import Link from 'next/link'

const subscriptions = [
  {
    title: 'Essentiel',
    subtitle: 'Pour indépendants/TPE qui veulent être trouvés',
    price: 99,
    activation: 290,
    popular: false,
    features: [
      { text: 'Site vitrine 1 à 5 pages (Webflow)', included: true },
      { text: 'Design sur modèle premium customisé', included: true },
      { text: '100% responsive (mobile, tablet, desktop)', included: true },
      { text: 'Conformité RGPD + sécurité SSL', included: true },
      { text: 'SEO technique de base (balises, sitemap)', included: true },
      { text: 'Sauvegardes automatiques hebdomadaires', included: true },
      { text: '15 min/mois de petites modifications', included: true },
      { text: 'Support par email – SLA 72h', included: true },
      { text: 'Hébergement & maintenance inclus', included: true },
    ],
    cta: 'Démarrer avec Essentiel',
    href: '/abonnements/essentiel',
    savings: {
      '12_months': '990€ → 891€/an (-10%)',
      '24_months': '1782€ sur 24 mois (-15%)',
    },
  },
  {
    title: 'Business',
    subtitle: 'Visibilité + prise de contact automatisée',
    price: 179,
    activation: 390,
    popular: true,
    features: [
      { text: 'Tout du forfait Essentiel, +', included: true },
      { text: 'Blog / Actualités avec CMS intégré', included: true },
      { text: 'Fiche Google Business optimisée', included: true },
      { text: 'Système de prise de RDV en ligne', included: true },
      { text: 'Formulaires avancés + emails automatiques', included: true },
      { text: 'Intégration CRM basique (Notion/Airtable)', included: true },
      { text: '45 min/mois de modifications', included: true },
      { text: 'Support prioritaire – SLA 48h', included: true },
      { text: 'Rapport mensuel de performances', included: true },
    ],
    cta: 'Choisir Business',
    href: '/abonnements/business',
    savings: {
      '12_months': '1790€ → 1611€/an (-10%)',
      '24_months': '3222€ sur 24 mois (-15%)',
    },
  },
  {
    title: 'E-commerce',
    subtitle: 'Vendre en ligne sans prise de tête',
    price: 289,
    activation: 590,
    popular: false,
    features: [
      { text: 'Shopify ou Webflow Ecommerce (≤100 produits)', included: true },
      { text: 'Paiement sécurisé (Stripe/PayPal)', included: true },
      { text: 'Gestion taxes & modes de livraison', included: true },
      { text: 'Emails transactionnels configurés', included: true },
      { text: 'Formation 1h : gérer votre boutique', included: true },
      { text: 'Optimisation fiches produits', included: true },
      { text: '60 min/mois de modifications', included: true },
      { text: 'Support e-commerce – SLA 24-48h', included: true },
      { text: 'Sauvegardes quotidiennes', included: true },
    ],
    cta: 'Lancer ma boutique',
    href: '/abonnements/ecommerce',
    savings: {
      '12_months': '2890€ → 2601€/an (-10%)',
      '24_months': '5202€ sur 24 mois (-15%)',
    },
  },
  {
    title: 'Growth+',
    subtitle: 'Acquisition & optimisation continue',
    price: 499,
    activation: 790,
    popular: false,
    features: [
      { text: 'Tout E-commerce/Business, +', included: true },
      { text: 'Stratégie de contenu : 2 articles/mois', included: true },
      { text: 'AB testing trimestriel (landing, CTA)', included: true },
      { text: 'Optimisation conversion (CRO)', included: true },
      { text: 'Call stratégique mensuel 30 min', included: true },
      { text: 'Rapport détaillé + recommandations', included: true },
      { text: '90 min/mois de modifications', included: true },
      { text: 'Support premium – SLA 24h', included: true },
      { text: 'Accès prioritaire aux nouvelles features', included: true },
    ],
    cta: 'Accélérer ma croissance',
    href: '/abonnements/growth-plus',
    savings: {
      '12_months': '4990€ → 4491€/an (-10%)',
      '24_months': '8982€ sur 24 mois (-15%)',
    },
  },
]

const addons = {
  seo_growth: [
    {
      title: 'SEO Avancé',
      category: 'Croissance & SEO',
      monthly_price: 249,
      description: 'Recherche mots-clés, maillage interne, 2 contenus optimisés/mois',
      icon: '🔍',
    },
    {
      title: 'Google Ads Setup & Gestion',
      category: 'Croissance & SEO',
      setup_price: 290,
      monthly_price: 149,
      description: 'Configuration + suivi (budget publicitaire ≤1000€/mois)',
      icon: '📊',
    },
    {
      title: 'Meta Ads (Facebook/Instagram)',
      category: 'Croissance & SEO',
      setup_price: 240,
      monthly_price: 129,
      description: 'Campagnes ciblées + optimisation mensuelle',
      icon: '📱',
    },
    {
      title: 'Réputation locale',
      category: 'Croissance & SEO',
      monthly_price: 49,
      description: 'Collecte d\'avis clients + widgets d\'affichage',
      icon: '⭐',
    },
  ],
  functional: [
    {
      title: 'Réservation avancée',
      category: 'Fonctionnel',
      setup_price: 190,
      monthly_price: 19,
      description: 'Cautions, multi-ressources, calendrier partagé',
      icon: '📅',
    },
    {
      title: 'Site multilingue',
      category: 'Fonctionnel',
      setup_price: 150,
      monthly_price: 9,
      description: 'Par langue additionnelle (traduction + gestion)',
      icon: '🌍',
    },
    {
      title: 'E-shop >100 produits',
      category: 'Fonctionnel',
      setup_price: 'Sur devis',
      monthly_price: 90,
      description: 'Gestion catalogue étendu + optimisations',
      icon: '🛒',
    },
    {
      title: 'Portail client / Galerie privée',
      category: 'Fonctionnel',
      monthly_price: 19,
      description: 'Espace sécurisé pour vos clients',
      icon: '🔒',
    },
    {
      title: 'Chat en ligne + WhatsApp',
      category: 'Fonctionnel',
      monthly_price: 9,
      description: 'Widget de chat en temps réel',
      icon: '💬',
    },
    {
      title: 'Emailing professionnel',
      category: 'Fonctionnel',
      setup_price: 150,
      monthly_price: 29,
      description: 'Templates + séquence de bienvenue automatique',
      icon: '📧',
    },
  ],
  technical: [
    {
      title: 'Performance & Core Web Vitals',
      category: 'Technique & Conformité',
      setup_price: 120,
      monthly_price: 9,
      description: 'Optimisation vitesse, suivi Google PageSpeed',
      icon: '⚡',
    },
    {
      title: 'Accessibilité AA',
      category: 'Technique & Conformité',
      setup_price: 290,
      description: 'Audit + correctifs conformité WCAG',
      icon: '♿',
    },
    {
      title: 'Backups journaliers externes',
      category: 'Technique & Conformité',
      monthly_price: 5,
      description: 'Sauvegardes quotidiennes hors serveur',
      icon: '💾',
    },
    {
      title: 'Politique cookies conforme',
      category: 'Technique & Conformité',
      monthly_price: 7,
      description: 'Bandeau RGPD + gestion consentements',
      icon: '🍪',
    },
  ],
}

export default function AbonnementsPage() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              Engagement 12 mois minimum
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Votre site web, <span className="gradient-text">sans les soucis techniques</span>
          </h1>

          <p className="text-xl text-light/70 mb-8">
            Abonnement tout-inclus : création, hébergement, maintenance et évolutions
          </p>
        </div>
      </section>

      {/* Subscription Cards */}
      <section className="container mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {subscriptions.map((subscription, index) => (
            <SubscriptionCard key={index} subscription={subscription} />
          ))}
        </div>
      </section>

      {/* Pricing Comparison Table */}
      <section className="container mx-auto px-4 mb-24">
        <h2 className="text-4xl font-display font-bold mb-12 text-center">
          Comparateur <span className="gradient-text">détaillé</span>
        </h2>
        <div className="card-glass p-8">
          <PricingComparison />
        </div>
      </section>

      {/* Engagement Options */}
      <section className="container mx-auto px-4 mb-24">
        <h2 className="text-4xl font-display font-bold mb-12 text-center">
          Options d&apos;<span className="gradient-text">engagement</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="card-glass p-8 text-center">
            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-display font-bold mb-2">Mensuel</h3>
            <p className="text-light/70 mb-4">Engagement minimum 12 mois</p>
            <div className="text-2xl font-bold text-primary">Tarif standard</div>
          </div>

          <div className="card-glass p-8 text-center ring-2 ring-primary">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-display font-bold mb-2">Annuel</h3>
            <p className="text-light/70 mb-4">Paiement annuel d&apos;avance</p>
            <div className="text-2xl font-bold text-primary">-10% + Activation offerte</div>
          </div>

          <div className="card-glass p-8 text-center">
            <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-display font-bold mb-2">24 mois</h3>
            <p className="text-light/70 mb-4">Engagement longue durée</p>
            <div className="text-2xl font-bold text-primary">-15%</div>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="container mx-auto px-4 mb-24">
        <h2 className="text-4xl font-display font-bold mb-4 text-center">
          Options & <span className="gradient-text">Add-ons</span>
        </h2>
        <p className="text-center text-light/70 mb-12 max-w-2xl mx-auto">
          Boostez votre abonnement avec nos options complémentaires
        </p>

        {/* SEO & Growth */}
        <div className="mb-12">
          <h3 className="text-2xl font-display font-bold mb-6 text-primary">
            🚀 Croissance & SEO
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.seo_growth.map((addon, index) => (
              <AddOnCard key={index} addon={addon} />
            ))}
          </div>
        </div>

        {/* Functional */}
        <div className="mb-12">
          <h3 className="text-2xl font-display font-bold mb-6 text-primary">
            ⚙️ Fonctionnalités
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addons.functional.map((addon, index) => (
              <AddOnCard key={index} addon={addon} />
            ))}
          </div>
        </div>

        {/* Technical */}
        <div>
          <h3 className="text-2xl font-display font-bold mb-6 text-primary">
            🔧 Technique & Conformité
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.technical.map((addon, index) => (
              <AddOnCard key={index} addon={addon} />
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="container mx-auto px-4 mb-24">
        <h2 className="text-4xl font-display font-bold mb-12 text-center">
          Nos <span className="gradient-text">Garanties</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="card-glass p-6 flex items-start gap-4">
            <span className="text-2xl">✅</span>
            <div>
              <h3 className="font-bold text-light mb-2">Mis en ligne en 10 jours ouvrés</h3>
              <p className="text-light/70 text-sm">Ou 1 mois offert</p>
            </div>
          </div>
          <div className="card-glass p-6 flex items-start gap-4">
            <span className="text-2xl">✅</span>
            <div>
              <h3 className="font-bold text-light mb-2">Score PageSpeed &gt; 90</h3>
              <p className="text-light/70 text-sm">Garanti sur tous nos sites</p>
            </div>
          </div>
          <div className="card-glass p-6 flex items-start gap-4">
            <span className="text-2xl">✅</span>
            <div>
              <h3 className="font-bold text-light mb-2">Portfolio par secteur</h3>
              <p className="text-light/70 text-sm">Resto, artisan, immo, bien-être...</p>
            </div>
          </div>
          <div className="card-glass p-6 flex items-start gap-4">
            <span className="text-2xl">✅</span>
            <div>
              <h3 className="font-bold text-light mb-2">Études de cas réelles</h3>
              <p className="text-light/70 text-sm">Métriques et résultats démontrés</p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Clauses */}
      <section className="container mx-auto px-4 mb-24">
        <div className="card-glass p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-6">📋 Clauses importantes</h2>
          <ul className="space-y-3 text-light/70 text-sm">
            <li>• Modifications incluses = petites retouches (texte, prix, horaires, 3 visuels max)</li>
            <li>• Au-delà : 60€/h (minimum 30 min)</li>
            <li>• Urgences &lt;24h : +40% de majoration</li>
            <li>• Résiliation anticipée : 50% des mensualités restantes</li>
            <li>• Export du site : frais 490€ (vitrine) / 990€ (e-commerce)</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <div className="card-glass p-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-4">
            Prêt à démarrer ?
          </h2>
          <p className="text-light/70 mb-8">
            Discutons de votre projet et trouvons l&apos;abonnement parfait
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </div>
  )
}
