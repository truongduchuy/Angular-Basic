import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test2]',
  template: `
  // <div *ngIf="condition; then thenBlock else elseBlock" ></div>
  // <ng-template #thenBlock>Codevolution</ng-template>
  // <ng-template #elseBlock>Hidden</ng-template>

  <h2 *ngIf="condition; else elseBlock">Content to render when condition is true.</h2>
  <ng-template #elseBlock>Content to render when condition is false.</ng-template>
  `,
  styles: [],
})

// interpolation doesn't work when attribute is boolean
export class Test2Component implements OnInit {
  public condition = true;

  constructor() {}

  ngOnInit(): void {}
}
