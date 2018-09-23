import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { NotificationsService } from '../../services/notifications.service';

@Injectable()
export class ErrorsHandler implements ErrorHandler {

    constructor(private injector:Injector) {}

    handleError(error:Error|HttpErrorResponse) {
        const notificationService = this.injector.get(NotificationsService);
        const router = this.injector.get(Router);
        // http error
        if( error instanceof HttpErrorResponse ) {
            //Server error
            if( !navigator.onLine ) {
                return notificationService.notify("No Internet Connection");
            }
            //Http error
            return notificationService.notify(`${error.status} - ${error.message}`);
        }
        // Other error
        else {
            router.navigate(['/error'], {queryParams: {error: error}});
        }
        console.error(error);
    }
}