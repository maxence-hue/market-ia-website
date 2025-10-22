# 🎨 Guide Complet - Site Vitrine Market-IA

## 🎯 Vue d'ensemble

Votre site Market-IA est maintenant un **site vitrine complet** avec un système d'administration puissant pour gérer tout le contenu sans toucher au code.

---

## ✅ Ce qui a été transformé

### ❌ Retiré
- Plans d'abonnement complexes
- Gestion de tarification détaillée
- Système de pricing par paliers

### ✅ Ajouté
- **Éditeur de pages** : Modifiez tous les textes de vos pages
- **Bibliothèque de médias améliorée** : Upload d'images ET de fichiers (PDF, DOC, etc.)
- **Services simplifiés** : Présentation claire sans pricing complexe
- **Upload d'images partout** : Dans chaque section de l'admin

---

## 📱 Fonctionnalités de l'Admin

### 1. 📄 Éditeur de Pages (`/admin/pages`)

**Page d'accueil éditable**

Modifiez toutes les sections :

#### Section Hero
- Titre principal
- Sous-titre
- Texte du bouton CTA
- Lien du bouton
- Image de fond

#### Section À propos
- Titre
- Contenu (description)
- Image avec alt text

#### Statistiques (3 blocs)
- Valeur (ex: "50+")
- Label (ex: "Projets réalisés")

#### Section CTA finale
- Titre
- Sous-titre
- Texte du bouton
- Lien

**Comment utiliser :**
1. Allez sur `/admin/pages`
2. Sélectionnez "Page d'accueil" dans la sidebar
3. Modifiez les champs
4. Uploadez des images si nécessaire
5. Cliquez "Sauvegarder"
6. Les changements sont visibles immédiatement sur le site

---

### 2. 📦 Gestion des Services (`/admin/services`)

**Structure simplifiée**

Chaque service contient :

#### Informations de base
- **Titre** : Nom du service
- **Slug** : URL (ex: `site-web` → `/services/site-web`)
- **Icône** : Nom d'icône Lucide (ex: Globe, Zap, GraduationCap)
- **Extrait** : Description courte (pour les cartes)

#### Contenu
- **Image principale** : Photo du service
- **Description détaillée** : Texte long (utilisez `\n\n` pour les paragraphes)
- **Fonctionnalités clés** : Liste de points forts

#### Call-to-Action
- **Texte du bouton** : Ex: "Demander un devis"
- **Lien** : Ex: `/contact`

#### Statut
- **Service actif** : Cochez pour afficher sur le site

**Comment utiliser :**
1. Allez sur `/admin/services`
2. Cliquez sur un service pour le développer
3. Modifiez tous les champs
4. Ajoutez des fonctionnalités (liste à puces)
5. Uploadez une belle image
6. Cliquez "Sauvegarder tout"

**Services par défaut :**
- Sites Web & SaaS
- Automatisations
- Formations IA

---

### 3. 📸 Bibliothèque de Médias (`/admin/media`)

**Nouveautés**

- ✅ **Upload multi-fichiers** : Plusieurs fichiers en même temps
- ✅ **Images ET documents** : PNG, JPG, PDF, DOC, TXT, etc.
- ✅ **Recherche** : Trouvez rapidement vos fichiers
- ✅ **Filtres** : Tous / Images / Documents
- ✅ **Stats en temps réel** : Nombre de fichiers par catégorie
- ✅ **Actions rapides** : Copier l'URL, télécharger

**Types de fichiers supportés :**
- **Images** : PNG, JPG, JPEG, WEBP, SVG, GIF
- **Documents** : PDF, DOC, DOCX, TXT

**Comment utiliser :**

#### Upload simple
1. Allez sur `/admin/media`
2. Cliquez sur la zone "Uploader"
3. Sélectionnez vos fichiers (plusieurs possibles)
4. Les fichiers apparaissent instantanément

#### Upload depuis un formulaire
- Utilisez le composant `ImageUploader` présent dans :
  - Éditeur de pages
  - Gestion des services
  - Gestion de l'équipe
  - Etc.

#### Copier une URL
1. Trouvez votre fichier dans la grille
2. Cliquez sur l'icône "Copier"
3. L'URL est dans votre presse-papiers
4. Collez-la où vous voulez

---

### 4. 📰 Blog (`/admin/blog`)

- Création d'articles
- Éditeur riche TipTap
- Catégories et tags
- Upload d'images
- Champs SEO complets

---

### 5. 👥 Équipe (`/admin/equipe`)

- Membres de l'équipe
- Photos avec upload
- Poste et description
- LinkedIn

---

### 6. 💬 Témoignages (`/admin/temoignages`)

- Témoignages clients
- Photos clients
- Notation 5 étoiles
- Résultats obtenus

---

### 7. ⚙️ Réglages (`/admin/settings`)

- Informations générales du site
- Contact (email, téléphone, adresse)
- Réseaux sociaux
- Hero section (page d'accueil)
- SEO par défaut

---

## 🌐 Pages Publiques

### Page d'accueil (`/`)

Sections :
1. **Hero** : Titre + CTA + Image de fond
2. **Services** : Grille de 3 services
3. **À propos** : Présentation de l'entreprise
4. **Stats** : 3 statistiques
5. **Équipe** : Membres de l'équipe
6. **Témoignages** : Avis clients
7. **Blog** : Derniers articles
8. **CTA Final** : Appel à l'action

### Pages Services (`/services/[slug]`)

Chaque service a sa page détaillée :
1. **Hero** : Titre + Icône + Description + CTA
2. **Image principale** : Grande photo
3. **Description complète** : Texte long
4. **Fonctionnalités** : Grille de points forts
5. **CTA final** : Appel à l'action vers contact

**Pas de pricing** : Le site est uniquement informatif

---

## 📝 Workflow typique

### Modifier la page d'accueil

```
1. Admin → Pages
2. Sélectionner "Page d'accueil"
3. Modifier le titre Hero : "Nouvelle accroche..."
4. Uploader une nouvelle image de fond
5. Modifier les stats
6. Sauvegarder
7. ✅ Changements visibles sur le site
```

### Ajouter un nouveau service

```
1. Admin → Services
2. Cliquer "Ajouter un service"
3. Remplir :
   - Titre: Formation Python
   - Slug: formation-python
   - Icône: Code
   - Extrait: Apprenez Python en 30 jours
4. Uploader une image
5. Écrire la description détaillée
6. Ajouter les fonctionnalités :
   - 10 modules vidéo
   - Exercices pratiques
   - Certificat de fin
   - Support illimité
7. Configurer le CTA :
   - Texte: "Découvrir la formation"
   - Lien: /contact
8. Cocher "Service actif"
9. Sauvegarder tout
10. ✅ Visible sur /services/formation-python
```

### Uploader une photo dans la bibliothèque

```
1. Admin → Médias
2. Cliquer zone "Uploader"
3. Sélectionner vos photos
4. ✅ Photos disponibles
5. Copier l'URL
6. Utiliser dans un article, service, etc.
```

### Modifier un texte de la page d'accueil

```
1. Admin → Pages
2. Page d'accueil → Section À propos
3. Modifier le titre: "Notre Mission"
4. Modifier le contenu
5. Changer l'image si nécessaire
6. Sauvegarder
7. ✅ Page mise à jour
```

---

## 💡 Conseils et bonnes pratiques

### Images

**Tailles recommandées :**
- **Hero backgrounds** : 1920x1080px minimum
- **Images de services** : 1200x675px (ratio 16:9)
- **Photos d'équipe** : 400x400px (carré)
- **Photos clients** : 200x200px (carré)

**Optimisation :**
- Utilisez WEBP quand possible (meilleur compression)
- Limitez à 500KB par image max
- Ajoutez TOUJOURS un alt text descriptif

### Textes

**Longueurs recommandées :**
- **Titre Hero** : 8-12 mots max
- **Sous-titre Hero** : 15-20 mots
- **Extrait service** : 1-2 phrases (20-30 mots)
- **Description détaillée** : 3-5 paragraphes

**SEO :**
- Incluez vos mots-clés naturellement
- Utilisez des titres clairs et descriptifs
- Écrivez pour les humains d'abord

### Services

**Fonctionnalités :**
- 4-6 points forts par service
- Phrases courtes et impactantes
- Commencez par un verbe d'action
- Ex: "Création rapide en 48h" ✅
- Ex: "Nous créons rapidement" ❌

**Description :**
- Premier paragraphe : Le problème
- Deuxième : Votre solution
- Troisième : Les bénéfices
- Utilisez `\n\n` pour séparer les paragraphes

---

## 🔧 Structure des fichiers

### Contenu
```
content/
├── pages/
│   └── home.json           # Page d'accueil
├── services/
│   └── services.json       # Tous les services
├── blog/
│   └── [slug].mdx          # Articles
├── equipe/
│   └── equipe.json         # Membres
├── temoignages/
│   └── temoignages.json    # Témoignages
└── settings/
    └── general.json        # Paramètres globaux
```

### Médias
```
public/uploads/
├── blog/                   # Images d'articles
├── services/               # Images de services
├── team/                   # Photos d'équipe
├── testimonials/           # Photos clients
├── pages/                  # Images de pages
└── general/                # Autres fichiers
```

---

## 🎨 Personnalisation avancée

### Changer les couleurs

Les couleurs sont définies dans `tailwind.config.ts` :

```typescript
colors: {
  primary: '#00A896',      // Vert principal
  'primary-light': '#05B6A3',
  secondary: '#028090',
  dark: '#011627',
  'dark-surface': '#1A2332',
  light: '#FDFFFC'
}
```

### Ajouter une nouvelle icône

1. Trouvez l'icône sur [lucide.dev](https://lucide.dev/icons)
2. Notez le nom exact (ex: `Rocket`)
3. Utilisez-le dans le champ "Icône" de votre service
4. L'icône s'affiche automatiquement

---

## 🚀 Déploiement

### Déploiement automatique

✅ **Déjà configuré !**

Chaque fois que vous faites un commit sur `main` :
1. Vercel détecte le changement
2. Build automatique
3. Déploiement en production
4. Site mis à jour en ~2 minutes

### Variables d'environnement (Vercel)

Assurez-vous que ces variables sont configurées :

```
AUTH_SECRET_KEY=your-secret-key
ADMIN_EMAIL=admin@market-ia.fr
ADMIN_PASSWORD_HASH=your-hashed-password
```

---

## 🆘 FAQ

### Comment ajouter une nouvelle page ?

Pour l'instant, les pages principales (accueil, contact, services) sont gérables.
Pour ajouter une page entièrement nouvelle, il faut modifier le code.

### Puis-je uploader des vidéos ?

Pas directement. Pour les vidéos, hébergez-les sur YouTube/Vimeo
et ajoutez le lien dans votre contenu.

### Les changements sont-ils instantanés ?

- **En production** : 2-3 minutes (temps du déploiement Vercel)
- **En local** : Instantanés après sauvegarde

### Comment restaurer une version précédente ?

Utilisez Git :
```bash
git log                    # Voir l'historique
git checkout [commit-id]   # Revenir à une version
```

### Puis-je avoir plusieurs admins ?

Pour l'instant, un seul compte admin.
Pour plusieurs comptes, il faut étendre le système d'auth.

---

## 📊 Statistiques et Analytics

### Où voir mes statistiques ?

Le site n'a pas encore d'analytics intégré.

**Recommandé :**
- Google Analytics 4
- Plausible Analytics
- Umami

### Comment ajouter Google Analytics ?

1. Créez un compte GA4
2. Obtenez votre ID de mesure (G-XXXXXXXXXX)
3. Ajoutez-le dans `app/layout.tsx`

---

## ✅ Checklist avant mise en ligne

### Contenu
- [ ] Tous les textes sont relus
- [ ] Toutes les images ont un alt text
- [ ] Les liens fonctionnent
- [ ] Les coordonnées sont à jour

### SEO
- [ ] Meta titles configurés (Réglages)
- [ ] Meta descriptions rédigées
- [ ] Images optimisées (<500KB)
- [ ] Sitemap généré

### Technique
- [ ] Variables d'environnement configurées (Vercel)
- [ ] Mot de passe admin changé
- [ ] Build passe sans erreur
- [ ] Site testé sur mobile

### Légal
- [ ] Mentions légales
- [ ] Politique de confidentialité
- [ ] CGV (si applicable)
- [ ] RGPD conforme

---

## 🎉 Vous êtes prêt !

Votre site vitrine est maintenant **100% fonctionnel** et **facilement éditable**.

**Prochaines étapes :**
1. Personnalisez vos services
2. Uploadez de belles photos
3. Rédigez vos contenus
4. Testez sur tous les appareils
5. Lancez votre site ! 🚀

**Besoin d'aide ?**
- Consultez ce guide
- Testez dans l'admin
- Chaque changement est réversible

---

## 📞 Support

Pour toute question ou assistance, contactez votre développeur ou référez-vous à la documentation technique dans le repo.

**Fichiers utiles :**
- `ADMIN-README.md` : Guide technique admin
- `README.md` : Documentation développeur
- Ce fichier : Guide utilisateur
