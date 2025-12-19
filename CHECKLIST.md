# ✅ Checklist de Vérification - Portfolio

## 🚀 Test Rapide - 5 Minutes

### 1. Chargement Initial
- [ ] La page se charge sans erreur console
- [ ] Le spinner de chargement disparaît après 1 seconde
- [ ] Le popup de bienvenue apparaît (première visite)
- [ ] Les animations canvas fonctionnent en arrière-plan

### 2. Navigation
- [ ] Le menu navbar apparaît après scroll
- [ ] Les liens de navigation fonctionnent (smooth scroll)
- [ ] Le bouton "Retour en haut" fonctionne
- [ ] La barre de progression de scroll est visible

### 3. Dark Mode
- [ ] Bouton dark mode est visible (bas droite)
- [ ] Le clic bascule entre mode clair/sombre
- [ ] L'icône change (🌙 ↔️ ☀️)
- [ ] La préférence est sauvegardée

### 4. Section Expériences
- [ ] Cliquer sur l'onglet "Expérience"
- [ ] La scrollbar personnalisée apparaît
- [ ] Le scroll est fluide
- [ ] Les cartes ont l'effet hover (translation + ombre)
- [ ] L'indicateur de fade en bas fonctionne

### 5. Formulaire de Contact
- [ ] Les champs sont tous présents
- [ ] La validation en temps réel fonctionne
- [ ] Le bouton s'affiche correctement
- [ ] **Test d'envoi :**
  - Remplir tous les champs
  - Cliquer sur "Envoyer Message"
  - Message "Envoi en cours..." apparaît
  - Attendre 2-3 secondes
  - Message de succès vert apparaît
  - Formulaire se réinitialise

### 6. Console Navigateur
- [ ] Ouvrir DevTools (F12)
- [ ] Onglet "Console"
- [ ] ✅ Aucune erreur rouge
- [ ] ⚠️ Les warnings jaunes sont OK (unload policy)

---

## 🔧 Si Quelque Chose Ne Fonctionne Pas

### Problème : Formulaire ne s'envoie pas
**Solutions :**
1. Vérifier la connexion Internet
2. Vérifier dans la console : `typeof emailjs`
   - Doit retourner "object"
3. Vérifier les clés EmailJS dans le dashboard
4. Effacer le cache du navigateur

### Problème : Dark mode ne se sauvegarde pas
**Solutions :**
1. Vérifier localStorage activé dans le navigateur
2. Ouvrir console et taper : `localStorage.getItem('darkMode')`
3. Doit retourner "enabled" ou "disabled"
4. Effacer cookies/cache si nécessaire

### Problème : Animations ne fonctionnent pas
**Solutions :**
1. Vérifier que wow.js est chargé
2. Vérifier que animate.css est chargé
3. Désactiver les bloqueurs de contenu
4. Tester dans un autre navigateur

### Problème : Scroll expériences ne fonctionne pas
**Solutions :**
1. Vérifier que custom.css est chargé
2. Inspecter l'élément #tab-1
3. Vérifier CSS : `max-height: 600px`
4. Forcer le rafraîchissement (Ctrl+F5)

---

## 📱 Test Responsive

### Mobile (< 768px)
- [ ] Menu burger fonctionne
- [ ] Scroll expériences adapté (max-height: 500px)
- [ ] Boutons et liens facilement cliquables
- [ ] Images responsive
- [ ] Formulaire de contact utilisable

### Tablette (768px - 992px)
- [ ] Layout en 2 colonnes
- [ ] Navigation adaptée
- [ ] Cartes de projets bien alignées

### Desktop (> 992px)
- [ ] Navbar complète visible
- [ ] Hero section full height
- [ ] Toutes les animations actives

---

## 🎯 Test des Performances

### Ouvrir DevTools > Lighthouse
**Scores cibles :**
- Performance : > 85
- Accessibility : > 90
- Best Practices : > 90
- SEO : > 90

### Vérifications réseau
- [ ] Pas de fichiers 404
- [ ] Toutes les polices chargées
- [ ] Toutes les images chargées
- [ ] Scripts CDN accessibles

---

## 🌐 Test Multi-Navigateurs

### Chrome/Edge ✅
- [ ] Toutes fonctionnalités OK
- [ ] Dark mode OK
- [ ] Formulaire OK

### Firefox ✅
- [ ] Scrollbar personnalisée OK
- [ ] Animations CSS OK
- [ ] EmailJS OK

### Safari ⚠️
- [ ] Vérifier propriétés -webkit-
- [ ] Tester backdrop-filter
- [ ] Vérifier smooth scroll

---

## 📊 Monitorer les Erreurs

### Console DevTools
```javascript
// Copier dans console pour tester EmailJS
emailjs.send(
  "service_v02c1ny",
  "contact_admin",
  {
    from_name: "Test",
    reply_to: "test@test.com",
    subject: "Test",
    message: "Test message"
  }
).then(
  response => console.log('✅ SUCCESS!', response),
  error => console.log('❌ FAILED...', error)
);
```

### Vérifier localStorage
```javascript
// Dans la console
console.log('Dark Mode:', localStorage.getItem('darkMode'));
console.log('Popup Shown:', localStorage.getItem('welcomePopupShown'));
```

---

## 🎨 Personnalisation Rapide

### Changer les couleurs principales
**Fichier :** `css/style.css`
```css
:root {
    --primary: #6244C5;    /* Violet */
    --secondary: #FFC448;  /* Jaune */
    --light: #FAFAFB;
    --dark: #12141D;
}
```

### Modifier la hauteur du scroll expériences
**Fichier :** `css/custom.css`
```css
#tab-1.tab-pane {
    max-height: 600px;  /* Modifier ici */
}
```

### Changer le temps des animations
**Fichier :** `js/main.js`
```javascript
setTimeout(() => {
  card.style.transition = "opacity 0.6s ease";  /* Modifier ici */
}, index * 100);
```

---

## ✨ Fonctionnalités Supplémentaires

### Ajouter Google Analytics
1. Créer compte GA4
2. Copier le tracking ID
3. Ajouter dans `<head>` de index.html

### Ajouter un Blog
1. Créer section blog dans HTML
2. Utiliser un CMS headless (Strapi, Contentful)
3. Fetch API pour afficher articles

### Ajouter des projets
1. Dupliquer bloc `.col-lg-6`
2. Modifier images et textes
3. Ajouter carousel si nécessaire

---

## 🔐 Sécurité Post-Déploiement

- [ ] HTTPS activé
- [ ] Domaine EmailJS configuré
- [ ] Rate limiting sur formulaire
- [ ] Headers de sécurité (CSP)
- [ ] Backup régulier

---

## 📞 Contact Support

Pour toute question :
- Email : antema103@gmail.com
- LinkedIn : [Antema Nirina Andriamihaja](https://www.linkedin.com/in/antema-andriamihaja4483131a3/)
- GitHub : [antema102](https://github.com/antema102)

---

**Version :** 2.0.0  
**Dernière vérification :** 19 décembre 2025  
**Status :** ✅ Production Ready
