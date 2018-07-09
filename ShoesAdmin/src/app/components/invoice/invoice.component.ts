import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import "rxjs/Rx";

// services
import { HoadonService } from '../../services/hoadon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from '../../models/invoice';
import { Chitiethoadon } from '../../models/chitiethoadon';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})

export class InvoiceComponent implements OnInit {

  _detailInvoice: any;
  _productInInvoice: Chitiethoadon[];
  // _sumMoney: number = 0;
  subscription: Subscription;
  id: number;

  constructor(private detailHDServices: HoadonService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getDetailInvoice(this.id);
  }

  getDetailInvoice(id: number) {
    this.detailHDServices.getHoadonByID(id).subscribe(
      data => {
        this._detailInvoice = data;
        if (this._detailInvoice.trangThai == 'IN_PROGRESS') {
          this._detailInvoice.trangThai = 'Đang chờ';
        }
        if (this._detailInvoice.trangThai == 'DONE') {
          this._detailInvoice.trangThai = 'Hoàn thành';
        }
      },
      error => console.error('Error: ' + error)
    )
  }

  changeTrangThai(id:number){
    this.detailHDServices.Chuyentrangthai(id).subscribe(result =>{
      console.log("Chuyen Trang Thai Thanh Cong ");
      this._detailInvoice.trangThai = 'Hoàn thành';
    })
  }
}
