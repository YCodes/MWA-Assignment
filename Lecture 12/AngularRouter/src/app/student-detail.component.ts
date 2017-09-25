import { Component, OnInit } from '@angular/core';
import { DbService } from './db/db.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  template: `
    <p> Student ID: {{data.stuID}}</p>
    <p> Name: {{data.name}}</p>
    <p> Email: {{data.email}}</p>
  `,
  styles: []
})
export class StudentDetailComponent implements OnInit {

  public data = {};
  public id: number;
  constructor(public serv: DbService, private route: ActivatedRoute) {
    route.params.subscribe(params => this.id = params['id']);
   }

  ngOnInit() {
   this.data =  this.serv.getDetailsData(this.id);
  }

}
