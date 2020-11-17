import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentForm2Component } from './student-form2/student-form2.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentForm3Component } from './student-form3/student-form3.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentFormComponent,
    StudentForm2Component,
    StudentForm3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
