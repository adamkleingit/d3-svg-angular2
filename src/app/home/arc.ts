import { Component, Input } from 'angular2/core';
declare var d3: any

@Component({
  selector: '[arc]',  // <g arc></g>
  template: require('./arc.html')
})
export class Arc {
  // Set our default values
  path:string = "";
  thickness:number = 2.0;
  radius:number = 17;

  @Input() set angle(value:string) {
    this.path = d3.svg.arc()
      .outerRadius(this.radius)
      .innerRadius(this.radius - this.thickness)
      .startAngle((1 - parseFloat(value)) * Math.PI)
      .endAngle((1 + parseFloat(value)) * Math.PI)();

    console.log('outer', this.radius);
    console.log('inner', this.radius - this.thickness);
    console.log('start', (1 - parseFloat(value)) * Math.PI);
    console.log('end', (1 + parseFloat(value)) * Math.PI);
    console.log('value', value);
    console.log('path', this.path);
  }
}
