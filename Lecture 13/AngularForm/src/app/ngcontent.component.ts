import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-ngcontent',
  //templateUrl: './app.component.html',
  template:`Message 1: {{message1}} <br> Message 2: {{message2}}
  <ng-content></ng-content>
  `,
  styleUrls: ['./app.component.css']
})
export class NgcontentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'app';
  @Input() message1;
  @Input() message2;
}