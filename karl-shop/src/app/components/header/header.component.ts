import { Component, OnInit } from '@angular/core';
import { LoaigiayService } from '../../services/loaigiay.service';
import { HomeLoaiGiay } from '../../entity/home-loaigiay';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[LoaigiayService]
})
export class HeaderComponent implements OnInit {
  _loaigiayArray: HomeLoaiGiay[];
  constructor(private loaiGiayService: LoaigiayService, private router: Router) { }

  ngOnInit() {
    this.getLoaiGiay();
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
    this.router.navigate(['/products/category', name]);
  }

}
