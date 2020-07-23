import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test2]',
  template: `
    <h2>welcome {{ name }}</h2>
    <button (click)="onClick($event)" >event binding</button>
    <button (click)="greeting='cool'" >event binding2</button>
    {{greeting}}
  `,
  styles: [],
})

// interpolation doesn't work when attribute is boolean
export class Test2Component implements OnInit {
  constructor() {}
  public name = 'huy';
  public greeting = ""
  
  onClick(event) {
    console.log(event)
    this.greeting = 'hello'
  }

  public hightlightColor = 'orange'
  ngOnInit(): void {}
}
