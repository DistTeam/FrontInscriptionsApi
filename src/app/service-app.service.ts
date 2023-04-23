import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {StudentModel} from "./Students/student.model";
import {InscriptionsModel} from "./inscriptions/InscriptionsModel";
import {SubjectModel} from "./subject/subject.model";
import {map} from 'rxjs/operators';
import {InscriptionForPost} from "./inscriptions/InscriptionForPost";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  readonly APIUrl = "http://104.210.221.168/api";

  constructor(private http: HttpClient) {
  }

  formDataStudent: StudentModel = new StudentModel();
  formDataSubject: SubjectModel = new SubjectModel();
  formDataInscription: InscriptionsModel = new InscriptionsModel();
  formDataInscriptionPost:InscriptionForPost= new InscriptionForPost();
  getInspectionList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Subjects');
  }

  putSubject() {
    return this.http.put(`${this.APIUrl}/subjects/${this.formDataSubject.subjectId}`, this.formDataSubject);
  }

  putStudent() {
    return this.http.put(`${this.APIUrl}/students/${this.formDataStudent.studentId}`, this.formDataStudent);
  }

  postStudent() {
    return this.http.post(this.APIUrl + '/students/url', this.formDataStudent);
  }

  uploadImg(imageFile: File) {
    const formData = new FormData();
    const newFileName = this.formDataStudent.studentName + this.formDataStudent.studentDoc + ".jpg";
    formData.append('file', imageFile, newFileName);
    return this.http.post<string>(this.APIUrl+'/students/uploadImage', formData);
  }

  addInspection(data: any) {
    return this.http.post(this.APIUrl + '/Subjects', data);
  }

  updateInspection(id: number) {
    const data = {
      studentId: this.formDataInscriptionPost.StudentId,
      subjectName: this.formDataInscriptionPost.SubjectName
    }
      return this.http.put(this.APIUrl+`/Inscriptions/${id}`,data);
  }

  getSubjectById(subjectId: number): Observable<SubjectModel> {
    return this.http.get<SubjectModel>(`${this.APIUrl}/subjects/${subjectId}`);
  }

  getStudentId(studentId: number): Observable<StudentModel> {
    return this.http.get<StudentModel>(`${this.APIUrl}/students/${studentId}`);
  }

  postInscription() {
    const data = {
      studentId: this.formDataInscriptionPost.StudentId,
      subjectName: this.formDataInscriptionPost.SubjectName
    };
    return this.http.post(this.APIUrl+'/Inscriptions',data);
  }

  getInspectionListInscriptions(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl+'/inscriptions/all');

  }

  postSubject() {
    return this.http.post(this.APIUrl + '/subjects', this.formDataSubject);
  }

  getInscriptionForId(id: number | string): Observable<any> {
    return this.http.get<any>(`${this.APIUrl}/inscriptions/details/${id}`);
  }
}
