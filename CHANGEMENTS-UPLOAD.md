# ✅ Changements Upload Images - Plus Flexible !

## 🎉 Ce Qui a Changé

### 📈 Limite de Taille Augmentée

**Avant** : 4.5 MB max  
**Maintenant** : **10 MB max** par fichier

Tu peux maintenant uploader des images beaucoup plus lourdes !

---

### 🔤 Noms de Fichiers Plus Permissifs

**Avant** : Pattern très strict, beaucoup de caractères supprimés

**Maintenant** : Pattern plus intelligent qui :
- ✅ Garde les lettres, chiffres, points, tirets, underscores
- ✅ Convertit les accents (é → e, à → a)
- ✅ Remplace les espaces par des tirets
- ✅ Nettoie les tirets multiples
- ✅ Supprime les tirets au début/fin

**Exemples** :

| Nom Original | Avant (strict) | Maintenant (permissif) |
|--------------|----------------|------------------------|
| `Ma Photo 2024.jpg` | `maphoto2024.jpg` | `ma-photo-2024.jpg` |
| `Café_élégant.png` | `caflgant.png` | `cafe-elegant.png` |
| `Formation   IA  -  2024.jpg` | `formationia2024.jpg` | `formation-ia-2024.jpg` |
| `Image#spéciale@2024!.jpg` | `imagespéciale2024.jpg` | `image-speciale-2024.jpg` |

---

### 💡 Recommandations Mises à Jour

| Type | Poids Recommandé | Poids Max | Format |
|------|------------------|-----------|--------|
| **Photos** | < 500 KB | 10 MB | WebP/JPEG |
| **Illustrations** | < 300 KB | 10 MB | WebP/PNG |
| **Logos** | < 100 KB | 2 MB | SVG/PNG |
| **Icônes** | < 20 KB | 500 KB | SVG |

**Note** : Le poids recommandé est pour des performances optimales, mais tu peux aller jusqu'à 10 MB si nécessaire.

---

## 🚀 Bénéfices

### 1. Plus de Flexibilité
Tu n'as plus à compresser excessivement tes images avant upload

### 2. Noms Propres
Les noms de fichiers sont automatiquement nettoyés et SEO-friendly

### 3. Moins d'Erreurs
Le système accepte beaucoup plus de formats de noms de fichiers

### 4. Support Complet
- ✅ Accents convertis automatiquement
- ✅ Espaces remplacés par des tirets
- ✅ Caractères spéciaux nettoyés
- ✅ Extensions préservées

---

## 📋 Ce Qui Est Toujours Recommandé

### Avant Upload

1. **Compresser si possible** (pour vitesse de chargement)
   - TinyPNG : https://tinypng.com
   - Squoosh : https://squoosh.app

2. **Dimensions adaptées**
   - Hero : 1920x1080
   - Articles : 1200x675
   - Thumbnails : 600x400

3. **Format moderne**
   - WebP pour les photos
   - SVG pour logos/icônes
   - PNG pour transparence

---

## ⚡ Utilisation

### Upload Simple

1. Va sur `/upload-images`
2. Glisse-dépose tes images (jusqu'à 10 MB chacune)
3. Copie l'URL générée
4. Utilise-la dans ton code

### Noms Automatiques

Tes images seront automatiquement renommées :

```
Photo Vacances Été 2024.jpg  →  photo-vacances-ete-2024.jpg
café_élégant_2024.png        →  cafe-elegant-2024.png
Ma Super Image!!!.jpg        →  ma-super-image.jpg
```

---

## 🎯 Exemple d'Utilisation

### Upload

```
Fichier original : "Formation IA à Toulon - 2024.jpg" (2.5 MB)
Nom généré      : "formation-ia-a-toulon-2024.jpg"
URL             : https://xxxxx.public.blob.vercel-storage.com/formation-ia-a-toulon-2024-abc123.jpg
```

### Dans le Code

```tsx
<Image
  src="https://xxxxx.public.blob.vercel-storage.com/formation-ia-a-toulon-2024-abc123.jpg"
  alt="Formation Intelligence Artificielle à Toulon - Market-IA 2024"
  width={1200}
  height={675}
/>
```

---

## ✅ Configuration Next.js

```javascript
// next.config.mjs
experimental: {
  serverActions: {
    bodySizeLimit: '10mb', // ← Limite augmentée à 10 MB
  },
}
```

---

## 🔧 Détails Techniques

### Pattern de Nettoyage

```javascript
const seoFilename = file.name
  .toLowerCase()                                    // Minuscules
  .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Supprime accents
  .replace(/\s+/g, '-')                             // Espaces → tirets
  .replace(/[^a-z0-9._-]/g, '')                     // Garde a-z, 0-9, ., _, -
  .replace(/-+/g, '-')                              // Évite -- ou ---
  .replace(/^-|-$/g, '')                            // Supprime - début/fin
```

### Formats Acceptés

- ✅ JPG / JPEG
- ✅ PNG
- ✅ WebP
- ✅ SVG
- ✅ GIF
- ✅ Tous formats image/* supportés par les navigateurs

---

## 💡 Conseils

### Pour Performances Optimales

Même si tu peux uploader jusqu'à 10 MB :

1. **Compresse quand possible** : Une image de 500 KB charge plus vite que 5 MB
2. **Utilise WebP** : Meilleur compromis qualité/poids que JPEG
3. **Dimensions adaptées** : Pas besoin de 4K pour un thumbnail
4. **Lazy loading** : Les images hors écran se chargent plus tard

### Pour le SEO

1. **Noms descriptifs** : `formation-ia-toulon` mieux que `IMG_1234`
2. **Alt text** : Toujours ajouter une description
3. **Format moderne** : WebP ou AVIF pour meilleur score PageSpeed

---

## 🎉 Résumé

✅ **Limite 10 MB** au lieu de 4.5 MB  
✅ **Noms de fichiers** plus intelligents  
✅ **Accents** convertis automatiquement  
✅ **Caractères spéciaux** nettoyés  
✅ **Pattern plus permissif** = moins d'erreurs  

**Tu peux maintenant uploader tes images sans contraintes excessives !** 🚀

---

**Dernière mise à jour** : 29 octobre 2025
