import 'reflect-metadata';
import {Component} from 'angular2/core';
import {Turtle} from './turtleService'

@Component({
 selector:'turtlesShow2',
 template:`
 <ul>
   <li *ngFor="#turtle of turtles">
     <span class="turtle-name">{{turtle.name}}</span>
     <span class="round" [ngStyle]="{'background-color':turtle.color}"></span>
   </li>
 </ul>`,
 inputs: ['turtles']
})
export default class TurtlesShow {
    public turtles:Array<Turtle> = [];
}
