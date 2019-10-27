import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Teachers } from '../shared/models/teachers';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { GlobalVariables } from '../global/global-variable';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  t: Teachers = new Teachers(null, null, null,null);
  constructor(private globalVariable: GlobalVariables,private loginS: LoginService, private router: Router,private RegisterService:RegisterService) {


  }

  ngOnInit() {

  }

  login() {
    this.loginS.login(this.t.teacherName, this.t.teacherPassword).subscribe(
      (res: any) => {
        if (res) {
          this.globalVariable.setToken(res.body.access_token);
          this.loginS.getUser().subscribe((res) => {
            this.router.navigate(["/TestList"]);
          }, err => { console.log(err);})
        }
      }, (err) => {
        alert("שם משתמש או סיסמא שגויים");
      });
  }
  register() {
    this.RegisterService.register(this.t).subscribe(
      (res) => {
        // alert("good");
        // alert(res);
        this.router.navigate(["/menu"]);


      },
      (err) => {
       alert("משתמש קיים")
      }
    )
  }
  Forgotpassword(id:number){
    this.loginS.Forgotpassword(id).subscribe(res=>{
      alert("הסיסמא נשלחה למייל שלך")
    })
  }
}
