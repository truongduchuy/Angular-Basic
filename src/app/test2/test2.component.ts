import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test2]',
  template: `
    <h2>welcome {{ name }}</h2>
    <input [id]="myId" type="text" value="Huy truong" />
    <input bind-id="myId" type="text" value="Huy truong" />
    <input [disabled]="isDisabled" type="text" value="Huy truong" />
  `,
  styles: [],
})

// interpolation doesn't work when attribute is boolean
export class Test2Component implements OnInit {
  constructor() {}
  public isDisabled = false;
  public myId = 'input-name';
  public name = 'huy';

  ngOnInit(): void {}
}
