import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions } from "@angular/http";
import { Kichthuoc } from '../models/kichthuoc';

@Injectable()
export class KichthuocService {

  constructor(public http: Http) { }
  public API: string = "http://localhost:9099/";

  getListSize(): Observable<Kichthuoc[]> {
    return this.http.get(this.API + "kichthuoc")
      .map((response: Response) => {
        return <Kichthuoc[]>response.json();
      })
      .catch(this.handleError);
  }
  
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}

