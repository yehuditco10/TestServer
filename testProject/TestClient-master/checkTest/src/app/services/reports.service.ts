import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GlobalVariables } from '../global/global-variable';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  testId:number=null;
sumTeachers:number;
sumStudents:number;
  constructor(private http:HttpClient,private globalVariable:GlobalVariables) { }
  getTeachers() {
    return this.http.get(environment.baseRoute + 'report/getTeachers',this.globalVariable.httpOptions);
  }
  getStudents() {
    return this.http.get(environment.baseRoute + 'report/getStudents',this.globalVariable.httpOptions);
  }
  getStaticMark(id:number){
    return this.http.get(environment.baseRoute+"report/getStaticMark/"+id,this.globalVariable.httpOptions);
  }
}
