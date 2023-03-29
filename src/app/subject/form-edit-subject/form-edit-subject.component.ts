import { Component } from '@angular/core';
import {AppService} from "src/app/service-app.service";
import {ToastrService} from "ngx-toastr";
import {NgForm} from "@angular/forms";
import {SubjectModel} from "../subject.model";


@Component({
  selector: 'form-edit-subject',
  templateUrl: './form-edit-subject.component.html',
  styleUrls: ['./form-edit-subject.component.css']
})
export class FormEditSubjectComponent {
  constructor(private toastr: ToastrService,public service:AppService) {
  }

  editSubject(form: NgForm) {
    this.service.putSubject().subscribe(
      res => {
        this.toastr.success('Materia modificada con exito', 'Inscripciones UPTC');
        this.resetForm(form);
      },
      err => {
        this.toastr.error(err);
      }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formDataSubject = new SubjectModel();
  };
  ngOnInit(): void {
  }



}






