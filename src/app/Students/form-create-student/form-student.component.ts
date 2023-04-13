import {Component, OnInit} from '@angular/core';
import {AppService} from "../../service-app.service";
import {NgForm} from '@angular/forms';
import {StudentModel} from "../student.model";
import {ToastrService} from "ngx-toastr";
import { BlobServiceClient, StorageSharedKeyCredential } from '@azure/storage-blob';

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.css']
})
export class FormStudentComponent implements OnInit {
  constructor(public service: AppService, private toastr: ToastrService) {
  }
  fileToUpload: File | null = null;
  imageUrl: string | null = null;

  handleFileInput(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  handleDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  handleDrop(event: DragEvent): void {
    event.preventDefault();
    const file = event.dataTransfer?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
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
