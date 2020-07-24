import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test2]',
  template: `
   <input [(ngModel)]="name" type="text">
   <input [(ngModel)]="age" type="text">
   <button (click)="onClick(name, age)" >Click here</button>
  `,
  styles: [],
})

// interpolation doesn't work when attribute is boolean
export class Test2Component implements OnInit {
  public name = '';

  constructor() {}

  onClick(name, age) {
    console.log(name, age)
  }
  ngOnInit(): void {}
}
