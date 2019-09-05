import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../test.service';
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
  constructor(private route:ActivatedRoute,
    private TestService: TestService) { }
    testId:number=0;
  ngOnInit() {
    this.testId = +this.route.snapshot.paramMap.get('id');
    if(!this.testId)
    {
      //error
    }
    this.test=new TestForStudentVM();
  }
  isOk=false;
  sendStudentId(){
//send test id+ student id
alert("in display");
    //פניה לסרבר ועדכון על תחילת מבחן
    this.TestService.GetByTestIdForStudent(this.testId).subscribe((res: TestForStudentVM) => {
      this.test = res;
      console.log(this.test.questions) ;
      console.log(this.test);
    })
    //מקבל מהסרבר אם יכול לעשות את המבחן-ואחר כך  מציג לפי הפרמטר הזה
    this.isOk=true;
  }
  sendTest(){
console.log(this.test);
  }

}
