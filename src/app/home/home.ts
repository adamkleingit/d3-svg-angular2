import {Component} from 'angular2/core';
import {Arc} from './arc';

@Component({
  selector: 'home',  // <home></home>
  directives: [Arc],
  template: require('./home.html')
})
export class Home {
  angle:number = 0.3;
}
