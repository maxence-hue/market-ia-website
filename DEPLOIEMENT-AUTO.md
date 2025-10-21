# 🚀 Déploiement Automatique sur Netlify

## ✅ Configuration terminée !

Le site est configuré pour se déployer automatiquement sur Netlify à chaque push sur la branche `main`.

---

## 📋 Prérequis

Pour activer le déploiement automatique, vous devez :

1. **Créer un repository GitHub**
2. **Configurer les secrets GitHub**
3. **Pousser le code**

---

## 🔧 Étape 1 : Créer un repository GitHub

```bash
# Depuis le dossier market-ia
gh repo create market-ia-website --public --source=. --remote=origin
```

Ou manuellement sur https://github.com/new

---

## 🔑 Étape 2 : Configurer les secrets GitHub

Allez dans **Settings > Secrets and variables > Actions** de votre repo GitHub et ajoutez :

### `NETLIFY_AUTH_TOKEN`
1. Allez sur https://app.netlify.com/user/applications#personal-access-tokens
2. Cliquez sur "New access token"
3. Copiez le token généré
4. Ajoutez-le comme secret GitHub

### `NETLIFY_SITE_ID`
1. Allez sur votre site Netlify : https://app.netlify.com/sites/market-ia
2. Dans **Site settings > General**, copiez le "Site ID"
3. Ajoutez-le comme secret GitHub

---

## 🚀 Étape 3 : Pousser le code

```bash
git remote add origin https://github.com/VOTRE-USERNAME/market-ia-website.git
git branch -M main
git push -u origin main
```

---

## ✨ C'est tout !

À partir de maintenant, chaque fois que vous faites un `git push`, le site sera automatiquement :
1. ✅ Buildé
2. ✅ Testé
3. ✅ Déployé sur Netlify

---

## 📊 Voir les déploiements

- **GitHub Actions** : https://github.com/VOTRE-USERNAME/market-ia-website/actions
- **Netlify** : https://app.netlify.com/sites/market-ia/deploys

---

## 🔄 Déploiement manuel (si besoin)

Si vous préférez déployer manuellement :

```bash
npm run build
netlify deploy --prod
```

---

## 🎯 URLs du site

- **Production** : https://market-ia.netlify.app
- **Preview** : Chaque PR génère une URL de preview automatique

---

## 💡 Conseils

- Faites des commits réguliers pour des déploiements fréquents
- Testez en local avec `npm run dev` avant de push
- Les déploiements prennent environ 2-3 minutes

---

## 🆘 En cas de problème

1. Vérifiez que les secrets GitHub sont bien configurés
2. Vérifiez les logs dans GitHub Actions
3. Vérifiez les logs Netlify
4. Le build doit passer en local : `npm run build`

---

**🎉 Bon déploiement !**
