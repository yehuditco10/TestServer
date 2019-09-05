import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../services/reports.service';

@Component({
  selector: 'app-report-users',
  templateUrl: './report-users.component.html',
  styleUrls: ['./report-users.component.less']
})
export class ReportUsersComponent implements OnInit {
numTeacher:number;
numStudent:number;
  constructor(private ReportsService:ReportsService) { }

  ngOnInit() {
    this.getTeachers();
    this.getStudents();
    // this.doAsyncTask();
    // this.function1();
  }
  // doAsyncTask() {
  //   var promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       console.log("Async Work Complete");
  //       resolve();
  //     }, 1000);
  //   });
  //   return promise;
  // }
  getTeachers()
{
  this.ReportsService.getTeachers().subscribe((res:number)=>{
    this.numTeacher=res;
  })
}
getStudents()
{
  this.ReportsService.getStudents().subscribe((res:number)=>{
    this.numStudent=res;
  })
}
// async function1 () {
//   // הפעלה ביחד- במקביל אבל יש המתנה לתוצאה- רצף
//   console.log('==CONCURRENT START with await==');
//   const slow =await this.getTeachers(); // starts timer immediately
//   const fast =await this.getStudents();

//   // console.log(await slow);
//   // console.log(await fast); // waits for slow to finish, even though fast is already done!
// }
}
