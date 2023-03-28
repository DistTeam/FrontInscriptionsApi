import { Component } from '@angular/core';
import {SericeSubjectsService} from "../../serivce-subjects.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-form-edit-inscriptions',
  templateUrl: './form-edit-inscriptions.component.html',
  styleUrls: ['./form-edit-inscriptions.component.css']
})
export class FormEditInscriptionsComponent {
  inspectionList$!:Observable<any[]>;
  inspectionList: any[]=[];

  constructor(private service:SericeSubjectsService) {


  }
  ngOnInit(): void {
    this.inspectionList$ = this.service.getInspectionList();
    this.inspectionList$.subscribe((inspectionList) => {
      this.inspectionList = this.inspectionList;
    });
  }
}