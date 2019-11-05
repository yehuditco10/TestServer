import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less']
})
export class HomepageComponent implements OnInit {

  constructor(private router:Router,
  private  SharedService:SharedService) { }

  ngOnInit() {
  }
  testlist(){
this.SharedService.isHome=false;
 this.router.navigate(["/TestList"]);
  }
//[routerLink]="['/TestList']" 
}
