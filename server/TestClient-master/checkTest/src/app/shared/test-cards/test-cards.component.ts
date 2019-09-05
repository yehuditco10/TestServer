import { Component, OnInit, Input } from '@angular/core';
import { Test } from '../models/test';

@Component({
  selector: 'app-test-cards',
  templateUrl: './test-cards.component.html',
  styleUrls: ['./test-cards.component.less']
})
export class TestCardsComponent implements OnInit {

  @Input() test:Test;
  constructor() { }

  ngOnInit() {
  }

}
