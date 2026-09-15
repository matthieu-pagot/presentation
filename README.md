# Site de présentation — Matthieu Pagot

Portfolio personnel publié avec GitHub Pages :
https://matthieu-pagot.github.io/presentation/

Étudiant en 1re année de BTS CIEL à l'École Modèle d'Électronique (Marseille),
en recherche d'alternance en administration réseau et support informatique.

## Contenu du dépôt

| Fichier | Rôle |
|---|---|
| `index.html` | Accueil et présentation |
| `cv.html` | CV détaillé |
| `projets.html` | Projets techniques détaillés |
| `lettre.html` | Lettre de motivation |
| `contact.html` | Formulaire et coordonnées |
| `404.html` | Page affichée sur une adresse inconnue |
| `style.css` | Feuille de style commune à toutes les pages |
| `script.js` | Menu mobile et gestion du formulaire |
| `favicon.svg` | Icône affichée dans l'onglet du navigateur |

Les images vont dans `assets/images/` : `photo-profil.jpg` et `signature.png`
sont attendues par le site.

## Technique

HTML et CSS écrits à la main, sans framework. Polices Space Grotesk et
IBM Plex Sans chargées depuis Google Fonts. Le site s'adapte aux écrans mobiles,
respecte `prefers-reduced-motion`, et les pages CV et lettre sont formatées pour
l'impression : `Ctrl+P` produit un PDF propre.

## À finir

Les emplacements encadrés en jaune sur le site marquent ce qu'il reste à faire.
Une fois l'information ajoutée, supprimer la `<div class="todo">` correspondante.

- [ ] Générer `cv.pdf` à jour (le bouton de téléchargement pointe dessus)
- [ ] Ajouter une photo de LycéeBoard dans `assets/images/lyceeboard.jpg`
- [ ] Ajouter le schéma réseau du projet RFID dans `assets/images/schema-reseau.png`
- [ ] Renseigner le rythme d'alternance et la date de début (`index.html`)
- [ ] Renseigner le niveau d'anglais (`cv.html`)
- [ ] Créer un profil LinkedIn et décommenter les liens
- [ ] Relier le formulaire à Formspree (voir commentaire dans `contact.html`)
- [ ] Supprimer les anciens fichiers du dépôt : `test.html`, `login.html`, `register.html`
