import { Component, OnInit } from '@angular/core';
import { LoaigiayService } from '../../services/loaigiay.service';
import { LoaiGiay } from '../../models/loaiGiay';

@Component({
  selector: 'app-loaigiay',
  templateUrl: './loaigiay.component.html',
  styleUrls: ['./loaigiay.component.css']
})
export class LoaigiayComponent implements OnInit {
  public list_giay:LoaiGiay[] = [];
  constructor(
    private loaigiayservice: LoaigiayService
  ) { }

  ngOnInit() {
    this.loadDataGiay();
  }
  // Load all Customer
  loadDataGiay() {
		this.loaigiayservice.getLoaiGiay().subscribe(data => {
			console.log(data);
			this.list_giay = data;
		}, error => {
			console.log(error);
		});
  }

}
