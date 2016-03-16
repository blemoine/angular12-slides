* Refactoring Angular pour que ce soit moins moche

1) On fait du pod
   - création d'un répertoire fonctionnel
   - renommage de tout et déplacement dans ce rép
   - point d'entrée unique faisant réfèrence aux modules fonctionnel
   - déplacement du html aussi

2) service
   - on fait du service et pas de la factory
   - on ne mute pas les listes
   - la liste est un attribut de classe
   - refacto du controller pour recharger la liste des turtles après sauvegarde

3) controller
    - on fait du controller sous forme de class, avec la syntaxe controllerAs (fichier de route)   
    - le controller est une classe
    - nommé vm le this
    - dans le template, utilisé track by
    - ne pas muter la liste

4) Utiliser des components

    - pour les élements de formulaire -> créer un module spécifique
    - Tout découper en composant   (le formulaire lui meme)  

5) Utiliser le componentRouter

  - Faire du module un component turtles.js
  - Dans app.js (root), utiliser le compoentnRouter (virer la vieille route), remplacer ng-view dans le template
