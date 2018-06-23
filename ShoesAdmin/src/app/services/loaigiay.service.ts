import { Injectable } from '@angular/core';
import { LoaiGiay } from '../models/loaiGiay';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class LoaigiayService {
  public API: string = "http://localhost:9099/loaigiay";
  public loaigiay: LoaiGiay[] = [];
  constructor(
    public http: Http
  ) { }
  // Get all loại giay
  getLoaiGiay(): Observable<LoaiGiay[]> {
    return this.http.get(this.API).pipe(map(data => {
      return <LoaiGiay[]>data.json();
    }));
  }
}
