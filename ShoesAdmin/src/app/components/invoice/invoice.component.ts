import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import "rxjs/Rx";

//Models
import { Hoadon } from '../.././models/hoadon';
// services
import { HoadonService } from '../../services/hoadon.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  public detail_hd: Hoadon[] = [];
  public subscription: Subscription;
  id: number;
  constructor(
    private detailHDServices: HoadonService
  ) { }

  ngOnInit() {
    this.loaddetail_Data(this.id);
  }
  // Load all Hoa don
  loaddetail_Data(id:number) {
    this.detailHDServices.getDetailSP_HD(id).subscribe(data => {
      console.log(data);
      this.detail_hd = data
    },
      error => {
        console.log(error);
      });
  }

}
