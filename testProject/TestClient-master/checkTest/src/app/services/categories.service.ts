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
    alert("inservice");
    alert(id);
    alert(categoryName);

    debugger;
    //שליחת שתי פרמטרים
    return this.http.get(environment.baseRoute+ "addCategory?id="+id+'&categoryName='+categoryName);
  }
}
