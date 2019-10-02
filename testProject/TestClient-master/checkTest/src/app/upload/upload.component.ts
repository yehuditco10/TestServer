import { Component, OnInit } from '@angular/core';
import * as XLSX from 'ts-xlsx';
import { UpStudent } from '../shared/models/up-student';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.less']
})
export class UploadComponent implements OnInit {

  constructor(private testService:TestService) { }
  sheet: Array<UpStudent>;
  students: Array<UpStudent>=new Array<UpStudent>();
  currentStudent: UpStudent = new UpStudent();
  arrayBuffer: any;
  file: File;
  incomingfile(event) {
    this.file = event.target.files[0];
    this.Upload();
  }

  Upload() {
    debugger;
    console.log("upload");
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      // console.log("a");
      console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
      this.sheet = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      // console.log(this.sheet[0]["tz"]);
      // console.log(this.sheet[0]["password"]);
      for (let index = 0; index < this.sheet.length; index++) {
        this.currentStudent = new UpStudent();
        this.currentStudent.tz = this.sheet[index]["tz"];
        this.currentStudent.password = this.sheet[index]["password"];
        this.students.push(this.currentStudent);

      }
      this.testService.studentForTest(this.students).subscribe((res)=>{
        console.log("after studentForTest")
      })
    }
    fileReader.readAsArrayBuffer(this.file);
  }
  ngOnInit() {
  }

}
