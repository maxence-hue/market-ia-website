# 🔗 Guide des Liens Admin – Market‑IA

## 🌐 Accès en Production

- **Sanity Studio (modifier les articles, médias, contenus)**
  https://market-ia.fr/admin

- **Gestionnaire d’Images (Vercel Blob)**
  https://market-ia.vercel.app/upload-images

> Note: Si votre domaine personnalisé est configuré, remplacez `market-ia.vercel.app` par votre domaine.

---

## 💻 Accès en Local (développement)

1) Démarrer le site
```bash
npm run dev
```

2) Ouvrir les outils
- **Sanity Studio**: http://localhost:3000/admin
- **Upload d’images**: http://localhost:3000/upload-images

---

## ✍️ Tâches courantes

- **Créer / modifier un article de blog**
  1. Ouvrir `Sanity Studio` → `/admin`
  2. Choisir « Article de Blog » → Create / Éditer
  3. Remplir Titre, Slug, Image, Contenu (texte, images, code, composants)
  4. Cocher « Publié » → Publish

- **Uploader des images et copier l’URL**
  1. Ouvrir `/upload-images`
  2. Glisser‑déposer vos images (JPG/PNG/WebP/SVG/GIF)
  3. Copier l’URL générée (bouton copier)
  4. Utiliser l’URL dans Sanity ou dans le code

---

## 🧩 Contenus et fonctionnalités disponibles (Sanity)

- Gestion complète des **articles de blog**
- **Blocs de code** (16+ langages) via « Code Input »
- **Composants personnalisés** (CTA, FAQ) insérables dans le contenu
- **Vision Tool** pour tester des requêtes GROQ

---

## ✅ Prérequis & Variables d’environnement

- Sanity Studio:
  - `NEXT_PUBLIC_SANITY_PROJECT_ID`
  - `NEXT_PUBLIC_SANITY_DATASET` (production)
  - `NEXT_PUBLIC_SANITY_API_VERSION` (2024-01-01)

- Upload d’images (Vercel Blob):
  - `BLOB_READ_WRITE_TOKEN` (sur Vercel + `.env.local` si local)

> Après ajout/modif des variables, redéployez (prod) ou redémarrez `npm run dev` (local).

---

## 🆘 Dépannage rapide

- **/admin blanc ou erreur**: vérifier variables Sanity, Project ID, redémarrer `npm run dev`.
- **Upload KO en production**: vérifier `BLOB_READ_WRITE_TOKEN` sur Vercel puis redeploy.
- **Modif non visible**: vérifier que l’article est « Publié », vider cache navigateur, attendre revalidation.

---

## 📚 Références utiles (dans le repo)

- `ACCES-SANITY-ADMIN.md` – Détails et dépannage /admin
- `ACCES-RAPIDE.md` – URLs rapides + upload images

---

Dernière mise à jour: 1 nov. 2025
