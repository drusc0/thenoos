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

  constructor(private http:HttpService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe( params => {
        this.sourceId = params['id'];
        this.http.getTopHeadlines({'sources': this.sourceId})
          .subscribe(data => {
            console.log("Data", data),
            this.sourceData = data;
          },
          err => {
            console.error(err)
          },
          () => this.inProgress = false
        )
      });
  }

}
