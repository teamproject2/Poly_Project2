import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormsModule, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';

declare var jquery: any;
declare var $: any;

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
    id: '',
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
    private formBuilder: FormBuilder,
    private _vcr: ViewContainerRef,
    private toastr: ToastsManager
  ) { this.toastr.setRootViewContainerRef(_vcr); }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    // console.log("ID: "+ this.id);
    if (this.id != 0) {
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
      this.chitiet_NV.id = val.idNv.length > 0 ? val.idNv : this.chitiet_NV.id;
      this.chitiet_NV.tenNhanVien = val.hoTen.length > 0 ? val.hoTen : this.chitiet_NV.tenNhanVien;
      this.chitiet_NV.gioiTinh = val.gioiTinh.length > 0 ? val.gioiTinh : this.chitiet_NV.gioiTinh;;
      this.chitiet_NV.diaChi = val.diaChi.length > 0 ? val.diaChi : this.chitiet_NV.diaChi;
      this.chitiet_NV.email = val.email.length > 0 ? val.email : this.chitiet_NV.email;
      this.chitiet_NV.ngaySinh = val.ngaySinh.length > 0 ? val.ngaySinh : this.chitiet_NV.ngaySinh;
      this.chitiet_NV.soDienThoai = val.soDienThoai.length > 0 ? val.soDienThoai : this.chitiet_NV.soDienThoai;
    });
  }
  //
  saveNhanvien() {
    if (this.id == 0) {
      this.nhanvienservices.insert_Nv(this.chitiet_NV).subscribe(
        result => {
          this.removeModal();
          this.toastr.success('Thêm mới nhân viên thành công!');
          setTimeout(() => {
            this.router.navigate(['/index/nhanvien']);
          }, 1500);
        },
        error => console.error(error)
      )
    } else {
      this.nhanvienservices.update_nv(this.chitiet_NV).subscribe(
        result => {
          this.removeModal();
          this.toastr.success('Cập nhật nhân viên thành công!');
          setTimeout(() => {
            this.router.navigate(['/index/nhanvien']);
          }, 1500);
        },
        error => console.error(error)
      )
    }
  }

  //
  showModal(p: number) {
    this.id = p;
    $(document).ready(function () {
      $('.modal1').addClass('show');
      $('.modal-wrapper').addClass('show');
    });
  }

  removeModal() {
    $(document).ready(function () {
      $('.modal1').removeClass('show');
      $('.modal-wrapper').removeClass('show');
    });
  }
  //
}
