# 🚀 Sanity CMS - Démarrage Rapide (5 min)

## ✅ Installation terminée !

Sanity CMS est maintenant installé dans votre projet Market-IA.

---

## 📋 Configuration en 3 étapes

### 1️⃣ Créer un projet Sanity (2 min)

1. **Allez sur** : https://www.sanity.io/
2. **Connectez-vous** avec GitHub
3. **Créez un projet** :
   - Nom : `Market-IA`
   - Dataset : `production`
4. **Récupérez** :
   - Project ID (ex: `abc123xyz`)
   - Token API (Settings → API → Tokens → Create → Editor)

### 2️⃣ Configurer Vercel (2 min)

**Allez sur** : https://vercel.com/marketia/market-ia/settings/environment-variables

**Ajoutez ces 4 variables** :

```
NEXT_PUBLIC_SANITY_PROJECT_ID = [votre project ID]
NEXT_PUBLIC_SANITY_DATASET = production
NEXT_PUBLIC_SANITY_API_VERSION = 2024-10-21
SANITY_API_TOKEN = [votre token]
```

✅ Cochez : **Production, Preview, Development**

### 3️⃣ Redéployer (1 min)

Vercel → **Deployments** → **Redeploy**

---

## 🎨 Accéder au Studio

**URL** : https://market-ia.vercel.app/studio

1. Connectez-vous avec votre compte Sanity
2. Créez du contenu !

---

## 📚 Types de contenu disponibles

| Type | Description |
|------|-------------|
| **Articles de Blog** | Créez des articles avec images et rich text |
| **Services** | Gérez vos pages services |
| **Abonnements** | Modifiez prix et fonctionnalités |
| **Équipe** | Ajoutez des membres |
| **Témoignages** | Gérez les avis clients |
| **Paramètres du site** | Email, téléphone, réseaux sociaux |

---

## 🔄 Déploiement automatique

### Configurer le webhook (optionnel)

Pour que le site se redéploie automatiquement à chaque modification :

1. **Vercel** → Settings → Git → Deploy Hooks → Create Hook
   - Name : `Sanity Content Update`
   - Copiez l'URL

2. **Sanity** (sanity.io/manage) → API → Webhooks → Create
   - Name : `Deploy to Vercel`
   - URL : [collez l'URL du hook]
   - Dataset : `production`
   - Trigger on : Create, Update, Delete

---

## 📖 Documentation complète

Pour plus de détails, consultez **[SANITY-SETUP.md](./SANITY-SETUP.md)**

---

## ✨ C'est tout !

Votre CMS est prêt. Allez sur https://market-ia.vercel.app/studio et commencez à créer du contenu ! 🎉
