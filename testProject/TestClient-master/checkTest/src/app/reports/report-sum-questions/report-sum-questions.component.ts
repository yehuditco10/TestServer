import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/shared/models/category';
import { QuestionForCategory } from 'src/app/shared/models/question-for-category';
import { GetQuestionService } from 'src/app/services/get-question.service';

@Component({
  selector: 'app-report-sum-questions',
  templateUrl: './report-sum-questions.component.html',
  styleUrls: ['./report-sum-questions.component.less']
})
export class ReportSumQuestionsComponent implements OnInit {

  constructor(private categoryService: CategoriesService, private questionSErvice: GetQuestionService) { }
  categories: QuestionForCategory[];
  cat: QuestionForCategory;
  ngOnInit() {
    alert("report ques")
    this.categoryService.getCategories().subscribe((res: Category[]) => {
      res.forEach(element => {
        this.cat.name = element.categoryName;
        console.log( this.cat.name);
        this.questionSErvice.getQuestionForCatc(element.categoryId).subscribe((res: number) => {
          this.cat.sum = res;
          console.log( this.cat.sum);
        })
        this.categories.push(this.cat);
      });

    })
    var Highcharts = require('highcharts');
    Highcharts.chart('container', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'דוח שאלות לפי ע"פ קטגוריות'
      },
      subtitle: {
        // text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
      },
      xAxis: {
        type: 'category',
        text: 'קטגוריות'

      },
      yAxis: {
        title: {
          text: 'כמות שאלות במאגר לקטגוריה זו'
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
            format: '{point.y:.1f}%'
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
          data: [

            {
              name: "Edge",
              y: 4.02,
              drilldown: "Edge"
            },
            {
              name: "Opera",
              y: 1.92,
              drilldown: "Opera"
            },
            {
              name: "Other",
              y: 7.62,
              drilldown: null
            }
          ]
        }
      ],
    });

  }

}
