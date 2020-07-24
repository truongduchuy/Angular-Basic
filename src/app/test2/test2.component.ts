import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[app-test2]',
  template: `
  <h2>{{"Hello " + name}}</h2>
  <button (click)="fireEvent()" >Click</button>

  <h2>{{"Codevolution" | lowercase}}</h2>
    <h2>{{"Codevolution" | uppercase}}</h2>
    <h2>{{"Welcome to codevolution" | titlecase}}</h2>
    <h2>{{"Codevolution" | slice:3:6}}</h2>
    <h2>{{person | json}}</h2>
    <h2>{{5.678 | number:'1.2-3'}}</h2>
    <h2>{{5.678 | number:'3.4-5'}}</h2>
    <h2>{{5.678 | number:'3.1-2'}}</h2>
    
    
    <h2>{{0.25 | percent}}</h2>
    <h2>{{0.25 | currency}}</h2>
    <h2>{{0.25 | currency:'GBP'}}</h2>
    <h2>{{0.25 | currency:'GBP':'code'}}</h2>
    
    <h2>{{date}}</h2>
    <h2>{{date | date:'short'}}</h2>
    <h2>{{date | date:'shortDate'}}</h2>
    <h2>{{date | date:'shortTime'}}</h2>
  `,
  styles: [],
})

// interpolation doesn't work when attribute is boolean
export class Test2Component implements OnInit {
  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();

  public date = new Date();
  
  public person = {
    name: 'huy',
    age: 22
  }

  fireEvent() {
    this.childEvent.emit('Message')
  }

  constructor() {}

  ngOnInit(): void {}
}
