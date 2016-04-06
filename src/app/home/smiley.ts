import { Component, Input } from 'angular2/core';
import {Arc} from './arc';

@Component({
  selector: '[smiley]',
  directives: [Arc],
  template: require('./smiley.html')
})
export class Smiley {
  @Input() happiness;
}
