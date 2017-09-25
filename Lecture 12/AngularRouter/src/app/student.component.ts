import { Component, OnInit } from '@angular/core';

import { DbService } from './db/db.service';

@Component({
  selector: 'app-student',
  template: `
    
    <h3>Student Component Fetching Data from DbService</h3>
    <ul>
      <li *ngFor="let x of studentData"><a href='/profile/{{x.id}}'>{{x.name}}</a></li>
    </ul>
  `,
  styles: []
})
export class StudentComponent implements OnInit {

  public studentData = {};
  constructor(public dbServ: DbService) {

   }

  ngOnInit() {
    this.studentData = this.dbServ.getData();
  }

}
