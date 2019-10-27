import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http'
import { Teachers } from '../shared/models/teachers';
import { environment } from 'src/environments/environment';
import { GlobalService } from '../global/global.service';
import { GlobalVariables } from '../global/global-variable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http:HttpClient,private globalService:GlobalService, private globalVariable: GlobalVariables) { }

  login(userName: string, password: string) {
    const body = new HttpParams()      
    .set('grant_type', 'password')      
    .set('username', userName)
    .set('password', password)
    return this.http.post(environment.baseRoute2+'token', body.toString(), {observe: 'response',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
  }
  getUser(){
    return this.http.post(environment.baseRoute+'getCurrentUser',this.globalVariable.httpOptions );
  }


  Forgotpassword(id){
    return this.http.post(environment.baseRoute+'Forgotpassword',id);
  }
}