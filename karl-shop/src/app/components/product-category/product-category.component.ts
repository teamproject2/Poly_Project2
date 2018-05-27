import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { LoaigiayService } from '../../services/loaigiay.service';
import { HomeLoaiGiay } from '../../entity/home-loaigiay';
import { HomeProduct } from '../../entity/home-product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css'],
  providers: [DataService, LoaigiayService]
})
export class ProductCategoryComponent implements OnInit {

  _loaiGiayArray: HomeLoaiGiay[];
  _tenGiay: string[] = [];
  _productArray: HomeProduct[] = [];
  name: string;

  constructor(private loaigiayService: LoaigiayService, private dataService: DataService,
    private route: ActivatedRoute, private router: Router) {
    this.name = this.route.snapshot.params['name'];
    console.log("aaa" + this.name);

  }

  ngOnInit() {


    this.getLoaiGiay();
    this.getProduct(this.name);
  }

  //GET loai giay
  getLoaiGiay(): void {
    this.loaigiayService.getLoaiGiay()
      .subscribe(
        resultArray => {
          this._loaiGiayArray = resultArray;
          for (var i = 0; i < this._loaiGiayArray.length; i++) {
            this._tenGiay[i] = this._loaiGiayArray[i].tenLoai;
          }
        },
        error => console.log("Error: " + error)
      )
  }

  //GET product
  getProduct(name: string): void {
    this.dataService.getProductsByCategory(name)
      .subscribe(
        resultArray => {
          this._productArray = resultArray;
          console.log(this._productArray);
        }
        , error => console.log("Error: " + error)
      )
  }

  changeCategory(name: string) {
    this.name = name;
    console.log("bbb" + this.name);

    this.ngOnInit();
  }


}
