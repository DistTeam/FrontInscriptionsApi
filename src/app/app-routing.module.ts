import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {FormStudentComponent} from "./Students/form-create-student/form-student.component";
import {FormEditStudentComponent} from "./Students/form-edit-student/form-edit-student.component";
import {FormSubjectComponent} from "./subject/form-create-subject/form-subject.component";
import {FormEditSubjectComponent} from "./subject/form-edit-subject/form-edit-subject.component";
import {ShowInspectionComponent} from "./subject/show-inspection/show-inspection.component";
import {CreateInscriptionsComponent} from "./inscriptions/form-create-inscriptions/create-inscriptions.component";
import {FormEditInscriptionsComponent} from "./inscriptions/form-edit-inscriptions/form-edit-inscriptions.component";
import {ViewInscriptionComponent} from "./inscriptions/view-inscription/view-inscription.component";
import {StudentsComponent} from "./Students/students/students.component";
import { HomeComponent } from './home/home.component';
import {DetailsSudentComponent} from "./Students/details-sudent/details-sudent.component";
import {LogingComponent} from "./loging/loging.component";
import {MenuComponent} from "./menu/menu.component";

const routes: Routes = [
  { path: 'create-student', component: FormStudentComponent},
  { path: 'edit-student/:id', component: FormEditStudentComponent },
  {path:'create-subject',component:FormSubjectComponent},
  {path:'edit-subject',component: FormEditSubjectComponent},
  {path:'view-subject',component: ShowInspectionComponent},
  {path:'create-inscription',component:CreateInscriptionsComponent},
  {path:'edit-inscription',component: FormEditInscriptionsComponent},
  {path:'view-inscription',component: ViewInscriptionComponent},
  {path:'view-student', component: StudentsComponent},
  {path: 'home-component', component: HomeComponent},
  { path: 'edit-subject/:id', component: FormEditSubjectComponent },
  { path: 'details-student/:id', component: DetailsSudentComponent},
  //{ path: 'home', component: MenuComponent, outlet: 'principal' },
  //{ path: 'create-student', component: FormStudentComponent, outlet: 'menu' },
  /*{ path: 'edit-student/:id', component: FormEditStudentComponent, outlet: 'menu'  },
  {path:'create-subject',component:FormSubjectComponent, outlet: 'menu' },
  {path:'edit-subject',component: FormEditSubjectComponent, outlet: 'menu' },
  {path:'view-subject',component: ShowInspectionComponent, outlet: 'menu' },
  {path:'create-inscription',component:CreateInscriptionsComponent, outlet: 'menu' },
  {path:'edit-inscription',component: FormEditInscriptionsComponent, outlet: 'menu' },
  {path:'view-inscription',component: ViewInscriptionComponent, outlet: 'menu' },
//  {path:'view-student', component: StudentsComponent, outlet: 'menu' },*/
 // {path: 'home-component', component: HomeComponent},
 /* { path: 'edit-subject/:id', component: FormEditSubjectComponent, outlet: 'menu'  },
  { path: 'details-student/:id', component: DetailsSudentComponent, outlet: 'menu' },
  { path: 'edit-inscriptions/:id', component: FormEditInscriptionsComponent, outlet: 'menu'  },*/
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
