/// <reference path="../typings/main.d.ts" />
import * as angular from 'angular';
import '@angular/router'
import turtlesApp from './turtles/turtleModule';
'use strict';

angular.module('app', [
  'ngComponentRouter',
  turtlesApp,
])

.component('app', <any>{
  template: '<ng-outlet></ng-outlet>',
  $routeConfig: [
    {path:'/turtles/...', name:'Turtles', component:'turtles', useAsDefault:true}
  ]
})
.value('$routerRootComponent', 'app')
