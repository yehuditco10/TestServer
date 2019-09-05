import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Questions } from '../shared/models/questions';
import { QuestionService } from '../services/question.service';
import { TestService } from '../services/test.service';


@Component({
  selector: 'app-display-question',
  templateUrl: './display-question.component.html',
  styleUrls: ['./display-question.component.less']
})
export class DisplayQuestionComponent implements OnInit {
  @Input()
  questions: Questions = new Questions();
  @Output() q = new EventEmitter<Questions>();
  @Output() editQuestionEvent = new EventEmitter<Questions>();

  constructor( private QuestionService:QuestionService,private TestService:TestService) { }

  ngOnInit() {
  }

  
  RemoveQuestion() {
    this.q.emit(this.questions);
  }
  EditQuestion()
  {
    this.editQuestionEvent.emit(this.questions);
  }
  suggestQuestion(){
   
    debugger; alert("in display");
    console.log(this.questions.categoryId);
    this.questions.categoryId=this.TestService.categoryId;
    
this.QuestionService.suggestQuestion(this.questions).subscribe(
  (res)=>{
alert("it sent")
})
  }
}
