import { Component, OnInit, OnDestroy,SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import "rxjs/Rx";
// jquyery phan trang
declare var jquery: any;
declare var $: any;
//Models
import { Hoadon } from '../.././models/hoadon';
// services
import { HoadonService } from '../../services/hoadon.service';

@Component({
  selector: 'app-table-hoadon',
  templateUrl: './table-hoadon.component.html',
  styleUrls: ['./table-hoadon.component.css']
})
export class TableHoadonComponent implements OnInit, OnDestroy{
  public list_hd: Hoadon[] = [];
  public subscription: Subscription;
  constructor(
    private hoadonServices: HoadonService
  ) { }

  ngOnInit() {
    // load phan trang
    this.loadData();

  }
  
    // Phan trang
  showDataTable() {
    $(document).ready(function () {
      $('#table_hd').DataTable();
    });
  }
  // Load all Hoa don
  loadData() {
    this.hoadonServices.getAllSP_HD().subscribe(data => {
      console.log(data);
      this.list_hd = data;
      this.showDataTable();
    },
      error => {
        console.log(error);
      });
  }
  //

  ngOnDestroy() {

  }

}
