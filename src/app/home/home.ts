import {Component} from 'angular2/core';
import {Smiley} from './smiley';

@Component({
  selector: 'home',  // <home></home>
  directives: [Smiley],
  template: require('./home.html')
})
export class Home {
  happiness:number = 0.3;
}
