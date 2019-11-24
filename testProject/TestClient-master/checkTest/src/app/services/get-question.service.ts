import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GlobalVariables } from '../global/global-variable';

@Injectable({
  providedIn: 'root'
})
export class GetQuestionService {

  constructor(private http:HttpClient,private globalVariable:GlobalVariables) { }
  getQuestionForCatc(categoryId?:number){
    return this.http.get(environment.baseRoute+'getQuestionForCatc/'+ categoryId,this.globalVariable.httpOptions);
  }
  getQuestion(categoryId?:number){
    if(categoryId!=null)
    return this.http.get(environment.baseRoute+'getQuestions/'+ categoryId,this.globalVariable.httpOptions);
    else
    return this.http.get(environment.baseRoute+'getQuestions/'+null,this.globalVariable.httpOptions);
  }
}
