import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentForm2Component } from './student-form2/student-form2.component';
import { StudentForm3Component } from './student-form3/student-form3.component';



const routes: Routes = [
  {path:'', redirectTo:'two', pathMatch:'full'},
  
  {path:'one', component:StudentFormComponent },
  {path:'two', component:StudentForm2Component},
  {path: 'three/:id', component: StudentForm3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
