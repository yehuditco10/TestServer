import { Component, OnInit, Input } from '@angular/core';
import { Test } from '../models/test';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-cards',
  templateUrl: './test-cards.component.html',
  styleUrls: ['./test-cards.component.less']
})
export class TestCardsComponent implements OnInit {

  @Input() test:Test;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  edit(){
    this.router.navigate(['create-test',{categoryId:this.test.testId}]);
  }

}
