import 'reflect-metadata';
import {Component} from 'angular2/core';
import {Turtle} from './turtleService';
import upgradeAdapter from '../upgrader';

const BootstrapInput = upgradeAdapter.upgradeNg1Component('bootstrapInput');

@Component({
  selector:'turtlesForm2',
  template:`<form class="form-inline" name="turtle-form" (ngSubmit)="submit()">
    <bootstrap-input
       label="Name"
       name="name"
       required="true"
       [model]="newTurtle.name"
       (modelChange)="da($event)"
    ></bootstrap-input>
    <bootstrap-input
       label="Color"
       name="color"
       required="true"
       [(model)]="newTurtle.color"
    ></bootstrap-input>
    <input type="submit" value="Add a turtle" class="btn btn-default" />
  </form>`,
  directives:[BootstrapInput]
})
export default class TurtleForm2 {
    public newTurtle:Turtle = {name:'', color:''};
    submit() {
      console.log(this.newTurtle.name)
      this.newTurtle = {name:'', color:''};
    }
    da(e) {console.log}
};

/*
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
*/
