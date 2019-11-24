import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Test } from '../shared/models/test';
import { environment } from 'src/environments/environment';
import { UpStudent } from '../shared/models/up-student';
import { TestForStudentVM } from '../shared/models/test-for-student-vm';
import { GlobalVariables } from '../global/global-variable';

@Injectable({
  providedIn: 'root'
})
export class TestService {
categoryId:number;
test:TestForStudentVM;
  constructor(private http:HttpClient,private globalVariable:GlobalVariables) { }
  saveTest(test:Test){
    debugger;
    alert("service");
    console.log(test);
    return this.http.post(environment.baseRoute+'SaveTest',test,this.globalVariable.httpOptions);
  }
  GetTestById(id){
    return this.http.post(environment.baseRoute+ "GetTestById?testId="+id,null);
  }
  openTest(testid:number,studentTZ:string){
    // return this.http.get(environment.baseRoute+ "addCategory?id="+id+'&categoryName='+categoryName);
    // let data=new URLSearchParams();
    // data.append('testid',testid);
    var body='testid=testid+&studentTZ=studentTZ';
    return this.http.post(environment.baseRoute+'openTest',body);
  }
  studentForTest(students:UpStudent[]){
    debugger;
    return this.http.post(environment.baseRoute+ "studentForTest",students,this.globalVariable.httpOptions);
  }
  GetGradeChart(id:number){
    return this.http.get(environment.baseRoute+"GetGradeChart/"+id,this.globalVariable.httpOptions);
  }
  getLink(id:number){
    return this.http.get(environment.baseRoute+"getLink/"+id,this.globalVariable.httpOptions);
  }
}
