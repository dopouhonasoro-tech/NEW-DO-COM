# Site officiel DO COM

Site de DO COM — agence de transformation digitale, marketing et IA basée à Abidjan.

**Signature de marque :** « Voyez plus loin, digitalement. »

## Positionnement porté par le site

DO COM ne se présente pas comme une agence qui « fait des sites web ». Le site attaque par le
coût invisible de l'informel opérationnel — informations dispersées, ressaisies, outils qui ne se
parlent pas — et positionne site, contenus, campagnes, IA et automatisations comme des moyens au
service de la transformation de l'organisation.

Accroche principale : **« Votre organisation avance. Vos outils la freinent. »**

## Stack

- **Astro 7** — génération statique, aucun bundle JavaScript livré au navigateur
- **Tailwind 4** — tokens de design déclarés dans `@theme` (`src/styles/global.css`)
- **Netlify** — hébergement, formulaire de contact via Netlify Forms
- `sharp` en devDependency uniquement (optimisation d'images et génération de l'image Open Graph)

Aucune dépendance runtime au-delà d'Astro et Tailwind. Le sitemap et le `robots.txt` sont générés
par des endpoints Astro plutôt que par une intégration supplémentaire.

## Arborescence

```
/                                  Accueil — récit complet et conversion
/solutions/                        Hub des 6 domaines + verticale University OS
/solutions/<slug>/                 6 pages : Problème → Approche → Valeur → Action
/approche/                         Méthode en 6 étapes + diagnostic de transformation
/realisations/                     Cas réels, avec état d'avancement exact
/faq/                              18 questions fréquentes + données structurées FAQPage
/a-propos/                         Marque, fondateur, vision, marchés
/contact/                          Formulaire à 6 champs
/contact/merci/                    Page de confirmation (cible du formulaire)
/sitemap.xml  /robots.txt          Générés à la compilation
```

## Où modifier le contenu

**`src/data/site.ts` est la source unique de vérité** pour l'identité (coordonnées, signature),
la navigation, les 6 solutions, les 6 étapes de la méthode et les questions fréquentes. Modifier ce fichier met à jour
simultanément la navigation, le pied de page, la page hub, les pages solutions, le formulaire de
contact et le sitemap.

Le contenu spécifique à une page (réalisations, à propos, approche) vit en tête du fichier `.astro`
correspondant, dans des tableaux nommés en français.

## Règle éditoriale

Aucun témoignage, chiffre, résultat ou logo client n'est publié sans pouvoir être justifié. Les
objectifs fixés avec un client ne sont jamais présentés comme des résultats obtenus. Les maquettes
de prospection (`/preview/`) ne sont pas des réalisations et ne sont pas indexées.

## Système de design

Trois couleurs officielles : noir `#000000`, blanc `#FFFFFF`, vert `#10B981`.

`#10B981` ne passe pas le contraste AA sur fond blanc (2,2:1). Le token `--color-vert-texte`
(`#047857`) est donc utilisé pour tout texte vert sur fond clair, et `--color-vert` réservé aux
fonds sombres et aux surfaces. Ne pas contourner cette règle.

Typographie : Bricolage Grotesque (titres), Inter (texte), JetBrains Mono (libellés et index).


## Couche de mouvement

Inspirée des sites d'agence contemporains (Lenis + GSAP/ScrollTrigger), mais reconstruite
en propre pour tenir le budget de performance : **~6 Ko de JavaScript compressé** au lieu
des ~150 Ko d'une pile GSAP complète.

- `src/components/Motion.astro` — le moteur. Une seule variable `--p` (0 → 1) est écrite sur
  chaque élément `[data-progres]`, et toutes les animations en dérivent en CSS.
- `src/styles/motion.css` — toutes les règles de mouvement.
- `src/components/SceneSysteme.astro` — la scène « du désordre au système » : huit fragments
  éparpillés qui se rangent en grille au fil du défilement. C'est l'argument commercial mis
  en mouvement, pas une décoration. Grille 4 × 2 au-dessus de 768 px, 2 × 4 en dessous.
- `src/components/TitreAnime.astro` — titres révélés ligne par ligne. Le découpage est fait
  à la construction : pas de bibliothèque, texte intact pour les moteurs et lecteurs d'écran.

**Trois règles de robustesse à ne pas casser :**

1. `--p` vaut **1 par défaut**. Sans JavaScript, chaque scène s'affiche dans son état final
   (rangé) — jamais à mi-course. Seul le héros porte `style="--p:0"` en ligne, car son état
   de repos est l'état initial.
2. Le moteur est piloté **deux fois** : par la boucle d'animation et par l'événement de
   défilement. `requestAnimationFrame` est suspendu dès qu'un onglet cesse d'être composé ;
   sans cette redondance les scènes resteraient figées à mi-course.
3. Le mode `traversee` atteint 1 quand l'élément arrive **au centre** de l'écran, pas quand il
   en sort — sinon une scène n'atteint jamais son état final pendant qu'on la regarde.

Les transitions entre pages utilisent l'API native `@view-transition` : aucun routeur,
aucun JavaScript, ignorée par les navigateurs qui ne la connaissent pas.

Tout est neutralisé sous `prefers-reduced-motion: reduce`.

## Commandes

| Commande                   | Action                                            |
| :------------------------- | :------------------------------------------------ |
| `npm install`              | Installe les dépendances                          |
| `npm run dev`              | Serveur local sur `localhost:4321`                |
| `npm run build`            | Compile le site dans `./dist/`                    |
| `npm run preview`          | Prévisualise la compilation avant déploiement     |
| `node scripts/og-image.mjs`| Régénère l'image de partage social                |
| `node scripts/optimize.mjs`| Régénère les déclinaisons du symbole              |

## Avant la mise en production

- Mettre à jour `site` dans `astro.config.mjs` et `SITE.url` dans `src/data/site.ts` avec le
  domaine définitif — ces valeurs pilotent les URL canoniques, le sitemap et les balises Open Graph.
- Vérifier la détection du formulaire par Netlify Forms après le premier déploiement.
