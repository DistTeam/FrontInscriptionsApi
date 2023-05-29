import { Component } from '@angular/core';
import {LogingComponent} from "../loging/loging.component";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  public closeLogin: LogingComponent;

  constructor() {
  }

  closeLoginM(){
    this.closeLogin.deleteToken();
  }
}
