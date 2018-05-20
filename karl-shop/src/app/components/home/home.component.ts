import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { HomeProduct } from '../shared/home-product';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DataService]
})
export class HomeComponent implements OnInit {
  _productArray: HomeProduct[];

  constructor(private dataService: DataService) { }
  getData(): void {
    this.dataService.getData('Adidas')
      .subscribe(
        resultArray => this._productArray = resultArray,
        error => console.log("Error: " + error)
      )
  }

  ngOnInit() {
    this.getData();
  }

}
