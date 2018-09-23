import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationsService } from '../services/notifications.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-error-test',
  templateUrl: './error-test.component.html',
  styleUrls: ['./error-test.component.css']
})
export class ErrorTestComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private httpService:HttpService,
    private notificationsService:NotificationsService
  ) { }

  ngOnInit() {
  }

  // undefined client error
  fireClientError() {
    return it.happens;
  }

  fireServerError() {
    this.httpService.get('https://jsonplaceholder.typicode.com/1')
      .subscribe(data => console.log('Data: ', data))
  }

}
