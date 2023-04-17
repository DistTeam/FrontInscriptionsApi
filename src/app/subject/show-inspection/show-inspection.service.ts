import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowInspectionService {

  private baseUrl = 'https://inscriptions.azurewebsites.net/api/Subjects';

  constructor(private http: HttpClient) { }

  getSubjects(sortBy: string = "Id", sortOrder: string = "asc", page: number = 1, pageSize: number = 10): Observable<any> {
    let url = `${this.baseUrl}/withSorts?sortBy=${sortBy}&sortOrder=${sortOrder}&page=${page}&pageSize=${pageSize}`;
    return this.http.get<any[]>(url, { observe: 'response' });
  }
}
