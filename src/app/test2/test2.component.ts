import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test2]',
  template: `
  <div *ngFor="let color of colors; even as e">
    <h2>{{e}} {{color}}</h2>
  </div>
  `,
  styles: [],
})

// interpolation doesn't work when attribute is boolean
export class Test2Component implements OnInit {
  public colors = ["orange", 'red', 'blue', 'green'];

  constructor() {}

  ngOnInit(): void {}
}
