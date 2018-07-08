import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions } from "@angular/http";
import { map, catchError, tap } from 'rxjs/operators';

// import models
import { Hoadon } from '../models/hoadon';
import { Chitiethoadon } from '../models/chitiethoadon';
import { Invoice } from '../models/invoice';

@Injectable()
export class HoadonService {

  public URL_HD: string = "http://localhost:9099/hoadon/";
  public Chitiet_HD : Invoice[]=[];

  constructor(
    public http: Http
  ) { }

  // Lay tat ca San pham trong hoa don
  getAllSP_HD(): Observable<Hoadon[]> {
    return this.http.get(this.URL_HD).pipe(map(data => {
      return <Hoadon[]>data.json();
    }));
  }

 // Get Hoa don by ID
 getHoadonByID(id: number): Observable<Invoice[]> {
  return this.http
    .get(this.URL_HD + id)
    .map((response: Response) => {
      return <Invoice[]>response.json();
    })
    .catch(this.handleError);
}
// 
DeletehoaDon(id: number): Observable<Invoice[]>{
  return this.http
  .delete(this.URL_HD + id)
  .map(success => success.status)
  .catch(this.handleError);

}
//
Chuyentrangthai(id: number): Observable<any>{
  let search = new URLSearchParams();
    return this.http.put(this.URL_HD +  id, {search});
}

private handleError(error: Response) {
  return Observable.throw(error.statusText);
}

}
