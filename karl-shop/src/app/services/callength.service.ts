import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { Http } from "@angular/http";
import { HomeProduct } from "../entity/home-product";

@Injectable()
export class CalLengthService {
    _productsArray: HomeProduct[] = [];
    constructor(private dataService: DataService, private http: Http) {}

    getAll() {
        this.dataService.getAllProduct()
        .subscribe(resultArray => {
            this._productsArray = resultArray;
        }), error => console.error('Error: ' + error);
    }
}