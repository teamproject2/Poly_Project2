import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions,URLSearchParams } from "@angular/http";
import { map, catchError, tap } from 'rxjs/operators';

// import models
import { Sanpham } from '../models/sanpham';
import { Khohang } from '../models/khohang';
import { Hoadon } from '../models/hoadon';
import { ChitietSanpham } from '../models/ChitietSanpham';

@Injectable()
export class SanphamService {
  public API: string = "http://localhost:9099/";
  private URL_SP: string = "sanpham";
  private URL_SPID: string = "sanpham/";
  private URL_HD: string = "hoadon";
  private URL_SPKHO: string = "kho";
  public sanpham: Sanpham[] = [];
  public ChitietSanpham: ChitietSanpham[] = [];
  listSizeOfProductData= new Array();
  //
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
  // Get all San pham by ID
  getSanphamByID(id: number): Observable<ChitietSanpham> {
    return this.http
      .get(this.API + "sanpham/" + id)
      .map((response: Response) => {
        return <ChitietSanpham>response.json();
      })
      .catch(this.handleError);
  }
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
//
update_Sp(sanpham: any): Observable<any> {
  let search = new URLSearchParams();
  return this.http.put(this.API + "sanpham", sanpham, {search});
}
insert_Sp(sanpham: any): Observable<any> {
  let search = new URLSearchParams();
  return this.http.post(this.API + "sanpham", sanpham, {search});
}
//
  saveHangTrongKho(id, list) : Observable<Response>{
    let search = new URLSearchParams();
    return this.http.put(this.API + "sanpham/hangtrongkho/" + id, list, {search});
  }
}
