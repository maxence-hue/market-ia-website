# 📝 Guide de Modification du Contenu - Market-IA

## 🎯 Introduction

Ce guide vous explique comment modifier facilement le contenu du site **sans toucher au code** en éditant simplement des fichiers JSON.

---

## 📂 Structure des fichiers de contenu

Tous les fichiers de contenu sont dans le dossier `/content/` :

```
content/
├── site-config.json       # Configuration générale du site
├── blog/                  # Articles de blog
│   ├── article-1.json
│   ├── article-2.json
│   └── ...
└── pages/                 # Contenu des pages
    ├── home.json
    ├── about.json
    └── services.json
```

---

## 🏠 Modifier la page d'accueil

### Fichier : `content/site-config.json`

```json
{
  "hero": {
    "title": "Votre Site Web Professionnel",
    "subtitle": "Sans Engagement, Sans Surprise",
    "description": "Abonnement tout-inclus...",
    "ctaPrimary": "Découvrir nos offres",
    "ctaSecondary": "Voir nos réalisations"
  }
}
```

**Pour modifier :**
1. Ouvrez le fichier `content/site-config.json`
2. Modifiez les valeurs entre guillemets
3. Sauvegardez le fichier
4. Les changements seront visibles après redéploiement

---

## 📰 Ajouter un article de blog

### 1. Créer un nouveau fichier

Créez un fichier dans `content/blog/` :

**Nom du fichier** : `mon-nouvel-article.json`

```json
{
  "title": "Comment automatiser votre marketing avec l'IA",
  "slug": "automatiser-marketing-ia",
  "date": "2025-10-21",
  "author": "Maxence Alehause",
  "category": "Automatisation",
  "image": "/images/blog/marketing-ia.jpg",
  "excerpt": "Découvrez comment l'IA peut transformer votre stratégie marketing...",
  "content": [
    {
      "type": "paragraph",
      "text": "L'intelligence artificielle révolutionne le marketing..."
    },
    {
      "type": "heading",
      "level": 2,
      "text": "Les avantages de l'automatisation"
    },
    {
      "type": "list",
      "items": [
        "Gain de temps considérable",
        "Personnalisation à grande échelle",
        "ROI mesurable"
      ]
    },
    {
      "type": "image",
      "src": "/images/blog/automation-example.jpg",
      "alt": "Exemple d'automatisation"
    }
  ],
  "tags": ["IA", "Marketing", "Automatisation"],
  "published": true
}
```

### 2. Structure du contenu

**Types de blocs disponibles :**

#### Paragraphe
```json
{
  "type": "paragraph",
  "text": "Votre texte ici..."
}
```

#### Titre
```json
{
  "type": "heading",
  "level": 2,
  "text": "Votre titre"
}
```

#### Liste
```json
{
  "type": "list",
  "items": ["Item 1", "Item 2", "Item 3"]
}
```

#### Image
```json
{
  "type": "image",
  "src": "/images/blog/image.jpg",
  "alt": "Description de l'image"
}
```

#### Citation
```json
{
  "type": "quote",
  "text": "Votre citation",
  "author": "Nom de l'auteur"
}
```

#### Code
```json
{
  "type": "code",
  "language": "javascript",
  "code": "const example = 'Hello World';"
}
```

---

## 🖼️ Gérer les images

### 1. Ajouter une image

1. Placez votre image dans `/public/images/`
2. Sous-dossiers recommandés :
   - `/public/images/blog/` pour les articles
   - `/public/images/services/` pour les services
   - `/public/images/team/` pour l'équipe

### 2. Référencer l'image

Dans votre JSON :
```json
{
  "image": "/images/blog/mon-image.jpg"
}
```

### 3. Formats recommandés

- **Format** : JPG, PNG, WebP
- **Taille max** : 2 MB
- **Dimensions** :
  - Images de blog : 1200x630px
  - Images de service : 800x600px
  - Avatars : 400x400px

---

## ⚙️ Modifier les paramètres du site

### Fichier : `content/site-config.json`

```json
{
  "site": {
    "name": "Market-IA",
    "tagline": "Sites Web & Automatisations IA",
    "description": "Votre description...",
    "email": "contact@market-ia.com",
    "phone": "+33 6 XX XX XX XX"
  },
  "social": {
    "linkedin": "https://linkedin.com/company/market-ia",
    "twitter": "https://twitter.com/marketia"
  }
}
```

**Modifiable :**
- Nom du site
- Slogan
- Coordonnées
- Liens réseaux sociaux

---

## 📄 Modifier une page de service

### Exemple : `content/pages/services/site-web.json`

```json
{
  "title": "Sites Web Professionnels",
  "subtitle": "Abonnement tout-inclus",
  "description": "Votre site web clé en main...",
  "price": "99",
  "priceDetails": "par mois, sans engagement",
  "features": [
    "Design moderne et responsive",
    "Hébergement inclus",
    "Maintenance illimitée",
    "Évolutions sur demande"
  ],
  "cta": "Démarrer mon projet",
  "testimonials": [
    {
      "name": "Jean Dupont",
      "role": "CEO, StartupX",
      "quote": "Excellent service !",
      "rating": 5
    }
  ]
}
```

---

## 🔄 Déployer les modifications

### Méthode 1 : Via Git (Recommandé)

```bash
# 1. Ajoutez vos modifications
git add content/

# 2. Créez un commit
git commit -m "Mise à jour du contenu"

# 3. Poussez sur GitHub
git push origin main

# 4. Vercel déploie automatiquement
```

### Méthode 2 : Via l'interface Vercel

1. Connectez-vous à Vercel
2. Allez dans votre projet
3. Cliquez sur "Redeploy"

---

## ✅ Checklist avant publication

- [ ] Vérifiez l'orthographe
- [ ] Testez les liens
- [ ] Optimisez les images (< 2 MB)
- [ ] Vérifiez le SEO (title, description)
- [ ] Prévisualisez en local (`npm run dev`)
- [ ] Commitez et poussez sur GitHub

---

## 🆘 Problèmes courants

### ❌ Erreur de syntaxe JSON

**Problème** : Le site ne se build pas

**Solution** :
- Vérifiez les virgules (pas de virgule après le dernier élément)
- Vérifiez les guillemets (toujours doubles `"`)
- Utilisez un validateur JSON : https://jsonlint.com/

### ❌ Image ne s'affiche pas

**Problème** : L'image est cassée

**Solution** :
- Vérifiez le chemin (commence par `/images/`)
- Vérifiez que le fichier existe dans `/public/images/`
- Vérifiez l'extension (jpg, png, webp)

### ❌ Modifications non visibles

**Problème** : Les changements n'apparaissent pas

**Solution** :
1. Videz le cache du navigateur (Ctrl+F5)
2. Attendez 1-2 minutes pour le déploiement
3. Vérifiez que vous avez bien poussé sur GitHub

---

## 🎓 Exemples pratiques

### Exemple 1 : Changer le titre de la page d'accueil

**Avant** :
```json
{
  "hero": {
    "title": "Votre Site Web Professionnel"
  }
}
```

**Après** :
```json
{
  "hero": {
    "title": "Créez Votre Site Web en 48h"
  }
}
```

### Exemple 2 : Ajouter un témoignage

```json
{
  "testimonials": [
    {
      "name": "Marie Martin",
      "role": "Fondatrice, AgenceWeb",
      "quote": "Market-IA a transformé notre présence en ligne !",
      "rating": 5,
      "image": "/images/testimonials/marie.jpg"
    }
  ]
}
```

---

## 📞 Support

Pour toute question :
- **Email** : maxence@market-ia.com
- **Documentation** : Ce fichier
- **Tutoriels vidéo** : À venir

---

## 🔐 Bonnes pratiques

1. **Sauvegardez** avant de modifier
2. **Testez en local** avant de déployer
3. **Commitez régulièrement** avec des messages clairs
4. **Optimisez les images** avant upload
5. **Vérifiez le SEO** de chaque page

---

**Dernière mise à jour** : 21 octobre 2025
**Version** : 1.0
