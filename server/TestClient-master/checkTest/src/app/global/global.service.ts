import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }
 token:string;
 public httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })};

  setToken(token)
  {
    this.token=token;
    this.httpOptions.headers =
      new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + token });

  }
}
