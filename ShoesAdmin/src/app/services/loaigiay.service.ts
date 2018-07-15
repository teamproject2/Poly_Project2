import { Injectable } from '@angular/core';
import { LoaiGiay } from '../models/loaiGiay';
import { ChitietLoaigiay } from '../models/chitietLoaigiay';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoaigiayService {
  public API: string = "http://localhost:9099/loaigiay";
  public ChitietLoaigiay: ChitietLoaigiay[] = [];
  constructor(
    public http: HttpClient
  ) { }
  // Get all loại giay
  getLoaiGiay(): Observable<LoaiGiay[]> {
    return this.http.get(this.API).pipe(map(data => {
      return <LoaiGiay[]>data;
    }));
  }
  //
  // Get Loại Giay by ID
  getLoaigiaybyID(id: number): Observable<ChitietLoaigiay> {
    return this.http
      .get(this.API + "/" + id)
      .map((response: Response) => {
        return <ChitietLoaigiay>response.json();
      })
      .catch(this.handleError);
  }
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
  // insert
  insert_Loaigiay(loaiGiay: any): Observable<any> {
    let search = new URLSearchParams();
    return this.http.post(this.API, loaiGiay);
  }
  //
  update_Loaigiay(loaiGiay: any): Observable<any> {
    let search = new URLSearchParams();
    return this.http.put(this.API, loaiGiay);
  }
}
