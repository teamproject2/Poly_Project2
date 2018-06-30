import { Component, OnInit } from '@angular/core';
import { ProductSelected } from '../../entity/product-selected-cart';
import { Router } from '@angular/router';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  _productInCart: ProductSelected[] = [];
  _sumOfMoney: number = 0;

  constructor(private router: Router) { }

  ngOnInit() {
    if (sessionStorage.productInCart !== null) {
      this._productInCart = JSON.parse(sessionStorage.productInCart);
      this._productInCart.forEach(p => {
        this._sumOfMoney += p.donGia * (1 - p.chietKhau) * p.soLuong;
      })
    }
    console.log("In cart:" + JSON.stringify(this._productInCart));

  }

  minusQuantity(id, tenKichThuoc, soLuong) {
    // this._productInCart = JSON.parse(sessionStorage.productInCart);
    this._productInCart.forEach(p => {
      if (p.id === id && p.tenKichThuoc === tenKichThuoc && soLuong > 1) {
        p.soLuong = --soLuong;
        this._sumOfMoney -= p.donGia * (1 - p.chietKhau);
      }
    });
    console.log("minus: " + JSON.stringify(this._productInCart));

  }

  plusQuantity(id, tenKichThuoc, soLuong) {
    // this._productInCart = JSON.parse(sessionStorage.productInCart);
    this._productInCart.forEach(p => {
      if (p.id === id && p.tenKichThuoc === tenKichThuoc && soLuong < p.soLuongKho) {
        p.soLuong = ++soLuong;
        this._sumOfMoney += p.donGia * (1 - p.chietKhau);
      }
    });
    console.log("plus: " + JSON.stringify(this._productInCart));
  }

  deleteProduct(id, tenKichThuoc) {
    // this._productInCart = JSON.parse(sessionStorage.productInCart);
    this._productInCart.forEach(p => {
      if (p.id === id && p.tenKichThuoc === tenKichThuoc) {
        this._productInCart.splice(this._productInCart.indexOf(p), 1);
        sessionStorage.productInCart = JSON.stringify(this._productInCart);
        this._sumOfMoney -= p.donGia * (1 - p.chietKhau) * p.soLuong;
        console.log(this._productInCart);
        return;
      }
    })
  }

  cancelAllProducts() {
    this._productInCart = [];
    sessionStorage.productInCart = JSON.stringify(this._productInCart);
    this._sumOfMoney = 0;
    console.log(this._productInCart);
  }

  getAllProductInCart() {

    if (sessionStorage.tenKhachHang == null || sessionStorage.customer == null) {
      $(document).ready(function () {
        $('.modal-wrapper').addClass('show');
        $('.modal-login').addClass('show');

        $('.modal-wrapper').on('click', function () {
          $('.modal-login').removeClass('show');
          $('.modal-wrapper').removeClass('show');
        })
      });
    }else {
      this.router.navigate(['/home/checkout']);
    }


    sessionStorage.productInCart = JSON.stringify(this._productInCart);
    this._productInCart.forEach(p => {

      let quantityPro = p.soLuong; // Fix auto increase _sumOfMoney
      if (quantityPro > p.soLuong) {
        this._sumOfMoney += p.donGia * (1 - p.chietKhau) * p.soLuong;
      }
    });
    console.log(this._sumOfMoney);
  }

  removeModal() {
    $(document).ready(function () {
      $('.modal-login').removeClass('show');
      $('.modal-wrapper').removeClass('show');
    });
  }

  goShopping() {
    sessionStorage.productInCart = JSON.stringify(this._productInCart);
  }

}
