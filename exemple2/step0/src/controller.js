'use strict';

angular.module('app').controller('TurtlesCtrl', ['$scope','TurtlesService', function TurtlesCtrl($scope, TurtlesService) {
    $scope.turtles = [];
    $scope.newTurtle = null;
    $scope.addTurtle = addTurtle;

    TurtlesService.findAll().then(function (turtles) {
      $scope.turtles = turtles
    })

    function addTurtle() {
      TurtlesService.add($scope.newTurtle);
      $scope.newTurtle = null;
    }
}]);
