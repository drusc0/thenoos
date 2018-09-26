import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(
      private activatedRoute:ActivatedRoute,
      private router:Router, 
      private http:HttpService, 
      private fb:FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe( params => {
        this.inProgress = true;
        let filters = {};
        Object.keys(params).forEach( k => {
          filters[k] = params[k];
          this.form.patchValue( {[k]: params[k]});
          console.log( "Form val", this.form);
        });
        this.request(filters);
      });
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
      language: '',
      country: ''
    });
  }

  filterFilters(filters) {
    let ret = {};
    Object.keys(this.form.value).forEach( k => {
      if( this.form.value[k] != '') ret[k] = this.form.value[k];
    });
    return ret;
  }

  navigate(id) {
    let filters = this.filterFilters(this.form.value);
    this.router.navigate(['source', id], {queryParams: filters});
  }

  onSubmit() {
    let filters = this.filterFilters(this.form.value);
    this.router.navigate(['sources'], {queryParams: filters});
  }

}
