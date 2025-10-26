# 🎨 Guide : Composants React dans Sanity

## ✅ Système Installé !

Vous pouvez maintenant **insérer des composants React interactifs** directement dans vos articles Sanity !

---

## 📋 Composants Disponibles

### 1. 🎯 CTA Banner
**Bannière d'appel à l'action**

**Utilisation dans Sanity :**
1. Cliquez sur **"+"** dans votre article
2. Choisissez **"Composant Personnalisé"**
3. Type : **"CTA Banner"**
4. (Optionnel) Données JSON :

```json
{
  "title": "Prêt à transformer votre business ?",
  "description": "Rejoignez des centaines d'entreprises qui ont déjà franchi le pas",
  "buttonText": "Réserver ma formation",
  "buttonLink": "/contact"
}
```

**Rendu :** Une belle bannière avec titre, description et bouton CTA

---

### 2. ❓ FAQ
**Section Questions/Réponses dépliables**

**Utilisation dans Sanity :**
1. Cliquez sur **"+"** dans votre article
2. Choisissez **"Composant Personnalisé"**
3. Type : **"FAQ"**
4. (Optionnel) Données JSON personnalisées :

```json
{
  "items": [
    {
      "question": "Comment fonctionne l'abonnement ?",
      "answer": "Vous payez un montant mensuel fixe et nous nous occupons de tout."
    },
    {
      "question": "Puis-je annuler à tout moment ?",
      "answer": "Oui, vous pouvez annuler sans frais supplémentaires."
    }
  ]
}
```

**Rendu :** FAQ interactive avec questions dépliables

---

## 🚀 Comment Utiliser

### Étape 1 : Ouvrir Sanity Studio

```bash
npm run sanity
```

Ouvrir **http://localhost:3333**

### Étape 2 : Créer/Modifier un Article

1. Allez dans **"Article de Blog"**
2. Créez un nouvel article ou modifiez-en un existant

### Étape 3 : Insérer un Composant

1. Dans le champ **"Contenu"**, cliquez sur **"+"**
2. Vous verrez maintenant **"Composant Personnalisé"** ⚛️
3. Cliquez dessus
4. Choisissez le **Type de Composant** dans la liste
5. (Optionnel) Ajoutez des **Données Personnalisées** en JSON

### Étape 4 : Publier

1. Cliquez **"Publish"** (bouton bleu en haut à droite)
2. Allez sur votre site → Le composant s'affiche ! 🎉

---

## 📝 Exemple Complet d'Article

Voici à quoi ressemble un article avec composants :

```
[Texte normal...]

Bienvenue dans cet article sur l'automatisation IA.
L'intelligence artificielle transforme...

[+ Composant CTA Banner]
  Type: ctaBanner
  JSON: {"title": "Découvrez nos formations", "buttonText": "En savoir plus"}

[Texte normal...]

Maintenant, voyons les questions fréquentes :

[+ Composant FAQ]
  Type: faq
  (pas de JSON = utilise les questions par défaut)

[Texte normal...]

En conclusion...
```

---

## 🎨 Personnaliser un Composant

### Exemple : CTA Banner Personnalisé

**Dans Sanity, champ "Données Personnalisées" :**

```json
{
  "title": "🚀 Offre Spéciale Formation IA",
  "description": "Inscrivez-vous avant le 31 décembre et bénéficiez de 20% de réduction",
  "buttonText": "Profiter de l'offre",
  "buttonLink": "/formations-ia"
}
```

**Résultat :** Le CTA affichera votre texte personnalisé !

---

## 🔧 Ajouter de Nouveaux Composants

### 1. Créer le Composant React

Créez un fichier dans `/components/blog/MonComposant.tsx` :

```tsx
interface MonComposantProps {
  title?: string
  items?: string[]
}

export function MonComposant({ 
  title = "Titre par défaut",
  items = ["Item 1", "Item 2"]
}: MonComposantProps) {
  return (
    <div className="my-12 card-glass p-8">
      <h3 className="text-3xl font-bold mb-4">{title}</h3>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
```

### 2. L'Ajouter au Mapping

Dans `/lib/componentMapping.tsx` :

```tsx
import { MonComposant } from '@/components/blog/MonComposant'

export const componentMapping = {
  ctaBanner: CTABanner,
  faq: FAQ,
  monComposant: MonComposant, // ← Ajoutez ici
}
```

### 3. L'Ajouter dans le Schéma Sanity

Dans `/sanity/schemas/customComponent.ts`, ajoutez dans la liste :

```typescript
{ title: '✨ Mon Composant', value: 'monComposant' },
```

### 4. Redémarrer Sanity Studio

```bash
# Ctrl+C pour arrêter
npm run sanity
```

**C'est tout !** Votre nouveau composant est disponible dans Sanity 🎉

---

## 🎯 Composants à Venir

Voici les composants prévus (non encore développés) :

- 📋 **Article Summary** : Résumé de l'article avec points clés
- 📚 **Programme Formation** : Affichage du programme avec modules
- ⭐ **Témoignages** : Carousel de témoignages clients
- 💰 **Grille Tarifs** : Comparaison de formules
- 🔥 **Avantages** : Liste d'avantages avec icônes
- 📊 **Statistiques** : Chiffres clés animés

**Besoin d'un composant spécifique ?** Demandez-le !

---

## 🐛 Dépannage

### Le composant ne s'affiche pas

1. **Vérifiez que l'article est publié** (case "Publié" cochée)
2. **Videz le cache** : Ctrl+Shift+R sur la page
3. **Vérifiez les logs** : Ouvrez la console (F12) pour voir les erreurs

### Erreur "Composant non trouvé"

→ Le type de composant n'existe pas dans `componentMapping.tsx`
→ Vérifiez l'orthographe exacte

### Erreur JSON

→ Votre JSON est mal formaté
→ Utilisez un validateur : https://jsonlint.com

---

## 📚 Ressources

- **Documentation Sanity** : https://www.sanity.io/docs
- **PortableText** : https://github.com/portabletext/react-portabletext
- **JSON Validator** : https://jsonlint.com

---

**Dernière mise à jour** : 26 octobre 2025

🎉 **Amusez-vous bien avec vos composants interactifs !**
