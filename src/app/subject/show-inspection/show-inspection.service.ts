import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShowInspectionService {

  private baseUrl = 'https://localhost:7243/api/Students';

  constructor(private http: HttpClient) { }

  /*getSubject(pageNumber: number = 50, pageSize: number = 10, sortOrder: string = "", sortBy: string = "", searchString: string = ""): Observable<any> {
    let url = `${this.baseUrl}/withSorts?pageNumber=${pageNumber}&pageSize=${pageSize}&sortOrder=${sortOrder}&sortBy=${sortBy}&searchString=${searchString}`;
    return this.http.get<any[]>(url, {observe: 'response'});
  }*/

  getSubjects(page: number, pageSize: number, sortBy: string, sortOrder: string):Observable<any> {
    const url = `https://localhost:7243/api/Subjects/withSorts?sortBy=${sortBy}&sortOrder=${sortOrder}&page=${page}&pageSize=${pageSize}`;
    return this.http.get<any[]>(url, {observe: 'response'});
  }
}
