'use strict';

import * as angular from 'angular';

import formModule from '../form/formModule';

import turtles from './turtles'
import turtlesShow from './turtles-show'
import turtleForm from './turtle-form'
//import TurtlesCtrl from './turtleController'
import TurtlesService from './turtleService'

export default angular.module('turtles.app', [
   formModule
])
.service('TurtlesService', TurtlesService)
//.controller('TurtlesCtrl', TurtlesCtrl)
.component('turtleForm', turtleForm)
.component('turtles', turtles)
.component('turtlesShow', turtlesShow)
.name;
