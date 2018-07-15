import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
@Injectable()
export class CheckInterceptor implements HttpInterceptor {
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("intercepted request ... ");
    // const clonedRequest = req.clone({ headers: req.headers.append('username', 'admin')
    // .set('password', '123456') });

    const clonedRequest = req.clone({ params: req.params.set('username', 'admin')
    .set('password', '123456') });
    console.log(clonedRequest.params.get('username'));
    console.log(clonedRequest.params.get('password'));
    return next.handle(clonedRequest);
  }
}