import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  isHome: boolean = true;
  currentUser = null;
  isManager:boolean=false;
  constructor(private http:HttpClient) { }
  publicQuestion( questionId:number){
    debugger;
    return this.http.get(environment.baseRoute+"publicQuestion/"+questionId);
  }
}
