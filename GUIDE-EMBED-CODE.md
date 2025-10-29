# 💻 Embed Code - Comme Webflow !

## ✅ C'est Fait !

Tu as maintenant un **Embed Code** exactement comme sur Webflow. Il suffit de coller ton HTML et il sera **exécuté directement** dans l'article !

---

## 🚀 Comment Utiliser

### Dans Sanity Studio

1. **Ouvre un article**
2. Dans le contenu, clique **"+"**
3. Choisis **"💻 Embed Code"**
4. **Colle ton code HTML** dans le champ
5. (Optionnel) Ajoute du CSS personnalisé
6. **Publie** !

---

## 📝 Exemple : Ton Résumé Formation IA

### Code HTML à Coller

```html
<div class='card-glass p-8 mb-12 rounded-2xl'>
  <div class='inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6 border border-primary/30'>
    <svg class='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
      <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'/>
    </svg>
    <span class='font-display text-sm'>À retenir</span>
  </div>
  
  <h2 class='text-2xl font-display mb-6'>
    <span class='gradient-text'>Formation IA Var</span> : ce qu'il faut savoir
  </h2>
  
  <ul class='space-y-4'>
    <li class='flex items-start gap-3 group'>
      <span class='text-primary text-xl mt-1 group-hover:scale-110 transition-transform'>→</span>
      <span class='text-light/80 leading-relaxed'>
        <strong>L'IA s'impose dans tous les métiers</strong> : artisans, commerçants, indépendants et PME du Var adoptent déjà ChatGPT, Midjourney et Notion AI
      </span>
    </li>
    <li class='flex items-start gap-3 group'>
      <span class='text-primary text-xl mt-1 group-hover:scale-110 transition-transform'>→</span>
      <span class='text-light/80 leading-relaxed'>
        <strong>Deux formats de formation</strong> : une journée d'initiation ou 3 jours certifiants pour maîtriser l'IA de A à Z
      </span>
    </li>
    <li class='flex items-start gap-3 group'>
      <span class='text-primary text-xl mt-1 group-hover:scale-110 transition-transform'>→</span>
      <span class='text-light/80 leading-relaxed'>
        <strong>100% pratique et concret</strong> : automatisation, création de contenus, génération d'images… applicable dès le lendemain
      </span>
    </li>
    <li class='flex items-start gap-3 group'>
      <span class='text-primary text-xl mt-1 group-hover:scale-110 transition-transform'>→</span>
      <span class='text-light/80 leading-relaxed'>
        <strong>Financement OPCO disponible</strong> : prise en charge partielle ou totale selon votre statut professionnel
      </span>
    </li>
    <li class='flex items-start gap-3 group'>
      <span class='text-primary text-xl mt-1 group-hover:scale-110 transition-transform'>→</span>
      <span class='text-light/80 leading-relaxed'>
        <strong>Formation de proximité</strong> : sessions à Toulon, Hyères, Brignoles et Draguignan avec des formateurs locaux
      </span>
    </li>
    <li class='flex items-start gap-3 group'>
      <span class='text-primary text-xl mt-1 group-hover:scale-110 transition-transform'>→</span>
      <span class='text-light/80 leading-relaxed'>
        <strong>+35% de postes liés à l'IA d'ici 2026</strong> dans le sud-est selon France Travail
      </span>
    </li>
  </ul>
  
  <div class='mt-8 pt-6 border-t border-white/10'>
    <p class='text-light/60 text-sm mb-4'>⏱️ Temps de lecture : 8 minutes</p>
    <a href='#formations' class='text-primary hover:text-primary-light transition-colors inline-flex items-center gap-2 group'>
      Découvrir les formations 
      <span class='group-hover:translate-x-1 transition-transform'>→</span>
    </a>
  </div>
</div>
```

### Étapes dans Sanity

1. **"+" dans le contenu**
2. **"💻 Embed Code"**
3. **Colle** le code HTML ci-dessus
4. **Publie**

**Résultat** : Card complète avec badge, titre gradient, liste de points, footer ! ✨

---

## 🎨 Classes CSS Disponibles

Tu peux utiliser toutes les classes Tailwind du site :

### Cards & Layout
- `card-glass` - Card avec effet verre
- `rounded-2xl` - Coins arrondis
- `p-8`, `mb-12` - Padding, margin
- `space-y-4` - Espacement vertical

### Couleurs
- `bg-primary` - Fond violet
- `text-primary` - Texte violet
- `text-light` - Texte blanc
- `gradient-text` - Gradient violet

### Effets
- `hover:scale-110` - Zoom au survol
- `transition-transform` - Animation fluide
- `group-hover:translate-x-1` - Translation au survol du groupe

---

## 💡 Exemple Avec CSS Custom

### HTML
```html
<div class='custom-box'>
  <h3>Mon Titre</h3>
  <p>Mon contenu avec style unique</p>
</div>
```

### CSS Personnalisé (optionnel)
```css
.custom-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  border-radius: 1rem;
  color: white;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.custom-box h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
```

**Résultat** : Box avec gradient personnalisé !

---

## ⚠️ Important

### Guillemets

Utilise des **guillemets simples** `'` dans le HTML :

```html
<div class='card'>Contenu</div>
```

### Sécurité

- ✅ Contrôle ton code
- ✅ Vérifie qu'il n'y a pas de scripts malveillants
- ✅ Teste avant de publier

---

## 🆚 Différence avec "Bloc de Code"

| Type | Usage | Résultat |
|------|-------|----------|
| **Bloc de Code** | Montrer du code (tutoriel) | Code coloré affiché |
| **💻 Embed Code** | Exécuter du HTML (design) | HTML rendu et fonctionnel |

---

## 🎯 Cas d'Usage

### Utilise **Embed Code** pour :
- ✅ Résumés visuels
- ✅ Cards personnalisées
- ✅ Bannières CTA
- ✅ Layouts uniques
- ✅ N'importe quel design HTML

### Utilise **Bloc de Code** pour :
- ✅ Tutoriels
- ✅ Montrer des exemples
- ✅ Enseigner à coder

---

## 📋 Checklist Rapide

```
[ ] Ouvrir article dans Sanity
[ ] Cliquer "+" dans le contenu
[ ] Choisir "💻 Embed Code"
[ ] Coller le code HTML
[ ] (Optionnel) Ajouter CSS
[ ] Publier
[ ] Vérifier sur le site
```

---

## 🎉 Résumé

**Exactement comme Webflow** :
- ✅ Colle ton HTML
- ✅ Ajoute du CSS si besoin
- ✅ Publie
- ✅ C'est exécuté !

**C'est simple, rapide et puissant !** 🚀

---

**Dernière mise à jour** : 29 octobre 2025
