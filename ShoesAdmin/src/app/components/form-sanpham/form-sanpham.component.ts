import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { LoaigiayService } from '../../services/loaigiay.service';
import { LoaiGiay } from '../../models/loaiGiay';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { SanphamService } from '../../services/sanpham.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Sanpham } from '../../models/sanpham';

// jquyery phan trang
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-form-sanpham',
  templateUrl: './form-sanpham.component.html',
  styleUrls: ['./form-sanpham.component.css']
})
export class FormSanphamComponent implements OnInit {

  id: number = 0;

  public listgiay: LoaiGiay[] = [];
  selectedTenLoai: string;
  //

  pattern = /^[0-9]+$/;
  patternString = /^[^0-9@#$%&*.,/]{5,}$/;

  dataPro: Sanpham;

  chitietSanpham: FormGroup;
  tenSanPham: FormControl;
  donGia: FormControl;
  chietKhau: FormControl;
  loaiGiay: FormControl;
  chiTiet: FormControl;

  constructor(
    private loaigiayservice: LoaigiayService,
    private fb: FormBuilder,
    private _vcr: ViewContainerRef,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastsManager,
    private sanphamService: SanphamService
  ) {
    this.toastr.setRootViewContainerRef(_vcr)

    this.tenSanPham = new FormControl('', [Validators.required, Validators.pattern(this.patternString)]);
    this.donGia = new FormControl('', [Validators.required, Validators.pattern(this.pattern)]);
    this.chietKhau = new FormControl('', [Validators.pattern(this.pattern),Validators.maxLength(2)]);
    this.chiTiet = new FormControl('', [Validators.required, Validators.pattern(this.patternString)]);

    this.chitietSanpham = this.fb.group({
      tenSanPham: this.tenSanPham,
      donGia: this.donGia,
      loaiGiay: this.loaiGiay,
      chietKhau: this.chietKhau,
      chiTiet: this.chiTiet
    })
  };

  ngOnInit() {
    this.getLoaigiay();
    this.id = this.route.snapshot.params['id'];
  }

  // Lay tat ca loai giay
  getLoaigiay() {
    this.loaigiayservice.getLoaiGiay().subscribe(data => {
      this.listgiay = data;
    }, error => {
      console.log(error);
    });
  }
  //
  showModal() {
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
  saveSanphamInsert() {
    // if (this.selectedTenLoai == 'none') {
    //   alert('Select LG');
      let object = {
        tenSanPham: this.chitietSanpham.controls.tenSanPham.value,
        loaiGiayId: this.chitietSanpham.controls.loaiGiay.value,
        donGia: this.chitietSanpham.controls.donGia.value,
        chietKhau: this.chitietSanpham.controls.chietKhau.value,
        chiTiet: this.chitietSanpham.controls.chiTiet.value
      };
      console.log (object);
      object.chietKhau = eval(object.chietKhau) / 100;
      this.sanphamService.insert_Sp(object).subscribe(
        result => {

          this.removeModal();
          this.toastr.success('Thêm mới sản phẩm thành công!');
          setTimeout(() => {
            this.router.navigate(['/index/sanpham']);
          }, 1500);
        },
        error => console.error(error)
      )

  }

}