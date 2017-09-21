import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<ul>
                <li *ngFor="let x of inputs; let num = index" appUpper>{{x}}</li>
                
              </ul>
              <p [appMyvisibility]=true>This should hide...!!</p>
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
