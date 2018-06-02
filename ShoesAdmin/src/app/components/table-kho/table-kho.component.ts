import { Component, OnInit } from '@angular/core';
// jquyery phan trang
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-table-kho',
  templateUrl: './table-kho.component.html',
  styleUrls: ['./table-kho.component.css']
})
export class TableKhoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

        // Phan trang
        $(document).ready(function() {
          $('#table_kh').DataTable();
      } );
  }

}
