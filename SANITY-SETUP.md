# 🎨 Configuration Sanity CMS - Market-IA

## 📋 Étapes de configuration (10 minutes)

### 1. Créer un compte Sanity

👉 **Allez sur** : https://www.sanity.io/

- Cliquez sur "Get started"
- Connectez-vous avec GitHub

### 2. Créer un nouveau projet

Dans le dashboard Sanity :

1. Cliquez sur "Create project"
2. **Nom du projet** : `Market-IA`
3. **Dataset** : `production`
4. Cliquez sur "Create project"

### 3. Récupérer les credentials

Dans votre projet Sanity :

1. Allez dans **Settings** (⚙️)
2. Notez le **Project ID** (ex: `abc123xyz`)
3. Allez dans **API** → **Tokens**
4. Créez un token :
   - **Name** : `Production Token`
   - **Permissions** : `Editor`
   - Copiez le token (vous ne le verrez qu'une fois !)
   skj5WJ4J5oOpEPK0XAsqsuiSchYaxSSti4jRYX1x1iQhu8eHRVEz2VoEGUoKYC4JWmXRBNZ4xDNfgIk63a8u5xWkaxJHb61TCQbpGI2bn6aDYjXtgkVnHvqNhh7mRGU4D5JXtBAWocrJmzJYFmQAvqd3SX65gMpquS2w7LYNpHafq9Xw9cox

### 4. Configurer les variables d'environnement

#### Sur Vercel

👉 **Allez sur** : https://vercel.com/marketia/market-ia/settings/environment-variables

Ajoutez ces 4 variables :

```
NEXT_PUBLIC_SANITY_PROJECT_ID = fhtlzqpe
NEXT_PUBLIC_SANITY_DATASET = production
NEXT_PUBLIC_SANITY_API_VERSION = 2024-10-21
SANITY_API_TOKEN = [votre token]
```

✅ **Cochez** : Production, Preview, Development

#### En local (optionnel)

Créez `.env.local` :

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-10-21
SANITY_API_TOKEN=sk_xxx...
```

### 5. Déployer sur Vercel

Vercel → **Deployments** → **Redeploy**

Attendez que le déploiement se termine.

### 6. Accéder au Studio

👉 **URL du studio** : https://market-ia.vercel.app/studio

- Connectez-vous avec votre compte Sanity
- ✅ Vous pouvez maintenant créer du contenu !

---

## 🎯 Utilisation du Studio

### Créer un article de blog

1. Allez sur https://market-ia.vercel.app/studio
2. Cliquez sur **"Articles de Blog"**
3. Cliquez sur **"Create"**
4. Remplissez :
   - **Titre** : "Mon premier article"
   - **Slug** : Cliquez sur "Generate" (auto depuis le titre)
   - **Catégorie** : Choisissez (IA, Marketing, etc.)
   - **Extrait** : Description courte
   - **Image de couverture** : Upload une image
   - **Contenu** : Écrivez votre article (rich text)
5. Cliquez sur **"Publish"**

### Créer un service

1. Cliquez sur **"Services"**
2. Cliquez sur **"Create"**
3. Remplissez :
   - **Titre** : "Nouveau service"
   - **Slug** : Generate
   - **Icône** : Nom de l'icône Lucide (ex: `Globe`, `Zap`)
   - **Prix de départ** : 490
   - **Label du prix** : "Site vitrine complet"
   - **Description courte** : Pitch du service
   - **Fonctionnalités** : Liste des features
4. **Publish**

### Créer un abonnement

1. Cliquez sur **"Abonnements"**
2. **Create**
3. Remplissez :
   - **Nom** : "Essentiel"
   - **Prix mensuel** : 290
   - **Frais d'activation** : 0
   - **Populaire** : Cochez si c'est l'offre vedette
   - **Ordre** : 1, 2, 3... (pour l'affichage)
   - **Fonctionnalités** : Ajoutez chaque feature
4. **Publish**

### Ajouter un membre d'équipe

1. **"Équipe"** → **Create**
2. Remplissez :
   - **Nom** : "Maxence"
   - **Rôle** : "CEO & Fondateur"
   - **Description** : Bio courte
   - **Photo** : Upload
   - **Ordre** : 1
   - **LinkedIn** : URL (optionnel)
3. **Publish**

### Ajouter un témoignage

1. **"Témoignages"** → **Create**
2. Remplissez :
   - **Nom** : "Sophie Durand"
   - **Entreprise** : "E-commerce Mode"
   - **Poste** : "CEO"
   - **Témoignage** : Le texte
   - **Résultat** : "+250% de conversions"
   - **Note** : 5
3. **Publish**

### Configurer les paramètres du site

1. **"Paramètres du site"** → **Create** (une seule fois)
2. Remplissez :
   - **Nom du site** : "Market-IA"
   - **Slogan** : "Votre partenaire IA"
   - **Email** : contact@market-ia.fr
   - **Téléphone** : +33 X XX XX XX XX
   - **Réseaux sociaux** : URLs LinkedIn, Twitter, Instagram
   - **Titre Hero** : "Transformez votre business avec l'IA"
   - **Sous-titre Hero** : Description
3. **Publish**

---

## 🔄 Déploiement automatique

### Configurer le webhook Vercel

#### 1. Créer un Deploy Hook sur Vercel

1. Allez sur https://vercel.com/marketia/market-ia/settings/git
2. Scrollez jusqu'à **"Deploy Hooks"**
3. Cliquez sur **"Create Hook"**
4. **Name** : `Sanity Content Update`
5. **Branch** : `main`
6. Cliquez sur **"Create Hook"**
7. **Copiez l'URL** (ex: `https://api.vercel.com/v1/integrations/deploy/...`)

#### 2. Configurer le webhook dans Sanity

1. Allez sur https://www.sanity.io/manage
2. Sélectionnez votre projet **Market-IA**
3. Allez dans **API** → **Webhooks**
4. Cliquez sur **"Create webhook"**
5. Remplissez :
   - **Name** : `Deploy to Vercel`
   - **URL** : Collez l'URL du deploy hook Vercel
   - **Dataset** : `production`
   - **Trigger on** : Cochez `Create`, `Update`, `Delete`
   - **Filter** : 
     ```
     *[_type in ["blog", "service", "subscription", "team", "testimonial", "settings"]]
     ```
6. Cliquez sur **"Save"**

#### 3. Tester le workflow

1. Allez sur https://market-ia.vercel.app/studio
2. Créez ou modifiez un article
3. Cliquez sur **"Publish"**
4. Allez sur https://vercel.com/marketia/market-ia/deployments
5. ✅ Un nouveau déploiement devrait démarrer automatiquement !
6. Attendez 1-2 minutes
7. Vérifiez que vos changements sont visibles sur le site

---

## 📊 Structure du contenu

### Types de contenu disponibles

| Type | Description | Utilisation |
|------|-------------|-------------|
| **Blog** | Articles de blog | `/blog` et `/blog/[slug]` |
| **Service** | Pages services | `/services/[slug]` |
| **Subscription** | Abonnements | `/abonnements` |
| **Team** | Membres équipe | Page À propos |
| **Testimonial** | Témoignages clients | Homepage, pages services |
| **Settings** | Paramètres site | Global (header, footer, hero) |

### Schémas de données

#### Blog
- Titre, slug, auteur (référence équipe)
- Catégorie (IA, Marketing, Automatisation, Business)
- Image de couverture
- Extrait (200 caractères max)
- Contenu (rich text avec images et code)
- Date de publication
- SEO (meta title, meta description)

#### Service
- Titre, slug, icône Lucide
- Prix de départ, label du prix
- Description courte
- Image
- Liste de fonctionnalités
- Contenu détaillé (rich text)

#### Subscription
- Nom, slug
- Prix mensuel, frais d'activation
- Badge "Populaire"
- Ordre d'affichage
- Description
- Fonctionnalités (avec statut inclus/non inclus)
- Temps inclus, SLA
- Contenu détaillé

#### Team
- Nom, rôle
- Description
- Photo
- Ordre d'affichage
- LinkedIn (optionnel)

#### Testimonial
- Nom, entreprise, poste
- Témoignage (texte)
- Résultat (ex: "+250% de conversions")
- Photo
- Note (1-5 étoiles)

#### Settings
- Nom du site, slogan, description
- Email, téléphone, adresse
- Réseaux sociaux (LinkedIn, Twitter, Instagram)
- Titre et sous-titre Hero

---

## 🚀 Commandes utiles

```bash
# Lancer le site en dev
npm run dev

# Lancer Sanity Studio en local (optionnel)
npm run dev:studio

# Build du site
npm run build

# Démarrer en production
npm start
```

---

## ✅ Checklist de configuration

- [ ] Compte Sanity créé
- [ ] Projet "Market-IA" créé
- [ ] Project ID récupéré
- [ ] Token API créé
- [ ] Variables d'environnement ajoutées sur Vercel
- [ ] Site redéployé
- [ ] Studio accessible sur `/studio`
- [ ] Deploy Hook Vercel créé
- [ ] Webhook Sanity configuré
- [ ] Test : créer un article → déploiement auto → article visible

---

## 🎉 Résultat

**Après configuration :**

✅ Studio accessible sur https://market-ia.vercel.app/studio  
✅ Créez/modifiez du contenu facilement  
✅ Déploiement automatique à chaque modification  
✅ Contenu visible sur le site en 1-2 minutes  

**Plus besoin de :**

❌ Modifier le code pour changer du contenu  
❌ Faire des commits Git  
❌ Déployer manuellement  

**Éditez votre site depuis n'importe où avec juste votre navigateur ! 🌐**
