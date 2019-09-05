import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import { Questions } from '../shared/models/questions';
import { Answer } from '../shared/models/answer';

@Component({
  selector: 'app-create-data-question',
  templateUrl: './create-data-question.component.html',
  styleUrls: ['./create-data-question.component.less']
})
export class CreateDataQuestionComponent implements OnInit,DoCheck {
  public options: Object = {};
  public model: string;
  @Input() question: Questions;
  @Output() questionChange:EventEmitter<any>=new EventEmitter();
  constructor() {  }
  // מנקה מודל שאלה
  restart() { 
  }
  ngOnInit() {
    //פורולה
    this.options = {
      charCounterCount: true,
      // toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat','alert', 'color', 'spellChecker', '|', 'undo'],
      toolbarButtons: [['font-size', 'textColor', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'aline-center'], ['fontFamily', 'fontSize', 'textColor', 'backgroundColor'], ['inlineClass', 'inlineStyle', 'clearFormatting']]
      // ,fontFamily: {
      //   "Roboto,sans-serif": 'Roboto',
      //   "Oswald,sans-serif": 'Oswald',
      //   "Montserrat,sans-serif": 'Montserrat',
      //   "'Open Sans Condensed',sans-serif": 'Open Sans Condensed'
      // },
    }
    this.model = "הקלד שאלתך כאן..."
  }
  ngDoCheck() {
    this.questionChange.emit(this.question);
  }
  //הוספת תיבת טקסט
  addLine(){
    if(this.question.Answers[this.question.Answers.length-1].answerDescription!=undefined)
    this.question.Answers.push(new Answer());
  }
}
