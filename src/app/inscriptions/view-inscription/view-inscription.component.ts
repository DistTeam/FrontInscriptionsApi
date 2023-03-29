import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {AppService} from "../../service-app.service";
import * as XLSX from 'xlsx';
import { FileSaverService } from 'ngx-filesaver';
import {InscriptionServiceService} from "./inscription.service.service";
import {StudentModel} from "../../Students/student.model";

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
  public array: any[] = [];
  pageSize: number = 10;
  backPage: number = 0;
  currentPage: number = 1;
  netxPage: number = 2;
  currentSortOrder: string = "asc";
  curreentSortBy: string = "desc";
  currentNameFilter: string = "";
  tamanio: number = 0;
  myFunctionName(studentLn:string):void{
    this.sortBy(studentLn);
    this.changeIconName();
  }
  iconName = 'keyboard_arrow_down';
  clickedName : boolean = true;
  changeIconName() {
    if(this.clickedName==true){
      this.iconLn = 'keyboard_arrow_down'
      this.iconName = 'keyboard_arrow_up'
      this.iconId = 'keyboard_arrow_down'
      this.clickedName = false
    }else {
      this.clickedName = true
      this.iconName = 'keyboard_arrow_down'
      this.iconId = 'keyboard_arrow_down'
      this.iconLn = 'keyboard_arrow_down'
    }
  }
  myFunctionLn(studentLn:string):void{
    this.sortBy(studentLn);
    this.changeIconLn();
  }
  iconLn = 'keyboard_arrow_down';
  clickedLn : boolean = true;
  changeIconLn() {
    if(this.clickedLn==true){
      this.iconLn = 'keyboard_arrow_up'
      this.iconName = 'keyboard_arrow_down'
      this.iconId = 'keyboard_arrow_down'
      this.clickedLn = false
    }else {
      this.clickedLn = true
      this.iconLn = 'keyboard_arrow_down'
      this.iconName = 'keyboard_arrow_down'
      this.iconId = 'keyboard_arrow_down'
      this.iconLn = 'keyboard_arrow_down'
    }
  }
  myFunctionId(studentId:string):void{
    this.sortBy(studentId);
    this.changeIconId();
  }
  iconId = 'keyboard_arrow_down';
  clickedId : boolean = true;
  changeIconId() {
    if(this.clickedId==true){
      this.iconLn = 'keyboard_arrow_down'
      this.iconName = 'keyboard_arrow_down'
      this.iconId = 'keyboard_arrow_up'
      this.clickedId = false
    }else {
      this.clickedId = true
      this.iconId = 'keyboard_arrow_down'
      this.iconName = 'keyboard_arrow_down'
      this.iconId = 'keyboard_arrow_down'
      this.iconLn = 'keyboard_arrow_down'
    }
  }
  populateForm(selectedRecord: StudentModel) {
    this.service.formDataStudent = Object.assign({}, selectedRecord);
  }
  public getNextPage() {
    if (this.currentPage < 19000) {//getMaxPage
      this.getInscription(this.currentPage = this.currentPage + 1, this.pageSize, this.currentSortOrder, this.curreentSortBy, this.currentNameFilter);
      this.getNumberNextPage();
      this.getNumberBackPage();
    }
  }

  public getBackPage() {
    if (this.currentPage > 1) {
      this.getInscription(this.currentPage = this.currentPage - 1, this.pageSize, this.currentSortOrder, this.curreentSortBy, this.currentNameFilter);
      this.actualiceButtons();
    }
  }

  public getNumberNextPage() {
    this.netxPage = this.currentPage + 1;
  }

  public getNumberBackPage() {
    this.backPage = this.currentPage - 1;
  }

  public getPageButtons(page: number) {
    if (page == 0) {
      if (this.currentPage < 19000) {///getmaxpage
        this.getInscription(this.netxPage, this.pageSize, this.currentSortOrder, this.curreentSortBy, this.currentNameFilter);
        this.currentPage = this.currentPage + 1;
        this.actualiceButtons();
      }
    }
    else {
      if (this.backPage > 0) {
        this.getInscription(this.backPage, this.pageSize, this.currentSortOrder, this.curreentSortBy, this.currentNameFilter);
        this.currentPage = this.currentPage - 1;
        this.actualiceButtons();
      }
    }
  }

  public sortBy(sortBy:string) {
    if (this.currentSortOrder === "asc") {
      this.currentSortOrder = "desc";
    } else if (this.currentSortOrder === "desc"){
      this.currentSortOrder = "asc";
    }
    this.curreentSortBy = sortBy;
    this.getInscription(this.currentPage, this.pageSize, this.currentSortOrder, this.curreentSortBy, this.currentNameFilter);
  }

  filterByName(filter: string) {
    this.currentNameFilter = filter;
    this.getInscription(this.currentPage, this.pageSize, this.currentSortOrder, this.curreentSortBy, this.currentNameFilter);
  }

  private actualiceButtons() {
    this.getNumberBackPage();
    this.getNumberNextPage();
  }

  private getMaxPage(): number {
    return (this.tamanio/this.pageSize);
  }
  constructor(private serviceIncriptions:InscriptionServiceService, private fileSaverService: FileSaverService , public service:AppService) {
  }
  ngOnInit(): void {
    this.getInscription(1, 10, "asc", "", "");
  }

  getInscription(pageNumber: number, pageSize: number, sortOrder: string, sortBy: string, searchString: string): void {
    console.log("entro"  + " " + pageSize  + " " + sortOrder  + " " + sortBy + searchString)
    this.serviceIncriptions.getInscriptions(pageNumber, pageSize, sortOrder, sortBy, searchString).subscribe(response => {
      this.array = response.body;
      const tamstudents = response.headers.get("tamanio");
      this.tamanio = tamstudents;
      console.log("entro2222"+" " +pageNumber + " " + pageSize  + " " + sortOrder  + " " + sortBy + searchString)
      console.log('El valor de tamstudents es: ' + tamstudents);
    });
  }

  sortByName() {

  }
}



