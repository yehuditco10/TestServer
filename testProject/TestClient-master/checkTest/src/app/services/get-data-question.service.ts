import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GetDataQuestionService {

  constructor(private http:HttpClient) { }
  getDataQuestion(){
    return this.http.get(environment.baseRoute+'getDataQuestion' );
  }
}
