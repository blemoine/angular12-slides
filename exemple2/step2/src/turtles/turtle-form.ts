import {Turtle} from './turtleService';

class TurtleFormController {
  public newTurtle:Turtle = null;
  public addTurtle: (params:{turtle:Turtle}) => void
  submit() {
      this.addTurtle({turtle:this.newTurtle});
      this.newTurtle = null;
  }
}

const turtleForm = {
   controller:TurtleFormController,
    bindings: <any>{
      addTurtle: '&'
    },
    template:`<form class="form-inline" name="turtle-form" ng-submit="$ctrl.submit()">
      <bootstrap-input
         label="Name"
         name="name"
         required="true"
         model="$ctrl.newTurtle.name"
      ></bootstrap-input>
      <bootstrap-input
         label="Color"
         name="color"
         required="true"
         model="$ctrl.newTurtle.color"
      ></bootstrap-input>
      <input type="submit" value="Add a turtle" class="btn btn-default" />
    </form> `
};

export default turtleForm;
