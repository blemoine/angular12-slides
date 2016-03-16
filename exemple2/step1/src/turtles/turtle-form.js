function TurtleFormController() {
  this.newTurtle = null;
}
TurtleFormController.prototype.submit = function() {
    this.addTurtle({turtle:this.newTurtle});
    this.newTurtle = null;
}

var turtleForm = {
   controller:TurtleFormController,
    bindings: {
      addTurtle:'&'
    },
    template:"<form class=\"form-inline\" name=\"turtle-form\" ng-submit=\"$ctrl.submit()\"> "+
      "<bootstrap-input "+
         "label=\"Name\" "+
         "name=\"name\" "+
         "required=\"true\" "+
         "model=\"$ctrl.newTurtle.name\" "+
      "></bootstrap-input> "+
      "<bootstrap-input "+
         "label=\"Color\" "+
         "name=\"color\" "+
         "required=\"true\" "+
         "model=\"$ctrl.newTurtle.color\" "+
      "></bootstrap-input> "+
      "<input type=\"submit\" value=\"Add a turtle\" class=\"btn btn-default\" /> "+
    "</form> "
};

angular.module('turtles.app').component('turtleForm', turtleForm)
