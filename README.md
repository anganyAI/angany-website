# Angany AI · Le labo de Sylvain Boily

Labo personnel bilingue : projets, expérimentations, retours d’expérience, parcours et loisirs.
Direction visuelle « carnet de bord », français à la racine et anglais dans `/en/`.

## Développement

Node.js 22 ou plus récent. Aucune dépendance et aucune installation npm nécessaire.

```sh
npm run dev
```

Ouvrir http://localhost:4173. Le serveur reconstruit les pages et recharge le navigateur
après modification de `src/` ou `assets/`. Définir `PORT=4174` pour changer de port.

```sh
npm run build    # génère dist/
npm run check    # traductions, syntaxe, liens locaux, ancres et ressources
npm run preview  # sert le résultat statique, sans reconstruction
```

## Organisation

- `src/content/fr.js`, `en.js` : textes, navigation et métadonnées dans les deux langues.
- `src/content/shared.js` : coordonnées et références communes des projets.
- `src/template.js` : HTML des sections et des pages, sans framework.
- `assets/styles.css` : styles, typographie, mise en page et responsive.
- `assets/main.js` : menu mobile, filtres, copie du courriel et animations progressives.
- `assets/images/`, `fonts/`, `icons.svg` : ressources hébergées localement.
- `scripts/` : génération, serveur local et vérification, en Node natif.

Le navigateur reçoit du HTML complet : les projets, liens et traductions ne dépendent
pas du JavaScript. Le contenu n'est pas chargé depuis une API. Aucun cookie, mesure
d'audience, stockage local, police distante ou framework côté client.

## Publication

`dist/` est un site statique autonome. Le workflow `.github/workflows/deploy.yml`
construit et vérifie le site, puis le publie sur GitHub Pages à chaque push sur
`main`. Il peut aussi être lancé depuis l'onglet Actions. Les pull requests exécutent
les vérifications sans publier. Le déploiement utilise les permissions natives de
GitHub Actions : aucun secret personnel à créer ou renouveler.

Dans **Settings → Pages**, la source est **GitHub Actions**, le domaine personnalisé
est `angany.ai` et HTTPS est activé. Le fichier `CNAME` accompagne la sortie, mais
le rattachement du domaine se configure dans les paramètres GitHub Pages.
Les DNS restent chez GitHub Pages : les enregistrements A du domaine pointent vers
`185.199.108.153`, `185.199.109.153`, `185.199.110.153` et `185.199.111.153` ;
`www` est un CNAME vers `anganyai.github.io` et redirige vers `angany.ai`.

Aucun push ni déploiement n'est effectué par les commandes de développement.
Pour revenir sur une modification publiée, annuler le commit concerné puis pousser
sur `main` : le même workflow republie le site.

L'ancien site Docusaurus et son historique sont conservés dans le dépôt privé
`anganyAI/angany-website-old`, dont les workflows sont désactivés. Son ancienne
adresse GitHub Pages ne contient qu'une redirection vers `https://angany.ai/`.
Ce dépôt contient uniquement le nouveau labo. Les anciennes pages produit et
documentation ne font pas partie du nouveau site ; une page 404 oriente les visiteurs
vers l'accueil.

## Contenu et attribution

Les dates personnelles, loisirs, poste de CTO et coordonnées ont été fournis par
Sylvain. La première machine reste datée **vers 1988**. Le rôle CallKeep est décrit
comme une contribution, sans attribuer la création du module React Native WebRTC.
Le lien de Luge ouvre un courriel, en attendant une adresse publique à référencer.
Les articles RoomKit sont identifiés comme publications du blog RoomKit.

Références principales consultées le 1er novembre 2026 :

- https://github.com/sboily et https://github.com/anganyAI
- https://www.roomkit.live/ et https://github.com/roomkit-live
- https://luge.tchatnsign.ai/docs/product/what-is-luge.md
- https://wazo-platform.org/blog/introducing-wazo/
- https://www.voiceaispace.com/industry-conversations/founder-interview-sylvain-boily
- https://github.com/sboily/dndkit (issu de gamemaster-mcp)
- https://github.com/sboily/n8n-nodes-hubitat

Crédits des images, de la typographie et des icônes : `assets/CREDITS.txt`.
La photographie du profil GitHub sert de portrait provisoire et peut être remplacée
par un fichier personnel dans `assets/images/sylvain.jpg`.
