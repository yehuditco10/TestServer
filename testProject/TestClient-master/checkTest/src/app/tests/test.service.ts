import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TestForStudentVM } from '../shared/models/test-for-student-vm';
import { TestSaved } from '../shared/models/test-saved';
import { GlobalVariables } from '../global/global-variable';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  currentTest: TestForStudentVM = new TestForStudentVM();
  constructor(private http: HttpClient, private globalVariable: GlobalVariables) { }
  getAllTestByCategoryId(id: number) {
    return this.http.post(environment.baseRoute + "FilterByCategory?categoryId=" + id, null, this.globalVariable.httpOptions);
  }
  GetByTestIdForStudent(testId, studentId) {
    var model = {
      testId: testId,
      studentId: studentId
    }
    return this.http.post(environment.baseRoute + "GetByTestIdForStudent", model);
  }
  GetByQuestionForManager(questionId: number) {
    // alert("in service"+id);
    return this.http.get(environment.baseRoute + "GetByQuestionForManager/" + questionId,this.globalVariable.httpOptions);
  }
  GetTestByCategoryId(id) {
    return this.http.post(environment.baseRoute + "GetTestById?categoryId=" + id, null,this.globalVariable.httpOptions);
  }
  openTest(testid: number, studentTZ: string) {
    return this.http.get(environment.baseRoute + "openTest?testid=" + testid + '&studentTZ=' + studentTZ);
  }
  checktest(tested: TestSaved) {
    return this.http.post(environment.baseRoute + "TestSaved", tested);
  }
}
