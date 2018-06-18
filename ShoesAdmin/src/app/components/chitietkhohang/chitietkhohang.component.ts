import { Component, OnInit } from '@angular/core';
import { SanphamService } from '../../services/sanpham.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chitietkhohang',
  templateUrl: './chitietkhohang.component.html',
  styleUrls: ['./chitietkhohang.component.css']
})
export class ChitietkhohangComponent implements OnInit {

  listSize: any;
  id: number;

  constructor(private route: ActivatedRoute,
    private sanphamService: SanphamService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }

  delSize(id:number){
    
  }
}
