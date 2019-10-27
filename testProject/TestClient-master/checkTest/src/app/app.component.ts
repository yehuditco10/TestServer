import { Component, OnInit } from '@angular/core';
import { GlobalVariables } from './global/global-variable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
    
    constructor(private globalVariable: GlobalVariables){    
    }

  ngOnInit(): void {
//     var Highcharts = require('highcharts');
//     Highcharts.chart('container', {
//       chart: {
//           plotBackgroundColor: null,
//           plotBorderWidth: null,
//           plotShadow: false,
//           type: 'pie'
//       },
//       title: {
//           text: 'Browser market shares in January, 2018'
//       },
//       tooltip: {
//           pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//       },
//       plotOptions: {
//           pie: {
//               allowPointSelect: true,
//               cursor: 'pointer',
//               dataLabels: {
//                   enabled: false
//               },
//               showInLegend: true
//           }
//       },
//       series: [{
//         name: 'Brands',
//         colorByPoint: true,
//         data: [{
//             name: 'Chrome',
//             y: 61.41,
//             sliced: true,
//             selected: true
//         }, {
//             name: 'Internet Explorer',
//             y: 11.84
//         }, {
//             name: 'Firefox',
//             y: 10.85
//         }, {
//             name: 'Edge',
//             y: 4.67
//         }, {
//             name: 'Safari',
//             y: 4.18
//         }, {
//             name: 'Other',
//             y: 7.05
//         }]}]
//   });
  var token = localStorage.getItem("token");
  if (token != null && token != "")
    this.globalVariable.setToken(token);
 }
//    title = 'checkTest';


}