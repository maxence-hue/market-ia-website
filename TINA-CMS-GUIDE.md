# 🎨 Guide Tina CMS - Interface Admin Visuelle

## ✨ Qu'est-ce que Tina CMS ?

**Tina CMS** est une interface visuelle qui vous permet de modifier le contenu de votre site **directement dans votre navigateur**, sans toucher au code ni à GitHub !

---

## 🚀 Accès à l'interface admin

### En développement (local)

1. **Démarrez le serveur** :
   ```bash
   npm run dev
   ```

2. **Accédez à l'admin** :
   - Ouvrez votre navigateur
   - Allez sur : **http://localhost:3000/admin**

3. **Modifiez le contenu** :
   - Interface visuelle WYSIWYG (What You See Is What You Get)
   - Prévisualisation en temps réel
   - Sauvegarde automatique

### En production

**URL** : https://market-ia.vercel.app/admin

Vous pourrez modifier le contenu directement depuis cette URL !

---

## 📝 Ce que vous pouvez faire

### 1. ✍️ Créer et modifier des articles de blog

**Interface super simple** :
- ✅ Titre, slug, date
- ✅ Auteur, catégorie, tags
- ✅ Image de couverture (upload depuis votre ordinateur)
- ✅ Éditeur riche (gras, italique, liens, listes)
- ✅ Blocs de code avec coloration syntaxique
- ✅ Citations
- ✅ Images dans le contenu
- ✅ SEO (meta title, description)
- ✅ Statut brouillon/publié

**Comment faire** :
1. Allez sur `/admin`
2. Cliquez sur "Articles de Blog"
3. Cliquez sur "Create New"
4. Remplissez les champs
5. Cliquez sur "Save"
6. C'est tout ! 🎉

### 2. ⚙️ Modifier la configuration du site

**Ce que vous pouvez changer** :
- Nom du site
- Slogan
- Description
- Email et téléphone
- Réseaux sociaux
- Section Hero (titre, sous-titre, boutons)

**Comment faire** :
1. Allez sur `/admin`
2. Cliquez sur "Configuration du site"
3. Modifiez les champs
4. Cliquez sur "Save"

### 3. 🖼️ Gérer les images

**Upload super simple** :
- Glissez-déposez vos images
- Ou cliquez pour sélectionner
- Formats acceptés : JPG, PNG, WebP, SVG
- Les images sont automatiquement optimisées

**Utilisation** :
1. Dans un article, cliquez sur "Image de couverture"
2. Upload ou sélectionnez depuis la galerie
3. L'image est automatiquement ajoutée

---

## 🎯 Exemple : Créer un article

### Étape 1 : Accéder à l'admin
```
http://localhost:3000/admin
ou
https://market-ia.vercel.app/admin
```

### Étape 2 : Créer un nouvel article
- Cliquez sur "Articles de Blog" dans le menu
- Cliquez sur "Create New" (bouton vert en haut à droite)

### Étape 3 : Remplir le formulaire

```
Titre: Comment automatiser votre marketing
Slug: automatiser-marketing
Date: Sélectionnez la date
Auteur: Votre nom
Catégorie: Automatisation
```

### Étape 4 : Ajouter l'image de couverture
- Cliquez sur "Image de couverture"
- Upload votre image ou sélectionnez depuis la galerie

### Étape 5 : Écrire le contenu

**Éditeur riche disponible** :
- Paragraphes normaux
- Titres (H1, H2, H3)
- Listes (ordonnées ou non)
- Liens
- Images
- Blocs de code
- Citations

**Ajouter un bloc de code** :
1. Cliquez sur "+" dans l'éditeur
2. Sélectionnez "Bloc de code"
3. Choisissez le langage (JavaScript, Python, etc.)
4. Collez votre code

**Ajouter une citation** :
1. Cliquez sur "+" dans l'éditeur
2. Sélectionnez "Citation"
3. Entrez le texte et l'auteur

### Étape 6 : SEO
- Meta Title : "Comment automatiser votre marketing - Market-IA"
- Meta Description : "Découvrez comment automatiser..."

### Étape 7 : Publier
- Cochez "Publié"
- Cliquez sur "Save"

**C'est tout ! Votre article est en ligne ! 🚀**

---

## 🎨 Fonctionnalités avancées

### Prévisualisation en temps réel
- Modifiez à gauche
- Voyez les changements à droite en temps réel

### Brouillons
- Décochez "Publié" pour garder en brouillon
- Travaillez sur votre article sans le publier

### Media Library
- Toutes vos images dans un seul endroit
- Réutilisez les images entre articles
- Supprimez les images non utilisées

### Historique des versions
- Toutes les modifications sont sauvegardées
- Vous pouvez revenir en arrière si besoin

---

## 🔧 Configuration

### Variables d'environnement

Créez un fichier `.env.local` :

```env
# Tina Cloud (optionnel pour le moment)
NEXT_PUBLIC_TINA_CLIENT_ID=your_client_id
TINA_TOKEN=your_token

# Ces variables ne sont nécessaires que si vous voulez
# éditer depuis la production
```

**Pour l'instant, vous pouvez utiliser Tina en local sans ces variables !**

---

## 📱 Interface responsive

L'interface admin fonctionne sur :
- ✅ Desktop
- ✅ Tablette
- ✅ Mobile (moins pratique mais possible)

---

## 🆘 Problèmes courants

### ❌ L'admin ne s'affiche pas

**Solution** :
1. Vérifiez que le serveur tourne : `npm run dev`
2. Vérifiez l'URL : `http://localhost:3000/admin`
3. Videz le cache du navigateur

### ❌ Les modifications ne se sauvent pas

**Solution** :
1. Vérifiez que vous avez cliqué sur "Save"
2. Vérifiez la connexion internet
3. Regardez la console pour les erreurs

### ❌ L'image ne s'upload pas

**Solution** :
1. Vérifiez la taille (max 10 MB)
2. Vérifiez le format (JPG, PNG, WebP)
3. Réessayez

---

## 🎓 Tutoriel vidéo (À venir)

Des tutoriels vidéo seront ajoutés pour :
- ✅ Première connexion
- ✅ Créer un article
- ✅ Uploader des images
- ✅ Ajouter du code
- ✅ Publier un article

---

## ✨ Avantages de Tina CMS

### ✅ Super simple
- Interface visuelle
- Pas besoin de connaître GitHub
- Pas besoin de modifier du JSON

### ✅ Puissant
- Éditeur riche
- Prévisualisation en temps réel
- Gestion des médias intégrée
- Support du code et des citations

### ✅ Sécurisé
- Modifications sauvegardées
- Historique des versions
- Brouillons

### ✅ Rapide
- Modification en direct
- Déploiement automatique
- Pas de compilation manuelle

---

## 🔄 Workflow de publication

```
1. Allez sur /admin
2. Créez/Modifiez votre contenu
3. Cliquez sur "Save"
4. Le site se met à jour automatiquement !
```

**C'est tout ! Pas de Git, pas de JSON, pas de code ! 🎉**

---

## 📞 Support

Pour toute question :
- **Email** : maxence@market-ia.com
- **Documentation Tina** : https://tina.io/docs/

---

## 🎯 Prochaines étapes

1. **Testez en local** : `npm run dev` puis allez sur `/admin`
2. **Créez votre premier article**
3. **Uploadez des images**
4. **Publiez !**

---

**Tina CMS = La solution la plus simple pour gérer votre contenu ! 🚀**

**Dernière mise à jour** : 21 octobre 2025
