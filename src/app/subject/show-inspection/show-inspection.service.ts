import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowInspectionService {

  private baseUrl: string | null = 'http://104.210.221.168/api/Subjects';

  constructor(private http: HttpClient) { }

  getSubjects(sortBy: string = "Id", sortOrder: string = "asc", page: number = 1, pageSize: number = 10): Observable<any> {
    if (this.baseUrl != null) {
      this.http.head(this.baseUrl, {observe: 'response'})
        .pipe(
          map(response => response.headers.get('Location'))
        )
        .subscribe(redirectUrl => this.baseUrl = redirectUrl);
    }
    let url = `${this.baseUrl}/withSorts?sortBy=${sortBy}&sortOrder=${sortOrder}&page=${page}&pageSize=${pageSize}`;
    return this.http.get<any[]>(url, { observe: 'response' });
  }
}
