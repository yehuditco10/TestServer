import { CategoriesService } from '../services/categories.service';
import { GetQuestionService } from '../services/get-question.service';
import { Category } from '../shared/models/category';
import { Questions } from '../shared/models/questions';
import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  categories:Category[];
  questions:Questions[];
  selectedCategory: string ;
  constructor(private categoriesService: CategoriesService, private getQuestionService: GetQuestionService) { }
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  
  ngOnInit() {
    this.getCategories();
    this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''),map(value => this._filter(value))
    );
    
  }
  _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
  
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  getCategories()
  {
    this.categoriesService.getCategories().subscribe((res:Category[])=>{
      this.categories=res;
      this.categories.forEach(category => {
        this.options.push(category.categoryName);
      });
    });
  }
getQuestions()
{
  if(this.selectedCategory!=null)
 var categorySelected=this.categories.find(category=>category.categoryName==this.selectedCategory);
  this.getQuestionService.getQuestion((this.selectedCategory==null?null:categorySelected.categoryId)).subscribe((res:Questions[])=>{
   this.questions=res;

  })
}





}
