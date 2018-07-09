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
import { identifierModuleUrl } from '@angular/compiler';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table-hoadon',
  templateUrl: './table-hoadon.component.html',
  styleUrls: ['./table-hoadon.component.css']
})
export class TableHoadonComponent implements OnInit, OnDestroy{
  public list_hd: Hoadon[] = [];
  public subscription: Subscription;
  id: number;

  
  constructor(
    private hoadonServices: HoadonService,
    private router: Router,
    private route: ActivatedRoute,
    
  ) { }

  ngOnInit() {
    // load phan trang
    this.id = this.route.snapshot.params['id'];
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
  DelhoaDon(id: number){
    this.hoadonServices.DeletehoaDon(id).subscribe (
      result => {console.log("Delete Success!");
      this.loadData();
  },
    error => console.error(error)
  )
  }
  //
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
  ngOnDestroy() {

  }

}
