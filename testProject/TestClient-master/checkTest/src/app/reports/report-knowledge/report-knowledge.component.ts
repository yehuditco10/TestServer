import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
@Component({
  selector: 'app-report-knowledge',
  templateUrl: './report-knowledge.component.html',
  styleUrls: ['./report-knowledge.component.less']
})
export class ReportKnowledgeComponent implements OnInit {

  constructor(private reportService:ReportsService) { }

  ngOnInit() {
    var Highcharts = require('highcharts');
  
  // app-report-knowledge
  this.reportService.getStaticMark(this.reportService.testId).subscribe((res)=>{
    Highcharts.chart('container', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'דוח התפלגות לפי ציונים'
      },
      subtitle: {
        // text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
      },
      xAxis: {
        type: 'category',
        text: 'ציון'

      },
      yAxis: {
        title: {
          text: 'כמות תלמידים שקיבלו ציון זה'
        }

      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y}'
          }
        }
      },

      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
      },

      series: [
        {
          name: "Browsers",
          colorByPoint: true,
          data:res
        
        }
      ],
    });
  });




  }

}
