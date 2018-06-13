import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SanphamService } from '../../services/sanpham.service';
import { Sanpham } from '../../models/sanpham';
import { ChitietSanpham } from '../../models/ChitietSanpham';
import { Subscription } from 'rxjs';

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
  @Input() chitietSp: ChitietSanpham;



  constructor(
    // 
    private route: ActivatedRoute,
    private sanphamService: SanphamService,
    // private location: Location
  ) { }

  ngOnInit() {
   this.getChitiet_SP();
  }
  //
  getChitiet_SP(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.sanphamService.getSanphamByID(id).subscribe(data =>{
      this.chitietSp = data
      console.log(data);
      
    },
    error => {
      console.log(error);
    });
  }

 
}
