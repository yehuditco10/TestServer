import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Test } from '../models/test';
import { Router } from '@angular/router';
import { UploadComponent } from 'src/app/upload/upload.component';

@Component({
  selector: 'app-test-cards',
  templateUrl: './test-cards.component.html',
  styleUrls: ['./test-cards.component.less']
})
export class TestCardsComponent implements OnInit {

  @Input() test:Test;
  @ViewChild('upload',{static:false}) uploadCom:UploadComponent;
  constructor(private router:Router) { }
// var id = +this.route.snapshot.paramMap.get('id');
  ngOnInit() {
  }
  clearExcel(){
    this.uploadCom.clearFile();
  }
  edit(){
    this.router.navigate(['create-test',{categoryId:this.test.testId}]);
  }
  
}
