import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions } from "@angular/http";
import { map } from 'rxjs/operators';

// import models
import { Nhanvien } from '../models/nhanvien'
import { Khachhang } from '../models/khachhang';
// import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  public API: string = "http://localhost:9099/";
  private URL_NV: string ="nhanvien";
  private URL_KH: string ="khachhang";
  constructor(
    public http: Http
  ) { }
  // Get all nhan vien
  getAllNhanvien(): Observable<Nhanvien[]> {
    return this.http.get(this.API + this.URL_NV).pipe(map(data => {
      return <Nhanvien[]>data.json();
    }));
  }

  // Get all Customer
  getAllKhachhang(): Observable<Khachhang[]> {
    return this.http.get(this.API + this.URL_KH).pipe(map(data => {
      return <Khachhang[]>data.json();
    }));
  }
  //
  // add_nv(nv: Nhanvien): Observable<Nhanvien>{
  //   return this.http.post(this.API + this.URL_NV).pipe(map(data => {
  //     return <Nhanvien[]>data.json();
  //   }));
  // }
    //
//     update_nv(nv: Nhanvien): Observable<Nhanvien>{
//       return this.http.put(`${this.API}/${nv.id}`, {

//       }));
// }
}
