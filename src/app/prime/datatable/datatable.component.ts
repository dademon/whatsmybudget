import { Component, OnInit,Injectable, Input } from '@angular/core';
import {Http, Response} from '@angular/http';
import {ColumnComponent} from '../column/column.component'
@Component({
  selector: 'datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {
  @Input() dataset;
  columns: ColumnComponent[] = [];
  
  constructor() { }

  ngOnInit() {
  }

  addColumn(column) {
    this.columns.push(column);
  }

}
