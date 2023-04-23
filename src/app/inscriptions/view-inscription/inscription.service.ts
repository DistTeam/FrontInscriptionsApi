import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  private baseUrlInscriptionsGetAll: string | null = '/api/Inscriptions';

  constructor(private http: HttpClient) { }
  getInscriptions(pageNumber: number = 50, pageSize: number = 10, sortOrder: string = "asc", sortBy: string = "", searchString: string = ""): Observable<any> {
    this.baseUrlInscriptionsGetAll = "http://104.210.221.168/api/Inscriptions"
    console.log(this.baseUrlInscriptionsGetAll);
    this.http.get(this.baseUrlInscriptionsGetAll, {
      headers: new HttpHeaders({
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
      }),
      observe: 'response',
      responseType: 'text',
    }).pipe(
      tap((res) => {
        const redirectedUrl = res.url;
        console.log('Redirected URL:', redirectedUrl);
      })
    ).subscribe();
    console.log("entro"  + " page " + pageSize  + " como " + sortOrder  + " por " + sortBy + " dsearch " +searchString)
    let url = `${this.baseUrlInscriptionsGetAll}/all?pageNumber=${pageNumber}&pageSize=${pageSize}&sortOrder=${sortOrder}&sortBy=${sortBy}`;
    return this.http.get<any[]>(url, {observe: 'response'});
  }
}
