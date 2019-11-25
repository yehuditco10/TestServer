import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../test.service';
// import { TestService } from 'src/app/services/test.service';
import { Test } from 'src/app/shared/models/test';
import { TestForStudent } from 'src/app/shared/models/test-for-student';
import { TestForStudentVM } from 'src/app/shared/models/test-for-student-vm';
import { Title } from '@angular/platform-browser';
import html2canvas from 'html2canvas';
import { TestSaved } from 'src/app/shared/models/test-saved';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';

@Component({
  selector: 'app-display-test',
  templateUrl: './display-test.component.html',
  styleUrls: ['./display-test.component.less']
})
export class DisplayTestComponent implements OnInit {
  test: TestForStudentVM;
  tested: TestSaved;
  url: string;
  constructor(private route: ActivatedRoute,
    private TestService: TestService,
    private testS: TestService) { }
  testId: number = 0;
  studentTz: string;
  mark: number = 0;
  currentMark:string="";
  MaxMark: number = 0;
  isFinishTest: boolean = false;
  // isok:number=0;
  ngOnInit() {
    console.log(this.route);
    this.testId = +this.route.snapshot.paramMap.get('id');
    if (!this.testId) {
      //error
    }
    this.test = new TestForStudentVM();
  }
  isOk: number = 2;
  sendStudentId() {
    //send test id+ student id
    this.TestService.openTest(this.testId, this.studentTz).subscribe((res: number) => {
      //פניה לסרבר ועדכון על תחילת מבחן
      if (res == 1) {
        this.TestService.GetByTestIdForStudent(this.testId,this.studentTz).subscribe((res: TestForStudentVM) => {
          if (res != null) {
            this.test = res;
            this.test.dateStart = new Date();
            this.isOk = 1;
            // console.log(this.test.questionArr);
            // console.log(this.test);
          }

        }, err => {
          this.isOk = -1;
        });
      }
      else if(res==-1)
      this.isOk=-1;
      else this.isOk=0;
    })
    //פניה לסרבר ועדכון על תחילת מבחן
    // this.TestService.GetByTestIdForStudent(this.testId).subscribe((res: TestForStudentVM) => {
    //   this.test = res;
    //   this.isOk=true;
    //   console.log(this.test.questions) ;
    //   console.log(this.test);
    // })
    //מקבל מהסרבר אם יכול לעשות את המבחן-ואחר כך  מציג לפי הפרמטר הזה

  }
  
  downloadPng() {
    var container = document.body;
    html2canvas(container).then(
      function (canvas) {
        var link = document.createElement("a");
        document.body.appendChild(link);
        link.download = "html_image.png";
        canvas.toDataURL("image/png");
        link.target = '_blank';
        link.click();
      });
  }
  async sendTest() {
    console.log(this.test);
    this.isFinishTest = true;
    setTimeout(async () => {
      var container = document.body;
      var testImg;
      await html2canvas(container).then(
        function (canvas) {
          var link = document.createElement("a");
          document.body.appendChild(link);
          link.download = "html_image.png";
          testImg = canvas.toDataURL("image/png");
        });
      this.TestService.currentTest = this.test;
      await this.test.questionArr.forEach(element => {
        this.MaxMark += element.nikud;
        if (element.selectedAnswer.isCorrect == true)
          this.mark += element.nikud;
      });
this.currentMark=this.mark + "/" + this.MaxMark;
      this.tested = new TestSaved(this.testId,testImg, this.test.studentId, this.test.dateStart, this.mark);
      this.TestService.checktest(this.tested).subscribe((res: any) => {

      });
    }, 1000);
  }
}

