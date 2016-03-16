'use strict';

angular.module('app', [
  'ngComponentRouter',
  'turtles.app'
])
.component('app', {
  template: '<ng-outlet></ng-outlet>',
  $routeConfig: [
    {path:'/turtles/...', name:'Turtles', component:'turtles', useAsDefault:true}
  ]
})
.value('$routerRootComponent', 'app')
