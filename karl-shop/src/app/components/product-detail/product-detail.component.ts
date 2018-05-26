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

  _detailProduct: DetailProducts;
  _hinhSanPham: string[] = [];
  id: number;
  constructor(private detailService: DetailsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getDetailProduct(this.id);
    console.log(this.id);
    
  }

  getDetailProduct(id) {
    this.detailService.getDetailProduct(id)
      .subscribe(
        resultArray => {
          this._detailProduct = resultArray;
          console.log(this._detailProduct);
          for(var i=0; i<this._detailProduct.hinhSanPham.length;i++){
            this._hinhSanPham[i] = this._detailProduct.hinhSanPham[i].hinh;
          }
          console.log(this._hinhSanPham);
          
        },
        error => console.error("Error " + error)
      )
      
  }

  
}
