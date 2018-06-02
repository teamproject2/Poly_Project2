import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions } from "@angular/http";
import { map, catchError, tap } from 'rxjs/operators';

// import models
import { Sanpham } from '../models/sanpham'
import { Khohang } from '../models/khohang';
import { Hoadon } from '../models/hoadon';

@Injectable()
export class SanphamService {
  public API: string = "http://localhost:9099/";
  private URL_SP: string = "sanpham";
  private URL_HD: string = "hoadon";
  constructor(
    public http: Http
  ) { }
  // Get all nhan vien
  getAllSanPham(): Observable<Sanpham[]> {
    return this.http.get(this.API + this.URL_SP).pipe(map(data => {
      return <Sanpham[]>data.json();
    }));
  }
}
