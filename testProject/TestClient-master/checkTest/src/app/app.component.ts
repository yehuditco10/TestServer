import { Component, OnInit } from '@angular/core';
import { GlobalVariables } from './global/global-variable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
    
    constructor(private globalVariable: GlobalVariables){    
    }

  ngOnInit(): void {
  var token = localStorage.getItem("token");
  if (token != null && token != "")
    this.globalVariable.setToken(token);
 }
//    title = 'checkTest';


}
