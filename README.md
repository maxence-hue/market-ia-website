# 🚀 Market-IA - Site Web Complet

Site web professionnel avec système d'abonnements et intégration Netlify CMS.

## ✨ Fonctionnalités

- ✅ **4 tiers d'abonnement** (Essentiel, Business, E-commerce, Growth+)
- ✅ **12+ add-ons** disponibles
- ✅ **Netlify CMS** intégré pour gestion de contenu
- ✅ **Blog** avec articles MDX
- ✅ **Formulaires** de contact et devis avec validation Zod
- ✅ **Webhooks** Zapier/n8n pour automatisation
- ✅ **Design moderne** avec TailwindCSS et Framer Motion
- ✅ **100% responsive** et optimisé pour le SEO
- ✅ **Score PageSpeed > 90** garanti

## 🛠️ Technologies

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **CMS:** Netlify CMS
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React
- **Deployment:** Netlify

## 📦 Installation

### 1. Installer les dépendances

```bash
npm install
```

### 2. Configurer les variables d'environnement

Créez un fichier `.env.local` :

```bash
# Webhook Zapier/n8n pour formulaire contact
ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/YOUR_ID/

# Webhook pour formulaire devis (optionnel, sinon utilise ZAPIER_WEBHOOK_URL)
ZAPIER_DEVIS_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/YOUR_ID/

# URL du site (automatique sur Netlify)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Lancer en développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000)

## 📁 Structure du projet

```
market-ia/
├── app/                          # Pages Next.js (App Router)
│   ├── page.tsx                 # Page d'accueil
│   ├── layout.tsx               # Layout global
│   ├── globals.css              # Styles globaux
│   ├── abonnements/             # Pages abonnements
│   ├── services/                # Pages services
│   ├── blog/                    # Pages blog
│   ├── about/                   # À propos
│   ├── contact/                 # Contact
│   └── api/                     # API Routes
├── components/                   # Composants React
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── SubscriptionCard.tsx
│   ├── ContactForm.tsx
│   └── ...
├── content/                      # Contenu géré par CMS
│   ├── blog/                    # Articles de blog (MDX)
│   ├── settings/                # Paramètres généraux
│   ├── subscriptions/           # Données abonnements
│   └── add-ons/                 # Données add-ons
├── public/                       # Assets statiques
│   ├── admin/                   # Netlify CMS
│   │   ├── config.yml          # Configuration CMS
│   │   └── index.html
│   └── images/                  # Images
└── netlify.toml                 # Configuration Netlify
```

## 🎨 Pages disponibles

### Pages principales
- `/` - Accueil
- `/abonnements` - Comparateur d'abonnements
- `/abonnements/essentiel` - Détails Essentiel
- `/abonnements/business` - Détails Business
- `/abonnements/ecommerce` - Détails E-commerce
- `/abonnements/growth-plus` - Détails Growth+

### Services
- `/services/site-web` - Sites web
- `/services/automatisations` - Automatisations IA
- `/services/saas-personnalise` - SaaS sur mesure
- `/services/formations` - Formations
- `/services/marque-blanche` - Marque blanche

### Autres
- `/blog` - Liste des articles
- `/about` - À propos
- `/contact` - Formulaire de contact
- `/mentions-legales` - Mentions légales
- `/cgv` - Conditions générales de vente
- `/confidentialite` - Politique de confidentialité

## 📝 Netlify CMS

### Accéder à l'admin

En développement : `http://localhost:3000/admin`
En production : `https://votre-site.netlify.app/admin`

### Configuration

Le CMS est configuré dans `public/admin/config.yml` avec les collections :
- Abonnements
- Add-ons
- Services
- Blog
- Équipe
- Paramètres généraux

### Activation sur Netlify

1. Déployez le site sur Netlify
2. Allez dans **Site settings → Identity**
3. Cliquez sur **Enable Identity**
4. Dans **Registration preferences**, sélectionnez **Invite only**
5. Activez **Git Gateway** dans **Services → Git Gateway**
6. Invitez des utilisateurs via **Identity → Invite users**

## 🚀 Déploiement sur Netlify

### Méthode 1 : Via Git

1. **Initialisez Git**
```bash
cd market-ia
git init
git add .
git commit -m "Initial commit - Market-IA complete site"
```

2. **Créez un repo GitHub**
```bash
# Sur GitHub, créez un nouveau repository
# Puis :
git remote add origin https://github.com/VOTRE-USERNAME/market-ia.git
git branch -M main
git push -u origin main
```

3. **Connectez à Netlify**
- Allez sur [app.netlify.com](https://app.netlify.com)
- Cliquez sur **Add new site → Import an existing project**
- Sélectionnez votre repo GitHub
- Configuration détectée automatiquement
- Cliquez sur **Deploy**

### Méthode 2 : Netlify CLI

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Déployer
netlify deploy --prod
```

### Variables d'environnement

Ajoutez dans **Site settings → Environment variables** :
- `ZAPIER_WEBHOOK_URL`
- `ZAPIER_DEVIS_WEBHOOK_URL` (optionnel)

## 🎯 Webhooks Zapier/n8n

### Configuration

1. Créez un Zap/workflow sur Zapier ou n8n
2. Utilisez un trigger **Webhook - Catch Hook**
3. Copiez l'URL du webhook
4. Ajoutez-la dans `.env.local` ou les variables Netlify

### Données envoyées

**Formulaire contact :**
```json
{
  "firstName": "Jean",
  "lastName": "Dupont",
  "email": "jean@example.com",
  "phone": "0123456789",
  "service": "business",
  "budget": "1000-2500",
  "message": "Je souhaite...",
  "timestamp": "2025-10-21T14:30:00.000Z",
  "source": "market-ia-website",
  "type": "contact"
}
```

**Formulaire devis :**
```json
{
  "companyName": "Mon Entreprise",
  "firstName": "Jean",
  "lastName": "Dupont",
  "email": "jean@example.com",
  "phone": "0123456789",
  "sector": "retail",
  "processToAutomate": "Gestion des commandes...",
  "currentTools": ["Google Workspace", "Notion"],
  "mainGoal": "Gagner du temps...",
  "startDate": "asap",
  "timestamp": "2025-10-21T14:30:00.000Z",
  "source": "market-ia-website",
  "type": "devis-automatisation"
}
```

## 🎨 Personnalisation

### Couleurs

Modifiez dans `tailwind.config.ts` :

```typescript
colors: {
  primary: {
    DEFAULT: '#7B61FF',  // Votre couleur principale
    light: '#9B87FF',
    dark: '#5B41DF',
  },
  // ...
}
```

### Logo

Remplacez dans `components/Header.tsx` et `components/Footer.tsx`

### Images

Ajoutez vos images dans `public/images/`

## 📊 Analytics

Pour ajouter Google Analytics :

1. Installez le package :
```bash
npm install @next/third-parties
```

2. Ajoutez dans `app/layout.tsx` :
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

// Dans le return
<GoogleAnalytics gaId="GA_MEASUREMENT_ID" />
```

## 🔧 Scripts disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Vérification du code
```

## ✅ Checklist pré-déploiement

- [ ] Variables d'environnement configurées
- [ ] Webhooks Zapier/n8n testés
- [ ] Logo et images personnalisés
- [ ] Informations de contact mises à jour
- [ ] SIRET ajouté dans mentions légales
- [ ] Analytics configuré (optionnel)
- [ ] Build réussi localement (`npm run build`)
- [ ] Test sur mobile et desktop

## 📞 Support

Pour toute question sur ce site :
- Email : contact@market-ia.fr
- Documentation Next.js : [nextjs.org/docs](https://nextjs.org/docs)
- Documentation Netlify CMS : [netlifycms.org/docs](https://www.netlifycms.org/docs/)

## 📄 Licence

Propriété de Market-IA. Tous droits réservés.

---

**Développé avec ❤️ par Market-IA**
