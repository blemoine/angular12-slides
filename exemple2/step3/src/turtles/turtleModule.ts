'use strict';

import * as angular from 'angular';

import formModule from '../form/formModule';

import turtles from './turtles'
import turtlesShow from './turtles-show'
import turtlesShow2 from './turtles-show-2'
import turtleForm from './turtle-form'
import turtleForm2 from './turtle-form-2'
import TurtlesService from './turtleService'

import upgradeAdapter from '../upgrader';

export default angular.module('turtles.app', [
   formModule
])
.service('TurtlesService', TurtlesService)
.component('turtleForm', turtleForm)
.component('turtles', turtles)
.component('turtlesShow', turtlesShow)
.directive('turtlesShow2',
    <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(turtlesShow2))
.directive('turtleForm2',
        <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(turtleForm2))
.name;
