import { Injectable, Output, EventEmitter } from "@angular/core";
import { Customer } from "../entity/customer";
import { Observable } from "rxjs/Observable";
import { Http,URLSearchParams, Response } from "@angular/http";
import { UserData } from "../entity/user-data";

@Injectable()

export class CustomerService {

    @Output() customerData = new EventEmitter<any>();
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

    getCustomerByIdAccount(id: any): Observable<any> {
        return this.http.get(this._url + "khachhang/" + id)
        .map(response => {
            return response.json();
        })
    }

    getHoaDonByCustomerId(id: any): Observable<any> {
        return this.http.get(this._url + "hoadon/khachhang/" + id)
        .map(response => {
            return response.json();
        })
    }

}