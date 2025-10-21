# 🔐 Configuration Netlify CMS - Guide Complet

## ✅ Déploiement réussi !

Votre site est en ligne : **https://market-ia.netlify.app**

Pour utiliser le CMS et gérer votre contenu, suivez ces étapes :

---

## 📋 Étapes d'activation du CMS

### 1. Activer Netlify Identity (5 min)

1. **Ouvrez votre dashboard Netlify** :
   👉 https://app.netlify.com/projects/market-ia

2. **Allez dans Site settings** (en haut à droite)

3. **Dans le menu latéral** : Cliquez sur **Identity**

4. **Cliquez sur "Enable Identity"**

5. **Configuration des inscriptions** :
   - Allez dans **Registration preferences**
   - Sélectionnez **Invite only** (recommandé pour la sécurité)
   - Enregistrez

6. **Confirmation email** :
   - Allez dans **Email templates**
   - Personnalisez si nécessaire (optionnel)

---

### 2. Activer Git Gateway (2 min)

1. **Toujours dans Identity**, descendez jusqu'à **Services**

2. **Cliquez sur "Enable Git Gateway"**

3. Git Gateway est maintenant activé ✅

---

### 3. Inviter un utilisateur admin (3 min)

1. **Dans le menu Identity**, cliquez sur **Invite users**

2. **Entrez votre email** : `maxence@adsolar.fr`

3. **Cliquez sur "Send"**

4. **Vérifiez votre boîte mail** :
   - Vous recevrez un email de Netlify
   - Cliquez sur le lien d'invitation
   - Créez votre mot de passe

5. **Validation** : Vous êtes maintenant admin du CMS ✅

---

### 4. Accéder au CMS (1 min)

1. **Allez sur** : https://market-ia.netlify.app/admin

2. **Connectez-vous** avec votre email et mot de passe

3. **Vous êtes dans le CMS !** 🎉

---

## 🎨 Utilisation du CMS

### Collections disponibles :

#### 📦 **Abonnements**
- Gérez les 4 tiers (Essentiel, Business, E-commerce, Growth+)
- Modifiez les prix, features, descriptions
- Ajoutez/supprimez des fonctionnalités

#### ➕ **Add-ons**
- 12+ add-ons prédéfinis
- Ajoutez de nouveaux services complémentaires
- Gérez les tarifs additionnels

#### 🛠️ **Services**
- Sites Web
- Automatisations & Agents IA
- SaaS Personnalisé
- Formations
- Marque Blanche

#### ✍️ **Blog**
- Créez de nouveaux articles
- Catégories : IA, Marketing, Automatisation, Business
- Éditeur Markdown avec prévisualisation
- Images d'en-tête personnalisables

#### 👥 **Équipe**
- Ajoutez des membres de l'équipe
- Photos, rôles, descriptions
- Liens sociaux

#### ⚙️ **Settings**
- **Général** : Email, téléphone, adresse, réseaux sociaux
- **Homepage** : Hero, sections personnalisables

---

## 📝 Exemple : Créer un article de blog

1. Dans le CMS, cliquez sur **Blog** dans le menu
2. Cliquez sur **New Blog**
3. Remplissez :
   - **Titre** : "Mon nouvel article"
   - **Slug** : `mon-nouvel-article` (utilisé dans l'URL)
   - **Description** : Résumé court
   - **Image de couverture** : Upload ou URL
   - **Catégorie** : Choisissez parmi IA, Marketing, etc.
   - **Tags** : Ajoutez des mots-clés
   - **Contenu** : Écrivez en Markdown
4. **Prévisualisez** (optionnel)
5. **Publish** → L'article apparaît instantanément sur le site !

---

## 🔧 Modifier les prix des abonnements

1. Cliquez sur **Abonnements**
2. Sélectionnez l'abonnement à modifier (ex: Business)
3. Modifiez :
   - `monthlyPrice` : 179
   - `setupFee` : 390
   - Ajoutez/supprimez des `features`
4. **Save** → Les changements sont en direct !

---

## 🎯 Prochaines actions recommandées

### 1. Personnalisez votre contenu (30-60 min)
- [ ] Mettez à jour les infos de contact dans Settings → Général
- [ ] Ajoutez vos vraies images d'équipe
- [ ] Personnalisez les prix si nécessaire
- [ ] Ajustez les descriptions des abonnements
- [ ] Modifiez le contenu de la homepage

### 2. Configurez le webhook Zapier (10 min)
- [ ] Créez un Zap sur Zapier.com
- [ ] Trigger : **Webhooks - Catch Hook**
- [ ] Copiez l'URL du webhook
- [ ] Allez dans **Site settings → Environment variables**
- [ ] Modifiez `ZAPIER_WEBHOOK_URL` avec votre vraie URL
- [ ] **Important** : Re-déployez le site après modification

### 3. Ajoutez du contenu (variable)
- [ ] Écrivez 2-3 nouveaux articles de blog
- [ ] Ajoutez des témoignages clients
- [ ] Créez des études de cas

### 4. Testez les formulaires (5 min)
- [ ] Allez sur https://market-ia.netlify.app/contact
- [ ] Remplissez et envoyez le formulaire
- [ ] Vérifiez que le webhook Zapier reçoit les données
- [ ] Testez aussi le formulaire devis sur /services/automatisations

---

## 🔒 Sécurité

### Bonnes pratiques :
- ✅ **Invite only** activé - Seuls les utilisateurs invités peuvent accéder au CMS
- ✅ **HTTPS** activé automatiquement
- ✅ **Variables sensibles** (webhooks) sont sécurisées
- ✅ **Git Gateway** protège votre contenu

### Inviter d'autres administrateurs :
1. Site settings → Identity → Invite users
2. Entrez leur email
3. Ils recevront un lien d'invitation

---

## 🐛 Dépannage

### "Erreur de connexion au CMS"
- Vérifiez que Identity est activé
- Vérifiez que Git Gateway est activé
- Effacez le cache du navigateur
- Reconnectez-vous

### "Mes changements n'apparaissent pas"
- Attendez 30-60 secondes (temps de rebuild)
- Videz le cache du navigateur (Cmd+Shift+R sur Mac)
- Vérifiez dans Netlify → Deploys que le build est terminé

### "Je ne reçois pas l'email d'invitation"
- Vérifiez vos spams
- Allez dans Identity → Users et re-envoyez l'invitation
- Vérifiez que l'email est correct

---

## 📚 Ressources

- **Documentation Netlify CMS** : https://www.netlifycms.org/docs/
- **Documentation Netlify Identity** : https://docs.netlify.com/visitor-access/identity/
- **Support Netlify** : https://www.netlify.com/support/
- **Votre dashboard** : https://app.netlify.com/projects/market-ia

---

## 🎉 Félicitations !

Votre site Market-IA est :
- ✅ **Déployé** sur https://market-ia.netlify.app
- ✅ **Sécurisé** avec HTTPS
- ✅ **Optimisé** pour les performances
- ✅ **Prêt** à gérer du contenu via CMS

**Il ne reste plus qu'à activer Identity (5 min) pour utiliser le CMS !**

---

**Bon lancement ! 🚀**
