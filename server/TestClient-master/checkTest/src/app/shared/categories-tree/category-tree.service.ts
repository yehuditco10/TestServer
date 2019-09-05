import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryTreeService {

  constructor(private httpClient:HttpClient) { }

  getCategoriesTree(){
    return this.httpClient.get(environment.baseRoute + 'CategoryTree');
  }
}
