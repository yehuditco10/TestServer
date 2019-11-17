import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  testId:number=null;
sumTeachers:number;
sumStudents:number;
  constructor(private http:HttpClient) { }
  getTeachers() {
    return this.http.get(environment.baseRoute + 'report/getTeachers');
  }
  getStudents() {
    return this.http.get(environment.baseRoute + 'report/getStudents');
  }
  getStaticMark(id:number){
    return this.http.get(environment.baseRoute+"report/getStaticMark/"+id);
  }
}
