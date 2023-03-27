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
import {FormStudentComponent} from "./Students/form-create-student/form-student.component";
import {FormEditStudentComponent} from "./Students/form-edit-student/form-edit-student.component";
import {StudentComponent} from "./Students/student.component";


@NgModule({
  declarations: [AppComponent, FormStudentComponent,FormEditStudentComponent,StudentComponent],
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
