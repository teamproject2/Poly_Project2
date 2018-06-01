import { Component, OnInit, OnDestroy } from '@angular/core';
import { Nhanvien } from '../.././models/nhanvien';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import "rxjs/Rx";
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
	}
// Load all staff
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
