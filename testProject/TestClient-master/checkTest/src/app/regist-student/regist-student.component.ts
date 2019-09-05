import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regist-student',
  templateUrl: './regist-student.component.html',
  styleUrls: ['./regist-student.component.less']
})
export class RegistStudentComponent implements OnInit {
  StudentName:string;
  StudentTZ:number;
  StudentMail:string;
    
  constructor() { }

  ngOnInit() {
  }

//   regist(){
// this.loginS.regist(this.userName).subscribe(
//   (res)=>{

//   },
//   (err)=>{
    
//   }
// )
//   }

}
