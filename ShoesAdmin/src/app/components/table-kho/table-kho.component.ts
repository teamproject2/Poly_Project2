import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import "rxjs/Rx";
// jquyery phan trang
declare var jquery: any;
declare var $: any;
//Models
import { Khohang } from '../.././models/khohang';
// services
import { SanphamService } from '../../services/sanpham.service';
@Component({
  selector: 'app-table-kho',
  templateUrl: './table-kho.component.html',
  styleUrls: ['./table-kho.component.css']
})
export class TableKhoComponent implements OnInit, OnDestroy {

  public list_spkho: Khohang[] = [];
  public subscription: Subscription;
  // 
  constructor(
    private khohangServices: SanphamService

  ) { }
//
  ngOnInit() {
    this.loadData();
    // Phan trang
    $(document).ready(function () {
      $('#table_spkho').DataTable();
    });
  }
  // Load all san pham trong Kho
  loadData() {
    this.khohangServices.getAllSP_Kho().subscribe(data => {
      console.log(data);
      this.list_spkho = data;
    }, error => {
      console.log(error);
    });
  }

  ngOnDestroy() {

  }

}
