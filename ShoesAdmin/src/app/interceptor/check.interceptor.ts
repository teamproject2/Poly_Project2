import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Router } from '@angular/router';
@Injectable()
export class CheckInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
  ) {
    localStorage.setItem('user', 'admin');
    localStorage.setItem('timeLogIn', '1232');
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log("intercepted request ... ");
    // const clonedRequest = req.clone({ headers: req.headers.append('username', 'admin')
    // .set('password', '123456') });
    
    // let timeLogIn = localStorage.getItem('timeLogIn');
    // if (timeLogIn == null) {
    //   this.router.navigate(["/login"]);
    // } else {
    //   let date = new Date();
    //   let now = date.getHours() * 60 + date.getMinutes();

    //   console.log("Now: " + now);
    //   console.log("Old: " + timeLogIn);


    //   if (now - eval(timeLogIn) > 1) {
    //     localStorage.clear();
    //     this.router.navigate(["/login"]);
    //   } else {
    //     let user = localStorage.getItem('user');
    //     if (user != null) {
    //       const clonedRequest = req.clone({
    //         params: req.params.set('username', 'admin')
    //           .set('password', '123456')
    //       });
    //       console.log(clonedRequest.params.get('username'));
    //       console.log(clonedRequest.params.get('password'));
    //       return next.handle(clonedRequest);
    //     }
    //   }
    // }

    return next.handle(req);
  }
}