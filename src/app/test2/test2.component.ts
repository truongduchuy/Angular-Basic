import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test2]',
  // templateUrl: './test2.component.html',
  template: `<div>
    template inline
  </div>`,
  // styleUrls: ['./test2.component.css'],
  styles: [`
      div {
        color: red;
      }
  `]
})
export class Test2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
