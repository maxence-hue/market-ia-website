# 🎉 Site Market-IA - Démarrage Rapide

Félicitations ! Votre site web complet Market-IA est prêt. Voici comment le lancer.

## ✅ Ce qui a été créé

### Pages (25 au total)
- ✅ **Accueil** avec hero, services, témoignages, CTA
- ✅ **4 pages d'abonnements** (Essentiel, Business, E-commerce, Growth+)
- ✅ **Comparateur** d'abonnements avec tableau détaillé
- ✅ **12+ add-ons** (SEO, Ads, fonctionnalités techniques)
- ✅ **5 pages services** (Sites Web, Automatisations, SaaS, Formations, Marque Blanche)
- ✅ **Blog** avec 3 articles complets en MDX
- ✅ **Pages légales** (Mentions, CGV, Confidentialité)
- ✅ **Contact & À propos**

### Fonctionnalités
- ✅ **Netlify CMS** configuré pour gérer le contenu
- ✅ **Formulaires validés** avec React Hook Form + Zod
- ✅ **Webhooks** vers Zapier/n8n
- ✅ **Design responsive** mobile/tablet/desktop
- ✅ **Animations** Framer Motion
- ✅ **SEO optimisé** avec metadata
- ✅ **Build réussi** - prêt pour production

## 🚀 Lancement en local

### 1. Installer les dépendances (déjà fait)
```bash
cd market-ia
npm install  # ✅ Déjà installé
```

### 2. Configurer les variables d'environnement

Créez un fichier `.env.local` :

```bash
ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/YOUR_ID/
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Lancer le serveur de développement

```bash
npm run dev
```

Ouvrez **http://localhost:3000** dans votre navigateur.

## 📝 Accéder à Netlify CMS (Admin)

En local : **http://localhost:3000/admin**

⚠️ En local, le CMS fonctionne en mode "Git Gateway" qui nécessite une configuration Netlify. Pour tester localement, vous pouvez :

1. Déployer d'abord sur Netlify
2. Ou utiliser le backend `test-repo` dans `public/admin/config.yml` temporairement

## 🌐 Déploiement sur Netlify

### Option 1 : Via GitHub (Recommandé)

#### 1. Initialiser Git
```bash
git init
git add .
git commit -m "Initial commit - Market-IA site complet"
```

#### 2. Créer un repo GitHub
- Allez sur https://github.com/new
- Créez un repo "market-ia"
- Puis :

```bash
git remote add origin https://github.com/VOTRE-USERNAME/market-ia.git
git branch -M main
git push -u origin main
```

#### 3. Connecter à Netlify
1. Allez sur https://app.netlify.com
2. Cliquez **Add new site → Import an existing project**
3. Sélectionnez GitHub
4. Choisissez votre repo `market-ia`
5. Configuration détectée automatiquement ✅
6. Cliquez **Deploy**

#### 4. Configurer les variables d'environnement
Dans Netlify : **Site settings → Environment variables**

Ajoutez :
- `ZAPIER_WEBHOOK_URL` = votre URL webhook Zapier/n8n

#### 5. Activer Netlify CMS
1. **Site settings → Identity → Enable Identity**
2. **Registration preferences** : Invite only
3. **Services → Git Gateway → Enable**
4. **Identity → Invite users** : ajoutez votre email
5. Vous recevrez un email d'invitation
6. Après activation, accédez à `/admin`

### Option 2 : Netlify CLI

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Déployer
netlify deploy --prod
```

## 🎨 Personnalisation

### Logo et images

**Remplacez :**
- Logo dans `components/Header.tsx` et `Footer.tsx`
- Photos d'équipe dans `public/images/team/` (maxence.jpg, marie.jpg, team.jpg)
- Images de blog dans `public/images/blog/`

### Couleurs

Modifiez `tailwind.config.ts` :

```typescript
colors: {
  primary: {
    DEFAULT: '#7B61FF',  // Votre couleur principale
    light: '#9B87FF',
    dark: '#5B41DF',
  },
}
```

### Informations de contact

Modifiez `content/settings/general.json` :

```json
{
  "email": "votre@email.com",
  "phone": "+33 X XX XX XX XX",
  "address": "Votre adresse"
}
```

### SIRET

Ajoutez votre SIRET dans `app/mentions-legales/page.tsx`

## 📊 Webhooks Zapier/n8n

### Configuration

1. **Créez un Zap** sur Zapier ou un workflow sur n8n
2. Trigger : **Webhook - Catch Hook**
3. **Copiez l'URL** du webhook
4. Ajoutez dans `.env.local` ou variables Netlify

### Exemple de données reçues

**Formulaire contact :**
```json
{
  "firstName": "Jean",
  "lastName": "Dupont",
  "email": "jean@example.com",
  "service": "business",
  "message": "Je souhaite...",
  "type": "contact",
  "timestamp": "2025-10-21T14:30:00.000Z"
}
```

### Actions suggérées
- Envoi email de notification
- Ajout dans CRM (Notion, Airtable, HubSpot)
- Notification Slack
- Création de ticket support

## 📱 Pages à tester

### Navigation principale
- http://localhost:3000 (Accueil)
- http://localhost:3000/abonnements (Abonnements)
- http://localhost:3000/services/automatisations (Automatisations)
- http://localhost:3000/blog (Blog)
- http://localhost:3000/contact (Contact)

### Abonnements détaillés
- /abonnements/essentiel
- /abonnements/business
- /abonnements/ecommerce
- /abonnements/growth-plus

### Services
- /services/site-web
- /services/automatisations (avec formulaire devis)
- /services/saas-personnalise
- /services/formations
- /services/marque-blanche

### Blog
- /blog/abonnement-vs-projet
- /blog/automatisation-marketing
- /blog/diagnostic-automatisation

## ✅ Checklist avant production

- [ ] Logo personnalisé
- [ ] Images ajoutées (équipe, blog)
- [ ] Informations de contact mises à jour
- [ ] SIRET ajouté dans mentions légales
- [ ] Variables d'environnement configurées sur Netlify
- [ ] Webhooks Zapier/n8n testés
- [ ] Netlify Identity activé
- [ ] Utilisateurs admin invités
- [ ] Test sur mobile et desktop
- [ ] Domaine personnalisé configuré (optionnel)

## 🆘 Support & Documentation

### Documentation officielle
- **Next.js** : https://nextjs.org/docs
- **TailwindCSS** : https://tailwindcss.com/docs
- **Netlify** : https://docs.netlify.com
- **Netlify CMS** : https://www.netlifycms.org/docs

### Structure des fichiers

```
market-ia/
├── app/              # Pages Next.js
├── components/       # Composants React
├── content/          # Contenu géré par CMS
├── public/           # Assets statiques
│   └── admin/       # Netlify CMS
└── netlify.toml     # Config Netlify
```

### Scripts NPM

```bash
npm run dev      # Développement
npm run build    # Build production (✅ testé)
npm run start    # Serveur production
npm run lint     # Vérification code
```

## 🎯 Prochaines étapes

1. **Testez localement** : `npm run dev`
2. **Personnalisez** le contenu et les images
3. **Configurez** les webhooks
4. **Déployez** sur Netlify
5. **Activez** Netlify CMS
6. **Testez** le formulaire de contact
7. **Configurez** un domaine personnalisé (market-ia.fr)

## 🌟 Fonctionnalités bonus à ajouter

- Google Analytics (voir README.md)
- Chat en ligne (Crisp, Intercom)
- Newsletter (Brevo, Mailchimp)
- Pixel Facebook / Google Ads
- Système de cookies RGPD

---

**Le site est 100% prêt à être déployé !** 🚀

Pour toute question, consultez le README.md complet.
