# 🔧 FIX CORS - Sanity Studio sur Vercel

## ❌ Problème

```
Origin https://market-ia.vercel.app is not allowed by Access-Control-Allow-Origin
```

Sanity bloque les requêtes depuis votre domaine Vercel car il n'est pas autorisé.

---

## ✅ Solution : Autoriser le domaine dans Sanity

### Étape 1 : Aller dans les paramètres Sanity

1. Allez sur **https://manage.sanity.io**
2. Sélectionnez votre projet **"Market-IA"** (ID: `fhtlzqpe`)
3. Cliquez sur **API** dans le menu de gauche

### Étape 2 : Ajouter les CORS Origins

1. Scrollez jusqu'à **"CORS Origins"**
2. Cliquez sur **"Add CORS origin"**

#### Origin 1 : Production Vercel
```
Origin: https://market-ia.vercel.app
☑️ Allow credentials
```

#### Origin 2 : Localhost (pour développement)
```
Origin: http://localhost:3000
☑️ Allow credentials
```

#### Origin 3 : Vercel Preview (optionnel)
```
Origin: https://*.vercel.app
☑️ Allow credentials
```

3. Cliquez sur **"Save"** pour chaque origin

---

## ✅ Vérification

Après avoir ajouté les origins :

1. Attendez **30 secondes** (propagation)
2. Rechargez **https://market-ia.vercel.app/admin**
3. ✅ **Sanity Studio devrait fonctionner !**

---

## 🎯 Résultat

Vous pourrez maintenant :
- ✅ Accéder à Sanity Studio sur `/admin`
- ✅ Créer des articles
- ✅ Gérer la galerie
- ✅ Modifier les paramètres

---

## 📝 Note

Les CORS origins autorisent votre domaine à communiquer avec l'API Sanity.
C'est une mesure de sécurité normale.
