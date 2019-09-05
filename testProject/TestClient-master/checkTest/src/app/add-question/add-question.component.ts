import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/models/category';
import { CategoriesService } from '../services/categories.service';
import { Answer } from '../shared/models/answer';
import { Questions } from '../shared/models/questions';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.less']
})
export class AddQuestionComponent implements OnInit {
  categories: Category[];
  question: Questions;
  constructor(private categoriesService:CategoriesService,private QuestionService:QuestionService) { }

  ngOnInit() {
    this.getCategories();
    this.question=new Questions();
  }
  getCategories() {
    this.categoriesService.getCategories().subscribe((res: Category[]) => {
      this.categories = res;
      console.log(this.categories);
 

    })
  }
  addLine(){
    if(this.question.Answers[this.question.Answers.length-1].answerDescription!=undefined)
    this.question.Answers.push(new Answer());
  }
  addNewQuestion(){
    console.log(this.question);
    console.log(this.question);
this.QuestionService.addNewQuestion(this.question).subscribe(res=>{

})
  }
}