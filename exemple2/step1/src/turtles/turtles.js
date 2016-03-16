var turtles = {
  controller:'TurtlesCtrl',
  template: "<h1>Ninja Turtles</h1>"+
  "<turtles-show turtles=\"$ctrl.turtles\"></turtles-show>"+
  "<turtle-form add-turtle=\"$ctrl.addTurtle(turtle)\" ></turtle-form>"
}

angular.module('turtles.app').component('turtles', turtles)
