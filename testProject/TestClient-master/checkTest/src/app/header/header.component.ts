import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';
import { GlobalVariables } from '../global/global-variable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  currentUser:any;
  userDataLetter:string="";
name:string="";
  constructor(private sharedService:SharedService,
    private router:Router,private SharedService:SharedService,private globalVariable:GlobalVariables) {
      this.globalVariable.getUserChangeEmitter().subscribe((res)=>{
        this.currentUser=res;
        // this.userDataLetter=res.Name;
        this.userDataLetter=res.Name.substring(0,1).toUpperCase();
        this.name=res.Name;
      })
     }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem("currentUser"));
    this.userDataLetter=this.currentUser.Name.substring(0,1).toUpperCase();
    this.name=this.currentUser.Name;
    console.log(this.sharedService.isManager);
  }
  ishome(){
  this.sharedService.isHome=true;
  this.router.navigate['/Homepage'];
  }
  goToUserPage(){
    
  }
  signOut(){
    this.globalVariable.userChange.next(null);
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    this.SharedService.isManager=false;
    // this.name="";
    this.currentUser=null;
    this.router.navigate['/login'];
    
  }
}
