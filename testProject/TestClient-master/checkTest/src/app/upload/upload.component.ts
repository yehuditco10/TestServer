import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as XLSX from 'ts-xlsx';
import { UpStudent } from '../shared/models/up-student';
import { TestService } from '../services/test.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.less']
})
export class UploadComponent implements OnInit {

  constructor(private testService: TestService, private route: ActivatedRoute) { }
  sheet: Array<UpStudent>;
  students: Array<UpStudent> = new Array<UpStudent>();
  currentStudent: UpStudent = new UpStudent();
  arrayBuffer: any;
  file: File;
  testId: number;
  @ViewChild('myInput',{static:false}) myInput: ElementRef;
  incomingfile(event) {

    this.file = event.target.files[0];
    this.Upload();
    console.log(this.testId);
  }
  clearFile() {
    debugger;
    this.myInput.nativeElement.value = "";
  }

  Upload() {
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
      console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
      this.sheet = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      for (let index = 0; index < this.sheet.length; index++) {
        this.currentStudent = new UpStudent();
        this.currentStudent.tz = this.sheet[index]['tz'];
        this.currentStudent.name = this.sheet[index]['name'];
        this.currentStudent.testid = this.testId;
        this.currentStudent.password = "11";
        this.students.push(this.currentStudent);
      }
      this.testService.studentForTest(this.students).subscribe((res) => {
        console.log("after studentForTest")
      })
    }
    fileReader.readAsArrayBuffer(this.file);
  }
  ngOnInit() {
    this.testId = Number(this.route.snapshot.paramMap.get('id'));

  }

}
