import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<ul>            
                  <li *ngFor="let x of inputs; let num = index" appUpper>{{x}}</li>
              
              </ul>
              <p [appMyvisibility]=false>This should hide...!!! (Change directive to true to hide)</p>
              <p appMycolor>Changes color in click</p>
              `,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public inputs: string[];

  constructor(){
    this.inputs = ['Yaman','George','Mike'];
  }
}
