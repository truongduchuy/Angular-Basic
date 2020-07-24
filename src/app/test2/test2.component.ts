import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[app-test2]',
  template: `
  <h2>{{"Hello " + name}}</h2>
  <button (click)="fireEvent()" >Click</button>

  `,
  styles: [],
})

// interpolation doesn't work when attribute is boolean
export class Test2Component implements OnInit {
  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();

  fireEvent() {
    this.childEvent.emit('Message')
  }

  constructor() {}

  ngOnInit(): void {}
}
