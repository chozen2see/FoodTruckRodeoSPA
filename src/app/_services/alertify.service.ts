import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
// using a service wrapper to render alerts via alertifyjs
// this service will be injected into components and callbacks will be defined there

constructor() {
  // alertify.set('notifier', 'position', 'top-center');
}

  confirm(message: string, okCallback: () => any) {
    alertify.confirm(message, (e: any) => {
      if (e) {
        // this will be defined inside the components
        okCallback();
      } else {}
    }).dismissOthers();
  }

  success(message: string) {
    alertify.success(message).dismissOthers();
  }

  error(message: string) {
    alertify.error(message).dismissOthers();
  }

  warning(message: string) {
    alertify.warning(message).dismissOthers();
  }

  message(message: string) {
    alertify.message(message).dismissOthers();
  }

}
