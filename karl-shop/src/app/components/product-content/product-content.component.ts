import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoaigiayService } from '../../services/loaigiay.service';
import { HomeLoaiGiay } from '../../entity/home-loaigiay';
import { DataService } from '../../services/data.service';
import { HomeProduct } from '../../entity/home-product';

@Component({
  selector: 'app-product-content',
  templateUrl: './product-content.component.html',
  styleUrls: ['./product-content.component.css'],
  providers:[LoaigiayService, DataService]
})
export class ProductContentComponent implements OnInit {
  _recommendArray: HomeProduct[];
  _loaiGiayArray: HomeLoaiGiay[];
  _tenGiay: string[] = [];
  _productArray: HomeProduct[];
  constructor(private route: ActivatedRoute, private router: Router,
            private loaigiayService: LoaigiayService, private dataService: DataService) { }


  ngOnInit() {
    this.getLoaiGiay();
    this.getRecommendProducts('Adidas');
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

  goCate(name): void {
      this.router.navigate(['/products/category', name]);
  }


  //GET recommend products
  getRecommendProducts(name: string) {
    this.dataService.getData(name)
    .subscribe(resultArray => {
      this._recommendArray = resultArray;
    }), error => console.error('Error: ' + error);
  }

}
