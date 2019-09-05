import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finish-test',
  templateUrl: './finish-test.component.html',
  styleUrls: ['./finish-test.component.less']
})
export class FinishTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public uploadData(event: any) : void { 
    // get data from file upload       
    let filesData = event.target.files;
    debugger;
    console.log(filesData[0]);
}

}
