import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GlobalVariables } from '../global/global-variable';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  isHome: boolean = true;
  currentUser = null;
  isManager:boolean=false;
  constructor(private http:HttpClient,private globalVariable:GlobalVariables) { }
  publicQuestion( questionId:number){
    debugger;
    return this.http.get(environment.baseRoute+"publicQuestion/"+questionId,this.globalVariable.httpOptions);
  }
}
