import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {Http} from "@angular/http";
import * as _ from 'lodash';

import * as Rx from 'rxjs/Rx';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {

  private data;

  constructor(
    private http:Http,
    private route: ActivatedRoute,
    private router: Router
  ) {
    http.get("https://my-awesome-app-3b0f5.firebaseio.com/.json")
      .subscribe((data)=> {
        setTimeout(()=> {
          this.data = data.json();
        }, 1000);
      });
  }

  private sortByWordLength = (a:any) => {
    return a.name.length;
  }

  ngOnInit() {
  }
}
