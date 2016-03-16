
angular.module('app').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/turtles', {
        templateUrl: 'partials/turtles.html',
        controller: 'TurtlesCtrl'
      }).
      otherwise({
        redirectTo: '/turtles'
      });
  }]);
