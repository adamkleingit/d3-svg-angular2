import {Component} from 'angular2/core';
import {Home} from './home/home';
import 'd3';

@Component({
  selector: 'app',
  directives: [Home],
  template: `
    <home></home>
  `
})
export class App {
  constructor() {

  }
}
