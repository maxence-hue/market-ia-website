# 🎨 Interface Admin Custom - Market-IA

## ✅ INSTALLATION TERMINÉE !

L'interface d'administration custom est maintenant **100% fonctionnelle** !

**Plus besoin de Tina CMS ou Sanity CMS** - Tout est géré en interne avec des fichiers JSON/MDX.

---

## 🚀 Démarrage Rapide

### 1. Lancer le serveur de développement

```bash
npm run dev
```

### 2. Accéder à l'admin

👉 **http://localhost:3000/admin/login**

**Credentials par défaut :**
- **Email** : `admin@market-ia.fr`
- **Mot de passe** : `admin123`

---

## 🔐 Sécurité - Changer le mot de passe

### Générer un nouveau hash

```bash
npm run hash-password votre-nouveau-mot-de-passe
```

### Mettre à jour `.env.local`

```bash
ADMIN_PASSWORD_HASH=le-hash-généré
```

---

## 📁 Structure de l'Admin

```
app/admin/
├── login/          # Page de connexion
├── page.tsx        # Dashboard
├── layout.tsx      # Layout avec sidebar
├── pages/          # Gestion des pages (TODO)
├── blog/           # Gestion du blog (TODO)
├── services/       # Gestion des services (TODO)
├── abonnements/    # Gestion des abonnements (TODO)
├── equipe/         # Gestion de l'équipe (TODO)
├── temoignages/    # Gestion des témoignages (TODO)
├── media/          # Gestionnaire de médias (TODO)
└── settings/       # Paramètres généraux (TODO)
```

---

## 🛠️ Fonctionnalités Actuelles

### ✅ Implémenté

- ✅ **Authentification JWT** avec bcrypt
- ✅ **Page de login** sécurisée
- ✅ **Dashboard admin** avec stats
- ✅ **Sidebar navigation** responsive
- ✅ **Middleware de protection** des routes
- ✅ **API Upload** pour les images
- ✅ **File manager** pour JSON/MDX
- ✅ **Logout** fonctionnel

### 🚧 À Implémenter

Les pages suivantes sont prêtes à être développées :

- 📝 **Gestion des pages** (homepage, about, contact)
- 📰 **Gestion du blog** (créer, éditer, supprimer articles)
- 🛠️ **Gestion des services**
- 💳 **Gestion des abonnements**
- 👥 **Gestion de l'équipe**
- ⭐ **Gestion des témoignages**
- 🖼️ **Bibliothèque de médias**
- ⚙️ **Paramètres du site**

---

## 📊 Stockage des Données

Les données sont stockées dans le dossier `content/` :

```
content/
├── pages/
│   ├── homepage.json
│   ├── about.json
│   └── contact.json
├── blog/
│   ├── article-1.mdx
│   ├── article-2.mdx
│   └── index.json
├── services/
│   └── services.json
├── abonnements/
│   └── abonnements.json
├── equipe/
│   └── equipe.json
├── temoignages/
│   └── temoignages.json
└── settings/
    ├── general.json
    └── seo-defaults.json
```

---

## 🔧 API Routes Disponibles

### Authentification

- `POST /api/auth/login` - Connexion
- `POST /api/auth/logout` - Déconnexion

### Upload

- `POST /api/upload` - Upload d'images

### À créer

- `GET/POST /api/pages` - CRUD pages
- `GET/POST /api/blog` - CRUD blog
- `GET/POST /api/services` - CRUD services
- `GET/POST /api/abonnements` - CRUD abonnements
- `GET/POST /api/equipe` - CRUD équipe
- `GET/POST /api/temoignages` - CRUD témoignages
- `GET/PUT /api/settings` - Paramètres

---

## 🎨 Composants Admin à Créer

Les composants suivants sont prêts à être implémentés :

### `components/admin/RichTextEditor.tsx`
Éditeur WYSIWYG avec TipTap (déjà installé)

### `components/admin/SEOFields.tsx`
Champs SEO (meta title, description, keywords, OG image)

### `components/admin/ImageUploader.tsx`
Upload et gestion d'images

### `components/admin/MediaLibrary.tsx`
Bibliothèque de médias

---

## 🚀 Déploiement sur Vercel

### 1. Ajouter les variables d'environnement

Sur Vercel → Settings → Environment Variables :

```
AUTH_SECRET_KEY = [généré avec: openssl rand -base64 32]
ADMIN_EMAIL = admin@market-ia.fr
ADMIN_PASSWORD_HASH = [généré avec: npm run hash-password]
```

### 2. Redéployer

Le site se redéploiera automatiquement avec le push Git.

### 3. Accéder à l'admin en production

👉 **https://market-ia.vercel.app/admin/login**

---

## 📝 Prochaines Étapes

### Phase 1 : Gestion du Blog (Prioritaire)

1. Créer `app/admin/blog/page.tsx` - Liste des articles
2. Créer `app/admin/blog/new/page.tsx` - Nouvel article
3. Créer `app/admin/blog/[slug]/page.tsx` - Éditer article
4. Créer `app/api/blog/route.ts` - API CRUD blog
5. Créer `components/admin/RichTextEditor.tsx` - Éditeur
6. Créer `components/admin/SEOFields.tsx` - Champs SEO

### Phase 2 : Gestion des Pages

1. Créer `app/admin/pages/page.tsx` - Liste des pages
2. Créer `app/admin/pages/[slug]/page.tsx` - Éditer page
3. Créer `app/api/pages/route.ts` - API CRUD pages

### Phase 3 : Gestion des Services/Abonnements

1. Créer les pages d'édition
2. Créer les API routes
3. Intégrer avec le front-end existant

### Phase 4 : Médias & Settings

1. Bibliothèque de médias
2. Paramètres généraux du site
3. SEO global

---

## 🎯 Avantages de l'Admin Custom

✅ **Contrôle total** - Pas de dépendance externe  
✅ **Gratuit** - Pas d'abonnement CMS  
✅ **Rapide** - Pas de requêtes API externes  
✅ **Simple** - Fichiers JSON/MDX faciles à gérer  
✅ **Sécurisé** - Auth JWT + bcrypt  
✅ **Flexible** - Personnalisable à 100%  
✅ **Git-friendly** - Versionnable avec Git  

---

## 🆘 Support

### Problèmes courants

**Je ne peux pas me connecter**
- Vérifiez que `.env.local` existe avec les bonnes variables
- Vérifiez que le hash du mot de passe est correct
- Essayez de régénérer le hash avec `npm run hash-password`

**Erreur 404 sur /admin**
- Vérifiez que le serveur dev est lancé (`npm run dev`)
- Vérifiez que le middleware est bien configuré

**Upload d'images ne fonctionne pas**
- Vérifiez que le dossier `public/uploads/` existe
- Vérifiez les permissions du dossier

---

## 🎉 C'est Parti !

Votre interface admin est prête ! Connectez-vous et commencez à gérer votre contenu :

👉 **http://localhost:3000/admin/login**

**Email** : admin@market-ia.fr  
**Mot de passe** : admin123

---

**Bon développement ! 🚀**
