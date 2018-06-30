import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../../services/details.service';
import { DetailProducts } from '../../entity/detail-products';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductSelected } from '../../entity/product-selected-cart';
import { SizeProduct } from '../../entity/size-product';
import { StorageProduct } from '../../entity/storage-product';
declare var jquery: any;
declare var $: any;

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
  productSelect: ProductSelected = { id: 1, tenSanPham: '', tenKichThuoc: '', chietKhau: 1, donGia: 1, hinhSanPham: '', soLuong: 1, soLuongKho: 1 };
  _productInCart: ProductSelected[] = [];
  _productInCartOldLength: number;
  selectedSize: any;
  _sumOfMoney: number = 0;

  constructor(private detailService: DetailsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getDetailProduct(this.id);
    if (sessionStorage.productInCart !== null) {
      this._productInCart = JSON.parse(sessionStorage.productInCart);
      this._productInCartOldLength = this._productInCart.length;
    }
    console.log("1:" + JSON.stringify(this._productInCart));
  }

  getDetailProduct(id) {
    this.detailService.getDetailProduct(id)
      .subscribe(
        resultArray => {
          this._detailProduct = resultArray;
          console.log(this._detailProduct);
          for (var i = 0; i < this._detailProduct.hinhSanPham.length; i++) {
            this._hinhSanPham[i] = this._detailProduct.hinhSanPham[i].hinh;
          }
          // console.log(this._hinhSanPham);

        },
        error => console.error("Error " + error)
      )
  }

  selectSize(size: SizeProduct) {
    this.productSelect.id = this.id;
    this.productSelect.tenKichThuoc = size.tenKichThuoc;
    this.productSelect.tenSanPham = this._detailProduct.tenSanPham;
    this.productSelect.chietKhau = this._detailProduct.chietKhau;
    this.productSelect.donGia = this._detailProduct.donGia;
    this.productSelect.hinhSanPham = this._detailProduct.hinhSanPham[0].hinh;
    this._detailProduct.hangTrongKho.forEach(p => {
      if (p.kichThuoc.tenKichThuoc === size.tenKichThuoc) {
        this.productSelect.soLuongKho = p.soLuong;
      }
    })

    let count = 0;
    if (this._productInCart.length === 0) {
      this._productInCart.push(this.productSelect);
    } else {
      if (this._productInCart.length > this._productInCartOldLength) {
        this._productInCart.pop();
      }
      for (let i = 0; i < this._productInCart.length; i++) {
        if (JSON.stringify(this._productInCart[i]) === JSON.stringify(this.productSelect)) {
          count++;
        }
      }
      if (count === 0) {
        this._productInCart.push(this.productSelect);
      }
    }
    console.log("2:" + JSON.stringify(this._productInCart));

  }

  addToCart() {
    sessionStorage.productInCart = JSON.stringify(this._productInCart);
    this.router.navigate(["home/cart"]);
  }

  selectActive(size) {
    $("#ss" + this.selectedSize).removeClass('actives');
    $("#ss" + size).addClass('actives');
    this.selectedSize = size;
  }
}