import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Teachers } from '../shared/models/teachers';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  register(teachers:Teachers){
    
    return this.http.post(environment.baseRoute + 'register',teachers);
  }
}
