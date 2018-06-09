import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions } from "@angular/http";
import { map, catchError, tap } from 'rxjs/operators';

// import models
import { Hoadon } from '../models/hoadon';

@Injectable()
export class HoadonService {
  public API: string = "http://localhost:9099/";
  private URL_HD: string = "hoadon";
  constructor(
    public http: Http
  ) { }
  // Get all San pham trong hoa don
  getAllSP_HD(): Observable<Hoadon[]> {
    return this.http.get(this.API + this.URL_HD).pipe(map(data => {
      return <Hoadon[]>data.json();
    }));
  }

}
