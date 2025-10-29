# 📚 Différence : Blocs de Code vs Composants Personnalisés

## ⚠️ Problème Courant

Tu vois du **code affiché avec coloration** au lieu du **design rendu** ?

**C'est normal !** Tu as utilisé le mauvais outil dans Sanity.

---

## 🎯 2 Outils Différents

### 1. 🖥️ Bloc de Code
**Usage** : **MONTRER** du code (tutoriels, exemples)  
**Résultat** : Code coloré avec numéros de ligne  
**Exemple** : Article expliquant comment coder

```jsx
// Ce code sera AFFICHÉ, pas EXÉCUTÉ
<div className="card">
  <h1>Titre</h1>
</div>
```

---

### 2. ⚛️ Composant Personnalisé
**Usage** : **EXÉCUTER** du code React  
**Résultat** : Design rendu, composant fonctionnel  
**Exemple** : Résumé d'article, CTA, FAQ

**Rendu visuel** :
```
┌─────────────────────────────┐
│ ℹ️ À retenir               │
│                             │
│ Formation IA Var            │
│                             │
│ ✓ Formations pratiques      │
│ ✓ Accès à vie               │
│ ✓ Support personnalisé      │
└─────────────────────────────┘
```

---

## 🔍 Comment Choisir ?

### Utilise **Bloc de Code** si :
- ✅ Tu veux **enseigner** du code
- ✅ Tu montres **comment coder** quelque chose
- ✅ C'est un **tutoriel technique**
- ✅ Le lecteur doit **copier** le code

**Exemple** : "Voici comment créer un bouton en React"

---

### Utilise **Composant Personnalisé** si :
- ✅ Tu veux un **design** dans l'article
- ✅ Tu veux un **résumé visuel**
- ✅ Tu veux un **CTA** (Call-to-Action)
- ✅ Tu veux une **FAQ** interactive
- ✅ C'est **décoratif ou fonctionnel**

**Exemple** : Résumé des points clés de l'article

---

## 🚀 Comment Utiliser les Composants

### Dans Sanity Studio

1. **Ouvre un article**
2. Clique **"+"** dans le contenu
3. Choisis **"Composant Personnalisé"** ⚛️
4. Sélectionne le type :
   - `ctaBanner` → Bannière d'appel à l'action
   - `faq` → Questions/Réponses
   - `articleSummary` → Résumé de l'article
5. (Optionnel) Ajoute des données JSON
6. **Publie** !

---

## 📦 Composants Disponibles

### 1. 🎯 CTA Banner
**Usage** : Appel à l'action dans l'article

**Données JSON** :
```json
{
  "title": "🚀 Prêt à démarrer ?",
  "description": "Rejoignez notre formation",
  "buttonText": "S'inscrire",
  "buttonLink": "/contact"
}
```

**Rendu** : Bannière colorée avec bouton

---

### 2. ❓ FAQ
**Usage** : Questions/Réponses dépliables

**Données JSON** :
```json
{
  "items": [
    {
      "question": "Combien de temps dure la formation ?",
      "answer": "La formation dure 2 jours complets."
    },
    {
      "question": "C'est adapté aux débutants ?",
      "answer": "Oui, aucune connaissance préalable requise."
    }
  ]
}
```

**Rendu** : Accordéon interactif

---

### 3. 📝 Article Summary (NOUVEAU !)
**Usage** : Résumé des points clés

**Données JSON** :
```json
{
  "title": "Formation IA Var : ce qu'il faut savoir",
  "points": [
    "Formations pratiques avec cas réels",
    "Accès à vie aux contenus",
    "Support personnalisé inclus",
    "Certificat de réussite"
  ]
}
```

**Rendu** : Card avec badge "À retenir" + liste de points

---

## 🎨 Exemple Concret

### ❌ Mauvaise Utilisation (Bloc de Code)

**Dans Sanity** : Tu ajoutes un "Bloc de Code" avec :
```jsx
export default function ArticleSummary() {
  return <div>...</div>
}
```

**Sur le site** : Code affiché avec coloration syntaxique

**Problème** : Le code est montré, pas exécuté !

---

### ✅ Bonne Utilisation (Composant Personnalisé)

**Dans Sanity** :
1. Ajouter "Composant Personnalisé"
2. Type : `articleSummary`
3. Données :
```json
{
  "title": "Points clés de l'article",
  "points": [
    "Formation pratique",
    "Accès à vie",
    "Support inclus"
  ]
}
```

**Sur le site** : Card design avec les points affichés

**Résultat** : Composant rendu et fonctionnel ! ✅

---

## 🛠️ Créer un Nouveau Composant

### Étape 1 : Créer le Composant React

Fichier : `components/blog/MonComposant.tsx`

```tsx
interface MonComposantProps {
  titre?: string
  description?: string
}

export default function MonComposant({ 
  titre = "Titre par défaut",
  description = "Description par défaut"
}: MonComposantProps) {
  return (
    <div className="card-glass p-6">
      <h3>{titre}</h3>
      <p>{description}</p>
    </div>
  )
}
```

### Étape 2 : Ajouter au Mapping

Fichier : `lib/componentMapping.tsx`

```tsx
import MonComposant from '@/components/blog/MonComposant'

export const componentMapping = {
  ctaBanner: CTABanner,
  faq: FAQ,
  articleSummary: ArticleSummary,
  monComposant: MonComposant, // ← NOUVEAU
}
```

### Étape 3 : Utiliser dans Sanity

1. Composant Personnalisé
2. Type : `monComposant`
3. Données JSON :
```json
{
  "titre": "Mon titre custom",
  "description": "Ma description"
}
```

---

## 📊 Tableau Récapitulatif

| Besoin | Outil | Résultat |
|--------|-------|----------|
| **Montrer du code** | Bloc de Code | Code coloré |
| **Tutoriel code** | Bloc de Code | Code avec numéros |
| **Design dans article** | Composant Personnalisé | Rendu visuel |
| **CTA dans article** | Composant Personnalisé | Bannière cliquable |
| **FAQ interactive** | Composant Personnalisé | Accordéon |
| **Résumé visuel** | Composant Personnalisé | Card stylée |

---

## ❓ FAQ

### "Pourquoi mon code s'affiche au lieu de s'exécuter ?"

Tu as utilisé **"Bloc de Code"** au lieu de **"Composant Personnalisé"**.

**Solution** :
1. Supprime le bloc de code
2. Ajoute un composant personnalisé
3. Choisis le type (articleSummary, ctaBanner, etc.)
4. Configure les données JSON

---

### "Comment créer mon propre composant ?"

1. Crée le fichier dans `components/blog/`
2. Ajoute-le au `componentMapping.tsx`
3. Redémarre le serveur
4. Utilise-le dans Sanity avec son nom

---

### "Mes modifications ne s'affichent pas ?"

1. **Redémarre le serveur** : `npm run dev`
2. **Vide le cache** : Ctrl+Shift+R
3. **Redéploie** : `vercel --prod`

---

## 🎯 Cas d'Usage Pratiques

### Article de Blog Classique

```
Titre de l'article
Paragraphe intro...

[Composant: articleSummary]  ← Résumé visuel

Paragraphe 1...
Paragraphe 2...

[Composant: ctaBanner]  ← CTA milieu d'article

Paragraphe 3...

[Composant: faq]  ← FAQ en fin d'article

Conclusion...
```

---

### Article Tutoriel Technique

```
Titre : Comment créer un composant React

Intro...

[Bloc de Code: jsx]  ← Montrer le code
export default function MyComponent() {
  return <div>Hello</div>
}

Explication...

[Bloc de Code: jsx]  ← Autre exemple
const styles = { color: 'blue' }

[Composant: ctaBanner]  ← CTA pour formation

Conclusion...
```

---

## 💡 Astuce Pro

**Combine les deux** dans un article :

1. **Bloc de Code** pour **enseigner**
2. **Composant** pour **design/CTA**

**Exemple** :
```
"Voici le code d'un bouton React :"

[Bloc de Code]
<button className="btn">Click</button>

"Et voici comment l'utiliser :"

[Composant: articleSummary]
- Points clés sur l'utilisation
- Bonnes pratiques
- Cas d'usage
```

---

## 🎉 Résumé

**Bloc de Code** = MONTRER du code  
**Composant Personnalisé** = EXÉCUTER du React

**Tu veux du design ?** → Composant Personnalisé ✅  
**Tu enseignes à coder ?** → Bloc de Code ✅

---

**Dernière mise à jour** : 29 octobre 2025
