import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import "rxjs/Rx";
//Services
import { UserService } from '../../services/user.service';
//Models
import { Khachhang } from '../../models/khachhang';

@Component({
  selector: 'app-table-khachhang',
  templateUrl: './table-khachhang.component.html',
  styleUrls: ['./table-khachhang.component.css']
})
export class TableKhachhangComponent implements OnInit, OnDestroy {
  public list_kh: Khachhang[] = [];
	public subscription: Subscription;
  constructor(
    private khachhangService : UserService
  ) { }

  ngOnInit() {
    this.loadData();
  }
// Load all Customer
  loadData() {
		this.khachhangService.getAllKhachhang().subscribe(data => {
			// console.log(data);
			this.list_kh = data;
		}, error => {
			console.log(error);
		});
  }
  
  ngOnDestroy(){

  }
}
