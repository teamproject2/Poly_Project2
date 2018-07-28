import { Component, OnInit, Output } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from '../../services/toastr.service';
import { AuthService } from '../../services/auth.service';
import { UserData } from '../../entity/user-data';
import { EventEmitter } from 'events';
import { SharedService } from '../../services/shared.service';
import { HttpHeaders } from '@angular/common/http';
import { RequestOptions, Headers } from '@angular/http';
import { Customer } from '../../entity/customer';
import { CustomerService } from '../../services/customer.service';
import { Location } from '@angular/common';

declare let toastr: any;
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  providers: [AuthService, SharedService, CustomerService]
})
export class UserLoginComponent implements OnInit {

  phonePattern =    "^((\\+91-?)|0)?[0-9]{10}$";
  // emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]{5,}\.[a-z]{2,4}$";

  regisForm:        FormGroup;
  email =           new FormControl('');
  tenKhachHang =    new FormControl('');
  soDienThoai =     new FormControl('');
  diaChi =          new FormControl('');

  hide = true;
  _userData: any;
  _storeUser: UserData[] = [];
  httpOptions: any;
  chkData: Customer;
  
  newCustomer: Customer = {
    id: 0,
    tenKhachHang: '',
    diaChi: '',
    soDienThoai: '',
    email: '',
    idAccount: ''
  };


  constructor(private router: Router, private toastrService: ToastrService,
    private authService: AuthService, private sharedService: SharedService,
    private customerService: CustomerService, private location: Location) {
    this.email = new FormControl('');
    this.soDienThoai = new FormControl('', [Validators.required, Validators.pattern(this.phonePattern)]);

    this.regisForm = new FormGroup({
      tenKhachHang: this.tenKhachHang,
      soDienThoai: this.soDienThoai,
      diaChi: this.diaChi,
      email: this.email
    });

  }



  ngOnInit() {
    if (sessionStorage.customer != null) {
      this.newCustomer = JSON.parse(sessionStorage.customer);
    }
  }


  saveNewCustomer(customer) {
    if(customer.email != '') {
      this.newCustomer.email = customer.email;
    }

    this.newCustomer.soDienThoai = customer.soDienThoai;
    this.newCustomer.diaChi = customer.diaChi;
    this.customerService.saveCustomer(this.newCustomer).subscribe(result => {
      this.newCustomer = result;
      sessionStorage.customer = JSON.stringify(result);
      if(sessionStorage.productInCart != null) {
        this.router.navigate(['/home/checkout']);
      }else {
        this.location.back();
      }
      
    });
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  signInWithFB() {
    this.authService.doFacebookLogin().then(result => {
      this._userData = result;
      console.log(result);
      
      this._storeUser.push(this._userData.additionalUserInfo.profile);

      if (this._storeUser != null) {
        this.toastrService.success(`Xin chào, ${this._userData.additionalUserInfo.profile.name}!`);
        let object = {
          name: this._userData.additionalUserInfo.profile.name,
          image: this._userData.additionalUserInfo.profile.picture.data.url,
          idAccount: this._userData.additionalUserInfo.profile.id,
          email: this.regisForm.controls.email.value
        };
        sessionStorage.tenKhachHang = JSON.stringify(object);
        this.sharedService.emitChange(JSON.stringify(object));

        const headers = new Headers();
        headers.append('idAccount', this._userData.additionalUserInfo.profile.id)
        headers.append('email', this._userData.additionalUserInfo.profile.email);
        console.log(headers.get('idAccount'));
        const options = new RequestOptions({ headers: headers });

        this.authService.checkKhachHang(options).subscribe(
          data => {
            this.chkData = data;
            console.log("Data: " + this.chkData);
            sessionStorage.customer = JSON.stringify(this.chkData);
            this.router.navigate(['/home/checkout']);
          },
          error => {
            console.error('Error: ' + error);
            let customer1: any = {
              tenKhachHang: this._userData.additionalUserInfo.profile.name,
              email: this._userData.additionalUserInfo.profile.email,
              idAccount: this._userData.additionalUserInfo.profile.id
            };

            sessionStorage.customer = JSON.stringify(customer1);

            this.router.navigate(['/home/account']);
          }
        )

        this.router.navigate(['/home/account/', this._userData.additionalUserInfo.profile.id]);
      }
    });
  }

  signInWithGoogle() {
    this.authService.doGoogleLogin();
  }

  showModal() {
    $(document).ready(function () {
      $('.modal-wrapper').addClass('show');
      $('.modal-login').addClass('show');

      $('.modal-wrapper').on('click', function () {
        $('.modal-login').removeClass('show');
        $('.modal-wrapper').removeClass('show');
      })
    });
  }

  removeModal() {
    $(document).ready(function () {
      $('.modal-login').removeClass('show');
      $('.modal-wrapper').removeClass('show');
    });
  }

}
