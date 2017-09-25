import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { StudentComponent } from './student.component';

import { DbService } from './db/db.service';
import { StudentDetailComponent } from './student-detail.component';

const MY_ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: AppComponent},
  {path: 'students', component: StudentComponent},
  {path: 'profile/:id', component: StudentDetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(MY_ROUTES)
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
