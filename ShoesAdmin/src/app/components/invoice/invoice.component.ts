import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import "rxjs/Rx";

// services
import { HoadonService } from '../../services/hoadon.service';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from '../../models/invoice';
import { Chitiethoadon } from '../../models/chitiethoadon';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})

export class InvoiceComponent implements OnInit {
  
  _detailInvoice: Invoice[] = [];
  _productInInvoice: Chitiethoadon[];
  // _sumMoney: number = 0;
  subscription: Subscription;
  id: number;
  
  constructor(private detailHDServices: HoadonService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getDetailInvoice(this.id);
  }

  getDetailInvoice(id: number) {
    this.detailHDServices.getHoadonByID(id).subscribe(data => {
      this._detailInvoice = data;
    }),
      error => console.error('Error: ' + error);
  }

}
