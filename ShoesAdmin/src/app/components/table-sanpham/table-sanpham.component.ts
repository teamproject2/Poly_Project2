import { Component, OnInit, SimpleChanges, OnDestroy, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import "rxjs/Rx";
// jquyery phan trang
declare var jquery: any;
declare var $: any;
//Models
import { Sanpham } from '../.././models/sanpham';
// services
import { SanphamService } from '../../services/sanpham.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-table-sanpham',
  templateUrl: './table-sanpham.component.html',
  styleUrls: ['./table-sanpham.component.css']
})
export class TableSanphamComponent implements OnInit {

  public list_sp: Sanpham[] = [];
  public subscription: Subscription;
  constructor(
    private sanphamServices: SanphamService,
    public routerService: Router,
    public activatedRoute: ActivatedRoute

  ) { }

  ngOnInit() {

    this.loadData();
    this.File_export();
  }
  // Phan trang
  showDataTable() {
    $(document).ready(function () {
      $('#table_sp').DataTable();
    });
  }
//
	//
	File_export(){
		$(document).ready(function() {
			var table = $('#table_sp').DataTable();
	 
			new $.fn.dataTable.Buttons( table, {
					buttons: [
						'copy', 'csv', 'excel', 'pdf', 'print'
					]
			} );
	 
			table.buttons( 0, null ).container().prependTo(
					table.table().container()
			);
	} );
	}
  // Load san pham
  loadData() {
    this.sanphamServices.getAllSanPham().subscribe(data => {
      this.list_sp = data;
      this.showDataTable();
    },
      error => {
        console.log(error);
      });
  }
  //
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
  //

}
