import { Component, OnInit } from '@angular/core';

import { TestForStudentVM } from 'src/app/shared/models/test-for-student-vm';
import { TestService } from '../test.service';

@Component({
  selector: 'app-display-test-results',
  templateUrl: './display-test-results.component.html',
  styleUrls: ['./display-test-results.component.less']
})
export class DisplayTestResultsComponent implements OnInit {
testt:TestForStudentVM;
  constructor(private testServise:TestService) { }
// test:TestForStudentVM=this.testServise.currentTest;
  ngOnInit() {
    this.testt=this.testServise.currentTest;
  }

}
