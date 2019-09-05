import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http'
import { Teachers } from '../shared/models/teachers';
import { environment } from 'src/environments/environment';
import { GlobalService } from '../global/global.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http:HttpClient,private globalService:GlobalService) { }

  login(teachers:Teachers){
    const body = new HttpParams()          
    .set('grant_type',"password")          
    .set('username',teachers.teacherName)    
    .set('password',  teachers.teacherPassword)    
    return this.http.post(environment.baseRoute2+'token', body.toString(), {observe: 'response',    
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },    
    });    
  }

  getUserData(token){
    // var httpHeader=new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + token })
    return this.http.get(environment.baseRoute+"User",this.globalService.httpOptions );
  }
}