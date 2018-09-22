import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  inProgress: boolean = true;
  topHeadlinesData: Object = null;

  constructor(private http:HttpService) { }

  ngOnInit() {
    this.http.getTopHeadlines()
      .subscribe(
        data => this.topHeadlinesData = data,
        err => console.log(err),
        () => this.inProgress = false
      );
  }

}
