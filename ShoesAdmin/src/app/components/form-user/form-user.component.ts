import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  public title: string = 'Routing';
  id: number;
  public subscription: Subscription;
  public chitiet_NV: any;
  constructor(
    private route: ActivatedRoute,
    private nhanvienservices: UserService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getChitiet_NV(this.id);
  }
  //
  getChitiet_NV(id:number): void {
    this.nhanvienservices.getSanphamByID(id).subscribe(data => {
      this.chitiet_NV = data;
      // console.log("NV:" + this.chitiet_NV.tenNhanVien);
    },
      error => {
        console.log(error);
      });
  }


}
