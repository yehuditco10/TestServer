import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Teachers } from '../shared/models/teachers';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  t: Teachers = new Teachers(null, null, null,null);
  constructor(private loginS: LoginService, private router: Router,private RegisterService:RegisterService) {


  }

  ngOnInit() {

  }

  login() {
    this.loginS.login(this.t).subscribe(
      (res:any) => {
      //  var token=res.body.access_token;
      //  localStorage.setItem("token",token);
      //  this.loginS.getUserData().subscribe((res)=>{
      //    console.log(res);
      //    // if(res==0)
      this.router.navigate(["/TestList"]);
      //    // else if(res==1)
      //    // this.router.navigate(["/menu-manager"]);

      //  });
      },
      (err) => {
      alert(err);
      }
    )
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

}
