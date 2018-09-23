import { Component, OnInit } from '@angular/core';
import { NotificationsService } from './services/notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notification:string = '';
  showNotification:boolean = false;

  constructor(private notificationsService:NotificationsService) {}

  ngOnInit() {
    this.notificationsService.notification$
    .subscribe(message => {
      this.notification = message;
      if( message ) this.showNotification = true;
      else this.showNotification = false
    })
  }

  toggleClose() {
    this.showNotification = !this.showNotification;
  }
}
