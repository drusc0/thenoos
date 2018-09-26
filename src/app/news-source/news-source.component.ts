import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
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
  snapshot;

  constructor(private http:HttpService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.snapshot = this.route.snapshot;
    let filters = {};
    Object.keys(this.snapshot.queryParams).forEach( k => filters[k] = this.snapshot.queryParams[k]);
    filters['sources'] = this.snapshot.params['id'];
    console.log("Filters", filters);
    this.request(filters);
  }

  request(filters) {
    this.http.getTopHeadlines(filters)
      .subscribe(data => {
        console.log("Data", data),
        this.sourceData = data;
      },
      err => console.error(err),
      () => this.inProgress = false
    );
  }

}
