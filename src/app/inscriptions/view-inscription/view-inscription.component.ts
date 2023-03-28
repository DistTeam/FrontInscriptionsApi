import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {SericeSubjectsService} from "../../serivce-subjects.service";

@Component({
  selector: 'app-view-inscription',
  templateUrl: './view-inscription.component.html',
  styleUrls: ['./view-inscription.component.css']
})
export class ViewInscriptionComponent {
  public page: number=1;
  inspectionList$!:Observable<any[]>;
  inspectionList: any[]=[];
  sortColumn: string = 'name';
  sortAsc: boolean = true;
  selectedState = 1;
  activoSeleccionado: string ='1';
  constructor( private service:SericeSubjectsService) {
  }

  ngOnInit(): void {
    this.inspectionList$ = this.service.getInspectionListInscriptions();
    this.inspectionList$.subscribe((inspectionList) => {
      this.inspectionList = inspectionList;
    });
  }

  getInspectionList() {
    this.inspectionList$ = this.service.getInspectionListInscriptions();
    this.inspectionList$.subscribe((inspectionList) => {
      this.inspectionList = inspectionList;
    });
  }
  sortByName(): void {

  }
}
