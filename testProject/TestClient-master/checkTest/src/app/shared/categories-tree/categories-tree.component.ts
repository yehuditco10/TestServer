import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { CategoryTreeService } from './category-tree.service';
import { TreeComponent } from 'angular-tree-component';

@Component({
  selector: 'app-categories-tree',
  templateUrl: './categories-tree.component.html',
  styleUrls: ['./categories-tree.component.less']
})
export class CategoriesTreeComponent implements OnInit {

  @ViewChild("tree",{static: false}) tree:TreeComponent;
  constructor(private categoryTreeService:CategoryTreeService) { }
@Output() NodeClicked:EventEmitter<any>=new EventEmitter<any>();

  ngOnInit() {
this.categoryTreeService.getCategoriesTree().subscribe((res)=>{
  this.nodes=res;
  setTimeout(() => {
    this.tree.treeModel.expandAll();
  }, 0);
})
  }

nodeClicked(node){
  this.NodeClicked.emit(node);
}


  nodes;
  options = {
  };


}
