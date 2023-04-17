import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private baseUrl = 'https://inscriptions.azurewebsites.net/api/Students';

  constructor(private http: HttpClient) { }

  getStudents(pageNumber: number = 50, pageSize: number = 10, sortOrder: string = "", sortBy: string = "", searchString: string = ""): Observable<any> {
    let url = `${this.baseUrl}/withSorts?pageNumber=${pageNumber}&pageSize=${pageSize}&sortOrder=${sortOrder}&sortBy=${sortBy}&searchString=${searchString}`;
    return this.http.get<any[]>(url, {observe: 'response'});
  }
}
