import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test2]',
  template: `
    <h2>welcome {{ name }}</h2>
    <input #myinput type="text">
    <button (click)="handleClick(myinput.value)">Log</button>
  `,
  styles: [],
})

// interpolation doesn't work when attribute is boolean
export class Test2Component implements OnInit {
  constructor() {}
  public name = 'huy';
  
  handleClick(value) {
    console.log(value)
  }

  public hightlightColor = 'orange'
  ngOnInit(): void {}
}
