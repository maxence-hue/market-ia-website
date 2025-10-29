# 🔧 Guide de Dépannage Complet

## 🚨 Problème 1 : Impossible de Se Connecter à Sanity

### Cause

Votre version de Node.js (v20.3.1) n'est pas supportée par Sanity.  
**Minimum requis** : Node.js >= 20.19 ou >= 22.12

### ✅ Solution : Mettre à Jour Node.js

#### Option 1 : Avec nvm (Recommandé)

```bash
# Installer nvm si pas déjà fait
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Installer Node.js 20.19
nvm install 20.19
nvm use 20.19

# Vérifier la version
node --version  # Doit afficher v20.19.x
```

#### Option 2 : Téléchargement Direct

1. Va sur https://nodejs.org
2. Télécharge la version **20.19 LTS** ou supérieure
3. Installe-la
4. Redémarre ton terminal

#### Option 3 : Avec Homebrew (Mac)

```bash
brew install node@20
brew link node@20
```

### Vérification

```bash
node --version  # Doit afficher >= v20.19
npm run sanity  # Devrait démarrer correctement
```

---

## 📝 Problème 2 : Insérer du Code HTML/Autres Langages

### ✅ Solution : Support du Code Ajouté !

J'ai ajouté le support de **16 langages** dans Sanity :

- JavaScript / TypeScript
- HTML / CSS
- Python / PHP / Ruby
- SQL / Bash / JSON
- Go / Rust / Java / C#
- Swift / Kotlin

### Comment Utiliser

1. **Ouvre Sanity Studio** (après mise à jour Node.js) :
```bash
npm run sanity
```

2. **Dans un article**, cliquez sur **"+"** dans le contenu

3. **Choisissez "Bloc de Code"** 📄

4. **Sélectionnez le langage** (HTML, JavaScript, etc.)

5. **Collez votre code**

6. **(Optionnel)** Ajoutez un nom de fichier (ex: `index.html`)

7. **Publiez** !

### Exemple de Rendu

Le code s'affichera avec :
- ✅ Fond sombre professionnel
- ✅ Nom du fichier en haut
- ✅ Langage en bas
- ✅ Bordure colorée

---

## 🖼️ Problème 3 : Images Sanity Non Affichées

### Causes Possibles

1. **Variables d'environnement manquantes**
2. **Project ID Sanity non configuré**
3. **Images non publiées**
4. **Cache du navigateur**

### ✅ Solution 1 : Vérifier les Variables d'Environnement

#### En Local

Créez/modifiez `.env.local` :

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=votre-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

**Où trouver le Project ID ?**
1. Va sur https://sanity.io/manage
2. Clique sur ton projet
3. Copie le **Project ID** (ex: `abc123xyz`)

#### Sur Vercel

1. Va sur https://vercel.com/dashboard
2. Clique sur ton projet **market-ia**
3. **Settings** → **Environment Variables**
4. Ajoute ces 3 variables (Production + Preview + Development)

### ✅ Solution 2 : Utiliser Vercel Blob (Nouveau !)

J'ai configuré **Vercel Blob** comme alternative à Sanity pour les images.

#### Étape 1 : Obtenir le Token Vercel

1. Va sur https://vercel.com/dashboard/stores
2. Clique **"Create Database"** → **"Blob"**
3. Donne un nom : `market-ia-images`
4. Copie le **BLOB_READ_WRITE_TOKEN**

#### Étape 2 : Ajouter le Token

**En local** (`.env.local`) :
```env
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_xxxxxxxxxxxxx
```

**Sur Vercel** :
Settings → Environment Variables → Ajoute `BLOB_READ_WRITE_TOKEN`

#### Étape 3 : Uploader des Images

1. Va sur **http://localhost:3000/upload-images** (en dev)
2. OU **https://ton-site.vercel.app/upload-images** (en prod)
3. Clique sur la zone de drop
4. Sélectionne tes images
5. Copie l'URL générée
6. Utilise-la dans ton code :

```tsx
<Image
  src="https://xxxxx.public.blob.vercel-storage.com/image.jpg"
  alt="Description SEO"
  width={1200}
  height={675}
/>
```

### ✅ Solution 3 : Vérifier la Configuration Next.js

J'ai déjà configuré `next.config.mjs` pour autoriser :
- ✅ Images Sanity (`cdn.sanity.io`)
- ✅ Images Vercel Blob

Redémarre le serveur dev après modification :
```bash
npm run dev
```

---

## 🎯 Comparaison : Sanity vs Vercel Blob

| Critère | Sanity CMS | Vercel Blob |
|---------|------------|-------------|
| **Gratuit** | 10 GB/mois | 1 GB |
| **CDN** | Cloudflare | Vercel |
| **Optimisation auto** | ✅ WebP auto | ❌ Manuel |
| **Interface** | Sanity Studio | Page upload custom |
| **Facilité** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Dépendance Node.js** | Oui (>=20.19) | Non |

**Recommandation** :
- **Sanity** : Pour les articles de blog (une fois Node.js mis à jour)
- **Vercel Blob** : Pour les images statiques du site

---

## 🚀 Checklist de Dépannage

### Pour Sanity

```
[ ] Node.js >= 20.19 installé
[ ] Variables SANITY configurées (.env.local + Vercel)
[ ] npm run sanity démarre sans erreur
[ ] Articles publiés (case "Publié" cochée)
[ ] Images avec texte alternatif
```

### Pour Vercel Blob

```
[ ] @vercel/blob installé (npm install @vercel/blob)
[ ] BLOB_READ_WRITE_TOKEN configuré
[ ] Page /upload-images accessible
[ ] Images uploadées avec succès
[ ] URL copiée et utilisée dans le code
```

---

## 📝 Nouveautés Ajoutées

### ✅ Support du Code dans les Articles

16 langages supportés avec coloration syntaxique :
- JavaScript, TypeScript, HTML, CSS
- Python, PHP, Ruby, Go, Rust
- Java, C#, Swift, Kotlin
- SQL, Bash, JSON

### ✅ Gestionnaire d'Images Vercel Blob

Interface complète d'upload :
- 📤 Upload multiple
- 🔗 Copie d'URL en un clic
- 📋 Code Next.js généré automatiquement
- 🗑️ Suppression d'images
- 💡 Guide des bonnes pratiques SEO

Accessible sur : **http://localhost:3000/upload-images**

---

## 🛠️ Commandes Utiles

```bash
# Vérifier la version Node.js
node --version

# Installer Node.js 20.19
nvm install 20.19 && nvm use 20.19

# Démarrer Sanity Studio
npm run sanity

# Démarrer le site en dev
npm run dev

# Installer Vercel Blob
npm install @vercel/blob

# Déployer sur Vercel
vercel --prod
```

---

## 📞 Support

### Sanity Studio ne démarre pas ?

1. **Vérifiez Node.js** : `node --version` doit être >= 20.19
2. **Réinstallez les dépendances** : `rm -rf node_modules && npm install`
3. **Vérifiez les variables** : `.env.local` doit contenir le Project ID

### Images ne s'affichent toujours pas ?

1. **Testez l'URL** : Ouvrez l'URL de l'image dans un navigateur
2. **Vérifiez le cache** : Ctrl+Shift+R pour forcer le rafraîchissement
3. **Vérifiez la console** : F12 → Console pour voir les erreurs
4. **Utilisez Vercel Blob** : Solution alternative immédiate

### Vercel Blob ne fonctionne pas ?

1. **Vérifiez le token** : Il doit commencer par `vercel_blob_rw_`
2. **Vérifiez les variables** : Sur Vercel Dashboard
3. **Redéployez** : Après ajout des variables

---

## 🎯 Prochaines Étapes

1. **Mets à jour Node.js** vers >= 20.19
2. **Configure les variables Sanity** (Project ID)
3. **OU utilise Vercel Blob** immédiatement (pas besoin de Node.js récent)
4. **Teste la page /upload-images**
5. **Ajoute du code dans tes articles** avec le nouveau bloc de code

---

**Dernière mise à jour** : 29 octobre 2025

🎉 **Tout est prêt ! Il ne reste plus qu'à mettre à jour Node.js pour Sanity, ou utiliser Vercel Blob directement !**
