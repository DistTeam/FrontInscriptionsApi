import { Component } from '@angular/core';
import {StudentModel} from "../student.model";
import {ToastrService} from "ngx-toastr";
import {AppService} from "../../service-app.service";
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form-edit-student',
  templateUrl: './form-edit-student.component.html',
  styleUrls: ['./form-edit-student.component.css']
})
export class FormEditStudentComponent {
  public studentId: number;
  public student: StudentModel;

  constructor(
    private toastr: ToastrService,
    public service: AppService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.studentId = params['id'];
      this.getStudent(this.studentId);
    });
  }

  getStudent(id: number): void {
    this.service.getStudentId(id).subscribe(
      res => {
        this.student = res;
        console.log(res);
        this.toastr.success("Estudiante cargado", "Inscripciones UPTC");
      },
      err => {
        this.toastr.error(err);
        console.log(err);
      }
    );
  }

  editStudent(form: NgForm) {
    this.service.putStudent().subscribe(
      res => {
        this.toastr.success('Estudiante modificado con exito', 'Inscripciones UPTC');
        this.resetForm(form);
      },
      err => {
        this.toastr.error(err);
        console.log(err);
      }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formDataStudent = new StudentModel();
  }
}
