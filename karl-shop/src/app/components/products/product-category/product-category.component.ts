import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventEmitter } from 'protractor';
import { ValueTransformer } from '@angular/compiler/src/util';
import { LoaigiayService } from '../../../services/loaigiay.service';
import { DataService } from '../../../services/data.service';
import { HomeProduct } from '../../../entity/home-product';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css'],
  providers: [DataService, LoaigiayService]
})
export class ProductCategoryComponent implements OnInit,OnDestroy {

  _detailArray: HomeProduct[] = [];
  _productArray: HomeProduct[] = [];
  name: string;
  eventVal: string;
  sub :any;
  constructor(private loaigiayService: LoaigiayService, private dataService: DataService,
    private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name'];
      this.getProduct(this.name);
    });
  }

  //GET product
  getProduct(name): void {
    this.dataService.getProductsByCategory(this.name)
      .subscribe(
        resultArray => {
          this._productArray = resultArray;
          // console.log(this._productArray);
        }
        , error => console.log("Error: " + error)
      )
  }

//show modal product
getDetailModal(pro: any) {
  this._detailArray = pro;
}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
