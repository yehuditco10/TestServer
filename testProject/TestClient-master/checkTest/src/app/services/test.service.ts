import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Test } from '../shared/models/test';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {
categoryId:number;
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
}
