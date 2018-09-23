import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-news-sources',
  templateUrl: './news-sources.component.html',
  styleUrls: ['./news-sources.component.css']
})
export class NewsSourcesComponent implements OnInit {

  inProgress:boolean = true;
  sourcesData: Object = null;
  page: number = 1

  constructor(private http:HttpService) { }

  ngOnInit() {
    this.http.getSources()
      .subscribe(
        data => {
          this.sourcesData = data;
          console.log(this.sourcesData);
        },
        err => console.log(err),
        () => this.inProgress = false
      );
  }

}
