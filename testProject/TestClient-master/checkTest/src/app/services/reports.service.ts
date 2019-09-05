import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http:HttpClient) { }
  getTeachers() {
    return this.http.get(environment.baseRoute + 'getTeachers');
  }
  getStudents() {
    return this.http.get(environment.baseRoute + 'getStudents');
  }
}
