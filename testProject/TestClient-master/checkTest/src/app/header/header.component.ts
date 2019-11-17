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

  constructor(private sharedService:SharedService,
    private router:Router,private SharedService:SharedService,private globalVariable:GlobalVariables) {
      this.globalVariable.getUserChangeEmitter().subscribe((res)=>{
        this.currentUser=res;
        this.userDataLetter=res.Name.substring(0,1).toUpperCase();
      })
     }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem("currentUser"));
    this.userDataLetter=this.currentUser.Name.substring(0,1).toUpperCase();
  }
  ishome(){
  this.sharedService.isHome=true;
  this.router.navigate['/Homepage'];
  }
  goToUserPage(){
    
  }
}
