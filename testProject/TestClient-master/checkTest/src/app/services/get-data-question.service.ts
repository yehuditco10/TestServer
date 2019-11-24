import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GlobalVariables } from '../global/global-variable';
@Injectable({
  providedIn: 'root'
})
export class GetDataQuestionService {

  constructor(private http:HttpClient,private globalVariable:GlobalVariables) { }
  getDataQuestion(){
    return this.http.get(environment.baseRoute+'getDataQuestion' ,this.globalVariable.httpOptions);
  }
}
