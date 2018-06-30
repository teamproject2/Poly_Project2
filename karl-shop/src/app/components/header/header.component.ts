import { Component, OnInit }        from '@angular/core';
import { LoaigiayService }          from '../../services/loaigiay.service';
import { HomeLoaiGiay }             from '../../entity/home-loaigiay';
import { Router}                    from '@angular/router';
import { UserData }                 from '../../entity/user-data';
import { AuthService }              from '../../services/auth.service';
import { ToastrService }            from '../../services/toastr.service';
import { RequestOptions, Headers }  from '@angular/http';
import { Customer }                 from '../../entity/customer';
import { UserInfo } from '../../entity/userInfo';

@Component({
  selector:     'app-header',
  templateUrl:  './header.component.html',
  styleUrls:    ['./header.component.css'],
  providers:    [LoaigiayService, AuthService]
})
export class HeaderComponent implements OnInit {

  _loaigiayArray:     HomeLoaiGiay[];
  _storeUser:         UserData[] = [];
  chkData:            Customer;
  _userData:          any;
  userInfo:           UserInfo;
  

  constructor(private loaiGiayService: LoaigiayService,
    private router: Router,
    private toastrService: ToastrService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getLoaiGiay();
    // this.sharedService.changeEmitted$.subscribe(text => {
    // })
  }

  // SHOW left-bar-menu
  showLeftBar() {
    var ele = document.querySelector('.catagories-side-menu2');
    ele.classList.toggle('show');
  }

  // HIDE left-bar-menu
  hideMenu() {
    var ele = document.querySelector('.catagories-side-menu2');
    ele.classList.remove('show');
  }

  //GET Loai Giay
  getLoaiGiay() {
    this.loaiGiayService.getLoaiGiay()
      .subscribe(resultArray => {
        this._loaigiayArray = resultArray;
      }), error => console.error('Error: ' + error);
  }

  //GET product by category
  getProductByCate(name) {
    this.router.navigate(['/home/category', name]);
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
        this.userInfo = JSON.parse(sessionStorage.tenKhachHang);
        // this.sharedService.emitChange(JSON.stringify(object));

        const headers = new Headers();
        headers.append('idAccount', this._userData.additionalUserInfo.profile.id)
        headers.append('email', this._userData.additionalUserInfo.profile.email);
        // console.log(headers.get('idAccount'));
        const options = new RequestOptions({ headers: headers });

        this.authService.checkKhachHang(options).subscribe(
          data => {
            this.chkData = data;
            // console.log("Data: " + this.chkData);
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

        this.router.navigate(['/home/account/', this._userData.additionalUserInfo.profile.id]);
      }
    });
  }

  signInWithGoogle() {
    this.authService.doGoogleLogin();
  }

  signOut() {
    window.location.assign('http://localhost:4200/home');
    sessionStorage.tenKhachHang = [];
    sessionStorage.customer = [];
  }

}
