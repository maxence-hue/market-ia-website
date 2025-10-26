# 🔧 Guide de Dépannage Market-IA

## 🚨 Problème 1 : Articles Sanity Non Visibles sur le Blog

### Causes Possibles

1. **L'article n'est pas publié** (champ "Publié" décoché)
2. **Variables d'environnement Sanity manquantes sur Vercel**
3. **Cache Vercel qui affiche une ancienne version**

---

### ✅ Solution Étape par Étape

#### 1. Vérifier que l'article est publié dans Sanity

```bash
cd market-ia
npm run sanity
```

Puis ouvrir **http://localhost:3333** :

1. Aller dans **"Article de Blog"**
2. Cliquer sur ton article
3. Descendre en bas du formulaire
4. **Vérifier que la case "Publié" est bien cochée** ✅
5. Cliquer **"Publish"** (bouton bleu en haut à droite)

---

#### 2. Configurer les Variables d'Environnement sur Vercel

##### A. Récupérer ton Project ID Sanity

1. Va sur **https://sanity.io/manage**
2. Clique sur ton projet **"Market-IA"**
3. Copie le **Project ID** (ex: `abc123xyz`)

##### B. Ajouter les variables sur Vercel

1. Va sur **https://vercel.com/marketia/market-ia**
2. Clique sur **"Settings"** (en haut)
3. Clique sur **"Environment Variables"** (à gauche)
4. Ajoute ces 3 variables :

```env
NEXT_PUBLIC_SANITY_PROJECT_ID = ton-project-id-ici
NEXT_PUBLIC_SANITY_DATASET = production
NEXT_PUBLIC_SANITY_API_VERSION = 2024-01-01
```

5. **Important** : Coche **"Production"**, **"Preview"** et **"Development"**
6. Clique **"Save"**

---

#### 3. Redéployer le Site

Une fois les variables ajoutées :

```bash
git add -A
git commit -m "docs: Ajout variables Sanity"
git push origin main
```

Ou directement sur Vercel :
1. Va sur **https://vercel.com/marketia/market-ia**
2. Onglet **"Deployments"**
3. Clique sur le dernier déploiement
4. Clique **"Redeploy"** en haut à droite

---

#### 4. Vérifier localement

En attendant le déploiement, teste en local :

```bash
# Crée un fichier .env.local avec tes vraies valeurs
NEXT_PUBLIC_SANITY_PROJECT_ID=ton-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

# Lance le site
npm run dev
```

Ouvre **http://localhost:3000/blog** → Ton article doit apparaître ✅

---

#### 5. Forcer le Rafraîchissement du Cache

Si l'article n'apparaît toujours pas après le déploiement :

1. Va sur **https://market-ia.fr/blog**
2. Fais **Ctrl + Shift + R** (ou Cmd + Shift + R sur Mac)
3. Ou vide le cache : Ctrl + Shift + Delete

---

## 🌐 Problème 2 : Domaine market-ia.fr Redirige vers LWS

### Cause

Le domaine est chez **LWS** mais la configuration DNS ne pointe pas vers **Vercel**.

---

### ✅ Solution : Configurer le DNS chez LWS

#### Étape 1 : Ajouter le Domaine sur Vercel

1. Va sur **https://vercel.com/marketia/market-ia**
2. Clique sur **"Settings"** → **"Domains"**
3. Clique **"Add Domain"**
4. Entre **`market-ia.fr`**
5. Vercel te donnera des enregistrements DNS à configurer

---

#### Étape 2 : Configurer le DNS sur LWS

1. Connecte-toi sur **https://console.lws.fr**
2. Va dans **"Domaines"** → Clique sur **market-ia.fr**
3. Va dans **"Zone DNS"** ou **"Gérer le DNS"**

**Supprime les enregistrements A et CNAME existants**, puis ajoute :

##### Option 1 : Avec Sous-Domaine WWW

| Type | Nom | Valeur | TTL |
|------|-----|--------|-----|
| **A** | @ | `76.76.21.21` | 3600 |
| **CNAME** | www | `cname.vercel-dns.com.` | 3600 |

##### Option 2 : Sans Sous-Domaine WWW (Recommandé)

| Type | Nom | Valeur | TTL |
|------|-----|--------|-----|
| **A** | @ | `76.76.21.21` | 3600 |
| **A** | @ | `76.76.21.98` | 3600 |
| **A** | @ | `76.76.21.241` | 3600 |

> **Note** : Les adresses IP Vercel peuvent changer. Utilise celles fournies par Vercel dans l'interface.

---

#### Étape 3 : Attendre la Propagation DNS

- ⏱️ **Durée** : 5 minutes à 48 heures (généralement ~1 heure)
- 🔍 **Vérifier** : https://dnschecker.org (entre `market-ia.fr`)

Quand tous les serveurs affichent l'IP Vercel, c'est bon ✅

---

#### Étape 4 : Configurer HTTPS sur Vercel

1. Retourne sur **Vercel** → **Settings** → **Domains**
2. Clique sur **market-ia.fr**
3. Active **"Force HTTPS"**
4. Vercel générera automatiquement un certificat SSL

---

## 🎯 Vérification Finale

### ✅ Blog Fonctionne

1. Va sur **https://market-ia.fr/blog**
2. Tes articles apparaissent
3. Tu peux cliquer sur un article et le lire

### ✅ Domaine Fonctionne

1. **https://market-ia.fr** → Affiche ton site
2. **Pas de redirection LWS**
3. **Certificat SSL actif** (cadenas 🔒 dans le navigateur)

---

## 📞 Support

Si ça ne fonctionne toujours pas :

1. **Sanity** : Vérifie les logs Vercel (onglet "Functions")
2. **DNS** : Attends 24h maximum pour la propagation
3. **Contact** : support@vercel.com ou support@lws.fr

---

## 🚀 Commandes Utiles

```bash
# Lancer Sanity Studio local
npm run sanity

# Lancer le site en dev
npm run dev

# Déployer sur Vercel
vercel --prod

# Vérifier les variables d'environnement
vercel env ls
```

---

**Dernière mise à jour** : 26 octobre 2025
