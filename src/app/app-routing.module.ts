import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {FormStudentComponent} from "./Students/form-create-student/form-student.component";
import {FormEditStudentComponent} from "./Students/form-edit-student/form-edit-student.component";


const routes: Routes = [
  { path: 'create-student', component: FormStudentComponent},{
  path:'edit-student',component: FormEditStudentComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
