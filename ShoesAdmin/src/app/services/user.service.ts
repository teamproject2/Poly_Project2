import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions } from "@angular/http";
import { map, catchError, tap } from 'rxjs/operators';

// import models
import { Nhanvien } from '../models/nhanvien'
import { Khachhang } from '../models/khachhang';
import { Chitietnhanvien } from '../models/chitietnhanvien';
// import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  public API: string = "http://localhost:9099/";
  private URL_NV: string ="nhanvien";
  private URL_KH: string ="khachhang";
  public Chitiet_NV : Chitietnhanvien[]=[];
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
  // Get all Nhan vien by ID
  getSanphamByID(id: number): Observable<Chitietnhanvien> {
    return this.http
      .get(this.API + "nhanvien/" + id)
      .map((response: Response) => {
        return <Chitietnhanvien>response.json();
      })
      .catch(this.handleError);
  }
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
  //
  // add_nv(nv: Nhanvien): Observable<Nhanvien>{
  //    return this.http.post<Nhanvien>(this.API, nv).pipe(
  //     tap((nv: Nhanvien) => this.log(`added hero w/ id=${nv.id}`)),
  //     catchError(this.handleError<Nhanvien>('addHero'))
  //   }));
  // // }
    //
//     update_nv(nv: Nhanvien): Observable<Nhanvien>{
//       return this.http.put(`${this.API}/${nv.id}`, {

//       }));
// }
}
