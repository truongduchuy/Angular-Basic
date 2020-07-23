import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test2]',
  template: `
    <h2>welcome {{name}}</h2>
  `,
  styles: [],
})
export class Test2Component implements OnInit {
  constructor() {}
  public name="huy"

  ngOnInit(): void {}
}
