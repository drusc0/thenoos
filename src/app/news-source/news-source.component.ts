import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-news-source',
  templateUrl: './news-source.component.html',
  styleUrls: ['./news-source.component.css']
})
export class NewsSourceComponent implements OnInit {

  inProgress:boolean = true;
  sourceData:Object = null;
  sourceId:string;

  constructor(
      private activatedRoute:ActivatedRoute, 
      private router:Router,
      private http:HttpService) { }

  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe( params => {
        this.inProgress = true;
        let filters = {};
        Object.keys(params).forEach( k => filters[k] = params[k]);
        this.request(filters);
    });
  }

  request(filters) {
    this.http.getTopHeadlines(filters)
      .subscribe(
        data => this.sourceData = data,
        err => console.error(err),
        () => this.inProgress = false
    );
  }

}
