import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-report-sum-users',
  templateUrl: './report-sum-users.component.html',
  styleUrls: ['./report-sum-users.component.less']
})
export class ReportSumUsersComponent implements OnInit {
numS:number;
numT:number;
sumStusentsTeachers:number;
  constructor(private reportService:ReportsService,private http:HttpClient) {
    
   }
   sumTeachers:any;
   sumStudents:any;
    sumAll:number;

    //  getTeachers():Observable<number>  {
    //    return this.http.get<number>(environment.baseRoute + 'report/getTeachers');
    //  }
    //  getStudents():Observable<number> {
    //    return this.http.get<number>(environment.baseRoute + 'report/getStudents');
    //  }
    
  ngOnInit(): void {
    this.reportService.getStudents().subscribe((res:number)=>{
        this.sumStudents= res;
        console.log(res);
        console.log(this.sumStudents);
        this.reportService.getTeachers().subscribe((res:number)=>{
            this.sumTeachers= res;
      
            this.sumAll=this.sumStudents+this.sumTeachers+1;
            this.sumAll=100/this.sumAll;
             var Highcharts = require('highcharts');
             Highcharts.chart('container1', {
               chart: {
                   plotBackgroundColor: null,
                   plotBorderWidth: null,
                   plotShadow: false,
                   type: 'pie'
               },
               title: {
                   text: 'כמות משתמשים באתר'
               },
               tooltip: {
                   pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
               },
               plotOptions: {
                   pie: {
                       allowPointSelect: true,
                       cursor: 'pointer',
                       dataLabels: {
                           enabled: false
                       },
                       showInLegend: true
                   }
               },
               series: [{
                 name: 'per ',
                 colorByPoint: true,
                 data: [{
                     name: 'תלמידים',
                     y: this.sumAll*this.sumStudents,
                     sliced: true,
                     selected: true
                 }, 
                 
                  {
                     name: 'מורים',
                     y:this.sumAll*this.sumTeachers,
                    
                 }, {
                     name: 'מנהל',
                     y: this.sumAll,
                     
                 }]}]
           });
         });
     });
     
//    this.sumTeachers=this.getTeachers();

debugger;
 
 }


}
