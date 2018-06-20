import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import "rxjs/Rx";

//Models
import { Hoadon } from '../.././models/hoadon';
// services
import { HoadonService } from '../../services/hoadon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  public detail_hd: Hoadon[] = [];
  public subscription: Subscription;
  id: number;
  public chitiet_HD: any;
  constructor(
    private detailHDServices: HoadonService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getChitiet_HD(this.id);
  }
  getChitiet_HD(id:number): void {
    this.detailHDServices.getHoadonByID(id).subscribe(data => {
      this.chitiet_HD = data;
      // console.log("HD:" + this.chitiet_HD.trangThai);
    },
      error => {
        console.log(error);
      });
  }

}
