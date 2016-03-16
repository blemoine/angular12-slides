
angular.module('turtles.app').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/turtles', {
        templateUrl: 'src/turtles/turtles.html',
        controller: 'TurtlesCtrl',
        controllerAs: 'vm'
      }).
      otherwise({
        redirectTo: '/turtles'
      });
  }]);
