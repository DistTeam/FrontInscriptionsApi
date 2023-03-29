import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {StudentModel} from "./Students/student.model";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  readonly APIUrl="https://localhost:7243/api"
  readonly inscriptionAPIUrl="https://localhost:7243/api/Inscriptions"
  constructor(private http:HttpClient) { }
  formDataStudent:StudentModel = new StudentModel();
  getInspectionList():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/Subjects');

  }
  postStudent(){
    return this.http.post(this.APIUrl+'/students',this.formDataStudent);
  }
  addInspection(data:any){
  return this.http.post(this.APIUrl+'/Subjects', data);
  }
  updateInspection(id:number|String, data:any){
  return this.http.put(this.APIUrl+`/Subjects/${id}`, data);
  }

  getInspectionListInscriptions():Observable<any[]>{
    return this.http.get<any>(this.inscriptionAPIUrl+'/all');

  }

  getInspectionById(id: number | string): Observable<any> {
    return this.http.get<any>(`${this.inscriptionAPIUrl}/details/${id}`);
  }
}
