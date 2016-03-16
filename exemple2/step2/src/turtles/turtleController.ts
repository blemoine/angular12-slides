/*
'use strict';

class TurtlesCtrl {

  public turtles = []

  static $inject = ['TurtlesService'];
  constructor(private TurtlesService) {
    TurtlesService.findAll().then( (turtles) => this.turtles = turtles)
  }

  addTurtle(turtle) {

    this.TurtlesService.add(turtle).then((newTurtle) => {
       return this.TurtlesService.findAll().then((turtles) =>  this.turtles = turtles);
    });
  }
}

export default TurtlesCtrl;
*/
