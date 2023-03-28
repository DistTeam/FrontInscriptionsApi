import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {FormStudentComponent} from "./Students/form-create-student/form-student.component";
import {FormEditStudentComponent} from "./Students/form-edit-student/form-edit-student.component";
import {FormSubjectComponent} from "./subject/form-create-subject/form-subject.component";
import {FormEditSubjectComponent} from "./subject/form-edit-subject/form-edit-subject.component";


const routes: Routes = [
  { path: 'create-student', component: FormStudentComponent},
  {path:'edit-student',component: FormEditStudentComponent},
  {path:'create-subject',component:FormSubjectComponent},
  {path:'edit-subject',component: FormEditSubjectComponent}
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
