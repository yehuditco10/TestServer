import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(private sharedService:SharedService,
    private router:Router) { }

  ngOnInit() {
  }
  ishome(){
this.sharedService.isHome=true;
this.router.navigate['/Homepage'];
  }
}
