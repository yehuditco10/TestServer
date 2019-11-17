import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionForStudentVM } from '../shared/models/question-for-student-vm';
import { TestService } from '../tests/test.service';
import { Questions } from '../shared/models/questions';
// import { TestService } from '../services/test.service';
// import { TestService } from '../test.service';
@Component({
  selector: 'app-questionauto',
  templateUrl: './questionauto.component.html',
  styleUrls: ['./questionauto.component.less']
})
export class QuestionautoComponent implements OnInit {
  questionId:number;
  question:Questions=null;
  constructor(private route:ActivatedRoute,private TestService:TestService) { }

  ngOnInit() {
    this.questionId = +this.route.snapshot.paramMap.get('id');
this.TestService.GetByQuestionForManager(this.questionId).subscribe((res:any)=>{
  debugger;
this.question=res;
alert(res.questionDescription);
console.log(res.questionDescription);
});
   }

}
