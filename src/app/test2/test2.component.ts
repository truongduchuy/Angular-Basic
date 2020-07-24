import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test2]',
  template: `
  <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">You picked red color</div>
    <div *ngSwitchCase="'blue'">You picked red color</div>
    <div *ngSwitchCase="'green'">You picked red color</div>
    <div *ngSwitchDefault>Pick again</div>
  </div>
  `,
  styles: [],
})

// interpolation doesn't work when attribute is boolean
export class Test2Component implements OnInit {
  public color = "orange";

  constructor() {}

  ngOnInit(): void {}
}
