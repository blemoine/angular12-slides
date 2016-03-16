'use strict';

export interface Turtle {
  name:string
  color:string
}

class TurtlesService {

    public turtles:Array<Turtle> = [{name:'Leonardo', color:'blue'}]

    static $inject = ['$q'];
    constructor(private $q:ng.IQService) {

    }
    findAll():ng.IPromise<Array<Turtle>> {
      return this.$q.resolve(this.turtles)
    }
    add(turtle):ng.IPromise<Turtle> {
      this.turtles = this.turtles.concat([turtle])
      return this.$q.resolve(turtle);
    }
}

export default TurtlesService;
