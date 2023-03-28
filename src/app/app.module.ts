import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule} from "@angular/forms";
import {StudentComponent} from "./Students/student.component";
import {FormSubjectComponent} from './subject/form-create-subject/form-subject.component';
import {FormEditSubjectComponent} from "./subject/form-edit-subject/form-edit-subject.component";
import {FormEditStudentComponent} from "./Students/form-edit-student/form-edit-student.component";
import {SubjectComponent} from "./subject/subject.component";
import { InscriptionsComponent } from './inscriptions/inscriptions.component';

@NgModule({
  declarations: [AppComponent,SubjectComponent, StudentComponent,FormEditStudentComponent, FormSubjectComponent,FormEditSubjectComponent, InscriptionsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
