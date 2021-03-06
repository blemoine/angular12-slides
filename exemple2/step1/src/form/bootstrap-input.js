var bootstrapInput = {
  bindings: {
    label:'@',
    name:'@',
    model: '=',
    required: '<'
  },
  template: "<div class=\"form-group\">"+
    "<label for=\"{{$ctrl.name}}\">{{$ctrl.label}}</label>"+
    "<input type=\"text\" class=\"form-control\" "+
           "ng-required=\"{{$ctrl.required}}\" "+
           "name=\"{{$ctrl.name}}\" "+
           "placeholder=\"{{$ctrl.label}}\" "+
           "ng-model=\"$ctrl.model\" /> "+
  "</div>"

}

angular.module('turtles.form').component('bootstrapInput', bootstrapInput)
