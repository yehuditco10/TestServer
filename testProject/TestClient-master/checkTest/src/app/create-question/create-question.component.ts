import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.less']
})
export class CreateQuestionComponent implements OnInit {

  public options: Object = {};
  public model: string;
  constructor() { }

  ngOnInit() {
    console.log("new version")
    this.model = "hello model"

  }
}
