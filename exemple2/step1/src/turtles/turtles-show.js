var turtlesShow = {
  bindings: {
    turtles:'<'
  },
  template:"<ul>"+
    "<li ng-repeat=\"turtle in $ctrl.turtles track by turtle.name\"> "+
      "<span class=\"turtle-name\">{{turtle.name}}</span> "+
      "<span class=\"round\" ng-style=\"{'background-color':turtle.color}\"></span> "+
    "</li> "+
  "</ul>"
}

angular.module('turtles.app').component('turtlesShow', turtlesShow)
