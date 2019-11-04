import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-reports-teachers',
  templateUrl: './reports-teachers.component.html',
  styleUrls: ['./reports-teachers.component.less']
})
export class ReportsTeachersComponent implements OnInit {
  id: string = null;
  constructor(private route:ActivatedRoute,
    private reportService:ReportsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.reportService.testId=Number(this.id);
    console.log(this.id);
  }

}
