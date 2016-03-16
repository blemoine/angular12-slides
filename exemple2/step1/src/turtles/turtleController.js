'use strict';

function TurtlesCtrl(TurtlesService) {
  var vm = this;
  vm.turtles = [];

  TurtlesService.findAll().then(function (turtles) {
    vm.turtles = turtles
  });

  vm.addTurtle = function addTurtle(turtle) {
    TurtlesService.add(turtle).then(function(newTurtle) {
       return TurtlesService.findAll().then(function(turtles) {
         vm.turtles = turtles;
       });
    });
  }
}

angular.module('turtles.app').controller('TurtlesCtrl', ['TurtlesService', TurtlesCtrl]);
