import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Test } from '../shared/models/test';
import { environment } from 'src/environments/environment';
import { UpStudent } from '../shared/models/up-student';
import { TestForStudentVM } from '../shared/models/test-for-student-vm';

@Injectable({
  providedIn: 'root'
})
export class TestService {
categoryId:number;
test:TestForStudentVM;
  constructor(private http:HttpClient) { }
  saveTest(test:Test){
    debugger;
    alert("service");
    console.log(test);
    return this.http.post(environment.baseRoute+'SaveTest',test);
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
    
    return this.http.post(environment.baseRoute+ "studentForTest",students);
  }
  GetGradeChart(id:number){
    return this.http.get(environment.baseRoute+"GetGradeChart/"+id);
  }
  getLink(id:number){
    return this.http.get(environment.baseRoute+"getLink/"+id);
  }
}
