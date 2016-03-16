* Using jspm + systemjs

1) Créer un package.json

npm install systemjs typescript --save
npm install typings jspm --save-dev

2) Installer le plugin typescript ->
  ./node_modules/.bin/jspm install ts
  ./node_modules/.bin/jspm install angular
  ./node_modules/.bin/jspm install npm:@angular/router

3) Configurer JSPM
   ajouter le truc qui va bien pour utiliser le ts plugin
   Ajouter dans le index.html ce qui va bien, virer le ng-app
   Tout renommer en .ts
   Mettre des imports export partout
   Override le router angular magique

4) Utiliser typescript (ES6)

   * const, let
    * => function
    * class
    * template
    * static $inject

5) Utiliser typescript (Type)

   ./node_modules/.bin/typings install jquery --save --ambient
   ./node_modules/.bintypings install angular --save --ambient
   ./node_modules/.bin/typings install angular-component-router --save --ambient
   /// <reference path="main.d.ts" />

   interface Turtle {
     name:string
     color:string
   }
