import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// create an error interceptor file that will make use of the HTTP Interceptor from Angular
// catch the error inside the interceptor when it comes back from the API
// then manipulate the HTTPErrorResponse, formatting it to send back to the Angular components to display appropriate message in browser

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  // angular interceptor will recognize an Http error in 400-500 range
  intercept(
    // request
    req: HttpRequest<any>,
    // what happens next
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(

      catchError(httpErrorResponse => {

        // HTTP 401 Unauthorized client error
        if (httpErrorResponse.status === 401) {
          return throwError(httpErrorResponse.statusText);
        }

        // 500 Internal Error Exception from browser
        if (httpErrorResponse instanceof HttpErrorResponse) {
          const applicationError = httpErrorResponse.headers
            .get('Application-Error');
          if (applicationError) {
            return throwError(applicationError);
          }

          const serverError = httpErrorResponse.error;
          // form error exceptions
          let modalStateErrors = '';

          if (serverError.errors &&
            typeof serverError.errors === 'object') {

            for (const key in serverError.errors) {
              if (serverError.errors[key]) {
                // build list of strings for each modal state error being returned from server
                modalStateErrors +=
                  serverError.errors[key] + '\n';
              }
            }

          }

          return throwError(modalStateErrors || serverError || 'Server Error.');
        }

      })
    );
  }
}

// export Angular provider to provider array in app.module.ts
export const ErrorInterceptorProvider = {
  // register new interceptor provider to the Angular Http Interceptor array of providers
  provide: HTTP_INTERCEPTORS, // can have multiple interceptors
  useClass: ErrorInterceptor,
  multi: true
};
