# 🎨 GUIDE - REMPLIR VOTRE CONTENU DANS SANITY

## ✅ SCHÉMAS DISPONIBLES

Vous pouvez maintenant modifier **TOUT votre site** depuis Sanity Studio !

### 📋 Liste des Schémas

1. **Page d'Accueil** - Tout le contenu de la homepage
2. **Service** - Vos services (Site Internet, Landing Pages, etc.)
3. **Membre de l'Équipe** - Votre équipe avec photos
4. **Article de Blog** - Articles de blog
5. **Galerie** - Images et projets
6. **Paramètres du Site** - Infos globales (contact, réseaux sociaux)

---

## 🏠 1. PAGE D'ACCUEIL

### Accéder

```
http://localhost:3000/admin
→ Page d'Accueil → Create
```

### Champs à Remplir

#### Section Hero (En-tête)
```
Titre Principal: "Transformez votre business avec l'IA"
Sous-titre: "Solutions d'automatisation et développement web sur mesure"
Texte du Bouton: "Démarrer un projet"
Lien du Bouton: "/contact"
Image de Fond: [Uploadez votre image hero]
```

#### Section À Propos
```
Titre: "Qui sommes-nous ?"
Contenu: "Market-IA est une agence spécialisée dans l'intelligence artificielle et le développement web. Nous aidons les entreprises à automatiser leurs processus et à créer des solutions digitales innovantes."
Image: [Photo de votre équipe ou bureau]
```

#### Statistiques
```
Stat 1 - Valeur: "50+"
Stat 1 - Label: "Projets réalisés"

Stat 2 - Valeur: "100%"
Stat 2 - Label: "Clients satisfaits"

Stat 3 - Valeur: "24/7"
Stat 3 - Label: "Support disponible"
```

#### Call to Action (Bas de page)
```
CTA - Titre: "Prêt à démarrer votre projet ?"
CTA - Sous-titre: "Contactez-nous pour un devis gratuit"
CTA - Texte Bouton: "Nous contacter"
CTA - Lien Bouton: "/contact"
```

**Publish** ✅

---

## 🎯 2. SERVICES

### Créer 4 Services

#### Service 1 : Site Internet

```
http://localhost:3000/admin
→ Service → Create
```

**Remplissez :**
```
Nom du Service: "Site Internet"
Slug: Cliquez "Generate" → "site-internet"
Icône: "Globe"
Prix: "à partir de 99 €/mois"
Description Courte: "Site vitrine professionnel, responsive et optimisé SEO"
Image Principale: [Uploadez une image de site web]

Description Complète:
"Créez votre présence en ligne avec un site internet professionnel. 
Nous développons des sites vitrines modernes, rapides et optimisés 
pour les moteurs de recherche."

Fonctionnalités:
- Design moderne et responsive
- Optimisation SEO
- Hébergement inclus
- Maintenance mensuelle
- Support technique

Texte du Bouton: "Démarrer mon site"
Lien du Bouton: "/contact"
Ordre: 1
Visible: ☑️
```

**Publish** ✅

#### Service 2 : Landing Pages

```
Nom du Service: "Landing Pages"
Slug: "landing-pages"
Icône: "Zap"
Prix: "à partir de 199 €"
Description Courte: "Pages de conversion optimisées pour vos campagnes marketing"
Image: [Image landing page]

Description:
"Boostez vos conversions avec des landing pages conçues pour convertir. 
Design attractif, formulaires optimisés et analytics intégrés."

Fonctionnalités:
- Design haute conversion
- A/B testing
- Analytics intégrés
- Formulaires personnalisés
- Livraison en 48h

Texte du Bouton: "Commander ma landing"
Lien du Bouton: "/contact"
Ordre: 2
```

**Publish** ✅

#### Service 3 : Formation IA

```
Nom du Service: "Formation IA"
Slug: "formation-ia"
Icône: "GraduationCap"
Prix: "3 jours - Finançable"
Description Courte: "Formation complète à l'intelligence artificielle pour votre équipe"
Image: [Image formation]

Description:
"Formez votre équipe aux outils d'IA les plus performants. 
Programme sur 3 jours avec cas pratiques et certification."

Fonctionnalités:
- Programme sur 3 jours
- Cas pratiques
- Support post-formation
- Certification
- Financement OPCO

Texte du Bouton: "Demander un devis"
Lien du Bouton: "/contact"
Ordre: 3
```

**Publish** ✅

#### Service 4 : SaaS & Automatisations

```
Nom du Service: "SaaS & Automatisations"
Slug: "saas-automatisations"
Icône: "Cpu"
Prix: "Sur devis"
Description Courte: "Solutions SaaS personnalisées et automatisations métier"
Image: [Image SaaS]

Description:
"Développement de solutions SaaS sur mesure et automatisations 
pour optimiser vos processus métier."

Fonctionnalités:
- Développement sur mesure
- Intégrations API
- Automatisations complexes
- Scalabilité garantie
- Maintenance incluse

Texte du Bouton: "Discuter de mon projet"
Lien du Bouton: "/contact"
Ordre: 4
```

**Publish** ✅

---

## 👥 3. ÉQUIPE

### Créer les Membres

```
http://localhost:3000/admin
→ Membre de l'Équipe → Create
```

#### Membre 1 : CEO

```
Nom: "Maxence Alehause"
Poste: "CEO & Fondateur"
Photo: [Photo professionnelle]
Biographie: "Passionné par l'IA et l'innovation, je dirige Market-IA avec pour mission d'aider les entreprises à se transformer digitalement."

Réseaux Sociaux:
- LinkedIn: "https://linkedin.com/in/votre-profil"
- Twitter: "https://twitter.com/votre-compte"
- Email: "maxence@market-ia.fr"

Ordre: 1
Visible: ☑️
```

**Publish** ✅

#### Membre 2 : CTO

```
Nom: "Prénom Nom"
Poste: "CTO - Directeur Technique"
Photo: [Photo]
Biographie: "Expert en développement web et IA, je supervise tous nos projets techniques."

Réseaux Sociaux:
- LinkedIn: "..."
- GitHub: "https://github.com/..."
- Email: "..."

Ordre: 2
```

**Publish** ✅

---

## 📝 4. ARTICLE DE BLOG

### Créer un Article

```
http://localhost:3000/admin
→ Article de Blog → Create
```

**Exemple :**
```
Titre: "Comment l'IA transforme le marketing digital en 2025"
Slug: Cliquez "Generate"
Image Principale: [Image IA/Marketing]
Résumé: "Découvrez les 5 façons dont l'intelligence artificielle révolutionne le marketing digital et comment votre entreprise peut en profiter."

Contenu:
[Écrivez votre article avec l'éditeur riche]
- Utilisez les titres H2/H3
- Ajoutez des images
- Formatez le texte (gras, italique)
- Ajoutez des listes

Date de Publication: [Aujourd'hui]
Auteur: "Maxence Alehause"
Catégories: ["IA", "Marketing"]
Publié: ☑️
```

**Publish** ✅

---

## 🖼️ 5. GALERIE

### Ajouter des Images

```
http://localhost:3000/admin
→ Galerie → Create
```

**Exemple :**
```
Titre: "Projet Site E-commerce"
Description: "Site e-commerce développé pour un client du secteur mode"
Images: [Uploadez 3-5 screenshots]
  - Pour chaque image :
    - Alt: "Screenshot site e-commerce"
    - Légende: "Page d'accueil responsive"
Ordre: 1
Visible: ☑️
Catégorie: "Projets"
```

**Publish** ✅

---

## ⚙️ 6. PARAMÈTRES DU SITE

### Configurer

```
http://localhost:3000/admin
→ Paramètres du Site → Create (ou Edit si existe)
```

**Remplissez :**
```
Nom du Site: "Market-IA"
Slogan: "Votre partenaire IA & Développement Web"
Description: "Agence spécialisée en intelligence artificielle et développement web"
Logo: [Uploadez votre logo]

Contact:
- Email: "contact@market-ia.fr"
- Téléphone: "+33 1 23 45 67 89"
- Adresse: "123 Rue de l'Innovation, 75001 Paris"

Réseaux Sociaux:
- Facebook: "https://facebook.com/market-ia"
- Twitter: "https://twitter.com/market_ia"
- LinkedIn: "https://linkedin.com/company/market-ia"
- Instagram: "https://instagram.com/market_ia"

Menu de Navigation:
1. Titre: "Accueil" | Lien: "/"
2. Titre: "Services" | Lien: "/services"
3. Titre: "Blog" | Lien: "/blog"
4. Titre: "Contact" | Lien: "/contact"
```

**Publish** ✅

---

## ✅ CHECKLIST COMPLÈTE

- [ ] Page d'Accueil créée
- [ ] 4 Services créés
- [ ] 2+ Membres d'équipe créés
- [ ] 1+ Article de blog créé
- [ ] 3+ Images galerie ajoutées
- [ ] Paramètres du site configurés
- [ ] Toutes les images uploadées
- [ ] Tout publié (Publish)

---

## 🔄 WORKFLOW

### Pour Modifier

1. Allez sur **http://localhost:3000/admin**
2. Cliquez sur l'élément à modifier
3. Changez ce que vous voulez
4. **Publish**
5. ✅ Changements visibles immédiatement !

### Pour Ajouter

1. Cliquez sur le type de contenu
2. **Create**
3. Remplissez les champs
4. **Publish**
5. ✅ Nouveau contenu en ligne !

---

## 🎯 RÉSULTAT

Une fois tout rempli, votre site aura :
- ✅ Page d'accueil personnalisée
- ✅ 4 services détaillés
- ✅ Équipe présentée
- ✅ Articles de blog
- ✅ Galerie de projets
- ✅ Infos de contact

**Tout modifiable depuis Sanity Studio ! 🚀**

---

## 📞 AIDE

Si un champ n'est pas clair :
- Passez la souris dessus → tooltip explicatif
- Ou référez-vous à ce guide

**Bon remplissage ! 🎨**
