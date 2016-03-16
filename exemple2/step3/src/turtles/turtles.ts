import {Turtle} from './turtleService'
import TurtlesService from './turtleService';

class TurtlesCtrl {

  public turtles:Array<Turtle> = []

  static $inject = ['TurtlesService'];
  constructor(private TurtlesService:TurtlesService) {
    TurtlesService.findAll().then( (turtles) => this.turtles = turtles)
  }

  addTurtle(turtle:Turtle) {

    this.TurtlesService.add(turtle).then((newTurtle) => {
       return this.TurtlesService.findAll().then((turtles) =>  this.turtles = turtles);
    });
  }
}

const turtles = {
  controller:TurtlesCtrl,
  template: `<h1>Ninja Turtles</h1>
  <turtles-show turtles="$ctrl.turtles"></turtles-show>
  <turtles-show2 [turtles]="$ctrl.turtles"></turtles-show2>
  <turtle-form add-turtle="$ctrl.addTurtle(turtle)" ></turtle-form>
  <turtle-form-2 add-turtle="$ctrl.addTurtle(turtle)" ></turtle-form>`
}

export default turtles;
