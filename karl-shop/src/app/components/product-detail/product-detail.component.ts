import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../../services/details.service';
import { DetailProducts } from '../../entity/detail-products';

@Component({
  selector: 'app-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [DetailsService]
})
export class ProductDetailComponent implements OnInit {

  _detailProductArray: DetailProducts[];
  constructor(private detailService: DetailsService) { }

  ngOnInit() {
    this.getDetailProduct();
  }

  getDetailProduct() {
    this.detailService.getDetailProduct()
      .subscribe(
        resultArray => this._detailProductArray = resultArray,
        error => console.error("Error " + error)
      )
  }

}
