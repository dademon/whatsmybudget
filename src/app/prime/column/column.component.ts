import { Component, OnInit, Input } from '@angular/core';
import {DatatableComponent} from '../datatable/datatable.component'

@Component({
  selector: 'column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  @Input() value;
  @Input() header;
  
  constructor(table: DatatableComponent) { 
    table.addColumn(this)
  }

  ngOnInit() {
  }

}
