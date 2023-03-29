import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {AppService} from "src/app/service-app.service";


@Component({
  selector: 'app-form-subject',
  templateUrl: './form-subject.component.html',
  styleUrls: ['./form-subject.component.css']
})
export class FormSubjectComponent {
  public page: number=1;
  inspectionList$!:Observable<any[]>;
  inspectionList: any[]=[];
  sortColumn: string = 'name';
  sortAsc: boolean = true;
  selectedState = 1;
  activoSeleccionado: string ='1';
  constructor( private service:AppService) {
  }

  ngOnInit(): void {
    this.inspectionList$ = this.service.getInspectionList();
    this.inspectionList$.subscribe((inspectionList) => {
      this.inspectionList = inspectionList;
    });
  }
  getInspectionList() {
    this.inspectionList$ = this.service.getInspectionList();
    this.inspectionList$.subscribe((inspectionList) => {
      this.inspectionList = inspectionList;
    });
  }
  sortByName(): void {
    this.sortColumn = 'subjectName';
    this.sortAsc = !this.sortAsc;
    this.inspectionList.sort((a, b) => {
      const nameA = a.subjectName.toUpperCase();
      const nameB = b.subjectName.toUpperCase();
      if (nameA < nameB) {
        return this.sortAsc ? -1 : 1;
      }
      if (nameA > nameB) {
        return this.sortAsc ? 1 : -1;
      }
      return 0;
    });
  }
}






