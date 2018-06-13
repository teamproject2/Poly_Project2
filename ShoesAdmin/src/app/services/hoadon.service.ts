import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions } from "@angular/http";
import { map, catchError, tap } from 'rxjs/operators';

// import models
import { Hoadon } from '../models/hoadon';

@Injectable()
export class HoadonService {
  public URL_HD: string = "http://localhost:9099/hoadon";
  // private URL_HD: string = "hoadon";
  constructor(
    public http: Http
  ) { }
  // Lay tat ca San pham trong hoa don
  getAllSP_HD(): Observable<Hoadon[]> {
    return this.http.get(this.URL_HD).pipe(map(data => {
      return <Hoadon[]>data.json();
    }));
  }
  // Lay 1 san pham theo id
  getDetailSP_HD(id: number): Observable<Hoadon[]> {
    return this.http.get(this.URL_HD + id).pipe(map(data => {
      return <Hoadon[]>data.json();
    }));
  }
  // Update
 

}
