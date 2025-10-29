# 🔐 Accès à Sanity Studio via /admin

## ✅ Configuration Terminée !

Sanity Studio est maintenant intégré directement dans ton site Next.js.

---

## 🌐 URLs d'Accès

### En Production
**https://market-ia.fr/admin**
(ou ton domaine Vercel)

### En Local
**http://localhost:3000/admin**

---

## 🚀 Comment Accéder

### 1. En Production

1. Va sur **https://market-ia.fr/admin**
2. Connecte-toi avec ton compte Sanity
3. Gère ton contenu directement !

### 2. En Local

```bash
# Lance le serveur Next.js
npm run dev

# Ouvre le navigateur
http://localhost:3000/admin
```

**Plus besoin de `npm run sanity` !** 🎉

---

## ⚙️ Configuration Requise

### Variables d'Environnement

**En local** (`.env.local`) :
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=ton-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

**Sur Vercel** :
- Dashboard → Settings → Environment Variables
- Ajoute les 3 variables ci-dessus

### Obtenir le Project ID

1. Va sur https://sanity.io/manage
2. Clique sur ton projet
3. Copie le **Project ID**
4. Colle-le dans `NEXT_PUBLIC_SANITY_PROJECT_ID`

---

## 🎯 Fonctionnalités Disponibles

### Interface Complète

- ✅ **Gestion des articles** de blog
- ✅ **Blocs de code** (16 langages)
- ✅ **Composants React** personnalisés
- ✅ **Upload d'images**
- ✅ **Vision Tool** (tester les requêtes GROQ)

### Plugins Activés

- **Structure Tool** : Interface de gestion
- **Vision Tool** : Requêtes GROQ
- **Code Input** : Blocs de code avec syntaxe

---

## 🔧 Avantages de /admin

### Avant (npm run sanity)

❌ Nécessite Node.js >= 20.19  
❌ Commande séparée à lancer  
❌ Port différent (3333)  
❌ Pas accessible en production  

### Maintenant (/admin)

✅ **Fonctionne avec Node.js 20.3.1**  
✅ **Intégré dans le site Next.js**  
✅ **Même domaine** (market-ia.fr/admin)  
✅ **Accessible partout** (local + prod)  
✅ **Pas de commande supplémentaire**  

---

## 📱 Utilisation

### Créer un Article

1. Va sur `/admin`
2. Clique **"Article de Blog"**
3. Clique **"Create"**
4. Remplis les champs :
   - Titre
   - Slug
   - Image principale
   - Contenu (texte, images, code, composants)
5. Coche **"Publié"**
6. Clique **"Publish"**

### Ajouter du Code

1. Dans le contenu, clique **"+"**
2. Choisit **"Bloc de Code"**
3. Sélectionne le langage (HTML, JavaScript, etc.)
4. Colle ton code
5. (Optionnel) Ajoute un nom de fichier

### Insérer un Composant

1. Dans le contenu, clique **"+"**
2. Choisit **"Composant Personnalisé"**
3. Sélectionne le type (CTA, FAQ)
4. (Optionnel) Personnalise avec JSON

---

## 🐛 Dépannage

### Page blanche sur /admin ?

1. **Vérifie les variables** dans `.env.local`
2. **Project ID correct** ? (vérifie sur sanity.io/manage)
3. **Redémarre le serveur** : `npm run dev`

### Erreur de connexion ?

1. **Compte Sanity** : Tu dois avoir un compte sur sanity.io
2. **Projet créé** : Le Project ID doit exister
3. **Cookies** : Autorise les cookies pour sanity.io

### Modifications non visibles ?

1. **Publié ?** : Vérifie que "Publié" est coché
2. **Cache** : Ctrl+Shift+R pour vider le cache
3. **Revalidation** : Attends 1h ou redéploie

---

## 🎯 Checklist Rapide

```
[ ] Variables SANITY_* configurées (.env.local + Vercel)
[ ] Project ID correct (depuis sanity.io/manage)
[ ] npm run dev lancé
[ ] http://localhost:3000/admin accessible
[ ] Connexion Sanity fonctionne
[ ] Création d'article de test OK
[ ] Article publié visible sur le site
```

---

## 💡 Astuces

### Raccourcis Clavier

- **Ctrl+S** : Sauvegarder
- **Ctrl+Alt+P** : Publier
- **Ctrl+\\** : Basculer aperçu

### Vision Tool

Accessible dans l'onglet "Vision" :
- Teste tes requêtes GROQ
- Visualise les données en temps réel
- Debug les queries

### Workflow Recommandé

1. **Brouillon** : Crée l'article sans publier
2. **Aperçu** : Vérifie le rendu
3. **Révision** : Corrige si besoin
4. **Publication** : Coche "Publié" et publie
5. **Vérification** : Regarde sur le site

---

## 🚀 Déploiement

### Déployer avec /admin

Le studio Sanity se déploie automatiquement avec ton site :

```bash
git add -A
git commit -m "feat: Intégration Sanity Studio sur /admin"
git push origin main
```

Vercel déploiera automatiquement **le site + Sanity Studio** !

---

## 🆘 Support

### Problème de Version Node.js ?

Si `npm run sanity` ne marche pas à cause de Node.js < 20.19 :
- ✅ **Utilise /admin** : Fonctionne avec Node.js 20.3.1 !
- ✅ **En production** : Toujours accessible sur market-ia.fr/admin

### Autres Problèmes ?

1. **Logs** : Regarde la console (F12)
2. **Vercel** : Vérifie les logs de build
3. **Sanity** : Vérifie le dashboard sanity.io/manage

---

## 🎉 Résumé

✅ **Sanity Studio accessible sur /admin**  
✅ **Fonctionne en local ET en production**  
✅ **Plus besoin de commande séparée**  
✅ **Compatible avec Node.js 20.3.1**  
✅ **Intégré dans Next.js**  
✅ **Déployé automatiquement avec le site**  

**Tu peux gérer ton contenu directement depuis market-ia.fr/admin !** 🚀

---

**Dernière mise à jour** : 29 octobre 2025
