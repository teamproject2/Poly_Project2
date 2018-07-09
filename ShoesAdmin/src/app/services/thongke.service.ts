import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { SumOfMoneyInMonth } from "../models/sumOfMoneyInMonth";
import { map } from "rxjs/operators";
import { Top10Products } from "../models/top10Products";
import { SumLoaiGiayByMonthAndYear } from "../models/SumLoaiGiayByMonthAndYear";


@Injectable()

export class ThongKeService {
    API: string = "http://localhost:9099/";

    constructor(public http: Http) { }

    getLoaiGiayByMonthAndYear(month: number, year: number): Observable<SumLoaiGiayByMonthAndYear[]> {
        return this.http
            .get(this.API + 'thongke/loaigiaytrongthang?thang=' + month + '&nam=' + year)
            .pipe(map(data => {
                return <SumLoaiGiayByMonthAndYear[]>data.json();
            }));
    }

    getLoaiGiayByMonthInYear(tenLoaiGiay: string, year: number): Observable<SumOfMoneyInMonth[]> {
        return this.http
            .get(this.API + 'thongke/loaigiaytrongnam?loaigiay=' + tenLoaiGiay + '&nam=' + year)
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
            .get(this.API + 'thongke/' + year)
            .pipe(map(data => {
                return <SumOfMoneyInMonth[]>data.json();
            }));
    }


}