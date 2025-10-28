# 📸 Guide : Images Optimisées SEO

## 🎯 3 Solutions pour Héberger vos Images

---

## ✅ Solution 1 : Sanity CMS (Recommandé)

### Pourquoi Sanity ?

- ✅ **CDN mondial ultra-rapide** (Sanity utilise le CDN de Cloudflare)
- ✅ **Optimisation automatique** (WebP, redimensionnement, compression)
- ✅ **Transformations à la volée** (crop, resize, format)
- ✅ **Gratuit jusqu'à 10 GB** de bande passante/mois
- ✅ **Déjà intégré** dans votre projet !

### Comment Utiliser

#### 1. Dans Sanity Studio

```bash
npm run sanity
```

Ouvrir **http://localhost:3333**

1. Créez un article de blog
2. Uploadez une image dans le champ "Image Principale" ou dans le contenu
3. Ajoutez un **texte alternatif** (important pour le SEO !)
4. Publiez

#### 2. L'Image est Automatiquement Optimisée

Sanity génère automatiquement :
- ✅ Format WebP (plus léger)
- ✅ Plusieurs tailles (responsive)
- ✅ Compression intelligente
- ✅ Lazy loading

#### 3. Exemple de Rendu

```tsx
// Dans votre code, c'est déjà fait !
<SanityImage
  image={post.imageHero}
  alt="Description SEO de l'image"
  width={1200}
  height={675}
  priority // Pour les images above-the-fold
/>
```

**URL générée automatiquement** :
```
https://cdn.sanity.io/images/[project-id]/production/[image-id]-1200x675.webp?w=1200&q=80
```

---

## ✅ Solution 2 : Vercel Blob Storage

### Pourquoi Vercel Blob ?

- ✅ **Intégration native** avec Vercel
- ✅ **CDN mondial** automatique
- ✅ **Gratuit jusqu'à 1 GB** de stockage
- ✅ **Upload simple** via API

### Installation

```bash
npm install @vercel/blob
```

### Configuration

Ajoutez dans `.env.local` :

```env
BLOB_READ_WRITE_TOKEN=your-token-here
```

Obtenez le token sur : **https://vercel.com/dashboard/stores**

### Utilisation

#### 1. Créer une API Route pour Upload

Créez `/app/api/upload/route.ts` :

```typescript
import { put } from '@vercel/blob'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url)
  const filename = searchParams.get('filename')

  if (!filename || !request.body) {
    return NextResponse.json({ error: 'Filename required' }, { status: 400 })
  }

  const blob = await put(filename, request.body, {
    access: 'public',
  })

  return NextResponse.json(blob)
}
```

#### 2. Upload depuis le Frontend

```typescript
async function uploadImage(file: File) {
  const response = await fetch(`/api/upload?filename=${file.name}`, {
    method: 'POST',
    body: file,
  })

  const { url } = await response.json()
  return url // URL de l'image hébergée
}
```

#### 3. Utiliser l'Image

```tsx
<Image
  src={imageUrl}
  alt="Description SEO"
  width={1200}
  height={675}
  quality={80}
/>
```

---

## ✅ Solution 3 : Dossier /public (Simple)

### Pourquoi /public ?

- ✅ **Gratuit** (inclus dans Vercel)
- ✅ **Simple** à utiliser
- ✅ **Pas de configuration** nécessaire
- ❌ Pas d'optimisation automatique
- ❌ Pas de CDN dédié

### Utilisation

#### 1. Placer les Images

```
/public
  /images
    /blog
      article-1.jpg
      article-2.jpg
    /services
      formation-ia.jpg
```

#### 2. Utiliser dans le Code

```tsx
import Image from 'next/image'

<Image
  src="/images/blog/article-1.jpg"
  alt="Description SEO complète"
  width={1200}
  height={675}
  quality={80}
  priority // Si image above-the-fold
/>
```

#### 3. Optimiser Manuellement

Avant d'uploader, optimisez avec :
- **TinyPNG** : https://tinypng.com (compression)
- **Squoosh** : https://squoosh.app (conversion WebP)
- **ImageOptim** : https://imageoptim.com (Mac)

---

## 🎯 Comparaison des Solutions

| Critère | Sanity CMS | Vercel Blob | /public |
|---------|-----------|-------------|---------|
| **CDN** | ✅ Cloudflare | ✅ Vercel | ⚠️ Vercel |
| **Optimisation auto** | ✅ Oui | ⚠️ Partielle | ❌ Non |
| **WebP auto** | ✅ Oui | ❌ Non | ❌ Non |
| **Responsive auto** | ✅ Oui | ❌ Non | ❌ Non |
| **Prix (10 GB)** | Gratuit | ~$0.15/GB | Gratuit |
| **Facilité** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **SEO** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

**Recommandation** : **Sanity CMS** pour les images de blog, **/public** pour les images statiques du site.

---

## 🚀 Bonnes Pratiques SEO pour les Images

### 1. ✅ Texte Alternatif (ALT)

**Mauvais** :
```tsx
<Image src="/image.jpg" alt="image" />
```

**Bon** :
```tsx
<Image 
  src="/formation-ia-var.jpg" 
  alt="Formation Intelligence Artificielle dans le Var - Market-IA" 
/>
```

**Règles** :
- Décrivez précisément le contenu
- Incluez des mots-clés pertinents
- 125 caractères maximum
- Pas de "image de" ou "photo de"

---

### 2. ✅ Noms de Fichiers Descriptifs

**Mauvais** :
```
IMG_1234.jpg
photo.png
image-final-v2.jpg
```

**Bon** :
```
formation-ia-toulon-2024.jpg
automatisation-marketing-exemple.jpg
saas-personnalise-dashboard.jpg
```

**Règles** :
- Mots-clés séparés par des tirets
- Minuscules uniquement
- Pas d'accents ni caractères spéciaux
- Descriptif et précis

---

### 3. ✅ Formats Optimaux

| Type d'Image | Format | Poids Max |
|--------------|--------|-----------|
| Photos | **WebP** ou JPEG | < 200 KB |
| Illustrations | **WebP** ou PNG | < 100 KB |
| Logos | **SVG** ou PNG | < 50 KB |
| Icônes | **SVG** | < 10 KB |

---

### 4. ✅ Dimensions Recommandées

| Usage | Dimensions | Ratio |
|-------|-----------|-------|
| **Hero / Bannière** | 1920x1080 | 16:9 |
| **Article de blog** | 1200x675 | 16:9 |
| **Thumbnail** | 600x400 | 3:2 |
| **Carré (Instagram)** | 1080x1080 | 1:1 |
| **Open Graph** | 1200x630 | 1.91:1 |

---

### 5. ✅ Lazy Loading

```tsx
// Image above-the-fold (visible immédiatement)
<Image 
  src="/hero.jpg" 
  alt="..." 
  priority // Charge en priorité
/>

// Image below-the-fold (plus bas dans la page)
<Image 
  src="/section-2.jpg" 
  alt="..." 
  loading="lazy" // Charge quand visible (par défaut)
/>
```

---

### 6. ✅ Responsive Images

Next.js gère automatiquement les srcset :

```tsx
<Image
  src="/image.jpg"
  alt="..."
  width={1200}
  height={675}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

Next.js génère automatiquement :
- image-640w.webp
- image-750w.webp
- image-828w.webp
- image-1080w.webp
- image-1200w.webp

---

## 🔧 Configuration Next.js Optimale

Mettez à jour `next.config.mjs` :

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Domaines autorisés
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: '**.public.blob.vercel-storage.com',
      },
    ],
    
    // Formats supportés
    formats: ['image/webp', 'image/avif'],
    
    // Tailles générées
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Qualité par défaut
    quality: 80,
    
    // Cache
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 jours
  },
}

export default nextConfig
```

---

## 📊 Outils de Test SEO Images

### 1. Google PageSpeed Insights
**https://pagespeed.web.dev**

Vérifie :
- Temps de chargement
- Format optimal (WebP)
- Lazy loading
- Dimensions correctes

### 2. GTmetrix
**https://gtmetrix.com**

Analyse :
- Poids des images
- Compression
- CDN

### 3. Google Search Console
**https://search.google.com/search-console**

Vérifie :
- Images indexées
- Textes alternatifs
- Erreurs d'affichage

---

## 🎯 Checklist Images SEO

```
[ ] Texte alternatif descriptif sur toutes les images
[ ] Noms de fichiers avec mots-clés (tirets)
[ ] Format WebP ou AVIF
[ ] Poids < 200 KB par image
[ ] Dimensions adaptées à l'usage
[ ] Lazy loading activé (sauf hero)
[ ] Responsive (srcset automatique)
[ ] CDN activé (Sanity ou Vercel)
[ ] Compression optimale (quality: 80)
[ ] Sitemap images généré
```

---

## 🚀 Exemple Complet

### Dans Sanity Studio

1. Uploadez `formation-ia-var-2024.jpg`
2. Alt text : "Salle de formation IA à Toulon avec participants et écrans"
3. Publiez

### Dans votre Code (déjà fait !)

```tsx
import SanityImage from '@/components/sanity/SanityImage'

<SanityImage
  image={post.imageHero}
  alt={post.imageHero.alt || post.titre}
  width={1200}
  height={675}
  priority={isHero}
  className="rounded-2xl"
/>
```

### Résultat

```html
<img
  src="https://cdn.sanity.io/images/abc123/production/xyz-1200x675.webp?w=1200&q=80"
  srcset="
    https://cdn.sanity.io/images/.../xyz-640w.webp 640w,
    https://cdn.sanity.io/images/.../xyz-1200w.webp 1200w
  "
  alt="Salle de formation IA à Toulon avec participants et écrans"
  loading="lazy"
  decoding="async"
/>
```

**Résultat SEO** :
- ✅ Google indexe l'image
- ✅ Apparaît dans Google Images
- ✅ Charge rapidement (WebP + CDN)
- ✅ Responsive sur mobile

---

## 💡 Conseil Final

**Pour Market-IA, utilisez** :

1. **Sanity CMS** → Images de blog et articles
2. **/public/images** → Logos, icônes, images fixes du site
3. **Vercel Blob** → Si besoin d'upload utilisateur (formulaires)

---

**Dernière mise à jour** : 28 octobre 2025
