import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SidebarmenuComponent } from '../sidebarmenu/sidebarmenu.component';
import { TableBasicComponent } from '../table-basic/table-basic.component';
import { TableDataComponent } from '../table-data/table-data.component';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
