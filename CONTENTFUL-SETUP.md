# 🚀 GUIDE COMPLET - CONTENTFUL SETUP

## ✅ CE QUI A ÉTÉ FAIT

Votre site est maintenant **prêt pour Contentful** :

- ✅ Admin interne supprimé
- ✅ Packages Contentful installés
- ✅ Configuration créée
- ✅ Pages blog et galerie créées
- ✅ Types TypeScript définis

---

## 📋 ÉTAPE 1 : CRÉER UN COMPTE CONTENTFUL (5 minutes)

### 1. Inscription

1. Allez sur **https://www.contentful.com**
2. Cliquez sur **"Start building for free"**
3. Créez un compte (email + mot de passe)
4. Vérifiez votre email

### 2. Créer un Space

1. Une fois connecté, cliquez sur **"Create space"**
2. Choisissez **"Free"** (gratuit)
3. Nom du space : **"Market-IA"**
4. Cliquez sur **"Create space"**

---

## 🔑 ÉTAPE 2 : RÉCUPÉRER VOS CLÉS API (2 minutes)

### Dans Contentful

1. Cliquez sur **Settings** (en haut à droite)
2. Sélectionnez **API keys**
3. Cliquez sur **"Add API key"**
4. Nom : **"Market-IA Production"**
5. Cliquez sur **"Save"**

### Notez ces 3 valeurs

```
Space ID : xxxxxxxxxx
Content Delivery API - access token : xxxxxxxxxx
Content Preview API - access token : xxxxxxxxxx
```

---

## 💾 ÉTAPE 3 : CONFIGURER LES VARIABLES (1 minute)

### En local

Créez le fichier `.env.local` à la racine du projet :

```bash
CONTENTFUL_SPACE_ID=votre_space_id
CONTENTFUL_ACCESS_TOKEN=votre_delivery_token
CONTENTFUL_PREVIEW_ACCESS_TOKEN=votre_preview_token
```

**Remplacez** les valeurs par celles que vous avez notées.

### Sur Vercel

1. Allez sur **https://vercel.com**
2. Sélectionnez votre projet
3. **Settings** → **Environment Variables**
4. Ajoutez les 3 variables (même noms, mêmes valeurs)
5. Cochez **Production**, **Preview**, **Development**
6. Cliquez **"Save"**

---

## 📝 ÉTAPE 4 : CRÉER LES MODÈLES DE CONTENU (10 minutes)

### Modèle 1 : Blog Post

1. Dans Contentful, cliquez sur **Content model**
2. Cliquez sur **"Add content type"**
3. Nom : **"Blog Post"**
4. API Identifier : **"blogPost"** (important !)
5. Cliquez sur **"Create"**

### Ajoutez ces champs (dans l'ordre)

| Nom du champ | Type | Paramètres |
|---|---|---|
| **Title** | Short text | Required, Unique |
| **Slug** | Short text | Required, Unique |
| **Excerpt** | Long text | Required |
| **Cover Image** | Media | Required, Images only |
| **Content** | Rich text | Required |
| **Author** | Short text | Required |
| **Publish Date** | Date & time | Required |
| **Category** | Short text | Optional |
| **Tags** | Short text, list | Optional |

**Pour chaque champ :**
1. Cliquez sur **"Add field"**
2. Sélectionnez le type
3. Entrez le nom
4. Configurez les paramètres
5. Cliquez **"Create and configure"**
6. Cochez **"Required"** si nécessaire
7. Cliquez **"Confirm"**

### Modèle 2 : Gallery Image

1. **Content model** → **"Add content type"**
2. Nom : **"Gallery Image"**
3. API Identifier : **"galleryImage"** (important !)
4. Cliquez sur **"Create"**

### Ajoutez ces champs

| Nom du champ | Type | Paramètres |
|---|---|---|
| **Title** | Short text | Required |
| **Description** | Long text | Optional |
| **Image** | Media | Required, Images only |

---

## ✍️ ÉTAPE 5 : CRÉER VOTRE PREMIER ARTICLE (5 minutes)

### Dans Contentful

1. Cliquez sur **Content**
2. Cliquez sur **"Add entry"**
3. Sélectionnez **"Blog Post"**

### Remplissez les champs

```
Title: Mon premier article avec Contentful
Slug: premier-article-contentful
Excerpt: Découvrez comment j'ai intégré Contentful à mon site Next.js
Cover Image: [Uploadez une image]
Content: [Écrivez votre contenu avec l'éditeur riche]
Author: Votre nom
Publish Date: [Sélectionnez aujourd'hui]
Category: Tutoriels
Tags: contentful, nextjs, cms
```

### Publiez

1. Cliquez sur **"Publish"** (en haut à droite)
2. ✅ Votre article est publié !

---

## 🖼️ ÉTAPE 6 : AJOUTER DES IMAGES À LA GALERIE (3 minutes)

### Dans Contentful

1. **Content** → **"Add entry"**
2. Sélectionnez **"Gallery Image"**

### Remplissez

```
Title: Ma première image
Description: Description de l'image
Image: [Uploadez votre image]
```

### Publiez

1. Cliquez sur **"Publish"**
2. ✅ Image ajoutée !

---

## 🧪 ÉTAPE 7 : TESTER EN LOCAL (2 minutes)

### Démarrez le serveur

```bash
npm run dev
```

### Visitez les pages

```
Blog : http://localhost:3000/blog
Article : http://localhost:3000/blog/premier-article-contentful
Galerie : http://localhost:3000/galerie
```

✅ **Vous devriez voir votre article et vos images !**

---

## 🔄 ÉTAPE 8 : WEBHOOKS POUR REDÉPLOIEMENT AUTO (5 minutes)

### Obtenir l'URL du webhook Vercel

1. Allez sur **Vercel Dashboard**
2. Sélectionnez votre projet
3. **Settings** → **Git**
4. Copiez l'URL du **Deploy Hook**
   - Si elle n'existe pas, cliquez **"Create Hook"**
   - Nom : **"Contentful Webhook"**
   - Branch : **main**
   - Cliquez **"Create Hook"**
   - Copiez l'URL

### Configurer dans Contentful

1. Dans Contentful, **Settings** → **Webhooks**
2. Cliquez sur **"Add webhook"**
3. Nom : **"Vercel Deploy"**
4. URL : **[Collez l'URL du Deploy Hook]**
5. Triggers : Cochez **"Publish"** et **"Unpublish"**
6. Content type : Sélectionnez **"Blog Post"** et **"Gallery Image"**
7. Cliquez **"Save"**

✅ **Maintenant, chaque fois que vous publiez du contenu dans Contentful, Vercel redéploie automatiquement votre site !**

---

## 📊 WORKFLOW QUOTIDIEN

### Pour créer un article

```
1. Contentful → Content → Add entry → Blog Post
2. Remplissez les champs
3. Uploadez une image
4. Écrivez le contenu (éditeur riche)
5. Publish
6. ⏳ Attendez 2-3 minutes (redéploiement Vercel)
7. ✅ Article visible sur votre site !
```

### Pour ajouter une image

```
1. Contentful → Content → Add entry → Gallery Image
2. Uploadez l'image
3. Ajoutez titre et description
4. Publish
5. ✅ Image visible dans /galerie
```

---

## 🎨 FONCTIONNALITÉS CONTENTFUL

### Éditeur Rich Text

L'éditeur de contenu permet :
- **Titres** (H2, H3, H4)
- **Gras, italique, souligné**
- **Listes** (à puces, numérotées)
- **Citations**
- **Liens**
- **Images intégrées**
- **Code**

### Prévisualisation

- Mode **Draft** : Contenu non publié (visible avec preview token)
- Mode **Published** : Contenu publié (visible sur le site)

### Versioning

- Contentful garde l'historique de toutes vos modifications
- Vous pouvez revenir à une version précédente

### Collaboration

- Invitez des membres de votre équipe
- Rôles et permissions
- Workflow de publication

---

## 🔧 PERSONNALISATION

### Ajouter un nouveau type de contenu

1. **Content model** → **"Add content type"**
2. Définissez les champs
3. Créez les fonctions dans `lib/contentful.ts`
4. Créez la page correspondante

### Modifier le rendu du contenu

Éditez `app/blog/[slug]/page.tsx` :
- Section `renderOptions`
- Personnalisez le style de chaque élément

---

## 📱 URLS DE VOTRE SITE

```
🏠 Accueil : https://market-ia.vercel.app
📚 Blog : https://market-ia.vercel.app/blog
🖼️ Galerie : https://market-ia.vercel.app/galerie
📞 Contact : https://market-ia.vercel.app/contact
```

---

## 🐛 RÉSOLUTION DE PROBLÈMES

### Erreur "Space not found"

→ Vérifiez `CONTENTFUL_SPACE_ID` dans `.env.local` et Vercel

### Erreur "Unauthorized"

→ Vérifiez `CONTENTFUL_ACCESS_TOKEN`

### Articles ne s'affichent pas

→ Vérifiez que l'API Identifier est bien **"blogPost"** (sensible à la casse)

### Images ne chargent pas

→ Ajoutez `https:` devant l'URL : `https:${image.fields.file.url}`

### Webhook ne fonctionne pas

→ Vérifiez l'URL du Deploy Hook dans Vercel

---

## 📊 LIMITES DU PLAN GRATUIT

Contentful Free inclut :
- ✅ 2 locales
- ✅ 25,000 records
- ✅ 48 content types
- ✅ 500 assets (images)
- ✅ API calls illimités

**Largement suffisant pour commencer !**

---

## 🎓 RESSOURCES

### Documentation

- **Contentful** : https://www.contentful.com/developers/docs/
- **Next.js + Contentful** : https://github.com/vercel/next.js/tree/canary/examples/cms-contentful

### Tutoriels vidéo

- Contentful Getting Started : https://www.youtube.com/contentful
- Next.js ISR : https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration

---

## ✅ CHECKLIST DE DÉMARRAGE

- [ ] Compte Contentful créé
- [ ] Space créé
- [ ] Clés API récupérées
- [ ] Variables d'environnement configurées (local + Vercel)
- [ ] Modèle "Blog Post" créé
- [ ] Modèle "Gallery Image" créé
- [ ] Premier article publié
- [ ] Première image ajoutée
- [ ] Webhook configuré
- [ ] Site testé en local
- [ ] Site déployé sur Vercel

---

## 🎉 FÉLICITATIONS !

Vous avez maintenant un **CMS headless professionnel** !

**Avantages :**
- ✅ Interface d'édition moderne
- ✅ Collaboration en équipe
- ✅ Versioning automatique
- ✅ API performante
- ✅ Redéploiement automatique
- ✅ Prévisualisation
- ✅ Aucun code à toucher

**Vous pouvez gérer tout votre contenu depuis Contentful !** 🚀
