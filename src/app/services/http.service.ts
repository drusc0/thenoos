import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url:string = "https://newsapi.org/v2/";
  endPoint:string = "";
  apiKey:string = "<Enter_API_Key>";

  constructor(private http: HttpClient) { }

  getTopHeadlines() {
    this.endPoint = "top-headlines";
    let params = new HttpParams().set('country', 'us').set('apiKey', this.apiKey);
    return this.http.get(this.url+this.endPoint, {params});
  }

}
