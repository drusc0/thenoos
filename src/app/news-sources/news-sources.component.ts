import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-news-sources',
  templateUrl: './news-sources.component.html',
  styleUrls: ['./news-sources.component.css']
})
export class NewsSourcesComponent implements OnInit {

  inProgress:boolean = true;
  sourcesData: Object = null;
  form:FormGroup;
  page: number = 1

  constructor(private http:HttpService, private fb:FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.request({});
  }

  request(filters:Object) {
    return this.http.getSources(filters)
      .subscribe(
        data => {
          this.sourcesData = data;
          console.log(this.sourcesData);
        },
        err => console.log(err),
        () => this.inProgress = false
      );
  }

  createForm() {
    this.form = this.fb.group({
      category: '',
      lang: '',
      country: ''
    });
  }

  onSubmit() {
    return this.request(this.form.value);
  }

}
