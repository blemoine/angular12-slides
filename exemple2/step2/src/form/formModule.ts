'use strict';

import * as angular from 'angular';

import bootstrapInput from './bootstrap-input';

export default angular.module('turtles.form', [])
  .component('bootstrapInput', bootstrapInput)
  .name;
