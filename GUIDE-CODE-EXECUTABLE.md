# 🚀 Code Exécutable dans les Articles

## ✅ Solution : Composant `executableCode`

Tu peux maintenant **intégrer directement du HTML/JSX** dans tes articles et le voir **s'exécuter** !

---

## 🎯 Comment Utiliser

### Dans Sanity Studio

1. **Ouvre un article**
2. Clique **"+"** dans le contenu
3. Choisis **"Composant Personnalisé"**
4. **Type** : `executableCode`
5. **Données JSON** : Fournis ton code HTML
6. **Publie** !

---

## 📝 Exemples d'Utilisation

### Exemple 1 : HTML Simple

**JSON dans Sanity** :
```json
{
  "html": "<div class='card-glass p-8 mb-12 rounded-2xl'><div class='inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6 border border-primary/30'><svg class='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'/></svg><span class='font-display text-sm'>À retenir</span></div><h2 class='text-2xl font-display mb-6'><span class='gradient-text'>Formation IA Var</span> : ce qu'il faut savoir</h2><ul class='space-y-4'><li class='flex items-start gap-3'><span class='text-primary text-xl'>✓</span><span class='text-light/80'>L'IA s'impose dans tous les métiers</span></li><li class='flex items-start gap-3'><span class='text-primary text-xl'>✓</span><span class='text-light/80'>Deux formats de formation disponibles</span></li></ul></div>"
}
```

**Résultat** : Ton HTML s'affiche avec tous les styles !

---

### Exemple 2 : HTML + CSS Custom

**JSON dans Sanity** :
```json
{
  "html": "<div class='custom-card'><h3>Mon Titre Custom</h3><p>Mon contenu avec style personnalisé</p></div>",
  "css": ".custom-card { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 2rem; border-radius: 1rem; color: white; }"
}
```

**Résultat** : HTML avec CSS personnalisé appliqué !

---

### Exemple 3 : Ton Résumé d'Article

**JSON dans Sanity** :
```json
{
  "html": "<div class='card-glass p-8 mb-12 rounded-2xl'><div class='inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6 border border-primary/30'><svg class='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'/></svg><span class='font-display text-sm'>À retenir</span></div><h2 class='text-2xl font-display mb-6'><span class='gradient-text'>Formation IA Var</span> : ce qu'il faut savoir</h2><ul class='space-y-4'><li class='flex items-start gap-3 group'><span class='text-primary text-xl mt-1 group-hover:scale-110 transition-transform'>→</span><span class='text-light/80 leading-relaxed'><strong>L'IA s'impose dans tous les métiers</strong> : artisans, commerçants, indépendants et PME du Var adoptent déjà ChatGPT, Midjourney et Notion AI</span></li><li class='flex items-start gap-3 group'><span class='text-primary text-xl mt-1 group-hover:scale-110 transition-transform'>→</span><span class='text-light/80 leading-relaxed'><strong>Deux formats de formation</strong> : une journée d'initiation ou 3 jours certifiants</span></li><li class='flex items-start gap-3 group'><span class='text-primary text-xl mt-1 group-hover:scale-110 transition-transform'>→</span><span class='text-light/80 leading-relaxed'><strong>100% pratique et concret</strong> : automatisation, création de contenus, génération d'images</span></li><li class='flex items-start gap-3 group'><span class='text-primary text-xl mt-1 group-hover:scale-110 transition-transform'>→</span><span class='text-light/80 leading-relaxed'><strong>Financement OPCO disponible</strong> : prise en charge partielle ou totale</span></li><li class='flex items-start gap-3 group'><span class='text-primary text-xl mt-1 group-hover:scale-110 transition-transform'>→</span><span class='text-light/80 leading-relaxed'><strong>Formation de proximité</strong> : sessions à Toulon, Hyères, Brignoles et Draguignan</span></li><li class='flex items-start gap-3 group'><span class='text-primary text-xl mt-1 group-hover:scale-110 transition-transform'>→</span><span class='text-light/80 leading-relaxed'><strong>+35% de postes liés à l'IA d'ici 2026</strong> dans le sud-est selon France Travail</span></li></ul><div class='mt-8 pt-6 border-t border-white/10'><p class='text-light/60 text-sm mb-4'>⏱️ Temps de lecture : 8 minutes</p><a href='#formations' class='text-primary hover:text-primary-light transition-colors inline-flex items-center gap-2 group'>Découvrir les formations <span class='group-hover:translate-x-1 transition-transform'>→</span></a></div></div>"
}
```

**Résultat** : Exactement le design que tu voulais ! 🎨

---

## 🎨 Classes CSS Disponibles

Tu peux utiliser toutes les classes Tailwind du site :

### Cards & Containers
- `card-glass` : Card avec effet verre
- `rounded-2xl` : Coins arrondis
- `p-8`, `mb-12` : Padding et margin

### Couleurs
- `bg-primary` : Fond violet
- `text-primary` : Texte violet
- `text-light` : Texte blanc
- `gradient-text` : Texte avec gradient

### Effets
- `hover:scale-110` : Zoom au survol
- `transition-transform` : Animation fluide
- `shadow-glow` : Ombre lumineuse

---

## ⚠️ Important

### Sécurité

Le code HTML est **injecté directement** dans la page. Assure-toi que :
- ✅ Tu contrôles le contenu
- ✅ Pas de code malveillant
- ✅ Pas de scripts externes non vérifiés

### Limitations

- ❌ Pas de JavaScript complexe
- ❌ Pas d'événements onClick avec fonctions
- ✅ HTML + CSS fonctionne parfaitement
- ✅ Classes Tailwind fonctionnent

---

## 🔧 Workflow Recommandé

### 1. Créer ton HTML

Utilise un éditeur ou ChatGPT pour générer ton HTML :

**Prompt ChatGPT** :
```
Crée-moi un résumé d'article en HTML avec :
- Une card avec classe "card-glass p-8"
- Un badge "À retenir" avec icône
- Un titre avec gradient
- Une liste de 6 points avec icônes "→"
- Un footer avec temps de lecture et CTA

Utilise les classes Tailwind : text-primary, text-light/80, gradient-text, etc.
```

### 2. Minifier le HTML

Supprime les retours à la ligne pour avoir une seule ligne :

**Avant** :
```html
<div class="card">
  <h2>Titre</h2>
</div>
```

**Après** :
```html
<div class='card'><h2>Titre</h2></div>
```

### 3. Utiliser dans Sanity

```json
{
  "html": "<div class='card'><h2>Titre</h2></div>"
}
```

---

## 💡 Astuces

### Guillemets

Utilise des **guillemets simples** `'` dans le HTML pour éviter les conflits avec le JSON :

```json
{
  "html": "<div class='card'>Contenu</div>"
}
```

### Échapper les Guillemets

Si tu dois utiliser des guillemets doubles, échappe-les :

```json
{
  "html": "<div class=\"card\">Contenu</div>"
}
```

### Tester Localement

Avant de mettre dans Sanity, teste ton HTML dans un fichier local pour vérifier le rendu.

---

## 📊 Comparaison des Méthodes

| Méthode | Avantages | Inconvénients |
|---------|-----------|---------------|
| **Bloc de Code** | Coloration syntaxique | Pas exécuté |
| **Composant Simple** | Facile, JSON simple | Limité en design |
| **Code Exécutable** | HTML complet, flexible | JSON plus long |

---

## 🎯 Cas d'Usage

### Utilise `executableCode` pour :
- ✅ Design complexe personnalisé
- ✅ HTML/CSS spécifique
- ✅ Layouts uniques par article
- ✅ Contrôle total du rendu

### Utilise `articleSummary` pour :
- ✅ Résumé simple et rapide
- ✅ JSON court et lisible
- ✅ Design standard cohérent

---

## 🚀 Exemple Complet

### Ton Résumé Formation IA Var

**Dans Sanity** :
1. Composant Personnalisé
2. Type : `executableCode`
3. JSON :

```json
{
  "html": "<div class='card-glass p-8 mb-12 rounded-2xl'><div class='inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6 border border-primary/30'><svg class='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'/></svg><span class='font-display text-sm'>À retenir</span></div><h2 class='text-2xl font-display mb-6'><span class='gradient-text'>Formation IA Var</span> : ce qu'il faut savoir</h2><ul class='space-y-4'><li class='flex items-start gap-3 group'><span class='text-primary text-xl mt-1'>→</span><span class='text-light/80 leading-relaxed'><strong>L'IA s'impose dans tous les métiers</strong> : artisans, commerçants, indépendants et PME du Var adoptent déjà ChatGPT</span></li><li class='flex items-start gap-3 group'><span class='text-primary text-xl mt-1'>→</span><span class='text-light/80 leading-relaxed'><strong>Deux formats de formation</strong> : une journée d'initiation ou 3 jours certifiants</span></li><li class='flex items-start gap-3 group'><span class='text-primary text-xl mt-1'>→</span><span class='text-light/80 leading-relaxed'><strong>100% pratique et concret</strong> : automatisation, création de contenus, génération d'images</span></li><li class='flex items-start gap-3 group'><span class='text-primary text-xl mt-1'>→</span><span class='text-light/80 leading-relaxed'><strong>Financement OPCO disponible</strong> : prise en charge partielle ou totale</span></li><li class='flex items-start gap-3 group'><span class='text-primary text-xl mt-1'>→</span><span class='text-light/80 leading-relaxed'><strong>Formation de proximité</strong> : sessions à Toulon, Hyères, Brignoles et Draguignan</span></li><li class='flex items-start gap-3 group'><span class='text-primary text-xl mt-1'>→</span><span class='text-light/80 leading-relaxed'><strong>+35% de postes liés à l'IA d'ici 2026</strong> dans le sud-est</span></li></ul></div>"
}
```

**Résultat** : Design complet avec badge, titre gradient, liste de points, tout fonctionne ! ✨

---

## 🎉 Résumé

**Maintenant tu peux** :
- ✅ Mettre du HTML directement dans tes articles
- ✅ Utiliser toutes les classes Tailwind
- ✅ Créer des designs complexes
- ✅ Avoir un contrôle total du rendu

**Type de composant** : `executableCode`  
**JSON** : `{ "html": "ton code ici" }`

**C'est déployé et prêt à l'emploi !** 🚀

---

**Dernière mise à jour** : 29 octobre 2025
