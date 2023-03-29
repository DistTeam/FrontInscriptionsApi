import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InscriptionServiceService {
  //https://localhost:7243/api/Inscriptions/all?pageNumber=1&pageSize=10&sortOrder=asc&sortBy=subjectName
  private baseUrlInscriptionsGetAll = 'https://localhost:7243/api/Inscriptions';
  constructor(private http: HttpClient) { }
  getInscriptions(pageNumber: number = 50, pageSize: number = 10, sortOrder: string = "asc", sortBy: string = "", searchString: string = ""): Observable<any> {
    console.log("entro"  + " page " + pageSize  + " como " + sortOrder  + " por " + sortBy + " dsearch " +searchString)
    let url = `${this.baseUrlInscriptionsGetAll}/all?pageNumber=${pageNumber}&pageSize=${pageSize}&sortOrder=${sortOrder}&sortBy=${sortBy}`;
    return this.http.get<any[]>(url, {observe: 'response'});
  }
}
