import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions } from "@angular/http";
import { map, catchError, tap } from 'rxjs/operators';

// import models
import { Sanpham } from '../models/sanpham';
import { Khohang } from '../models/khohang';
import { Hoadon } from '../models/hoadon';

@Injectable()
export class SanphamService {
  public API: string = "http://localhost:9099/";
  private URL_SP: string = "sanpham";
  private URL_HD: string = "hoadon";
  private URL_SPKHO: string = "kho";
  constructor(
    public http: Http
  ) { }
  // Get all San pham
  getAllSanPham(): Observable<Sanpham[]> {
    return this.http.get(this.API + this.URL_SP).pipe(map(data => {
      return <Sanpham[]>data.json();
    }));
  }
  // Get all San pham trong Kho
  getAllSP_Kho(): Observable<Khohang[]> {
    return this.http.get(this.API + this.URL_SPKHO).pipe(map(data => {
      return <Khohang[]>data.json();
    }));
  }
  // Get all San pham trong hoa don
  // getAllSP_HD(): Observable<Hoadon[]> {
  //   return this.http.get(this.API + this.URL_HD).pipe(map(data => {
  //     return <Hoadon[]>data.json();
  //   }));
  // }
}
