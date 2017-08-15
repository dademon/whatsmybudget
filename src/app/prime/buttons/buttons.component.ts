import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/primeng';
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  clicks: number = 0;
   msgs: Message[] = [];

  countup() {
    this.clicks++;
  }
   countdown() {
    this.clicks--;
  }
  pling() {
    this.msgs = [];
    this.msgs.push({severity:'info', summary:'summary', detail:'detail'});
  }
  constructor() { }

  ngOnInit() {
  }

}
