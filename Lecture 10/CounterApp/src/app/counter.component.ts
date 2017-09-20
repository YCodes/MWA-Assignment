import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="increment()">+</button>
    {{counterValue}}
    <button (click)="decrement()">-</button>
    <br><br><button (click)="reset()">Reset</button>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  private counterValue;

  constructor() { 
    this.counterValue = 0;
  }

  increment(){
    this.counterValue = this.counterValue+1;
    return false;
  }

  decrement(){
    this.counterValue = this.counterValue-1;
    return false;
  }
  
  reset(){
    this.counterValue = 0;
  }

  ngOnInit() {
  }
}
