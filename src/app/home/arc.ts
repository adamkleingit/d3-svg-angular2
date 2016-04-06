import { Component, Input } from 'angular2/core';
declare var d3: any

@Component({
  selector: '[arc]',
  template: require('./arc.html')
})
export class Arc {
  path:string = "";

  @Input() thickness:number;
  @Input() radius:number;
  @Input() stroke;
  @Input() fill;

  @Input() set angle(value:string) {
    this.path = d3.svg.arc()
      .outerRadius(this.radius)
      .innerRadius(this.radius - this.thickness)
      .startAngle((1 - parseFloat(value)) * Math.PI)
      .endAngle((1 + parseFloat(value)) * Math.PI)();
  }
}
