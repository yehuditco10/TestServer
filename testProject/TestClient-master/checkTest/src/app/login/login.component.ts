import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Teachers } from '../shared/models/teachers';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { GlobalVariables } from '../global/global-variable';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {
  status: string = 'login';
  userName: string;
  password: string;
  t: Teachers = new Teachers();
  constructor(private globalVariable: GlobalVariables, private loginS: LoginService, private router: Router, private RegisterService: RegisterService, private SharedService: SharedService) {


  }

  ngOnInit() {

  }

  login() {
    this.loginS.login(this.t.teacherName, this.t.teacherPassword).subscribe(
      (res: any) => {
        if (res) {
          this.globalVariable.setToken(res.body.access_token);
          this.loginS.getUser().subscribe((res1:any) => {
            this.globalVariable.userChange.next(res1);
            localStorage.setItem("currentUser",JSON.stringify(res1));
            this.SharedService.currentUser = res1;
            if (res1['isManager'] == true)
              this.router.navigate(["/headerManager"]);
            else this.router.navigate(["/TestList"]);
          }, err => { console.log(err); })
        }
      },
      (err) => {
        alert("שם משתמש או סיסמא שגויים");
      });
  }

  register() {
    this.RegisterService.register(this.t).subscribe(
      (res) => {
        this.loginS.login(this.t.teacherName, this.t.teacherPassword).subscribe(
          (res: any) => {
            if (res) {
              this.globalVariable.setToken(res.body.access_token);
              this.loginS.getUser().subscribe((res1:any) => {
                this.globalVariable.userChange.next(res1);
                localStorage.setItem("currentUser",JSON.stringify(res1));
                this.SharedService.currentUser = res1;
                if (res1['isManager'] == true)
                  this.router.navigate(["/headerManager"]);
                else this.router.navigate(["/TestList"]);
              }, err => { console.log(err); })
            }
          });
        this.router.navigate(["/menu"]);
      },
      (err) => {
        alert("err")
      }
    )
  }
  Forgotpassword(id: number) {
    this.loginS.Forgotpassword(id).subscribe(res => {
      alert("הסיסמא נשלחה למייל שלך")
    })
  }
  clearTeacher() {
    this.t = new Teachers();
  }
}
