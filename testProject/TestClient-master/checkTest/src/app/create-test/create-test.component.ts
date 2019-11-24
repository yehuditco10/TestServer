
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
  currentQuestionRef: Questions;
  categories: Category[];
  selectedCategory: Category = new Category();
  title: string = null;
  questions: Questions[];
  test: Test;
  testName: string;
  faCoffee = false;
  isok: number = 0;
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
        console.log(this.test.questionArr);
        console.log(this.test);
      })
    }
    else//create
    {
      var categoryid = +this.route.snapshot.paramMap.get('categoryId');
      this.test = new Test();
      this.test.categoriId = categoryid;
    }
    this.currentQuestion = new Questions();
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
    else {
      this.currentQuestionRef.Answers = this.currentQuestion.Answers;
      this.currentQuestionRef.nikud = this.currentQuestion.nikud;
      this.currentQuestionRef.questionDescription = this.currentQuestion.questionDescription;
    }
    this.currentQuestion = new Questions();
    this.cdRef.detectChanges();
    document.getElementById("closeModal").click();
  }

  PushQuestion(que) {
    // var questionToPush=new Questions();
    // questionToPush.nikud=0;
    // questionToPush.
    this.test.questionArr.push(que);
    this.currentQuestion = new Questions();
    this.cdRef.detectChanges();


  }
  RemoveQuestion(que: Questions) {
    this.test.questionArr.splice(this.test.questionArr.indexOf(que), 1);
    this.cdRef.detectChanges();
    console.log(que);
  }
  getCategories() {
    this.categoriesService.getCategories().subscribe((res: Category[]) => {
      this.categoriesService.categories = res;
      this.categories = res;
      this.selectedCategory = res.filter(i => i.categoryId == this.test.categoriId)[0];
      this.title = ' נושא : ' + this.selectedCategory.categoryName;
      //   this.TestService.categoryId=this.selectedCategory.categoryId;
    })
  }
  addQuestion() {

  }
  showModal: boolean = false;
  createNewQuestion() {
    this.currentQuestion = new Questions();
    this.showModal = true;
  }
  isQuestionNotValid() {
    if (this.currentQuestion.nikud == 0)
      return true;
    if (this.currentQuestion.Answers.filter(i => i.isCorrect == true).length == 0)
      return true;
    return false;
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
    this.currentQuestion = JSON.parse(JSON.stringify(qu));
    this.currentQuestionRef = qu;
    document.getElementById("openModalBtnHidden").click();
  }
  saveTest() {
    debugger;

    // alert(this.testName);
    this.test.categoriId = this.selectedCategory.categoryId;
    this.test.teacherId = 25;
    this.test.name = this.testName;
    this.TestService.saveTest(this.test).subscribe((res) => {
      this.isok = 1;
    })
  }
  isSaveNotValid() {
    if (this.test.name == "")
      return true;
    if (this.test.questionArr.length == 0)
      return true;
    return false;
  }
}
