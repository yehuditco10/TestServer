import { Component, OnInit,ElementRef ,ViewChild } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { TestService } from '../services/test.service';
import { Mark } from '../shared/models/mark';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas';  
import { UploadComponent } from '../upload/upload.component';
// import {MatTooltipModule} from '@angular/material/tooltip';
@Component({
  selector: 'app-grade-chart',
  templateUrl: './grade-chart.component.html',
  styleUrls: ['./grade-chart.component.less']
})
// var id = +this.route.snapshot.paramMap.get('id');

export class GradeChartComponent implements OnInit {
  // id = +this.route.snapshot.paramMap.get('id');
  id: string = null;
  link:string="";
   marks:Array<Mark>=new Array<Mark>();
   @ViewChild('upload',{static:false}) uploadCom:UploadComponent;
  constructor(private route: ActivatedRoute,
    private testService: TestService) { }
    urls:string[];
    
    clearExcel(){
      this.uploadCom.clearFile();
      this.testService.GetGradeChart(Number(this.id)).subscribe((res: Mark[]) => {
        this.marks = res;
      });
    }
  ngOnInit() {
   this.urls= ["../../assets/מבחן חסר.png","../../assets/מבחן חסר.png","../../assets/html_image (20).png","../../assets/html_image (20).png"] ;

  // this.f();
    debugger;
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.testService.getLink(Number(this.id)).subscribe((res1:string)=>{
      this.link=res1;
      if (this.id != null) {
        this.testService.GetGradeChart(Number(this.id)).subscribe((res: Mark[]) => {
          this.marks = res;
          console.log(this.marks);
        })
      }
    })
    // if (this.id != null) {
    //   this.testService.GetGradeChart(Number(this.id)).subscribe((res: Mark[]) => {
    //     this.marks = res;
    //     console.log(this.marks);
    //   })
    // }
  }
f(){
  this.marks.push(new Mark('רחלי',"1234567",100));
 
  this.marks.push(new Mark('ריקי','11111189',100)); 
  this.marks.push(new Mark('חנה','21343881',85)); 
  this.marks.push(new Mark('שרה','23123134',100));
  this.marks.push(new Mark('בתיה','12323454',90));
}
public captureScreen()  
  {  
    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });  
  } 
  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  } 
}
