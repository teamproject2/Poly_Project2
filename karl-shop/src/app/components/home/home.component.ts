import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HomeProduct } from '../../entity/home-product';
import { LoaigiayService } from '../../services/loaigiay.service';
import { HomeLoaiGiay } from '../../entity/home-loaigiay';
import {Routes, Router} from '@angular/router';
import { DetailProducts } from '../../entity/detail-products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DataService, LoaigiayService]
})
export class HomeComponent implements OnInit {
  _adidasArray: HomeProduct[];
  _nikeArray: HomeProduct[];
  _nbArray: HomeProduct[];

  _loaiGiayArray: HomeLoaiGiay[];
  detailArray: HomeProduct[];

  constructor(private dataService: DataService, private loaigiayService: LoaigiayService,
              private router: Router) { }

  //GET 3 sản phẩm Adidas
  getAdidasProduct(name: string): void {
    this.dataService.getData(name)
      .subscribe(
        resultArray => this._adidasArray = resultArray,
        error => console.log("Error: " + error)
      )
  }

  //GET 3 sản phẩm Nike
  getNikeProduct(name: string): void {
    this.dataService.getData(name)
      .subscribe(
        resultArray => this._nikeArray = resultArray,
        error => console.log("Error: " + error)
      )
  }

  //GET 3 sản phẩm Nike
  getNbProduct(name: string): void {
    this.dataService.getData(name)
      .subscribe(
        resultArray => this._nbArray = resultArray,
        error => console.log("Error: " + error)
      )
  }

  //GET loai giay
  getLoaiGiay(): void {
    this.loaigiayService.getLoaiGiay()
      .subscribe(
        resultArray => this._loaiGiayArray = resultArray,
        error => console.log("Error: " + error)
      )
  }

  ngOnInit() {
    this.getAdidasProduct('Adidas');
    this.getNikeProduct('Nike');
    this.getNbProduct('NB');
    this.getLoaiGiay();
  }


  getDetailModal(pro: any){
    this.detailArray = pro;
    console.log(this.detailArray);
  }

}
