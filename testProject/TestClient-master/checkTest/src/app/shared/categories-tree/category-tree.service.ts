import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GlobalVariables } from 'src/app/global/global-variable';

@Injectable({
  providedIn: 'root'
})
export class CategoryTreeService {

  constructor(private httpClient:HttpClient,private globalVariable:GlobalVariables) { }

  getCategoriesTree(){
    return this.httpClient.get(environment.baseRoute + 'CategoryTree',this.globalVariable.httpOptions);
  }
}
