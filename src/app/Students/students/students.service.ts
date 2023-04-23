import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private baseUrl: string | null = 'http://104.210.221.168/api/Students';

  constructor(private http: HttpClient) { }

  getStudents(pageNumber: number = 50, pageSize: number = 10, sortOrder: string = "", sortBy: string = "", searchString: string = ""): Observable<any> {
    if (this.baseUrl != null) {
      this.http.head(this.baseUrl, {observe: 'response'})
        .pipe(
          map(response => response.headers.get('Location'))
        )
        .subscribe(redirectUrl => this.baseUrl = redirectUrl);
    }
    let url = `${this.baseUrl}/withSorts?pageNumber=${pageNumber}&pageSize=${pageSize}&sortOrder=${sortOrder}&sortBy=${sortBy}&searchString=${searchString}`;
    return this.http.get<any[]>(url, {observe: 'response'});
  }
}
