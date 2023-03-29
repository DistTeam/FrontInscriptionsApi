import {Component, OnInit} from '@angular/core';
import {AppService} from "../../service-app.service";
import {NgForm} from '@angular/forms';
import {StudentModel} from "../student.model";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.css']
})
export class FormStudentComponent implements OnInit {
  constructor(public service: AppService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }

  addStudent(form: NgForm) {
    this.service.postStudent().subscribe(
      res => {
        this.toastr.success('Agregado con exito', 'Inscripciones UPTC');
        this.resetForm(form);
      },
      err => {
        this.toastr.error(err);
      }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formDataStudent = new StudentModel();
  };
}
