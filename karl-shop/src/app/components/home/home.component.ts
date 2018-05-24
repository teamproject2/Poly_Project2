import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HomeProduct } from '../../entity/home-product';
import { LoaigiayService } from '../../services/loaigiay.service';
import { HomeLoaiGiay } from '../../entity/home-loaigiay';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DataService, LoaigiayService]
})
export class HomeComponent implements OnInit {
  _productArray: HomeProduct[];
  _loaiGiayArray: HomeLoaiGiay[];
  detailArray: HomeProduct[];
  constructor(private dataService: DataService, private loaigiayService: LoaigiayService) { }

  //GET data home-product
  getData(name: string): void {
    this.dataService.getData(name)
      .subscribe(
        resultArray => this._productArray = resultArray,
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
    this.getData('Adidas');
    this.getLoaiGiay();
  }

  //fixing
  getDetailModal(pro: any){
    this.detailArray = pro;
    console.log(this.detailArray);
    
    
  }

}
