# 🚀 Accès Rapide - Market-IA

## 🔗 URLs de Production

### Site Principal
**https://market-ia.vercel.app** (ou ton domaine custom)

### Gestionnaire d'Images Vercel Blob
**https://market-ia.vercel.app/upload-images**

### Page Test Sanity (Diagnostic)
**https://market-ia.vercel.app/test-sanity**

---

## 🎯 Configuration Finale Vercel

### Variables d'Environnement à Ajouter

Va sur **https://vercel.com/marketia/market-ia/settings/environment-variables**

Ajoute ces variables (coche **Production**, **Preview** et **Development**) :

```env
# Vercel Blob (Upload d'images)
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_Fm7YortWrlfMGjdB_VIktn5z078idCgLanaydN16nMhOucW

# Sanity CMS (Si tu veux utiliser Sanity)
NEXT_PUBLIC_SANITY_PROJECT_ID=ton-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

**Après ajout** : Clique sur **Redeploy** dans l'onglet Deployments

---

## ✅ Fonctionnalités Disponibles

### 1. Upload d'Images (Vercel Blob)

**URL** : https://ton-site.vercel.app/upload-images

**Utilisation** :
1. Ouvre la page depuis n'importe quelle machine
2. Glisse-dépose tes images
3. Copie l'URL générée
4. Utilise-la dans tes articles ou ton code

**Exemple d'utilisation** :
```tsx
<Image
  src="https://xxxxx.public.blob.vercel-storage.com/image.jpg"
  alt="Description SEO"
  width={1200}
  height={675}
/>
```

---

### 2. Blocs de Code dans Sanity

**Langages supportés** :
- HTML, CSS, JavaScript, TypeScript
- Python, PHP, Ruby, Go, Rust
- Java, C#, Swift, Kotlin
- SQL, Bash, JSON

**Dans Sanity** :
1. Cliquez **"+"** dans un article
2. Choisissez **"Bloc de Code"**
3. Sélectionnez le langage
4. Collez votre code
5. (Optionnel) Ajoutez un nom de fichier

---

### 3. Composants React dans Sanity

**Disponibles** :
- 🎯 **CTA Banner** : Bannière d'appel à l'action
- ❓ **FAQ** : Questions/réponses dépliables

**Dans Sanity** :
1. Cliquez **"+"** dans un article
2. Choisissez **"Composant Personnalisé"**
3. Sélectionnez le type (CTA Banner ou FAQ)
4. (Optionnel) Personnalisez avec JSON

---

## 📱 Accès depuis Autre Machine

### Option 1 : Via l'URL de Production

Tape simplement l'URL de production dans ton navigateur :
```
https://ton-site.vercel.app/upload-images
```

Tout fonctionnera immédiatement (une fois le token configuré sur Vercel)

### Option 2 : Cloner le Repo

```bash
# Clone le repo
git clone https://github.com/maxence-hue/market-ia-website.git
cd market-ia-website

# Installe les dépendances
npm install

# Crée .env.local avec le token
echo 'BLOB_READ_WRITE_TOKEN=vercel_blob_rw_Fm7YortWrlfMGjdB_VIktn5z078idCgLanaydN16nMhOucW' > .env.local

# Lance en dev
npm run dev

# Accède à http://localhost:3000/upload-images
```

---

## 🎨 Exemples d'Utilisation

### Upload d'Image
1. Va sur `/upload-images`
2. Upload `formation-ia-var-2024.jpg`
3. Copie l'URL générée
4. Utilise-la partout (articles, composants, etc.)

### Bloc de Code HTML
```html
<div class="container">
  <h1>Titre</h1>
  <p>Paragraphe avec du <strong>gras</strong></p>
</div>
```

### Composant CTA Personnalisé
```json
{
  "title": "🚀 Prêt à démarrer ?",
  "description": "Rejoignez des centaines d'entreprises",
  "buttonText": "Réserver ma formation",
  "buttonLink": "/contact"
}
```

---

## 🔧 Commandes Utiles

```bash
# Démarrer en local
npm run dev

# Démarrer Sanity Studio (si Node.js >= 20.19)
npm run sanity

# Déployer sur Vercel
vercel --prod

# Voir les logs Vercel
vercel logs
```

---

## 📋 Checklist de Vérification

### Après Déploiement

```
[ ] Token BLOB_READ_WRITE_TOKEN ajouté sur Vercel
[ ] Redéployé le site après ajout du token
[ ] Page /upload-images accessible en production
[ ] Upload d'image de test fonctionne
[ ] URL générée copie correctement
[ ] Image s'affiche quand utilisée dans le code
```

### Pour Sanity (Optionnel)

```
[ ] Node.js >= 20.19 installé
[ ] Variables SANITY_* configurées
[ ] npm run sanity fonctionne
[ ] Bloc de code ajouté dans un article
[ ] Article publié et visible sur le site
```

---

## 🆘 Dépannage Rapide

### Upload d'images ne fonctionne pas en production ?

1. **Vérifie le token** sur Vercel Dashboard
2. **Redéploie** après ajout du token
3. **Vide le cache** du navigateur (Ctrl+Shift+R)

### Images uploadées ne s'affichent pas ?

1. **Vérifie l'URL** : Elle doit commencer par `https://` et être complète
2. **Vérifie next.config.mjs** : Blob Vercel doit être autorisé (déjà fait)
3. **Teste l'URL** directement dans un navigateur

### Sanity ne démarre pas ?

1. **Vérifie Node.js** : `node --version` doit être >= 20.19
2. **Réinstalle** : `rm -rf node_modules && npm install`
3. **Vérifie les variables** dans `.env.local`

---

## 💡 Astuces

### Noms de Fichiers SEO

Avant d'uploader, renomme tes images :
```
❌ IMG_1234.jpg
❌ photo-final-v2.jpg
✅ formation-ia-toulon-2024.jpg
✅ automatisation-marketing-exemple.jpg
```

### Compression d'Images

Avant upload, compresse avec :
- **TinyPNG** : https://tinypng.com
- **Squoosh** : https://squoosh.app

Objectif : < 200 KB par image

### Alt Text SEO

Toujours ajouter un texte alternatif descriptif :
```tsx
<Image
  src="..."
  alt="Formation Intelligence Artificielle à Toulon - Market-IA"
  width={1200}
  height={675}
/>
```

---

## 🎉 C'est Prêt !

Une fois le token ajouté sur Vercel et redéployé :

✅ Upload d'images accessible de n'importe où  
✅ Blocs de code (16 langages) dans Sanity  
✅ Composants React dans les articles  
✅ Configuration optimale pour le SEO  
✅ CDN Vercel pour performance maximale  

**Tout est en production et accessible depuis n'importe quelle machine !**

---

**Dernière mise à jour** : 29 octobre 2025
