import { HttpClient } from '@angular/common/http';
import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent implements OnInit{
  public nombre = "Jorge Martinez ";
  public array: any[] = [];
  pageSize: number = 10;
  currentPage: number = 1;

  public cambiarNombre() {
    this.nombre = "Ivan Martinez";
    this.getStudents(this.currentPage = this.currentPage + 1, 10, "1", "studentLn", "");
  }

  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.getStudents(1, 10, "0","","");
  }

  getStudents(pageNumber: number, pageSize: number, sortOrder: string, sortBy: string, searchString: string): void {
    this.studentsService.getStudents(pageNumber, pageSize, sortOrder, sortBy, searchString).subscribe(students => this.array = students);
  }

}

export interface Students {
  studentId: number;
  studentName: string;
}
