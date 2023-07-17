## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
# EliotOmar

# Description du projet de l'idée à la réalisation:

L'ambition de ce projet était de réaliser une application permettant la 
gestion des membres et des équipes d'un club de basketball.

# Fonctionnalités :

 - Créer / supprimer des joueurs et des équipes.
 - Ajouter des joueurs à ces équipes ou les retirer.
 - Charger des données de joueurs depuis un fichier excel.

# Ce qui a fonctionné :

 - Création / suppressions des joueurs / équipes.
 - charger les données de joueurs depuis un fichier Excel.

# Ce qui a posé problème :

 - L'utilisation des classes bootstrap dans des fonctionnalités vue.js a parfois causé des colisions. 
 - Ajouter un joueur dans une équipe qui se trouve dans la classe modal bootstrap.
 - Grid container: les placements sur la page web, surtout pour les listes.
 - Nous n'étions pas conscients des collisions entre les styles des différentes pages.
 - Création de l'API depuis google sheet (commandes pour transformer l'Excel en API).

# Principales leçons apprises :

 - Imbrication / sélecteurs des classes CSS.
 - placements des différents éléments sur la page web.
 - Router (en général).
 - Il aurait fallu faire une feuille de style général et l'appliquer sur les différentes balises avec l'attribut v-bind:style.
 - Les éléments vue.js (v-for/v-if...).
 - Composants: afin de réutiliser le code sur différentes pages / gestion des événements (emits).


# Structure des imbrications des composants :

La page PlayerManage.vue est la seule page qui utilise des composants. Elle utilise le composant InputAddplayer.vue qui va gérer les inputs de l'utilisateur et le composant showPlayersTeams.vue qui va gérer l'affichage des joueurs ainsi que les fonctionnalités d'ajout de joueurs dans des équipes. Ces composants utilisent eux-mêmes d'autres composants. Le composant inputAddPlayer.vue utilise le composant AvatarInput.vue qui gère l'input d'images. Le composant ShowPlayersTeams.vue utilise le composant ShowTeam.vue qui se charge d'afficher les équipes de la liste d'équipe.

## Croquis de base

Croquis_base.png