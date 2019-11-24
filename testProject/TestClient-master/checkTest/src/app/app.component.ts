import { Component, OnInit } from '@angular/core';
import { GlobalVariables } from './global/global-variable';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {


  constructor(private globalVariable: GlobalVariables, private router: Router) {
    router.events.subscribe((url:any) => {
      if (url.url.includes("/test/"))
        this.displayHeader = false;
      else
        this.displayHeader = true;
    }
    );
  }
  displayHeader: boolean = true;
  ngOnInit(): void {
    var token = localStorage.getItem("token");
    if (token != null && token != "")
      this.globalVariable.setToken(token);
  }
}
