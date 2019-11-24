import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/shared/models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.less']
})
export class AddCategoryComponent implements OnInit {
  categories:Category[];
  categorydes:string;
  selectedParentCategory:Category;
  isok:number=0;
  constructor(private CategoriesService:CategoriesService,private router:Router) { }

  ngOnInit() {
    this.CategoriesService.getCategories().subscribe((res:Category[])=>
    this.categories=res)

  }
  addCategory(){
   
    this.CategoriesService.addCategory(this.selectedParentCategory.categoryId,this.categorydes).subscribe((res:boolean)=>{
   
    //   if(res)
    //  {
      this.isok=1;
   
      // 
    //  }
    });
   
}
goHome(){
  this.router.navigate(["/Homepage"]);
}
}
