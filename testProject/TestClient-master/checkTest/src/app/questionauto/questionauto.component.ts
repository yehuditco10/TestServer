import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionForStudentVM } from '../shared/models/question-for-student-vm';
import { TestService } from '../tests/test.service';
import { Questions } from '../shared/models/questions';
import { SharedService } from '../services/shared.service';
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
  isok:number=0;
  constructor(private route:ActivatedRoute,private TestService:TestService,private sharesService:SharedService) { }

  ngOnInit() {
    this.questionId = +this.route.snapshot.paramMap.get('id');
this.TestService.GetByQuestionForManager(this.questionId).subscribe((res:any)=>{
  debugger;
this.question=res;
alert(res.questionDescription);
console.log(res.questionDescription);
});
   }
   publicQuestion(){
this.sharesService.publicQuestion(this.questionId).subscribe((res:any)=>{
  if(res==true)
  this.isok=1;
  else
  this.isok=-1;

 
})
   }
}
