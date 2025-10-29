# 🔧 Solutions : Admin Plein Écran + Cache Articles

## ✅ 2 Problèmes Résolus

1. **Admin pas en plein écran** ✅
2. **Embed code pas mis à jour** ✅

---

## 1. 🖥️ Admin en Plein Écran

### Problème
Header et Footer apparaissaient dans Sanity Studio

### Solution
Créé un composant `ConditionalLayout` qui détecte la route `/admin` et n'affiche **rien** sauf le contenu.

### Code Implémenté

**`components/ConditionalLayout.tsx`** :
```tsx
'use client'

export default function ConditionalLayout({ children }) {
  const pathname = usePathname()
  const isAdmin = pathname?.startsWith('/admin')

  if (isAdmin) {
    // Admin : juste le contenu
    return <>{children}</>
  }

  // Pages normales : Header + Footer
  return (
    <>
      <FloatingOrbs />
      <ParticleBackground />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
```

### Résultat
- ✅ `/admin` → Sanity Studio en plein écran
- ✅ Autres pages → Header + Footer normalement

---

## 2. 🔄 Embed Code Pas Mis à Jour

### Problème
Les articles avec Embed Code ne se mettaient pas à jour après publication

### Solution
Ajout de **`dynamic = 'force-dynamic'`** pour forcer le rendu sans cache

### Code Modifié

**`app/blog/[slug]/page.tsx`** :
```tsx
export const dynamic = 'force-dynamic'
export const revalidate = 0
```

**Effet** :
- ❌ Pas de cache statique
- ✅ Requête Sanity à chaque visite
- ✅ Toujours la dernière version

---

## 🧪 Comment Tester

### Test 1 : Admin Plein Écran

1. **Va sur** : https://market-ia.fr/admin
2. **Vérifie** : Pas de header ni footer
3. **Sanity Studio** occupe tout l'écran ✅

### Test 2 : Embed Code Mis à Jour

1. **Modifie un article** dans Sanity (avec Embed Code)
2. **Publie**
3. **Va sur le site** : https://market-ia.fr/blog/ton-article
4. **Rafraîchis** (Ctrl+Shift+R ou Cmd+Shift+R)
5. **Vérifie** : Les changements apparaissent ✅

---

## ⚠️ Important : Vider le Cache

Si les changements n'apparaissent pas :

### Solution 1 : Hard Refresh

**Windows/Linux** : `Ctrl + Shift + R`  
**Mac** : `Cmd + Shift + R`

### Solution 2 : Mode Incognito

Ouvre le site en navigation privée pour voir la version sans cache

### Solution 3 : Vider le Cache Navigateur

1. **Chrome** : Paramètres → Effacer les données de navigation
2. **Sélectionne** : Images et fichiers en cache
3. **Période** : Dernière heure
4. **Efface**

---

## 🚀 Workflow Recommandé

### Publier un Article avec Embed Code

1. **Dans Sanity Studio** :
   - Ouvre l'article
   - Ajoute "💻 Embed Code"
   - Colle ton HTML dans "Code HTML"
   - (Optionnel) Ajoute du CSS
   - **Publie**

2. **Attends 10 secondes** (temps de déploiement Vercel)

3. **Sur le site** :
   - Va sur l'article
   - **Hard refresh** (Ctrl+Shift+R)
   - Vérifie que l'Embed Code s'affiche

---

## 💡 Pourquoi Ça Marche Maintenant

### Avant
```
Page avec cache statique
   ↓
Sanity modifié
   ↓
Cache pas invalidé
   ↓
Ancienne version affichée ❌
```

### Maintenant
```
Page sans cache (force-dynamic)
   ↓
Chaque visite = nouvelle requête Sanity
   ↓
Dernière version affichée ✅
```

---

## 📊 Performance

### Avec Cache (Avant)
- ✅ Très rapide (~100ms)
- ❌ Mises à jour lentes

### Sans Cache (Maintenant)
- ⚠️ Plus lent (~500ms)
- ✅ Toujours à jour

### Compromis Optimal (Futur)
- Cache + Webhook Sanity
- Rapide ET à jour
- (Voir GUIDE-MISE-A-JOUR-ARTICLES.md)

---

## 🔧 Dépannage

### L'admin n'est toujours pas en plein écran

**Vérifications** :
1. Le déploiement est terminé ?
2. Cache vidé ?
3. URL correcte : `/admin` pas `/admin/`

**Solution** :
- Hard refresh (Ctrl+Shift+R)
- Attends 1 minute (propagation Vercel)

---

### Les Embed Codes ne s'affichent pas

**Vérifications** :
1. Le code HTML est-il correct ?
2. As-tu utilisé des guillemets simples `'` ?
3. L'article est-il publié ?

**Solution** :
```html
<!-- ✅ BON -->
<div class='card'>Contenu</div>

<!-- ❌ MAUVAIS -->
<div class="card">Contenu</div>
```

---

### Erreur de syntaxe dans l'Embed

**Cause** : Guillemets doubles dans le HTML

**Solution** :
1. Remplace `"` par `'` dans tout le HTML
2. Ou échappe : `\"`

---

## 🎯 Checklist Rapide

### Publier un Article

```
[ ] Article créé/modifié dans Sanity
[ ] Embed Code avec guillemets simples
[ ] Article publié (checkbox "Publié")
[ ] Attends 10 secondes
[ ] Hard refresh sur le site
[ ] Vérifie l'affichage
```

### Vérifier l'Admin

```
[ ] Va sur /admin
[ ] Pas de header/footer visible
[ ] Sanity Studio en plein écran
[ ] Si non : hard refresh
```

---

## 🎉 Résumé

**Admin** :
- ✅ Plein écran via ConditionalLayout
- ✅ Détection automatique de la route

**Articles** :
- ✅ Force-dynamic = pas de cache
- ✅ Toujours la dernière version
- ✅ Embed Code fonctionne

**Tout est déployé et fonctionnel !** 🚀

---

**Dernière mise à jour** : 29 octobre 2025
