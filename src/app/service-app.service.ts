import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {StudentModel} from "./Students/student.model";
import {InscriptionsModel} from "./inscriptions/InscriptionsModel";
import {SubjectModel} from "./subject/subject.model";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  readonly APIUrl="https://localhost:7243/api"
  readonly inscriptionAPIUrl="https://localhost:7243/api/Inscriptions"
  constructor(private http:HttpClient) { }
  formDataStudent:StudentModel = new StudentModel();
  formDataSubject:SubjectModel = new SubjectModel();
  formDataInscription:InscriptionsModel = new InscriptionsModel();
  getInspectionList():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/Subjects');
  }
  putSubject(){
    return this.http.put(`${this.APIUrl}/subjects${this.formDataSubject.subjectId}`,this.formDataSubject);

  }
  putStudent(){
    return this.http.put(`${this.APIUrl}/students${this.formDataStudent.studentId}`,this.formDataStudent);
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

  postInscription(){
    return this.http.post(this.APIUrl+'/inscription',this.formDataInscription);
  }
  getInspectionListInscriptions():Observable<any[]>{
    return this.http.get<any>(this.inscriptionAPIUrl+'/all');

  }
  postSubject(){
    return this.http.post(this.APIUrl+'/subjects',this.formDataSubject);
  }

  getInspectionById(id: number | string): Observable<any> {
    return this.http.get<any>(`${this.inscriptionAPIUrl}/details/${id}`);
  }
}
