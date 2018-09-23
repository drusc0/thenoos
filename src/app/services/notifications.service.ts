import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private notification:BehaviorSubject<string> = new BehaviorSubject(null);
  readonly notification$:Observable<string> = this.notification.asObservable();
  
  constructor() { }

  notify(message: string) {
    this.notification.next(message);
    // remove notification status
    setTimeout(() => this.notification.next(null), 3000);
  }
}
