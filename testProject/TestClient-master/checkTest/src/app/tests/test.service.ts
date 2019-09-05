import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }
  getAllTestByCategoryId(id:number){
return this.http.post(environment.baseRoute+ "FilterByCategory?categoryId="+id,null);
  }
  GetByTestIdForStudent(id){
    alert("in service"+id);
    return this.http.post(environment.baseRoute+ "GetByTestIdForStudent?testId="+id,null);
  }
  GetTestByCategoryId(id){
    return this.http.post(environment.baseRoute+ "GetTestById?categoryId="+id,null);
  }
}
