import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SanphamService } from '../../services/sanpham.service';
import { Sanpham } from '../../models/sanpham';
import { ChitietSanpham } from '../../models/ChitietSanpham';
import { Subscription } from 'rxjs';
import { Kichthuoc } from '../../models/kichthuoc';

@Component({
  selector: 'app-chitiet-sanpham',
  templateUrl: './chitiet-sanpham.component.html',
  styleUrls: ['./chitiet-sanpham.component.css']
})
export class ChitietSanphamComponent implements OnInit {
  //
  public title: string = 'Routing';
  // public chitietSp: ChitietSanpham[] = [];
  id: number;
  public subscription: Subscription;
  // @Input() chitietSp: ChitietSanpham;
  public chitietSp: any;



  constructor(
    // 
    private route: ActivatedRoute,
    private sanphamService: SanphamService,
    // private location: Location
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getChitiet_SP(this.id);
  }
  //
  getChitiet_SP(id:number): void {
    this.sanphamService.getSanphamByID(id).subscribe(data => {
      this.chitietSp = data;
      console.log("Sp:" + this.chitietSp.tenSanPham);
    },
      error => {
        console.log(error);
      });
  }


}
