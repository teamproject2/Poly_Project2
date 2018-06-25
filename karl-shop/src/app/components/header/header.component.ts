import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { LoaigiayService } from '../../services/loaigiay.service';
import { HomeLoaiGiay } from '../../entity/home-loaigiay';
import { Router, ActivatedRoute } from '@angular/router';
import { UserData } from '../../entity/user-data';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [LoaigiayService, SharedService]
})
export class HeaderComponent implements OnInit{

  _loaigiayArray: HomeLoaiGiay[];
  _infoFB: UserData[] = [];
  _tenKhachHang: any;
  sub: any;
  idFB: string;
  person: any;

  constructor(private loaiGiayService: LoaigiayService,
              private router: Router,
              private route: ActivatedRoute, private sharedService: SharedService) { }

  ngOnInit() {
    this.getLoaiGiay();

    this.sharedService.changeEmitted$.subscribe(text => {
      console.log(text);
      
    })

    if (sessionStorage.tenKhachHang != null) {
      this._tenKhachHang = JSON.parse(sessionStorage.tenKhachHang);
      this._infoFB.push(this._tenKhachHang);
    }

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

}
