import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormsModule, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
  providers: [UserService]
})
export class FormUserComponent implements OnInit {

  listnhanvien = new Array();
  // public title: string = 'Routing';
  id: number = 0;
  public subscription: Subscription;
  public chitiet_NV = {
    id : '',
    tenNhanVien: '',
    gioiTinh: '',
    ngaySinh: '',
    diaChi: '',
    soDienThoai: '',
    email: ''
  };
  //
  chitietNhanVien: FormGroup;
  idNv: FormControl;
  hoTen: FormControl;
  gioiTinh: FormControl;
  ngaySinh: FormControl;
  email: FormControl;
  diaChi: FormControl;
  soDienThoai: FormControl;
  //
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private nhanvienservices: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log("ID: "+ this.id);
    if(this.id != 0){
      this.getChitiet_NV(this.id);
    }

    this.idNv = new FormControl('', Validators.required);
    this.hoTen = new FormControl('', [Validators.required, Validators.minLength(3)]);
    this.ngaySinh = new FormControl('', Validators.required);
    this.gioiTinh = new FormControl('', Validators.required);
    this.diaChi = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.required);
    this.soDienThoai = new FormControl('');

    this.chitietNhanVien = this.formBuilder.group({
      idNv: this.idNv,
      hoTen: this.hoTen,
      ngaySinh: this.ngaySinh,
      gioiTinh: this.gioiTinh,
      diaChi: this.diaChi,
      email: this.email,
      soDienThoai: this.soDienThoai
    });
    this.onChanges();
  }
  //
  getChitiet_NV(id: number): void {
    this.nhanvienservices.getNhanvienbyID(id).subscribe(data => {
      this.chitiet_NV = data;
    },
      error => {
        console.log(error);
      });
  }
  //
  onChanges(): void {
    this.chitietNhanVien.valueChanges.subscribe(val => {
      // this.chitiet_NV = val;
      // console.log(this.chitiet_NV);
      this.chitiet_NV.id = val.idNv.length > 0 ? val.idNv : this.chitiet_NV.id;
      this.chitiet_NV.tenNhanVien = val.hoTen.length > 0 ? val.hoTen : this.chitiet_NV.tenNhanVien;
      this.chitiet_NV.gioiTinh = val.gioiTinh.length > 0 ? val.gioiTinh : this.chitiet_NV.gioiTinh;;
      this.chitiet_NV.diaChi = val.diaChi.length > 0 ? val.diaChi : this.chitiet_NV.diaChi;
      this.chitiet_NV.email = val.email.length > 0 ? val.email : this.chitiet_NV.email;
      this.chitiet_NV.ngaySinh = val.ngaySinh.length > 0 ? val.ngaySinh: this.chitiet_NV.ngaySinh;
      this.chitiet_NV.soDienThoai = val.soDienThoai.length > 0 ? val.soDienThoai: this.chitiet_NV.soDienThoai;
      console.log("sdsda2: " + JSON.stringify(this.chitiet_NV));
    });
  }
//
  saveNhanvien() {
    // let pattern_hoTen = /[^!@#$%^&*0-9]{3,50}/;
    // if(pattern_hoTen.exec(this.chitiet_NV.tenNhanVien)){
    //   console.log("Matched!"); 
    // }else{
    //   console.log("Wrong");
    // }
    console.log("sdsda1: " + JSON.stringify(this.chitietNhanVien.value));
    console.log("sdsda2: " + JSON.stringify(this.chitiet_NV));
    
    if(this.id == 0){
      this.nhanvienservices.insert_Nv(this.chitiet_NV).subscribe(
        result => {console.log("Saved!");
        this.router.navigate(['/nhanvien']);
      },
        error => console.error(error)
      )
    }else{
      this.nhanvienservices.update_nv(this.chitiet_NV).subscribe(
        result => {console.log("Updated!");
        this.router.navigate(['/nhanvien']);
      },
        error => console.error(error)
      )
    }
  }

}
