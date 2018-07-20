import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SanphamService } from '../../services/sanpham.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  role: String;

  constructor(private router: Router) { }

  ngOnInit() {
    this.role = JSON.parse(localStorage.getItem('user')).quyen[0].tenQuyen;
    console.log(this.role);
  }
}
