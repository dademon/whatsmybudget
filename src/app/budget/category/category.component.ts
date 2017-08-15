import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @HostBinding('attr.class') cssClass = "tr";
  checked: boolean;
  title: string;
  budgeted: number;
  activity: number;
  available : number;
  constructor() {
    this.checked = false;
    this.title = "cat1";
    this.budgeted = 100;
    this.activity = 100;
    this.available = 100;

   }

  ngOnInit() {
  }

}
