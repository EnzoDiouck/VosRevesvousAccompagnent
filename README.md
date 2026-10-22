# Vos rêves vous accompagnent

Site vitrine d'Élodie Doublet, tatoueuse à Coulommiers et en Bretagne.

Site statique (HTML, CSS, JavaScript), sans framework ni compilation. Il est hébergé sur Netlify, et les textes et photos se modifient depuis l'espace d'administration `/admin` ([Decap CMS](https://decapcms.org)).

## Structure

```
index.html              page d'accueil
mentions-legales.html   mentions légales et politique de confidentialité
css/style.css           design (couleurs et polices en haut du fichier)
js/main.js              affiche le contenu de content/infos.json
content/infos.json      tous les textes, les étapes, les photos, Instagram, lien Tally
images/                 logo, portrait, tache d'encre
images/uploads/         photos ajoutées depuis l'admin
admin/                  espace d'administration (Decap CMS)
netlify.toml            configuration Netlify (pas de build)
```

## Mise en ligne sur Netlify

1. Pousse le dépôt sur GitHub (branche `main`).
2. Sur Netlify, relie le site au dépôt. `netlify.toml` indique déjà qu'il n'y a pas de build et que le dossier publié est la racine (`.`).
3. Pour activer l'admin, va dans **Site configuration → Identity** et clique sur **Enable Identity**. Ensuite :
   - **Registration** : choisis **Invite only** ;
   - **Services → Git Gateway** : clique sur **Enable Git Gateway** ;
   - **Invite users** : invite l'adresse e-mail d'Élodie. Elle clique sur le lien reçu, choisit un mot de passe et arrive dans `/admin`.

## Modifier le contenu

- **Avec l'admin** : va sur `https://<ton-site>.netlify.app/admin`, ouvre **Textes & photos**, fais tes modifications puis clique sur **Publier**. Le site se met à jour en environ 30 secondes.
- **À la main** : modifie `content/infos.json`, ajoute tes images dans `images/uploads/`, puis fais un commit et un push.

## Tester en local

Le contenu est chargé avec `fetch`, donc il faut un petit serveur (un double-clic sur `index.html` ne suffit pas) :

```
python -m http.server 8000
```

Puis ouvre http://localhost:8000.

## À vérifier avant la publication définitive

- [ ] Mentions légales : adresse de domiciliation (partie 1) et adresse de Netlify (partie 2).
