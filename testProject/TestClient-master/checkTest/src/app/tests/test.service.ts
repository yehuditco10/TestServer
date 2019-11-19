import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TestForStudentVM } from '../shared/models/test-for-student-vm';
import { TestSaved } from '../shared/models/test-saved';

@Injectable({
  providedIn: 'root'
})
export class TestService {
currentTest:TestForStudentVM=new TestForStudentVM();
  constructor(private http:HttpClient) { }
  getAllTestByCategoryId(id:number){
return this.http.post(environment.baseRoute+ "FilterByCategory?categoryId="+id,null);
  }
  GetByTestIdForStudent(id){
    // alert("in service"+id);
    return this.http.post(environment.baseRoute+ "GetByTestIdForStudent?testId="+id,null);
  }
  GetByQuestionForManager(questionId:number){
    // alert("in service"+id);
    return this.http.get(environment.baseRoute+ "GetByQuestionForManager/"+questionId);
  }
  GetTestByCategoryId(id){
    return this.http.post(environment.baseRoute+ "GetTestById?categoryId="+id,null);
  }
  openTest(testid:number,studentTZ:string){
    return this.http.get(environment.baseRoute+ "openTest?testid="+testid+'&studentTZ='+studentTZ);
    // let data=new URLSearchParams();
    // data.append('testid',testid);
    // var body='testid=testid+&studentTZ=studentTZ';
    // return this.http.post(environment.baseRoute+'openTest',body);
  }
  checktest(tested:TestSaved){
    return this.http.post(environment.baseRoute+"TestSaved",tested);
  }
}
