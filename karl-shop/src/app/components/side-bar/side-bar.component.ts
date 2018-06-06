import { Component, OnInit } from '@angular/core';
import { HomeProduct } from '../../entity/home-product';
import { HomeLoaiGiay } from '../../entity/home-loaigiay';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaigiayService } from '../../services/loaigiay.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  providers:[LoaigiayService, DataService]
})
export class SideBarComponent implements OnInit {

  _recommendArray: HomeProduct[];
  _loaiGiayArray: HomeLoaiGiay[];
  _tenGiay: string[] = [];
  _productArray: HomeProduct[];
  constructor(private route: ActivatedRoute, private router: Router,
    private loaigiayService: LoaigiayService, private dataService: DataService) { }


  ngOnInit() {
    this.getLoaiGiay();
    this.getRecommendProducts('Adidas');
  }

  //GET loai giay
  getLoaiGiay(): void {
    this.loaigiayService.getLoaiGiay()
      .subscribe(
        resultArray => {
          this._loaiGiayArray = resultArray;
          for (var i = 0; i < this._loaiGiayArray.length; i++) {
            this._tenGiay[i] = this._loaiGiayArray[i].tenLoai;
          }
        },
        error => console.log("Error: " + error)
      )
  }

  goCate(name): void {
    this.router.navigate(['/home/category', name]);
  }


  //GET recommend products
  getRecommendProducts(name: string) {
    this.dataService.getData(name)
      .subscribe(resultArray => {
        this._recommendArray = resultArray;
      }), error => console.error('Error: ' + error);
  }

}
