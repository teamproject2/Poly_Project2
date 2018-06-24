import { Component, OnInit } from '@angular/core';
import { LoaigiayService } from '../../services/loaigiay.service';
import { LoaiGiay } from '../../models/loaiGiay';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-loaigiay',
  templateUrl: './loaigiay.component.html',
  styleUrls: ['./loaigiay.component.css']
})
export class LoaigiayComponent implements OnInit {
  public list_giay: LoaiGiay[] = [];
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

  showModal() {
    $(document).ready(function () {
      $('.modal1').addClass('show');
      $('.modal-wrapper').addClass('show');
    });
  }

  removeModal() {
    $(document).ready(function () {
      $('.modal1').removeClass('show');
      $('.modal-wrapper').removeClass('show');
    });
  }

}
