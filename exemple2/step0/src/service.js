'use strict';

var turtles = [{name:'Leonardo', color:'blue'}]

angular.module('app').factory('TurtlesService', ['$q', function TurtlesService($q) {
    return {
      findAll: function() {
        return $q.resolve(turtles)
      },
      add: function(turtle) {
        turtles.push(turtle);
      }
    }
}]);
