import { Component, OnInit } from '@angular/core';
import { ProductSelected } from '../../entity/product-selected-cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  _productInCart: ProductSelected[] = [];
  constructor() { }

  ngOnInit() {
    if (sessionStorage.productInCart !== null) {
      this._productInCart = JSON.parse(sessionStorage.productInCart);
    }
    console.log("In cart:" + JSON.stringify(this._productInCart));
  }

}
