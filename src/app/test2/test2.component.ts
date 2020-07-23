import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test2]',
  // templateUrl: './test2.component.html',
  template: `
    <h2>welcome {{name}}</h2>
    <h2>{{2 + 2}}</h2>
    <h2>{{"xin chào " + name}}</h2>
    <h2>{{name.length}}</h2>
    <h2>{{name.toUpperCase()}}</h2>
    <h2>{{siteUrl}}</h2>
    <h2>{{greetUser()}}</h2>
  `,
  // styleUrls: ['./test2.component.css'],
  styles: [
    `
      div {
        color: red;
      }
    `,
  ],
})
export class Test2Component implements OnInit {
  constructor() {}
  public siteUrl = window.location.origin
  public name="huy"

  greetUser(){
    return "Hello " + this.name;
  }
  ngOnInit(): void {}
}
