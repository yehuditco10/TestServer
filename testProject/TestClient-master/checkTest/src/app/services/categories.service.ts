import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Category } from '../shared/models/category';
import { GlobalVariables } from '../global/global-variable';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient,private globalVariable:GlobalVariables) { }
categories:Category[];
  getCategories() {
    return this.http.get(environment.baseRoute + 'Categories',this.globalVariable.httpOptions);
  }
  addCategory(id:number,categoryName:string){
    var cat={
      parentCategoryId:id,
      categoryName:categoryName
    }
    //שליחת שתי פרמטרים
    return this.http.post(environment.baseRoute+ "Categories",cat,this.globalVariable.httpOptions);
  }
}
