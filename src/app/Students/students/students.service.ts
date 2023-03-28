import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Students } from './students.component';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private baseUrl = 'https://localhost:7243/api/Students';

  constructor(private http: HttpClient) { }

  getStudents(pageNumber: number = 50, pageSize: number = 10, sortOrder: string = "", sortBy: string = "", searchString: string = ""): Observable<any[]> {
    let url = `${this.baseUrl}/withSorts?pageNumber=${pageNumber}&pageSize=${pageSize}&sortOrder=${sortOrder}&sortBy=${sortBy}&searchString=${searchString}`;
    return this.http.get<any[]>(url);
  }
}
