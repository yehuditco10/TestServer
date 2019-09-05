import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Questions } from '../shared/models/questions';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }
  addQuestion(){
    
  }
  addNewQuestion(question:Questions){
     debugger;
    return this.http.post(environment.baseRoute + 'addNewQuestion',question);
  }
  suggestQuestion(question:Questions){
    debugger;
    alert("in service");
    return this.http.post(environment.baseRoute+'email/suggestQuestion',question);
      }
  }

