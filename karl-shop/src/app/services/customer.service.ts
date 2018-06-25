import { Injectable } from "@angular/core";
import { Customer } from "../entity/customer";
import { Observable } from "rxjs/Observable";
import { Http,URLSearchParams, Response } from "@angular/http";

@Injectable()

export class CustomerService {

    _url: string = 'http://localhost:9099/';

    constructor(private http: Http) {}
    // Must .map(response) & Observable type any not Response
    saveCustomer(customer: Customer): Observable<any> {
        let search = new URLSearchParams();

        return this.http.post(this._url + "khachhang/", customer, {search})
            .map(response => {
                return response.json();
            })  
    }
}