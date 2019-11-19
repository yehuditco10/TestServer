// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, ElementRef ,ViewChild} from '@angular/core';  
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas';  
import { url } from 'inspector';
  
@Component({
  selector: 'app-pfd',
  templateUrl: './pfd.component.html',
  styleUrls: ['./pfd.component.less']
})
export class PfdComponent implements OnInit {

  constructor() { }
 alphas:string[]; 

  urls:string[];
  ngOnInit() {
   this.urls= ["../../assets/דף ממו.png","../../assets/איקון מבחן.png","../../assets/דף ממו.png"] ;
// url[0]="../../assets/דף ממו.png";
  }
//  downloadPng(){
//   var container =document.getElementById('contentToConvertto');  
//   html2canvas(container).then(function(canvas){
// var link =document.createElement("a");
// document.body.appendChild(link);
// link.download="html_image.png";
// link.href=canvas.toDataURL("image/png");
// link.target='_blank';
// link.click();
//   });
//  }
  
}
