# ⚡ Configuration Tina Cloud - Guide Rapide

## 🎯 Pour avoir l'admin en ligne sur https://market-ia.vercel.app/admin

### 📋 Étapes (5 minutes)

#### 1. Créer compte Tina Cloud
👉 https://app.tina.io/register

#### 2. Créer projet
- Nom : `market-ia`
- Connecter GitHub : `maxence-hue/market-ia-website`
- Branch : `main`

#### 3. Copier les credentials
Dans Tina dashboard → Settings → Configuration :
```
Client ID: abc123...
Token: xyz789...
```

#### 4. Ajouter sur Vercel
👉 https://vercel.com/marketia/market-ia/settings/environment-variables

Ajouter 2 variables :
```
NEXT_PUBLIC_TINA_CLIENT_ID = 37ec3c3c-b62b-4f51-bc6a-76aa3a916870
TINA_TOKEN = f59434b5ab42d2c2650e14fec712f789f204e336
```
✅ Cocher : Production, Preview, Development

#### 5. Redéployer
Vercel → Deployments → Redeploy

#### 6. Tester
👉 https://market-ia.vercel.app/admin
- Se connecter avec GitHub
- ✅ Vous pouvez maintenant éditer le contenu en ligne !

---

## 📚 Documentation complète
[TINA-CLOUD-SETUP.md](./TINA-CLOUD-SETUP.md)

---

## ✨ Résultat

**Après configuration :**
- ✅ Allez sur https://market-ia.vercel.app/admin
- ✅ Connectez-vous avec GitHub
- ✅ Créez/Modifiez du contenu
- ✅ Les changements sont en ligne automatiquement !

**Plus besoin de :**
- ❌ Lancer npm run dev en local
- ❌ Utiliser le terminal
- ❌ Commiter manuellement

**Éditez depuis n'importe où avec juste votre navigateur ! 🌐**
