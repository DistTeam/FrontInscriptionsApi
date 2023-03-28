import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {SericeSubjectsService} from "../../serivce-subjects.service";
import * as XLSX from 'xlsx';
import { FileSaverService } from 'ngx-filesaver';

@Component({
  selector: 'app-view-inscription',
  templateUrl: './view-inscription.component.html',
  styleUrls: ['./view-inscription.component.css']
})
export class ViewInscriptionComponent {
  exportTableToExcel() {
    const table = document.getElementById('myTable'); // Replace 'myTable' with the ID of your table
    const workbook = XLSX.utils.table_to_book(table);
    const fileName = 'myTable.xlsx'; // Replace 'myTable' with the name you want to give the file
    const buffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([buffer], { type: 'application/octet-stream' });
    this.fileSaverService.save(blob, fileName);
  }
  public page: number=1;
  inspectionList$!:Observable<any[]>;
  inspectionList: any[]=[];
  sortColumn: string = 'name';
  sortAsc: boolean = true;
  selectedState = 1;
  activoSeleccionado: string ='1';
  constructor( private service:SericeSubjectsService,private fileSaverService: FileSaverService) {
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
