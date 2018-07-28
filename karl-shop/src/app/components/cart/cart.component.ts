import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductSelected } from '../../entity/product-selected-cart';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserData } from '../../entity/user-data';
import { Customer } from '../../entity/customer';
import { ToastrService } from '../../services/toastr.service';
import { UserInfo } from '../../entity/userInfo';
import { RequestOptions, Headers } from '@angular/http';
import { CustomerService } from '../../services/customer.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [AuthService, CustomerService]
})
export class CartComponent implements OnInit {

  @Output() customerData = new EventEmitter<any>();
  _productInCart: ProductSelected[] = [];
  _sumOfMoney: number = 0;
  _storeUser: UserData[] = [];
  chkData: Customer;
  _userData: any;
  userInfo: UserInfo;

  constructor(private router: Router,
    private authService: AuthService,
    private toastrService: ToastrService,
    private customerService: CustomerService) { }

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

    if (sessionStorage.tenKhachHang == "" || sessionStorage.customer == "" || sessionStorage.tenKhachHang == null || sessionStorage.customer == null) {
      $(document).ready(function () {
        $('.modal-wrapper').addClass('show');
        $('.modal-login').addClass('show');

        $('.modal-wrapper').on('click', function () {
          $('.modal-login').removeClass('show');
          $('.modal-wrapper').removeClass('show');
        })
      });
    } else {
      this.router.navigate(['/home/checkout']);
    }

    sessionStorage.productInCart = JSON.stringify(this._productInCart);
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

  signInWithFB() {
    this.authService.doFacebookLogin().then(result => {
      this._userData = result;
      this._storeUser.push(this._userData.additionalUserInfo.profile);
      if (this._storeUser != null) {
        this.toastrService.success(`Xin chào, ${this._userData.additionalUserInfo.profile.name}!`);
        let object = {
          name: this._userData.additionalUserInfo.profile.name,
          image: this._userData.additionalUserInfo.profile.picture.data.url,
          idAccount: this._userData.additionalUserInfo.profile.id
        };
        sessionStorage.tenKhachHang = JSON.stringify(object);
        // this.userInfo = JSON.parse(sessionStorage.tenKhachHang);
        const headers = new Headers();
        headers.append('idAccount', this._userData.additionalUserInfo.profile.id)
        headers.append('email', this._userData.additionalUserInfo.profile.email);
        const options = new RequestOptions({ headers: headers });

        this.authService.checkKhachHang(options).subscribe(
          data => {
            this.chkData = data;
            sessionStorage.customer = JSON.stringify(this.chkData);
            this.router.navigate(['/home/checkout']);
          },
          error => {
            console.error('Error: ' + error);
            let customer1: any;
            customer1 = {
              tenKhachHang: this._userData.additionalUserInfo.profile.name,
              email: this._userData.additionalUserInfo.profile.email,
              idAccount: this._userData.additionalUserInfo.profile.id
            };
            sessionStorage.customer = JSON.stringify(customer1);
            this.router.navigate(['/home/account']);
          }
        )
      }
    });
  }

  signInWithGoogle() {
    this.authService.doGoogleLogin().then(result => {
      this._userData = result;
      this._storeUser.push(this._userData.additionalUserInfo.profile);

      if (this._storeUser != null) {
        this.toastrService.success(`Xin chào, ${this._userData.additionalUserInfo.profile.name}!`);
        let object = {
          name: this._userData.additionalUserInfo.profile.name,
          image: this._userData.additionalUserInfo.profile.picture,
          idAccount: this._userData.additionalUserInfo.profile.id
        };
        sessionStorage.tenKhachHang = JSON.stringify(object);
        // this.userInfo = JSON.parse(sessionStorage.tenKhachHang);
        const headers = new Headers();
        headers.append('idAccount', this._userData.additionalUserInfo.profile.id)
        headers.append('email', this._userData.additionalUserInfo.profile.email);
        const options = new RequestOptions({ headers: headers });

        this.authService.checkKhachHang(options).subscribe(
          data => {
            this.chkData = data;
            sessionStorage.customer = JSON.stringify(this.chkData);
            this.router.navigate(['/home/checkout']);
          },
          error => {
            console.error('Error: ' + error);
            let customer1: any;
            customer1 = {
              tenKhachHang: this._userData.additionalUserInfo.profile.name,
              email: this._userData.additionalUserInfo.profile.email,
              idAccount: this._userData.additionalUserInfo.profile.id
            };
            sessionStorage.customer = JSON.stringify(customer1);
            this.router.navigate(['/home/account']);
          }
        )
      }
    })
  }

}
