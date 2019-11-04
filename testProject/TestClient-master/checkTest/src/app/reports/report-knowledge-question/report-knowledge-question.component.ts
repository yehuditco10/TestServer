import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-knowledge-question',
  templateUrl: './report-knowledge-question.component.html',
  styleUrls: ['./report-knowledge-question.component.less']
})
export class ReportKnowledgeQuestionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var Highchartss=require('highcharts');
    Highchartss.chart('containerQ', {

      chart: {
          type: 'column',
          styledMode: true
      },
  
      title: {
          text: 'מספר תשובות נכונות '
      },
  
      yAxis: [{
          className: 'green',
          title: {
              text: 'aaa'
          }
      }, {
          className: 'red',
          opposite: true,
          title: {
              text: 'bbb'
          }
      }],
  
      plotOptions: {
          column: {
              borderRadius: 5
          }
      },
  
      series: [{
        name: 'תשובות נכונות',
          data: [11, 113, 290, 20]
      }, {
        name: 'תשובות שגויות',
          data: [324, 124, 547, 221],
          yAxis: 1
      }]
  
  });
  }

}
