# Kasa

> Onzième projet du parcours _développeur web front-end_ chez OpenClassrooms

## Contexte

Kasa est une plateforme web de location d'appartements entre particuliers. Le site actuel, codé il y a dix ans en ASP.NET, nécessitait une refonte totale pour passer à une _stack_ complète en JavaScript, avec notamment React pour le _front-end_.

Il s'agit donc ici de créer la partie _front-end_ de l'application en se basant sur les maquettes _responsives_ fournies et un fichier JSON en guise de base de données.

## Cahier des charges

Développer en React (avec l'aide de _Create React App_) avec un découpage en composants et utilisation des props et states (si nécessaire), ainsi que _React Router_ pour la gestion des routes, en respectant la maquette.

## Eléments fournis

- Un [fichier JSON](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json) pour simuler la base de données ;
- Les [_coding guidelines_](https://course.oc-static.com/projects/Front-End+V2/P9+React+1/Coding+guidelines+Kasa+FR.pdf) pour la marche à suivre ;
- La [maquette](https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design?node-id=4%3A1)

## Technologies utilisées

- [_Create React App_](https://create-react-app.dev/)
- [_React Router_ v6](https://reactrouter.com/)
- [_Sass_](https://sass-lang.com/) et [_Autoprefixer_](https://github.com/postcss/autoprefixer)
- [_normalize.css_](https://necolas.github.io/normalize.css/)
- [_Google Fonts_](https://fonts.google.com/)
- [_NodeJS_](https://nodejs.org/en/) et [_npm_](https://www.npmjs.com/)
- [_Windows Subsystem for Linux_](https://docs.microsoft.com/fr-fr/windows/wsl/)

## Instructions

> Pré-requis : nodejs, npm et git

> Note : les instructions données ci-dessous sont rédigées pour les systèmes UNIX (Linux, macOS, BSD...). Pour Windows, certaines commandes peuvent varier, et il convient en outre de vérifier les variables d'environnement. Alternativement, et cela est vivement conseillé, utilisez WSL 2 pour émuler Linux sous Windows.

1. Cloner le dépôt sur votre machine

```bash
~$ git clone https://github.com/kevin-junger/kevinjunger_11_18022022.git
```

2. Naviguer vers le dossier de l'application

```bash
~$ cd kevinjunger_11_18022022/kasa
```

3. Installer les dépendances

```bash
~$ npm i -D
```

4. Démarrer l'application (en mode développement)

```bash
~$ npm start
```

> Si votre navigateur ne s'est pas ouvert automatiquement, veuillez vous rendre à l'adresse [http://localhost:3000](http://localhost:3000).

> Pour plus de détails (notamment pour le lancement de tests unitaires ou la création d'une _build_ de production), veuillez consulter le README fourni par _Create React App_ dans le dossier `kasa`.
