import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.less']
})
export class AddCategoryComponent implements OnInit {
  categories:Category[];
  categorydes:string;
  selectedParentCategory:Category;
  constructor(private CategoriesService:CategoriesService) { }

  ngOnInit() {
    this.CategoriesService.getCategories().subscribe((res:Category[])=>
    this.categories=res)

  }
  addCategory(){
   alert("inTS");
    this.CategoriesService.addCategory(this.selectedParentCategory.categoryId,this.categorydes).subscribe(res=>{
      alert(res);
      console.log(res);
    });
   
}
}
