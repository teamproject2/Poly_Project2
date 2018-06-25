import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import "rxjs/Rx";
// jquery phan trang
declare var jquery: any;
declare var $: any;
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
	constructor(
		private nhanvienService: UserService

	) { }

	ngOnInit() {
		this.loadData();
	}

	// Phan Trang
	showDataTable() {
		$(document).ready(function () {
			$('#table_nv').DataTable();
		});
	}
	// Load all staff
	loadData() {
		this.nhanvienService.getAllNhanvien().subscribe(data => {
			this.list_nv = data;
			this.showDataTable();
		}, error => {
			console.log(error);
		});
	}

	ngOnDestroy() {

	}
}
