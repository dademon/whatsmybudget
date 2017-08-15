import { Component, OnInit, Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-inline',
  templateUrl: './inline.component.html',
  styleUrls: ['./inline.component.scss']
})
export class InlineComponent implements OnInit {

  title = 'My component!';

  posts;
  
    constructor(private http:Http) {
        this.http.get('http://jsonplaceholder.typicode.com/posts/')
                .subscribe(res => this.posts = res.json());
    }

  ngOnInit() {
  }

}
