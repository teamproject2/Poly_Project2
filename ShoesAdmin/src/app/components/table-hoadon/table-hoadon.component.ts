import { Component, OnInit, OnDestroy, SimpleChanges, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
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
export class TableHoadonComponent implements OnInit, OnDestroy {
  public list_hd: Hoadon[] = [];
  public subscription: Subscription;
  id: number;


  constructor(
    private hoadonServices: HoadonService,
    private router: Router,
    private route: ActivatedRoute,
    private _vcr: ViewContainerRef,
    private toastr: ToastsManager
  ) { this.toastr.setRootViewContainerRef(_vcr); }

  ngOnInit() {
    // load phan trang
    this.id = this.route.snapshot.params['id'];
    this.loadData();

  }

  // Phan trang
  showDataTable() {
    $(document).ready(function () {

      $('#table_hd').DataTable({
        "order": [[0, "desc"]]
      });
      $.fn.dataTable.ext.errMode = 'none';

    });
  }
  // Load all Hoa don
  loadData() {
    this.hoadonServices.getAllSP_HD().subscribe((data: Hoadon[]) => {
      this.list_hd = data;
      this.showDataTable();
    },
      error => {
        console.log(error);
      });
  }
  //
  DelhoaDon() {
    this.hoadonServices.DeletehoaDon(this.id).subscribe(
      result => {
        this.removeModal();
        this.loadData();
        this.toastr.success('Delete success!');
      },
      error => console.error(error)
    )
  }
  //
  showModal(p: number) {
    this.id = p;
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
