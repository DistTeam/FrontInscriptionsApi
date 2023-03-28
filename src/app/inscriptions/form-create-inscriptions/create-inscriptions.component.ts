import { Component } from '@angular/core';

@Component({
  selector: 'app-form-create-inscriptions',
  templateUrl: './create-inscriptions.component.html',
  styleUrls: ['./create-inscriptions.component.css']
})
export class CreateInscriptionsComponent {
  fechaActual: string;

  constructor() {
    const fecha = new Date();
    this.fechaActual = fecha.toLocaleDateString();
  }
}
