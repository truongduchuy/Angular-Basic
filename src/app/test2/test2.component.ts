import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test2]',
  template: `
    <h2>welcome {{ name }}</h2>
    <input [id]="myId" type="text" value="Huy truong" />
    <input bind-id="myId" type="text" value="Huy truong" />
    <input [disabled]="isDisabled" type="text" value="Huy truong" />

    <h2 class="text-success">Codevolution1</h2>
    <h2 [class]="successClass">Codevolution2</h2>
    <h2 class="text-special" [class]="successClass">Codevolution3</h2>
    <h2 [class.text-danger]="hasError">Codevolution4</h2>
    <h2 [ngClass]="messageClasses">Message5</h2>
  `,
  styles: [`
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `],
})

// interpolation doesn't work when attribute is boolean
export class Test2Component implements OnInit {
  constructor() {}
  public isDisabled = false;
  public myId = 'input-name';
  public name = 'huy';

  public hasError = true
  public isSpecial = true
  public successClass = 'text-success'

  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  
  ngOnInit(): void {}
}
