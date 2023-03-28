import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SericeSubjectsService {
  readonly subjectAPIUrl="https://localhost:7243/api"
  readonly inscriptionAPIUrl="https://localhost:7243/api/Inscriptions"
  constructor(private http:HttpClient) { }

  getInspectionList():Observable<any[]>{
  return this.http.get<any>(this.subjectAPIUrl+'/Subjects');

  }
  addInspection(data:any){
  return this.http.post(this.subjectAPIUrl+'/Subjects', data);
  }
  updateInspection(id:number|String, data:any){
  return this.http.put(this.subjectAPIUrl+`/Subjects/${id}`, data);
  }

  getInspectionListInscriptions():Observable<any[]>{
    return this.http.get<any>(this.inscriptionAPIUrl+'/all');

  }

  getInspectionById(id: number | string): Observable<any> {
    return this.http.get<any>(`${this.inscriptionAPIUrl}/details/${id}`);
  }

}
