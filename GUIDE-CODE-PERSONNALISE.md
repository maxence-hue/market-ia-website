# 🚀 Guide : Code JavaScript/React Personnalisé dans les Articles

## ✅ Oui, c'est possible !

Tu peux maintenant écrire du **code React/JSX directement** dans Sanity et il sera **exécuté** sur ton site.

---

## 🎯 Nouveau Composant : customCode

### Dans Sanity Studio

1. **Ouvre un article**
2. Clique **"+"** dans le contenu
3. Choisis **"Composant Personnalisé"**
4. **Type de composant** : `customCode`
5. **Données personnalisées (JSON)** :

```json
{
  "code": "TON CODE ICI"
}
```

6. **Publie** !

---

## 📝 Format du Code

### Structure de Base

```javascript
const Component = () => {
  return h('div', { className: 'card-glass p-8 mb-12 rounded-2xl' },
    h('div', { className: 'inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6 border border-primary/30' },
      h('span', { className: 'font-display text-sm' }, 'À retenir')
    ),
    h('h2', { className: 'text-2xl font-display mb-6' },
      h('span', { className: 'gradient-text' }, 'Formation IA Var'),
      ' : ce qu\'il faut savoir'
    ),
    h('ul', { className: 'space-y-4' },
      h('li', { className: 'flex items-start gap-3' },
        h('span', { className: 'text-primary text-xl' }, '✓'),
        h('span', { className: 'text-light/80' }, 'Point 1')
      ),
      h('li', { className: 'flex items-start gap-3' },
        h('span', { className: 'text-primary text-xl' }, '✓'),
        h('span', { className: 'text-light/80' }, 'Point 2')
      )
    )
  );
};
```

---

## 🎨 Exemple Complet : Résumé d'Article

### Code à Mettre dans Sanity

**Type** : `customCode`  
**JSON** :

```json
{
  "code": "const Component = () => { return h('div', { className: 'card-glass p-8 mb-12 rounded-2xl' }, h('div', { className: 'inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6 border border-primary/30' }, h('svg', { className: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' })), h('span', { className: 'font-display text-sm' }, 'À retenir')), h('h2', { className: 'text-2xl font-display mb-6' }, h('span', { className: 'gradient-text' }, 'Formation IA Var'), ' : ce qu\\'il faut savoir'), h('ul', { className: 'space-y-4' }, h('li', { className: 'flex items-start gap-3 group' }, h('span', { className: 'text-primary text-xl mt-1 group-hover:scale-110 transition-transform' }, '✓'), h('span', { className: 'text-light/80 leading-relaxed' }, 'L\\'IA s\\'impose dans tous les métiers')), h('li', { className: 'flex items-start gap-3 group' }, h('span', { className: 'text-primary text-xl mt-1 group-hover:scale-110 transition-transform' }, '✓'), h('span', { className: 'text-light/80 leading-relaxed' }, 'Deux formats de formation disponibles')), h('li', { className: 'flex items-start gap-3 group' }, h('span', { className: 'text-primary text-xl mt-1 group-hover:scale-110 transition-transform' }, '✓'), h('span', { className: 'text-light/80 leading-relaxed' }, '100% pratique et concret')))); };"
}
```

---

## 🛠️ Fonction `h()` : Créer des Éléments

La fonction `h()` remplace `React.createElement()` :

```javascript
h(type, props, ...children)
```

### Exemples

**Div simple** :
```javascript
h('div', { className: 'card-glass p-8' }, 'Contenu')
```

**Titre avec classes** :
```javascript
h('h2', { className: 'text-2xl font-bold' }, 'Mon Titre')
```

**Liste** :
```javascript
h('ul', { className: 'space-y-2' },
  h('li', null, 'Item 1'),
  h('li', null, 'Item 2')
)
```

**SVG** :
```javascript
h('svg', { className: 'w-5 h-5', viewBox: '0 0 24 24' },
  h('path', { d: 'M...' })
)
```

---

## 🎨 Classes CSS Disponibles

### Containers
- `card-glass` : Card avec effet verre
- `p-8`, `p-6`, `p-4` : Padding
- `mb-12`, `mb-8`, `mb-6` : Margin bottom
- `rounded-2xl`, `rounded-xl` : Coins arrondis

### Couleurs
- `bg-primary/20` : Fond primary transparent
- `text-primary` : Texte primary (violet)
- `text-light/80` : Texte clair 80% opacité
- `border-primary/30` : Bordure primary 30%

### Typographie
- `font-display` : Font titres
- `text-2xl`, `text-xl`, `text-sm` : Tailles
- `font-bold`, `font-semibold` : Poids
- `gradient-text` : Texte avec gradient

### Layout
- `flex`, `inline-flex` : Flexbox
- `items-center`, `items-start` : Alignement
- `gap-2`, `gap-3` : Espacement
- `space-y-4` : Espacement vertical enfants

### Effets
- `hover:scale-110` : Zoom au hover
- `transition-transform` : Transition fluide
- `group`, `group-hover:` : Hover de groupe

---

## 💡 Exemples Pratiques

### 1. Card Simple

```json
{
  "code": "const Component = () => { return h('div', { className: 'card-glass p-6 rounded-xl' }, h('h3', { className: 'text-xl font-bold mb-2' }, 'Titre'), h('p', { className: 'text-light/70' }, 'Description')); };"
}
```

---

### 2. Badge avec Icône

```json
{
  "code": "const Component = () => { return h('div', { className: 'inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full' }, h('span', null, '✨'), h('span', null, 'Nouveau')); };"
}
```

---

### 3. Liste de Points

```json
{
  "code": "const Component = () => { return h('ul', { className: 'space-y-3' }, h('li', { className: 'flex items-start gap-2' }, h('span', { className: 'text-primary' }, '✓'), h('span', null, 'Point 1')), h('li', { className: 'flex items-start gap-2' }, h('span', { className: 'text-primary' }, '✓'), h('span', null, 'Point 2'))); };"
}
```

---

### 4. Bannière CTA

```json
{
  "code": "const Component = () => { return h('div', { className: 'card-glass p-8 text-center bg-gradient-to-r from-primary/10 to-transparent' }, h('h3', { className: 'text-2xl font-bold mb-4' }, 'Prêt à démarrer ?'), h('p', { className: 'text-light/70 mb-6' }, 'Rejoignez notre formation'), h('a', { href: '/contact', className: 'btn-primary inline-block' }, 'S\\'inscrire')); };"
}
```

---

## ⚠️ Limitations & Sécurité

### Ce Qui Fonctionne
✅ JSX avec fonction `h()`  
✅ Classes Tailwind  
✅ Liens et boutons  
✅ SVG et icônes  
✅ Texte et contenu statique  

### Ce Qui Ne Fonctionne Pas
❌ `useState`, `useEffect` (pour l'instant)  
❌ Imports externes  
❌ Fetch API  
❌ Code malveillant (sandboxé)  

---

## 🔧 Debugging

### Si Rien ne S'Affiche

1. **Vérifie la console** du navigateur (F12)
2. **Vérifie le JSON** : Pas d'erreur de syntaxe ?
3. **Teste avec un exemple simple** d'abord
4. **Redémarre** le serveur de dev

### Message d'Erreur Affiché

Le composant affiche l'erreur en rouge sur la page :

```
❌ Erreur dans le code personnalisé
SyntaxError: Unexpected token...
```

**Solution** : Corrige la syntaxe dans Sanity et republie

---

## 📊 Comparaison des Méthodes

| Méthode | Avantages | Inconvénients |
|---------|-----------|---------------|
| **Composants Prédéfinis** | Simple, JSON propre | Limité aux composants existants |
| **Code Personnalisé** | Liberté totale | Syntaxe `h()` moins lisible |
| **Bloc de Code** | Montrer du code | Pas exécuté |

---

## 🎯 Quand Utiliser Quoi ?

### Composants Prédéfinis (`articleSummary`, `ctaBanner`, `faq`)
**Quand** : Cas d'usage standard  
**Avantage** : JSON simple et propre

### Code Personnalisé (`customCode`)
**Quand** : Design unique, layout spécifique  
**Avantage** : Contrôle total du HTML/CSS

### Bloc de Code
**Quand** : Tutoriel, montrer du code  
**Avantage** : Coloration syntaxique

---

## 🚀 Workflow Recommandé

1. **Commence** avec composants prédéfinis
2. **Si besoin spécifique** → Code personnalisé
3. **Teste** en local d'abord
4. **Publie** quand satisfait

---

## 💡 Astuce : Générateur de Code

Pour convertir du JSX en code `h()`, utilise cet outil :

**Exemple JSX** :
```jsx
<div className="card-glass p-8">
  <h2>Titre</h2>
  <p>Description</p>
</div>
```

**Devient** :
```javascript
h('div', { className: 'card-glass p-8' },
  h('h2', null, 'Titre'),
  h('p', null, 'Description')
)
```

---

## 🎉 Résumé

**Tu peux maintenant** :
- ✅ Écrire du code React/JSX dans Sanity
- ✅ Créer des designs uniques
- ✅ Avoir un contrôle total du HTML/CSS
- ✅ Voir le résultat exécuté sur le site

**Type de composant** : `customCode`  
**Format JSON** : `{ "code": "..." }`  
**Fonction** : `h(type, props, ...children)`

---

**Dernière mise à jour** : 29 octobre 2025
