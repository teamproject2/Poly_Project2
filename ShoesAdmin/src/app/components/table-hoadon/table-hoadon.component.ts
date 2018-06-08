import { Component, OnInit, OnDestroy} from '@angular/core';
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
import { SanphamService } from '../../services/sanpham.service';

@Component({
  selector: 'app-table-hoadon',
  templateUrl: './table-hoadon.component.html',
  styleUrls: ['./table-hoadon.component.css']
})
export class TableHoadonComponent implements OnInit, OnDestroy {
  public list_hd: Hoadon[] = [];
  public subscription: Subscription;
  constructor(
    private hoadonServices: SanphamService
  ) { }

  ngOnInit() {
    this.loadData();
    // load phan trang
    $(document).ready(function () {
      $('#table_hd').DataTable();
    });
  }
  // Load all Hoa don
  loadData() {
    this.hoadonServices.getAllSP_HD().subscribe(data => {
      console.log(data);
      this.list_hd = data
    },
      error => {
        console.log(error);
      });
  }
  //
  ngOnDestroy(){
    
  }

}
