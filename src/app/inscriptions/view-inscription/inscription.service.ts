import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  private baseUrlInscriptionsGetAll: string | null = 'http://104.210.221.168/api/Inscriptions';

  constructor(private http: HttpClient) { }
  getInscriptions(pageNumber: number = 50, pageSize: number = 10, sortOrder: string = "asc", sortBy: string = "", searchString: string = ""): Observable<any> {
    this.baseUrlInscriptionsGetAll = "http://104.210.221.168/api/Inscriptions";
    console.log(this.baseUrlInscriptionsGetAll);
    this.http.get(this.baseUrlInscriptionsGetAll, { observe: 'response' }).pipe(
      map(response => this.baseUrlInscriptionsGetAll = response.headers.get('Location'))
    );
    console.log(this.baseUrlInscriptionsGetAll);
    console.log("entro"  + " page " + pageSize  + " como " + sortOrder  + " por " + sortBy + " dsearch " +searchString)
    let url = `${this.baseUrlInscriptionsGetAll}/all?pageNumber=${pageNumber}&pageSize=${pageSize}&sortOrder=${sortOrder}&sortBy=${sortBy}`;
    return this.http.get<any[]>(url, {observe: 'response'});
  }
}
