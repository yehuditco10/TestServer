import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetQuestionService {

  constructor(private http:HttpClient) { }

  getQuestion(categoryId?:number){
    if(categoryId!=null)
    return this.http.get(environment.baseRoute+'getQuestions/'+ categoryId);
    else
    return this.http.get(environment.baseRoute+'getQuestions/'+null);
  }
}
