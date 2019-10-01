import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.less']
})
export class TryComponent implements OnInit {

  constructor( private categoriesService:CategoriesService) { }

  ngOnInit() {
  }

}
