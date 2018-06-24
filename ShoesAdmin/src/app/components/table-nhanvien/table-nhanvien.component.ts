import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import "rxjs/Rx";
// jquyery phan trang
declare var jquery:any;
declare var $ :any;
//Models
import { Nhanvien } from '../.././models/nhanvien';
// services
import { UserService } from '../../services/user.service';
@Component({
	selector: 'app-table-nhanvien',
	templateUrl: './table-nhanvien.component.html',
	styleUrls: ['./table-nhanvien.component.css']
})
export class TableNhanvienComponent implements OnInit, OnDestroy {

	public list_nv: Nhanvien[] = [];
	public subscription: Subscription;
	// a: any;
	constructor(
		// private nhanvienService : NhanvienService
		private nhanvienService: UserService

	) { }

	ngOnInit() {
		this.loadData();
		this.showDataTable();
	}
// Load all staff

	showDataTable(){
		$(document).ready(function() {
			$('#table_nv').DataTable();
		} );
	}
	loadData() {
		this.nhanvienService.getAllNhanvien().subscribe(data => {
			// console.log(data);
			this.list_nv = data;
		}, error => {
			console.log(error);
		});
	}

	ngOnDestroy() {

	}
}
