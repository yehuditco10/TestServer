import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../test.service';
// import { TestService } from 'src/app/services/test.service';
import { Test } from 'src/app/shared/models/test';
import { TestForStudent } from 'src/app/shared/models/test-for-student';
import { TestForStudentVM } from 'src/app/shared/models/test-for-student-vm';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-display-test',
  templateUrl: './display-test.component.html',
  styleUrls: ['./display-test.component.less']
})
export class DisplayTestComponent implements OnInit {
  test: TestForStudentVM;
  constructor(private route: ActivatedRoute,
    private TestService: TestService,
    private testS:TestService) { }
  testId: number = 0;
  studentTz: string;
  mark:number=0;
  MaxMark:number=0;
  ngOnInit() {
    this.testId = +this.route.snapshot.paramMap.get('id');
    if (!this.testId) {
      //error
    }
    this.test = new TestForStudentVM();
  }
  isOk = false;
  sendStudentId() {

    //send test id+ student id
    this.TestService.openTest(this.testId, this.studentTz).subscribe((res: Boolean) => {
      //פניה לסרבר ועדכון על תחילת מבחן
      if (res == true) {
        this.TestService.GetByTestIdForStudent(this.testId).subscribe((res: TestForStudentVM) => {
          this.test = res;
          this.isOk = true;
          console.log(this.test.questionArr);
          console.log(this.test);

        });
      }
    })
    //פניה לסרבר ועדכון על תחילת מבחן
    // this.TestService.GetByTestIdForStudent(this.testId).subscribe((res: TestForStudentVM) => {
    //   this.test = res;
    //   this.isOk=true;
    //   console.log(this.test.questions) ;
    //   console.log(this.test);
    // })
    //מקבל מהסרבר אם יכול לעשות את המבחן-ואחר כך  מציג לפי הפרמטר הזה
    this.isOk = true;
  }
  sendTest() {
    this.TestService.currentTest=this.test;
    // console.log(this.test.questionArr);
this.test.questionArr.forEach(element => {
this.MaxMark+=element.nikud;
  if(element.selectedAnswer.isCorrect==true)
  this.mark+=element.nikud;
 // console.log(element.selectedAnswer)
});
    console.log(this.mark+"/"+this.MaxMark);
    alert(this.mark+"/"+this.MaxMark);
  }
  // test
}
