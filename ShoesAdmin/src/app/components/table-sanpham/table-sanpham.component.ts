import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import "rxjs/Rx";
// jquyery phan trang
declare var jquery:any;
declare var $ :any;
//Models
import { Sanpham } from '../.././models/sanpham';
// services
import { SanphamService } from '../../services/sanpham.service';
@Component({
  selector: 'app-table-sanpham',
  templateUrl: './table-sanpham.component.html',
  styleUrls: ['./table-sanpham.component.css']
})
export class TableSanphamComponent implements OnInit {
   
  public list_sp: Sanpham[] = [];
  public subscription: Subscription;
  constructor(
    private sanphamServices: SanphamService
  ) { }

  ngOnInit() {
    this.loadData();
    // load phan trang
    $(document).ready(function() {
			$('#table_sp').DataTable();
		} );
  }
  // Load san pham
  loadData(){
    this.sanphamServices.getAllSanPham().subscribe(data =>{
      console.log(data);
      this.list_sp = data
    },
    error => {
      console.log(error);
    });
  }
}
