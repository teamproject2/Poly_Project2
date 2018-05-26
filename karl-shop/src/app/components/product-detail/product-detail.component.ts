import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../../services/details.service';
import { DetailProducts } from '../../entity/detail-products';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [DetailsService]
})
export class ProductDetailComponent implements OnInit {

  _detailProductArray: DetailProducts[];

  constructor(private detailService: DetailsService, private route: ActivatedRoute, private router: Router) { }

  getDetailProduct(id: number) {
    this.detailService.getDetailProduct(id)
      .subscribe(
        resultArray => this._detailProductArray = resultArray,
        error => console.error("Error " + error)
      )
     
  }

  ngOnInit() {
    this.getDetailProduct(1)
    console.log(this._detailProductArray);
  }
}
