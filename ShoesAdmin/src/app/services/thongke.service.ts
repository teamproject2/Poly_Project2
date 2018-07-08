import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { SumOfMoneyInMonth } from "../models/sumOfMoneyInMonth";
import { map } from "rxjs/operators";
import { Top10Products } from "../models/top10Products";


@Injectable()

export class ThongKeService {
    API: string = "http://localhost:9099/";

    constructor(public http: Http) { }

    getLoaiGiayByMonthAndYear(month: number, year: number): Observable<SumOfMoneyInMonth[]> {
        return this.http
            .get(this.API + 'thongke?thang=' + month + '&nam=' + year)
            .pipe(map(data => {
                return <SumOfMoneyInMonth[]>data.json();
            }));
    }

    getLoaiGiayByMonthInYear(tenLoaiGiay: string, year: number): Observable<SumOfMoneyInMonth[]> {
        return this.http
            .get(this.API + 'thongke?tenLoaiGiay=' + tenLoaiGiay + '&nam=' + year)
            .pipe(map(data => {
                return <SumOfMoneyInMonth[]>data.json();
            }));
    }

    getTop10(month: number, year: number): Observable<Top10Products[]> {
        return this.http
            .get(this.API + 'thongke/top10products?thang=' + month + '&nam=' + year)
            .pipe(map(data => {
                return <Top10Products[]>data.json();
            }));
    }

    getSumOfMoney(year: number): Observable<SumOfMoneyInMonth[]> {
        return this.http
            .get(this.API + '/' + year)
            .pipe(map(data => {
                return <SumOfMoneyInMonth[]>data.json();
            }));
    }


}