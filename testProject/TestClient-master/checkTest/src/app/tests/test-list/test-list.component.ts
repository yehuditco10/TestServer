import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/shared/models/test';
import { TestService } from '../test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.less']
})
export class TestListComponent implements OnInit {

  constructor(private testService:TestService,private router:Router) { }

  ngOnInit() {
  }
  category;
  tests:Array<Test>;

  nodeClicked(node){
    this.category=node;
    debugger;
this.testService.getAllTestByCategoryId(node.id).subscribe((res:Array<Test>)=>{
  debugger;
  console.log(res);
  this.tests=res;
})
  }

  addNewTest(){
this.router.navigate(['create-test',{categoryId:this.category.id}]);
  }

}
