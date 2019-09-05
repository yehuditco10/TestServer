
import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, Output } from '@angular/core';
import { Category } from '../shared/models/category';
import { CategoriesService } from '../services/categories.service';
import { GetQuestionService } from '../services/get-question.service';
import { GetDataQuestionService } from '../services/get-data-question.service';
import { TestService } from '../services/test.service';
import { from } from 'rxjs';
import { Questions } from '../shared/models/questions';
import { Test } from '../shared/models/test';
import { CreateDataQuestionComponent } from '../create-data-question/create-data-question.component';
import { EventEmitter } from 'events';
import { LoginService } from '../login/login.service';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.less']
})
export class CreateTestComponent implements OnInit {

  currentQuestion: Questions;
  categories: Category[];
  selectedCategory: Category = new Category();
  title: string = null;
  questions: Questions[];
  test: Test;
  testName:string;
 
  constructor(private categoriesService: CategoriesService,
    private getQuestionService: GetQuestionService,
    private GetDataQuestionService: GetDataQuestionService,
    private cdRef: ChangeDetectorRef,
    private TestService: TestService,
    private loginServ: LoginService,
    private route: ActivatedRoute,
    private testService: TestService, ) { }


  ngOnInit() {
    var id = +this.route.snapshot.paramMap.get('id');
    if (id)//edit
    {
      
      this.testService.GetTestById(id).subscribe((res: Test) => {
        this.test = res;
        console.log(this.test.questionArr) ;
        console.log(this.test);
      })
    }
    else//create
    {
      var categoryid = +this.route.snapshot.paramMap.get('categoryId');
      this.test = new Test();
      this.test.categoriId = categoryid;
 
      this.currentQuestion = new Questions();

    }
    this.getCategories();
    this.cdRef.detectChanges();
  }
  
  showAnswers(event) {
    console.log(event);
    event.currentTarget.parentElement.querySelector(".nested").classList.toggle("active");
    event.currentTarget.classList.toggle("caret-down");

  }
  PushNewQuestion() {
    if (this.currentQuestion.isNew) {
      this.currentQuestion.isNew = false;
      this.test.questionArr.push(this.currentQuestion);
    }
    this.currentQuestion = new Questions();
    this.cdRef.detectChanges();
    // this.currentQuestion.restart();

  }
  PushQuestion(que) {

    // var questionToPush=new Questions();
    // questionToPush.nikud=0;
    // questionToPush.
    this.test.questionArr.push(que);
    this.currentQuestion = new Questions();
    this.cdRef.detectChanges();
    console.log(que);

    // this.currentQuestion.restart();
    console.log(this.test);
  }
  RemoveQuestion(que: Questions) {
    this.test.questionArr.splice(this.test.questionArr.indexOf(que), 1);
    this.cdRef.detectChanges();
    console.log(que);
  }
  getCategories() {
    debugger;
    this.categoriesService.getCategories().subscribe((res: Category[]) => {
      debugger;
      this.categories = res;
      this.selectedCategory = res.filter(i => i.categoryId == this.test.categoriId)[0];
      this.title = ' המבחן ב' + this.selectedCategory.categoryName;
      //   this.TestService.categoryId=this.selectedCategory.categoryId;
    })
  }
  addQuestion() {

  }
  showModal: boolean = false;
  createNewQuestion() {
    // this.currentQuestion=new Questions();
    this.showModal = true;
  }


  getQuestion() {
    // alert("get");
    this.getQuestionService.getQuestion(this.selectedCategory.categoryId).subscribe((res: any) => {
      this.questions = res;

    }, err => {

    })
  }
  getDataQuestio(question: Questions) {
    this.GetDataQuestionService.getDataQuestion().subscribe((res: any) => {

    })
  }
  editQuestion(qu: Questions) {
    this.currentQuestion = qu;
    document.getElementById("openModalBtn").click();
  }
  saveTest() {
    debugger;
    
    alert(this.testName);
    this.test.categoriId = this.selectedCategory.categoryId;
    this.test.teacherId = 25;
    this.test.name=this.testName;
    this.TestService.saveTest(this.test).subscribe((res) => {

    })
  }
}
