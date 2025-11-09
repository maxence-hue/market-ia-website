# 🚀 GUIDE COMPLET - SANITY CMS

## ✅ MIGRATION TERMINÉE !

Contentful a été **complètement supprimé** et remplacé par **Sanity CMS**.

---

## 📋 CE QUI A ÉTÉ FAIT

### ❌ Supprimé (Contentful)
- ✅ Packages contentful désinstallés
- ✅ Fichiers lib/contentful.ts supprimés
- ✅ Pages blog/galerie Contentful supprimées
- ✅ Documentation Contentful supprimée

### ✅ Installé (Sanity)
- ✅ **Packages** : sanity, @sanity/client, @sanity/image-url, next-sanity, @portabletext/react
- ✅ **Configuration** : sanity.config.ts, sanity.cli.ts
- ✅ **Schémas** : blogPost, gallery, siteSettings
- ✅ **Client** : lib/sanity.client.ts, lib/sanity.queries.ts, lib/sanity.image.ts
- ✅ **Composants** : PortableText, SanityImage, BlogCard
- ✅ **Pages** : /blog, /blog/[slug], /galerie, /admin
- ✅ **Scripts** : npm run sanity, sanity:deploy, sanity:build

---

## 🎯 PROCHAINES ÉTAPES (15 MINUTES)

### 1. Initialiser Sanity (5 min)

```bash
npm run sanity init
```

**Répondez aux questions :**
```
? Select project to use: Create new project
? Project name: Market-IA
? Use the default dataset configuration? Yes
? Project output path: [Appuyez sur Entrée]
? Select project template: Clean project with no predefined schemas
```

✅ **Notez le Project ID** qui s'affiche !

### 2. Créer le fichier .env.local (1 min)

Copiez `.env.local.example` vers `.env.local` :

```bash
cp .env.local.example .env.local
```

Éditez `.env.local` et ajoutez votre Project ID :

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=fhtlzqpe
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN= skDA5963Wulg5iWrVHruJqwYoDqHSkLcFOiJ19fudazpvsifCKNG56IXnLWcix84FOqe9ps7NAS9oIUmFQIIIwxuosQnLLZT61tsVgtkwpJrNx7gs3CVPAqRHdHIDSwuS97Vo0pHHjzqSj3ylBcKA8UGuWlxA0X80efPyE2mcg0KaqWnP8x1
```

### 3. Créer un token API (3 min)

1. Allez sur **https://manage.sanity.io**
2. Sélectionnez votre projet **"Market-IA"**
3. **API** → **Tokens**
4. **Add API token**
   - Name: **"Production Token"**
   - Permissions: **Editor**
5. **Add token**
6. **Copiez le token** (vous ne le reverrez plus !)
7. Ajoutez-le dans `.env.local` :

```bash
SANITY_API_TOKEN=votre_token_ici
```

### 4. Lancer Sanity Studio (1 min)

```bash
npm run dev
```

Ouvrez votre navigateur sur :
```
http://localhost:3000/admin
```

✅ **Vous devriez voir le Sanity Studio !**

### 5. Créer votre premier article (5 min)

Dans le Studio :

1. Cliquez sur **"Article de Blog"**
2. Cliquez sur **"Create"**
3. Remplissez :
   - **Titre** : "Mon premier article avec Sanity"
   - **Slug** : Cliquez sur "Generate"
   - **Image Principale** : Uploadez une image
   - **Résumé** : "Découvrez comment j'ai migré vers Sanity CMS"
   - **Contenu** : Écrivez votre texte
   - **Date de Publication** : Aujourd'hui
   - **Auteur** : Votre nom
   - **Catégories** : Sélectionnez "Tutoriels"
4. Cliquez sur **"Publish"**

✅ **Votre article est publié !**

### 6. Vérifier sur le site (1 min)

Allez sur :
```
http://localhost:3000/blog
```

✅ **Vous devriez voir votre article !**

---

## 📚 STRUCTURE DU PROJET

```
/
├── app/
│   ├── blog/
│   │   ├── page.tsx              # Liste des articles
│   │   └── [slug]/
│   │       └── page.tsx          # Article individuel
│   ├── galerie/
│   │   └── page.tsx              # Galerie d'images
│   └── admin/
│       └── [[...index]]/
│           └── page.tsx          # Sanity Studio intégré
├── components/
│   └── sanity/
│       ├── PortableText.tsx      # Rendu du contenu riche
│       ├── SanityImage.tsx       # Image optimisée
│       └── BlogCard.tsx          # Carte d'article
├── lib/
│   ├── sanity.client.ts          # Configuration client
│   ├── sanity.queries.ts         # Requêtes GROQ
│   └── sanity.image.ts           # Helper images
├── sanity/
│   ├── schemas/
│   │   ├── blogPost.ts           # Schéma article
│   │   ├── gallery.ts            # Schéma galerie
│   │   ├── siteSettings.ts       # Schéma paramètres
│   │   └── index.ts              # Export schémas
│   ├── sanity.config.ts          # Config Studio
│   └── sanity.cli.ts             # Config CLI
├── .env.local                    # Variables d'environnement
└── package.json                  # Scripts Sanity
```

---

## 🎨 SCHÉMAS DISPONIBLES

### 1. Article de Blog (blogPost)

**Champs :**
- Titre (requis)
- Slug (auto-généré)
- Image Principale (requis)
- Résumé (max 200 caractères)
- Contenu (éditeur riche)
- Date de Publication
- Auteur
- Catégories (liste)
- SEO (meta titre, meta description)
- Publié (boolean)

**Éditeur de contenu :**
- Titres H2, H3, H4
- Gras, italique, code
- Listes à puces et numérotées
- Citations
- Images intégrées
- Blocs de code avec coloration syntaxique
- Liens

### 2. Galerie (gallery)

**Champs :**
- Titre (requis)
- Description
- Images (array, avec alt et caption)
- Ordre (pour trier)
- Visible (boolean)
- Catégorie (optionnel)

### 3. Paramètres du Site (siteSettings)

**Champs :**
- Nom du Site
- Slogan
- Description
- Logo
- Contact (email, téléphone, adresse)
- Réseaux Sociaux (Facebook, Twitter, LinkedIn, Instagram, YouTube)
- Menu de Navigation (array)
- SEO par Défaut

---

## 🔄 WORKFLOW QUOTIDIEN

### Créer un article

```
1. http://localhost:3000/admin
2. Article de Blog → Create
3. Remplissez les champs
4. Uploadez une image
5. Écrivez le contenu
6. Publish
7. ✅ Visible sur /blog
```

### Ajouter des images à la galerie

```
1. http://localhost:3000/admin
2. Galerie → Create
3. Titre + Description
4. Uploadez vos images
5. Publish
6. ✅ Visible sur /galerie
```

### Modifier les paramètres

```
1. http://localhost:3000/admin
2. Paramètres du Site
3. Modifiez ce que vous voulez
4. Publish
5. ✅ Mis à jour partout
```

---

## 🚀 DÉPLOIEMENT VERCEL

### 1. Variables d'environnement

Dans Vercel Dashboard :

```
Settings → Environment Variables → Add

NEXT_PUBLIC_SANITY_PROJECT_ID=votre_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=votre_token

Cochez : Production, Preview, Development
```

### 2. Webhook pour redéploiement auto

**Dans Vercel :**
```
1. Settings → Git → Deploy Hooks
2. Create Hook
   - Name: "Sanity Webhook"
   - Branch: main
3. Create Hook
4. Copiez l'URL
```

**Dans Sanity :**
```
1. https://manage.sanity.io
2. Votre projet → API → Webhooks
3. Create webhook
   - Name: "Vercel Deploy"
   - URL: [Collez l'URL]
   - Dataset: production
   - Trigger on: Create, Update, Delete
4. Save
```

✅ **Maintenant, chaque publication redéploie automatiquement !**

---

## 💡 FONCTIONNALITÉS SANITY

### Éditeur Portable Text

L'éditeur de contenu permet :
- **Styles** : Normal, H2, H3, H4, Citation
- **Formats** : Gras, Italique, Code
- **Listes** : À puces, Numérotées
- **Médias** : Images avec légende
- **Code** : Blocs de code avec syntaxe
- **Liens** : Internes et externes

### Gestion des images

- **Hotspot** : Définissez le point focal
- **Alt text** : Pour le SEO
- **Légendes** : Texte sous l'image
- **Optimisation** : Automatique par Sanity
- **Responsive** : Génération de srcset

### Prévisualisation

- **Temps réel** : Voyez vos changements instantanément
- **Brouillons** : Travaillez sans publier
- **Historique** : Revenez en arrière

### Collaboration

- **Multi-utilisateurs** : Invitez votre équipe
- **Rôles** : Admin, Éditeur, Lecteur
- **Commentaires** : Discutez du contenu

---

## 🎯 REQUÊTES GROQ

### Exemples de requêtes

**Tous les articles :**
```groq
*[_type == "blogPost" && publie == true] | order(datePublication desc)
```

**Article par slug :**
```groq
*[_type == "blogPost" && slug.current == "mon-article"][0]
```

**Articles par catégorie :**
```groq
*[_type == "blogPost" && "tutoriels" in categories]
```

**Galeries visibles :**
```groq
*[_type == "gallery" && visible == true] | order(ordre asc)
```

---

## 🔧 PERSONNALISATION

### Ajouter un nouveau schéma

1. Créez `sanity/schemas/monSchema.ts`
2. Définissez les champs
3. Exportez dans `sanity/schemas/index.ts`
4. Redémarrez le serveur

### Modifier le rendu du contenu

Éditez `components/sanity/PortableText.tsx` :
- Section `components.block` pour les styles
- Section `components.marks` pour les formats
- Section `components.types` pour les types personnalisés

### Ajouter une nouvelle page

1. Créez le schéma dans `sanity/schemas/`
2. Ajoutez les requêtes dans `lib/sanity.queries.ts`
3. Créez la page dans `app/`

---

## 📊 URLS DU SITE

```
🏠 Accueil : http://localhost:3000
📚 Blog : http://localhost:3000/blog
🖼️ Galerie : http://localhost:3000/galerie
⚙️ Admin : http://localhost:3000/admin
🎯 Services : http://localhost:3000/services/site-internet
📞 Contact : http://localhost:3000/contact
```

---

## 🐛 RÉSOLUTION DE PROBLÈMES

### "Project ID not found"

→ Vérifiez `NEXT_PUBLIC_SANITY_PROJECT_ID` dans `.env.local`

### "Unauthorized"

→ Vérifiez `SANITY_API_TOKEN` ou créez-en un nouveau

### Studio ne charge pas

→ Vérifiez que le port 3000 est libre  
→ Redémarrez : `npm run dev`

### Images ne s'affichent pas

→ Vérifiez que l'image a un `asset._ref`  
→ Utilisez le composant `SanityImage`

### Changements pas visibles

→ Attendez 1-2 minutes (revalidation)  
→ Ou videz le cache : Ctrl+F5

---

## 📚 RESSOURCES

### Documentation

- **Sanity** : https://www.sanity.io/docs
- **GROQ** : https://www.sanity.io/docs/groq
- **Next.js + Sanity** : https://github.com/sanity-io/next-sanity

### Tutoriels

- Sanity Getting Started : https://www.sanity.io/guides
- GROQ Cheat Sheet : https://www.sanity.io/docs/query-cheat-sheet

---

## ✅ CHECKLIST

- [ ] `npm run sanity init` exécuté
- [ ] Project ID récupéré
- [ ] `.env.local` créé et rempli
- [ ] Token API créé
- [ ] Studio accessible sur /admin
- [ ] Premier article créé
- [ ] Article visible sur /blog
- [ ] Variables Vercel configurées
- [ ] Webhook configuré
- [ ] Site déployé

---

## 🎉 FÉLICITATIONS !

Vous avez maintenant **Sanity CMS** complètement intégré !

**Avantages :**
- ✅ Interface moderne et intuitive
- ✅ Éditeur de contenu puissant
- ✅ Studio intégré dans votre site
- ✅ Images optimisées automatiquement
- ✅ Requêtes GROQ flexibles
- ✅ Temps réel et collaboration
- ✅ Gratuit pour commencer

**Vous pouvez gérer tout votre contenu depuis /admin !** 🚀
