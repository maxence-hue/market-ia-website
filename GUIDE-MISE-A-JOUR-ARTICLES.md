# 🔄 Mise à Jour Automatique des Articles

## ✅ Problème Résolu

Les articles se mettent maintenant à jour **immédiatement** quand tu publies dans Sanity !

---

## 🎯 Ce Qui a Été Fait

### 1. Revalidation Instantanée

**Avant** : Cache statique, articles pas mis à jour  
**Maintenant** : `revalidate = 0` → Vérification à chaque requête

### 2. API Webhook

Créé une API `/api/revalidate` pour forcer la mise à jour du cache.

---

## 🚀 Configuration Complète

### Étape 1 : Ajouter le Secret dans Vercel

1. **Va sur Vercel** : https://vercel.com/dashboard
2. **Sélectionne ton projet** Market-IA
3. **Settings** → **Environment Variables**
4. **Ajoute** :
   - **Name** : `REVALIDATE_SECRET`
   - **Value** : `ton-secret-super-securise-123` (choisis un secret fort)
   - **Environments** : Production, Preview, Development
5. **Save**
6. **Redéploie** le site

---

### Étape 2 : Configurer le Webhook dans Sanity

1. **Va sur Sanity** : https://manage.sanity.io
2. **Sélectionne ton projet**
3. **API** → **Webhooks**
4. **Create Webhook**
5. **Configure** :
   - **Name** : `Revalidate Next.js`
   - **URL** : `https://market-ia.fr/api/revalidate?secret=ton-secret-super-securise-123`
   - **Dataset** : `production`
   - **Trigger on** : Create, Update, Delete
   - **Filter** : `_type == "blogPost"`
   - **HTTP method** : POST
   - **API version** : v2021-06-07
6. **Save**

---

## 🎨 Comment Ça Marche

### Flux Automatique

```
1. Tu publies un article dans Sanity
   ↓
2. Sanity envoie un webhook à ton site
   ↓
3. L'API /api/revalidate reçoit la notification
   ↓
4. Next.js vide le cache de la page
   ↓
5. La prochaine visite charge la nouvelle version
```

### Temps de Mise à Jour

- **Avec webhook** : ~5-10 secondes
- **Sans webhook** : À la prochaine visite (immédiat)

---

## 🧪 Tester la Configuration

### Test 1 : Vérifier l'API

**URL** : https://market-ia.fr/api/revalidate?secret=ton-secret

**Résultat attendu** :
```json
{
  "message": "Revalidate endpoint is working",
  "usage": "POST to this endpoint with a secret parameter"
}
```

### Test 2 : Publier un Article

1. **Modifie un article** dans Sanity
2. **Publie**
3. **Attends 10 secondes**
4. **Rafraîchis** la page du blog
5. **Vérifie** que les changements apparaissent

---

## 🔧 Configuration Actuelle

### Pages Blog

**`/app/blog/page.tsx`** :
```typescript
export const revalidate = 0
```
→ Vérifie les nouveaux articles à chaque requête

**`/app/blog/[slug]/page.tsx`** :
```typescript
export const revalidate = 0
```
→ Vérifie les modifications d'articles à chaque requête

---

## 💡 Options de Revalidation

### Option 1 : Revalidation Immédiate (Actuel)

```typescript
export const revalidate = 0
```

**Avantages** :
- ✅ Changements visibles immédiatement
- ✅ Toujours à jour

**Inconvénients** :
- ⚠️ Requête Sanity à chaque visite
- ⚠️ Légèrement plus lent

---

### Option 2 : Revalidation Toutes les 60 Secondes

```typescript
export const revalidate = 60
```

**Avantages** :
- ✅ Cache pendant 60s
- ✅ Plus rapide

**Inconvénients** :
- ⚠️ Délai de 60s max pour voir les changements

---

### Option 3 : Revalidation avec Webhook (Recommandé)

```typescript
export const revalidate = 3600 // 1 heure
```

+ Webhook Sanity qui appelle `/api/revalidate`

**Avantages** :
- ✅ Cache longue durée (rapide)
- ✅ Mise à jour immédiate via webhook
- ✅ Meilleur des deux mondes

**Configuration** :
1. Change `revalidate = 0` → `revalidate = 3600`
2. Configure le webhook Sanity (voir ci-dessus)

---

## 🚨 Dépannage

### Les articles ne se mettent pas à jour

**Solution 1** : Vide le cache du navigateur
- Chrome : Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)

**Solution 2** : Vérifie que l'article est publié
- Dans Sanity, vérifie que "Publié" est coché

**Solution 3** : Vérifie la configuration
- `revalidate = 0` dans les deux fichiers blog
- Secret correct dans Vercel
- Webhook configuré dans Sanity

---

### Le webhook ne fonctionne pas

**Vérifications** :
1. **Secret correct** dans l'URL du webhook
2. **URL complète** : `https://market-ia.fr/api/revalidate?secret=...`
3. **Logs Sanity** : Vérifie les logs du webhook dans Sanity
4. **Logs Vercel** : Vérifie les logs dans Vercel

---

### Erreur 401 sur /api/revalidate

**Cause** : Secret incorrect

**Solution** :
1. Vérifie que `REVALIDATE_SECRET` est défini dans Vercel
2. Vérifie que le secret dans l'URL du webhook correspond
3. Redéploie après avoir ajouté la variable

---

## 📊 Recommandations

### Pour le Développement

```typescript
export const revalidate = 0
```
→ Voir les changements immédiatement

### Pour la Production

**Option A** : Revalidation immédiate (actuel)
```typescript
export const revalidate = 0
```
→ Simple, toujours à jour

**Option B** : Cache + Webhook (optimal)
```typescript
export const revalidate = 3600
```
+ Webhook Sanity configuré
→ Rapide ET à jour

---

## 🎯 Résumé

**Actuellement** :
- ✅ `revalidate = 0` sur toutes les pages blog
- ✅ Articles mis à jour à chaque visite
- ✅ Pas de cache statique

**Pour optimiser** :
1. Ajoute `REVALIDATE_SECRET` dans Vercel
2. Configure le webhook Sanity
3. Change `revalidate = 0` → `revalidate = 3600`
4. Profite du cache + mise à jour instantanée !

---

## 🔗 Liens Utiles

- **Vercel Dashboard** : https://vercel.com/dashboard
- **Sanity Manage** : https://manage.sanity.io
- **Next.js Revalidation** : https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating

---

**Dernière mise à jour** : 29 octobre 2025
