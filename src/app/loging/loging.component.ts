import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AppService} from "src/app/service-app.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute} from "@angular/router";
import {UserModel} from "./UserModel";

@Component({
  selector: 'app-loging',
  templateUrl: './loging.component.html',
  styleUrls: ['./loging.component.css']
})
export class LogingComponent {
  public user: any;
  public pasword: any;
  public array: any[] = [];
  public remember: any = false;
  constructor(
    private toastr: ToastrService,
    public service: AppService,
    private route: ActivatedRoute
  ) {
    // this.getRedis();
    if (this.array !== null){
      this.user = this.array[0];
      this.pasword = this.array[1];
    }

  }

  putUser() {
    if (this.remember){
      this.service.putUsers().subscribe(
        res => {
          this.toastr.success("exitoso");
          this.getLogin();
        },
        err => {
          this.toastr.error(err);
          console.log(err);
        }
      );
    }
    else {
      this.getLogin();
    }
  }

  getLogin() {
    this.service.getLoging().subscribe(
      res => {
        this.toastr.success(res.toString());
        const tokenString = JSON.stringify(res);
        const token = JSON.parse(tokenString);
        console.log("token", token.token);

      },
      err => {
        this.toastr.error(err);
        console.log(err);
      }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formDataUser = new UserModel();
  }

  private getRedis() {
    this.service.getRedis().subscribe(
      res => {
        this.toastr.success(res.toString());
        const redisString = JSON.stringify(res);
        const redis = JSON.parse(redisString);
        this.array = redis;
      },
      err => {
        this.toastr.error(err);
        console.log(err);
      }
    );
  }
}
