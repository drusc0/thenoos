import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url:string = "https://newsapi.org/v2/";
  endPoint:string = "";
  // apiKey:string = "<Enter_API_Key>";
  apiKey:string = "4c5bc73a482f4da788f9c7633708d462";

  constructor(private http: HttpClient) { }

  get(url:string) {
    return this.http.get(url);
  }

  getTopHeadlines() {
    this.endPoint = "top-headlines";
    let params = new HttpParams().set('country', 'us');
    let headers = new HttpHeaders().set('X-Api-Key', this.apiKey);
    return this.http.get(this.url+this.endPoint, {params, headers});
  }

}
