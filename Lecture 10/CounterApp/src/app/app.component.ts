import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter App';
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
}
