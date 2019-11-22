import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Category } from '../shared/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }
categories:Category[];
  getCategories() {
    return this.http.get(environment.baseRoute + 'Categories');
  }
  addCategory(id:number,categoryName:string){
    var cat={
      parentCategoryId:id,
      categoryName:categoryName
    }
    //שליחת שתי פרמטרים
    return this.http.post(environment.baseRoute+ "Categories",cat);
  }
}
