import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {SericeSubjectsService} from "src/app/serivce-subjects.service";

@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styleUrls: ['./show-inspection.component.css']
})
export class ShowInspectionComponent implements OnInit{
  public page: number=1;
  inspectionList$!:Observable<any[]>;
  inspectionList: any[]=[];
  sortColumn: string = 'name';
  sortAsc: boolean = true;
  selectedState = 1;
  activoSeleccionado: string ='1';
  listFilter: any[]=[]




  constructor( private service:SericeSubjectsService) {
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
